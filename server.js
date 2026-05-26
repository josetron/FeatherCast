const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const root = __dirname;
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "FeatherCast-App/1.0" } }, (response) => {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          resolve(fetchText(response.headers.location));
          return;
        }
        let body = "";
        response.setEncoding("utf8");
        response.on("data", (chunk) => {
          body += chunk;
        });
        response.on("end", () => resolve(body));
      })
      .on("error", reject);
  });
}

function textFromHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function parseCount(text, patterns) {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return Number(match[1].replace(/,/g, ""));
  }
  return null;
}

function parseText(text, patterns) {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[1].trim();
  }
  return "";
}

async function handleBirdcast(requestUrl, response) {
  const region = requestUrl.searchParams.get("region");
  if (!/^US-[A-Z]{2}-\d{3}$/.test(region || "")) {
    response.writeHead(400, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Invalid BirdCast region" }));
    return;
  }

  try {
    const html = await fetchText(`https://dashboard.birdcast.org/region/${region}`);
    const text = textFromHtml(html);
    const birdsCrossed = parseCount(text, [
      /([\d,.]+)\s+Birds have crossed/i,
      /([\d,.]+)\s+Birds crossed .* last night/i,
    ]);
    const birdsInFlight = parseCount(text, [
      /([\d,.]+)\s+Birds now in flight/i,
      /([\d,.]+)\s+Birds in flight/i,
    ]);
    const startTime = parseText(text, [/Starting:\s*(.+)/i]);
    const direction = parseText(text, [/Direction:\s*(.+)/i]);
    const speed = parseText(text, [/Speed:\s*(.+)/i]);
    const altitude = parseText(text, [/Altitude:\s*(.+)/i]);
    const recorded = parseText(text, [/Recorded:\s*(.+)/i]);
    const crossedLevel = parseText(text, [
      /Birds have crossed[^.]*\(est\.\)\s*(Low|Medium|High)\b/i,
      /Birds crossed[^.]*last night[^.]*\(est\.\)\s*(Low|Medium|High)\b/i,
    ]);
    const inFlightLevel = parseText(text, [
      /Birds now in flight[^.]*\(est\.\)\s*(Low|Medium|High)\b/i,
      /Birds in flight[^.]*\(est\.\)\s*(Low|Medium|High)\b/i,
    ]);

    if (!Number.isFinite(birdsCrossed) || !Number.isFinite(birdsInFlight)) {
      throw new Error("BirdCast values not found");
    }

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({
      birdsCrossed,
      birdsInFlight,
      startTime,
      direction,
      speed,
      altitude,
      recorded,
      crossedLevel,
      inFlightLevel,
    }));
  } catch (error) {
    response.writeHead(502, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: error.message }));
  }
}

async function handleSpeciesStatus(requestUrl, response) {
  const code = requestUrl.searchParams.get("code");
  if (!/^[a-z0-9]+$/i.test(code || "")) {
    response.writeHead(400, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Invalid species code" }));
    return;
  }

  try {
    const pageUrls = [
      `https://ebird.org/species/${encodeURIComponent(code)}`,
      `https://r.jina.ai/http://ebird.org/species/${encodeURIComponent(code)}`,
    ];
    let match = null;
    for (const url of pageUrls) {
      try {
        const pageText = await fetchText(url);
        match = pageText.match(/\b(CR|EN|VU|NT|LC|DD|NE)\b(?:\s|[^a-z]){0,20}(Critically Endangered|Endangered|Vulnerable|Near Threatened|Least Concern|Data Deficient|Not Evaluated)\b/i)
          || pageText.match(/\b(Critically Endangered|Endangered|Vulnerable|Near Threatened|Least Concern|Data Deficient|Not Evaluated)\b/i);
        if (match) break;
      } catch {
        // Try the fallback source below.
      }
    }
    if (!match) throw new Error("Species status unavailable");
    let codeValue = "";
    let label = "";
    if (match?.length === 3) {
      [, codeValue, label] = match;
    } else if (match?.[1]) {
      label = match[1];
      const codes = {
        "Critically Endangered": "CR",
        Endangered: "EN",
        Vulnerable: "VU",
        "Near Threatened": "NT",
        "Least Concern": "LC",
        "Data Deficient": "DD",
        "Not Evaluated": "NE",
      };
      codeValue = codes[label] || "";
    }
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ code: codeValue, label }));
  } catch (error) {
    response.writeHead(502, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: error.message, code: "", label: "" }));
  }
}

