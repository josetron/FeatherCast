const stateFipsByAbbr = {
  AL: "01", AK: "02", AZ: "04", AR: "05", CA: "06", CO: "08", CT: "09", DE: "10", DC: "11",
  FL: "12", GA: "13", HI: "15", ID: "16", IL: "17", IN: "18", IA: "19", KS: "20", KY: "21",
  LA: "22", ME: "23", MD: "24", MA: "25", MI: "26", MN: "27", MS: "28", MO: "29", MT: "30",
  NE: "31", NV: "32", NH: "33", NJ: "34", NM: "35", NY: "36", NC: "37", ND: "38", OH: "39",
  OK: "40", OR: "41", PA: "42", RI: "44", SC: "45", SD: "46", TN: "47", TX: "48", UT: "49",
  VT: "50", VA: "51", WA: "53", WV: "54", WI: "55", WY: "56",
};

function cleanPlaceName(name, isBaseName = false) {
  if (isBaseName) return String(name || "").trim();
  return String(name || "")
    .replace(/\s+(city|town|village|borough|municipality)$/i, "")
    .trim();
}

async function queryTigerJson(url, params) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(params),
  });
  if (!response.ok) throw new Error("Census place lookup unavailable.");
  const data = await response.json();
  if (data.error) throw new Error(data.error.message || "Census place lookup unavailable.");
  return data;
}

async function queryCountyPlaceLayer(countyGeometry, stateFips, layerId) {
  const placeData = await queryTigerJson(
    `https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Places_CouSub_ConCity_SubMCD/MapServer/${layerId}/query`,
    {
      f: "json",
      geometry: JSON.stringify(countyGeometry),
      geometryType: "esriGeometryPolygon",
      inSR: "4326",
      spatialRel: "esriSpatialRelIntersects",
      outFields: "BASENAME,NAME,STATE",
      returnGeometry: "false",
      orderByFields: "BASENAME",
    },
  );

  return (placeData.features || [])
    .filter((feature) => String(feature.attributes?.STATE || "") === stateFips)
    .map((feature) =>
      feature.attributes?.BASENAME
        ? cleanPlaceName(feature.attributes.BASENAME, true)
        : cleanPlaceName(feature.attributes?.NAME)
    )
    .filter((name) => name && !/\d|^-|,/.test(name));
}

export default async function handler(request, response) {
  const regionCode = String(request.query.region || "").trim().toUpperCase();
  const match = regionCode.match(/^US-([A-Z]{2})-(\d{3})$/);
  if (!match) {
    response.status(400).json({ error: "Choose a US county first.", cities: [] });
    return;
  }

  const [, stateAbbr, countyFips] = match;
  const stateFips = stateFipsByAbbr[stateAbbr];
  if (!stateFips) {
    response.status(400).json({ error: "Unsupported state.", cities: [] });
    return;
  }

  try {
    let countyData = await queryTigerJson(
      "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1/query",
      {
        f: "json",
        where: `GEOID='${stateFips}${countyFips}'`,
        outFields: "GEOID,NAME",
        returnGeometry: "true",
        outSR: "4326",
      },
    );
    let countyGeometry = countyData.features?.[0]?.geometry;
    let is2020 = false;
    if (!countyGeometry) {
      countyData = await queryTigerJson(
        "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/55/query",
        {
          f: "json",
          where: `GEOID='${stateFips}${countyFips}'`,
          outFields: "GEOID,NAME",
          returnGeometry: "true",
          outSR: "4326",
        },
      );
      countyGeometry = countyData.features?.[0]?.geometry;
      is2020 = true;
    }
    if (!countyGeometry) throw new Error("County boundary not found.");

    const [incorporatedPlaces, censusDesignatedPlaces] = await Promise.all([
      queryCountyPlaceLayer(countyGeometry, stateFips, is2020 ? 25 : 4),
      queryCountyPlaceLayer(countyGeometry, stateFips, is2020 ? 26 : 5),
    ]);
    const cities = [...new Set([...incorporatedPlaces, ...censusDesignatedPlaces])]
      .sort((a, b) => a.localeCompare(b));

    response.status(200).json({ cities, sources: { incorporated: incorporatedPlaces.length, designated: censusDesignatedPlaces.length } });
  } catch (error) {
    response.status(502).json({ error: error.message || "Could not load cities.", cities: [] });
  }
}
