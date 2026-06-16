const EBIRD_API_TOKEN = "t5u69cnbuf6h";

const regions = {
  "US-TX-209": {
    name: "Hays County",
    state: "Texas",
    birdcastCode: "US-TX-209",
    ebirdCode: "US-TX-209",
    hotspots: [
      {
        name: "Blue Hole Regional Park",
        area: "Wimberley",
        habitat: "Riparian corridor, mature trees, water",
        base: 88,
        signal: "Excellent first-light stop when migrants need water and sheltered feeding.",
        species: ["Summer Tanager", "Yellow-throated Vireo", "Baltimore Oriole"],
      },
      {
        name: "Charro Ranch Park",
        area: "Dripping Springs",
        habitat: "Oak-juniper woodland, edges, native plantings",
        base: 84,
        signal: "Strong local option for warblers, tanagers, vireos, and mixed feeding flocks.",
        species: ["Nashville Warbler", "Painted Bunting", "White-eyed Vireo"],
      },
      {
        name: "Jacob's Well Natural Area",
        area: "Wimberley",
        habitat: "Spring-fed water, woodland, open edges",
        base: 80,
        signal: "Water and cover can concentrate tired migrants after a damp night.",
        species: ["Yellow-breasted Chat", "Orchard Oriole", "Indigo Bunting"],
      },
      {
        name: "Five Mile Dam Park",
        area: "San Marcos",
        habitat: "Blanco River, parkland, open water",
        base: 68,
        signal: "Good quick scan when birds are looking for water or open feeding edges.",
        species: ["Orchard Oriole", "Warbling Vireo", "Least Flycatcher"],
      },
    ],
  },
  "US-TX-453": {
    name: "Travis County",
    state: "Texas",
    birdcastCode: "US-TX-453",
    ebirdCode: "US-TX-453",
    hotspots: [
      {
        name: "Commons Ford Ranch Metropolitan Park",
        area: "Austin",
        habitat: "Lake edge, riparian woodland, grassland",
        base: 88,
        signal: "A strong migrant trap with water, woodland edge, and open feeding areas.",
        species: ["Nashville Warbler", "Baltimore Oriole", "Rose-breasted Grosbeak"],
      },
      {
        name: "Hornsby Bend",
        area: "Austin",
        habitat: "Ponds, river, fields, wetland edge",
        base: 86,
        signal: "Excellent for checking whether weather has concentrated birds near water.",
        species: ["Yellow Warbler", "Orchard Oriole", "Least Flycatcher"],
      },
      {
        name: "Barton Creek Greenbelt",
        area: "Austin",
        habitat: "Creek corridor, limestone canyon, mature canopy",
        base: 78,
        signal: "Sheltered canyon habitat can hold migrants after north winds or rain.",
        species: ["Summer Tanager", "White-eyed Vireo", "Black-and-white Warbler"],
      },
    ],
  },
  "US-TX-491": {
    name: "Williamson County",
    state: "Texas",
    birdcastCode: "US-TX-491",
    ebirdCode: "US-TX-491",
    hotspots: [
      {
        name: "Berry Springs Park and Preserve",
        area: "Georgetown",
        habitat: "Spring-fed water, woodland, open edges",
        base: 84,
        signal: "Water and mature trees can collect grounded migrants after frontal passage.",
        species: ["Summer Tanager", "Nashville Warbler", "Indigo Bunting"],
      },
      {
        name: "Lake Georgetown",
        area: "Georgetown",
        habitat: "Reservoir edge, oak woodland, trails",
        base: 76,
        signal: "A broad scan area when migration is county-wide rather than concentrated.",
        species: ["Yellow-throated Vireo", "Orchard Oriole", "Eastern Wood-Pewee"],
      },
      {
        name: "San Gabriel Park",
        area: "Georgetown",
        habitat: "River corridor, parkland, mature trees",
        base: 72,
        signal: "Quick accessible check for low-feeding migrants along water and shade.",
        species: ["Baltimore Oriole", "Warbling Vireo", "Yellow Warbler"],
      },
    ],
  },
  "US-TX-031": {
    name: "Blanco County",
    state: "Texas",
    birdcastCode: "US-TX-031",
    ebirdCode: "US-TX-031",
    hotspots: [
      {
        name: "Blanco State Park",
        area: "Blanco",
        habitat: "River, parkland, mature trees",
        base: 82,
        signal: "River habitat can concentrate tired migrants during damp frontal mornings.",
        species: ["Summer Tanager", "Baltimore Oriole", "Yellow-breasted Chat"],
      },
      {
        name: "Pedernales Falls State Park",
        area: "County edge",
        habitat: "River corridor, canyon woodland, grassland edges",
        base: 78,
        signal: "Large varied habitat makes it useful when the migration signal is broad.",
        species: ["Rose-breasted Grosbeak", "Eastern Wood-Pewee", "Blue Grosbeak"],
      },
    ],
  },
  "US-TX-091": {
    name: "Comal County",
    state: "Texas",
    birdcastCode: "US-TX-091",
    ebirdCode: "US-TX-091",
    hotspots: [
      {
        name: "Canyon Lake area",
        area: "Canyon Lake",
        habitat: "Lake edge, oak-juniper woodland, canyons",
        base: 78,
        signal: "Lake edges and sheltered canyons are worth scanning after headwinds.",
        species: ["Summer Tanager", "Painted Bunting", "Black-and-white Warbler"],
      },
      {
        name: "Guadalupe River State Park reach",
        area: "Comal / Kendall reach",
        habitat: "River corridor, mature riparian canopy",
        base: 82,
        signal: "Riparian cover and water can hold migrants after rain or front passage.",
        species: ["Yellow-throated Vireo", "Orchard Oriole", "Yellow Warbler"],
      },
    ],
  },
  "US-TX-029": {
    name: "Bexar County",
    state: "Texas",
    birdcastCode: "US-TX-029",
    ebirdCode: "US-TX-029",
    hotspots: [
      {
        name: "Mitchell Lake Audubon Center",
        area: "San Antonio",
        habitat: "Wetlands, ponds, woodland edge",
        base: 88,
        signal: "Water and varied edge habitat make this a strong post-front check.",
        species: ["Yellow Warbler", "Orchard Oriole", "Least Flycatcher"],
      },
      {
        name: "Friedrich Wilderness Park",
        area: "San Antonio",
        habitat: "Oak-juniper woodland, canyons, trails",
        base: 78,
        signal: "Sheltered woodland can hold migrants after north winds and rain.",
        species: ["Black-and-white Warbler", "Summer Tanager", "White-eyed Vireo"],
      },
      {
        name: "Phil Hardberger Park",
        area: "San Antonio",
        habitat: "Urban woodland, savanna, native plantings",
        base: 72,
        signal: "Good accessible migrant check when reports are scattered around the city.",
        species: ["Nashville Warbler", "Baltimore Oriole", "Indigo Bunting"],
      },
    ],
  },
};

const genericHotspots = [
  {
    name: "Best local eBird hotspot with water",
    area: "Your selected region",
    habitat: "River, creek, pond, lake edge, or wetland",
    base: 82,
    signal: "Start where tired migrants can drink, bathe, and feed in sheltered vegetation.",
    species: ["Warblers", "Orioles", "Tanagers"],
  },
  {
    name: "Mature woodland or riparian corridor",
    area: "Your selected region",
    habitat: "Large trees, understory, protected creek bottom",
    base: 78,
    signal: "Canopy and understory often hold grounded migrants after wind and rain.",
    species: ["Vireos", "Thrushes", "Flycatchers"],
  },
  {
    name: "Park edge with native plants",
    area: "Your selected region",
    habitat: "Woodland edge, flowering plants, berries, open feeding lanes",
    base: 70,
    signal: "Good second stop when birds are dispersed and feeding actively after sunrise.",
    species: ["Buntings", "Grosbeaks", "Chats"],
  },
];

const states = [
  { name: "Alabama", abbr: "AL", fips: "01" },
  { name: "Alaska", abbr: "AK", fips: "02" },
  { name: "Arizona", abbr: "AZ", fips: "04" },
  { name: "Arkansas", abbr: "AR", fips: "05" },
  { name: "California", abbr: "CA", fips: "06" },
  { name: "Colorado", abbr: "CO", fips: "08" },
  { name: "Connecticut", abbr: "CT", fips: "09" },
  { name: "Delaware", abbr: "DE", fips: "10" },
  { name: "District of Columbia", abbr: "DC", fips: "11" },
  { name: "Florida", abbr: "FL", fips: "12" },
  { name: "Georgia", abbr: "GA", fips: "13" },
  { name: "Hawaii", abbr: "HI", fips: "15" },
  { name: "Idaho", abbr: "ID", fips: "16" },
  { name: "Illinois", abbr: "IL", fips: "17" },
  { name: "Indiana", abbr: "IN", fips: "18" },
  { name: "Iowa", abbr: "IA", fips: "19" },
  { name: "Kansas", abbr: "KS", fips: "20" },
  { name: "Kentucky", abbr: "KY", fips: "21" },
  { name: "Louisiana", abbr: "LA", fips: "22" },
  { name: "Maine", abbr: "ME", fips: "23" },
  { name: "Maryland", abbr: "MD", fips: "24" },
  { name: "Massachusetts", abbr: "MA", fips: "25" },
  { name: "Michigan", abbr: "MI", fips: "26" },
  { name: "Minnesota", abbr: "MN", fips: "27" },
  { name: "Mississippi", abbr: "MS", fips: "28" },
  { name: "Missouri", abbr: "MO", fips: "29" },
  { name: "Montana", abbr: "MT", fips: "30" },
  { name: "Nebraska", abbr: "NE", fips: "31" },
  { name: "Nevada", abbr: "NV", fips: "32" },
  { name: "New Hampshire", abbr: "NH", fips: "33" },
  { name: "New Jersey", abbr: "NJ", fips: "34" },
  { name: "New Mexico", abbr: "NM", fips: "35" },
  { name: "New York", abbr: "NY", fips: "36" },
  { name: "North Carolina", abbr: "NC", fips: "37" },
  { name: "North Dakota", abbr: "ND", fips: "38" },
  { name: "Ohio", abbr: "OH", fips: "39" },
  { name: "Oklahoma", abbr: "OK", fips: "40" },
  { name: "Oregon", abbr: "OR", fips: "41" },
  { name: "Pennsylvania", abbr: "PA", fips: "42" },
  { name: "Rhode Island", abbr: "RI", fips: "44" },
  { name: "South Carolina", abbr: "SC", fips: "45" },
  { name: "South Dakota", abbr: "SD", fips: "46" },
  { name: "Tennessee", abbr: "TN", fips: "47" },
  { name: "Texas", abbr: "TX", fips: "48" },
  { name: "Utah", abbr: "UT", fips: "49" },
  { name: "Vermont", abbr: "VT", fips: "50" },
  { name: "Virginia", abbr: "VA", fips: "51" },
  { name: "Washington", abbr: "WA", fips: "53" },
  { name: "West Virginia", abbr: "WV", fips: "54" },
  { name: "Wisconsin", abbr: "WI", fips: "55" },
  { name: "Wyoming", abbr: "WY", fips: "56" },
];

const countyCache = new Map();
const countyActivityCache = new Map();

