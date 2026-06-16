export default async function handler(request, response) {
  const name = String(request.query.name || "").trim();
  const scientificName = String(request.query.sciName || "").trim();
  const speciesCode = String(request.query.speciesCode || "").trim();
  const speciesPhotoSearchAliases = new Map(Object.entries({
    "alder flycatcher": ["Empidonax alnorum"],
    "baltimore oriole": ["Icterus galbula"],
    "barn swallow": ["Hirundo rustica"],
    "blue-black grosbeak": ["Cyanoloxia cyanoides"],
    "blackburnian warbler": ["Setophaga fusca"],
    "buff-rumped warbler": ["Parkesia motacilla"],
    "carmiol's tanager": ["Chlorothraupis carmioli", "Olive Tanager"],
    "chestnut-capped warbler": ["Basileuterus delattrii"],
    "common tody-flycatcher": ["Todirostrum cinereum"],
    "golden-hooded tanager": ["Stilpnia larvata"],
    "gray-capped flycatcher": ["Myiozetetes granadensis"],
    "hepatic tanager": ["Piranga flava"],
    "muscovy duck": ["Cairina moschata"],
    "northern tropical pewee": ["Contopus bogotensis", "Tropical Pewee"],
    "piratic flycatcher": ["Legatus leucophaius"],
    "red-throated ant-tanager": ["Habia fuscicauda"],
    "scarlet-rumped tanager": ["Ramphocelus passerinii"],
    "scaly-throated leaftosser": ["Sclerurus guatemalensis"],
    "silver-throated tanager": ["Tangara icterocephala"],
    "social flycatcher": ["Myiozetetes similis"],
    "striped owl": ["Asio clamator"],
    "tropical kingbird": ["Tyrannus melancholicus"],
  }));
  const speciesEbirdPhotoAssets = new Map(Object.entries({
    "blue-black grosbeak": "120030691",
    "bubgro1": "120030691",
    "chestnut-capped warbler": "348275571",
    "rucwar4": "348275571",
    "hepatic tanager": "297079701",
    "heptan": "297079701",
    "palm tanager": "146346831",
    "paltan1": "146346831",
    "crimson-collared tanager": "417141551",
    "crctan1": "417141551",
    "silver-throated tanager": "652767037",
    "sittan1": "652767037",
  }));

  if (!name || name.length > 120 || scientificName.length > 160 || speciesCode.length > 32) {
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
    const getWikipediaPageImage = async (title) => {
      const wikiResponse = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&piprop=thumbnail&pithumbsize=160&redirects=1&format=json&origin=*&titles=${encodeURIComponent(title)}`,
      );
      if (!wikiResponse.ok) return "";
      const data = await wikiResponse.json();
      const pages = Object.values(data.query?.pages || {});
      return pages.find((page) => page.thumbnail?.source)?.thumbnail?.source || "";
    };
    const searchWikipediaTitles = async (query) => {
      const searchResponse = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=6&format=json&origin=*`,
      );
      if (!searchResponse.ok) return [];
      const search = await searchResponse.json();
      return (search.query?.search || []).map((result) => result.title);
    };
    const searchCommonsPhoto = async (query) => {
      const commonsResponse = await fetch(
        `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url&iiurlwidth=160&format=json&origin=*`,
      );
      if (!commonsResponse.ok) return "";
      const data = await commonsResponse.json();
      const pages = Object.values(data.query?.pages || {});
      return pages.find((page) => page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url)?.imageinfo?.[0]?.thumburl ||
        pages.find((page) => page.imageinfo?.[0]?.url)?.imageinfo?.[0]?.url ||
        "";
    };
    const getKnownEbirdAssetPhoto = () => {
      const assetId = speciesEbirdPhotoAssets.get(name.toLowerCase()) ||
        (speciesCode ? speciesEbirdPhotoAssets.get(speciesCode) : "");
      return assetId ? `https://cdn.download.ams.birds.cornell.edu/api/v1/asset/${assetId}/320` : "";
    };
    const getEbirdSpeciesPhoto = async () => {
      if (!speciesCode || !/^[a-z0-9]+$/i.test(speciesCode)) return "";
      const pageUrls = [
        `https://r.jina.ai/http://ebird.org/species/${encodeURIComponent(speciesCode)}`,
        `https://ebird.org/species/${encodeURIComponent(speciesCode)}`,
      ];

      for (const pageUrl of pageUrls) {
        const ebirdResponse = await fetch(pageUrl);
        if (!ebirdResponse.ok) continue;
        const text = await ebirdResponse.text();
        const directAsset = text.match(/https:\/\/cdn\.download\.ams\.birds\.cornell\.edu\/api\/v1\/asset\/\d+(?:\/\d+)?/);
        if (directAsset?.[0]) return directAsset[0].replace(/\/\d+$/, "/320");
        const mediaAsset = text.match(/\bML(\d{5,})\b/);
        if (mediaAsset?.[1]) {
          return `https://cdn.download.ams.birds.cornell.edu/api/v1/asset/${mediaAsset[1]}/320`;
        }
      }

      return "";
    };

    const aliasTerms = speciesPhotoSearchAliases.get(name.toLowerCase()) || [];
    const exactTerms = Array.from(new Set([name, scientificName, ...aliasTerms].filter(Boolean)));
    let url = "";
    for (const term of exactTerms) {
      url = await getSummaryPhoto(term) || await getWikipediaPageImage(term);
      if (url) break;
    }

    if (!url) {
      const titles = [];
      for (const term of exactTerms) {
        titles.push(...(await searchWikipediaTitles(`${term} bird`)));
      }
      for (const title of titles) {
        url = await getSummaryPhoto(title) || await getWikipediaPageImage(title);
        if (url) break;
      }
    }
    if (!url) {
      for (const term of exactTerms) {
        url = await searchCommonsPhoto(`${term} bird`);
        if (url) break;
      }
    }
    if (!url) {
      url = getKnownEbirdAssetPhoto() || await getEbirdSpeciesPhoto();
    }

    response.setHeader(
      "Cache-Control",
      url ? "s-maxage=86400, stale-while-revalidate=604800" : "no-store",
    );
    response.status(200).json({ url });
  } catch (error) {
    response.setHeader("Cache-Control", "no-store");
    response.status(404).json({ error: error.message, url: "" });
  }
}