function parseLocationRegion(data) {
  const stateMap = {
    "01": ["AL", "Alabama"],
    "02": ["AK", "Alaska"],
    "04": ["AZ", "Arizona"],
    "05": ["AR", "Arkansas"],
    "06": ["CA", "California"],
    "08": ["CO", "Colorado"],
    "09": ["CT", "Connecticut"],
    "10": ["DE", "Delaware"],
    "11": ["DC", "District of Columbia"],
    "12": ["FL", "Florida"],
    "13": ["GA", "Georgia"],
    "15": ["HI", "Hawaii"],
    "16": ["ID", "Idaho"],
    "17": ["IL", "Illinois"],
    "18": ["IN", "Indiana"],
    "19": ["IA", "Iowa"],
    "20": ["KS", "Kansas"],
    "21": ["KY", "Kentucky"],
    "22": ["LA", "Louisiana"],
    "23": ["ME", "Maine"],
    "24": ["MD", "Maryland"],
    "25": ["MA", "Massachusetts"],
    "26": ["MI", "Michigan"],
    "27": ["MN", "Minnesota"],
    "28": ["MS", "Mississippi"],
    "29": ["MO", "Missouri"],
    "30": ["MT", "Montana"],
    "31": ["NE", "Nebraska"],
    "32": ["NV", "Nevada"],
    "33": ["NH", "New Hampshire"],
    "34": ["NJ", "New Jersey"],
    "35": ["NM", "New Mexico"],
    "36": ["NY", "New York"],
    "37": ["NC", "North Carolina"],
    "38": ["ND", "North Dakota"],
    "39": ["OH", "Ohio"],
    "40": ["OK", "Oklahoma"],
    "41": ["OR", "Oregon"],
    "42": ["PA", "Pennsylvania"],
    "44": ["RI", "Rhode Island"],
    "45": ["SC", "South Carolina"],
    "46": ["SD", "South Dakota"],
    "47": ["TN", "Tennessee"],
    "48": ["TX", "Texas"],
    "49": ["UT", "Utah"],
    "50": ["VT", "Vermont"],
    "51": ["VA", "Virginia"],
    "53": ["WA", "Washington"],
    "54": ["WV", "West Virginia"],
    "55": ["WI", "Wisconsin"],
    "56": ["WY", "Wyoming"],
  };
  const county = data?.result?.geographies?.Counties?.[0];
  const state = stateMap[county?.STATE];
  if (!county || !state) return null;
  const name = county.NAME || "";
  const suffix = /\b(County|Parish|Borough|Census Area|Municipality|Municipio)\b/i.test(name) ? "" : " County";
  return {
    countyName: `${name}${suffix}`,
    countyFips: county.COUNTY,
    stateAbbr: state[0],
    stateName: state[1],
    ebirdCode: `US-${state[0]}-${county.COUNTY}`,
  };
}

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
    matches.find((item) =>
      item.country_code === selectedCountry
    );

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
      return itemCountry === selectedCountry &&
        (itemState === selectedState || !selectedState);
    }) ||
    matches.find((item) => {
      const address = item.address || {};
      const itemCountry = String(address.country_code || "").toLowerCase();
      return itemCountry === selectedCountry;
    });

  if (!match) return null;
  return {
    label: match.display_name || "",
    lat: Number(match.lat),
    lng: Number(match.lon),
  };
}

async function handleHotspotLocation(requestUrl, response) {
  const query = String(requestUrl.searchParams.get("q") || "").trim();
  const cityName = String(requestUrl.searchParams.get("city") || "").trim();
  const countyName = String(requestUrl.searchParams.get("county") || "").trim();
  const stateName = String(requestUrl.searchParams.get("state") || "").trim();
  const countryCode = String(requestUrl.searchParams.get("country") || "US").trim().toUpperCase();

  if (!query || !countyName || !stateName) {
    response.writeHead(400, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Enter a city or street inside the selected county." }));
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
      const addressLocation = parseCensusAddressLocation(JSON.parse(await fetchText(addressUrl.href)), countyName);
      if (addressLocation) {
        location = {
          ...addressLocation,
          label: addressLocation.label || `${query}, ${countyName}, ${stateName}`,
          source: "street",
        };
      }
    } catch {
      // Census geocoder failed or timed out, try fallback.
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
      const osmData = JSON.parse(await fetchText(osmUrl.href));
      const osmLocation = parseNominatimSearchLocation(osmData, countyName, stateName, countryCode);
      if (osmLocation) {
        location = {
          ...osmLocation,
          source: "street",
        };
      }
    } catch {
      // Nominatim search failed, fallback to city search.
    }
  }

  if (location) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(location));
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
    const cityLocation = parseOpenMeteoLocation(JSON.parse(await fetchText(cityUrl.href)), query, countyName, stateName, countryCode);
    if (!cityLocation) throw new Error(`Could not find ${query} inside ${countyName}, ${stateName}.`);

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ ...cityLocation, source: "city" }));
  } catch (error) {
    response.writeHead(502, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: error.message || "Could not search that location." }));
  }
}

async function handleLocationRegion(requestUrl, response) {
  const lat = Number(requestUrl.searchParams.get("lat"));
  const lon = Number(requestUrl.searchParams.get("lon"));

  if (!Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) {
    response.writeHead(400, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: "Invalid location." }));
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
    const location = parseLocationRegion(JSON.parse(await fetchText(url.href)));
    if (!location) throw new Error("Could not match this location to a US county.");

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(location));
  } catch (error) {
    response.writeHead(502, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ error: error.message || "Could not detect county." }));
  }
}

function serveStatic(requestUrl, response) {
  const pathname = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const filePath = path.join(root, decodeURIComponent(pathname));
  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    response.writeHead(200, {
      "Content-Type": contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
    });
    response.end(data);
  });
}

http
  .createServer(async (request, response) => {
    const requestUrl = new URL(request.url, `http://${request.headers.host}`);
    if (requestUrl.pathname === "/api/birdcast") {
      await handleBirdcast(requestUrl, response);
      return;
    }
    if (requestUrl.pathname === "/api/species-status") {
      await handleSpeciesStatus(requestUrl, response);
      return;
    }
    if (requestUrl.pathname === "/api/location-region") {
      await handleLocationRegion(requestUrl, response);
      return;
    }
    if (requestUrl.pathname === "/api/hotspot-location") {
      await handleHotspotLocation(requestUrl, response);
      return;
    }
    serveStatic(requestUrl, response);
  })
  .listen(port, () => {
    console.log(`Bird dashboard running at http://localhost:${port}`);
  });
