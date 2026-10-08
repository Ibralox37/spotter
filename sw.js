/* =====================================================================
   Vorix Spotter – Service Worker
   Ein Service Worker ist ein kleines Programm im Browser. Er macht das
   Spiel installierbar und sorgt dafür, dass es auch ohne Internet startet.

   WICHTIG – nicht ändern:
   Timer Challenge liegt unter derselben Adresse (ibralox37.github.io).
   Dieser Service Worker löscht deshalb NUR seine eigenen Speicher
   (Name beginnt mit "vorix-spotter-"). Fremde Speicher werden nie angefasst.
   ===================================================================== */

const SPIEL = 'vorix-spotter-spiel-6';   // bei jeder neuen Version die Zahl erhöhen (6 = Start-Fenster Konto/Gast, 08.10.2026)
const KI = 'vorix-spotter-ki-1';         // die KI-Dateien (MobileNet, Bibliotheken), nur bei KI-Wechsel erhöhen
const DATEIEN = ['./', './index.html', './manifest.json', './vorix-logo-hell.png',
  './favicon.png', './icon-192.png', './icon-512.png', './apple-touch-icon.png', './profi-ki.js'];
// Hinweis: Das Modell der Profi-KI (huggingface.co) speichert die Bibliothek selbst im Speicher „transformers-cache".

// Diese Server liefern die KI (Bibliothek und Modell) und die Schriftarten.
// Was von dort kommt, wird einmal gespeichert.
const FREMDE_SERVER = ['cdn.jsdelivr.net', 'tfhub.dev', 'www.kaggle.com', 'kaggle.com', 'storage.googleapis.com',
  'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', ereignis => {
  ereignis.waitUntil(caches.open(SPIEL).then(c => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', ereignis => {
  ereignis.waitUntil(
    caches.keys()
      .then(namen => Promise.all(namen
        .filter(n => n.startsWith('vorix-spotter-') && n !== SPIEL && n !== KI)   // nur eigene alte Speicher
        .map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', ereignis => {
  const anfrage = ereignis.request;
  if (anfrage.method !== 'GET') return;
  const url = new URL(anfrage.url);

  // Eigene Dateien: zuerst aus dem Internet (damit Updates sofort da sind), ohne Internet aus dem Speicher
  if (url.origin === self.location.origin) {
    ereignis.respondWith(
      fetch(anfrage)
        .then(antwort => {
          if (antwort.ok) { const kopie = antwort.clone(); caches.open(SPIEL).then(c => c.put(anfrage, kopie)); }
          return antwort;
        })
        .catch(() => caches.match(anfrage).then(t => t || caches.match('./index.html')))
    );
    return;
  }

  // KI-Dateien und Schriften: zuerst aus dem Speicher, sonst einmal laden und merken. So geht die KI auch offline.
  if (FREMDE_SERVER.includes(url.hostname)) {
    ereignis.respondWith(
      caches.open(KI).then(c => c.match(anfrage).then(treffer => treffer || fetch(anfrage).then(antwort => {
        if (antwort.ok) c.put(anfrage, antwort.clone());
        return antwort;
      })))
    );
  }
  // Alles andere läuft ganz normal über das Internet.
});