const offlineCountyData = {
  AZ: `
001|Apache County
003|Cochise County
005|Coconino County
007|Gila County
009|Graham County
011|Greenlee County
012|La Paz County
013|Maricopa County
015|Mohave County
017|Navajo County
019|Pima County
021|Pinal County
023|Santa Cruz County
025|Yavapai County
027|Yuma County
`,
  TX: `
001|Anderson County
003|Andrews County
005|Angelina County
007|Aransas County
009|Archer County
011|Armstrong County
013|Atascosa County
015|Austin County
017|Bailey County
019|Bandera County
021|Bastrop County
023|Baylor County
025|Bee County
027|Bell County
029|Bexar County
031|Blanco County
033|Borden County
035|Bosque County
037|Bowie County
039|Brazoria County
041|Brazos County
043|Brewster County
045|Briscoe County
047|Brooks County
049|Brown County
051|Burleson County
053|Burnet County
055|Caldwell County
057|Calhoun County
059|Callahan County
061|Cameron County
063|Camp County
065|Carson County
067|Cass County
069|Castro County
071|Chambers County
073|Cherokee County
075|Childress County
077|Clay County
079|Cochran County
081|Coke County
083|Coleman County
085|Collin County
087|Collingsworth County
089|Colorado County
091|Comal County
093|Comanche County
095|Concho County
097|Cooke County
099|Coryell County
101|Cottle County
103|Crane County
105|Crockett County
107|Crosby County
109|Culberson County
111|Dallam County
113|Dallas County
115|Dawson County
117|Deaf Smith County
119|Delta County
121|Denton County
123|DeWitt County
125|Dickens County
127|Dimmit County
129|Donley County
131|Duval County
133|Eastland County
135|Ector County
137|Edwards County
139|Ellis County
141|El Paso County
143|Erath County
145|Falls County
147|Fannin County
149|Fayette County
151|Fisher County
153|Floyd County
155|Foard County
157|Fort Bend County
159|Franklin County
161|Freestone County
163|Frio County
165|Gaines County
167|Galveston County
169|Garza County
171|Gillespie County
173|Glasscock County
175|Goliad County
177|Gonzales County
179|Gray County
181|Grayson County
183|Gregg County
185|Grimes County
187|Guadalupe County
189|Hale County
191|Hall County
193|Hamilton County
195|Hansford County
197|Hardeman County
199|Hardin County
201|Harris County
203|Harrison County
205|Hartley County
207|Haskell County
209|Hays County
211|Hemphill County
213|Henderson County
215|Hidalgo County
217|Hill County
219|Hockley County
221|Hood County
223|Hopkins County
225|Houston County
227|Howard County
229|Hudspeth County
231|Hunt County
233|Hutchinson County
235|Irion County
237|Jack County
239|Jackson County
241|Jasper County
243|Jeff Davis County
245|Jefferson County
247|Jim Hogg County
249|Jim Wells County
251|Johnson County
253|Jones County
255|Karnes County
257|Kaufman County
259|Kendall County
261|Kenedy County
263|Kent County
265|Kerr County
267|Kimble County
269|King County
271|Kinney County
273|Kleberg County
275|Knox County
277|Lamar County
279|Lamb County
281|Lampasas County
283|La Salle County
285|Lavaca County
287|Lee County
289|Leon County
291|Liberty County
293|Limestone County
295|Lipscomb County
297|Live Oak County
299|Llano County
301|Loving County
303|Lubbock County
305|Lynn County
307|McCulloch County
309|McLennan County
311|McMullen County
313|Madison County
315|Marion County
317|Martin County
319|Mason County
321|Matagorda County
323|Maverick County
325|Medina County
327|Menard County
329|Midland County
331|Milam County
333|Mills County
335|Mitchell County
337|Montague County
339|Montgomery County
341|Moore County
343|Morris County
345|Motley County
347|Nacogdoches County
349|Navarro County
351|Newton County
353|Nolan County
355|Nueces County
357|Ochiltree County
359|Oldham County
361|Orange County
363|Palo Pinto County
365|Panola County
367|Parker County
369|Parmer County
371|Pecos County
373|Polk County
375|Potter County
377|Presidio County
379|Rains County
381|Randall County
383|Reagan County
385|Real County
387|Red River County
389|Reeves County
391|Refugio County
393|Roberts County
395|Robertson County
397|Rockwall County
399|Runnels County
401|Rusk County
403|Sabine County
405|San Augustine County
407|San Jacinto County
409|San Patricio County
411|San Saba County
413|Schleicher County
415|Scurry County
417|Shackelford County
419|Shelby County
421|Sherman County
423|Smith County
425|Somervell County
427|Starr County
429|Stephens County
431|Sterling County
433|Stonewall County
435|Sutton County
437|Swisher County
439|Tarrant County
441|Taylor County
443|Terrell County
445|Terry County
447|Throckmorton County
449|Titus County
451|Tom Green County
453|Travis County
455|Trinity County
457|Tyler County
459|Upshur County
461|Upton County
463|Uvalde County
465|Val Verde County
467|Van Zandt County
469|Victoria County
471|Walker County
473|Waller County
475|Ward County
477|Washington County
479|Webb County
481|Wharton County
483|Wheeler County
485|Wichita County
487|Wilbarger County
489|Willacy County
491|Williamson County
493|Wilson County
495|Winkler County
497|Wise County
499|Wood County
501|Yoakum County
503|Young County
505|Zapata County
507|Zavala County
`,
  FL: `
001|Alachua County
003|Baker County
005|Bay County
007|Bradford County
009|Brevard County
011|Broward County
013|Calhoun County
015|Charlotte County
017|Citrus County
019|Clay County
021|Collier County
023|Columbia County
027|DeSoto County
029|Dixie County
031|Duval County
033|Escambia County
035|Flagler County
037|Franklin County
039|Gadsden County
041|Gilchrist County
043|Glades County
045|Gulf County
047|Hamilton County
049|Hardee County
051|Hendry County
053|Hernando County
055|Highlands County
057|Hillsborough County
059|Holmes County
061|Indian River County
063|Jackson County
065|Jefferson County
067|Lafayette County
069|Lake County
071|Lee County
073|Leon County
075|Levy County
077|Liberty County
079|Madison County
081|Manatee County
083|Marion County
085|Martin County
086|Miami-Dade County
087|Monroe County
089|Nassau County
091|Okaloosa County
093|Okeechobee County
095|Orange County
097|Osceola County
099|Palm Beach County
101|Pasco County
103|Pinellas County
105|Polk County
107|Putnam County
109|St. Johns County
111|St. Lucie County
113|Santa Rosa County
115|Sarasota County
117|Seminole County
119|Sumter County
121|Suwannee County
123|Taylor County
125|Union County
127|Volusia County
129|Wakulla County
131|Walton County
133|Washington County
`,
};

const indicatorSpecies = [
  "Nashville Warbler",
  "Black-and-white Warbler",
  "Yellow Warbler",
  "Yellow-breasted Chat",
  "White-eyed Vireo",
  "Yellow-throated Vireo",
  "Summer Tanager",
  "Scarlet Tanager",
  "Baltimore Oriole",
  "Orchard Oriole",
  "Rose-breasted Grosbeak",
  "Indigo Bunting",
  "Painted Bunting",
  "Swainson's Thrush",
  "Eastern Wood-Pewee",
  "Least Flycatcher",
];

const speciesCodeByName = new Map(
  Object.entries({
    "Nashville Warbler": "naswar",
    "Black-and-white Warbler": "bawwar",
    "Yellow Warbler": "yerwar",
    "Yellow-breasted Chat": "yebcha",
    "White-eyed Vireo": "whevir",
    "Yellow-throated Vireo": "yetvir",
    "Summer Tanager": "sumtan",
    "Scarlet Tanager": "scatan",
    "Baltimore Oriole": "balori",
    "Orchard Oriole": "orcori",
    "Rose-breasted Grosbeak": "robgro",
    "Indigo Bunting": "indbun",
    "Painted Bunting": "paibun",
    "Swainson's Thrush": "swathr",
    "Eastern Wood-Pewee": "eawpew",
    "Least Flycatcher": "leafly",
  }),
);

const form = document.querySelector("#signalForm");
const fields = {
  stateSelect: document.querySelector("#stateSelect"),
  regionSelect: document.querySelector("#regionSelect"),
  countyStatus: document.querySelector("#countyStatus"),
  manualCountyName: document.querySelector("#manualCountyName"),
  manualRegionCode: document.querySelector("#manualRegionCode"),
  manualStateAbbr: document.querySelector("#manualStateAbbr"),
  birdsCrossed: document.querySelector("#birdsCrossed"),
  birdsInFlight: document.querySelector("#birdsInFlight"),
  windDirection: document.querySelector("#windDirection"),
  rain: document.querySelector("#rain"),
  frontStatus: document.querySelector("#frontStatus"),
  frontPassage: document.querySelector("#frontPassage"),
  ebirdSignal: document.querySelector("#ebirdSignal"),
  refreshEbird: document.querySelector("#refreshEbird"),
  ebirdLiveSummary: document.querySelector("#ebirdLiveSummary"),
};

const indicatorSpeciesSet = new Set(indicatorSpecies.map((species) => species.toLowerCase()));
const migrantKeywordPattern =
  /\b(warbler|vireo|tanager|oriole|grosbeak|bunting|thrush|flycatcher|chat|kingbird|pewee|phoebe|redstart|waterthrush|waxwing|kinglet)\b/i;

const residentExclusions = new Set(
  [
    "Northern Cardinal",
    "Carolina Wren",
    "Bewick's Wren",
    "House Sparrow",
    "European Starling",
    "Rock Pigeon",
    "Mourning Dove",
    "White-winged Dove",
    "Great-tailed Grackle",
    "Blue Jay",
    "American Crow",
    "Black Vulture",
    "Turkey Vulture",
    "Red-tailed Hawk",
    "Red-bellied Woodpecker",
    "Ladder-backed Woodpecker",
    "Downy Woodpecker",
    "House Finch",
    "Northern Mockingbird",
    "Brown Thrasher",
    "Eastern Bluebird",
    "Tufted Titmouse",
    "Carolina Chickadee",
    "Black-crested Titmouse",
    "Eastern Meadowlark",
    "Loggerhead Shrike",
    "Northern Bobwhite",
  ].map((species) => species.toLowerCase()),
);

const birdcastMapImage = document.querySelector("#birdcastMapImage");
const birdcastMapStatus = document.querySelector("#birdcastMapStatus");
const reportTimestamp = document.querySelector("#reportTimestamp");
const appUpdatedTimestamp = document.querySelector("#appUpdatedTimestamp");
const headerCopy = document.querySelector(".header-copy");
const currentWeather = document.querySelector("#currentWeather");
const windMap = document.querySelector("#windMap");
const windMapStatus = document.querySelector("#windMapStatus");
const frontLine = document.querySelector("#frontLine");
const hotspotCache = new Map();
const regionPhotoCache = new Map();
const speciesPhotoCache = new Map();
const speciesStatusCache = new Map();
const weatherCache = new Map();
const latestObservationBySpecies = new Map();
let activeHotspotRegionCode = "";
let activeRegionHotspots = [];
let activeHotspotStatus = "Using habitat-based fallback until county hotspots load.";
let activeHotspotFilterComplete = false;
let activeRareRegionCode = "";
let activeRareObservations = [];
let activeBirdcastMeta = null;
const hotspotSpeciesCountCache = new Map();
const birdsCrossedHint = document.querySelector("#birdsCrossedHint");
const birdsInFlightHint = document.querySelector("#birdsInFlightHint");
const birdsCrossedDisplay = document.querySelector("#birdsCrossedDisplay");
const birdsInFlightDisplay = document.querySelector("#birdsInFlightDisplay");
const birdsCrossedLevel = document.querySelector("#birdsCrossedLevel");
const birdsInFlightLevel = document.querySelector("#birdsInFlightLevel");
const birdsCrossedCaption = document.querySelector("#birdsCrossedCaption");
const birdsInFlightCaption = document.querySelector("#birdsInFlightCaption");
const windDirectionDisplay = document.querySelector("#windDirectionDisplay");
const rainDisplay = document.querySelector("#rainDisplay");
const frontPassageDisplay = document.querySelector("#frontPassageDisplay");
const ebirdSignalDisplay = document.querySelector("#ebirdSignalDisplay");
const birdSearchInput = document.querySelector("#birdSearchInput");
const birdMatchLabel = document.querySelector("#birdMatchLabel");
const birdMatchSelect = document.querySelector("#birdMatchSelect");
const birdFinderResult = document.querySelector("#birdFinderResult");
const feedbackForm = document.querySelector("#feedbackForm");
const feedbackName = document.querySelector("#feedbackName");
const feedbackMessage = document.querySelector("#feedbackMessage");
const feedbackSubmit = document.querySelector("#feedbackSubmit");
const feedbackStatus = document.querySelector("#feedbackStatus");
let taxonomyCache = null;
let birdFinderRequestId = 0;

function getSelectedState() {
  return states.find((state) => state.abbr === fields.stateSelect.value) || states.find((state) => state.abbr === "TX");
}

