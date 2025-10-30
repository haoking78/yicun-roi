
  const CACHE_NAME = 'yicun-roi-v5.1';
  const CORE = [
    './',
    './YICUN_ROI_Pro_v5_1.html',
    './manifest.json?v=5.1',
    './yicun_icon_192.png?v=5',
    './yicun_icon_512.png?v=5'
  ];
  self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(CORE)).catch(()=>null));
  });
  self.addEventListener('activate', e => {
    e.waitUntil(
      caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null)))
    );
    self.clients.claim();
  });
  self.addEventListener('fetch', e => {
    const url = new URL(e.request.url);
    if(url.origin === location.origin){
      e.respondWith(
        caches.match(e.request).then(r => r || fetch(e.request).then(res=>{
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c=>c.put(e.request, copy));
          return res;
        }).catch(()=>r))
      );
    }
  });
