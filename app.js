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
  "US-TX-039": {
    name: "Brazoria County",
    state: "Texas",
    birdcastCode: "US-TX-039",
    ebirdCode: "US-TX-039",
    hotspots: [
      {
        name: "Quintana Neotropic Bird Sanctuary",
        area: "Quintana",
        habitat: "Coastal woodlot, migratory trap, water",
        base: 92,
        signal: "Premier coastal fallout trap. Outstanding first stop during spring migration.",
        species: ["Painted Bunting", "Indigo Bunting", "Yellow Warbler"],
      },
      {
        name: "Brazoria National Wildlife Refuge",
        area: "Brazoria",
        habitat: "Wetlands, marshes, coastal prairie",
        base: 86,
        signal: "Excellent for checking waterbirds and tired migrants working the salt cedar and willow lines.",
        species: ["Orchard Oriole", "Least Flycatcher", "Nashville Warbler"],
      },
      {
        name: "Gulf Coast Bird Observatory",
        area: "Lake Jackson",
        habitat: "Woodland trails, gardens, wetlands",
        base: 84,
        signal: "Great sheltered feeding area and watering holes for active migrant flocks.",
        species: ["Summer Tanager", "Rose-breasted Grosbeak", "Baltimore Oriole"],
      },
    ],
  },
  "US-TX-157": {
    name: "Fort Bend County",
    state: "Texas",
    birdcastCode: "US-TX-157",
    ebirdCode: "US-TX-157",
    hotspots: [
      {
        name: "Brazos Bend State Park",
        area: "Needville",
        habitat: "Wetlands, lakes, bottomland hardwood forest",
        base: 90,
        signal: "Huge diversity of habitats. Riparian bottomlands concentrate high counts of warblers and vireos.",
        species: ["Prothonotary Warbler", "Yellow-throated Vireo", "Summer Tanager"],
      },
      {
        name: "Cullinan Park",
        area: "Sugar Land",
        habitat: "Lakes, mixed forest, Oyster Creek corridor",
        base: 85,
        signal: "Superb oak canopy and riparian edges attract hungry migrant warblers and buntings.",
        species: ["Nashville Warbler", "Indigo Bunting", "Baltimore Oriole"],
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

const countyCityOptions = {
  "US-AZ-013": ["Chandler", "Gilbert", "Glendale", "Mesa", "Peoria", "Phoenix", "Scottsdale", "Tempe"],
  "US-AZ-019": ["Marana", "Oro Valley", "Sahuarita", "South Tucson", "Tucson"],
  "US-CA-037": [
    "Burbank",
    "Glendale",
    "Long Beach",
    "Los Angeles",
    "Malibu",
    "Pasadena",
    "Santa Clarita",
    "Santa Monica",
    "Torrance",
  ],
  "US-FL-011": ["Coral Springs", "Dania Beach", "Fort Lauderdale", "Hollywood", "Miramar", "Pembroke Pines", "Pompano Beach"],
  "US-FL-086": ["Coral Gables", "Doral", "Hialeah", "Homestead", "Miami", "Miami Beach", "Miami Gardens", "North Miami"],
  "US-FL-095": ["Apopka", "Maitland", "Ocoee", "Orlando", "Winter Garden", "Winter Park"],
  "US-TX-029": [
    "Alamo Heights",
    "Balcones Heights",
    "Converse",
    "Helotes",
    "Leon Valley",
    "San Antonio",
    "Schertz",
    "Universal City",
  ],
  "US-TX-031": ["Blanco", "Johnson City"],
  "US-TX-039": [
    "Alvin",
    "Angleton",
    "Brazoria",
    "Clute",
    "Freeport",
    "Lake Jackson",
    "Manvel",
    "Pearland",
    "Quintana",
    "Surfside Beach",
    "West Columbia",
  ],
  "US-TX-091": ["Bulverde", "Canyon Lake", "Garden Ridge", "New Braunfels", "Spring Branch"],
  "US-TX-157": [
    "Fulshear",
    "Katy",
    "Missouri City",
    "Needville",
    "Richmond",
    "Rosenberg",
    "Stafford",
    "Sugar Land",
  ],
  "US-TX-209": ["Buda", "Dripping Springs", "Driftwood", "Kyle", "San Marcos", "Wimberley"],
  "US-TX-453": [
    "Austin",
    "Bee Cave",
    "Cedar Park",
    "Jonestown",
    "Lago Vista",
    "Lakeway",
    "Manor",
    "Pflugerville",
    "Rollingwood",
    "Sunset Valley",
    "West Lake Hills",
  ],
  "US-TX-491": ["Cedar Park", "Georgetown", "Hutto", "Leander", "Liberty Hill", "Round Rock", "Taylor"],
};

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

const countries = [
  {
    name: "Canada",
    abbr: "CAN",
    ebirdCode: "CA",
    isCountry: true,
  },
  {
    name: "Costa Rica",
    abbr: "CR",
    ebirdCode: "CR",
    isCountry: true,
  },
  {
    name: "Colombia",
    abbr: "COL",
    ebirdCode: "CO",
    isCountry: true,
  },
  {
    name: "Panama",
    abbr: "PAN",
    ebirdCode: "PA",
    isCountry: true,
  },
];

const countryRegions = {
  CAN: [
    { name: "Alberta", ebirdCode: "CA-AB" },
    { name: "British Columbia", ebirdCode: "CA-BC" },
    { name: "Manitoba", ebirdCode: "CA-MB" },
    { name: "New Brunswick", ebirdCode: "CA-NB" },
    { name: "Newfoundland and Labrador", ebirdCode: "CA-NL" },
    { name: "Northwest Territories", ebirdCode: "CA-NT" },
    { name: "Nova Scotia", ebirdCode: "CA-NS" },
    { name: "Nunavut", ebirdCode: "CA-NU" },
    { name: "Ontario", ebirdCode: "CA-ON" },
    { name: "Prince Edward Island", ebirdCode: "CA-PE" },
    { name: "Quebec", ebirdCode: "CA-QC" },
    { name: "Saskatchewan", ebirdCode: "CA-SK" },
    { name: "Yukon", ebirdCode: "CA-YT" },
  ],
  COL: [
    { name: "Amazonas", ebirdCode: "CO-AMA" },
    { name: "Antioquia", ebirdCode: "CO-ANT" },
    { name: "Arauca", ebirdCode: "CO-ARA" },
    { name: "Atlantico", ebirdCode: "CO-ATL" },
    { name: "Bolivar", ebirdCode: "CO-BOL" },
    { name: "Boyaca", ebirdCode: "CO-BOY" },
    { name: "Caldas", ebirdCode: "CO-CAL" },
    { name: "Caqueta", ebirdCode: "CO-CAQ" },
    { name: "Casanare", ebirdCode: "CO-CAS" },
    { name: "Cauca", ebirdCode: "CO-CAU" },
    { name: "Cesar", ebirdCode: "CO-CES" },
    { name: "Choco", ebirdCode: "CO-CHO" },
    { name: "Cordoba", ebirdCode: "CO-COR" },
    { name: "Cundinamarca", ebirdCode: "CO-CUN" },
    { name: "Distrito Capital de Bogota", ebirdCode: "CO-DC" },
    { name: "Guainia", ebirdCode: "CO-GUA" },
    { name: "Guaviare", ebirdCode: "CO-GUV" },
    { name: "Huila", ebirdCode: "CO-HUI" },
    { name: "La Guajira", ebirdCode: "CO-LAG" },
    { name: "Magdalena", ebirdCode: "CO-MAG" },
    { name: "Meta", ebirdCode: "CO-MET" },
    { name: "Narino", ebirdCode: "CO-NAR" },
    { name: "Norte de Santander", ebirdCode: "CO-NSA" },
    { name: "Putumayo", ebirdCode: "CO-PUT" },
    { name: "Quindio", ebirdCode: "CO-QUI" },
    { name: "Risaralda", ebirdCode: "CO-RIS" },
    { name: "San Andres, Providencia and Santa Catalina", ebirdCode: "CO-SAP" },
    { name: "Santander", ebirdCode: "CO-SAN" },
    { name: "Sucre", ebirdCode: "CO-SUC" },
    { name: "Tolima", ebirdCode: "CO-TOL" },
    { name: "Valle del Cauca", ebirdCode: "CO-VAC" },
    { name: "Vaupes", ebirdCode: "CO-VAU" },
    { name: "Vichada", ebirdCode: "CO-VID" },
  ],
  CR: [
    { name: "Alajuela", ebirdCode: "CR-A" },
    { name: "Cartago", ebirdCode: "CR-C" },
    { name: "Guanacaste", ebirdCode: "CR-G" },
    { name: "Heredia", ebirdCode: "CR-H" },
    { name: "Limón", ebirdCode: "CR-L" },
    { name: "Puntarenas", ebirdCode: "CR-P" },
    { name: "San José", ebirdCode: "CR-SJ" },
  ],
  PAN: [
    { name: "Bocas del Toro", ebirdCode: "PA-1" },
    { name: "Cocle", ebirdCode: "PA-2" },
    { name: "Colon", ebirdCode: "PA-3" },
    { name: "Chiriqui", ebirdCode: "PA-4" },
    { name: "Darien", ebirdCode: "PA-5" },
    { name: "Herrera", ebirdCode: "PA-6" },
    { name: "Los Santos", ebirdCode: "PA-7" },
    { name: "Panama", ebirdCode: "PA-8" },
    { name: "Veraguas", ebirdCode: "PA-9" },
    { name: "Panama Oeste", ebirdCode: "PA-10" },
    { name: "Embera", ebirdCode: "PA-EM" },
    { name: "Guna Yala", ebirdCode: "PA-KY" },
    { name: "Naso Tjer Di", ebirdCode: "PA-NT" },
    { name: "Ngabe-Bugle", ebirdCode: "PA-NB" },
  ],
};

const countyCache = new Map();
const countyActivityCache = new Map();

const historicalMigrantCountyLeaders = {
  AL: [
    "US-AL-097",
    "US-AL-003",
    "US-AL-073",
    "US-AL-089",
    "US-AL-101",
    "US-AL-083",
    "US-AL-117",
    "US-AL-015",
    "US-AL-049",
    "US-AL-125",
  ],
  AZ: [
    "US-AZ-003",
    "US-AZ-019",
    "US-AZ-013",
    "US-AZ-005",
    "US-AZ-023",
    "US-AZ-025",
    "US-AZ-001",
    "US-AZ-017",
    "US-AZ-021",
    "US-AZ-027",
  ],
  FL: [
    "US-FL-086",
    "US-FL-087",
    "US-FL-099",
    "US-FL-011",
    "US-FL-009",
    "US-FL-021",
    "US-FL-071",
    "US-FL-103",
    "US-FL-057",
    "US-FL-115",
  ],
  LA: [
    "US-LA-071",
    "US-LA-051",
    "US-LA-057",
    "US-LA-033",
    "US-LA-075",
    "US-LA-087",
    "US-LA-063",
    "US-LA-109",
    "US-LA-005",
    "US-LA-103",
  ],
  AK: [
    "US-AK-020",
    "US-AK-090",
    "US-AK-110",
    "US-AK-170",
    "US-AK-122",
    "US-AK-150",
    "US-AK-220",
    "US-AK-130",
    "US-AK-185",
    "US-AK-016",
  ],
  CA: [
    "US-CA-037",
    "US-CA-073",
    "US-CA-059",
    "US-CA-075",
    "US-CA-085",
    "US-CA-001",
    "US-CA-053",
    "US-CA-041",
    "US-CA-111",
    "US-CA-023",
  ],
  CO: [
    "US-CO-031",
    "US-CO-013",
    "US-CO-069",
    "US-CO-059",
    "US-CO-001",
    "US-CO-005",
    "US-CO-101",
    "US-CO-077",
    "US-CO-123",
    "US-CO-041",
  ],
  GA: [
    "US-GA-051",
    "US-GA-121",
    "US-GA-089",
    "US-GA-067",
    "US-GA-127",
    "US-GA-059",
    "US-GA-245",
    "US-GA-021",
    "US-GA-039",
    "US-GA-115",
  ],
  IL: [
    "US-IL-031",
    "US-IL-097",
    "US-IL-043",
    "US-IL-111",
    "US-IL-197",
    "US-IL-089",
    "US-IL-019",
    "US-IL-167",
    "US-IL-119",
    "US-IL-163",
  ],
  NC: [
    "US-NC-055",
    "US-NC-183",
    "US-NC-119",
    "US-NC-021",
    "US-NC-129",
    "US-NC-031",
    "US-NC-063",
    "US-NC-135",
    "US-NC-089",
    "US-NC-019",
  ],
  NY: [
    "US-NY-103",
    "US-NY-081",
    "US-NY-047",
    "US-NY-061",
    "US-NY-005",
    "US-NY-059",
    "US-NY-119",
    "US-NY-055",
    "US-NY-029",
    "US-NY-109",
  ],
  OH: [
    "US-OH-035",
    "US-OH-095",
    "US-OH-049",
    "US-OH-061",
    "US-OH-123",
    "US-OH-043",
    "US-OH-153",
    "US-OH-093",
    "US-OH-041",
    "US-OH-085",
  ],
  OR: [
    "US-OR-051",
    "US-OR-039",
    "US-OR-029",
    "US-OR-017",
    "US-OR-007",
    "US-OR-025",
    "US-OR-045",
    "US-OR-003",
    "US-OR-041",
    "US-OR-035",
  ],
  SC: [
    "US-SC-019",
    "US-SC-013",
    "US-SC-079",
    "US-SC-043",
    "US-SC-051",
    "US-SC-045",
    "US-SC-063",
    "US-SC-015",
    "US-SC-029",
    "US-SC-053",
  ],
  TX: [
    "US-TX-209",
    "US-TX-039",
    "US-TX-157",
    "US-TX-201",
    "US-TX-167",
    "US-TX-061",
    "US-TX-355",
    "US-TX-245",
    "US-TX-007",
    "US-TX-215",
    "US-TX-453",
    "US-TX-113",
    "US-TX-029",
  ],
  VA: [
    "US-VA-059",
    "US-VA-810",
    "US-VA-710",
    "US-VA-013",
    "US-VA-107",
    "US-VA-760",
    "US-VA-001",
    "US-VA-131",
    "US-VA-153",
    "US-VA-003",
  ],
  WA: [
    "US-WA-033",
    "US-WA-057",
    "US-WA-061",
    "US-WA-053",
    "US-WA-073",
    "US-WA-011",
    "US-WA-067",
    "US-WA-063",
    "US-WA-027",
    "US-WA-077",
  ],
};

const offlineCountyData = {
  AL: `
001|Autauga County
003|Baldwin County
005|Barbour County
007|Bibb County
009|Blount County
011|Bullock County
013|Butler County
015|Calhoun County
017|Chambers County
019|Cherokee County
021|Chilton County
023|Choctaw County
025|Clarke County
027|Clay County
029|Cleburne County
031|Coffee County
033|Colbert County
035|Conecuh County
037|Coosa County
039|Covington County
041|Crenshaw County
043|Cullman County
045|Dale County
047|Dallas County
049|DeKalb County
051|Elmore County
053|Escambia County
055|Etowah County
057|Fayette County
059|Franklin County
061|Geneva County
063|Greene County
065|Hale County
067|Henry County
069|Houston County
071|Jackson County
073|Jefferson County
075|Lamar County
077|Lauderdale County
079|Lawrence County
081|Lee County
083|Limestone County
085|Lowndes County
087|Macon County
089|Madison County
091|Marengo County
093|Marion County
095|Marshall County
097|Mobile County
099|Monroe County
101|Montgomery County
103|Morgan County
105|Perry County
107|Pickens County
109|Pike County
111|Randolph County
113|Russell County
115|St. Clair County
117|Shelby County
119|Sumter County
121|Talladega County
123|Tallapoosa County
125|Tuscaloosa County
127|Walker County
129|Washington County
131|Wilcox County
133|Winston County
`,
  AK: `
013|Aleutians East Borough
016|Aleutians West Census Area
020|Anchorage Municipality
050|Bethel Census Area
060|Bristol Bay Borough
068|Denali Borough
070|Dillingham Census Area
090|Fairbanks North Star Borough
100|Haines Borough
105|Hoonah-Angoon Census Area
110|Juneau City and Borough
122|Kenai Peninsula Borough
130|Ketchikan Gateway Borough
150|Kodiak Island Borough
164|Lake and Peninsula Borough
170|Matanuska-Susitna Borough
180|Nome Census Area
185|North Slope Borough
188|Northwest Arctic Borough
195|Petersburg Census Area
198|Prince of Wales-Hyder Census Area
220|Sitka City and Borough
230|Skagway Municipality
240|Southeast Fairbanks Census Area
261|Valdez-Cordova Census Area
270|Wade Hampton Census Area
275|Wrangell City and Borough
282|Yakutat City and Borough
290|Yukon-Koyukuk Census Area
`,
  CA: `
001|Alameda County
003|Alpine County
005|Amador County
007|Butte County
009|Calaveras County
011|Colusa County
013|Contra Costa County
015|Del Norte County
017|El Dorado County
019|Fresno County
021|Glenn County
023|Humboldt County
025|Imperial County
027|Inyo County
029|Kern County
031|Kings County
033|Lake County
035|Lassen County
037|Los Angeles County
039|Madera County
041|Marin County
043|Mariposa County
045|Mendocino County
047|Merced County
049|Modoc County
051|Mono County
053|Monterey County
055|Napa County
057|Nevada County
059|Orange County
061|Placer County
063|Plumas County
065|Riverside County
067|Sacramento County
069|San Benito County
071|San Bernardino County
073|San Diego County
075|San Francisco County
077|San Joaquin County
079|San Luis Obispo County
081|San Mateo County
083|Santa Barbara County
085|Santa Clara County
087|Santa Cruz County
089|Shasta County
091|Sierra County
093|Siskiyou County
095|Solano County
097|Sonoma County
099|Stanislaus County
101|Sutter County
103|Tehama County
105|Trinity County
107|Tulare County
109|Tuolumne County
111|Ventura County
113|Yolo County
115|Yuba County
`,
  CO: `
001|Adams County
003|Alamosa County
005|Arapahoe County
007|Archuleta County
009|Baca County
011|Bent County
013|Boulder County
014|Broomfield County
015|Chaffee County
017|Cheyenne County
019|Clear Creek County
021|Conejos County
023|Costilla County
025|Crowley County
027|Custer County
029|Delta County
031|Denver County
033|Dolores County
035|Douglas County
037|Eagle County
041|El Paso County
039|Elbert County
043|Fremont County
045|Garfield County
047|Gilpin County
049|Grand County
051|Gunnison County
053|Hinsdale County
055|Huerfano County
057|Jackson County
059|Jefferson County
061|Kiowa County
063|Kit Carson County
067|La Plata County
065|Lake County
069|Larimer County
071|Las Animas County
073|Lincoln County
075|Logan County
077|Mesa County
079|Mineral County
081|Moffat County
083|Montezuma County
085|Montrose County
087|Morgan County
089|Otero County
091|Ouray County
093|Park County
095|Phillips County
097|Pitkin County
099|Prowers County
101|Pueblo County
103|Rio Blanco County
105|Rio Grande County
107|Routt County
109|Saguache County
111|San Juan County
113|San Miguel County
115|Sedgwick County
117|Summit County
119|Teller County
121|Washington County
123|Weld County
125|Yuma County
`,
  GA: `
001|Appling County
003|Atkinson County
005|Bacon County
007|Baker County
009|Baldwin County
011|Banks County
013|Barrow County
015|Bartow County
017|Ben Hill County
019|Berrien County
021|Bibb County
023|Bleckley County
025|Brantley County
027|Brooks County
029|Bryan County
031|Bulloch County
033|Burke County
035|Butts County
037|Calhoun County
039|Camden County
043|Candler County
045|Carroll County
047|Catoosa County
049|Charlton County
051|Chatham County
053|Chattahoochee County
055|Chattooga County
057|Cherokee County
059|Clarke County
061|Clay County
063|Clayton County
065|Clinch County
067|Cobb County
069|Coffee County
071|Colquitt County
073|Columbia County
075|Cook County
077|Coweta County
079|Crawford County
081|Crisp County
083|Dade County
085|Dawson County
087|Decatur County
089|DeKalb County
091|Dodge County
093|Dooly County
095|Dougherty County
097|Douglas County
099|Early County
101|Echols County
103|Effingham County
105|Elbert County
107|Emanuel County
109|Evans County
111|Fannin County
113|Fayette County
115|Floyd County
117|Forsyth County
119|Franklin County
121|Fulton County
123|Gilmer County
125|Glascock County
127|Glynn County
129|Gordon County
131|Grady County
133|Greene County
135|Gwinnett County
137|Habersham County
139|Hall County
141|Hancock County
143|Haralson County
145|Harris County
147|Hart County
149|Heard County
151|Henry County
153|Houston County
155|Irwin County
157|Jackson County
159|Jasper County
161|Jeff Davis County
163|Jefferson County
165|Jenkins County
167|Johnson County
169|Jones County
171|Lamar County
173|Lanier County
175|Laurens County
177|Lee County
179|Liberty County
181|Lincoln County
183|Long County
185|Lowndes County
187|Lumpkin County
193|Macon County
195|Madison County
197|Marion County
189|McDuffie County
191|McIntosh County
199|Meriwether County
201|Miller County
205|Mitchell County
207|Monroe County
209|Montgomery County
211|Morgan County
213|Murray County
215|Muscogee County
217|Newton County
219|Oconee County
221|Oglethorpe County
223|Paulding County
225|Peach County
227|Pickens County
229|Pierce County
231|Pike County
233|Polk County
235|Pulaski County
237|Putnam County
239|Quitman County
241|Rabun County
243|Randolph County
245|Richmond County
247|Rockdale County
249|Schley County
251|Screven County
253|Seminole County
255|Spalding County
257|Stephens County
259|Stewart County
261|Sumter County
263|Talbot County
265|Taliaferro County
267|Tattnall County
269|Taylor County
271|Telfair County
273|Terrell County
275|Thomas County
277|Tift County
279|Toombs County
281|Towns County
283|Treutlen County
285|Troup County
287|Turner County
289|Twiggs County
291|Union County
293|Upson County
295|Walker County
297|Walton County
299|Ware County
301|Warren County
303|Washington County
305|Wayne County
307|Webster County
309|Wheeler County
311|White County
313|Whitfield County
315|Wilcox County
317|Wilkes County
319|Wilkinson County
321|Worth County
`,
  IL: `
001|Adams County
003|Alexander County
005|Bond County
007|Boone County
009|Brown County
011|Bureau County
013|Calhoun County
015|Carroll County
017|Cass County
019|Champaign County
021|Christian County
023|Clark County
025|Clay County
027|Clinton County
029|Coles County
031|Cook County
033|Crawford County
035|Cumberland County
039|De Witt County
037|DeKalb County
041|Douglas County
043|DuPage County
045|Edgar County
047|Edwards County
049|Effingham County
051|Fayette County
053|Ford County
055|Franklin County
057|Fulton County
059|Gallatin County
061|Greene County
063|Grundy County
065|Hamilton County
067|Hancock County
069|Hardin County
071|Henderson County
073|Henry County
075|Iroquois County
077|Jackson County
079|Jasper County
081|Jefferson County
083|Jersey County
085|Jo Daviess County
087|Johnson County
089|Kane County
091|Kankakee County
093|Kendall County
095|Knox County
097|Lake County
099|LaSalle County
101|Lawrence County
103|Lee County
105|Livingston County
107|Logan County
115|Macon County
117|Macoupin County
119|Madison County
121|Marion County
123|Marshall County
125|Mason County
127|Massac County
109|McDonough County
111|McHenry County
113|McLean County
129|Menard County
131|Mercer County
133|Monroe County
135|Montgomery County
137|Morgan County
139|Moultrie County
141|Ogle County
143|Peoria County
145|Perry County
147|Piatt County
149|Pike County
151|Pope County
153|Pulaski County
155|Putnam County
157|Randolph County
159|Richland County
161|Rock Island County
165|Saline County
167|Sangamon County
169|Schuyler County
171|Scott County
173|Shelby County
163|St. Clair County
175|Stark County
177|Stephenson County
179|Tazewell County
181|Union County
183|Vermilion County
185|Wabash County
187|Warren County
189|Washington County
191|Wayne County
193|White County
195|Whiteside County
197|Will County
199|Williamson County
201|Winnebago County
203|Woodford County
`,
  LA: `
001|Acadia Parish
003|Allen Parish
005|Ascension Parish
007|Assumption Parish
009|Avoyelles Parish
011|Beauregard Parish
013|Bienville Parish
015|Bossier Parish
017|Caddo Parish
019|Calcasieu Parish
021|Caldwell Parish
023|Cameron Parish
025|Catahoula Parish
027|Claiborne Parish
029|Concordia Parish
031|De Soto Parish
033|East Baton Rouge Parish
035|East Carroll Parish
037|East Feliciana Parish
039|Evangeline Parish
041|Franklin Parish
043|Grant Parish
045|Iberia Parish
047|Iberville Parish
049|Jackson Parish
051|Jefferson Parish
053|Jefferson Davis Parish
055|Lafayette Parish
057|Lafourche Parish
059|La Salle Parish
061|Lincoln Parish
063|Livingston Parish
065|Madison Parish
067|Morehouse Parish
069|Natchitoches Parish
071|Orleans Parish
073|Ouachita Parish
075|Plaquemines Parish
077|Pointe Coupee Parish
079|Rapides Parish
081|Red River Parish
083|Richland Parish
085|Sabine Parish
087|St. Bernard Parish
089|St. Charles Parish
091|St. Helena Parish
093|St. James Parish
095|St. John the Baptist Parish
097|St. Landry Parish
099|St. Martin Parish
101|St. Mary Parish
103|St. Tammany Parish
105|Tangipahoa Parish
107|Tensas Parish
109|Terrebonne Parish
111|Union Parish
113|Vermilion Parish
115|Vernon Parish
117|Washington Parish
119|Webster Parish
121|West Baton Rouge Parish
123|West Carroll Parish
125|West Feliciana Parish
127|Winn Parish
`,
  NC: `
001|Alamance County
003|Alexander County
005|Alleghany County
007|Anson County
009|Ashe County
011|Avery County
013|Beaufort County
015|Bertie County
017|Bladen County
019|Brunswick County
021|Buncombe County
023|Burke County
025|Cabarrus County
027|Caldwell County
029|Camden County
031|Carteret County
033|Caswell County
035|Catawba County
037|Chatham County
039|Cherokee County
041|Chowan County
043|Clay County
045|Cleveland County
047|Columbus County
049|Craven County
051|Cumberland County
053|Currituck County
055|Dare County
057|Davidson County
059|Davie County
061|Duplin County
063|Durham County
065|Edgecombe County
067|Forsyth County
069|Franklin County
071|Gaston County
073|Gates County
075|Graham County
077|Granville County
079|Greene County
081|Guilford County
083|Halifax County
085|Harnett County
087|Haywood County
089|Henderson County
091|Hertford County
093|Hoke County
095|Hyde County
097|Iredell County
099|Jackson County
101|Johnston County
103|Jones County
105|Lee County
107|Lenoir County
109|Lincoln County
113|Macon County
115|Madison County
117|Martin County
111|McDowell County
119|Mecklenburg County
121|Mitchell County
123|Montgomery County
125|Moore County
127|Nash County
129|New Hanover County
131|Northampton County
133|Onslow County
135|Orange County
137|Pamlico County
139|Pasquotank County
141|Pender County
143|Perquimans County
145|Person County
147|Pitt County
149|Polk County
151|Randolph County
153|Richmond County
155|Robeson County
157|Rockingham County
159|Rowan County
161|Rutherford County
163|Sampson County
165|Scotland County
167|Stanly County
169|Stokes County
171|Surry County
173|Swain County
175|Transylvania County
177|Tyrrell County
179|Union County
181|Vance County
183|Wake County
185|Warren County
187|Washington County
189|Watauga County
191|Wayne County
193|Wilkes County
195|Wilson County
197|Yadkin County
199|Yancey County
`,
  NY: `
001|Albany County
003|Allegany County
005|Bronx County
007|Broome County
009|Cattaraugus County
011|Cayuga County
013|Chautauqua County
015|Chemung County
017|Chenango County
019|Clinton County
021|Columbia County
023|Cortland County
025|Delaware County
027|Dutchess County
029|Erie County
031|Essex County
033|Franklin County
035|Fulton County
037|Genesee County
039|Greene County
041|Hamilton County
043|Herkimer County
045|Jefferson County
047|Kings County
049|Lewis County
051|Livingston County
053|Madison County
055|Monroe County
057|Montgomery County
059|Nassau County
061|New York County
063|Niagara County
065|Oneida County
067|Onondaga County
069|Ontario County
071|Orange County
073|Orleans County
075|Oswego County
077|Otsego County
079|Putnam County
081|Queens County
083|Rensselaer County
085|Richmond County
087|Rockland County
091|Saratoga County
093|Schenectady County
095|Schoharie County
097|Schuyler County
099|Seneca County
089|St. Lawrence County
101|Steuben County
103|Suffolk County
105|Sullivan County
107|Tioga County
109|Tompkins County
111|Ulster County
113|Warren County
115|Washington County
117|Wayne County
119|Westchester County
121|Wyoming County
123|Yates County
`,
  OH: `
001|Adams County
003|Allen County
005|Ashland County
007|Ashtabula County
009|Athens County
011|Auglaize County
013|Belmont County
015|Brown County
017|Butler County
019|Carroll County
021|Champaign County
023|Clark County
025|Clermont County
027|Clinton County
029|Columbiana County
031|Coshocton County
033|Crawford County
035|Cuyahoga County
037|Darke County
039|Defiance County
041|Delaware County
043|Erie County
045|Fairfield County
047|Fayette County
049|Franklin County
051|Fulton County
053|Gallia County
055|Geauga County
057|Greene County
059|Guernsey County
061|Hamilton County
063|Hancock County
065|Hardin County
067|Harrison County
069|Henry County
071|Highland County
073|Hocking County
075|Holmes County
077|Huron County
079|Jackson County
081|Jefferson County
083|Knox County
085|Lake County
087|Lawrence County
089|Licking County
091|Logan County
093|Lorain County
095|Lucas County
097|Madison County
099|Mahoning County
101|Marion County
103|Medina County
105|Meigs County
107|Mercer County
109|Miami County
111|Monroe County
113|Montgomery County
115|Morgan County
117|Morrow County
119|Muskingum County
121|Noble County
123|Ottawa County
125|Paulding County
127|Perry County
129|Pickaway County
131|Pike County
133|Portage County
135|Preble County
137|Putnam County
139|Richland County
141|Ross County
143|Sandusky County
145|Scioto County
147|Seneca County
149|Shelby County
151|Stark County
153|Summit County
155|Trumbull County
157|Tuscarawas County
159|Union County
161|Van Wert County
163|Vinton County
165|Warren County
167|Washington County
169|Wayne County
171|Williams County
173|Wood County
175|Wyandot County
`,
  OR: `
001|Baker County
003|Benton County
005|Clackamas County
007|Clatsop County
009|Columbia County
011|Coos County
013|Crook County
015|Curry County
017|Deschutes County
019|Douglas County
021|Gilliam County
023|Grant County
025|Harney County
027|Hood River County
029|Jackson County
031|Jefferson County
033|Josephine County
035|Klamath County
037|Lake County
039|Lane County
041|Lincoln County
043|Linn County
045|Malheur County
047|Marion County
049|Morrow County
051|Multnomah County
053|Polk County
055|Sherman County
057|Tillamook County
059|Umatilla County
061|Union County
063|Wallowa County
065|Wasco County
067|Washington County
069|Wheeler County
071|Yamhill County
`,
  SC: `
001|Abbeville County
003|Aiken County
005|Allendale County
007|Anderson County
009|Bamberg County
011|Barnwell County
013|Beaufort County
015|Berkeley County
017|Calhoun County
019|Charleston County
021|Cherokee County
023|Chester County
025|Chesterfield County
027|Clarendon County
029|Colleton County
031|Darlington County
033|Dillon County
035|Dorchester County
037|Edgefield County
039|Fairfield County
041|Florence County
043|Georgetown County
045|Greenville County
047|Greenwood County
049|Hampton County
051|Horry County
053|Jasper County
055|Kershaw County
057|Lancaster County
059|Laurens County
061|Lee County
063|Lexington County
067|Marion County
069|Marlboro County
065|McCormick County
071|Newberry County
073|Oconee County
075|Orangeburg County
077|Pickens County
079|Richland County
081|Saluda County
083|Spartanburg County
085|Sumter County
087|Union County
089|Williamsburg County
091|York County
`,
  VA: `
001|Accomack County
003|Albemarle County
510|Alexandria city
005|Alleghany County
007|Amelia County
009|Amherst County
011|Appomattox County
013|Arlington County
015|Augusta County
017|Bath County
515|Bedford city
019|Bedford County
021|Bland County
023|Botetourt County
520|Bristol city
025|Brunswick County
027|Buchanan County
029|Buckingham County
530|Buena Vista city
031|Campbell County
033|Caroline County
035|Carroll County
036|Charles City County
037|Charlotte County
540|Charlottesville city
550|Chesapeake city
041|Chesterfield County
043|Clarke County
570|Colonial Heights city
580|Covington city
045|Craig County
047|Culpeper County
049|Cumberland County
590|Danville city
051|Dickenson County
053|Dinwiddie County
595|Emporia city
057|Essex County
600|Fairfax city
059|Fairfax County
610|Falls Church city
061|Fauquier County
063|Floyd County
065|Fluvanna County
620|Franklin city
067|Franklin County
069|Frederick County
630|Fredericksburg city
640|Galax city
071|Giles County
073|Gloucester County
075|Goochland County
077|Grayson County
079|Greene County
081|Greensville County
083|Halifax County
650|Hampton city
085|Hanover County
660|Harrisonburg city
087|Henrico County
089|Henry County
091|Highland County
670|Hopewell city
093|Isle of Wight County
095|James City County
097|King and Queen County
099|King George County
101|King William County
103|Lancaster County
105|Lee County
678|Lexington city
107|Loudoun County
109|Louisa County
111|Lunenburg County
680|Lynchburg city
113|Madison County
683|Manassas city
685|Manassas Park city
690|Martinsville city
115|Mathews County
117|Mecklenburg County
119|Middlesex County
121|Montgomery County
125|Nelson County
127|New Kent County
700|Newport News city
710|Norfolk city
131|Northampton County
133|Northumberland County
720|Norton city
135|Nottoway County
137|Orange County
139|Page County
141|Patrick County
730|Petersburg city
143|Pittsylvania County
735|Poquoson city
740|Portsmouth city
145|Powhatan County
147|Prince Edward County
149|Prince George County
153|Prince William County
155|Pulaski County
750|Radford city
157|Rappahannock County
760|Richmond city
159|Richmond County
770|Roanoke city
161|Roanoke County
163|Rockbridge County
165|Rockingham County
167|Russell County
775|Salem city
169|Scott County
171|Shenandoah County
173|Smyth County
175|Southampton County
177|Spotsylvania County
179|Stafford County
790|Staunton city
800|Suffolk city
181|Surry County
183|Sussex County
185|Tazewell County
810|Virginia Beach city
187|Warren County
191|Washington County
820|Waynesboro city
193|Westmoreland County
830|Williamsburg city
840|Winchester city
195|Wise County
197|Wythe County
199|York County
`,
  WA: `
001|Adams County
003|Asotin County
005|Benton County
007|Chelan County
009|Clallam County
011|Clark County
013|Columbia County
015|Cowlitz County
017|Douglas County
019|Ferry County
021|Franklin County
023|Garfield County
025|Grant County
027|Grays Harbor County
029|Island County
031|Jefferson County
033|King County
035|Kitsap County
037|Kittitas County
039|Klickitat County
041|Lewis County
043|Lincoln County
045|Mason County
047|Okanogan County
049|Pacific County
051|Pend Oreille County
053|Pierce County
055|San Juan County
057|Skagit County
059|Skamania County
061|Snohomish County
063|Spokane County
065|Stevens County
067|Thurston County
069|Wahkiakum County
071|Walla Walla County
073|Whatcom County
075|Whitman County
077|Yakima County
`,
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
  useCurrentLocation: document.querySelector("#useCurrentLocation"),
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
const currentSignalLabel = document.querySelector("#currentSignalLabel");
const countyMiniMap = document.querySelector("#countyMiniMap");
const countyMiniMapLink = document.querySelector("#countyMiniMapLink");
const countyMiniMapLegend = document.querySelector("#countyMiniMapLegend");
const headerCopy = document.querySelector(".header-copy");
const currentWeather = document.querySelector("#currentWeather");
const windMap = document.querySelector("#windMap");
const windMapStatus = document.querySelector("#windMapStatus");
const frontLine = document.querySelector("#frontLine");
const hotspotCache = new Map();
const hotspotListCache = new Map();
const countyCityCache = new Map();
const hotspotMoreInfoCache = new Map();
const preferredHotspotStorageKey = "feathercastPreferredHotspots";
const regionPhotoCache = new Map();
const speciesPhotoCache = new Map();
const speciesStatusCache = new Map();
const weatherCache = new Map();
const weatherLocationCache = new Map();
const latestObservationBySpecies = new Map();
const speciesScientificNameByName = new Map();
const birdFinderYearObservationCache = new Map();
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
let countyWeatherMap = null;
let countyWeatherMarker = null;
let countyWeatherRadarLayer = null;
let countyWeatherRadarPath = "";
const countyMiniMapZoom = 8;
const countyMiniMapLayer = "radar";
let activeCountyMiniMapContext = null;
let activeHotspotRegionCode = "";
let activeRegionHotspots = [];
let activeRegionAllHotspots = [];
let activeHotspotCardsByLocId = new Map();
const activeCardsCacheByRegion = new Map();
let activeHotspotStatus = "Using habitat-based fallback until county hotspots load.";
let activeHotspotFilterComplete = false;
let activeHotspotSearch = null;
let hotspotSearchRenderId = 0;
let hotspotCityRequestId = 0;
let activeRareRegionCode = "";
let activeRareObservations = [];
let activeBirdcastMeta = null;
let activeWeatherContext = null;
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
const frontStatusDisplay = document.querySelector("#frontStatusDisplay");
const frontPassageDisplay = document.querySelector("#frontPassageDisplay");
const ebirdSignalDisplay = document.querySelector("#ebirdSignalDisplay");
const frontMapLink = document.querySelector("#frontMapLink");
const frontMapLinks = document.querySelector("#frontMapLinks");
const windAutoFillHint = document.querySelector("#windAutoFillHint");
const rainAutoFillHint = document.querySelector("#rainAutoFillHint");
const frontStatusAutoFillHint = document.querySelector("#frontStatusAutoFillHint");
const frontPassageAutoFillHint = document.querySelector("#frontPassageAutoFillHint");
const ebirdAutoFillHint = document.querySelector("#ebirdAutoFillHint");
const birdSearchInput = document.querySelector("#birdSearchInput");
const birdMatchLabel = document.querySelector("#birdMatchLabel");
const birdMatchSelect = document.querySelector("#birdMatchSelect");
const birdFinderResult = document.querySelector("#birdFinderResult");
const birdFinderNearby = document.querySelector("#birdFinderNearby");
const hotspotCitySelect = document.querySelector("#hotspotCitySelect");
const hotspotLocationInput = document.querySelector("#hotspotLocationInput");
const hotspotLocationSearch = document.querySelector("#hotspotLocationSearch");
const hotspotUseCurrentLocation = document.querySelector("#hotspotUseCurrentLocation");
const hotspotClearSearch = document.querySelector("#hotspotClearSearch");
const hotspotSearchStatus = document.querySelector("#hotspotSearchStatus");
const hotspotSearchGrid = document.querySelector("#hotspotSearchGrid");
const hotspotShowMore = document.querySelector("#hotspotShowMore");
const feedbackForm = document.querySelector("#feedbackForm");
const feedbackName = document.querySelector("#feedbackName");
const feedbackEmail = document.querySelector("#feedbackEmail");
const feedbackMessage = document.querySelector("#feedbackMessage");
const feedbackSubmit = document.querySelector("#feedbackSubmit");
const feedbackStatus = document.querySelector("#feedbackStatus");
let taxonomyCache = null;
let birdFinderRequestId = 0;

function getSelectedState() {
  return (
    states.find((state) => state.abbr === fields.stateSelect.value) ||
    countries.find((country) => country.abbr === fields.stateSelect.value) ||
    states.find((state) => state.abbr === "TX")
  );
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
      countryCode: resolvedState.isCountry ? resolvedState.ebirdCode : "US",
      birdcastCode: resolvedCode,
      ebirdCode: resolvedCode,
      hotspots: genericHotspots,
    };
  }

  if (regions[fields.regionSelect.value]) {
    const preRegion = regions[fields.regionSelect.value];
    return {
      ...preRegion,
      countryCode: "US",
    };
  }

  const selectedOption = fields.regionSelect.selectedOptions[0];
  const countyName = selectedOption?.dataset.name || "Selected County";
  const countyCode = selectedOption?.value || "";
  const birdcastCode = selectedState.isCountry ? "" : countyCode;

  return {
    name: countyName,
    state: selectedState.name,
    countryCode: selectedState.isCountry ? selectedState.ebirdCode : "US",
    birdcastCode,
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
  if (frontStatusDisplay) frontStatusDisplay.textContent = fields.frontStatus.selectedOptions[0]?.textContent || "No front nearby";

  if (frontPassageDisplay) {
    const manualFrontPassage = fields.frontPassage.value.trim();
    const impliedFrontPassage = {
      passing: "Passing through now",
      approaching: "Within 24 hours",
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

function setBirdcastManualMode(isManual) {
  [fields.birdsCrossed, fields.birdsInFlight].forEach((input) => {
    input.classList.toggle("is-hidden", !isManual);
    input.disabled = !isManual;
  });
}

function setAutoFillHint(element, service, isAvailable = true) {
  if (!element) return;
  element.classList.toggle("service-unavailable", !isAvailable);
  element.textContent = isAvailable
    ? `(Auto-filled from ${service})`
    : `Service is not Available: ${service}`;
}

function syncBirdcastDisplaysFromInputs() {
  const crossed = Number(fields.birdsCrossed.value || 0);
  const inFlight = Number(fields.birdsInFlight.value || 0);
  if (birdsCrossedDisplay) birdsCrossedDisplay.textContent = formatBirds(crossed);
  if (birdsInFlightDisplay) birdsInFlightDisplay.textContent = formatBirds(inFlight);
  syncBirdcastValueTone(crossed, birdsCrossedDisplay);
}

function resetBirdcastData(message = "BirdCast data loading for the selected region...") {
  activeBirdcastMeta = null;
  fields.birdsCrossed.value = 0;
  fields.birdsInFlight.value = 0;
  syncBirdcastDisplaysFromInputs();
  syncBirdcastLevelBadge("", birdsCrossedLevel);
  syncBirdcastLevelBadge("", birdsInFlightLevel);
  setBirdcastManualMode(false);
  if (birdsCrossedHint) {
    birdsCrossedHint.classList.remove("birdcast-unavailable");
    birdsCrossedHint.textContent = "(Auto-filled from BirdCast)";
  }
  if (birdsInFlightHint) {
    birdsInFlightHint.classList.remove("birdcast-unavailable");
    birdsInFlightHint.textContent = "(Auto-filled from BirdCast)";
  }
  if (birdsCrossedCaption) birdsCrossedCaption.textContent = message;
  if (birdsInFlightCaption) birdsInFlightCaption.textContent = message;
}

function frontTimingWeight(signals) {
  if (signals.frontStatus === "passing") return 1;
  if (signals.frontStatus === "passed") return 0.8;
  if (signals.frontStatus === "approaching") {
    const hoursMatch = signals.frontPassage.match(/in\s+(\d+)\s+hour/i);
    const hoursUntilFront = hoursMatch ? Number(hoursMatch[1]) : null;
    if (hoursUntilFront !== null && Number.isFinite(hoursUntilFront)) {
      if (hoursUntilFront <= 6) return 0.65;
      if (hoursUntilFront <= 12) return 0.45;
      return 0.28;
    }
    return 0.35;
  }
  return 0;
}

function estimateFrontStopBirds(signals) {
  const timingWeight = frontTimingWeight(signals);
  if (!timingWeight) return 0;

  const activeBirdsCaught = signals.frontStatus === "approaching"
    ? signals.birdsInFlight * timingWeight
    : signals.birdsInFlight;
  const overnightCarryover = signals.birdsCrossed * 0.08 * timingWeight;

  return Math.round(activeBirdsCaught + overnightCarryover);
}

function usesLocalConcentrationModel(region, signals) {
  const birdcastUnavailable =
    birdsCrossedHint?.classList.contains("birdcast-unavailable") ||
    birdsInFlightHint?.classList.contains("birdcast-unavailable");
  return !region.birdcastCode || (birdcastUnavailable && signals.birdsCrossed === 0 && signals.birdsInFlight === 0);
}

function historicalConcentrationPressure(region) {
  const source =
    activeHotspotRegionCode === region.ebirdCode && activeRegionHotspots.length
      ? activeRegionHotspots
      : region.hotspots || [];
  if (!source.length) return { pressure: 0.35, count: 0 };

  const topHotspots = [...source]
    .sort((a, b) => Number(b.base || 0) - Number(a.base || 0))
    .slice(0, 5);
  const averageBase =
    topHotspots.reduce((total, hotspot) => total + Number(hotspot.base || 60), 0) / topHotspots.length;
  return {
    pressure: clamp((averageBase - 54) / 36, 0, 1),
    count: source.length,
  };
}

function weatherConcentrationPressure(signals) {
  const context = activeWeatherContext || {};
  let pressure = 0;
  const reasons = [];

  if (signals.rain === "storms") {
    pressure += 0.32;
    reasons.push("storms can push birds into sheltered feeding areas");
  } else if (signals.rain === "yes") {
    pressure += 0.24;
    reasons.push("rain can concentrate activity near cover, edges, and protected routes");
  }

  if (Number(context.windSpeed || 0) >= 20) {
    pressure += 0.18;
    reasons.push("strong winds favor protected valleys, forests, and lee-side habitat");
  } else if (Number(context.windSpeed || 0) >= 12) {
    pressure += 0.1;
    reasons.push("moderate wind can make sheltered habitat more productive");
  }

  if (Number.isFinite(context.recentPrecipitation) && context.recentPrecipitation <= 0.05 && signals.rain === "no") {
    pressure += 0.16;
    reasons.push("recent dryness can pull birds toward remaining water, fruit, and shaded habitat");
  }

  if (signals.windDirection === "east" || signals.windDirection === "west") {
    pressure += 0.06;
  }

  return { pressure: clamp(pressure, 0, 0.5), reasons };
}

function scoreLocalConcentrationSignals(signals, region) {
  const reasons = [];
  let score = 0;

  const historical = historicalConcentrationPressure(region);
  score += historical.pressure * 30;
  reasons.push(
    historical.count
      ? `${region.name} is being weighted by historical and recent hotspot concentration instead of BirdCast passage.`
      : `${region.name} has limited hotspot history loaded, so the score leans more on current reports and weather.`
  );

  const weather = weatherConcentrationPressure(signals);
  score += weather.pressure * 40;
  if (weather.reasons.length) {
    reasons.push(`Weather concentration factors: ${weather.reasons.join("; ")}.`);
  } else {
    reasons.push("Weather is not strongly concentrating birds right now, so local habitat and reports matter more.");
  }

  if (signals.ebirdSignal === "spike") {
    score += 26;
    reasons.push("Fresh eBird volume is elevated, which is the strongest local concentration signal.");
  } else if (signals.ebirdSignal === "rare") {
    score += 22;
    reasons.push("Rare or flagged eBird reports suggest unusual bird activity is already being detected.");
  } else if (signals.ebirdSignal === "normal") {
    score += 12;
    reasons.push("Current eBird reports are present but not clearly above normal.");
  } else {
    score -= 4;
    reasons.push("Quiet or stale eBird activity keeps confidence lower until fresh reports appear.");
  }

  if (activeHotspotRegionCode === region.ebirdCode && activeRegionHotspots.some((hotspot) => hotspot.recentMigrants?.length)) {
    score += 12;
    reasons.push("Recent hotspot reports include migrant signal species, raising local confidence.");
  }

  score = Math.round(clamp(score, 0, 100));
  let label = "Low";
  let summary = "Bird activity may be dispersed unless fresh reports or weather stress pull birds into key habitat.";

  if (score >= 78) {
    label = "Concentration Likely";
    summary = "Check the strongest historical hotspots now, especially water, forest edge, fruiting trees, and sheltered habitat.";
  } else if (score >= 58) {
    label = "High";
    summary = "Conditions favor local concentration. Prioritize historically productive hotspots with fresh reports.";
  } else if (score >= 34) {
    label = "Moderate";
    summary = "Some local concentration signals are present, but confirmation depends on fresh eBird activity or changing weather.";
  }

  return { score, label, summary, reasons };
}

function scoreSignals(signals) {
  const region = getRegion();
  if (usesLocalConcentrationModel(region, signals)) {
    return scoreLocalConcentrationSignals(signals, region);
  }

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

  const frontStopBirds = estimateFrontStopBirds(signals);
  if (frontStopBirds >= 25000) {
    const frontStopPressure = clamp(frontStopBirds / 500000, 0, 1);
    score += Math.round(frontStopPressure * 14);
    reasons.push(`Estimated front-stop pressure is ${formatBirds(frontStopBirds)} birds, so the front likely interrupted enough movement to raise fallout odds.`);
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

const hotspotMoreInfoRules = [
  {
    pattern: /blue hole regional park/i,
    url: "https://www.cityofwimberley.com/Facilities/Facility/Details/Blue-Hole-Regional-Park-2",
  },
  {
    pattern: /charro ranch park/i,
    url: "https://mccmeetingspublic.blob.core.usgovcloudapi.net/drippingtx-meet-0e94a29bed08472294cf009d544db997/ITEM-Attachment-001-dda31f3431224e1eb95d4537dffe890c.pdf",
  },
  {
    pattern: /dripping springs ranch park/i,
    url: "https://www.drippingspringstx.gov/about-our-parks/files/dsrp-trail-map-0",
  },
  {
    pattern: /jacob'?s well/i,
    url: "https://www.hayscountytx.gov/learn-more-about-the-park",
  },
  {
    pattern: /texas state|tx state|theatre center ponds|theater center ponds/i,
    url: "https://docs.gato.txst.edu/213138/Map-Directions-to-Welcome-Center.pdf",
  },
  {
    pattern: /five mile dam/i,
    url: "https://www.sanmarcostx.gov/Facilities/Facility/Details/Five-Mile-Dam-Park-72",
  },
  {
    pattern: /pedernales falls/i,
    url: "https://tpwd.texas.gov/state-parks/pedernales-falls",
  },
  {
    pattern: /cullinan park/i,
    url: "https://cullinanparkconservancy.org/uploads/Cullinan_Park_Trail_Map_-_March_2024_2_.pdf",
  },
  {
    pattern: /sugar land|brazos river park|memorial park|oyster creek park/i,
    url: "https://www.sugarlandtx.gov/DocumentCenter/View/25157/Sugar-Land-Trail-Map-2021",
  },
  {
    pattern: /brazos bend/i,
    url: "https://tpwd.texas.gov/publications/pwdpubs/media/park_maps/pwd_mp_p4504_110w.pdf",
  },
  {
    pattern: /willow fork|exploration park|cinco ranch|central green|cross creek ranch/i,
    url: "https://www.willowforkdrainagedistrict.com/wp-content/uploads/2019/01/2019-01-03_WFDD_MasterPlan-compressed.pdf",
  },
  {
    pattern: /holey land/i,
    url: "https://myfwc.com/recreation/lead/holey-land/",
  },
  {
    pattern: /brian piccolo/i,
    url: "https://www.broward.org/Parks/Pages/Park.aspx?p=4",
  },
  {
    pattern: /plantation preserve/i,
    url: "https://www.plantation.org/government/departments/parks-recreation/plantation-preserve-golf-course-club/golf-course/course-layout",
  },
  {
    pattern: /west lake park|west lake preserve/i,
    url: "https://www.broward.org/Parks/Pages/Park.aspx?p=42",
  },
  {
    pattern: /wca 2-?b|water conservation area 2/i,
    url: "https://www.sfwmd.gov/recreation-site/water-conservation-area-2",
  },
  {
    pattern: /everglades holiday park/i,
    url: "https://www.evergladesholidaypark.com/about/map/",
  },
  {
    pattern: /mizell|eula johnson|john u\.? lloyd/i,
    url: "https://floridadep.gov/sites/default/files/Dr.%20Von%20D.%20Mizell-Eula%20Johnson%20Reference%20Map.pdf",
  },
  {
    pattern: /celery fields/i,
    url: "https://sarasotaaudubon.org/wp-content/uploads/2019/10/Celery_Fields_Map_Brochure.pdf",
  },
  {
    pattern: /myakka river|birdwalk|boat ramp|main bridge|deep hole/i,
    url: "https://www.floridastateparks.org/sites/default/files/media/file/Myakka_River_Map-brochure.pdf",
  },
  {
    pattern: /oscar scherer/i,
    url: "https://www.floridastateparks.org/sites/default/files/media/file/Oscar_Scherer_Map-brochure_0.pdf",
  },
  {
    pattern: /nathan benderson/i,
    url: "https://nathanbendersonpark.org/wp-content/uploads/2023/03/CC-MTG-VENUE-MAP-Youth-Nationals-MAP-6-3-24.pdf",
  },
  {
    pattern: /carlton reserve|big slough/i,
    url: "https://www.carltonreserve.org/app/download/12053369377/Big+Slough.pdf",
  },
  {
    pattern: /shamrock park/i,
    url: "https://www.scgov.net/home/showpublisheddocument/46884/",
  },
  {
    pattern: /red bug slough/i,
    url: "https://www.scgov.net/home/showpublisheddocument/46850/",
  },
  {
    pattern: /deer prairie creek/i,
    url: "https://www.scgov.net/home/showpublisheddocument/46828/",
  },
  {
    pattern: /lemon bay park/i,
    url: "https://www.scgov.net/home/showpublisheddocument/46842/",
  },
  {
    pattern: /rothenbach park/i,
    url: "https://www.scgov.net/home/showpublisheddocument/46846/",
  },
  {
    pattern: /jelks preserve/i,
    url: "https://www.scgov.net/home/showpublisheddocument/46840/",
  },
  {
    pattern: /curry creek preserve/i,
    url: "https://www.scgov.net/home/showpublisheddocument/46824/",
  },
  {
    pattern: /scherer thaxton/i,
    url: "https://www.scgov.net/home/showpublisheddocument/46854/",
  },
  {
    pattern: /manasota scrub/i,
    url: "https://www.scgov.net/home/showpublisheddocument/46843/",
  },
  {
    pattern: /myakka sf|myakka state forest/i,
    url: "https://www.fdacs.gov/content/download/4636/file/Myakka_SF_map.pdf",
  },
  {
    pattern: /crowley museum|crowley nature/i,
    url: "https://crowleyfl.org/wp-content/uploads/2021/04/Crowley-Trail-Map.pdf",
  },
  {
    pattern: /myakkahatchee creek/i,
    url: "https://www.northportfl.gov/files/assets/city/v/1/parks-amp-rec/documents/myakkahatchee-creek-trail-map.pdf",
  },
  {
    pattern: /marie selby|selby botanical|downtown sarasota campus/i,
    url: "https://selby.org/wp-content/uploads/2024/01/Selby-Gardens-Downtown-Sarasota-Campus-Map-2024.pdf",
  },
  {
    pattern: /historic spanish point/i,
    url: "https://selby.org/wp-content/uploads/2023/11/Selby-Gardens-Historic-Spanish-Point-Campus-Map.pdf",
  },
  {
    pattern: /bobby jones/i,
    url: "https://www.sarasotafl.gov/home/showpublisheddocument/12668/",
  },
  {
    pattern: /arlington park/i,
    url: "https://www.sarasotafl.gov/home/showpublisheddocument/3456/",
  },
  {
    pattern: /ken thompson|city island park/i,
    url: "https://www.sarasotafl.gov/home/showpublisheddocument/3454/",
  },
  {
    pattern: /payne park/i,
    url: "https://www.sarasotafl.gov/home/showpublisheddocument/3458/",
  },
  {
    pattern: /pinebrook park/i,
    url: "https://www.venicegov.com/home/showpublisheddocument/4134/",
  },
  {
    pattern: /legacy trail|culverhouse|palmer lake/i,
    url: "https://www.sarasotalegacytrail.com/CountyTrailMap.pdf",
  },
  {
    pattern: /sweetwater wetlands/i,
    url: "https://www.tucsonaz.gov/Departments/Water/Community-Relations/Sweetwater-Wetlands/About-Sweetwater-Wetlands-and-Access",
  },
  {
    pattern: /canoa ranch|historic canoa ranch/i,
    url: "https://www.pima.gov/1253/Historic-Canoa-Ranch",
  },
  {
    pattern: /el rio preserve/i,
    url: "https://www.maranaaz.gov/Departments/Parks-Recreation/El-Rio-Preserve",
  },
  {
    pattern: /buenos aires|arivaca cienega/i,
    url: "https://www.fws.gov/refuge/buenos-aires/map",
  },
  {
    pattern: /agua caliente/i,
    url: "https://content.civicplus.com/api/assets/1ed6da22-580a-4832-9981-8a2b934221fe",
  },
  {
    pattern: /kennedy park|john f\.? kennedy park/i,
    url: "https://www.tucsonaz.gov/Departments/Parks-and-Recreation/Parks/John-F.-Kennedy-Park",
  },
  {
    pattern: /kino environmental|kerp|kino sports/i,
    url: "https://kinobaseball.com/wp-content/uploads/MAP-Kino-Sports-Complex.pdf",
  },
  {
    pattern: /madera canyon|proctor rd|proctor road/i,
    url: "https://www.nature.org/content/dam/tnc/nature/en/documents/madera-canyon-trail-map.pdf",
  },
  {
    pattern: /cienega creek|catalina regional|canoa hills/i,
    url: "https://www.pima.gov/3261/Conservation-Lands-and-Resources-Map-Roo",
  },
  {
    pattern: /danny lopez|columbus park|christopher columbus park/i,
    url: "https://www.tucsonaz.gov/Departments/Parks-and-Recreation/Parks/Christopher-Columbus-Park",
  },
  {
    pattern: /sabino canyon/i,
    url: "https://www.fs.usda.gov/Internet/FSE_DOCUMENTS/fseprd525865.pdf",
  },
  {
    pattern: /fort lowell/i,
    url: "https://www.tucsonaz.gov/Departments/Parks-and-Recreation/Parks/Fort-Lowell-Park",
  },
  {
    pattern: /bog springs|carrie nation|josephine saddle|kent springs|mt\.? wrightson|mount wrightson|old baldy|madera canyon.*nature trail/i,
    url: "https://www.nature.org/content/dam/tnc/nature/en/documents/madera-canyon-trail-map.pdf",
  },
  {
    pattern: /patagonia lake|sonoita creek state natural/i,
    url: "https://azstateparks.com/patagonia-lake/explore/map",
  },
  {
    pattern: /patagonia-?sonoita creek preserve|sonoita creek preserve/i,
    url: "https://www.nature.org/content/dam/tnc/nature/en/documents/arizona/Patagonia-Sonoita-Creek-Preserve-Trail-Map.pdf",
  },
  {
    pattern: /juan bautista de anza|anza trail|amado|carmen|rio rico|tubac trailhead/i,
    url: "https://www.nps.gov/juba/planyourvisit/maps.htm",
  },
  {
    pattern: /las cienegas/i,
    url: "https://www.blm.gov/sites/blm.gov/files/documents/files/media-center-public-room-arizona-las-cienegas-map.pdf",
  },
  {
    pattern: /tumacacori/i,
    url: "https://www.nps.gov/carto/hfc/carto/media/TUMAmap1.pdf",
  },
  {
    pattern: /tubac presidio/i,
    url: "https://azstateparks.com/tubac/explore/map",
  },
  {
    pattern: /pena blanca|peña blanca/i,
    url: "https://www.fs.usda.gov/recarea/coronado/recarea/?recid=25446",
  },
  {
    pattern: /brazoria national wildlife|brazoria nwr|big slough|cannan bend/i,
    url: "https://www.fws.gov/refuge/brazoria/map",
  },
  {
    pattern: /san bernard.*auto tour|bobcat woods|moccasin pond|scissor-?tailed trail/i,
    url: "https://www.fws.gov/sites/default/files/documents/san%20bernard%20auto%20tour%20map%20fact%20sheet%20final.pdf",
  },
  {
    pattern: /dow woods|hudson woods|san bernard national wildlife|san bernard nwr/i,
    url: "https://www.fws.gov/apps/refuge/san-bernard/visit-us",
  },
  {
    pattern: /gulf coast bird observatory|gcbo/i,
    url: "https://www.gcbo.org/wp-content/uploads/2015/10/GCBOTrailMap.pdf",
  },
  {
    pattern: /justin hurst/i,
    url: "https://tpwd.texas.gov/huntwild/hunt/public/annual_public_hunting/resources/JustinHurst_721.pdf",
  },
  {
    pattern: /sea center texas/i,
    url: "https://tpwd.texas.gov/publications/spdest/destinations/sea_center/",
  },
  {
    pattern: /camp mohawk/i,
    url: "https://www.brazoriacountytx.gov/departments/parks-department/camp-mohawk",
  },
  {
    pattern: /delores fenwick|shadow creek ranch|independence park|centennial park|pearland.*trail|pearland.*park/i,
    url: "https://maps.pearlandtx.gov/datasets/trails",
  },
];

function hotspotMoreInfoUrl(name) {
  return hotspotMoreInfoRules.find((rule) => rule.pattern.test(String(name || "")))?.url || "";
}

function hotspotMoreInfoKey(name, regionName) {
  return `${String(name || "").toLowerCase()}|${String(regionName || "").toLowerCase()}`;
}

function normalizeSearchResultUrl(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("duckduckgo.com") && parsed.searchParams.has("uddg")) {
      return parsed.searchParams.get("uddg") || "";
    }
    return parsed.href;
  } catch {
    return "";
  }
}

function isCredibleHotspotInfoUrl(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return false;
  }
  const host = parsed.hostname.toLowerCase();
  const path = parsed.pathname.toLowerCase();
  if (/(facebook|instagram|tripadvisor|yelp|twitter|x\.com|youtube|ebird|google|bing|duckduckgo|alltrails)\./.test(host)) return false;
  if (/\.(jpg|jpeg|png|gif|webp)$/i.test(path)) return false;
  return /(\.gov$|\.edu$|\.org$|city|county|parks?|tpwd|state|txst|visitor|tourism|wimberley|drippingsprings|sanmarcos)/i.test(host + path);
}

async function searchHotspotMoreInfoUrl(name, regionName) {
  const curatedUrl = hotspotMoreInfoUrl(name);
  if (curatedUrl) return curatedUrl;

  const cacheKey = hotspotMoreInfoKey(name, regionName);
  if (hotspotMoreInfoCache.has(cacheKey)) return hotspotMoreInfoCache.get(cacheKey);

  const queries = [
    `"${name}" "${regionName}" map`,
    `"${name}" "${regionName}" official`,
    `"${name}" "${regionName}" park`,
  ];

  for (const query of queries) {
    try {
      const response = await fetch(`https://r.jina.ai/http://duckduckgo.com/html/?q=${encodeURIComponent(query)}`);
      if (!response.ok) continue;
      const text = await response.text();
      const links = [...text.matchAll(/https?:\/\/[^\s)"'<>\]]+/g)]
        .map((match) => normalizeSearchResultUrl(match[0]))
        .filter(Boolean);
      const found = links.find(isCredibleHotspotInfoUrl);
      if (found) {
        hotspotMoreInfoCache.set(cacheKey, found);
        return found;
      }
    } catch {
      // Keep rendering fast; missing More info links simply stay hidden.
    }
  }

  hotspotMoreInfoCache.set(cacheKey, "");
  return "";
}

async function enrichHotspotMoreInfoLinks(hotspots, regionName, renderRegionCode) {
  const missingHotspots = hotspots.filter((hotspot) => !hotspot.moreInfoUrl).slice(0, 8);
  await Promise.all(
    missingHotspots.map(async (hotspot) => {
      const url = await searchHotspotMoreInfoUrl(hotspot.name, regionName);
      if (!url || getRegion().ebirdCode !== renderRegionCode) return;
      hotspot.moreInfoUrl = url;
      const card = document.querySelector(`[data-hotspot-key="${hotspot.renderKey}"]`);
      const links = card?.querySelector(".hotspot-links");
      if (!links || links.querySelector(".hotspot-more-info-link")) return;
      links.insertAdjacentHTML(
        "beforeend",
        `<a class="hotspot-more-info-link" href="${url}" target="_blank" rel="noreferrer">More info...</a>`,
      );
    }),
  );
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
    signal: "Google Maps directions available when hotspot coordinates are provided.",
    species: [],
    url: hotspot.locId ? `https://ebird.org/hotspot/${hotspot.locId}` : "",
    mapsUrl,
    moreInfoUrl: hotspotMoreInfoUrl(name),
    locId: hotspot.locId || "",
    lat: Number(hotspot.lat),
    lng: Number(hotspot.lng),
    recentSpeciesCount: null,
    recentMigrants: [],
  };
}

function renderRisk(result) {
  const region = getRegion();
  if (currentSignalLabel) currentSignalLabel.textContent = `Current Signal for ${region.name}`;
  document.querySelector("#riskLabel").textContent = result.label;
  document.querySelector("#riskScore").textContent = result.score;
  document.querySelector("#meterFill").style.width = `${result.score}%`;
  document.querySelector("#riskSummary").textContent = result.summary;
  document.querySelector("#reasonList").innerHTML = result.reasons
    .slice(0, 5)
    .map((reason) => `<p>${reason}</p>`)
    .join("");

  // Update background and border intensity class dynamically
  const riskPanel = document.querySelector(".risk-panel");
  if (riskPanel) {
    riskPanel.classList.remove("is-low", "is-medium", "is-high", "is-extreme");
    const score = Number(result.score || 0);
    if (score < 30) {
      riskPanel.classList.add("is-low");
    } else if (score < 60) {
      riskPanel.classList.add("is-medium");
    } else if (score < 80) {
      riskPanel.classList.add("is-high");
    } else {
      riskPanel.classList.add("is-extreme");
    }
  }
}

function renderInsights(signals, result) {
  const region = getRegion();
  if (usesLocalConcentrationModel(region, signals)) {
    const historical = historicalConcentrationPressure(region);
    document.querySelector("#skyInsight").textContent =
      historical.count
        ? `${region.name} is being read through ${historical.count} historical or recent hotspots, not BirdCast passage. Strong recurring hotspots are the raw supply side for local concentration.`
        : `${region.name} is being read without BirdCast passage, so the app leans on habitat, weather, and fresh reports.`;
  } else {
    document.querySelector("#skyInsight").textContent =
      `${formatBirds(signals.birdsCrossed)} birds crossed overnight and ${formatBirds(signals.birdsInFlight)} are currently estimated in flight over ${region.name}. That is the raw supply side of a possible concentration event.`;
  }

  const rainText = signals.rain === "no" ? "no rain nearby" : signals.rain === "storms" ? "storms nearby" : "rain nearby";
  const windText = {
    north: "wind from the north or northeast",
    east: "wind from the east",
    south: "wind from the south or southeast",
    west: "wind from the west",
  }[signals.windDirection];
  document.querySelector("#weatherInsight").textContent =
    usesLocalConcentrationModel(region, signals)
      ? `The current setup shows ${windText} with ${rainText}. For this region, rain, dry spells, wind exposure, and sheltered habitat can matter more than classic migration-front timing.`
      : `The current setup shows ${windText} with ${rainText}. Front timing: ${frontText(signals)}. Wind from the north plus precipitation and frontal passage is the strongest Hill Country stop-sign combination for spring migration.`;

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
    approaching: "approaching within 24 hours",
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

function isSoutherlyWind(direction = "") {
  const normalized = String(direction).toUpperCase();
  return normalized.includes("S") && !normalized.includes("N");
}

function isNortherlyWind(direction = "") {
  return String(direction).toUpperCase().includes("N");
}

function frontStatusFromHours(hoursUntilImpact) {
  if (hoursUntilImpact <= 1) return "passing";
  if (hoursUntilImpact <= 36) return "approaching";
  return "none";
}

function formatFrontTiming(hoursUntilImpact, arrivalTime) {
  if (hoursUntilImpact <= 0) return "Hitting now";
  const arrivalText = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
  }).format(arrivalTime);
  return `Expected in ${hoursUntilImpact} hour${hoursUntilImpact === 1 ? "" : "s"} (${arrivalText})`;
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

async function detectColdFront(latitude, longitude) {
  const lat = Number(latitude);
  const lon = Number(longitude);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;

  const pointResponse = await fetch(`https://api.weather.gov/points/${lat.toFixed(4)},${lon.toFixed(4)}`, {
    headers: { Accept: "application/geo+json" },
  });
  if (!pointResponse.ok) throw new Error("NWS point lookup unavailable");
  const pointData = await pointResponse.json();
  const hourlyForecastUrl = pointData.properties?.forecastHourly;
  if (!hourlyForecastUrl) throw new Error("NWS hourly forecast unavailable");

  const forecastResponse = await fetch(hourlyForecastUrl, {
    headers: { Accept: "application/geo+json" },
  });
  if (!forecastResponse.ok) throw new Error("NWS hourly forecast unavailable");
  const forecastData = await forecastResponse.json();
  const periods = forecastData.properties?.periods || [];

  for (let i = 0; i < periods.length - 2; i += 1) {
    for (const hoursAhead of [2, 3, 4]) {
      const currentPeriod = periods[i];
      const futurePeriod = periods[i + hoursAhead];
      if (!currentPeriod || !futurePeriod) continue;

      const tempDrop = Number(currentPeriod.temperature) - Number(futurePeriod.temperature);
      if (
        tempDrop >= 10 &&
        isSoutherlyWind(currentPeriod.windDirection) &&
        isNortherlyWind(futurePeriod.windDirection)
      ) {
        const arrivalTime = new Date(currentPeriod.startTime);
        const hoursUntilImpact = Math.max(0, Math.round((arrivalTime - new Date()) / (1000 * 60 * 60)));
        return {
          hoursUntilImpact,
          arrivalTime,
          tempDrop,
          fromWind: currentPeriod.windDirection,
          toWind: futurePeriod.windDirection,
        };
      }
    }
  }

  return null;
}

function dailyFrontFallback(weather) {
  const daily = weather?.daily;
  if (!daily?.temperature_2m_max || daily.temperature_2m_max.length < 2) return null;
  const todayIndex = Math.max(0, daily.time?.indexOf(localDateKey()) ?? 0);
  const yesterdayIndex = todayIndex > 0 ? todayIndex - 1 : -1;
  const tomorrowIndex = todayIndex + 1;
  if (tomorrowIndex >= daily.temperature_2m_max.length) return null;

  const todayHigh = Number(daily.temperature_2m_max[todayIndex]);
  const todayLow = Number(daily.temperature_2m_min?.[todayIndex]);
  const todayWeatherCode = Number(daily.weather_code?.[todayIndex]);
  const todayWindDirection = Number(daily.wind_direction_10m_dominant?.[todayIndex]);
  const todayPrecipitationSum = Number(daily.precipitation_sum?.[todayIndex] || 0);
  const todayPrecipitationProbability = Number(daily.precipitation_probability_max?.[todayIndex] || 0);
  const todayWindBucket = windBucketFromDegrees(todayWindDirection);

  const yesterdayHigh = yesterdayIndex >= 0 ? Number(daily.temperature_2m_max[yesterdayIndex]) : NaN;
  const tomorrowHigh = Number(daily.temperature_2m_max[tomorrowIndex]);
  const tomorrowLow = Number(daily.temperature_2m_min?.[tomorrowIndex]);
  if (!Number.isFinite(todayHigh) || !Number.isFinite(tomorrowHigh)) return null;

  const todayHasPrecipitation =
    todayPrecipitationSum > 0 ||
    todayPrecipitationProbability >= 20 ||
    rainBucketFromWeather(todayWeatherCode, 0) !== "no";
  const todayHasCoolWindComponent = todayWindBucket === "north" || todayWindBucket === "east";
  const priorDayDrop = Number.isFinite(yesterdayHigh) ? yesterdayHigh - todayHigh : 0;
  const priorDayOvernightDrop = Number.isFinite(yesterdayHigh) && Number.isFinite(todayLow) ? yesterdayHigh - todayLow : 0;

  if (
    Number.isFinite(yesterdayHigh) &&
    (priorDayDrop >= 8 || Math.round(yesterdayHigh) - Math.round(todayHigh) >= 10 || priorDayOvernightDrop >= 15) &&
    (todayHasPrecipitation || todayHasCoolWindComponent)
  ) {
    return {
      hoursUntilImpact: 0,
      arrivalTime: new Date(),
      tempDrop: Math.max(priorDayDrop, priorDayOvernightDrop),
      fromWind: "yesterday",
      toWind: `${todayWindBucket} wind`,
      source: "daily",
      statusOverride: "passing",
      detail:
        `Today ${Math.round(todayHigh)}/${Number.isFinite(todayLow) ? Math.round(todayLow) : "--"} F vs yesterday high ${Math.round(yesterdayHigh)} F, ` +
        `${weatherCodeLabel(todayWeatherCode)}, ${todayWindBucket} wind` +
        `${todayPrecipitationProbability ? `, ${Math.round(todayPrecipitationProbability)}% rain chance` : ""}`,
    };
  }

  const tempDrop = todayHigh - tomorrowHigh;
  const overnightDrop = Number.isFinite(tomorrowLow) ? todayHigh - tomorrowLow : 0;
  const roundedTempDrop = Math.round(todayHigh) - Math.round(tomorrowHigh);
  const tomorrowWeatherCode = Number(daily.weather_code?.[1]);
  const tomorrowWindDirection = Number(daily.wind_direction_10m_dominant?.[1]);
  const precipitationSum = Number(daily.precipitation_sum?.[1] || 0);
  const precipitationProbability = Number(daily.precipitation_probability_max?.[1] || 0);
  const windBucket = windBucketFromDegrees(tomorrowWindDirection);
  const hasPrecipitation =
    precipitationSum > 0 ||
    precipitationProbability >= 20 ||
    rainBucketFromWeather(tomorrowWeatherCode, 0) !== "no";
  const hasCoolWindComponent = windBucket === "north" || windBucket === "east";

  if ((tempDrop >= 8 || roundedTempDrop >= 10 || overnightDrop >= 15) && (hasPrecipitation || hasCoolWindComponent)) {
    const arrivalTime = new Date();
    arrivalTime.setDate(arrivalTime.getDate() + 1);
    arrivalTime.setHours(6, 0, 0, 0);
    return {
      hoursUntilImpact: Math.max(1, Math.round((arrivalTime - new Date()) / (1000 * 60 * 60))),
      arrivalTime,
      tempDrop,
      fromWind: "daily trend",
      toWind: `${windBucket} wind`,
      source: "daily",
      detail:
        `Tomorrow ${Math.round(tomorrowHigh)}/${Number.isFinite(tomorrowLow) ? Math.round(tomorrowLow) : "--"} F vs today high ${Math.round(todayHigh)} F, ` +
        `${weatherCodeLabel(tomorrowWeatherCode)}, ${windBucket} wind` +
        `${precipitationProbability ? `, ${Math.round(precipitationProbability)}% rain chance` : ""}`,
    };
  }

  return null;
}

async function updateColdFrontInputs(latitude, longitude, weather = null) {
  try {
    const front = (await detectColdFront(latitude, longitude)) || dailyFrontFallback(weather);
    if (!front) {
      fields.frontStatus.value = "none";
      fields.frontPassage.value = "";
      return;
    }

    const status = front.statusOverride || frontStatusFromHours(front.hoursUntilImpact);
    if (status === "none") {
      fields.frontStatus.value = "none";
      fields.frontPassage.value = "";
      return;
    }

    fields.frontStatus.value = status;
    fields.frontPassage.value = front.detail
      ? `${formatFrontTiming(front.hoursUntilImpact, front.arrivalTime)}; ${front.detail}`
      : `${formatFrontTiming(front.hoursUntilImpact, front.arrivalTime)}; ` +
        `${Math.round(front.tempDrop)} F drop, wind ${front.fromWind} to ${front.toWind}`;
  } catch {
    const fallbackFront = dailyFrontFallback(weather);
    if (fallbackFront) {
      fields.frontStatus.value = fallbackFront.statusOverride || frontStatusFromHours(fallbackFront.hoursUntilImpact);
      fields.frontPassage.value = `${formatFrontTiming(fallbackFront.hoursUntilImpact, fallbackFront.arrivalTime)}; ${fallbackFront.detail}`;
    } else {
      fields.frontStatus.value = "none";
      fields.frontPassage.value = "";
    }
  }
}

async function latestRainViewerRadarPath() {
  if (countyWeatherRadarPath) return countyWeatherRadarPath;
  try {
    const response = await fetch("https://api.rainviewer.com/public/weather-maps.json");
    if (!response.ok) throw new Error("No radar map");
    const data = await response.json();
    countyWeatherRadarPath = data.radar?.past?.at(-1)?.path || "";
    return countyWeatherRadarPath;
  } catch {
    return "";
  }
}

function rainViewerRadarMapUrl(latitude, longitude, zoom = countyMiniMapZoom) {
  return `https://www.rainviewer.com/map.html?loc=${latitude},${longitude},${zoom}&layer=${countyMiniMapLayer}&sm=0`;
}

function applyCountyMiniMapLink(regionName, latitude, longitude) {
  if (!countyMiniMapLink) return false;
  const lat = Number(latitude);
  const lon = Number(longitude);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return false;

  countyMiniMapLink.href = rainViewerRadarMapUrl(lat, lon);
  countyMiniMapLink.title = `Click to view ${regionName} radar map on RainViewer`;
  countyMiniMapLink.setAttribute("aria-label", `Open RainViewer radar layer for ${regionName} at coordinates ${lat}, ${lon}`);
  activeCountyMiniMapContext = { regionName, latitude: lat, longitude: lon, layer: countyMiniMapLayer, zoom: countyMiniMapZoom };
  return true;
}

async function setCountyMiniWeatherMap(regionName, latitude, longitude, current = null) {
  if (!countyMiniMap) return;
  const lat = Number(latitude);
  const lon = Number(longitude);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return;
  const temp = current ? `${Math.round(current.temperature_2m)} F` : "--";
  const wind = current ? `${windArrowForDegrees((Number(current.wind_direction_10m || 0) + 180) % 360)} ${Math.round(current.wind_speed_10m)} mph` : "Wind pending";
  const rain = current ? `${Number(current.precipitation || 0).toFixed(2)} in rain` : "Rain pending";
  const condition = current ? weatherCodeLabel(current.weather_code) : "Weather loading";
  const weatherSummary = `${weatherIcon(current?.weather_code)} ${temp} · ${condition} · ${rain} · ${wind}`;

  countyMiniMap.title = `${regionName} weather map. Click to view on RainViewer.`;
  countyMiniMap.setAttribute("aria-label", `${regionName} weather map: ${temp}, ${condition}, ${wind}, ${rain}. Click to view on RainViewer.`);
  if (countyMiniMapLegend) countyMiniMapLegend.textContent = weatherSummary;

  applyCountyMiniMapLink(regionName, lat, lon);

  if (!window.L) {
    countyMiniMap.textContent = "";
    return;
  }

  if (!countyWeatherMap) {
    countyMiniMap.textContent = "";
    countyWeatherMap = L.map(countyMiniMap, {
      attributionControl: false,
      dragging: false,
      keyboard: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      zoomControl: false,
      tap: false,
    }).setView([lat, lon], countyMiniMapZoom);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 12,
      minZoom: 5,
    }).addTo(countyWeatherMap);
  } else {
    countyWeatherMap.setView([lat, lon], countyMiniMapZoom);
    countyWeatherMap.invalidateSize();
  }

  if (!countyWeatherMarker) {
    countyWeatherMarker = L.circleMarker([lat, lon], {
      radius: 5,
      color: "#1f4c36",
      fillColor: "#d99b35",
      fillOpacity: 0.9,
      weight: 2,
    }).addTo(countyWeatherMap);
  } else {
    countyWeatherMarker.setLatLng([lat, lon]);
  }

  const radarPath = await latestRainViewerRadarPath();
  if (radarPath) {
    if (countyWeatherRadarLayer) countyWeatherMap.removeLayer(countyWeatherRadarLayer);
    countyWeatherRadarLayer = L.tileLayer(
      `https://tilecache.rainviewer.com/v2/radar/${radarPath}/256/{z}/{x}/{y}/2/1_1.png`,
      { opacity: 0.62, zIndex: 3 },
    ).addTo(countyWeatherMap);
  }

  setTimeout(() => countyWeatherMap?.invalidateSize(), 0);
}

function wikipediaTitleForRegion(region) {
  if (countries.some((country) => country.name === region?.name)) return region.name;
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
  if (!region.birdcastCode) {
    resetBirdcastData("BirdCast is not available for this selected region.");
    if (birdsCrossedHint) {
      birdsCrossedHint.classList.add("birdcast-unavailable");
      birdsCrossedHint.textContent = "Service is not Available: BirdCast";
    }
    if (birdsInFlightHint) {
      birdsInFlightHint.classList.add("birdcast-unavailable");
      birdsInFlightHint.textContent = "Service is not Available: BirdCast";
    }
    updateDashboard();
    return;
  }

  try {
    setBirdcastManualMode(false);
    if (birdsCrossedHint) birdsCrossedHint.classList.remove("birdcast-unavailable");
    if (birdsInFlightHint) birdsInFlightHint.classList.remove("birdcast-unavailable");
    if (birdsCrossedHint) birdsCrossedHint.innerHTML = `(Auto-filled from BirdCast) <span class="refreshing-note">(REFRESHING)</span>`;
    if (birdsInFlightHint) birdsInFlightHint.innerHTML = `(Auto-filled from BirdCast) <span class="refreshing-note">(REFRESHING)</span>`;
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
    if (birdsCrossedHint) {
      birdsCrossedHint.classList.remove("birdcast-unavailable");
      birdsCrossedHint.textContent = "(Auto-filled from BirdCast)";
    }
    if (birdsInFlightHint) {
      birdsInFlightHint.classList.remove("birdcast-unavailable");
      birdsInFlightHint.textContent = "(Auto-filled from BirdCast)";
    }
    updateDashboard();
  } catch {
    fields.birdsCrossed.value = 0;
    fields.birdsInFlight.value = 0;
    activeBirdcastMeta = null;
    setBirdcastManualMode(true);
    syncBirdcastLevelBadge("", birdsCrossedLevel);
    syncBirdcastLevelBadge("", birdsInFlightLevel);
    if (birdsCrossedDisplay) birdsCrossedDisplay.textContent = formatBirds(Number(fields.birdsCrossed.value || 0));
    if (birdsInFlightDisplay) birdsInFlightDisplay.textContent = formatBirds(Number(fields.birdsInFlight.value || 0));
    syncBirdcastValueTone(Number(fields.birdsCrossed.value || 0), birdsCrossedDisplay);
    if (birdsCrossedCaption) {
      birdsCrossedCaption.textContent = "BirdCast auto-fill is unavailable right now. Wait a few minutes and try again, or enter manually.";
    }
    if (birdsInFlightCaption) {
      birdsInFlightCaption.textContent = "BirdCast auto-fill is unavailable right now. Wait a few minutes and try again, or enter manually.";
    }
    if (birdsCrossedHint) {
      birdsCrossedHint.classList.add("birdcast-unavailable");
      birdsCrossedHint.textContent = "Service is not Available: BirdCast";
    }
    if (birdsInFlightHint) {
      birdsInFlightHint.classList.add("birdcast-unavailable");
      birdsInFlightHint.textContent = "Service is not Available: BirdCast";
    }
    updateDashboard();
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
    const cachedLocation = weatherLocationCache.get(title);
    if (cachedLocation) {
      activeWeatherContext = cachedLocation.weatherContext || activeWeatherContext;
      setAutoFillHint(windAutoFillHint, "Open-Meteo", true);
      setAutoFillHint(rainAutoFillHint, "Open-Meteo", true);
      setAutoFillHint(frontStatusAutoFillHint, "NWS/Open-Meteo", true);
      setAutoFillHint(frontPassageAutoFillHint, "NWS/Open-Meteo", true);
      setCountyMiniWeatherMap(title, cachedLocation.latitude, cachedLocation.longitude, cachedLocation.current);
      await updateColdFrontInputs(cachedLocation.latitude, cachedLocation.longitude, cachedLocation.weather);
      refreshScoredPanels();
    } else {
      setAutoFillHint(windAutoFillHint, "Open-Meteo", false);
      setAutoFillHint(rainAutoFillHint, "Open-Meteo", false);
      setAutoFillHint(frontStatusAutoFillHint, "NWS/Open-Meteo", false);
      setAutoFillHint(frontPassageAutoFillHint, "NWS/Open-Meteo", false);
    }
    return;
  }

async function geocodeRegionSearch(region) {
  const queries = [
    `${region.name}, ${region.state}`,
    region.name,
    region.name.replace(/\s+County$/i, ""),
  ].filter(Boolean);
  const geoResults = [];

  for (const query of queries) {
    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=10&language=en&format=json`,
      );
      const geo = await geoResponse.json();
      if (geo.results && geo.results.length) {
        geoResults.push(...geo.results);
        break;
      }
    } catch (e) {
      console.warn("Open-Meteo geocoding search failed:", e);
    }
  }

  let match = geoResults.find((item) =>
    String(item.admin1 || "").toLowerCase().includes(String(region.state || "").toLowerCase()),
  );

  if (!match && region.state) {
    try {
      const osmResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(`${region.name}, ${region.state}`)}&format=json&limit=1`,
        { headers: { "User-Agent": "FeatherCast-App/1.0" } }
      );
      const osmResults = await osmResponse.json();
      if (osmResults && osmResults.length > 0) {
        match = {
          latitude: Number(osmResults[0].lat),
          longitude: Number(osmResults[0].lon),
          name: osmResults[0].name,
          admin1: region.state,
        };
      }
    } catch (e) {
      console.warn("Nominatim geocoding search fallback failed:", e);
    }
  }

  if (!match && geoResults.length) {
    match = geoResults[0];
  }

  return match ? { latitude: match.latitude, longitude: match.longitude } : null;
}

  currentWeather.textContent = "Weather loading...";
  try {
    const match = await geocodeRegionSearch(region);
    if (!match) throw new Error("No weather location");
    weatherLocationCache.set(title, { latitude: match.latitude, longitude: match.longitude });

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${match.latitude}&longitude=${match.longitude}&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,precipitation&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_direction_10m_dominant,wind_speed_10m_max,precipitation_sum,precipitation_probability_max&past_days=7&forecast_days=2&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto`,
    );
    const weather = await weatherResponse.json();
    const current = weather.current;
    if (!current) throw new Error("No current weather");
    const todayIndex = Math.max(0, weather.daily?.time?.indexOf(localDateKey()) ?? 0);
    const recentPrecipitation = (weather.daily?.precipitation_sum || [])
      .slice(0, todayIndex + 1)
      .reduce((total, value) => total + Number(value || 0), 0);
    activeWeatherContext = {
      regionTitle: title,
      condition: weatherCodeLabel(current.weather_code),
      precipitation: Number(current.precipitation || 0),
      recentPrecipitation,
      windSpeed: Number(current.wind_speed_10m || 0),
      windDirection: Number(current.wind_direction_10m || 0),
    };
    weatherLocationCache.set(title, { latitude: match.latitude, longitude: match.longitude, current, weather, weatherContext: activeWeatherContext });
    const arrow = windArrowForDegrees((Number(current.wind_direction_10m || 0) + 180) % 360);
    const tomorrowIndex = todayIndex + 1;
    const today = weather.daily
      ? `Today ${weatherIcon(weather.daily.weather_code[todayIndex])} ${windArrowForDegrees((Number(weather.daily.wind_direction_10m_dominant[todayIndex] || 0) + 180) % 360)} ${Math.round(weather.daily.wind_speed_10m_max[todayIndex])} mph ${Math.round(weather.daily.temperature_2m_max[todayIndex])}/${Math.round(weather.daily.temperature_2m_min[todayIndex])}`
      : "";
    const tomorrow = weather.daily && tomorrowIndex < weather.daily.weather_code.length
      ? `Tomorrow ${weatherIcon(weather.daily.weather_code[tomorrowIndex])} ${windArrowForDegrees((Number(weather.daily.wind_direction_10m_dominant[tomorrowIndex] || 0) + 180) % 360)} ${Math.round(weather.daily.wind_speed_10m_max[tomorrowIndex])} mph ${Math.round(weather.daily.temperature_2m_max[tomorrowIndex])}/${Math.round(weather.daily.temperature_2m_min[tomorrowIndex])}`
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
      setAutoFillHint(windAutoFillHint, "Open-Meteo", true);
      setAutoFillHint(rainAutoFillHint, "Open-Meteo", true);
      setAutoFillHint(frontStatusAutoFillHint, "NWS/Open-Meteo", true);
      setAutoFillHint(frontPassageAutoFillHint, "NWS/Open-Meteo", true);
      setCountyMiniWeatherMap(title, match.latitude, match.longitude, current);
      applyWeatherToInputs(current);
      await updateColdFrontInputs(match.latitude, match.longitude, weather);
      refreshScoredPanels();
    }
  } catch {
    weatherCache.set(title, "Weather unavailable");
    if (title === wikipediaTitleForRegion(getRegion())) {
      activeWeatherContext = null;
      currentWeather.textContent = "Weather unavailable";
      setAutoFillHint(windAutoFillHint, "Open-Meteo", false);
      setAutoFillHint(rainAutoFillHint, "Open-Meteo", false);
      setAutoFillHint(frontStatusAutoFillHint, "NWS/Open-Meteo", false);
      setAutoFillHint(frontPassageAutoFillHint, "NWS/Open-Meteo", false);
    }
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
    const scientificName = speciesScientificNameByName.get(name) || "";
    const speciesCode = speciesCodeByName.get(name) || "";
    const aliasTerms = speciesPhotoSearchAliases.get(name.toLowerCase()) || [];
    const exactTerms = Array.from(new Set([name, scientificName, ...aliasTerms].filter(Boolean)));
    const ebirdAssetUrl = () => {
      const assetId = speciesEbirdPhotoAssets.get(name.toLowerCase()) ||
        (speciesCode ? speciesEbirdPhotoAssets.get(speciesCode) : "");
      return assetId ? `https://cdn.download.ams.birds.cornell.edu/api/v1/asset/${assetId}/320` : "";
    };
    const getBrowserEbirdSpeciesPhoto = async () => {
      if (!speciesCode || !/^[a-z0-9]+$/i.test(speciesCode)) return "";
      const response = await fetch(`https://r.jina.ai/http://ebird.org/species/${encodeURIComponent(speciesCode)}`);
      if (!response.ok) return "";
      const text = await response.text();
      const directAsset = text.match(/https:\/\/cdn\.download\.ams\.birds\.cornell\.edu\/api\/v1\/asset\/\d+(?:\/\d+)?/);
      if (directAsset?.[0]) return directAsset[0].replace(/\/\d+$/, "/320");
      const mediaAsset = text.match(/\bML(\d{5,})\b/);
      return mediaAsset?.[1]
        ? `https://cdn.download.ams.birds.cornell.edu/api/v1/asset/${mediaAsset[1]}/320`
        : "";
    };
    const getBrowserSummaryPhoto = async (title) => {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
      );
      if (!response.ok) return "";
      const summary = await response.json();
      return summary.thumbnail?.source || "";
    };
    const getWikipediaPageImage = async (title) => {
      const response = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&piprop=thumbnail&pithumbsize=160&redirects=1&format=json&origin=*&titles=${encodeURIComponent(title)}`,
      );
      if (!response.ok) return "";
      const data = await response.json();
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
      const response = await fetch(
        `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url&iiurlwidth=160&format=json&origin=*`,
      );
      if (!response.ok) return "";
      const data = await response.json();
      const pages = Object.values(data.query?.pages || {});
      return pages.find((page) => page.imageinfo?.[0]?.thumburl || page.imageinfo?.[0]?.url)?.imageinfo?.[0]?.thumburl ||
        pages.find((page) => page.imageinfo?.[0]?.url)?.imageinfo?.[0]?.url ||
        "";
    };

    let url = "";
    if (window.location.protocol === "file:") {
      for (const term of exactTerms) {
        url = await getBrowserSummaryPhoto(term) || await getWikipediaPageImage(term);
        if (url) break;
      }
      if (!url) {
        const titles = [];
        for (const term of exactTerms) {
          titles.push(...(await searchWikipediaTitles(`${term} bird`)));
        }
        for (const title of titles) {
          url = await getBrowserSummaryPhoto(title) || await getWikipediaPageImage(title);
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
        url = ebirdAssetUrl() || await getBrowserEbirdSpeciesPhoto();
      }
    } else {
      const photoParams = new URLSearchParams({
        name,
        v: "4",
      });
      if (scientificName) photoParams.set("sciName", scientificName);
      if (speciesCode) photoParams.set("speciesCode", speciesCode);
      const response = await fetch(`/api/species-photo?${photoParams.toString()}`);
      if (!response.ok) throw new Error("No species photo");
      const summary = await response.json();
      url = summary.url || "";
    }

    if (url) {
      speciesPhotoCache.set(name, url);
    } else {
      speciesPhotoCache.delete(name);
    }
    return url;
  } catch {
    speciesPhotoCache.delete(name);
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

function checklistOrLocationUrl(obs, fallbackUrl = "") {
  const checklistId = obs?.subId || obs?.checklistId || "";
  if (checklistId) return `https://ebird.org/checklist/${checklistId}`;
  if (obs?.locId) return `https://ebird.org/hotspot/${obs.locId}`;
  return fallbackUrl;
}

function hotspotCurrentMonthUrl(hotspot) {
  if (hotspot?.locId) return `https://ebird.org/hotspot/${encodeURIComponent(hotspot.locId)}?yr=curM`;
  const match = String(hotspot?.url || "").match(/https:\/\/ebird\.org\/hotspot\/([^/?#]+)/i);
  return match ? `https://ebird.org/hotspot/${encodeURIComponent(match[1])}?yr=curM` : hotspot?.url || "";
}

function htmlAttribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function hotspotIdentity(hotspot) {
  return String(hotspot?.locId || hotspot?.url || hotspot?.name || "location")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function hotspotNameIdentity(hotspot) {
  return String(hotspot?.name || hotspot?.locName || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\b(private access|restricted access)\b/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function preferredHotspotKey(regionCode, hotspot) {
  return `${regionCode || "manual"}::${hotspotIdentity(hotspot)}`;
}

function readPreferredHotspots() {
  try {
    const saved = JSON.parse(localStorage.getItem(preferredHotspotStorageKey) || "[]");
    return new Set(Array.isArray(saved) ? saved : []);
  } catch {
    return new Set();
  }
}

function writePreferredHotspots(preferred) {
  try {
    localStorage.setItem(preferredHotspotStorageKey, JSON.stringify([...preferred]));
  } catch {
    // If browser storage is blocked, the heart still updates for the current render.
  }
}

function isPreferredHotspot(regionCode, hotspot) {
  const preferred = readPreferredHotspots();
  return preferred.has(preferredHotspotKey(regionCode, hotspot)) ||
    preferred.has(`${regionCode || "manual"}::${hotspotNameIdentity(hotspot)}`);
}

function preferredHotspotsForRegion(regionCode, hotspots) {
  const preferred = readPreferredHotspots();
  return hotspots.filter((hotspot) => preferred.has(preferredHotspotKey(regionCode, hotspot)));
}

function mergePreferredHotspots(regionCode, visibleHotspots, preferredCandidates) {
  const visibleKeys = new Set(visibleHotspots.map(hotspotIdentity));
  const visibleNameKeys = new Set(visibleHotspots.map(hotspotNameIdentity).filter(Boolean));
  const missingPreferred = preferredHotspotsForRegion(regionCode, preferredCandidates)
    .filter((hotspot) => {
      const nameKey = hotspotNameIdentity(hotspot);
      return !visibleKeys.has(hotspotIdentity(hotspot)) && (!nameKey || !visibleNameKeys.has(nameKey));
    });
  return [...missingPreferred, ...visibleHotspots];
}

function setPreferredHotspot(regionCode, hotspotKey, shouldPrefer) {
  const preferred = readPreferredHotspots();
  const storageKey = `${regionCode || "manual"}::${hotspotKey}`;
  if (shouldPrefer) {
    preferred.add(storageKey);
  } else {
    preferred.delete(storageKey);
  }
  writePreferredHotspots(preferred);
}

function updatePreferredHotspotButton(button, isPreferred) {
  button.classList.toggle("is-preferred", isPreferred);
  button.setAttribute("aria-pressed", String(isPreferred));
  button.setAttribute(
    "aria-label",
    isPreferred ? "Remove preferred hotspot" : "Save as preferred hotspot",
  );
  button.innerHTML = isPreferred ? "&#9829;" : "&#9825;";
}

function milesBetween(start, end) {
  const lat1 = Number(start?.lat);
  const lon1 = Number(start?.lng ?? start?.lon);
  const lat2 = Number(end?.lat);
  const lon2 = Number(end?.lng ?? end?.lon);
  if (![lat1, lon1, lat2, lon2].every(Number.isFinite)) return Number.POSITIVE_INFINITY;

  const toRadians = (degrees) => degrees * Math.PI / 180;
  const radiusMiles = 3958.8;
  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(deltaLon / 2) ** 2;

  return radiusMiles * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistanceMiles(distance) {
  if (!Number.isFinite(distance)) return "";
  return distance < 10 ? `${distance.toFixed(1)} mi away` : `${Math.round(distance)} mi away`;
}

function clearHotspotSearchStatus() {
  if (!hotspotSearchStatus) return;
  hotspotSearchStatus.textContent =
    "Enter a city in the selected county or use your current location to show the closest 4 hotspots.";
}

function setHotspotSearchLoading(isLoading) {
  [hotspotLocationSearch, hotspotUseCurrentLocation].forEach((button) => {
    if (button) button.disabled = isLoading;
  });
}

function hotspotCityOptionsForRegion(region) {
  const cityNames = new Set(countyCityOptions[region.ebirdCode] || []);

  return [...cityNames].sort((a, b) => a.localeCompare(b));
}

function renderHotspotCityOptions(cities, currentValue = "") {
  if (!hotspotCitySelect) return;
  const cleanCities = [...new Set(cities)]
    .map((city) => String(city || "").trim())
    .filter((city) => city && !/\d|^-|,/.test(city))
    .sort((a, b) => a.localeCompare(b));

  if (!cleanCities.length) {
    hotspotCitySelect.innerHTML = `<option value="">Type a city for this county</option>`;
    hotspotCitySelect.disabled = true;
    return;
  }

  hotspotCitySelect.disabled = false;
  hotspotCitySelect.innerHTML = `
    <option value="">Select a city</option>
    ${cleanCities.map((city) => `<option value="${htmlAttribute(city)}">${city}</option>`).join("")}
  `;
  hotspotCitySelect.value = cleanCities.includes(currentValue) ? currentValue : "";
}

async function fetchCountyCitiesClientSide(regionCode) {
  const match = regionCode.match(/^US-([A-Z]{2})-(\d{3})$/);
  if (!match) return [];
  const [, stateAbbr, countyFips] = match;
  const stateObj = states.find((s) => s.abbr === stateAbbr);
  if (!stateObj) return [];
  const stateFips = stateObj.fips;

  const queryTigerJson = async (url, params) => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(params),
    });
    if (!response.ok) throw new Error("Census place lookup unavailable.");
    const data = await response.json();
    if (data.error) throw new Error(data.error.message || "Census place lookup unavailable.");
    return data;
  };

  const queryCountyPlaceLayer = async (countyGeometry, stateFips, layerId) => {
    const placeData = await queryTigerJson(
      `https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/Places_CouSub_ConCity_SubMCD/MapServer/${layerId}/query`,
      {
        f: "json",
        geometry: JSON.stringify(countyGeometry),
        geometryType: "esriGeometryPolygon",
        inSR: "4326",
        spatialRel: "esriSpatialRelIntersects",
        outFields: "BASENAME,NAME,STATE",
        returnGeometry: "false",
        orderByFields: "BASENAME",
      },
    );

    return (placeData.features || [])
      .filter((feature) => String(feature.attributes?.STATE || "") === stateFips)
      .map((feature) => {
        const basename = feature.attributes?.BASENAME;
        const name = feature.attributes?.NAME;
        return basename ? String(basename).trim() : String(name || "").replace(/\s+(city|town|village|borough|municipality)$/i, "").trim();
      })
      .filter((name) => name && !/\d|^-|,/.test(name));
  };

  let countyData = await queryTigerJson(
    "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1/query",
    {
      f: "json",
      where: `GEOID='${stateFips}${countyFips}'`,
      outFields: "GEOID,NAME",
      returnGeometry: "true",
      outSR: "4326",
    },
  );
  let countyGeometry = countyData.features?.[0]?.geometry;
  let is2020 = false;
  if (!countyGeometry) {
    countyData = await queryTigerJson(
      "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/55/query",
      {
        f: "json",
        where: `GEOID='${stateFips}${countyFips}'`,
        outFields: "GEOID,NAME",
        returnGeometry: "true",
        outSR: "4326",
      },
    );
    countyGeometry = countyData.features?.[0]?.geometry;
    is2020 = true;
  }
  if (!countyGeometry) throw new Error("County boundary not found.");

  const [incorporatedPlaces, censusDesignatedPlaces] = await Promise.all([
    queryCountyPlaceLayer(countyGeometry, stateFips, is2020 ? 25 : 4),
    queryCountyPlaceLayer(countyGeometry, stateFips, is2020 ? 26 : 5),
  ]);

  return [...new Set([...incorporatedPlaces, ...censusDesignatedPlaces])]
    .sort((a, b) => a.localeCompare(b));
}

function extractSubdivisionsFromHotspots(hotspots) {
  const subdivisions = new Set();
  const excludeWords = /\b(AICA|Reserva|Parque|Río|Quebrada|Finca|Vía|Sendero|Carretera|Airport|Aeropuerto|Hotel|Lodge|Trails|Road|Rd|Highway|Woods|Walmart|Pueblo|Laguna|Volcan|Volcán|National|Reserve|Forest|Park|Trail|Sanctuary|Beach|Playa|River|Creek|Lake|Mountain|Valley|Hill|Ridge|Island|Islands|Isla|Islas|Bahía|Bay|Port|Puerto|Station|Estación|Center|Centro|Garden|Jardín|Jardines|Gardens|Zoo|Refugio|Refuge|Biological|Biológica|Biológico|Sector|Entrada|Access|Acceso|Embalse|Presa|Dam|Laguna|Lagunas|Canal|Cascada|Waterfall|Waterfalls|Salto|Termales|Hotsprings|Hotspring|Clubs|Club|Golf|Marina|Resort|Resorts|Campground|Camp|Camping|Point|Punta|Cabo|Cape|Paso|Pass|Canyon|Cañón|Mirador|Overlook|Viewpoint|Peak|Pico|Cerro|Cerros|Loma|Lomas|Mesa|Mesas|Valley|Valle|Valles|Plain|Plains|Sabana|Sabanas|Páramo|Paramo|Ciénaga|Cienaga|Swamp|Marsh|Estero|Mangle|Manglares|Mangrove|Mangroves|Refugio|Refuge|Kms|Km|Kilómetro|Kilometro|No\b|No\.\b|Sector|Frontera|Border|Customs|Aduana|Peaje|Toll|Estación|Station|Plaza|Mall|Shop|Store|Supermercado|Market|Mercado|Iglesia|Church|Catedral|Cathedral|Cementerio|Cemetery|Colegio|School|Universidad|University|Campus|Hospital|Clínica|Clinica|Base|Fort|Fuerte|Castillo|Castle|Ruinas|Ruins|Monumento|Monument|Archaeological|Arqueológico|Arqueologica)\b/i;

  hotspots.forEach((h) => {
    const name = h.name || h.locName || "";
    
    // Pattern 1: Name--Detail
    if (name.includes("--")) {
      const part = name.split("--")[0].trim();
      if (part && part.length > 2 && part.length < 30 && !excludeWords.test(part)) {
        subdivisions.add(part);
      }
    }
    // Pattern 2: Name, Detail
    if (name.includes(",")) {
      const parts = name.split(",");
      parts.forEach((part) => {
        const clean = part.trim().replace(/\s*\(.*\)/g, "");
        if (clean && clean.length > 2 && clean.length < 25 && /^[A-Z]/.test(clean) && !excludeWords.test(clean)) {
          subdivisions.add(clean);
        }
      });
    }
    // Pattern 3: Name - Detail
    if (name.includes(" - ")) {
      const parts = name.split(" - ");
      parts.forEach((part) => {
        const clean = part.trim().replace(/\s*\(.*\)/g, "");
        if (clean && clean.length > 2 && clean.length < 25 && /^[A-Z]/.test(clean) && !excludeWords.test(clean)) {
          subdivisions.add(clean);
        }
      });
    }
  });
  return [...subdivisions];
}

async function getInternationalCities(region) {
  const regionCode = region.ebirdCode;
  const fallbackCities = hotspotCityOptionsForRegion(region);
  let subregions = [];
  try {
    const list = await fetchEbirdJson(`ref/region/list/subnational2/${regionCode}`, EBIRD_API_TOKEN);
    if (Array.isArray(list)) {
      subregions = list.map((item) => item.name);
    }
  } catch (e) {
    console.warn("Could not fetch eBird subregions:", e);
  }

  let parsedCities = [];
  try {
    const hotspots = await getCountyHotspotCards(region);
    parsedCities = extractSubdivisionsFromHotspots(hotspots);
  } catch (e) {
    console.warn("Could not parse hotspots for cities:", e);
  }

  const merged = [...new Set([...fallbackCities, ...subregions, ...parsedCities])];
  return merged.sort((a, b) => a.localeCompare(b));
}

async function updateHotspotCityDropdown() {
  if (!hotspotCitySelect) return;

  const region = getRegion();
  const regionCode = region.ebirdCode || "manual";
  const currentValue = hotspotCitySelect.value;
  const fallbackCities = hotspotCityOptionsForRegion(region);
  const requestId = ++hotspotCityRequestId;
  hotspotCitySelect.dataset.regionCode = regionCode;

  if (regionCode !== "manual" && !/^US-[A-Z]{2}-\d{3}$/.test(regionCode)) {
    if (countyCityCache.has(regionCode)) {
      renderHotspotCityOptions(countyCityCache.get(regionCode), currentValue);
      return;
    }

    if (fallbackCities.length) {
      renderHotspotCityOptions(fallbackCities, currentValue);
    } else {
      hotspotCitySelect.innerHTML = `<option value="">Loading cities...</option>`;
      hotspotCitySelect.disabled = true;
    }

    try {
      const cities = await getInternationalCities(region);
      const mergedCities = [...new Set([...fallbackCities, ...cities])];
      countyCityCache.set(regionCode, mergedCities);
      if (requestId !== hotspotCityRequestId || getRegion().ebirdCode !== regionCode) return;
      renderHotspotCityOptions(mergedCities, currentValue);
    } catch {
      countyCityCache.set(regionCode, fallbackCities);
      if (requestId !== hotspotCityRequestId || getRegion().ebirdCode !== regionCode) return;
      renderHotspotCityOptions(fallbackCities, currentValue);
    }
    return;
  }

  if (!/^US-[A-Z]{2}-\d{3}$/.test(regionCode)) {
    renderHotspotCityOptions(fallbackCities, currentValue);
    return;
  }

  if (countyCityCache.has(regionCode)) {
    renderHotspotCityOptions(countyCityCache.get(regionCode), currentValue);
    return;
  }

  if (fallbackCities.length) {
    renderHotspotCityOptions(fallbackCities, currentValue);
  } else {
    hotspotCitySelect.innerHTML = `<option value="">Loading cities...</option>`;
    hotspotCitySelect.disabled = true;
  }

  if (window.location.protocol === "file:") {
    try {
      const cities = await fetchCountyCitiesClientSide(regionCode);
      const mergedCities = [...new Set([...fallbackCities, ...cities])];
      countyCityCache.set(regionCode, mergedCities);
      if (requestId !== hotspotCityRequestId || getRegion().ebirdCode !== regionCode) return;
      renderHotspotCityOptions(mergedCities, currentValue);
    } catch {
      countyCityCache.set(regionCode, fallbackCities);
      if (requestId !== hotspotCityRequestId || getRegion().ebirdCode !== regionCode) return;
      renderHotspotCityOptions(fallbackCities, currentValue);
    }
    return;
  }

  try {
    const response = await fetch(`/api/county-cities?region=${encodeURIComponent(regionCode)}`);
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "City lookup unavailable.");
    const cities = Array.isArray(data.cities) ? data.cities : [];
    const mergedCities = [...new Set([...fallbackCities, ...cities])];
    countyCityCache.set(regionCode, mergedCities);
    if (requestId !== hotspotCityRequestId || getRegion().ebirdCode !== regionCode) return;
    renderHotspotCityOptions(mergedCities, currentValue);
  } catch {
    try {
      const cities = await fetchCountyCitiesClientSide(regionCode);
      const mergedCities = [...new Set([...fallbackCities, ...cities])];
      countyCityCache.set(regionCode, mergedCities);
      if (requestId !== hotspotCityRequestId || getRegion().ebirdCode !== regionCode) return;
      renderHotspotCityOptions(mergedCities, currentValue);
    } catch {
      countyCityCache.set(regionCode, fallbackCities);
      if (requestId !== hotspotCityRequestId || getRegion().ebirdCode !== regionCode) return;
      renderHotspotCityOptions(fallbackCities, currentValue);
    }
  }
}

async function getCountyHotspotCards(region) {
  const regionCode = region?.ebirdCode;
  const regionName = region?.state ? `${region.name}, ${region.state}` : region?.name || "Selected County";
  if (!regionCode) return region?.hotspots || genericHotspots;
  if (activeHotspotRegionCode === regionCode && activeRegionAllHotspots.length) return activeRegionAllHotspots;
  if (hotspotListCache.has(regionCode)) return hotspotListCache.get(regionCode);

  const hotspots = await fetchEbirdJson(`ref/hotspot/${regionCode}?fmt=json`, EBIRD_API_TOKEN);
  const cards = hotspots
    .map((hotspot, index) => ebirdHotspotToCard(hotspot, index, regionName))
    .filter((hotspot) => Number.isFinite(Number(hotspot.lat)) && Number.isFinite(Number(hotspot.lng)));
  hotspotListCache.set(regionCode, cards);
  return cards;
}

async function geocodeHotspotCity(city, region) {
  const regionName = region.state ? `${region.name}, ${region.state}` : region.name;
  const countryCode = String(region.countryCode || "US").toUpperCase();
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?${new URLSearchParams({
      name: city,
      count: "10",
      language: "en",
      format: "json",
    }).toString()}`,
  );
  if (!response.ok) throw new Error("Location search is unavailable right now.");
  const data = await response.json();
  const matches = Array.isArray(data.results) ? data.results : [];
  const selectedCounty = normalizeCountyName(region.name);
  const selectedState = String(region.state || "").toLowerCase();
  const match =
    matches.find((item) =>
      item.country_code === countryCode &&
      String(item.admin1 || "").toLowerCase() === selectedState &&
      normalizeCountyName(item.admin2 || "") === selectedCounty,
    ) ||
    matches.find((item) =>
      item.country_code === countryCode &&
      String(item.admin1 || "").toLowerCase() === selectedState,
    ) ||
    matches.find((item) =>
      item.country_code === countryCode
    );
  if (!match) throw new Error(`Could not find ${city} inside ${regionName}.`);

  return {
    label: `${match.name}${match.admin1 ? `, ${match.admin1}` : ""}, ${regionName}`,
    lat: Number(match.latitude),
    lng: Number(match.longitude),
  };
}

async function geocodeHotspotStreet(locationText, region) {
  if (region.countryCode && region.countryCode !== "US") return null;
  if (!region.state || !region.name) return null;

  try {
    const response = await fetch(
      `https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?${new URLSearchParams({
        address: `${locationText}, ${region.state}`,
        benchmark: "Public_AR_Current",
        vintage: "Current_Current",
        format: "json",
      }).toString()}`,
    );
    if (!response.ok) return null;

    const data = await response.json();
    const matches = data?.result?.addressMatches || [];
    const selectedCounty = normalizeCountyName(region.name);
    const match = matches.find((item) => {
      const county = item.geographies?.Counties?.[0]?.NAME || "";
      return normalizeCountyName(county) === selectedCounty;
    }) || matches[0];

    const coordinates = match?.coordinates;
    if (!coordinates || !Number.isFinite(Number(coordinates.y)) || !Number.isFinite(Number(coordinates.x))) {
      return null;
    }

    return {
      label: `${locationText}, ${region.name}, ${region.state}`,
      lat: Number(coordinates.y),
      lng: Number(coordinates.x),
    };
  } catch {
    return null;
  }
}

async function geocodeHotspotNominatim(locationText, region) {
  if (!region.state) return null;
  const isUS = !region.countryCode || region.countryCode === "US";
  const stateVal = isUS ? (region.state || "") : (region.name || "");
  const locationQuery = isUS
    ? `${locationText}, ${region.state || ""}`
    : `${locationText}, ${region.name || ""}, ${region.state || ""}`;
  const countryCode = String(region.countryCode || "US").toLowerCase();
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?${new URLSearchParams({
        q: locationQuery,
        format: "json",
        addressdetails: "1",
      }).toString()}`,
      {
        headers: {
          "User-Agent": "FeatherCast-App/1.0",
        },
      }
    );
    if (!response.ok) return null;
    const data = await response.json();
    const matches = Array.isArray(data) ? data : [];
    const selectedCounty = normalizeCountyName(region.name);
    const selectedState = stateVal.toLowerCase();

    const match =
      matches.find((item) => {
        const address = item.address || {};
        const itemState = String(address.state || "").toLowerCase();
        const itemCounty = normalizeCountyName(address.county || address.state_district || address.region);
        const itemCountry = String(address.country_code || "").toLowerCase();
        return itemCountry === countryCode &&
          (itemState === selectedState || !selectedState) &&
          (!selectedCounty || itemCounty === selectedCounty);
      }) ||
      matches.find((item) => {
        const address = item.address || {};
        const itemState = String(address.state || "").toLowerCase();
        const itemCountry = String(address.country_code || "").toLowerCase();
        return itemCountry === countryCode &&
          (itemState === selectedState || !selectedState);
      }) ||
      matches.find((item) => {
        const address = item.address || {};
        const itemCountry = String(address.country_code || "").toLowerCase();
        return itemCountry === countryCode;
      });

    if (!match) return null;
    return {
      label: match.display_name || "",
      lat: Number(match.lat),
      lng: Number(match.lon),
    };
  } catch {
    return null;
  }
}

async function geocodeHotspotLocation(locationText, region) {
  const selectedCity = hotspotCitySelect?.value || "";
  const isUS = !region.countryCode || region.countryCode === "US";
  const stateVal = isUS ? (region.state || "") : (region.name || "");
  const countyVal = isUS ? (region.name || "") : selectedCity;

  if (window.location.protocol !== "file:") {
    const response = await fetch(
      `/api/hotspot-location?${new URLSearchParams({
        q: locationText,
        city: selectedCity,
        county: countyVal,
        state: stateVal,
        country: region.countryCode || "US",
      }).toString()}`,
    );
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "Could not search that location.");
    return data;
  }

  const streetMatch = await geocodeHotspotStreet(locationText, region);
  if (streetMatch) return streetMatch;
  const osmMatch = await geocodeHotspotNominatim(locationText, region);
  if (osmMatch) return osmMatch;
  return geocodeHotspotCity(locationText, region);
}

async function showClosestHotspots(origin, label) {
  const region = getRegion();
  const renderRegionCode = region.ebirdCode;
  const regionName = region.state ? `${region.name}, ${region.state}` : region.name;
  const allHotspots = await getCountyHotspotCards(region);
  const closest = allHotspots
    .map((hotspot) => {
      const distance = milesBetween(origin, hotspot);
      const cachedActiveCard = activeHotspotCardsByLocId.get(hotspot.locId);
      return {
        ...hotspot,
        distanceMiles: distance,
        distanceLabel: formatDistanceMiles(distance),
        recentStatus: cachedActiveCard ? cachedActiveCard.recentStatus : (hotspot.recentStatus || "Open eBird for latest reports"),
        observationWindowLabel: cachedActiveCard ? cachedActiveCard.observationWindowLabel : (hotspot.observationWindowLabel || "Recent reports"),
        recentSpeciesCount: cachedActiveCard ? cachedActiveCard.recentSpeciesCount : hotspot.recentSpeciesCount,
        recentMigrants: cachedActiveCard ? cachedActiveCard.recentMigrants : hotspot.recentMigrants,
        species: cachedActiveCard ? cachedActiveCard.species : hotspot.species,
        signalLabel: cachedActiveCard ? cachedActiveCard.signalLabel : hotspot.signalLabel,
      };
    })
    .filter((hotspot) => Number.isFinite(hotspot.distanceMiles))
    .sort((a, b) => a.distanceMiles - b.distanceMiles);

  if (!closest.length) throw new Error(`No mappable eBird hotspots were found for ${regionName}.`);

  activeHotspotSearch = { label, hotspots: closest, regionCode: renderRegionCode, visibleCount: 4 };
  if (hotspotClearSearch) hotspotClearSearch.classList.remove("is-hidden");
  if (hotspotSearchStatus) {
    hotspotSearchStatus.textContent =
      `Showing the closest ${Math.min(4, closest.length)} of ${closest.length} hotspots to ${label}.`;
  }
  refreshScoredPanels();
}

async function runHotspotCitySearch() {
  const locationText = hotspotLocationInput?.value.trim();
  if (!locationText) {
    if (hotspotSearchStatus) hotspotSearchStatus.textContent = "Enter a city or street inside the selected county first.";
    return;
  }

  const region = getRegion();
  setHotspotSearchLoading(true);
  if (hotspotSearchStatus) hotspotSearchStatus.textContent = `Finding hotspots near ${locationText}...`;

  try {
    const origin = await geocodeHotspotLocation(locationText, region);
    try {
      const matchedCounty = await fetchCountyFromCoordinates(origin.lat, origin.lng);
      if (
        region.ebirdCode &&
        matchedCounty.ebirdCode &&
        matchedCounty.ebirdCode !== region.ebirdCode
      ) {
        throw new Error(`${locationText} appears to be outside ${region.name}, ${region.state}.`);
      }
    } catch (error) {
      if (/outside/.test(error.message)) throw error;
    }
    await showClosestHotspots(origin, origin.label);
  } catch (error) {
    if (hotspotSearchStatus) hotspotSearchStatus.textContent = error.message || "Could not search nearby hotspots.";
  } finally {
    setHotspotSearchLoading(false);
  }
}

async function runHotspotCurrentLocationSearch() {
  setHotspotSearchLoading(true);
  if (hotspotSearchStatus) hotspotSearchStatus.textContent = "Finding closest hotspots from your current location...";

  try {
    const position = await getCurrentPosition();
    const { latitude, longitude } = position.coords;
    const region = getRegion();
    try {
      const matchedCounty = await fetchCountyFromCoordinates(latitude, longitude);
      if (
        region.ebirdCode &&
        matchedCounty.ebirdCode &&
        matchedCounty.ebirdCode !== region.ebirdCode
      ) {
        throw new Error(`Your current location appears to be outside ${region.name}, ${region.state}.`);
      }
    } catch (error) {
      if (/outside/.test(error.message)) throw error;
    }
    await showClosestHotspots({ lat: latitude, lng: longitude }, "your current location");
  } catch (error) {
    if (hotspotSearchStatus) hotspotSearchStatus.textContent = error.message || "Could not use current location.";
  } finally {
    setHotspotSearchLoading(false);
  }
}

function clearHotspotSearch() {
  activeHotspotSearch = null;
  if (hotspotLocationInput) hotspotLocationInput.value = "";
  if (hotspotCitySelect) hotspotCitySelect.value = "";
  if (hotspotClearSearch) hotspotClearSearch.classList.add("is-hidden");
  if (hotspotSearchGrid) hotspotSearchGrid.innerHTML = "";
  if (hotspotShowMore) hotspotShowMore.classList.add("is-hidden");
  clearHotspotSearchStatus();
  refreshScoredPanels();
}

async function showMoreHotspotSearchResults() {
  if (!activeHotspotSearch) return;
  activeHotspotSearch.visibleCount = Math.min(
    activeHotspotSearch.hotspots.length,
    (activeHotspotSearch.visibleCount || 4) + 4,
  );
  const region = getRegion();
  const signals = readSignals();
  const result = scoreSignals(signals);
  const regionName = region.state ? `${region.name}, ${region.state}` : region.name;
  await renderActiveHotspotSearch(result, regionName, region.ebirdCode);
}

async function renderHotspotCards(hotspots, renderRegionCode) {
  const cards = hotspots.map(async (hotspot, index) => {
    const speciesRows = hotspot.species?.length
      ? await Promise.all(hotspot.species.map((species) => localSpeciesPhotoRow(species)))
      : [];
    return `
      <article class="hotspot-card" data-hotspot-key="${hotspot.renderKey}">
        <div class="rank">${index + 1}</div>
        <div>
          <div class="hotspot-title">
            <div class="hotspot-name-row">
              <h3>${
                hotspotCurrentMonthUrl(hotspot)
                  ? `<a class="hotspot-bird-list-link" href="${htmlAttribute(hotspotCurrentMonthUrl(hotspot))}" target="_blank" rel="noopener">${hotspot.name}</a>`
                  : hotspot.name
              }</h3>
              <button
                class="preferred-hotspot-button ${hotspot.isPreferred ? "is-preferred" : ""}"
                type="button"
                data-region-code="${htmlAttribute(renderRegionCode)}"
                data-hotspot-key="${htmlAttribute(hotspot.preferredKey)}"
                aria-pressed="${hotspot.isPreferred ? "true" : "false"}"
                aria-label="${hotspot.isPreferred ? "Remove preferred hotspot" : "Save as preferred hotspot"}"
              >${hotspot.isPreferred ? "&#9829;" : "&#9825;"}</button>
            </div>
            <span>${hotspot.score}</span>
          </div>
          <p class="hotspot-links">
            ${hotspot.mapsUrl ? `<a class="maps-link" href="${hotspot.mapsUrl}" target="_blank" rel="noreferrer">Google Maps</a>` : ""}
            ${hotspot.url ? `<a class="hotspot-direct-link" href="${hotspot.url}" target="_blank" rel="noreferrer">eBird Hotspot</a>` : ""}
            ${hotspot.moreInfoUrl ? `<a class="hotspot-more-info-link" href="${hotspot.moreInfoUrl}" target="_blank" rel="noreferrer">More info...</a>` : ""}
            ${!hotspot.mapsUrl && !hotspot.url ? hotspot.signal : ""}
          </p>
          ${hotspot.distanceLabel ? `<p class="hotspot-distance">Distance: ${hotspot.distanceLabel}</p>` : ""}
          ${
            hotspot.recentStatus
              ? `<p class="hotspot-recent">${hotspot.observationWindowLabel || "Recent reports"}: ${hotspot.recentStatus}</p>`
              : hotspot.recentSpeciesCount === null || hotspot.recentSpeciesCount === undefined
              ? `<p class="hotspot-recent">${hotspot.observationWindowLabel || "Recent reports"}: checking species count</p>`
              : `<p class="hotspot-recent">${hotspot.observationWindowLabel || "Recent reports"}: ${hotspot.recentSpeciesCount} species reported</p>`
          }
          ${
            hotspot.recentMigrants?.length
              ? `<p class="hotspot-migrants">${hotspot.signalLabel || "Signals reported"}: ${hotspot.recentMigrants.join(", ")}</p>`
              : hotspot.recentStatus
                ? `<p class="hotspot-migrants">Signals reported: check current eBird lists for this hotspot</p>`
                : hotspot.recentSpeciesCount === null || hotspot.recentSpeciesCount === undefined
                ? `<p class="hotspot-migrants">Signals reported: checking recent reports</p>`
                : `<p class="hotspot-migrants">Signals reported: none detected in recent hotspot pull</p>`
          }
          <p class="habitat">${hotspot.habitat}</p>
          ${
            hotspot.species?.length
              ? `<div class="species-list local-migrant-photo-list hotspot-migrant-photo-list">${speciesRows.join("")}</div>`
              : ""
          }
        </div>
      </article>
    `;
  });

  return Promise.all(cards);
}

async function renderActiveHotspotSearch(result, regionName, renderRegionCode) {
  if (!hotspotSearchGrid) return;
  const searchRenderId = ++hotspotSearchRenderId;

  if (!activeHotspotSearch || activeHotspotSearch.regionCode !== renderRegionCode) {
    hotspotSearchGrid.innerHTML = "";
    if (hotspotShowMore) hotspotShowMore.classList.add("is-hidden");
    return;
  }

  const visibleCount = activeHotspotSearch.visibleCount || 4;
  const visibleHotspots = activeHotspotSearch.hotspots.slice(0, visibleCount);
  const scoredSearchHotspots = visibleHotspots
    .map((hotspot, index) => ({
      ...hotspot,
      renderKey: `hotspot-search-${index}-${String(hotspot.locId || hotspot.name || "location").replace(/[^a-z0-9]+/gi, "-")}`,
      preferredKey: hotspotIdentity(hotspot),
      isPreferred: isPreferredHotspot(renderRegionCode, hotspot),
      score: hotspotScore(hotspot.base, result.score, index),
    }));
  const renderedSearchCards = await renderHotspotCards(scoredSearchHotspots, renderRegionCode);
  if (searchRenderId !== hotspotSearchRenderId) return;
  if (getRegion().ebirdCode !== renderRegionCode) return;

  hotspotSearchGrid.innerHTML = renderedSearchCards.join("");
  if (hotspotSearchStatus) {
    hotspotSearchStatus.textContent =
      `Showing the closest ${visibleHotspots.length} of ${activeHotspotSearch.hotspots.length} hotspots to ${activeHotspotSearch.label}.`;
  }
  if (hotspotShowMore) {
    hotspotShowMore.classList.toggle("is-hidden", visibleHotspots.length >= activeHotspotSearch.hotspots.length);
  }
  enrichHotspotMoreInfoLinks(scoredSearchHotspots, regionName, renderRegionCode);
}

async function renderHotspots(result) {
  const region = getRegion();
  const renderRegionCode = region.ebirdCode;
  const regionName = region.state ? `${region.name}, ${region.state}` : region.name;

  if (activeHotspotSearch && activeHotspotSearch.regionCode !== renderRegionCode) {
    activeHotspotSearch = null;
    if (hotspotClearSearch) hotspotClearSearch.classList.add("is-hidden");
    if (hotspotSearchGrid) hotspotSearchGrid.innerHTML = "";
    if (hotspotShowMore) hotspotShowMore.classList.add("is-hidden");
    clearHotspotSearchStatus();
  }

  const hasActiveHotspotData = activeHotspotRegionCode === region.ebirdCode;
  const hotspotSource =
    hasActiveHotspotData
      ? activeRegionHotspots
      : region.hotspots;
  const activeFilteredHotspots =
    hasActiveHotspotData && activeHotspotFilterComplete
      ? hotspotSource.filter((hotspot) => hotspot.species?.length || hotspot.recentSpeciesCount)
      : hotspotSource;
  const preferredCandidates = [
    ...(region.hotspots || []),
    ...(hasActiveHotspotData ? activeRegionHotspots : []),
  ];
  const filteredHotspots = mergePreferredHotspots(
    renderRegionCode,
    activeFilteredHotspots,
    preferredCandidates,
  );

  if (hasActiveHotspotData && activeHotspotFilterComplete && !filteredHotspots.length) {
    document.querySelector("#hotspotGrid").innerHTML = `
      <article class="hotspot-card">
        <div class="rank">0</div>
        <div>
          <div class="hotspot-title">
            <h3>No recently active eBird locations found</h3>
            <span>0</span>
          </div>
          <p class="hotspot-area">${regionName}</p>
          <p>${activeHotspotStatus}</p>
          <p class="habitat">Try broadening the window later, pulling eBird again, or checking the county eBird hotspot link.</p>
        </div>
      </article>
    `;
    document.querySelector("#hotspotIntro").textContent =
      `Filtered ${regionName} locations to places with recent eBird activity in the selected window.`;
    await renderActiveHotspotSearch(result, regionName, renderRegionCode);
    return;
  }

  const scoredHotspots = filteredHotspots
    .map((hotspot, index) => ({
      ...hotspot,
      renderKey: `hotspot-${index}-${String(hotspot.locId || hotspot.name || "location").replace(/[^a-z0-9]+/gi, "-")}`,
      preferredKey: hotspotIdentity(hotspot),
      isPreferred: isPreferredHotspot(renderRegionCode, hotspot),
      score: hotspotScore(hotspot.base, result.score, index),
    }))
    .sort((a, b) => Number(b.isPreferred) - Number(a.isPreferred) || b.score - a.score);

  const renderedCards = await renderHotspotCards(scoredHotspots, renderRegionCode);
  if (getRegion().ebirdCode !== renderRegionCode) return;

  document.querySelector("#hotspotGrid").innerHTML = renderedCards.join("");
  document.querySelector("#hotspotIntro").textContent =
    hasActiveHotspotData
      ? activeHotspotFilterComplete
        ? `Showing ${filteredHotspots.length} ${regionName} eBird locations with recent species reported in ${filteredHotspots[0]?.observationWindowLabel?.toLowerCase() || "the latest eBird pull"}.`
        : `Loaded ${activeRegionHotspots.length} county-specific eBird hotspots for ${regionName}; checking recent migrant reports.`
      : `${activeHotspotStatus} Ranked for ${regionName} using water, riparian cover, migrant habitat, and current sample signals.`;
  enrichHotspotMoreInfoLinks(scoredHotspots, regionName, renderRegionCode);
  await renderActiveHotspotSearch(result, regionName, renderRegionCode);
}

function renderRegion() {
  const region = getRegion();
  updateHotspotCityDropdown();
  const fullName = region.state ? `${region.name}, ${region.state}` : region.name;
  const weatherTitle = wikipediaTitleForRegion(region);
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
  if (countyMiniMap) {
    countyMiniMap.title = `${fullName} weather map. Click for full forecast.`;
    countyMiniMap.setAttribute("aria-label", `${fullName} weather map. Open full forecast.`);
  }
  if (countyMiniMapLink) {
    const cachedLocation = weatherTitle ? weatherLocationCache.get(weatherTitle) : null;
    const activeLinkMatches =
      activeCountyMiniMapContext?.regionName === weatherTitle ||
      activeCountyMiniMapContext?.regionName === fullName;
    const keptRadarLink = activeLinkMatches
      ? applyCountyMiniMapLink(fullName, activeCountyMiniMapContext.latitude, activeCountyMiniMapContext.longitude)
      : cachedLocation?.latitude && cachedLocation?.longitude
        ? applyCountyMiniMapLink(fullName, cachedLocation.latitude, cachedLocation.longitude)
        : false;

    if (!keptRadarLink) {
      countyMiniMapLink.href = weatherUrl;
      countyMiniMapLink.removeAttribute("title");
      countyMiniMapLink.setAttribute("aria-label", `Open full weather forecast for ${fullName}`);
    }
  }
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
  const list = document.querySelector("#speciesList");
  list.classList.remove("local-migrant-photo-list");
  list.innerHTML = indicatorSpecies
    .map((species) => {
      const art = speciesArt(species);
      return speciesChipLink(species, art);
    })
    .join("");
}

function renderStateOptions() {
  const preloaded = new Set([
    ...Object.keys(offlineCountyData),
    ...Object.keys(historicalMigrantCountyLeaders),
  ]);
  const orderedStates = [
    ...states.filter((state) => preloaded.has(state.abbr)).sort((a, b) => a.name.localeCompare(b.name)),
    ...states.filter((state) => !preloaded.has(state.abbr)),
  ];

  const stateOptions = orderedStates
    .map(
      (state) =>
        `<option value="${state.abbr}" class="${preloaded.has(state.abbr) ? "preloaded-state-option" : ""}" ${state.abbr === "TX" ? "selected" : ""}>${state.name}</option>`,
    )
    .join("");
  const countryOptions = countries
    .map((country) => `<option value="${country.abbr}">${country.name}</option>`)
    .join("");

  fields.stateSelect.innerHTML = `${stateOptions}<optgroup label="Countries">${countryOptions}</optgroup>`;
  fields.stateSelect.classList.toggle("has-preloaded-state", preloaded.has(fields.stateSelect.value));
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
  const offlineCounties = countiesFromOfflineData(state);
  const cachedCounties = countyCache.get(state.abbr) || [];
  const allCounties = [...offlineCounties, ...cachedCounties];
  const match = allCounties.find(
    (county) => normalizeCountyName(county.name) === normalizedName,
  );
  return match?.ebirdCode || "";
}

function stateByFips(fips) {
  return states.find((state) => state.fips === String(fips || "").padStart(2, "0"));
}

function stateByNameOrCode(value) {
  const normalized = String(value || "").toLowerCase();
  const code = String(value || "").split("-").pop().toUpperCase();
  return states.find(
    (state) =>
      state.abbr === code ||
      state.abbr.toLowerCase() === normalized ||
      state.name.toLowerCase() === normalized,
  );
}

function formatDetectedCountyName(name, state) {
  const cleaned = String(name || "").trim();
  if (!cleaned) return "";
  if (/\b(county|parish|borough|census area|municipality)\b/i.test(cleaned)) return cleaned;
  if (state?.abbr === "LA") return `${cleaned} Parish`;
  return `${cleaned} County`;
}

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Current location is not available in this browser."));
      return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      maximumAge: 10 * 60 * 1000,
      timeout: 12000,
    });
  });
}

