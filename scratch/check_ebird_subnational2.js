const EBIRD_API_TOKEN = "t5u69cnbuf6h";

async function fetchEbirdJson(path, token) {
  const separator = path.includes("?") ? "&" : "?";
  const response = await fetch(`https://api.ebird.org/v2/${path}${separator}key=${encodeURIComponent(token)}`);
  return response.json();
}

async function run() {
  const testRegions = ["CO-ANT", "CA-NS"];
  for (const reg of testRegions) {
    try {
      console.log(`Fetching subnational2 regions for ${reg}...`);
      const list = await fetchEbirdJson(`ref/region/list/subnational2/${reg}`, EBIRD_API_TOKEN);
      console.log(`  => SUCCESS! Found ${list.length} subdivisions. First 5:`);
      console.log(list.slice(0, 5));
    } catch (e) {
      console.error(`  => Failed for ${reg}:`, e.message);
    }
  }
}

run();
