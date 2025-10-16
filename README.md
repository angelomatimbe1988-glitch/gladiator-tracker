# Gladiator 4‑Wochen Tracker – PWA (iOS ready)

This folder contains a ready-to-deploy Progressive Web App:
- `index.html` (patched with iOS meta tags)
- `manifest.json`
- `sw.js` (service worker)
- `icons/192.png`, `icons/512.png` (maskable)

## Quick Deploy (GitHub Pages)
1. Create a new GitHub repo and upload these files (keep the folder structure).
2. In the repo settings → *Pages* → Source: **Deploy from a branch**, Branch: **main**, Folder: **/ (root)**.
3. Open the published URL in **Safari** on your iPhone.
4. In Safari: Share → **Add to Home Screen**.
   - Service worker and offline mode only work over HTTPS — not from the Files app (file://).

## iOS specifics
- On iPhone, a PWA must be served via **HTTPS** to register the service worker.
- Opening the file locally from the Files app will **not** register the service worker.
- After installation, open the app from the Home Screen at least **once** while online so initial caching completes.

## Apple Shortcuts (URL logging)
Your app supports logging via URL parameters, e.g.:
- Macros: `?log=macro&d=YYYY-MM-DD&kcal=2300&p=160&c=200&f=65`
- Measures: `?log=measure&w=1&weight=68.4&bf=23&muscle=50&deadhang=60&pullups=8&updowns=12&shuttle=38.2`
- Workout: `?log=workout&w=1&day=Mo&done=1&note=Watch%20Training%20fertig`

**Shortcut example:**
1. Action: *Get current date* → format to `YYYY-MM-DD`.
2. Action: *Text* → `https://YOUR-DOMAIN/index.html?log=macro&d=${DATE}&kcal=2300&p=160&c=200&f=65`
3. Action: *Open URLs* (opens Safari to that URL, which writes into the app).

> Note: On iOS, opening via Shortcut may run in Safari context. For the most reliable behavior, either use the app in Safari *or* do all logging from the installed app by tapping a **Logging** bookmark that points to the same URL (you can save a Home Screen icon pointing directly to the macro URL template).

## Customization
- Update icons inside `/icons` to your own artwork (1024x1024 downscaled to 512/192 is ideal, use “purpose: maskable” safe area).
- Edit `manifest.json` (name, colors) and `sw.js` (cache list/version) as needed.

---
Built for Angelo 🏛️ – good luck at Gladiators!