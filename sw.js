// Simple PWA service worker for Angelo's Gladiator Tracker
const CACHE_NAME = 'gladiator-v1-' + (self.crypto?.randomUUID?.() || Date.now());
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/192.png',
  './icons/512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => !k.startsWith(CACHE_NAME)).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

// Cache-first for same-origin GET requests; network-only for others
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== 'GET') return;
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(resp => {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy));
          return resp;
        }).catch(() => caches.match('./index.html'));
      })
    );
  }
});