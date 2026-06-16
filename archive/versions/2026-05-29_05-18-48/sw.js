const CACHE_NAME = "bird-fallout-v1";
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/current-signal-bg.jpg",
  "./assets/radar-monitor-bg.jpg",
  "./assets/weather-stop-signs-bg.jpg",
  "./assets/ground-spikes-bg.jpg",
  "./assets/field-cues-bg.jpg",
  "./assets/hill-country-birdscape.svg",
  "./assets/Left birds illustration.png",
  "./assets/Right birds illustration.png"
];

// Install Event - cache the static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching static assets");
      return cache.addAll(STATIC_ASSETS).catch(err => {
        console.warn("Could not cache some assets during install:", err);
      });
    })
  );
  self.skipWaiting();
});

// Activate Event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - network-first for static assets, bypass cache for APIs
self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  // Direct network requests for API routes
  if (requestUrl.pathname.includes("/api/")) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Network first, falling back to cache
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse.status === 200 && event.request.method === "GET") {
          const cacheCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, cacheCopy);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
