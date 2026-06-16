export default async function handler(request, response) {
  const name = String(request.query.name || "").trim();

  if (!name || name.length > 120) {
    response.status(400).json({ error: "Invalid species name" });
    return;
  }

  try {
    const getSummaryPhoto = async (title) => {
      const wikiResponse = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
      );
      if (!wikiResponse.ok) return "";
      const summary = await wikiResponse.json();
      return summary.thumbnail?.source || "";
    };

    const exactUrl = await getSummaryPhoto(name);
    let url = exactUrl;

    if (!url) {
      const searchResponse = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(
          `${name} bird`,
        )}&srlimit=5&format=json&origin=*`,
      );
      if (!searchResponse.ok) throw new Error("No species photo");
      const search = await searchResponse.json();
      const titles = (search.query?.search || []).map((result) => result.title);

      for (const title of titles) {
        url = await getSummaryPhoto(title);
        if (url) break;
      }
    }

    response.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate=604800");
    response.status(200).json({ url });
  } catch (error) {
    response.status(404).json({ error: error.message, url: "" });
  }
}
