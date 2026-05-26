const EBIRD_API_TOKEN = "t5u69cnbuf6h";

async function fetchEbirdJson(path, token) {
  const separator = path.includes("?") ? "&" : "?";
  const response = await fetch(`https://api.ebird.org/v2/${path}${separator}key=${encodeURIComponent(token)}`);
  return response.json();
}

function extractSubdivisionsFromHotspots(hotspots) {
  const subdivisions = new Set();
  hotspots.forEach(h => {
    const name = h.locName || h.name || "";
    
    // Pattern 1: Name--Detail
    if (name.includes("--")) {
      const part = name.split("--")[0].trim();
      if (part && part.length > 2 && part.length < 30 && !/\b(AICA|Aeras|Reserva|Parque|Río|Quebrada|Finca|Vía|Sendero|Carretera)\b/i.test(part)) {
        subdivisions.add(part);
      }
    }
    // Pattern 2: Name, Detail
    if (name.includes(",")) {
      const parts = name.split(",");
      parts.forEach(part => {
        const clean = part.trim().replace(/\s*\(.*\)/g, "");
        if (clean && clean.length > 2 && clean.length < 25 && /^[A-Z]/.test(clean) && !/\b(AICA|Reserva|Parque|Río|Quebrada|Finca|Vía|Sendero|Carretera|Airport|Aeropuerto|Hotel|Lodge|Trails|Road|Rd|Highway|Woods|Walmart|Pueblo|Laguna|Volcan)\b/i.test(clean)) {
          subdivisions.add(clean);
        }
      });
    }
    // Pattern 3: Name - Detail
    if (name.includes(" - ")) {
      const parts = name.split(" - ");
      parts.forEach(part => {
        const clean = part.trim().replace(/\s*\(.*\)/g, "");
        if (clean && clean.length > 2 && clean.length < 25 && /^[A-Z]/.test(clean) && !/\b(AICA|Reserva|Parque|Río|Quebrada|Finca|Vía|Sendero|Carretera|Airport|Aeropuerto|Hotel|Lodge|Trails|Road|Rd|Highway|Woods|Walmart|Pueblo|Laguna|Volcan)\b/i.test(clean)) {
          subdivisions.add(clean);
        }
      });
    }
  });
  return [...subdivisions].sort((a, b) => a.localeCompare(b));
}

async function run() {
  try {
    const co = await fetchEbirdJson("ref/hotspot/CO-ANT?fmt=json", EBIRD_API_TOKEN);
    const coCities = extractSubdivisionsFromHotspots(co);
    console.log(`Colombia (CO-ANT) - Extracted ${coCities.length} subdivisions:`);
    console.log(coCities.slice(0, 30));

    const cr = await fetchEbirdJson("ref/hotspot/CR-A?fmt=json", EBIRD_API_TOKEN);
    const crCities = extractSubdivisionsFromHotspots(cr);
    console.log(`\nCosta Rica (CR-A) - Extracted ${crCities.length} subdivisions:`);
    console.log(crCities.slice(0, 30));
  } catch (e) {
    console.error(e);
  }
}

run();