function getRegion() {
  const selectedState = getSelectedState();

  if (fields.regionSelect.value === "manual") {
    const manualCode = fields.manualRegionCode.value.trim();
    const manualState = fields.manualStateAbbr.value.trim().toUpperCase() || selectedState.abbr;
    const resolvedState = states.find((state) => state.abbr === manualState) || selectedState;
    const manualName = fields.manualCountyName.value.trim() || "Manual County";
    const resolvedCode = manualCode || regionCodeFromCountyName(manualName, resolvedState);

    return {
      name: manualName,
      state: resolvedState.name,
      birdcastCode: resolvedCode,
      ebirdCode: resolvedCode,
      hotspots: genericHotspots,
    };
  }

  if (regions[fields.regionSelect.value]) {
    return regions[fields.regionSelect.value];
  }

  const selectedOption = fields.regionSelect.selectedOptions[0];
  const countyName = selectedOption?.dataset.name || "Selected County";
  const countyCode = selectedOption?.value || "";

  return {
    name: countyName,
    state: selectedState.name,
    birdcastCode: countyCode,
    ebirdCode: countyCode,
    hotspots: genericHotspots,
  };
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function formatBirds(value) {
  return new Intl.NumberFormat("en-US", {
    notation: value >= 1000000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(value);
}

function updateReportTimestamp(label = "Report generated") {
  if (!reportTimestamp) return;

  reportTimestamp.textContent = `${label}: ${new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date())}`;
}

function updateAppTimestamp() {
  if (!appUpdatedTimestamp) return;
  const parsedLastModified = new Date(document.lastModified);
  const appUpdatedAt = Number.isNaN(parsedLastModified.getTime()) ? new Date() : parsedLastModified;
  appUpdatedTimestamp.textContent = `App updated: ${new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(appUpdatedAt)}`;
}

function readSignals() {
  return {
    birdsCrossed: Number(fields.birdsCrossed.value || 0),
    birdsInFlight: Number(fields.birdsInFlight.value || 0),
    windDirection: fields.windDirection.value,
    rain: fields.rain.value,
    frontStatus: fields.frontStatus.value,
    frontPassage: fields.frontPassage.value.trim(),
    ebirdSignal: fields.ebirdSignal.value,
  };
}

function syncSignalDisplays() {
  if (windDirectionDisplay) windDirectionDisplay.textContent = fields.windDirection.selectedOptions[0]?.textContent || "";
  if (rainDisplay) rainDisplay.textContent = fields.rain.selectedOptions[0]?.textContent || "";
  if (frontPassageDisplay) {
    const manualFrontPassage = fields.frontPassage.value.trim();
    const impliedFrontPassage = {
      passing: "Passing through now",
      approaching: "Within 6 hours",
      passed: "Passed in the last 12 hours",
      none: "No front nearby",
    }[fields.frontStatus.value];
    frontPassageDisplay.textContent = manualFrontPassage || impliedFrontPassage || "Not entered";
  }
  if (ebirdSignalDisplay) ebirdSignalDisplay.textContent = fields.ebirdSignal.selectedOptions[0]?.textContent || "";
}

function syncBirdcastValueTone(value, element) {
  if (!element) return;
  element.classList.remove("is-low", "is-mid", "is-high");
  if (value < 200000) {
    element.classList.add("is-low");
  } else if (value <= 1000000) {
    element.classList.add("is-mid");
  } else {
    element.classList.add("is-high");
  }
}

function scoreSignals(signals) {
  const region = getRegion();
  const reasons = [];
  let score = 0;

  const migrationPressure = clamp(signals.birdsCrossed / 3000000, 0, 1);
  score += migrationPressure * 28;
  if (signals.birdsCrossed >= 2500000) {
    reasons.push(`Very heavy overnight passage is putting a lot of birds over ${region.name}.`);
  } else if (signals.birdsCrossed >= 750000) {
    reasons.push("Overnight passage is meaningful enough to watch local landing habitat.");
  }

  const activeFlight = clamp(signals.birdsInFlight / 200000, 0, 1);
  score += activeFlight * 12;
  if (signals.birdsInFlight >= 100000) {
    reasons.push("Current birds-in-flight remains high, so landing pressure may still be active.");
  }

  if (signals.windDirection === "north") {
    score += 22;
    reasons.push("Wind from the north or northeast is a headwind stop sign for spring migrants moving north.");
  } else if (signals.windDirection === "east" || signals.windDirection === "west") {
    score += 8;
    reasons.push("Crosswinds can slow movement and make sheltered valleys more attractive.");
  } else {
    reasons.push("Wind from the south is a tailwind for spring migrants, favoring continued northbound flight.");
  }

  if (signals.rain === "storms") {
    score += 24;
    reasons.push("Storms can force birds down quickly, especially near water and dense cover.");
  } else if (signals.rain === "yes") {
    score += 18;
    reasons.push("Rain nearby can ground tired migrants and concentrate them after dawn.");
  }

  if (signals.frontStatus === "passing") {
    score += 18;
    reasons.push(`A cold front is passing through now${signals.frontPassage ? ` (${signals.frontPassage})` : ""}, creating a strong migration stop sign.`);
  } else if (signals.frontStatus === "approaching") {
    score += 12;
    reasons.push(`A cold front is approaching${signals.frontPassage ? ` (${signals.frontPassage})` : ""}; fallout risk can rise fast as winds shift.`);
  } else if (signals.frontStatus === "passed") {
    score += 8;
    reasons.push(`A front passed recently${signals.frontPassage ? ` (${signals.frontPassage})` : ""}, so grounded birds may still be feeding locally.`);
  }

  if (
    signals.frontStatus !== "none" &&
    signals.windDirection === "north" &&
    signals.rain !== "no"
  ) {
    score += 10;
    reasons.push("Front passage, north wind, and precipitation are lining up into a classic wall scenario.");
  }

  if (signals.ebirdSignal === "spike") {
    score += 18;
    reasons.push("A checklist spike suggests birds are being detected on the ground.");
  } else if (signals.ebirdSignal === "rare") {
    score += 14;
    reasons.push("Rare or flagged reports are a strong hint that migrants are moving through.");
  } else if (signals.ebirdSignal === "quiet") {
    score -= 8;
    reasons.push("Quiet or stale eBird activity keeps confidence lower until fresh reports arrive.");
  }

  score = Math.round(clamp(score, 0, 100));
  let label = "Low";
  let summary = "Birding may be a little more challenging while the major fallout signals are not lining up.";

  if (score >= 78) {
    label = "Fallout Likely";
    summary = "Go now if you can. Prioritize water, mature trees, sheltered edges, and recently active hotspots.";
  } else if (score >= 58) {
    label = "High";
    summary = "Conditions are favorable for grounded migrants. First-light checks and riparian sites are worth the effort.";
  } else if (score >= 34) {
    label = "Moderate";
    summary = "There are useful signals, but confirmation depends on fresh eBird reports or visible activity.";
  }

  return { score, label, summary, reasons };
}

function hotspotScore(base, globalScore, index) {
  const boost = globalScore * 0.22;
  const freshness = [8, 6, 5, 2, 1, 0][index] || 0;
  return Math.round(clamp(base + boost + freshness - 12, 0, 100));
}

function hotspotHabitatFromName(name) {
  const normalized = name.toLowerCase();
  if (/lake|pond|reservoir|wetland|marsh|bay|beach|coast|shore|inlet|island/.test(normalized)) {
    return "Water, wetland, shore, or lake-edge habitat";
  }
  if (/river|creek|spring|riparian|greenbelt/.test(normalized)) {
    return "River or creek corridor with riparian cover";
  }
  if (/refuge|wildlife|wma|preserve|sanctuary|audubon/.test(normalized)) {
    return "Protected wildlife habitat with concentrated birding records";
  }
  if (/park|state park|county park|regional park|nature|trail/.test(normalized)) {
    return "Parkland, trails, woodland edge, or mixed public habitat";
  }
  return "Local eBird hotspot with recent or historical birding activity";
}

function hotspotBaseFromName(name, index) {
  const normalized = name.toLowerCase();
  let base = 66 - Math.min(index, 10);
  if (/refuge|wildlife|wma|sanctuary|audubon/.test(normalized)) base += 17;
  if (/lake|pond|wetland|marsh|river|creek|spring|bay|beach|shore/.test(normalized)) base += 12;
  if (/park|preserve|nature|greenbelt|trail/.test(normalized)) base += 8;
  return clamp(base, 54, 90);
}

function ebirdHotspotToCard(hotspot, index, regionName) {
  const name = hotspot.locName || hotspot.name || "eBird hotspot";
  const coordinates =
    Number.isFinite(Number(hotspot.lat)) && Number.isFinite(Number(hotspot.lng))
      ? `${Number(hotspot.lat).toFixed(3)}, ${Number(hotspot.lng).toFixed(3)}`
      : regionName;
  const mapsUrl =
    Number.isFinite(Number(hotspot.lat)) && Number.isFinite(Number(hotspot.lng))
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${hotspot.lat},${hotspot.lng}`)}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${regionName}`)}`;

  return {
    name,
    area: coordinates,
    habitat: hotspotHabitatFromName(name),
    base: hotspotBaseFromName(name, index),
    signal: "Open this hotspot in Google Maps for directions.",
    species: [],
    url: hotspot.locId ? `https://ebird.org/hotspot/${hotspot.locId}` : "",
    mapsUrl,
    locId: hotspot.locId || "",
    recentSpeciesCount: null,
    recentMigrants: [],
  };
}

function renderRisk(result) {
  document.querySelector("#riskLabel").textContent = result.label;
  document.querySelector("#riskScore").textContent = result.score;
  document.querySelector("#meterFill").style.width = `${result.score}%`;
  document.querySelector("#riskSummary").textContent = result.summary;
  document.querySelector("#reasonList").innerHTML = result.reasons
    .slice(0, 5)
    .map((reason) => `<p>${reason}</p>`)
    .join("");
}

function renderInsights(signals, result) {
  const region = getRegion();
  document.querySelector("#skyInsight").textContent =
    `${formatBirds(signals.birdsCrossed)} birds crossed overnight and ${formatBirds(signals.birdsInFlight)} are currently estimated in flight over ${region.name}. That is the raw supply side of a possible concentration event.`;

  const rainText = signals.rain === "no" ? "no rain nearby" : signals.rain === "storms" ? "storms nearby" : "rain nearby";
  const windText = {
    north: "wind from the north or northeast",
    east: "wind from the east",
    south: "wind from the south or southeast",
    west: "wind from the west",
  }[signals.windDirection];
  document.querySelector("#weatherInsight").textContent =
    `The current setup shows ${windText} with ${rainText}. Front timing: ${frontText(signals)}. Wind from the north plus precipitation and frontal passage is the strongest Hill Country stop-sign combination for spring migration.`;

  const ebirdText = {
    spike: "fresh checklist volume is above normal",
    rare: "rare or flagged birds are being reported",
    normal: "reports look normal so far",
    quiet: "reports are quiet or not fresh",
  }[signals.ebirdSignal];
  document.querySelector("#groundInsight").textContent =
    `The eBird layer says ${ebirdText}. Use this to separate radar promise from birds actually detected in parks and neighborhoods.`;
}

function frontText(signals) {
  const timing = signals.frontPassage || "timing not entered";
  const status = {
    passing: "passing through now",
    approaching: "approaching within 6 hours",
    passed: "passed in the last 12 hours",
    none: "no front nearby",
  }[signals.frontStatus];
  return `${status}, ${timing}`;
}

function renderWindMap(signals) {
  if (!windMapStatus) return;
  const label = {
    north: "Wind from north or northeast: headwind for spring migrants.",
    east: "Wind from east: crosswind, watch sheltered corridors.",
    south: "Wind from south or southeast: tailwind for spring migrants.",
    west: "Wind from west: crosswind, watch protected edges.",
  }[signals.windDirection] || "Wind direction selected manually.";

  windMapStatus.textContent =
    signals.frontStatus === "none"
      ? label
      : `${label} Front status: ${frontText(signals)}.`;
}

function wikipediaTitleForRegion(region) {
  if (!region?.state || /custom/i.test(region.state)) return "";
  return `${region.name}, ${region.state}`;
}

