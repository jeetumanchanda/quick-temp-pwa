self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('qt-v1').then(cache => cache.addAll([
      './',
      './index.html',
      './manifest.json',
      './icons/icon-192.png',
      './icons/icon-512.png'
    ]))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== 'qt-v1').map(k => caches.delete(k))))
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  // Network first for API calls, cache first for others
  if (req.url.includes('api.openweathermap.org')) {
    e.respondWith(
      fetch(req).catch(() => caches.match(req))
    );
  } else {
    e.respondWith(
      caches.match(req).then(cached => cached || fetch(req))
    );
  }
});
