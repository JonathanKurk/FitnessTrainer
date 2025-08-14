const CACHE_NAME = 'fitness-trainer-pro-v1';
// Alle Dateien, die für den Offline-Betrieb benötigt werden
const URLS_TO_CACHE = [
    '/',
    'index.html',
    'style.css',
    'script.js',
    'workouts.js',
    'manifest.json',
    'icons/icon-192x192.png',
    'icons/icon-512x512.png',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
    'https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2' // Beachten: Dies ist ein Beispiel für die Schriftart-Datei. Die URL kann sich ändern.
];

// 1. Installation: Öffnet den Cache und fügt die Dateien hinzu
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                // Google Fonts sind schwierig zu cachen, aber wir versuchen es.
                // Es ist sicherer, die Schriftart-Dateien lokal zu hosten.
                // Für den Moment versuchen wir, die CSS-Datei zu cachen, die die woff2-Dateien importiert.
                return cache.addAll(URLS_TO_CACHE);
            })
    );
});

// 2. Fetch: Fängt Anfragen ab und liefert sie aus dem Cache, wenn verfügbar
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                // Ansonsten vom Netzwerk holen
                return fetch(event.request);
            })
    );
});

// 3. Activate: Löscht alte Caches, wenn eine neue Version des Service Workers aktiviert wird
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