async function updateRegionPhoto(region) {
  if (!headerCopy) return;

  const title = wikipediaTitleForRegion(region);
  if (!title) {
    headerCopy.style.removeProperty("--region-photo");
    return;
  }

  if (regionPhotoCache.has(title)) {
    const cached = regionPhotoCache.get(title);
    if (cached) headerCopy.style.setProperty("--region-photo", `url("${cached}")`);
    else headerCopy.style.removeProperty("--region-photo");
    return;
  }

  try {
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
    if (!response.ok) throw new Error("No public image found");
    const summary = await response.json();
    let imageUrl = summary.originalimage?.source || summary.thumbnail?.source || "";
    if (!imageUrl) imageUrl = await commonsCountyImage(title);
    regionPhotoCache.set(title, imageUrl);
    if (imageUrl && title === wikipediaTitleForRegion(getRegion())) {
      headerCopy.style.setProperty("--region-photo", `url("${imageUrl}")`);
    }
  } catch {
    regionPhotoCache.set(title, "");
    if (title === wikipediaTitleForRegion(getRegion())) headerCopy.style.removeProperty("--region-photo");
  }
}

async function commonsCountyImage(title) {
  try {
    const response = await fetch(
      `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(`${title} landscape`)}&gsrnamespace=6&prop=imageinfo&iiprop=url&iiurlwidth=900&format=json&origin=*`,
    );
    if (!response.ok) throw new Error("No Commons image");
    const payload = await response.json();
    return Object.values(payload.query?.pages || {})
      .map((page) => page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url || "")
      .find(Boolean) || "";
  } catch {
    return "";
  }
}

function parseBirdcastCount(text, patterns) {
  for (const pattern of patterns) {
    const match = String(text || "").match(pattern);
    if (match) return Number(match[1].replace(/,/g, ""));
  }
  return null;
}

function parseBirdcastText(text, patterns) {
  for (const pattern of patterns) {
    const match = String(text || "").match(pattern);
    if (match) return match[1].trim();
  }
  return "";
}

async function refreshBirdcastCountyData() {
  const region = getRegion();
  if (!region.birdcastCode) return;

  try {
    if (birdsCrossedHint) birdsCrossedHint.innerHTML = `(auto-filled from BirdCast) <span class="refreshing-note">(REFRESHING)</span>`;
    if (birdsInFlightHint) birdsInFlightHint.innerHTML = `(auto-filled from BirdCast) <span class="refreshing-note">(REFRESHING)</span>`;
    const response =
      window.location.protocol === "file:"
        ? await fetch(`https://r.jina.ai/http://dashboard.birdcast.org/region/${region.birdcastCode}`)
        : await fetch(`/api/birdcast?region=${encodeURIComponent(region.birdcastCode)}`);
    if (!response.ok) throw new Error("BirdCast unavailable");
    let crossed;
    let inFlight;
    let startTime = "";
    let direction = "";
    let speed = "";
    let altitude = "";
    let recorded = "";
    let crossedLevel = "";
    let inFlightLevel = "";
    if (window.location.protocol === "file:") {
      const text = await response.text();
      crossed = parseBirdcastCount(text, [
        /([\d,.]+)\s+Birds have crossed/i,
        /([\d,.]+)\s+Birds crossed .* last night/i,
      ]);
      inFlight = parseBirdcastCount(text, [
        /([\d,.]+)\s+Birds now in flight/i,
        /([\d,.]+)\s+Birds in flight/i,
      ]);
      startTime = parseBirdcastText(text, [/Starting:\s*(.+)/i]);
      direction = parseBirdcastText(text, [/Direction:\s*(.+)/i]);
      speed = parseBirdcastText(text, [/Speed:\s*(.+)/i]);
      altitude = parseBirdcastText(text, [/Altitude:\s*(.+)/i]);
      recorded = parseBirdcastText(text, [/Recorded:\s*(.+)/i]);
      crossedLevel = parseBirdcastText(text, [
        /Birds have crossed[^.]*\(est\.\)\s*(Low|Medium|High)\b/i,
        /Birds crossed[^.]*last night[^.]*\(est\.\)\s*(Low|Medium|High)\b/i,
      ]);
      inFlightLevel = parseBirdcastText(text, [
        /Birds now in flight[^.]*\(est\.\)\s*(Low|Medium|High)\b/i,
        /Birds in flight[^.]*\(est\.\)\s*(Low|Medium|High)\b/i,
      ]);
    } else {
      const payload = await response.json();
      crossed = Number(payload.birdsCrossed);
      inFlight = Number(payload.birdsInFlight);
      startTime = payload.startTime || "";
      direction = payload.direction || "";
      speed = payload.speed || "";
      altitude = payload.altitude || "";
      recorded = payload.recorded || "";
      crossedLevel = payload.crossedLevel || "";
      inFlightLevel = payload.inFlightLevel || "";
    }
    if (!Number.isFinite(crossed) || !Number.isFinite(inFlight)) throw new Error("BirdCast values missing");

    activeBirdcastMeta = {
      regionCode: region.birdcastCode,
      startTime,
      direction,
      speed,
      altitude,
      recorded,
      crossedLevel,
      inFlightLevel,
    };
    fields.birdsCrossed.value = crossed;
    fields.birdsInFlight.value = inFlight;
    if (birdsCrossedDisplay) birdsCrossedDisplay.textContent = formatBirds(crossed);
    if (birdsInFlightDisplay) birdsInFlightDisplay.textContent = formatBirds(inFlight);
    syncBirdcastLevelBadge(crossedLevel, birdsCrossedLevel);
    syncBirdcastLevelBadge(inFlightLevel, birdsInFlightLevel);
    if (birdsCrossedCaption) {
      birdsCrossedCaption.textContent = startTime
        ? `Starting: ${startTime}`
        : `Birds have crossed ${region.name} so far tonight (est.).`;
    }
    if (birdsInFlightCaption) {
      birdsInFlightCaption.innerHTML =
        direction || speed || altitude || recorded
          ? [
              direction || speed || altitude
                ? `<span class="birdcast-flight-line">${[
                    direction ? `<strong>Direction:</strong> ${direction}` : "",
                    speed ? `<strong>Speed:</strong> ${speed}` : "",
                    altitude ? `<strong>Altitude:</strong> ${altitude}` : "",
                  ]
                    .filter(Boolean)
                    .join(" · ")}</span>`
                : "",
              recorded ? `<span><strong>Recorded:</strong> ${recorded}</span>` : "",
            ]
              .filter(Boolean)
              .join("")
          : `Birds now in flight over ${region.name} (est.).`;
    }
    syncBirdcastValueTone(crossed, birdsCrossedDisplay);
    if (birdsCrossedHint) birdsCrossedHint.textContent = "(auto-filled from BirdCast)";
    if (birdsInFlightHint) birdsInFlightHint.textContent = "(auto-filled from BirdCast)";
    updateDashboard();
  } catch {
    activeBirdcastMeta = null;
    syncBirdcastLevelBadge("", birdsCrossedLevel);
    syncBirdcastLevelBadge("", birdsInFlightLevel);
    if (birdsCrossedHint) birdsCrossedHint.textContent = "(BirdCast auto-fill unavailable; enter manually)";
    if (birdsInFlightHint) birdsInFlightHint.textContent = "(BirdCast auto-fill unavailable; enter manually)";
  }
}

function syncBirdcastLevelBadge(level, element) {
  if (!element) return;
  const normalized = String(level || "").trim();
  element.textContent = normalized;
  element.classList.toggle("is-hidden", !normalized);
  element.classList.toggle("is-low", normalized.toLowerCase() === "low");
  element.classList.toggle("is-medium", normalized.toLowerCase() === "medium");
}

async function updateCurrentWeather(region) {
  if (!currentWeather) return;
  const title = wikipediaTitleForRegion(region);
  if (!title) {
    currentWeather.textContent = "";
    return;
  }

  if (weatherCache.has(title)) {
    currentWeather.innerHTML = weatherCache.get(title);
    return;
  }

  currentWeather.textContent = "Weather loading...";
  try {
    const queries = [
      `${region.name}, ${region.state}`,
      region.name,
      region.name.replace(/\s+County$/i, ""),
    ].filter(Boolean);
    const geoResults = [];
    for (const query of queries) {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=10&language=en&format=json`,
      );
      const geo = await geoResponse.json();
      geoResults.push(...(geo.results || []));
      if (geoResults.length) break;
    }
    const match = geoResults.find((item) =>
      String(item.admin1 || "").toLowerCase().includes(String(region.state || "").toLowerCase()),
    ) || geoResults[0];
    if (!match) throw new Error("No weather location");

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${match.latitude}&longitude=${match.longitude}&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,precipitation&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_direction_10m_dominant,wind_speed_10m_max&forecast_days=2&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto`,
    );
    const weather = await weatherResponse.json();
    const current = weather.current;
    if (!current) throw new Error("No current weather");
    const arrow = windArrowForDegrees((Number(current.wind_direction_10m || 0) + 180) % 360);
    const today = weather.daily
      ? `Today ${weatherIcon(weather.daily.weather_code[0])} ${windArrowForDegrees((Number(weather.daily.wind_direction_10m_dominant[0] || 0) + 180) % 360)} ${Math.round(weather.daily.wind_speed_10m_max[0])} mph ${Math.round(weather.daily.temperature_2m_max[0])}/${Math.round(weather.daily.temperature_2m_min[0])}`
      : "";
    const tomorrow = weather.daily
      ? `Tomorrow ${weatherIcon(weather.daily.weather_code[1])} ${windArrowForDegrees((Number(weather.daily.wind_direction_10m_dominant[1] || 0) + 180) % 360)} ${Math.round(weather.daily.wind_speed_10m_max[1])} mph ${Math.round(weather.daily.temperature_2m_max[1])}/${Math.round(weather.daily.temperature_2m_min[1])}`
      : "";
    const currentText = `${weatherIcon(current.weather_code)} ${Math.round(current.temperature_2m)} F, ${weatherCodeLabel(current.weather_code)} · ${arrow} ${Math.round(current.wind_speed_10m)} mph`;
    const text = `
      <span class="weather-current">${currentText}</span>
      <span class="weather-forecast">${today} · ${tomorrow}</span>
    `;
    weatherCache.set(title, text);
    if (title === wikipediaTitleForRegion(getRegion())) {
      currentWeather.innerHTML = text;
      currentWeather.href = `https://www.google.com/search?q=${encodeURIComponent(`weather forecast ${title}`)}`;
      applyWeatherToInputs(current);
      renderWindMap(readSignals());
    }
  } catch {
    weatherCache.set(title, "Weather unavailable");
    if (title === wikipediaTitleForRegion(getRegion())) currentWeather.textContent = "Weather unavailable";
  }
}

function weatherCodeLabel(code) {
  if (code === 0) return "clear";
  if ([1, 2, 3].includes(code)) return "cloudy";
  if ([45, 48].includes(code)) return "fog";
  if ([51, 53, 55, 56, 57].includes(code)) return "drizzle";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "rain";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
  if ([95, 96, 99].includes(code)) return "storms";
  return "conditions";
}

function weatherIcon(code) {
  if (code === 0) return "☀";
  if ([1, 2].includes(code)) return "⛅";
  if (code === 3) return "☁";
  if ([45, 48].includes(code)) return "≋";
  if ([51, 53, 55, 56, 57].includes(code)) return "☂";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "☔";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄";
  if ([95, 96, 99].includes(code)) return "⚡";
  return "◌";
}

function windArrowForDegrees(degrees = 0) {
  const arrows = ["↑", "↗", "→", "↘", "↓", "↙", "←", "↖"];
  return arrows[Math.round(Number(degrees || 0) / 45) % 8];
}

function applyWeatherToInputs(current) {
  fields.windDirection.value = windBucketFromDegrees(current.wind_direction_10m);
  fields.rain.value = rainBucketFromWeather(current.weather_code, current.precipitation);
}

function windBucketFromDegrees(degrees = 0) {
  const value = ((Number(degrees) % 360) + 360) % 360;
  if (value >= 315 || value < 45) return "north";
  if (value < 135) return "east";
  if (value < 225) return "south";
  return "west";
}

function rainBucketFromWeather(code, precipitation = 0) {
  if ([95, 96, 99].includes(code)) return "storms";
  if (
    Number(precipitation || 0) > 0 ||
    [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)
  ) {
    return "yes";
  }
  return "no";
}

