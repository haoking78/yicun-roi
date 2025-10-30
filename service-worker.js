
const CACHE_NAME = 'yicun-roi-pro-cache-v1';
const ASSETS = [
  './YICUN_ROI_Quick_App_Pro.html',
  './manifest.json',
  './yicun_icon_192.png',
  './yicun_icon_512.png'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
