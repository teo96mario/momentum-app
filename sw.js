const CACHE = 'momentum-v2';
const ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fresh = fetch(e.request).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});

// Scheduled notification check
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SCHEDULE_NOTIFY') {
    const { title, body, delay } = e.data;
    setTimeout(() => {
      self.registration.showNotification(title, {
        body,
        icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%237c5cfc'/><text y='46' x='32' text-anchor='middle' font-size='36'>⚡</text></svg>",
        badge: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%237c5cfc'/><text y='46' x='32' text-anchor='middle' font-size='36'>⚡</text></svg>",
        vibrate: [100, 50, 100],
        tag: 'momentum-reminder',
        renotify: true,
        actions: [
          { action: 'open', title: '✅ Check habits' },
          { action: 'dismiss', title: 'Later' }
        ]
      });
    }, delay);
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  if (e.action !== 'dismiss') {
    e.waitUntil(clients.openWindow('/'));
  }
});