async function speciesPhotoUrl(name) {
  if (speciesPhotoCache.has(name)) return speciesPhotoCache.get(name);
  try {
    const getBrowserSummaryPhoto = async (title) => {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
      );
      if (!response.ok) return "";
      const summary = await response.json();
      return summary.thumbnail?.source || "";
    };

    let url = "";
    if (window.location.protocol === "file:") {
      url = await getBrowserSummaryPhoto(name);
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
          url = await getBrowserSummaryPhoto(title);
          if (url) break;
        }
      }
    } else {
      const response = await fetch(`/api/species-photo?name=${encodeURIComponent(name)}`);
      if (!response.ok) throw new Error("No species photo");
      const summary = await response.json();
      url = summary.url || "";
    }

    speciesPhotoCache.set(name, url);
    return url;
  } catch {
    speciesPhotoCache.set(name, "");
    return "";
  }
}

async function speciesStatus(speciesCode) {
  if (speciesStatusCache.has(speciesCode)) return speciesStatusCache.get(speciesCode);

  const parseSpeciesStatusText = (text) => {
    const match = text.match(/\b(CR|EN|VU|NT|LC|DD|NE)\b\s+(Critically Endangered|Endangered|Vulnerable|Near Threatened|Least Concern|Data Deficient|Not Evaluated)\b/i)
      || text.match(/\b(Critically Endangered|Endangered|Vulnerable|Near Threatened|Least Concern|Data Deficient|Not Evaluated)\b/i);
    if (!match) return { code: "", label: "" };
    if (match.length === 3) return { code: match[1], label: match[2] };
    const label = match[1];
    const codes = {
      "Critically Endangered": "CR",
      Endangered: "EN",
      Vulnerable: "VU",
      "Near Threatened": "NT",
      "Least Concern": "LC",
      "Data Deficient": "DD",
      "Not Evaluated": "NE",
    };
    return { code: codes[label] || "", label };
  };

  const fetchBrowserFallbackStatus = async () => {
    const response = await fetch(`https://r.jina.ai/http://ebird.org/species/${encodeURIComponent(speciesCode)}`);
    if (!response.ok) throw new Error("No browser fallback status");
    return parseSpeciesStatusText(await response.text());
  };

  try {
    let resolvedStatus;
    if (window.location.protocol === "file:") {
      resolvedStatus = await fetchBrowserFallbackStatus();
    } else {
      try {
        const response = await fetch(`/api/species-status?code=${encodeURIComponent(speciesCode)}`);
        if (!response.ok) throw new Error("No species status");
        resolvedStatus = await response.json();
      } catch {
        resolvedStatus = await fetchBrowserFallbackStatus();
      }
      if (!resolvedStatus?.code || !resolvedStatus?.label) {
        resolvedStatus = await fetchBrowserFallbackStatus();
      }
    }
    speciesStatusCache.set(speciesCode, resolvedStatus);
    return resolvedStatus;
  } catch {
    const emptyStatus = { code: "", label: "" };
    speciesStatusCache.set(speciesCode, emptyStatus);
    return emptyStatus;
  }
}

function displaySpeciesName(name) {
  return String(name || "").replace(/\s+\([^)]*\)$/g, "");
}

function renderHotspots(result) {
  const region = getRegion();
  const regionName = region.state ? `${region.name}, ${region.state}` : region.name;
  const hasActiveHotspotData = activeHotspotRegionCode === region.ebirdCode;
  const hotspotSource =
    hasActiveHotspotData
      ? activeRegionHotspots
      : region.hotspots;
  const filteredHotspots =
    hasActiveHotspotData && activeHotspotFilterComplete
      ? hotspotSource.filter((hotspot) => hotspot.recentMigrants?.length)
      : hotspotSource;

  if (hasActiveHotspotData && activeHotspotFilterComplete && !filteredHotspots.length) {
    document.querySelector("#hotspotGrid").innerHTML = `
      <article class="hotspot-card">
        <div class="rank">0</div>
        <div>
          <div class="hotspot-title">
            <h3>No migrant-active hotspots found</h3>
            <span>0</span>
          </div>
          <p class="hotspot-area">${regionName}</p>
          <p>No selected-county hotspots had migrant signal species reported in the last 7 days.</p>
          <p class="habitat">Try broadening the window later, pulling eBird again, or checking the county eBird hotspot link.</p>
        </div>
      </article>
    `;
    document.querySelector("#hotspotIntro").textContent =
      `Filtered ${regionName} hotspots to places with migrant signal species reported in the last 7 days.`;
    return;
  }

  const cards = filteredHotspots
    .map((hotspot, index) => ({
      ...hotspot,
      score: hotspotScore(hotspot.base, result.score, index),
    }))
    .sort((a, b) => b.score - a.score)
    .map(
      (hotspot, index) => `
        <article class="hotspot-card">
          <div class="rank">${index + 1}</div>
          <div>
            <div class="hotspot-title">
              <h3>${hotspot.url ? `<a href="${hotspot.url}" target="_blank" rel="noreferrer">${hotspot.name}</a>` : hotspot.name}</h3>
              <span>${hotspot.score}</span>
            </div>
            <p class="hotspot-area">${hotspot.area}</p>
            <p class="hotspot-links">
              ${hotspot.mapsUrl ? `<a class="maps-link" href="${hotspot.mapsUrl}" target="_blank" rel="noreferrer">Open in Google Maps</a>` : ""}
              ${hotspot.url ? `<a class="hotspot-direct-link" href="${hotspot.url}" target="_blank" rel="noreferrer">eBird hotspot</a>` : ""}
              ${!hotspot.mapsUrl && !hotspot.url ? hotspot.signal : ""}
            </p>
            ${
              hotspot.recentSpeciesCount === null || hotspot.recentSpeciesCount === undefined
                ? `<p class="hotspot-recent">Last 7 days: checking species count</p>`
                : `<p class="hotspot-recent">Last 7 days: ${hotspot.recentSpeciesCount} species reported</p>`
            }
            ${
              hotspot.recentMigrants?.length
                ? `<p class="hotspot-migrants">Migrants reported: ${hotspot.recentMigrants.join(", ")}</p>`
                : hotspot.recentSpeciesCount === null || hotspot.recentSpeciesCount === undefined
                  ? `<p class="hotspot-migrants">Migrants reported: checking recent reports</p>`
                  : `<p class="hotspot-migrants">Migrants reported: none detected in recent hotspot pull</p>`
            }
            <p class="habitat">${hotspot.habitat}</p>
            ${
              hotspot.species?.length
                ? `<div class="chips species-list">${hotspot.species
                    .map((species) => {
                      const art = speciesArt(species);
                      return speciesChipLink(species, art);
                    })
                    .join("")}</div>`
                : ""
            }
          </div>
        </article>
      `,
    )
    .join("");

  document.querySelector("#hotspotGrid").innerHTML = cards;
  document.querySelector("#hotspotIntro").textContent =
    hasActiveHotspotData
      ? activeHotspotFilterComplete
        ? `Showing ${filteredHotspots.length} ${regionName} hotspots with migrant signal species reported in the last 7 days.`
        : `Loaded ${activeRegionHotspots.length} county-specific eBird hotspots for ${regionName}; checking recent migrant reports.`
      : `${activeHotspotStatus} Ranked for ${regionName} using water, riparian cover, migrant habitat, and current sample signals.`;
}

function renderRegion() {
  const region = getRegion();
  const fullName = region.state ? `${region.name}, ${region.state}` : region.name;
  const birdcastUrl = region.birdcastCode
    ? `https://dashboard.birdcast.org/region/${region.birdcastCode}`
    : "https://dashboard.birdcast.org/";
  const ebirdUrl = region.ebirdCode
    ? `https://ebird.org/region/${region.ebirdCode}`
    : "https://ebird.org/explore";
  const searchName = encodeURIComponent(fullName);
  const ebirdHotspotsUrl = region.ebirdCode
    ? `https://ebird.org/region/${region.ebirdCode}/hotspots`
    : `https://ebird.org/explore?search=${searchName}`;
  const weatherUrl = `https://www.google.com/search?q=${encodeURIComponent(`weather forecast ${fullName}`)}`;

  document.querySelector("#regionEyebrow").textContent = fullName;
  document.querySelector("#regionTitle").textContent = region.name;
  const hasMatchingBirdcastMeta = activeBirdcastMeta?.regionCode === region.birdcastCode;
  if (birdsCrossedCaption) {
    birdsCrossedCaption.textContent =
      hasMatchingBirdcastMeta && activeBirdcastMeta.startTime
        ? `Starting: ${activeBirdcastMeta.startTime}`
        : `Birds have crossed ${region.name} so far tonight (est.).`;
  }
  if (birdsInFlightCaption) {
    birdsInFlightCaption.innerHTML =
      hasMatchingBirdcastMeta &&
      (activeBirdcastMeta.direction ||
        activeBirdcastMeta.speed ||
        activeBirdcastMeta.altitude ||
        activeBirdcastMeta.recorded)
        ? [
            activeBirdcastMeta.direction || activeBirdcastMeta.speed || activeBirdcastMeta.altitude
              ? `<span class="birdcast-flight-line">${[
                  activeBirdcastMeta.direction
                    ? `<strong>Direction:</strong> ${activeBirdcastMeta.direction}`
                    : "",
                  activeBirdcastMeta.speed ? `<strong>Speed:</strong> ${activeBirdcastMeta.speed}` : "",
                  activeBirdcastMeta.altitude
                    ? `<strong>Altitude:</strong> ${activeBirdcastMeta.altitude}`
                    : "",
                ]
                  .filter(Boolean)
                  .join(" · ")}</span>`
              : "",
            activeBirdcastMeta.recorded
              ? `<span><strong>Recorded:</strong> ${activeBirdcastMeta.recorded}</span>`
              : "",
          ]
            .filter(Boolean)
            .join("")
        : `Birds now in flight over ${region.name} (est.).`;
  }
  document.title = "FeatherCast";
  document.querySelector("#birdcastLink").href = birdcastUrl;
  document.querySelector("#birdcastLink").textContent = region.birdcastCode
    ? `BirdCast ${region.name}`
    : `Search BirdCast for ${region.name}`;
  document.querySelector("#ebirdRegionLink").href = ebirdUrl;
  document.querySelector("#ebirdRegionLink").textContent = region.ebirdCode ? `eBird ${region.name}` : "eBird Explore";
  document.querySelector("#ebirdHotspotsLink").href = ebirdHotspotsUrl;
  document.querySelector("#ebirdHotspotsLink").textContent = `eBird Hotspots ${region.name}`;
  document.querySelector("#birdcastSourceLink").href = birdcastUrl;
  document.querySelector("#birdcastSourceLink").textContent = region.birdcastCode
    ? `BirdCast ${region.name}`
    : "BirdCast Dashboard";
  document.querySelector("#weatherSourceLink").href = weatherUrl;
  document.querySelector("#weatherSourceLink").textContent = `Weather Forecast ${region.name}`;
  document.querySelector("#speciesRegionTitle").textContent = `for ${fullName}`;
  document.querySelector("#hotspotHeadingMeta").textContent =
    `${fullName} · ${new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date())}`;
  updateRegionPhoto(region);
  updateCurrentWeather(region);
  renderRareSpecies(fullName);

  const showManual = fields.regionSelect.value === "manual";
  document.querySelector("#manualCountyLabel").classList.toggle("is-hidden", !showManual);
  document.querySelector("#manualCodeLabel").classList.toggle("is-hidden", !showManual);
  document.querySelector("#manualStateLabel").classList.toggle("is-hidden", !showManual);
}

function renderSpecies() {
  document.querySelector("#speciesList").innerHTML = indicatorSpecies
    .map((species) => {
      const art = speciesArt(species);
      return speciesChipLink(species, art);
    })
    .join("");
}

function renderStateOptions() {
  const preloaded = new Set(Object.keys(offlineCountyData));
  const orderedStates = [
    ...states.filter((state) => preloaded.has(state.abbr)).sort((a, b) => a.name.localeCompare(b.name)),
    ...states.filter((state) => !preloaded.has(state.abbr)),
  ];

  fields.stateSelect.innerHTML = orderedStates
    .map(
      (state) =>
        `<option value="${state.abbr}" ${state.abbr === "TX" ? "selected" : ""}>${state.name}${preloaded.has(state.abbr) ? " - counties preloaded" : ""}</option>`,
    )
    .join("");
}

