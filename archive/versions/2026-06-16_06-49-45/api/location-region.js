const states = [
  ["01", "AL", "Alabama"],
  ["02", "AK", "Alaska"],
  ["04", "AZ", "Arizona"],
  ["05", "AR", "Arkansas"],
  ["06", "CA", "California"],
  ["08", "CO", "Colorado"],
  ["09", "CT", "Connecticut"],
  ["10", "DE", "Delaware"],
  ["11", "DC", "District of Columbia"],
  ["12", "FL", "Florida"],
  ["13", "GA", "Georgia"],
  ["15", "HI", "Hawaii"],
  ["16", "ID", "Idaho"],
  ["17", "IL", "Illinois"],
  ["18", "IN", "Indiana"],
  ["19", "IA", "Iowa"],
  ["20", "KS", "Kansas"],
  ["21", "KY", "Kentucky"],
  ["22", "LA", "Louisiana"],
  ["23", "ME", "Maine"],
  ["24", "MD", "Maryland"],
  ["25", "MA", "Massachusetts"],
  ["26", "MI", "Michigan"],
  ["27", "MN", "Minnesota"],
  ["28", "MS", "Mississippi"],
  ["29", "MO", "Missouri"],
  ["30", "MT", "Montana"],
  ["31", "NE", "Nebraska"],
  ["32", "NV", "Nevada"],
  ["33", "NH", "New Hampshire"],
  ["34", "NJ", "New Jersey"],
  ["35", "NM", "New Mexico"],
  ["36", "NY", "New York"],
  ["37", "NC", "North Carolina"],
  ["38", "ND", "North Dakota"],
  ["39", "OH", "Ohio"],
  ["40", "OK", "Oklahoma"],
  ["41", "OR", "Oregon"],
  ["42", "PA", "Pennsylvania"],
  ["44", "RI", "Rhode Island"],
  ["45", "SC", "South Carolina"],
  ["46", "SD", "South Dakota"],
  ["47", "TN", "Tennessee"],
  ["48", "TX", "Texas"],
  ["49", "UT", "Utah"],
  ["50", "VT", "Vermont"],
  ["51", "VA", "Virginia"],
  ["53", "WA", "Washington"],
  ["54", "WV", "West Virginia"],
  ["55", "WI", "Wisconsin"],
  ["56", "WY", "Wyoming"],
];

const stateByFips = new Map(states.map(([fips, abbr, name]) => [fips, { abbr, name }]));

function parseLocation(data) {
  const geographies = data?.result?.geographies || {};
  const county = geographies.Counties?.[0];
  const state = stateByFips.get(county?.STATE);
  if (!county || !state) return null;

  return {
    countyName: `${county.NAME} County`,
    countyFips: county.COUNTY,
    stateAbbr: state.abbr,
    stateName: state.name,
    ebirdCode: `US-${state.abbr}-${county.COUNTY}`,
  };
}

export default async function handler(request, response) {
  const lat = Number(request.query.lat);
  const lon = Number(request.query.lon);

  if (!Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) {
    response.status(400).json({ error: "Invalid location." });
    return;
  }

  try {
    const url = new URL("https://geocoding.geo.census.gov/geocoder/geographies/coordinates");
    url.search = new URLSearchParams({
      x: String(lon),
      y: String(lat),
      benchmark: "Public_AR_Current",
      vintage: "Current_Current",
      format: "json",
    }).toString();

    const censusResponse = await fetch(url);
    if (!censusResponse.ok) throw new Error("County lookup unavailable.");
    const location = parseLocation(await censusResponse.json());
    if (!location) throw new Error("Could not match this location to a US county.");

    response.status(200).json(location);
  } catch (error) {
    response.status(502).json({ error: error.message || "Could not detect county." });
  }
}
