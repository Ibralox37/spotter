---
tags: [vorix, spotter, spiel, projekt]
status: aktiv
date: 2026-10-06
---

# Vorix Spotter

Dein Fahrzeug-Sammelspiel: Du fotografierst echte Fahrzeuge. Die KI erkennt, was es ist, und du bekommst einen Sticker mit Seltenheit, Sternen und Wert. Die Idee stammt von der iPhone-App „Blindspot: Car Spotting Game". Deine Version hat aber einen eigenen Namen, dein eigenes Design (Vorix Blau wie bei [[Vorix (Timer Challenge)|Timer Challenge]]), und **VIP ist gratis**.

Gebaut am 06.10.2026 mit Claude. Das Label ist **VORIX – WE CREATE GAMES**, also dasselbe Studio wie bei Timer Challenge.

## Online stellen (Papa hat erlaubt ✅)

Papa hat am **06.10.2026 um 21:14 Uhr „ja" gesagt** (Kennung JC8): Das Spiel darf kostenlos auf GitHub Pages.

So lädst du es hoch, genauso wie bei Timer Challenge:

1. Geh auf **github.com** und melde dich mit deinem Konto **ibralox37** an.
2. Klick oben rechts auf **„+"** und dann auf **„New repository"**. Ein Repository ist ein Ordner auf GitHub.
3. Bei „Repository name" schreibst du **`spotter`** (klein geschrieben). „Public" bleibt angehakt, sonst kreuzt du nichts an. Dann klickst du unten auf **„Create repository"**.
4. Auf der neuen Seite klickst du auf den Link **„uploading an existing file"**.
5. Öffne den Ordner `01 Inbox\Vorix Spotter` im Windows-Explorer. Markiere **alle Dateien außer `Vorix Spotter.md`**, denn diese Notiz gehört nicht ins Internet. Zieh die Dateien ins Browserfenster. Es müssen genau diese 8 sein: `index.html`, `manifest.json`, `sw.js`, `vorix-logo-hell.png`, `favicon.png`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`.
6. Klick unten auf **„Commit changes"**.
7. Klick oben auf **„Settings"** und links auf **„Pages"**. Bei „Branch" wählst du **`main`** und daneben **`/ (root)`**. Dann klickst du auf **„Save"**.
8. Warte 1 bis 2 Minuten. Dann ist das Spiel hier: **https://ibralox37.github.io/spotter/**

**Aufs Handy holen:** Öffne die Adresse auf dem Handy.
- **iPhone:** In Safari auf „Teilen" tippen, dann auf „Zum Home-Bildschirm".
- **Android:** In Chrome oben auf ⋮ tippen, dann auf „App installieren".

Danach liegt Spotter mit eigenem Symbol auf deinem Startbildschirm und startet wie eine echte App.

**Später etwas ändern:** Die geänderte Datei bei GitHub im Repository `spotter` einfach neu hochladen. Die alte Datei wird dabei ersetzt. Ändert sich `index.html`, sollte in `sw.js` die Zahl bei `vorix-spotter-spiel-1` um eins höher werden. Das erledigt Claude, wenn er etwas ändert.

## So startest du es am PC (ohne Internet-Version)

1. Doppelklick auf `index.html` in diesem Ordner. Dann öffnet sich das Spiel im Browser (Chrome oder Edge).
2. Beim allerersten Start lädt die KI etwa 14 MB aus dem Internet.
3. Hat der PC keine Kamera, tippst du in der Kamera auf **🖼️ Testbild** und nimmst ein Foto vom Computer. Das ist nur zum Ausprobieren.

> [!warning] Ehrlich gesagt
> Getestet wurde über einen kleinen Test-Server auf dem PC, nicht per Doppelklick. Normalerweise klappt der Doppelklick genauso. Nur das Offline-Starten geht per Doppelklick nicht, das funktioniert erst in der Internet-Version.

## Was drin ist

- 📸 **Kamera mit Rahmen**. Auf dem Handy zählen nur Fotos aus der Kamera, keine Bilder aus der Galerie. So ist es auch beim Original.
- 🤖 **KI im Browser** (sie heißt MobileNet). Sie kennt 75 Fahrzeugarten in 8 Garagen: Autos, Motorräder, Flugzeuge, Boote, Züge, Arbeitsfahrzeuge, Wohnmobile und Sonstiges. Die Fotos verlassen nie das Gerät.
- 🏷️ **Marke auswählen**. Die Marke macht den Sticker seltener, aber höchstens 2 Stufen über der Fahrzeugart. Sonst wäre jeder Van mit „Bugatti" legendär.
- 💎 **6 Seltenheiten:** Häufig, Ungewöhnlich, Selten, Exotisch, Legendär und Kuriosität (für komische Sachen wie Panzer, Einkaufswagen oder Piratenschiff).
- ⭐ **Sterne** von 1 bis 5. Sie hängen davon ab, wie sicher die KI ist und wie scharf das Foto ist.
- 💰 **Wert und Vermögen.** Das ist Spielgeld, keine echten Preise.
- 🏆 **8 Ränge:** Rookie, Spotter, Jäger, Profi, Experte, Meister, Elite und Legende. Die Farben sind die Rangfarben aus Timer Challenge.
- 🎖️ **24 Aufnäher**, zum Beispiel „Blaulicht" (Polizei, Krankenwagen und Feuerwehr) oder „Hafen Duisburg".
- 🎯 **Die Jagd:** Jeden Freitag bis Sonntag sucht das Spiel ein bestimmtes Fahrzeug. Findest du es, zählt der Sticker doppelt.
- ⭐ **VIP gratis:** unbegrenzt spotten, die Jagd, eigener Name mit Bio und Profilbild, goldenes VIP-Zeichen.
- 💾 **Sicherung** speichern und wieder laden (unter Menü → Einstellungen).
- 📱 **Web-App:** Das Spiel lässt sich installieren, hat ein eigenes Symbol (ein Auto im Kamera-Rahmen) und startet nach dem ersten Besuch auch **ohne Internet**, sogar mit KI.
- 🙈 **Ein Foto zählt nicht, wenn** es unscharf oder zu dunkel ist, von einem Bildschirm kommt, zu nah dran ist oder gar kein Fahrzeug zeigt. Das kostet nie etwas, du versuchst es einfach nochmal.

## Was nicht geht, und warum

- **Das genaue Modell erkennen** (zum Beispiel „Porsche 911"): Das kann die kostenlose KI nicht. Eine KI im Internet könnte es, aber die kostet für jedes Foto Geld. Das geht also nur mit Papa.
- **Bestenliste, Freunde und Profile von anderen:** Dafür braucht man einen Server, also einen Computer im Internet, der alle Daten speichert. Das kommt vielleicht später, und nur mit Papa.
- **App Store:** Das läuft über Papa und kostet jedes Jahr Geld.
- **Die KI irrt sich manchmal.** Einen ICE hält sie zum Beispiel für einen „Personenzug". Dann tippst du ihren Vorschlag „Schnellzug" an. Motorräder hält sie oft für Mopeds. Bagger kennt sie kaum, Hubschrauber gar nicht. Das wurde mit Testfotos ausprobiert.

## Wo deine Sammlung gespeichert ist

Nur im Browser auf dem jeweiligen Gerät. Es gibt kein Konto. Das heißt:
- **PC und Handy haben getrennte Sammlungen.** Auch die Doppelklick-Version am PC und die Internet-Version sind getrennt.
- Löscht man die Browserdaten, ist die Sammlung weg. Deshalb ab und zu **Menü → Einstellungen → Sicherung speichern**.

## Wichtig, weil Timer Challenge unter derselben Adresse liegt

Beide Spiele liegen unter `ibralox37.github.io`, und dort teilen sie sich den Speicher im Browser.
- Alle Speicher-Namen von Spotter fangen mit `vorixSpotter` an, die Offline-Speicher mit `vorix-spotter-`. **Niemals `kronix…` benutzen.** Diese Namen gehören Timer Challenge, und ein falscher Wert in `kronixDesign` würde Timer Challenge abstürzen lassen. Mehr dazu in [[Was du im Code nicht ändern darfst]].
- Der Service Worker von Spotter (`sw.js`) **löscht nur seine eigenen Offline-Speicher**. Das ist das kleine Programm, das das Spiel offline startbar macht. Am 06.10.2026 wurde getestet: Ein Speicher namens `timer-challenge-v7` bleibt unangetastet, nur alte Spotter-Speicher werden aufgeräumt. Diese Regel in `sw.js` darf nicht verändert werden.
- Umgekehrt löscht der Service Worker von Timer Challenge beim Aktualisieren fremde Offline-Speicher, also auch den von Spotter. Das ist nicht schlimm: Deine Sticker liegen woanders und bleiben erhalten. Spotter lädt dann beim nächsten Besuch mit Internet seine Offline-Dateien einfach neu.
- Zum Namen: „Vorix" ist frei, das wurde am 13. bis 15.09.2026 geprüft. „Spotter" ist ein ganz normales Wort. Vor einem Start im App Store sollte das trotzdem noch einmal geprüft werden.

## Dateien

| Datei | Was es ist |
|---|---|
| `index.html` | das ganze Spiel |
| `manifest.json` | Steckbrief der Web-App (Name, Symbol, Farben) |
| `sw.js` | Service Worker: macht die App installierbar und offline startbar |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon.png` | das Spotter-Symbol in verschiedenen Größen |
| `vorix-logo-hell.png` | Kopie des Vorix-Logos aus `03 Vorix/Spiel` |
| `Vorix Spotter.md` | diese Notiz, **nicht hochladen** |