function knownRegionsForState(stateAbbr) {
  return Object.values(regions).filter((region) => region.ebirdCode.includes(`-${stateAbbr}-`));
}

function setCountyStatus(message) {
  fields.countyStatus.textContent = message;
}

function setEbirdStatus(message) {
  fields.ebirdLiveSummary.textContent = message;
}

function countiesFromOfflineData(state) {
  const data = offlineCountyData[state.abbr];
  if (!data) return [];

  return data
    .trim()
    .split("\n")
    .map((line) => {
      const [countyFips, name] = line.split("|");
      return {
        name,
        ebirdCode: `US-${state.abbr}-${countyFips}`,
      };
    });
}

function normalizeCountyName(name) {
  return name
    .toLowerCase()
    .replace(/\bcounty\b/g, "")
    .replace(/[^a-z0-9]/g, "");
}

function regionCodeFromCountyName(countyName, state) {
  const normalizedName = normalizeCountyName(countyName);
  const match = countiesFromOfflineData(state).find(
    (county) => normalizeCountyName(county.name) === normalizedName,
  );
  return match?.ebirdCode || "";
}

async function fetchCountiesForState(state) {
  if (countyCache.has(state.abbr)) {
    return countyCache.get(state.abbr);
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000);
  const url = `https://api.census.gov/data/2020/dec/pl?get=NAME&for=county:*&in=state:${state.fips}`;
  const response = await fetch(url, { signal: controller.signal });
  clearTimeout(timeoutId);
  if (!response.ok) throw new Error("County lookup failed");

  const rows = await response.json();
  const counties = rows
    .slice(1)
    .map(([name, , countyFips]) => {
      const countyName = name.replace(`, ${state.name}`, "");
      const ebirdCode = `US-${state.abbr}-${countyFips}`;
      return {
        name: countyName,
        ebirdCode,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  countyCache.set(state.abbr, counties);
  return counties;
}

function renderCountyOptions(counties, sourceLabel) {
  const knownCodes = new Set(Object.keys(regions));
  const options = counties
    .map((county) => {
      const richLabel = knownCodes.has(county.ebirdCode) ? " data-rich" : "";
      return `<option value="${county.ebirdCode}" data-name="${county.name}">${county.name}${richLabel}</option>`;
    })
    .join("");

  fields.regionSelect.innerHTML = `${options}<option value="manual" data-name="Manual County">Manual county / region</option>`;
  setCountyStatus(sourceLabel);

  fields.regionSelect.value = counties[0]?.ebirdCode || "manual";
}

async function fetchCountyObservationCount(county) {
  try {
    const observations = await fetchEbirdJson(
      `data/obs/${county.ebirdCode}/recent?back=7&includeProvisional=true&maxResults=10000`,
      EBIRD_API_TOKEN,
    );
    return new Set(observations.map((obs) => obs.subId || `${obs.speciesCode}-${obs.obsDt}-${obs.locId}`)).size;
  } catch {
    return 0;
  }
}

async function rankCountiesByRecentActivity(counties, state) {
  if (!counties.length) return counties;
  if (countyActivityCache.has(state.abbr)) return countyActivityCache.get(state.abbr);

  setCountyStatus(`Loading recent eBird activity for ${state.name} counties...`);
  const ranked = [];
  const queue = [...counties];
  const workers = Array.from({ length: Math.min(6, queue.length) }, async () => {
    while (queue.length) {
      const county = queue.shift();
      const recentCount = await fetchCountyObservationCount(county);
      ranked.push({ ...county, recentCount });
    }
  });
  await Promise.all(workers);
  ranked.sort((a, b) => b.recentCount - a.recentCount || a.name.localeCompare(b.name));
  countyActivityCache.set(state.abbr, ranked);
  return ranked;
}

function renderFallbackCountyOptions(state) {
  const offlineCounties = countiesFromOfflineData(state);
  if (offlineCounties.length) {
    renderCountyOptions(offlineCounties, `Offline county list: showing ${offlineCounties.length} ${state.name} counties.`);
    return;
  }

  const knownCounties = knownRegionsForState(state.abbr).map((region) => ({
    name: region.name,
    ebirdCode: region.ebirdCode,
  }));

  if (knownCounties.length) {
    renderCountyOptions(knownCounties, "Offline fallback: showing built-in sample counties for this state.");
    return;
  }

  fields.regionSelect.innerHTML = `<option value="manual" data-name="Manual County">Manual county / region</option>`;
  fields.regionSelect.value = "manual";
  setCountyStatus("County lookup unavailable. Enter a county manually.");
}

async function loadCountiesForSelectedState() {
  const state = getSelectedState();
  renderFallbackCountyOptions(state);
  const fallbackStatus = fields.countyStatus.textContent;
  if (!countiesFromOfflineData(state).length) {
    setCountyStatus(`Trying to load all ${state.name} counties...`);
  }

  try {
    const counties = await fetchCountiesForState(state);
    renderCountyOptions(counties, `Loaded ${counties.length} counties from Census county data.`);
    const rankedCounties = await rankCountiesByRecentActivity(counties, state);
    renderCountyOptions(rankedCounties, `Sorted ${rankedCounties.length} ${state.name} counties by eBird reports from the last 7 days.`);
  } catch {
    setCountyStatus(fallbackStatus || `Online county lookup unavailable. Showing fallback options for ${state.name}.`);
  }

  updateDashboard();
  refreshSelectedCountyData();
}

async function fetchEbirdJson(path, token) {
  const separator = path.includes("?") ? "&" : "?";
  const response = await fetch(`https://api.ebird.org/v2/${path}${separator}key=${encodeURIComponent(token)}`);

  if (!response.ok) {
    throw new Error(`eBird returned ${response.status}`);
  }

  return response.json();
}

async function getTaxonomy() {
  if (taxonomyCache) return taxonomyCache;
  const taxonomy = await fetchEbirdJson("ref/taxonomy/ebird?fmt=json", EBIRD_API_TOKEN);
  taxonomyCache = taxonomy
    .filter((item) => item.comName && item.speciesCode)
    .map((item) => ({ name: item.comName, code: item.speciesCode }));
  taxonomyCache.forEach((item) => speciesCodeByName.set(item.name, item.code));
  return taxonomyCache;
}

function renderBirdMatches(matches) {
  if (!birdMatchLabel || !birdMatchSelect) return;
  if (matches.length <= 1) {
    birdMatchLabel.classList.add("is-hidden");
    birdMatchSelect.innerHTML = "";
    return;
  }
  birdMatchSelect.innerHTML = matches
    .map((match) => `<option value="${match.code}">${match.name}</option>`)
    .join("");
  birdMatchLabel.classList.remove("is-hidden");
}

function formatFinderObservation(obs) {
  return [obs?.locName, obs?.obsDt].filter(Boolean).join(" on ");
}

function monthSampleDates(year, monthIndex) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  return [1, 8, 15, 22, Math.min(29, daysInMonth)]
    .filter((day, index, values) => values.indexOf(day) === index)
    .map((day) => ({ year, month: monthIndex + 1, day }));
}

async function historicalSeasonCheck(regionCode, speciesCode) {
  const today = new Date();
  const years = Array.from({ length: 5 }, (_, index) => today.getFullYear() - index - 1);
  const monthIndexes = [today.getMonth(), (today.getMonth() + 11) % 12];
  const checks = await Promise.all(
    years.map(async (year) => {
      try {
        const monthChecks = await Promise.all(
          monthIndexes.flatMap((monthIndex) =>
            monthSampleDates(monthIndex === 11 && today.getMonth() === 0 ? year - 1 : year, monthIndex).map(
              async ({ year: sampleYear, month, day }) => {
                try {
                  const observations = await fetchEbirdJson(
                    `data/obs/${regionCode}/historic/${sampleYear}/${month}/${day}?detail=full&maxResults=10000`,
                    EBIRD_API_TOKEN,
                  );
                  return observations.some((obs) => obs.speciesCode === speciesCode);
                } catch {
                  return false;
                }
              },
            ),
          ),
        );
        return monthChecks.some(Boolean);
      } catch {
        return false;
      }
    }),
  );
  return checks.filter(Boolean).length;
}

async function historicalAnyTimeCheck(regionCode, speciesCode) {
  const today = new Date();
  const years = Array.from({ length: 5 }, (_, index) => today.getFullYear() - index - 1);
  let observationCount = 0;

  for (const year of years) {
    for (let monthIndex = 0; monthIndex < 12; monthIndex += 1) {
      const monthChecks = await Promise.all(
        monthSampleDates(year, monthIndex).map(async ({ month, day }) => {
          try {
            const observations = await fetchEbirdJson(
              `data/obs/${regionCode}/historic/${year}/${month}/${day}?detail=full&maxResults=10000`,
              EBIRD_API_TOKEN,
            );
            return observations.filter((obs) => obs.speciesCode === speciesCode).length;
          } catch {
            return 0;
          }
        }),
      );
      observationCount += monthChecks.reduce((sum, count) => sum + count, 0);
    }
  }

  return observationCount;
}

async function runBirdFinderSearch(bird, requestId = ++birdFinderRequestId) {
  const region = getRegion();
  if (!bird || !region.ebirdCode || !birdFinderResult) return;
  birdFinderResult.classList.add("is-searching");
  birdFinderResult.textContent = `Checking ${bird.name} in ${region.name}...`;
  try {
    const [recent, historicYears, photoUrl, status] = await Promise.all([
      fetchEbirdJson(
        `data/obs/${region.ebirdCode}/recent/${bird.code}?back=30&includeProvisional=true&maxResults=10`,
        EBIRD_API_TOKEN,
      ),
      historicalSeasonCheck(region.ebirdCode, bird.code),
      speciesPhotoUrl(bird.name),
      speciesStatus(bird.code),
    ]);
    const priorFiveYearCount = historicYears
      ? 0
      : await historicalAnyTimeCheck(region.ebirdCode, bird.code);
    const latest = recent[0];
    const speciesUrl = `https://ebird.org/species/${bird.code}`;
    const latestUrl = latest?.subId
      ? `https://ebird.org/checklist/${latest.subId}`
      : latest?.locId
        ? `https://ebird.org/hotspot/${latest.locId}`
        : speciesUrl;
    const recentText = latest
      ? `Latest recent report: <a href="${latestUrl}" target="_blank" rel="noreferrer">${formatFinderObservation(latest)}</a>.`
      : "No recent county report returned in the last 30 days.";
    const seasonalText = historicYears
      ? `Recorded during the current or previous month in ${historicYears} of the last 5 years.`
      : priorFiveYearCount
        ? `Found in ${region.name} ${priorFiveYearCount} time${priorFiveYearCount === 1 ? "" : "s"} during the last 5 years, but not during the current or previous month.`
        : `Never found in ${region.name} during the last 5 years.`;
    const statusText = status?.code && status?.label
      ? `<span class="species-status">${status.code} ${status.label}</span>`
      : "";
    if (requestId !== birdFinderRequestId) return;
    birdFinderResult.classList.remove("is-searching");
    birdFinderResult.innerHTML = `
      <div class="bird-finder-card">
        <a class="bird-finder-photo" href="${speciesUrl}" target="_blank" rel="noreferrer" title="Open species page">
          ${photoUrl ? `<img src="${photoUrl}" alt="" />` : ""}
        </a>
        <div>
          <h3><a href="${speciesUrl}" target="_blank" rel="noreferrer">${bird.name}</a>${statusText}</h3>
          <p>${recentText}</p>
          <p>${seasonalText}</p>
        </div>
      </div>
    `;
  } catch {
    if (requestId !== birdFinderRequestId) return;
    birdFinderResult.classList.remove("is-searching");
    birdFinderResult.textContent = `Could not load eBird details for ${bird.name}.`;
  }
}

async function updateBirdFinderMatches() {
  const requestId = ++birdFinderRequestId;
  const query = String(birdSearchInput?.value || "").trim().toLowerCase();
  if (!birdFinderResult) return;
  if (query.length < 2) {
    if (requestId !== birdFinderRequestId) return;
    birdFinderResult.classList.remove("is-searching");
    renderBirdMatches([]);
    birdFinderResult.textContent = "Search a species to check recent county reports and seasonal history.";
    return;
  }
  birdFinderResult.classList.add("is-searching");
  birdFinderResult.textContent = "Searching birds...";
  try {
    const taxonomy = await getTaxonomy();
    if (requestId !== birdFinderRequestId) return;
    const matches = taxonomy
      .filter((item) => item.name.toLowerCase().includes(query))
      .sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        const score = (name) => {
          if (name === query) return 0;
          if (name.startsWith(query)) return 1;
          if (name.split(/[^a-z]+/).some((part) => part.startsWith(query))) return 2;
          return 3;
        };
        return score(aName) - score(bName) || a.name.localeCompare(b.name);
      });
    if (!matches.length) {
      if (requestId !== birdFinderRequestId) return;
      birdFinderResult.classList.remove("is-searching");
      renderBirdMatches([]);
      birdFinderResult.textContent = "No matching bird names found.";
      return;
    }
    renderBirdMatches(matches);
    const selected = matches.find((match) => match.code === birdMatchSelect?.value) || matches[0];
    await runBirdFinderSearch(selected, requestId);
  } catch {
    if (requestId !== birdFinderRequestId) return;
    birdFinderResult.classList.remove("is-searching");
    birdFinderResult.textContent = "Could not load the eBird species list.";
  }
}