function parseCensusLocation(data) {
  const geographies = data?.result?.geographies || {};
  const county = geographies.Counties?.[0];
  const stateGeo = geographies.States?.[0];
  const state = stateByFips(county?.STATE || stateGeo?.STATE);

  if (!county || !state) return null;

  const name = county.NAME || "";
  const suffix = /\b(County|Parish|Borough|Census Area|Municipality|Municipio)\b/i.test(name) ? "" : " County";
  return {
    countyName: `${name}${suffix}`,
    countyFips: county.COUNTY,
    stateAbbr: state.abbr,
    stateName: state.name,
    ebirdCode: `US-${state.abbr}-${county.COUNTY}`,
  };
}

function parseBigDataCloudLocation(data) {
  const state = stateByNameOrCode(data?.principalSubdivisionCode || data?.principalSubdivision);
  if (!state || data?.countryCode !== "US") return null;
  const administrative = data?.localityInfo?.administrative || [];
  const county =
    administrative.find((item) => /\bcounty\b/i.test(`${item.name || ""} ${item.description || ""}`)) ||
    administrative.find((item) => /\b(parish|borough|census area|municipality)\b/i.test(`${item.name || ""} ${item.description || ""}`));
  const countyName = formatDetectedCountyName(county?.name, state);
  if (!countyName) return null;

  return {
    countyName,
    countyFips: "",
    stateAbbr: state.abbr,
    stateName: state.name,
    ebirdCode: regionCodeFromCountyName(countyName, state),
  };
}

