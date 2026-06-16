export default async function handler(request, response) {
  const code = String(request.query.code || "").trim();

  if (!/^[a-z0-9]+$/i.test(code)) {
    response.status(400).json({ error: "Invalid species code" });
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
        const pageResponse = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
        if (!pageResponse.ok) continue;
        const pageText = await pageResponse.text();
        match = pageText.match(/\b(CR|EN|VU|NT|LC|DD|NE)\b(?:\s|[^a-z]){0,20}(Critically Endangered|Endangered|Vulnerable|Near Threatened|Least Concern|Data Deficient|Not Evaluated)\b/i)
          || pageText.match(/\b(Critically Endangered|Endangered|Vulnerable|Near Threatened|Least Concern|Data Deficient|Not Evaluated)\b/i);
        if (match) break;
      } catch {
        // Try the next source.
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

    response.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate=604800");
    response.status(200).json({ code: codeValue, label });
  } catch (error) {
    response.status(404).json({ error: error.message, code: "", label: "" });
  }
}
