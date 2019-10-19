const cacheName = "cache-v1";
const precacheResources = [
  "index.html",
  "main.css",
  "assets/bomb.png",
  "assets/dude.png",
  "assets/fullscreen.png",
  "assets/platform.png",
  "assets/sky.png",
  "assets/star.png",
  "js/cena1.js",
  "js/cena2.js",
  "js/index.js"
];

self.addEventListener("install", event => {
  console.log("Service worker install event!");
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(precacheResources);
    })
  );
});

self.addEventListener("activate", event => {
  console.log("Service worker activate event!");
});

self.addEventListener("fetch", event => {
  console.log("Fetch intercepted for:", event.request.url);
  event.respondWith(
    caches
      .open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
