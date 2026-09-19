self.addEventListener('install', (e) => {
    console.log('Emosha Shopping PWA Installed');
});

self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request));
});