function parseNominatimLocation(data) {
  if (String(data?.address?.country_code || "").toUpperCase() !== "US") return null;
  const state = stateByNameOrCode(data?.address?.state);
  const countyName = formatDetectedCountyName(
    data?.address?.county ||
      data?.address?.borough ||
      data?.address?.municipality ||
      data?.address?.state_district,
    state,
  );
  if (!state || !countyName) return null;

  return {
    countyName,
    countyFips: "",
    stateAbbr: state.abbr,
    stateName: state.name,
    ebirdCode: regionCodeFromCountyName(countyName, state),
  };
}

async function fetchCountyFromCoordinates(lat, lon) {
  const query = new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
  });

  if (window.location.protocol !== "file:") {
    try {
      const response = await fetch(`/api/location-region?${query.toString()}`);
      if (response.ok) return response.json();
    } catch {
      // Fall back to the public Census endpoint below.
    }
  }

  const browserFriendlyLookups = [
    {
      url: `https://api.bigdatacloud.net/data/reverse-geocode-client?${new URLSearchParams({
        latitude: String(lat),
        longitude: String(lon),
        localityLanguage: "en",
      }).toString()}`,
      parse: parseBigDataCloudLocation,
    },
    {
      url: `https://nominatim.openstreetmap.org/reverse?${new URLSearchParams({
        format: "jsonv2",
        lat: String(lat),
        lon: String(lon),
        zoom: "10",
        addressdetails: "1",
      }).toString()}`,
      parse: parseNominatimLocation,
    },
    {
      url: `https://geocoding.geo.census.gov/geocoder/geographies/coordinates?${new URLSearchParams({
        x: String(lon),
        y: String(lat),
        benchmark: "Public_AR_Current",
        vintage: "Current_Current",
        format: "json",
      }).toString()}`,
      parse: parseCensusLocation,
    },
  ];

  for (const lookup of browserFriendlyLookups) {
    try {
      const response = await fetch(lookup.url);
      if (!response.ok) continue;
      const location = lookup.parse(await response.json());
      if (location) return location;
    } catch {
      // Try the next location service.
    }
  }

  throw new Error("Could not match your current location to a US county yet.");
}

