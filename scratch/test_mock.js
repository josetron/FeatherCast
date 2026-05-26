const fs = require('fs');
const path = require('path');

// Mock browser globals
global.window = {
  location: {
    protocol: 'http:',
    host: 'localhost:4173'
  }
};
global.navigator = {};
global.AbortController = class {
  constructor() {
    this.signal = {};
  }
  abort() {}
};

// Helper to create mock element
function createMockElement(overrides = {}) {
  return {
    value: '',
    dataset: {},
    classList: {
      add() {},
      remove() {},
      toggle() {},
      contains() { return false; }
    },
    style: {
      removeProperty() {},
      setProperty() {}
    },
    addEventListener() {},
    setAttribute() {},
    innerHTML: '',
    disabled: false,
    selectedOptions: [],
    ...overrides
  };
}

// Mock DOM elements
const mockElements = {
  hotspotLocationInput: createMockElement({ value: 'Bastrop' }),
  hotspotCitySelect: createMockElement(),
  hotspotClearSearch: createMockElement(),
  hotspotSearchStatus: createMockElement(),
  hotspotSearchGrid: createMockElement(),
  hotspotShowMore: createMockElement(),
  stateSelect: createMockElement({ value: 'TX' }),
  regionSelect: createMockElement({
    value: 'US-TX-021', // Bastrop County (non-data-rich)
    selectedOptions: [
      createMockElement({
        value: 'US-TX-021',
        dataset: { name: 'Bastrop County' }
      })
    ]
  }),
  countyStatus: createMockElement(),
  ebirdLiveSummary: createMockElement(),
  ebirdSignal: createMockElement()
};

global.document = {
  querySelector(selector) {
    const key = selector.replace(/[#.]/g, '');
    if (mockElements[key]) return mockElements[key];
    return createMockElement();
  },
  querySelectorAll() {
    return [];
  }
};

// Mock fetch
global.fetch = async (url) => {
  // Silence initial census load
  if (url.includes('census.gov') || url.includes('wikipedia') || url.includes('open-meteo')) {
    return { ok: false };
  }
  console.log('FETCH CALLED WITH URL:', url);
  // Simulate backend geocoder
  if (url.includes('/api/hotspot-location')) {
    return {
      ok: true,
      json: async () => ({
        label: 'Bastrop, Bastrop County, Texas, 78602, United States',
        lat: 30.1105,
        lng: -97.3153,
        source: 'street'
      })
    };
  }
  if (url.includes('/api/location-region')) {
    return {
      ok: true,
      json: async () => ({
        countyName: 'Bastrop County',
        countyFips: '021',
        stateAbbr: 'TX',
        stateName: 'Texas',
        ebirdCode: 'US-TX-021'
      })
    };
  }
  if (url.includes('ref/hotspot')) {
    return {
      ok: true,
      json: async () => [
        {
          locId: 'L1',
          locName: 'Bastrop State Park',
          lat: 30.1105,
          lng: -97.3153
        }
      ]
    };
  }
  return { ok: false };
};

// Load app.js
const appJsPath = 'app.js';
const appJsContent = fs.readFileSync(appJsPath, 'utf8');

// We need to bypass immediate page load events or initializations that might throw
const modifiedContent = appJsContent
  .replace('const EBIRD_API_TOKEN =', 'global.EBIRD_API_TOKEN =')
  .replace('async function runHotspotCitySearch()', 'global.runHotspotCitySearch = async function()')
  .replace('function getRegion()', 'global.getRegion = function()')
  .replace('async function fetchCountyFromCoordinates', 'global.fetchCountyFromCoordinates = async function');

// Run the modified code
eval(modifiedContent);

// Test runHotspotCitySearch
async function test() {
  console.log('Starting test...');

  // Set values to Bastrop County after init
  mockElements.regionSelect.value = 'US-TX-021';
  mockElements.regionSelect.selectedOptions = [
    createMockElement({
      value: 'US-TX-021',
      dataset: { name: 'Bastrop County' }
    })
  ];

  console.log('Region:', global.getRegion());
  try {
    await global.runHotspotCitySearch();
    console.log('Search status text:', mockElements.hotspotSearchStatus.textContent);
    console.log('Search grid HTML:', mockElements.hotspotSearchGrid.innerHTML);
  } catch (err) {
    console.error('TEST FAILED WITH ERROR:', err);
  }
}

test();