## Ideen für später

- Den Hintergrund aus dem Foto ausschneiden, damit es wie ein echter Sticker aussieht
- Eine bessere KI, die auch Marken erkennt und trotzdem kostenlos ist. Die wäre aber sehr groß (etwa 100 MB). Vorher prüfen, ob das auf dem Handy geht.
- Einen Link zu Spotter auf deine Startseite `ibralox37.github.io` setzen
- Bestenliste, wenn Papa einverstanden ist

## Stand

- **06.10.2026:** Version 1.0 fertig und mit Testfotos durchgespielt: Porsche, Bus, Flugzeug, Feuerwehr, ICE, Containerschiff, Wohnmobil, Roller, Straßenbahn. Katze, verwackeltes Foto und Nahaufnahme wurden richtig abgelehnt. Getestet wurden auch Jagd, Sicherung und Löschen.
- **06.10.2026, 21:14:** Papa hat erlaubt, dass das Spiel auf GitHub Pages kommt (Kennung JC8, Antwortdatei `.claude\erlaubnis\antwort\JC8.json`).
- **06.10.2026:** Daraus wurde eine Web-App: eigenes Symbol, `manifest.json` und `sw.js`. Getestet wurde, dass sie offline startet (mit KI) und den Speicher von Timer Challenge nicht anfasst.
- **Offen:** Ibo lädt die 8 Dateien ins neue Repository `spotter` hoch und schaltet GitHub Pages ein (siehe oben).
