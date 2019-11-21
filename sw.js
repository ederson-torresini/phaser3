const version = "1.1.0";
const cacheName = "phaser3";
const precacheResources = [
  "./",
  "./main.css",
  "./assets/bomb.png",
  "./assets/dude.png",
  "./assets/fullscreen.png",
  "./assets/platform.png",
  "./assets/sky.png",
  "./assets/star.png",
  "./assets/esquerda.png",
  "./assets/direita.png",
  "./assets/cima.png",
  "./assets/baixo.png",
  "./assets/logo/128.png",
  "./assets/logo/192.png",
  "./assets/logo/256.png",
  "./assets/logo/384.png",
  "./assets/logo/512.png",
  "./js/cena1.js",
  "./js/cena2.js",
  "./js/index.js",
  "./js/phaser.min.js",
  "./socket.io/socket.io.js"
];

self.addEventListener("install", event => {
  console.log("Service worker install event!");
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(precacheResources).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("activate", event => {
  console.log("Service worker activate event!");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  console.log("Fetch intercepted for: ", event.request.url);
  event.respondWith(
    caches
      .open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
