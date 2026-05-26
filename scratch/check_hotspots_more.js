const EBIRD_API_TOKEN = "t5u69cnbuf6h";

async function fetchEbirdJson(path, token) {
  const separator = path.includes("?") ? "&" : "?";
  const response = await fetch(`https://api.ebird.org/v2/${path}${separator}key=${encodeURIComponent(token)}`);
  return response.json();
}

async function run() {
  const testRegs = ["CR-A", "PA-CH"];
  for (const reg of testRegs) {
    try {
      const list = await fetchEbirdJson(`ref/hotspot/${reg}?fmt=json`, EBIRD_API_TOKEN);
      console.log(`Found ${list.length} hotspots in ${reg}. First 3 items:`);
      console.log(list.slice(0, 3));
    } catch (e) {
      console.error(`Error for ${reg}:`, e.message);
    }
  }
}

run();
