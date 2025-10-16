# Deploy Guide (GitHub Pages / Netlify / Vercel)

## Option A — GitHub Pages (einfach & kostenlos)
1. Neues Repo bei GitHub anlegen (z. B. `gladiator-tracker`).
2. Inhalt dieses Ordners hochladen (einschl. `.github/`, `.nojekyll`).
3. **Settings → Pages** → `Build and deployment`: Source `GitHub Actions`. Workflow ist schon drin.
4. Warten, bis Action fertig ✅ → Link öffnen.
5. iPhone: Safari → Teilen → **Zum Home-Bildschirm**.

## Option B — Netlify (Drag & Drop)
1. netlify.com → New site from Git → GitHub Repo wählen.
2. Build config: **keine** nötig (reines Static). Publish dir: `.`
3. Nach Deploy iPhone: Safari → **Zum Home-Bildschirm**.
   - Datei `netlify.toml` ist schon vorbereitet.

## Option C — Vercel (Import GitHub)
1. vercel.com → New Project → GitHub Repo importieren.
2. Framework: **Other**. Build command: leer. Output: `.`
3. `vercel.json` ist enthalten. Danach iPhone installieren.

### Eigene Domain (optional)
- Datei `CNAME` ändern (z. B. `app.angelomatimbe.de`) und DNS CNAME auf GitHub Pages/Netlify/Vercel zeigen lassen.

---
Hinweis: Service Worker funktioniert nur über **HTTPS** (nicht über `file://`).