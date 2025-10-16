
const VERSION = 'gt-v2-' + (self.crypto?.randomUUID?.() || Date.now());
const APP_SHELL = ['./','./index.html','./manifest.json','./icons/192.png','./icons/512.png','./icons/1024.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET') return;
  const u=new URL(r.url);
  if(u.origin===location.origin){
    e.respondWith(caches.match(r).then(c=>c||fetch(r).then(resp=>{const cp=resp.clone(); caches.open(VERSION).then(C=>C.put(r,cp)); return resp}).catch(()=>r.mode==='navigate'?caches.match('./index.html'):Promise.reject())));
  }
});
