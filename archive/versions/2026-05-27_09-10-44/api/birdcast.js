function parseCount(text, patterns) {
  for (const pattern of patterns) {
    const match = String(text || "").match(pattern);
    if (match) return Number(match[1].replace(/,/g, ""));
  }
  return null;
}

function parseText(text, patterns) {
  for (const pattern of patterns) {
    const match = String(text || "").match(pattern);
    if (match) return match[1].trim();
  }
  return "";
}

export default async function handler(request, response) {
  const region = request.query.region;

  if (!/^US-[A-Z]{2}-\d{3}$/.test(region || "")) {
    response.status(400).json({ error: "Invalid BirdCast region" });
    return;
  }

  try {
    const birdcastResponse = await fetch(
      `https://r.jina.ai/http://dashboard.birdcast.org/region/${region}`,
    );

    if (!birdcastResponse.ok) {
      throw new Error("BirdCast unavailable");
    }

    const text = await birdcastResponse.text();
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
      throw new Error("BirdCast values missing");
    }

    response.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    response.status(200).json({
      birdsCrossed,
      birdsInFlight,
      startTime,
      direction,
      speed,
      altitude,
      recorded,
      crossedLevel,
      inFlightLevel,
    });
  } catch (error) {
    response.status(502).json({ error: error.message });
  }
}
