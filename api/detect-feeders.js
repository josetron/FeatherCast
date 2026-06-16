import https from 'https';

const cache = new Map();
const CACHE_TTL = 12 * 60 * 60 * 1000; // 12 hours

export default async function handler(req, res) {
  // Support both serverless (Vercel-like) and local mock req objects
  const method = req.method;
  if (method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  // Parse query parameters
  const urlParams = req.query || {};
  let { south, west, north, east } = urlParams;

  // In case of a raw HTTP request mock, parse query from URL if not already done
  if (!south && req.url) {
    try {
      const parsedUrl = new URL(req.url, 'http://localhost');
      south = parsedUrl.searchParams.get('south');
      west = parsedUrl.searchParams.get('west');
      north = parsedUrl.searchParams.get('north');
      east = parsedUrl.searchParams.get('east');
    } catch {
      // Ignore
    }
  }

  const s = parseFloat(south);
  const w = parseFloat(west);
  const n = parseFloat(north);
  const e = parseFloat(east);

  if (isNaN(s) || isNaN(w) || isNaN(n) || isNaN(e)) {
    res.status(400).json({ error: 'Missing or invalid bounding box coordinates (south, west, north, east).' });
    return;
  }

  // Bounding box validation
  if (s < -90 || s > 90 || n < -90 || n > 90 || w < -180 || w > 180 || e < -180 || e > 180) {
    res.status(400).json({ error: 'Coordinates out of bounds.' });
    return;
  }

  // Generate cache key based on coordinates rounded to 1 decimal place (~10km precision)
  const cacheKey = `${s.toFixed(1)}_${w.toFixed(1)}_${n.toFixed(1)}_${e.toFixed(1)}`;
  const now = Date.now();
  if (cache.has(cacheKey)) {
    const cached = cache.get(cacheKey);
    if (now - cached.timestamp < CACHE_TTL) {
      res.setHeader('X-Cache', 'HIT');
      res.status(200).json(cached.data);
      return;
    } else {
      cache.delete(cacheKey);
    }
  }

  try {
    const data = await queryOverpass(s, w, n, e);
    cache.set(cacheKey, {
      timestamp: now,
      data
    });
    res.setHeader('X-Cache', 'MISS');
    res.status(200).json(data);
  } catch (error) {
    res.status(502).json({ error: `Overpass API lookup failed: ${error.message}` });
  }
}

function queryOverpass(south, west, north, east) {
  // Construct Overpass QL query searching for hides, feeders, nature/visitor centers
  const query = `[out:json][timeout:15];
(
  node(${south}, ${west}, ${north}, ${east})["man_made"="bird_feeder"];
  node(${south}, ${west}, ${north}, ${east})["leisure"="bird_hide"];
  node(${south}, ${west}, ${north}, ${east})["amenity"="feeding_place"];
  node(${south}, ${west}, ${north}, ${east})["tourism"="information"]["information"~"nature_centre|visitor_centre"];
  node(${south}, ${west}, ${north}, ${east})["name"~"Feeder|Bird Hide|Bird Blind|Feeding Station|Nature Center|Visitor Center|Bird Station|Birding Station|Wildlife Sanctuary|Bird Sanctuary|Audubon",i];
  way(${south}, ${west}, ${north}, ${east})["man_made"="bird_feeder"];
  way(${south}, ${west}, ${north}, ${east})["leisure"="bird_hide"];
  way(${south}, ${west}, ${north}, ${east})["tourism"="information"]["information"~"nature_centre|visitor_centre"];
  way(${south}, ${west}, ${north}, ${east})["name"~"Feeder|Bird Hide|Bird Blind|Feeding Station|Nature Center|Visitor Center|Bird Station|Birding Station|Wildlife Sanctuary|Bird Sanctuary|Audubon",i];
);
out tags center;`;

  const postData = "data=" + encodeURIComponent(query);
  
  const options = {
    hostname: 'overpass-api.de',
    port: 443,
    path: '/api/interpreter',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData),
      'User-Agent': 'FeatherCastApp/1.0'
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`Overpass returned status code ${res.statusCode}`));
          return;
        }
        try {
          const parsed = JSON.parse(body);
          const elements = parsed.elements || [];
          const features = elements.map(el => {
            const lat = el.lat || el.center?.lat;
            const lng = el.lon || el.center?.lng || el.center?.lon;
            const name = el.tags?.name || 'unnamed';
            const type = el.tags?.man_made === 'bird_feeder' ? 'feeder' :
                         el.tags?.leisure === 'bird_hide' ? 'hide' :
                         el.tags?.amenity === 'feeding_place' ? 'feeding_place' : 'center';
            return { lat, lng, name, type };
          }).filter(f => f.lat !== undefined && f.lng !== undefined);
          resolve(features);
        } catch (e) {
          reject(new Error(`JSON parsing failed: ${e.message}`));
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(postData);
    req.end();
  });
}
