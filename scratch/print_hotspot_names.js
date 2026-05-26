const EBIRD_API_TOKEN = "t5u69cnbuf6h";

async function fetchEbirdJson(path, token) {
  const separator = path.includes("?") ? "&" : "?";
  const response = await fetch(`https://api.ebird.org/v2/${path}${separator}key=${encodeURIComponent(token)}`);
  return response.json();
}

async function run() {
  try {
    const co = await fetchEbirdJson("ref/hotspot/CO-ANT?fmt=json", EBIRD_API_TOKEN);
    console.log("Colombia (CO-ANT) - 30 hotspot names:");
    console.log(co.slice(0, 30).map(h => h.locName));

    const cr = await fetchEbirdJson("ref/hotspot/CR-A?fmt=json", EBIRD_API_TOKEN);
    console.log("\nCosta Rica (CR-A) - 30 hotspot names:");
    console.log(cr.slice(0, 30).map(h => h.locName));
  } catch (e) {
    console.error(e);
  }
}

run();