async function refreshHotspotsForSelectedRegion() {
  const region = getRegion();
  const regionName = region.state ? `${region.name}, ${region.state}` : region.name;
  const regionCode = region.ebirdCode;

  if (!regionCode) {
    activeHotspotRegionCode = "";
    activeRegionHotspots = [];
    activeHotspotStatus = "No eBird region code is available for this county yet.";
    updateDashboard();
    return;
  }

  if (hotspotCache.has(regionCode)) {
    activeHotspotRegionCode = regionCode;
    activeRegionHotspots = hotspotCache.get(regionCode);
    activeHotspotFilterComplete = true;
    activeHotspotStatus = `Loaded cached eBird hotspots for ${regionName}.`;
    updateDashboard();
    return;
  }

  activeHotspotRegionCode = "";
  activeRegionHotspots = [];
  activeHotspotFilterComplete = false;
  activeHotspotStatus = `Loading eBird hotspots for ${regionName}...`;
  updateDashboard();

  try {
    const [hotspots, recentObservations] = await Promise.all([
      fetchEbirdJson(`ref/hotspot/${regionCode}?fmt=json`, EBIRD_API_TOKEN),
      fetchEbirdJson(`data/obs/${regionCode}/recent?back=7&includeProvisional=true&maxResults=10000`, EBIRD_API_TOKEN),
    ]);
    const notableObservations = await fetchEbirdJson(
      `data/obs/${regionCode}/recent/notable?back=7&detail=full&maxResults=50`,
      EBIRD_API_TOKEN,
    );
    const autoSummary = summarizeEbirdObservations(recentObservations.slice(0, 200), notableObservations);
    activeRareRegionCode = regionCode;
    activeRareObservations = notableObservations;
    applyEbirdSignal(autoSummary);
    renderLocalMigrants(autoSummary.localMigrants, regionName);
    renderRareSpecies(regionName);
    const hotspotById = new Map(hotspots.map((hotspot) => [hotspot.locId, hotspot]));
    const observationsByHotspot = new Map();

    recentObservations.forEach((obs) => {
      if (!obs.locId || !hotspotById.has(obs.locId)) return;
      if (!observationsByHotspot.has(obs.locId)) observationsByHotspot.set(obs.locId, []);
      observationsByHotspot.get(obs.locId).push(obs);
    });

    const cards = [...observationsByHotspot.entries()]
      .map(([locId, observations], index) => {
        const hotspot = hotspotById.get(locId);
        const card = ebirdHotspotToCard(hotspot, index, regionName);
        card.recentSpeciesCount = new Set(
          observations.map((obs) => obs.speciesCode || obs.comName).filter(Boolean),
        ).size;
        card.recentMigrants = extractLocalMigrants(observations, []).map((species) => species.name).slice(0, 8);
        card.species = card.recentMigrants.slice(0, 4);
        return card;
      })
      .filter((card) => card.recentMigrants.length)
      .sort((a, b) => b.recentMigrants.length - a.recentMigrants.length || b.recentSpeciesCount - a.recentSpeciesCount)
      .slice(0, 12);

    hotspotCache.set(regionCode, cards);
    activeHotspotRegionCode = regionCode;
    activeRegionHotspots = cards;
    activeHotspotFilterComplete = true;
    activeHotspotStatus = cards.length
      ? `Loaded migrant-active eBird hotspots for ${regionName}.`
      : `No eBird hotspots had migrant signal species reported in ${regionName} in the last 7 days.`;
  } catch (error) {
    activeHotspotRegionCode = "";
    activeRegionHotspots = [];
    activeHotspotFilterComplete = false;
    activeHotspotStatus = `Could not load eBird hotspots for ${regionName} (${error.message}); showing habitat-based fallback.`;
  }

  updateDashboard();
}

async function refreshSelectedCountyData() {
  await refreshHotspotsForSelectedRegion();
  await refreshEbirdReports();
  await refreshBirdcastCountyData();
  if (birdSearchInput?.value.trim()) await updateBirdFinderMatches();
}

function summarizeEbirdObservations(recent, notable) {
  latestObservationBySpecies.clear();
  [...recent, ...notable].forEach((obs) => {
    const name = String(obs.comName || "").trim();
    if (!name || latestObservationBySpecies.has(name)) return;
    latestObservationBySpecies.set(name, obs);
  });
  const indicatorSightings = recent.filter((obs) =>
    indicatorSpeciesSet.has(String(obs.comName || "").toLowerCase()),
  );
  const localMigrants = extractLocalMigrants(recent, notable);
  const locations = new Set(recent.map((obs) => obs.locName).filter(Boolean));
  const notableNames = notable
    .map((obs) => obs.comName)
    .filter(Boolean)
    .slice(0, 4);
  const indicatorNames = [...new Set(indicatorSightings.map((obs) => obs.comName))]
    .filter(Boolean)
    .slice(0, 5);

  return {
    recentCount: recent.length,
    notableCount: notable.length,
    locationCount: locations.size,
    indicatorCount: indicatorSightings.length,
    notableNames,
    indicatorNames,
    localMigrants,
  };
}

function extractLocalMigrants(recent, notable) {
  const counts = new Map();
  const observations = [...notable, ...recent];

  observations.forEach((obs) => {
    const name = String(obs.comName || "").trim();
    if (!name) return;
    if (obs.speciesCode) speciesCodeByName.set(name, obs.speciesCode);

    const normalized = name.toLowerCase();
    const isKnownIndicator = indicatorSpeciesSet.has(normalized);
    const looksLikeMigrant = migrantKeywordPattern.test(name);
    const isExcludedResident = residentExclusions.has(normalized);

    if ((isKnownIndicator || looksLikeMigrant) && !isExcludedResident) {
      counts.set(name, (counts.get(name) || 0) + Number(obs.howMany || 1));
    }
  });

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 18)
    .map(([name, count]) => ({ name, count }));
}

function renderLocalMigrants(localMigrants, regionName) {
  const note = document.querySelector("#speciesSourceNote");

  if (!localMigrants.length) {
    renderSpecies();
    note.textContent = `No migrant signal species were found in the latest eBird pull for ${regionName}; showing fallback watch list.`;
    return;
  }

  document.querySelector("#speciesList").innerHTML = localMigrants
    .map((species) => {
      const art = speciesArt(species.name);
      return localMigrantChip(species.name, art, species.count > 1 ? ` (${species.count})` : "");
    })
    .join("");
  note.textContent = `Updated from recent eBird observations for ${regionName}. Counts reflect records in the latest pull, not a full population estimate.`;
}

function speciesArt(name) {
  const palette = exactSpeciesPalette(name);
  return {
    className: `species-chip ${speciesClass(name)} ${exactSpeciesClass(name)}`,
    style: palette
      ? `--bird-body:${palette.body};--bird-wing:${palette.wing};--bird-belly:${palette.belly};--bird-eye:${palette.eye || "#1e1a13"};`
      : "",
  };
}

function speciesChipLink(name, art, suffix = "") {
  const label = `${name}${suffix}`;
  const code = speciesCodeByName.get(name);
  const href = code
    ? `https://ebird.org/species/${code}`
    : `https://ebird.org/explore?search=${encodeURIComponent(name)}`;
  return `<a class="${art.className}" style="${art.style}" href="${href}" target="_blank" rel="noreferrer">${label}</a>`;
}

function recentObservationUrl(name) {
  const observation = latestObservationBySpecies.get(name);
  if (!observation) return "";
  if (observation.locId) return `https://ebird.org/hotspot/${observation.locId}`;
  const checklistId = observation.subId || observation.checklistId || "";
  return checklistId ? `https://ebird.org/checklist/${checklistId}` : "";
}

function localMigrantChip(name, art, suffix = "") {
  const code = speciesCodeByName.get(name);
  const speciesUrl = code
    ? `https://ebird.org/species/${code}`
    : `https://ebird.org/explore?search=${encodeURIComponent(name)}`;
  const observationUrl = recentObservationUrl(name) || speciesUrl;
  return `
    <span class="${art.className} split-species-chip" style="${art.style}">
      <a
        class="species-chip-art-link"
        href="${observationUrl}"
        target="_blank"
        rel="noreferrer"
        aria-label="Open latest eBird location for ${name}"
        title="Open latest sighting location"
      ></a>
      <a
        class="species-chip-name-link"
        href="${speciesUrl}"
        target="_blank"
        rel="noreferrer"
        title="Open species page"
      >${name}${suffix}</a>
    </span>
  `;
}

async function renderRareSpecies(regionName) {
  const note = document.querySelector("#rareSpeciesNote");
  const list = document.querySelector("#rareSpeciesList");
  const region = getRegion();

  if (activeRareRegionCode !== region.ebirdCode) {
    note.textContent = "Pull eBird reports to load notable species from the last 7 days.";
    list.innerHTML = "";
    return;
  }

  const rareSpecies = [...new Map(
    activeRareObservations
      .filter((obs) => obs.comName)
      .map((obs) => {
        const shownName = displaySpeciesName(obs.comName);
        if (obs.speciesCode) {
          speciesCodeByName.set(obs.comName, obs.speciesCode);
          speciesCodeByName.set(shownName, obs.speciesCode);
        }
        return [shownName, { ...obs, displayName: shownName }];
      }),
  ).values()].slice(0, 10);

  if (!rareSpecies.length) {
    note.textContent = `No notable species were returned for ${regionName} in the last 7 days.`;
    list.innerHTML = "";
    return;
  }

  note.textContent = `Notable eBird reports in ${regionName} from the last 7 days.`;
  const rows = await Promise.all(
    rareSpecies.map(async (obs) => {
      const shownName = obs.displayName || displaySpeciesName(obs.comName);
      const art = speciesArt(shownName);
      const code = speciesCodeByName.get(shownName) || speciesCodeByName.get(obs.comName);
      const speciesUrl = code
        ? `https://ebird.org/species/${code}`
        : `https://ebird.org/explore?search=${encodeURIComponent(shownName)}`;
      const checklistId = obs.subId || obs.checklistId || "";
      const checklistUrl = checklistId ? `https://ebird.org/checklist/${checklistId}` : speciesUrl;
      const photoUrl = await speciesPhotoUrl(shownName);
      const artMarkup = photoUrl ? `<img src="${photoUrl}" alt="" />` : "";
      return `
        <div class="rare-species-row">
          <a
            class="${art.className} rare-species-art"
            style="${art.style}"
            href="${checklistUrl}"
            target="_blank"
            rel="noreferrer"
            aria-label="Open checklist where ${shownName} was reported"
            title="Open sighting checklist"
          >${artMarkup}</a>
          <a
            class="rare-species-name"
            href="${speciesUrl}"
            target="_blank"
            rel="noreferrer"
            title="Open species page"
          >${shownName}</a>
        </div>
      `;
    }),
  );
  list.innerHTML = rows.join("");
}

