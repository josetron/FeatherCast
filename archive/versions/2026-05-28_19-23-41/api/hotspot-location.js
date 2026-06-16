function normalizeCountyName(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/\b(county|parish|borough|municipio|city and borough|census area)\b/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function parseCensusAddressLocation(data, countyName) {
  const selectedCounty = normalizeCountyName(countyName);
  const matches = data?.result?.addressMatches || [];
  const match = matches.find((item) => {
    const county = item.geographies?.Counties?.[0]?.NAME || "";
    return !selectedCounty || normalizeCountyName(county) === selectedCounty;
  }) || matches[0];
  const coordinates = match?.coordinates;
  if (!coordinates || !Number.isFinite(Number(coordinates.y)) || !Number.isFinite(Number(coordinates.x))) {
    return null;
  }
  return {
    label: match.matchedAddress || "",
    lat: Number(coordinates.y),
    lng: Number(coordinates.x),
  };
}

function parseOpenMeteoLocation(data, query, countyName, stateName, countryCode) {
  const matches = Array.isArray(data?.results) ? data.results : [];
  const selectedCounty = normalizeCountyName(countyName);
  const selectedState = String(stateName || "").toLowerCase();
  const selectedCountry = String(countryCode || "US").toUpperCase();
  const match =
    matches.find((item) =>
      item.country_code === selectedCountry &&
      String(item.admin1 || "").toLowerCase() === selectedState &&
      normalizeCountyName(item.admin2 || "") === selectedCounty,
    ) ||
    matches.find((item) =>
      item.country_code === selectedCountry &&
      String(item.admin1 || "").toLowerCase() === selectedState,
    ) ||
    matches.find((item) => item.country_code === selectedCountry);
  if (!match) return null;
  return {
    label: `${match.name}${match.admin1 ? `, ${match.admin1}` : ""}, ${stateName}`,
    lat: Number(match.latitude),
    lng: Number(match.longitude),
  };
}

function parseNominatimSearchLocation(data, countyName, stateName, countryCode) {
  const matches = Array.isArray(data) ? data : [];
  const selectedCounty = normalizeCountyName(countyName);
  const selectedState = String(stateName || "").toLowerCase();
  const selectedCountry = String(countryCode || "US").toLowerCase();
  const match =
    matches.find((item) => {
      const address = item.address || {};
      const itemState = String(address.state || "").toLowerCase();
      const itemCounty = normalizeCountyName(address.county || address.state_district || address.region);
      const itemCountry = String(address.country_code || "").toLowerCase();
      return itemCountry === selectedCountry &&
        (itemState === selectedState || !selectedState) &&
        (!selectedCounty || itemCounty === selectedCounty);
    }) ||
    matches.find((item) => {
      const address = item.address || {};
      const itemState = String(address.state || "").toLowerCase();
      const itemCountry = String(address.country_code || "").toLowerCase();
      return itemCountry === selectedCountry && (itemState === selectedState || !selectedState);
    }) ||
    matches.find((item) => {
      const address = item.address || {};
      return String(address.country_code || "").toLowerCase() === selectedCountry;
    });
  if (!match) return null;
  return {
    label: match.display_name || "",
    lat: Number(match.lat),
    lng: Number(match.lon),
  };
}

export default async function handler(request, response) {
  const query = String(request.query.q || "").trim();
  const cityName = String(request.query.city || "").trim();
  const countyName = String(request.query.county || "").trim();
  const stateName = String(request.query.state || "").trim();
  const countryCode = String(request.query.country || "US").trim().toUpperCase();

  if (!query || !countyName || !stateName) {
    response.status(400).json({ error: "Enter a city or street inside the selected county." });
    return;
  }

  let location = null;

  if (countryCode === "US") {
    try {
      const addressUrl = new URL("https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress");
      addressUrl.search = new URLSearchParams({
        address: [query, cityName, countyName, stateName].filter(Boolean).join(", "),
        benchmark: "Public_AR_Current",
        vintage: "Current_Current",
        format: "json",
      }).toString();
      const addressResponse = await fetch(addressUrl);
      if (addressResponse.ok) {
        const addressLocation = parseCensusAddressLocation(await addressResponse.json(), countyName);
        if (addressLocation) {
          location = {
            ...addressLocation,
            label: addressLocation.label || [query, cityName, countyName, stateName].filter(Boolean).join(", "),
            source: "street",
          };
        }
      }
    } catch {
      // Census failed; try OpenStreetMap, then city lookup.
    }
  }

  if (!location) {
    try {
      const osmUrl = new URL("https://nominatim.openstreetmap.org/search");
      osmUrl.search = new URLSearchParams({
        q: [query, cityName, countyName, stateName].filter(Boolean).join(", "),
        format: "json",
        addressdetails: "1",
      }).toString();
      const osmResponse = await fetch(osmUrl, { headers: { "User-Agent": "FeatherCast-App/1.0" } });
      if (osmResponse.ok) {
        const osmLocation = parseNominatimSearchLocation(await osmResponse.json(), countyName, stateName, countryCode);
        if (osmLocation) location = { ...osmLocation, source: "street" };
      }
    } catch {
      // OSM failed; try city lookup.
    }
  }

  if (location) {
    response.status(200).json(location);
    return;
  }

  try {
    const cityUrl = new URL("https://geocoding-api.open-meteo.com/v1/search");
    cityUrl.search = new URLSearchParams({
      name: query,
      count: "10",
      language: "en",
      format: "json",
    }).toString();
    const cityResponse = await fetch(cityUrl);
    if (!cityResponse.ok) throw new Error("Location search is unavailable right now.");
    const cityLocation = parseOpenMeteoLocation(await cityResponse.json(), query, countyName, stateName, countryCode);
    if (!cityLocation) throw new Error(`Could not find ${query} inside ${countyName}, ${stateName}.`);

    response.status(200).json({ ...cityLocation, source: "city" });
  } catch (error) {
    response.status(502).json({ error: error.message || "Could not search that location." });
  }
}
