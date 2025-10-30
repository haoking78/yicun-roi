
const CACHE_NAME = 'yicun-roi-v3.3';
const CORE_ASSETS = [
  './',
  './YICUN_ROI_Quick_App_Pro_PLUS_ChannelCharts_v3_3.html',
  './manifest.json?v=3.3',
  './yicun_icon_192.png?v=3',
  './yicun_icon_512.png?v=3'
];
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).catch(()=>null));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k!==CACHE_NAME ? caches.delete(k) : null)))
  );
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then(resp => resp || fetch(e.request).then(r => {
        const copy = r.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, copy));
        return r;
      }).catch(()=>resp))
    );
  }
});