function exactSpeciesClass(name) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const supported = new Set([
    "indigo-bunting",
    "painted-bunting",
    "black-and-white-warbler",
    "blackburnian-warbler",
    "prothonotary-warbler",
    "wilson-s-warbler",
    "baltimore-oriole",
    "orchard-oriole",
    "summer-tanager",
    "scarlet-tanager",
  ]);
  return supported.has(normalized) ? `species-${normalized}` : "";
}

function exactSpeciesPalette(name) {
  const palettes = {
    "nashville warbler": { body: "#d8d55d", wing: "#68794f", belly: "#f3d74c" },
    "black-and-white warbler": { body: "#f4f0e5", wing: "#111111", belly: "#d8d3c8" },
    "yellow warbler": { body: "#f4d43f", wing: "#c88b32", belly: "#ffe06a" },
    "blackburnian warbler": { body: "#ef7f2d", wing: "#111111", belly: "#f4efe4", eye: "#111111" },
    "prothonotary warbler": { body: "#f0c438", wing: "#697d88", belly: "#f7dc54" },
    "wilson's warbler": { body: "#f2cf3b", wing: "#65794a", belly: "#f5dd58", eye: "#111111" },
    "hooded warbler": { body: "#f1c83d", wing: "#516d45", belly: "#f7dd59", eye: "#111111" },
    "kentucky warbler": { body: "#f1c848", wing: "#4f6f45", belly: "#f6db5f", eye: "#111111" },
    "magnolia warbler": { body: "#f0cb3f", wing: "#2d2d2d", belly: "#f3d84e" },
    "american redstart": { body: "#111111", wing: "#e67824", belly: "#f08a32", eye: "#f7efe0" },
    "northern parula": { body: "#6f92ac", wing: "#536f7f", belly: "#f0c948" },
    "common yellowthroat": { body: "#d8c64d", wing: "#536f42", belly: "#f1d758", eye: "#111111" },
    "yellow-rumped warbler": { body: "#77808a", wing: "#404b55", belly: "#f0d348" },
    "orange-crowned warbler": { body: "#b9b55c", wing: "#687347", belly: "#d9cf78" },
    "tennessee warbler": { body: "#c7c36f", wing: "#6d7657", belly: "#eee3a6" },
    "palm warbler": { body: "#c99b61", wing: "#7a6245", belly: "#e8c887" },
    "pine warbler": { body: "#d4c95b", wing: "#627547", belly: "#eadb76" },
    "prairie warbler": { body: "#f0d34a", wing: "#536d43", belly: "#f7df62" },
    "bay-breasted warbler": { body: "#8f4838", wing: "#2f2d26", belly: "#d9c39a" },
    "chestnut-sided warbler": { body: "#f4efe4", wing: "#4f5f54", belly: "#9e4f39" },
    "black-throated green warbler": { body: "#d6c94a", wing: "#4f6b44", belly: "#f1e59c", eye: "#111111" },
    "golden-winged warbler": { body: "#f0d24d", wing: "#2d2d2d", belly: "#e8e0b5" },
    "blue-winged warbler": { body: "#f1d34d", wing: "#667f8e", belly: "#f6e263" },
    "cerulean warbler": { body: "#5d93c3", wing: "#2d5f8c", belly: "#f3efe2" },
    "canada warbler": { body: "#f0c942", wing: "#566d5b", belly: "#f4dc5c" },
    "mourning warbler": { body: "#d2c35d", wing: "#667052", belly: "#dfd078" },
    "worm-eating warbler": { body: "#c9b477", wing: "#7a684b", belly: "#e7d398" },
    "yellow-breasted chat": { body: "#f0c949", wing: "#536b47", belly: "#f6dc55" },
    "white-eyed vireo": { body: "#b7c15d", wing: "#526d4c", belly: "#e4e3a1", eye: "#f8f4d7" },
    "yellow-throated vireo": { body: "#d9cc50", wing: "#586f4b", belly: "#f1d75b" },
    "summer tanager": { body: "#d83a2f", wing: "#a52224", belly: "#e4493f" },
    "scarlet tanager": { body: "#d92329", wing: "#151515", belly: "#e63b3f" },
    "baltimore oriole": { body: "#f28f24", wing: "#151515", belly: "#ffad37", eye: "#f7efe0" },
    "orchard oriole": { body: "#8d3d29", wing: "#171717", belly: "#b05232", eye: "#f7efe0" },
    "rose-breasted grosbeak": { body: "#f5f0e8", wing: "#151515", belly: "#ba263b" },
    "blue grosbeak": { body: "#315fa8", wing: "#1f3f82", belly: "#8b4b2f", eye: "#f7efe0" },
    "indigo bunting": { body: "#2564b1", wing: "#153f85", belly: "#3b7ed0", eye: "#f7efe0" },
    "painted bunting": { body: "#2f79bb", wing: "#2f9a62", belly: "#c93441", eye: "#f7efe0" },
    "swainson's thrush": { body: "#a5754a", wing: "#6b422b", belly: "#e0c49a" },
    "eastern wood-pewee": { body: "#b9b389", wing: "#5f6b5b", belly: "#e2d7b8" },
    "least flycatcher": { body: "#c7bea1", wing: "#63715d", belly: "#eee2c2" },
    "scissor-tailed flycatcher": { body: "#d7d2c4", wing: "#555f63", belly: "#e0a0a8" },
    "warbling vireo": { body: "#bebf87", wing: "#6b765d", belly: "#ede7bd" },
  };

  return palettes[name.toLowerCase()];
}

function speciesClass(name) {
  const normalized = name.toLowerCase();
  const groups = [
    ["warbler", "bird-warbler"],
    ["redstart", "bird-warbler"],
    ["waterthrush", "bird-warbler"],
    ["tanager", "bird-tanager"],
    ["oriole", "bird-oriole"],
    ["bunting", "bird-bunting"],
    ["grosbeak", "bird-grosbeak"],
    ["vireo", "bird-vireo"],
    ["thrush", "bird-thrush"],
    ["flycatcher", "bird-flycatcher"],
    ["pewee", "bird-flycatcher"],
    ["phoebe", "bird-flycatcher"],
    ["kingbird", "bird-flycatcher"],
    ["chat", "bird-chat"],
  ];
  const match = groups.find(([keyword]) => normalized.includes(keyword));
  return `species-chip ${match ? match[1] : "bird-generic"}`;
}

function applyEbirdSignal(summary) {
  if (summary.notableCount > 0) {
    fields.ebirdSignal.value = "rare";
    return;
  }

  if (summary.recentCount >= 50 || summary.indicatorCount >= 8 || summary.locationCount >= 8) {
    fields.ebirdSignal.value = "spike";
    return;
  }

  if (summary.recentCount > 0) {
    fields.ebirdSignal.value = "normal";
    return;
  }

  fields.ebirdSignal.value = "quiet";
}

async function refreshEbirdReports() {
  const token = EBIRD_API_TOKEN;
  const region = getRegion();
  const regionCode = region.ebirdCode;

  if (!regionCode) {
    setEbirdStatus("Choose a county with an eBird region code before pulling reports.");
    return;
  }

  fields.refreshEbird.disabled = true;
  setEbirdStatus(`Pulling recent eBird observations for ${region.name}...`);

  try {
    const recentPath = `data/obs/${regionCode}/recent?back=2&includeProvisional=true&maxResults=200`;
    const notablePath = `data/obs/${regionCode}/recent/notable?back=7&detail=full&maxResults=50`;
    const [recent, notable] = await Promise.all([
      fetchEbirdJson(recentPath, token),
      fetchEbirdJson(notablePath, token),
    ]);
    const summary = summarizeEbirdObservations(recent, notable);
    const fullRegionName = region.state ? `${region.name}, ${region.state}` : region.name;
    activeRareRegionCode = regionCode;
    activeRareObservations = notable;
    applyEbirdSignal(summary);
    renderLocalMigrants(summary.localMigrants, fullRegionName);
    renderRareSpecies(fullRegionName);
    updateReportTimestamp("Report updated");
    updateDashboard();

    const notableText = summary.notableNames.length
      ? ` Notable: ${summary.notableNames.join(", ")}.`
      : "";
    const indicatorText = summary.indicatorNames.length
      ? ` Indicators: ${summary.indicatorNames.join(", ")}.`
      : "";

    setEbirdStatus(
      `eBird pulled ${summary.recentCount} recent observations across ${summary.locationCount} locations, with ${summary.indicatorCount} indicator migrant records and ${summary.notableCount} notable records.${notableText}${indicatorText}`,
    );
  } catch {
    setEbirdStatus(
      "Could not pull eBird from this local page. Check the token and county code, or use the eBird region link and set the migrant signal manually.",
    );
  } finally {
    fields.refreshEbird.disabled = false;
  }
}

function birdcastMosaicUrl(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  const hour = String(date.getUTCHours()).padStart(2, "0");
  const minute = String(date.getUTCMinutes()).padStart(2, "0");
  return `https://is-birdcast-observed-prod.s3.us-east-1.amazonaws.com/mosaic/${year}/${month}/${day}/mosaic_${year}${month}${day}${hour}${minute}.jpg`;
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(url);
    image.onerror = reject;
    image.src = url;
  });
}

async function loadLatestBirdcastMap() {
  if (!birdcastMapImage || !birdcastMapStatus) return;

  const now = new Date();
  now.setUTCMinutes(Math.floor(now.getUTCMinutes() / 10) * 10, 0, 0);

  for (let minutesBack = 0; minutesBack <= 48 * 60; minutesBack += 10) {
    const candidate = new Date(now.getTime() - minutesBack * 60 * 1000);
    const url = birdcastMosaicUrl(candidate);

    try {
      const loadedUrl = await loadImage(url);
      birdcastMapImage.src = loadedUrl;
      birdcastMapStatus.textContent = `Loaded BirdCast frame ${candidate.toISOString().slice(0, 16).replace("T", " ")} UTC.`;
      return;
    } catch {
      // Try the next earlier 10-minute frame.
    }
  }

  birdcastMapStatus.textContent = "No recent BirdCast map image loaded. Open the full map with the link above.";
}

async function submitFeedback(event) {
  event.preventDefault();
  if (!feedbackForm || !feedbackMessage || !feedbackSubmit || !feedbackStatus) return;

  const message = feedbackMessage.value.trim();
  if (!message) {
    feedbackStatus.textContent = "Please add a suggestion before sending.";
    return;
  }

  if (window.location.protocol === "file:") {
    feedbackStatus.textContent = "Feedback sending works from the published website.";
    return;
  }

  feedbackSubmit.disabled = true;
  feedbackStatus.textContent = "Sending feedback...";

  try {
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: feedbackName?.value.trim() || "Anonymous",
        message,
        region: `${getRegion().name}, ${getSelectedState().name}`,
        pageUrl: window.location.href,
      }),
    });

    if (!response.ok) {
      throw new Error("Feedback could not be sent");
    }

    feedbackForm.reset();
    feedbackStatus.textContent = "Thank you. Your feedback was sent.";
  } catch {
    feedbackStatus.textContent = "Feedback could not be sent yet.";
  } finally {
    feedbackSubmit.disabled = false;
  }
}

function updateDashboard() {
  renderRegion();
  syncSignalDisplays();
  const signals = readSignals();
  syncBirdcastValueTone(signals.birdsCrossed, birdsCrossedDisplay);
  const result = scoreSignals(signals);
  renderRisk(result);
  renderInsights(signals, result);
  renderWindMap(signals);
  renderHotspots(result);
}

fields.stateSelect.addEventListener("change", loadCountiesForSelectedState);
fields.regionSelect.addEventListener("change", refreshSelectedCountyData);
birdSearchInput?.addEventListener("input", updateBirdFinderMatches);
feedbackForm?.addEventListener("submit", submitFeedback);
birdMatchSelect?.addEventListener("change", async () => {
  const taxonomy = await getTaxonomy();
  const selected = taxonomy.find((item) => item.code === birdMatchSelect.value);
  await runBirdFinderSearch(selected);
});
form.addEventListener("input", updateDashboard);
form.addEventListener("change", updateDashboard);
renderStateOptions();
renderSpecies();
updateReportTimestamp();
updateAppTimestamp();
loadCountiesForSelectedState();
loadLatestBirdcastMap();