function selectManualRegion(location) {
  const state = states.find((item) => item.abbr === location.stateAbbr) || getSelectedState();
  fields.regionSelect.value = "manual";
  fields.manualCountyName.value = location.countyName || "Current County";
  fields.manualRegionCode.value = location.ebirdCode || regionCodeFromCountyName(location.countyName, state);
  fields.manualStateAbbr.value = location.stateAbbr || state.abbr;
}

async function useCurrentLocation() {
  const button = fields.useCurrentLocation;
  if (button) button.disabled = true;
  setCountyStatus("Finding your current county...");

  try {
    const position = await getCurrentPosition();
    const { latitude, longitude } = position.coords;
    const location = await fetchCountyFromCoordinates(latitude, longitude);
    const state = states.find((item) => item.abbr === location.stateAbbr);
    if (!state) throw new Error("Current location matched a region that is not in the state list yet.");

    fields.stateSelect.value = state.abbr;
    await loadCountiesForSelectedState();

    const countyOption = [...fields.regionSelect.options].find(
      (option) =>
        option.value === location.ebirdCode ||
        normalizeCountyName(option.dataset.name || option.textContent) === normalizeCountyName(location.countyName),
    );

    if (countyOption) {
      fields.regionSelect.value = countyOption.value;
    } else {
      selectManualRegion(location);
    }

    setCountyStatus(`Using current location: ${location.countyName}, ${state.name}.`);
    refreshSelectedCountyData();
    updateDashboard();
  } catch (error) {
    setCountyStatus(error.message || "Could not use current location.");
  } finally {
    if (button) button.disabled = false;
  }
}

function sortCountiesByHistoricalMigrantPriority(counties, state) {
  const priorityCodes = historicalMigrantCountyLeaders[state.abbr] || [];
  if (!priorityCodes.length) {
    return [...counties]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((county) => ({ ...county, isHistoricalPriority: false }));
  }

  const priorityRank = new Map(priorityCodes.map((code, index) => [code, index]));
  const availablePriorityCounties = counties
    .filter((county) => priorityRank.has(county.ebirdCode))
    .sort((a, b) => priorityRank.get(a.ebirdCode) - priorityRank.get(b.ebirdCode))
    .slice(0, 10);
  const priorityCountyCodes = new Set(availablePriorityCounties.map((county) => county.ebirdCode));
  const alphabetizedCounties = counties
    .filter((county) => !priorityCountyCodes.has(county.ebirdCode))
    .sort((a, b) => a.name.localeCompare(b.name));

  return [
    ...availablePriorityCounties.map((county) => ({ ...county, isHistoricalPriority: true })),
    ...alphabetizedCounties.map((county) => ({ ...county, isHistoricalPriority: false })),
  ];
}

async function fetchCountiesForState(state) {
  if (countyCache.has(state.abbr)) {
    return countyCache.get(state.abbr);
  }

  const list = await fetchEbirdJson(`ref/region/list/subnational2/US-${state.abbr}`, EBIRD_API_TOKEN);
  const counties = list
    .map((item) => {
      const countyName = formatDetectedCountyName(item.name, state);
      return {
        name: countyName,
        ebirdCode: item.code,
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
      const priorityClass = county.isHistoricalPriority ? " class=\"historical-priority-county\"" : "";
      return `<option${priorityClass} value="${county.ebirdCode}" data-name="${county.name}">${county.name}${richLabel}</option>`;
    })
    .join("");

  fields.regionSelect.innerHTML = `${options}<option value="manual" data-name="Manual County">Manual county / region</option>`;
  setCountyStatus(sourceLabel);

  fields.regionSelect.value = counties[0]?.ebirdCode || "manual";
}

function renderCountryRegionOptions(country) {
  const regions = countryRegions[country.abbr] || [{ name: country.name, ebirdCode: country.ebirdCode }];
  fields.regionSelect.innerHTML = `
    ${regions.map((region) => `<option value="${region.ebirdCode}" data-name="${region.name}">${region.name}</option>`).join("")}
    <option value="manual" data-name="Manual Region">Manual region</option>
  `;
  fields.regionSelect.value = regions[0]?.ebirdCode || country.ebirdCode;
  setCountyStatus(`Country selected: showing ${country.name} regions.`);
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
    const orderedCounties = sortCountiesByHistoricalMigrantPriority(offlineCounties, state);
    renderCountyOptions(
      orderedCounties,
      `Offline county list: showing the top historical migrant counties first, then ${state.name} counties alphabetically.`,
    );
    return;
  }

  const knownCounties = sortCountiesByHistoricalMigrantPriority(
    knownRegionsForState(state.abbr).map((region) => ({
      name: region.name,
      ebirdCode: region.ebirdCode,
    })),
    state,
  );

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
  if (state.isCountry) {
    fields.stateSelect.classList.remove("has-preloaded-state");
    renderCountryRegionOptions(state);
    updateDashboard();
    refreshSelectedCountyData();
    return;
  }

  fields.stateSelect.classList.toggle("has-preloaded-state", Boolean(offlineCountyData[state.abbr]));
  renderFallbackCountyOptions(state);
  const fallbackStatus = fields.countyStatus.textContent;
  if (!countiesFromOfflineData(state).length) {
    setCountyStatus(`Trying to load all ${state.name} counties...`);
  }

  try {
    const counties = await fetchCountiesForState(state);
    const orderedCounties = sortCountiesByHistoricalMigrantPriority(counties, state);
    renderCountyOptions(
      orderedCounties,
      `Loaded ${counties.length} counties; showing top historical migrant counties first, then alphabetical.`,
    );
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

function birdFinderNameProximity(query, name) {
  const normalized = name.toLowerCase();
  if (normalized === query) return 0;
  if (normalized.startsWith(query)) return 1;
  if (normalized.split(/[^a-z]+/).some((part) => part.startsWith(query))) return 2;
  return 3;
}

async function resolveRegionLocation(region) {
  const title = wikipediaTitleForRegion(region);
  if (!title) return null;
  const cachedLocation = weatherLocationCache.get(title);
  if (cachedLocation?.latitude && cachedLocation?.longitude) return cachedLocation;

  const match = await geocodeRegionSearch(region);
  if (!match) return null;

  const location = { latitude: match.latitude, longitude: match.longitude };
  weatherLocationCache.set(title, location);
  return location;
}

function distanceMiles(lat1, lon1, lat2, lon2) {
  const aLat = Number(lat1);
  const aLon = Number(lon1);
  const bLat = Number(lat2);
  const bLon = Number(lon2);
  if (![aLat, aLon, bLat, bLon].every(Number.isFinite)) return null;
  const toRadians = (degrees) => degrees * Math.PI / 180;
  const earthMiles = 3958.8;
  const dLat = toRadians(bLat - aLat);
  const dLon = toRadians(bLon - aLon);
  const h = Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(aLat)) * Math.cos(toRadians(bLat)) * Math.sin(dLon / 2) ** 2;
  return earthMiles * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function uniqueObservations(observations) {
  const seen = new Set();
  return observations.filter((obs) => {
    const key = obs.subId || obs.checklistId || `${obs.locId || obs.locName}-${obs.obsDt}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function birdFinderYearSampleDates() {
  const today = new Date();
  const dates = [];

  for (let monthIndex = 0; monthIndex <= today.getMonth(); monthIndex += 1) {
    const year = today.getFullYear();
    monthSampleDates(year, monthIndex).forEach((date) => {
      const candidate = new Date(year, date.month - 1, date.day);
      if (candidate <= today) dates.push(date);
    });
  }

  const todayParts = todayEbirdDateParts();
  const key = (date) => `${date.year}-${date.month}-${date.day}`;
  return [...new Map([...dates, todayParts].map((date) => [key(date), date])).values()];
}

async function getBirdFinderYearObservationCounts(regionCode) {
  if (!regionCode) return new Map();
  if (birdFinderYearObservationCache.has(regionCode)) {
    return birdFinderYearObservationCache.get(regionCode);
  }

  const counts = new Map();
  const dates = birdFinderYearSampleDates();
  const queue = [...dates];
  const workers = Array.from({ length: Math.min(5, queue.length) }, async () => {
    while (queue.length) {
      const { year, month, day } = queue.shift();
      try {
        const observations = await fetchEbirdJson(
          `data/obs/${regionCode}/historic/${year}/${month}/${day}?detail=full&includeProvisional=true&maxResults=10000`,
          EBIRD_API_TOKEN,
        );
        observations.forEach((obs) => {
          if (!obs.speciesCode) return;
          counts.set(obs.speciesCode, (counts.get(obs.speciesCode) || 0) + 1);
        });
      } catch {
        // Keep whatever year-to-date sample can be loaded for this region.
      }
    }
  });

  await Promise.all(workers);
  birdFinderYearObservationCache.set(regionCode, counts);
  return counts;
}

function sortBirdFinderMatches(matches, query, yearObservationCounts = new Map()) {
  return [...matches]
    .map((match) => ({
      ...match,
      yearObservationCount: yearObservationCounts.get(match.code) || 0,
      proximityScore: birdFinderNameProximity(query, match.name),
    }))
    .sort((a, b) => {
      const aObserved = a.yearObservationCount > 0;
      const bObserved = b.yearObservationCount > 0;
      if (aObserved || bObserved) {
        return Number(bObserved) - Number(aObserved) ||
          b.yearObservationCount - a.yearObservationCount ||
          a.proximityScore - b.proximityScore ||
          a.name.localeCompare(b.name);
      }
      return a.proximityScore - b.proximityScore || a.name.localeCompare(b.name);
    });
}

function renderBirdMatches(matches) {
  if (!birdMatchLabel || !birdMatchSelect) return;
  if (matches.length <= 1) {
    birdMatchLabel.classList.add("is-hidden");
    birdMatchSelect.innerHTML = "";
    return;
  }
  birdMatchSelect.innerHTML = matches
    .map((match) => {
      const yearLabel = match.yearObservationCount > 0 ? ` (${match.yearObservationCount} this year)` : "";
      return `<option value="${match.code}">${match.name}${yearLabel}</option>`;
    })
    .join("");
  birdMatchLabel.classList.remove("is-hidden");
}

function formatFinderObservation(obs) {
  return [obs?.locName, obs?.obsDt].filter(Boolean).join(" on ");
}

function renderNearbySightings(bird, sightings, sourceLabel, regionLocation = null) {
  if (!birdFinderNearby) return;
  birdFinderNearby.classList.remove("is-searching");

  if (!sightings.length) {
    birdFinderNearby.innerHTML = `
      <h3>Recently spotted nearby</h3>
      <p>No nearby recent sightings were found around this selected area.</p>
    `;
    return;
  }

  const rows = sightings.slice(0, 5).map((obs) => {
    const distance = regionLocation
      ? distanceMiles(regionLocation.latitude, regionLocation.longitude, obs.lat, obs.lng)
      : null;
    const distanceText = distance === null ? "" : ` Â· about ${Math.max(1, Math.round(distance))} mi away`;
    const countText = Number(obs.howMany) > 0 ? `${obs.howMany} seen` : "Seen";
    const url = checklistOrLocationUrl(obs, `https://ebird.org/species/${bird.code}`);
    return `
      <li>
        <a href="${url}" target="_blank" rel="noreferrer">${obs.locName || "Recent eBird location"}</a>
        <span class="nearby-sighting-meta">${countText} Â· ${obs.obsDt || "recent report"}${distanceText}</span>
      </li>
    `;
  }).join("");

  birdFinderNearby.innerHTML = `
    <h3>Recently spotted nearby</h3>
    <p class="nearby-sighting-meta">${sourceLabel}</p>
    <ul class="nearby-sighting-list">${rows}</ul>
  `;
}

function todayEbirdDateParts() {
  const today = new Date();
  return {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  };
}

async function fetchTodayRegionObservations(regionCode) {
  const { year, month, day } = todayEbirdDateParts();
  return fetchEbirdJson(
    `data/obs/${regionCode}/historic/${year}/${month}/${day}?detail=full&includeProvisional=true&maxResults=10000`,
    EBIRD_API_TOKEN,
  );
}

async function fetchHotspotObservationWindow(regionCode) {
  let todayObservations = [];
  try {
    todayObservations = await fetchTodayRegionObservations(regionCode);
  } catch {
    todayObservations = [];
  }

  if (todayObservations.length) {
    return {
      observations: todayObservations,
      label: "Today",
      emptyMessage: "",
      statusDetail: "today",
    };
  }

  const recentObservations = await fetchEbirdJson(
    `data/obs/${regionCode}/recent?back=7&includeProvisional=true&maxResults=10000`,
    EBIRD_API_TOKEN,
  );
  return {
    observations: recentObservations,
    label: "Previous 7 days",
    emptyMessage: "No eBird observations were reported today, so hotspots are using the previous seven days.",
    statusDetail: "the previous 7 days",
  };
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

async function fetchNearbyBirdSightings(region, bird, countyRecent = []) {
  const countySightings = uniqueObservations(countyRecent)
    .slice(0, 5);
  const regionLocation = await resolveRegionLocation(region);
  const sortByDistance = (observations) =>
    uniqueObservations(observations)
      .map((obs) => ({
        ...obs,
        distanceMiles: regionLocation
          ? distanceMiles(regionLocation.latitude, regionLocation.longitude, obs.lat, obs.lng)
          : null,
      }))
      .sort((a, b) =>
        String(b.obsDt || "").localeCompare(String(a.obsDt || "")) ||
        (a.distanceMiles ?? Number.POSITIVE_INFINITY) - (b.distanceMiles ?? Number.POSITIVE_INFINITY),
      )
      .slice(0, 5);
  const fetchRegionSightings = async (regionCode, maxResults = 100) => {
    try {
      return await fetchEbirdJson(
        `data/obs/${regionCode}/recent/${bird.code}?back=30&includeProvisional=true&maxResults=${maxResults}`,
        EBIRD_API_TOKEN,
      );
    } catch {
      return [];
    }
  };

  if (countySightings.length) {
    return {
      sightings: sortByDistance(countySightings),
      sourceLabel: `Recent reports inside ${region.name}.`,
      regionLocation,
    };
  }

  const regionCode = String(region.ebirdCode || "");
  const stateRegionMatch = regionCode.match(/^(US-[A-Z]{2})(?:-\d+)?$/);
  const stateRegionCode = stateRegionMatch?.[1] || "";

  if (stateRegionCode && stateRegionCode !== regionCode) {
    const stateSightings = sortByDistance(await fetchRegionSightings(stateRegionCode, 100));
    if (stateSightings.length) {
      return {
        sightings: stateSightings,
        sourceLabel: `No recent ${region.name} report was found, so this shows recent reports from other counties in the same state.`,
        regionLocation,
      };
    }
  }

  const countryRegionCode = regionCode.split("-")[0];
  if (countryRegionCode && countryRegionCode !== regionCode && countryRegionCode !== "US") {
    const countrySightings = sortByDistance(await fetchRegionSightings(countryRegionCode, 100));
    if (countrySightings.length) {
      return {
        sightings: countrySightings,
        sourceLabel: `No recent ${region.name} report was found, so this shows recent reports elsewhere in ${getSelectedState().name}.`,
        regionLocation,
      };
    }
  }

  if (countryRegionCode === "US" || stateRegionCode) {
    const usSightings = sortByDistance(await fetchRegionSightings("US", 200));
    if (usSightings.length) {
      return {
        sightings: usSightings,
        sourceLabel: `No recent report was found in the selected county or state, so this shows the closest recent reports found elsewhere in the US.`,
        regionLocation,
      };
    }
  }

  const countrySearchOrder = [
    ...countries.map((country) => country.ebirdCode),
    "US",
  ].filter((code, index, values) => code && code !== countryRegionCode && values.indexOf(code) === index);

  for (const countryCode of countrySearchOrder) {
    const countrySightings = sortByDistance(await fetchRegionSightings(countryCode, 100));
    if (countrySightings.length) {
      const countryName = countries.find((country) => country.ebirdCode === countryCode)?.name ||
        (countryCode === "US" ? "the United States" : countryCode);
      return {
        sightings: countrySightings,
        sourceLabel: `No recent report was found in the selected region, so this expands to recent reports in ${countryName}.`,
        regionLocation,
      };
    }
  }

  if (!regionLocation) {
    return {
      sightings: [],
      sourceLabel: "Could not locate the selected area center for a wider search.",
      regionLocation: null,
    };
  }

  return {
    sightings: [],
    sourceLabel: "No recent reports were found in the selected county, state, US, or configured country searches.",
    regionLocation,
  };
}

async function runBirdFinderSearch(bird, requestId = ++birdFinderRequestId) {
  const region = getRegion();
  if (!bird || !region.ebirdCode || !birdFinderResult) return;
  birdFinderResult.classList.add("is-searching");
  birdFinderResult.textContent = `Checking ${bird.name} in ${region.name}...`;
  if (birdFinderNearby) {
    birdFinderNearby.classList.add("is-searching");
    birdFinderNearby.textContent = `Looking for recent nearby ${bird.name} sightings...`;
  }
  try {
    const recentPromise = fetchEbirdJson(
      `data/obs/${region.ebirdCode}/recent/${bird.code}?back=30&includeProvisional=true&maxResults=10`,
      EBIRD_API_TOKEN,
    );
    const [recent, historicYears, photoUrl, status, nearbyResult] = await Promise.all([
      recentPromise,
      historicalSeasonCheck(region.ebirdCode, bird.code),
      speciesPhotoUrl(bird.name),
      speciesStatus(bird.code),
      recentPromise
        .then((countyRecent) => fetchNearbyBirdSightings(region, bird, countyRecent))
        .catch(() => ({ sightings: [], sourceLabel: "Nearby sightings could not be loaded.", regionLocation: null })),
    ]);
    const priorFiveYearCount = historicYears
      ? 0
      : await historicalAnyTimeCheck(region.ebirdCode, bird.code);
    const latest = recent[0];
    const speciesUrl = `https://ebird.org/species/${bird.code}`;
    const latestUrl = checklistOrLocationUrl(latest, speciesUrl);
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
    renderNearbySightings(bird, nearbyResult.sightings, nearbyResult.sourceLabel, nearbyResult.regionLocation);
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
    if (birdFinderNearby) {
      birdFinderNearby.classList.remove("is-searching");
      birdFinderNearby.textContent = `Could not load nearby sightings for ${bird.name}.`;
    }
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
    if (birdFinderNearby) {
      birdFinderNearby.classList.remove("is-searching");
      birdFinderNearby.textContent = "Recent nearby sightings will appear after you choose a bird.";
    }
    return;
  }
  birdFinderResult.classList.add("is-searching");
  birdFinderResult.textContent = "Searching birds and sorting by this year's county observations...";
  try {
    const taxonomy = await getTaxonomy();
    if (requestId !== birdFinderRequestId) return;
    const region = getRegion();
    const rawMatches = taxonomy.filter((item) => item.name.toLowerCase().includes(query));
    const cachedYearObservationCounts = birdFinderYearObservationCache.get(region.ebirdCode);
    const quickMatches = sortBirdFinderMatches(rawMatches, query, cachedYearObservationCounts || new Map());

    if (!cachedYearObservationCounts && quickMatches.length) {
      renderBirdMatches(quickMatches);
      birdFinderResult.textContent = "Sorting matching birds by this year's observations...";
    }

    const yearObservationCounts = await getBirdFinderYearObservationCounts(region.ebirdCode);
    if (requestId !== birdFinderRequestId) return;
    const matches = sortBirdFinderMatches(rawMatches, query, yearObservationCounts);
    if (!matches.length) {
      if (requestId !== birdFinderRequestId) return;
      birdFinderResult.classList.remove("is-searching");
      renderBirdMatches([]);
      birdFinderResult.textContent = "No matching bird names found.";
      if (birdFinderNearby) {
        birdFinderNearby.classList.remove("is-searching");
        birdFinderNearby.textContent = "No nearby sightings to show until a bird match is selected.";
      }
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
    activeRegionAllHotspots = [];
    activeHotspotCardsByLocId.clear();
    activeHotspotStatus = "No eBird region code is available for this county yet.";
    updateDashboard();
    return;
  }

  if (hotspotCache.has(regionCode)) {
    activeHotspotRegionCode = regionCode;
    activeRegionHotspots = hotspotCache.get(regionCode);
    activeRegionAllHotspots = hotspotListCache.get(regionCode) || activeRegionHotspots;
    activeHotspotCardsByLocId = activeCardsCacheByRegion.get(regionCode) || new Map();
    activeHotspotFilterComplete = true;
    activeHotspotStatus = `Loaded cached eBird hotspots for ${regionName}.`;
    updateDashboard();
    return;
  }

  activeHotspotRegionCode = "";
  activeRegionHotspots = [];
  activeRegionAllHotspots = [];
  activeHotspotCardsByLocId.clear();
  activeHotspotFilterComplete = false;
  activeHotspotStatus = `Loading eBird hotspots for ${regionName}...`;
  updateDashboard();

  try {
    const [hotspots, hotspotWindow] = await Promise.all([
      fetchEbirdJson(`ref/hotspot/${regionCode}?fmt=json`, EBIRD_API_TOKEN),
      fetchHotspotObservationWindow(regionCode),
    ]);
    const allHotspotCards = hotspots
      .map((hotspot, index) => ebirdHotspotToCard(hotspot, index, regionName))
      .filter((hotspot) => Number.isFinite(Number(hotspot.lat)) && Number.isFinite(Number(hotspot.lng)));
    hotspotListCache.set(regionCode, allHotspotCards);
    let selectedHotspotWindow = hotspotWindow;
    let recentObservations = selectedHotspotWindow.observations;
    const notableObservations = await fetchEbirdJson(
      `data/obs/${regionCode}/recent/notable?back=7&detail=full&maxResults=50`,
      EBIRD_API_TOKEN,
    );
    const autoSummary = summarizeEbirdObservations(recentObservations.slice(0, 200), notableObservations);
    activeRareRegionCode = regionCode;
    activeRareObservations = notableObservations;
    applyEbirdSignal(autoSummary);
    renderLocalMigrants(autoSummary.migrantSignals, regionName);
    renderNonMigrantSignals(autoSummary.nonMigrantSignals, regionName);
    renderRareSpecies(regionName);

    // Always fetch 7-day observations to ensure the search cache is fully populated
    let observations7Days = [];
    if (selectedHotspotWindow.statusDetail === "today") {
      try {
        observations7Days = await fetchEbirdJson(
          `data/obs/${regionCode}/recent?back=7&includeProvisional=true&maxResults=10000`,
          EBIRD_API_TOKEN,
        );
      } catch {
        observations7Days = [];
      }
    } else {
      observations7Days = recentObservations;
    }

    const hotspotById = new Map(hotspots.map((hotspot) => [hotspot.locId, hotspot]));
    const buildHotspotCards = (observations, label) => {
      const observationsByHotspot = new Map();

      observations.forEach((obs) => {
        if (!obs.locId) return;
        if (!observationsByHotspot.has(obs.locId)) observationsByHotspot.set(obs.locId, []);
        observationsByHotspot.get(obs.locId).push(obs);
      });

      return [...observationsByHotspot.entries()]
        .map(([locId, observations], index) => {
          const fallbackObservation = observations[0] || {};
          const hotspot = hotspotById.get(locId) || {
            locId,
            locName: fallbackObservation.locName || "eBird location",
            lat: fallbackObservation.lat,
            lng: fallbackObservation.lng,
          };
          const card = ebirdHotspotToCard(hotspot, index, regionName);
          card.recentSpeciesCount = new Set(
            observations.map((obs) => obs.speciesCode || obs.comName).filter(Boolean),
          ).size;
          const migrantSignals = extractMigrantSignals(observations, []);
          const localSignals = migrantSignals.length
            ? migrantSignals
            : extractNonMigrantSignals(observations, []);
          const reportedSignals = localSignals.length
            ? localSignals
            : extractReportedSpeciesSignals(observations);
          card.signalLabel = migrantSignals.length ? "Migrants reported" : "Species reported";
          card.recentMigrants = reportedSignals.map((species) => species.name).slice(0, 8);
          card.species = card.recentMigrants.slice(0, 4);
          card.observationWindowLabel = label;
          return card;
        });
    };

    // 1. Populate the search cache with the 7-day data
    const cards7Days = buildHotspotCards(observations7Days, "Previous 7 days");
    cards7Days.forEach((card) => {
      activeHotspotCardsByLocId.set(card.locId, card);
    });

    // 2. Build today's cards if we have today's window, and add them to the cache
    let cards = [];
    if (selectedHotspotWindow.statusDetail === "today") {
      const todayCards = buildHotspotCards(recentObservations, selectedHotspotWindow.label);
      todayCards.forEach((card) => {
        activeHotspotCardsByLocId.set(card.locId, card);
      });
      cards = todayCards
        .filter((card) => card.species.length || card.recentSpeciesCount > 0)
        .sort(
          (a, b) =>
            b.recentSpeciesCount - a.recentSpeciesCount ||
            b.recentMigrants.length - a.recentMigrants.length,
        )
        .slice(0, 12);
    }

    // 3. Fallback to 7-day cards if today has no cards or we are using the 7-day window
    if (!cards.length) {
      selectedHotspotWindow = {
        observations: observations7Days,
        label: "Previous 7 days",
        emptyMessage: selectedHotspotWindow.statusDetail === "today"
          ? "No recently active eBird locations were reported today, so hotspots are using the previous seven days."
          : "",
        statusDetail: "the previous 7 days",
      };
      cards = cards7Days
        .filter((card) => card.species.length || card.recentSpeciesCount > 0)
        .sort(
          (a, b) =>
            b.recentSpeciesCount - a.recentSpeciesCount ||
            b.recentMigrants.length - a.recentMigrants.length,
        )
        .slice(0, 12);
    }

    hotspotCache.set(regionCode, cards);
    activeCardsCacheByRegion.set(regionCode, new Map(activeHotspotCardsByLocId));
    activeHotspotRegionCode = regionCode;
    activeRegionHotspots = cards;
    activeRegionAllHotspots = allHotspotCards;
    activeHotspotFilterComplete = true;
    activeHotspotStatus = cards.length
      ? `${selectedHotspotWindow.emptyMessage ? `${selectedHotspotWindow.emptyMessage} ` : ""}Loaded recently active eBird locations for ${regionName} from ${selectedHotspotWindow.statusDetail}.`
      : `${selectedHotspotWindow.emptyMessage ? `${selectedHotspotWindow.emptyMessage} ` : ""}No eBird locations had recent species reported in ${regionName} in ${selectedHotspotWindow.statusDetail}.`;
  } catch (error) {
    activeHotspotRegionCode = "";
    activeRegionHotspots = [];
    activeRegionAllHotspots = [];
    activeHotspotCardsByLocId.clear();
    activeHotspotFilterComplete = false;
    activeHotspotStatus = `Could not load eBird hotspots for ${regionName} (${error.message}); showing habitat-based fallback.`;
  }

  updateDashboard();
}

async function refreshSelectedCountyData() {
  clearHotspotSearch();
  const region = getRegion();
  const regionName = region.state ? `${region.name}, ${region.state}` : region.name;
  resetBirdcastData();
  resetNonMigrantSignals(regionName);
  refreshScoredPanels();
  await refreshHotspotsForSelectedRegion();
  await refreshEbirdReports();
  await refreshBirdcastCountyData();
  if (birdSearchInput?.value.trim()) await updateBirdFinderMatches();
}

function summarizeEbirdObservations(recent, notable) {
  latestObservationBySpecies.clear();
  speciesScientificNameByName.clear();
  [...recent, ...notable].forEach((obs) => {
    const name = String(obs.comName || "").trim();
    if (!name) return;
    if (obs.sciName) speciesScientificNameByName.set(name, String(obs.sciName).trim());
    if (obs.speciesCode) speciesCodeByName.set(name, obs.speciesCode);
    if (latestObservationBySpecies.has(name)) return;
    latestObservationBySpecies.set(name, obs);
  });
  const indicatorSightings = recent.filter((obs) =>
    indicatorSpeciesSet.has(String(obs.comName || "").toLowerCase()),
  );
  const migrantSignals = extractMigrantSignals(recent, notable);
  const nonMigrantSignals = extractNonMigrantSignals(recent, notable);
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
    localMigrants: migrantSignals,
    migrantSignals,
    nonMigrantSignals,
  };
}

function speciesObservationKey(obs) {
  return String(obs.speciesCode || obs.comName || "").trim().toLowerCase();
}

function isMigrantSignalSpecies(name) {
  const normalized = String(name || "").toLowerCase();
  const isKnownIndicator = indicatorSpeciesSet.has(normalized);
  const looksLikeMigrant = migrantKeywordPattern.test(name);
  const isExcludedResident = residentExclusions.has(normalized);
  return (isKnownIndicator || looksLikeMigrant) && !isExcludedResident;
}

function classifySpeciesObservation(obs, notableSpeciesKeys = new Set()) {
  const name = String(obs.comName || "").trim();
  if (!name) return "";
  if (notableSpeciesKeys.has(speciesObservationKey(obs))) return "notableSpecies";
  return isMigrantSignalSpecies(name) ? "migrantSignals" : "nonMigrantSignals";
}

function countSignalSpecies(observations, shouldInclude) {
  const counts = new Map();

  observations.forEach((obs) => {
    const name = String(obs.comName || "").trim();
    if (!name) return;
    if (obs.speciesCode) speciesCodeByName.set(name, obs.speciesCode);
    if (shouldInclude(obs)) {
      const observationCount = Number(obs.howMany);
      counts.set(name, (counts.get(name) || 0) + (Number.isFinite(observationCount) ? observationCount : 1));
    }
  });

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 18)
    .map(([name, count]) => ({ name, count }));
}

function extractMigrantSignals(recent, notable) {
  return countSignalSpecies([...notable, ...recent], (obs) =>
    classifySpeciesObservation(obs) === "migrantSignals",
  );
}

function extractNonMigrantSignals(recent, notable) {
  const notableSpeciesKeys = new Set(notable.map(speciesObservationKey).filter(Boolean));
  return countSignalSpecies(recent, (obs) =>
    classifySpeciesObservation(obs, notableSpeciesKeys) === "nonMigrantSignals",
  );
}

function extractReportedSpeciesSignals(observations) {
  return countSignalSpecies(observations, () => true);
}

async function renderSignalSpeciesList(list, signalSpecies) {
  list.classList.add("local-migrant-photo-list");
  const rows = await Promise.all(
    signalSpecies.map(async (species) => {
      const suffix = species.count > 1 ? ` (${species.count})` : "";
      return localSpeciesPhotoRow(species.name, suffix);
    }),
  );
  list.innerHTML = rows.join("");
}

async function renderLocalMigrants(migrantSignals, regionName) {
  const note = document.querySelector("#speciesSourceNote");
  const list = document.querySelector("#speciesList");

  if (!migrantSignals.length) {
    renderSpecies();
    note.textContent = `No migrant signal species were found in the latest eBird pull for ${regionName}; showing fallback watch list.`;
    return;
  }

  await renderSignalSpeciesList(list, migrantSignals);
  note.textContent = `Updated from recent eBird observations for ${regionName}. Counts reflect records in the latest pull, not a full population estimate.`;
}

async function renderNonMigrantSignals(nonMigrantSignals, regionName) {
  const note = document.querySelector("#nonMigrantSourceNote");
  const list = document.querySelector("#nonMigrantList");
  if (!note || !list) return;

  if (!nonMigrantSignals.length) {
    list.innerHTML = "";
    note.textContent = `No likely resident or non-migrant species were found in the latest eBird pull for ${regionName}.`;
    return;
  }

  await renderSignalSpeciesList(list, nonMigrantSignals);
  note.textContent = `Recent observations of likely resident or non-migrant species from the latest eBird pull for ${regionName}.`;
}

function resetNonMigrantSignals(regionName) {
  const note = document.querySelector("#nonMigrantSourceNote");
  const list = document.querySelector("#nonMigrantList");
  if (!note || !list) return;
  list.classList.add("local-migrant-photo-list");
  list.innerHTML = "";
  note.textContent = `Pull eBird reports to load likely resident or non-migrant species for ${regionName}.`;
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

function speciesInitials(name) {
  return name
    .split(/\s+/)
    .filter((word) => word && !/^(and|of|the|x)$/i.test(word))
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() || "")
    .join("");
}

async function localSpeciesPhotoRow(name, suffix = "") {
  const art = speciesArt(name);
  const code = speciesCodeByName.get(name);
  const speciesUrl = code
    ? `https://ebird.org/species/${code}`
    : `https://ebird.org/explore?search=${encodeURIComponent(name)}`;
  const observationUrl = recentObservationUrl(name) || speciesUrl;
  const photoUrl = await speciesPhotoUrl(name);
  const artMarkup = photoUrl
    ? `<img src="${photoUrl}" alt="" />`
    : `<span class="species-photo-fallback" aria-hidden="true">${speciesInitials(name)}</span>`;
  const compactClass = `${name}${suffix}`.length <= 34 ? " is-compact" : "";

  return `
    <div class="rare-species-row local-migrant-row${compactClass}">
      <a
        class="${art.className} rare-species-art"
        style="${art.style}"
        href="${observationUrl}"
        target="_blank"
        rel="noreferrer"
        aria-label="Open latest eBird location for ${name}"
        title="Open latest sighting location"
      >${artMarkup}</a>
      <a
        class="rare-species-name"
        href="${speciesUrl}"
        target="_blank"
        rel="noreferrer"
        title="Open species page"
      >${name}${suffix}</a>
    </div>
  `;
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
      const artMarkup = photoUrl
        ? `<img src="${photoUrl}" alt="" />`
        : `<span class="species-photo-fallback" aria-hidden="true">${speciesInitials(shownName)}</span>`;
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
    resetNonMigrantSignals(region.name);
    return;
  }

  if (fields.refreshEbird) fields.refreshEbird.disabled = true;
  setAutoFillHint(ebirdAutoFillHint, "eBird", true);
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
    renderLocalMigrants(summary.migrantSignals, fullRegionName);
    renderNonMigrantSignals(summary.nonMigrantSignals, fullRegionName);
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
    setAutoFillHint(ebirdAutoFillHint, "eBird", true);
  } catch {
    setAutoFillHint(ebirdAutoFillHint, "eBird", false);
    resetNonMigrantSignals(region.state ? `${region.name}, ${region.state}` : region.name);
    setEbirdStatus(
      "Could not pull eBird from this local page. Check the token and county code, or use the eBird region link and set the migrant signal manually.",
    );
  } finally {
    if (fields.refreshEbird) fields.refreshEbird.disabled = false;
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
        email: feedbackEmail?.value.trim() || "",
        name: feedbackName?.value.trim() || "Anonymous",
        message,
        region: `${getRegion().name}, ${getSelectedState().name}`,
        pageUrl: window.location.href,
      }),
    });

    if (!response.ok) {
      let errorMessage = "Feedback could not be sent yet.";
      try {
        const payload = await response.json();
        if (payload?.error) errorMessage = payload.error;
      } catch {
        // Keep the friendly fallback message.
      }
      throw new Error(errorMessage);
    }

    feedbackForm.reset();
    feedbackStatus.textContent = "Thank you. Your feedback was sent.";
  } catch (error) {
    feedbackStatus.textContent = error.message || "Feedback could not be sent yet.";
  } finally {
    feedbackSubmit.disabled = false;
  }
}

function refreshScoredPanels() {
  syncSignalDisplays();
  const signals = readSignals();
  syncBirdcastValueTone(signals.birdsCrossed, birdsCrossedDisplay);
  const result = scoreSignals(signals);
  renderRisk(result);
  renderInsights(signals, result);
  renderWindMap(signals);
  renderHotspots(result);
}

function updateDashboard() {
  renderRegion();
  refreshScoredPanels();
}

function handlePreferredHotspotClick(event) {
  const button = event.target.closest(".preferred-hotspot-button");
  if (!button) return;

  const isPreferred = button.getAttribute("aria-pressed") !== "true";
  setPreferredHotspot(button.dataset.regionCode, button.dataset.hotspotKey, isPreferred);
  updatePreferredHotspotButton(button, isPreferred);
  refreshScoredPanels();
}

fields.stateSelect.addEventListener("change", loadCountiesForSelectedState);
fields.regionSelect.addEventListener("change", refreshSelectedCountyData);
fields.useCurrentLocation?.addEventListener("click", useCurrentLocation);
document.querySelector("#hotspotGrid")?.addEventListener("click", handlePreferredHotspotClick);
hotspotSearchGrid?.addEventListener("click", handlePreferredHotspotClick);
hotspotLocationSearch?.addEventListener("click", runHotspotCitySearch);
hotspotUseCurrentLocation?.addEventListener("click", runHotspotCurrentLocationSearch);
hotspotClearSearch?.addEventListener("click", clearHotspotSearch);
hotspotShowMore?.addEventListener("click", showMoreHotspotSearchResults);
hotspotCitySelect?.addEventListener("change", () => {
  const city = hotspotCitySelect.value;
  if (!city) return;
  if (hotspotLocationInput) hotspotLocationInput.value = city;
  runHotspotCitySearch();
});
hotspotLocationInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    runHotspotCitySearch();
  }
});
fields.birdsCrossed.addEventListener("input", syncBirdcastDisplaysFromInputs);
fields.birdsInFlight.addEventListener("input", syncBirdcastDisplaysFromInputs);
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

function setupTabNavigation() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      tabButtons.forEach((b) => {
        if (b === btn) {
          b.classList.add("active");
          b.setAttribute("aria-selected", "true");
        } else {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        }
      });

      tabPanels.forEach((panel) => {
        if (panel.id === `tab-${targetTab}`) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });

      // Smart smooth scroll back to tab navigation bar if scrolled past it
      const tabsContainer = document.querySelector(".tabs-container");
      if (tabsContainer) {
        const rect = tabsContainer.getBoundingClientRect();
        if (rect.top < 0) {
          window.scrollTo({
            top: window.scrollY + rect.top - 10,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

setupTabNavigation();
