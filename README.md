# ⚡ Momentum — Free Habit Tracker PWA

> Build lasting habits with streaks, a Pomodoro focus timer, and mood tracking. No account. Works offline.

**Live app → [teo-momentum-pwapp.netlify.app](https://teo-momentum-pwapp.netlify.app/)**

---

## Features

- 🔥 **Habit streaks** — daily check-offs with 7-day history heat map
- 🍅 **Pomodoro timer** — 25-min focus sessions with short/long breaks
- 😊 **Mood journal** — emoji-based mood logging with notes
- 🏆 **Achievements** — milestones and badges that unlock automatically
- 📊 **Stats dashboard** — completion rate, longest streak, session count
- 📱 **PWA** — install on home screen, works fully offline
- 📤 **Export** — download all data as CSV anytime
- 🔗 **Share** — one-tap share your streak
- 💜 **No account required** — data stored locally in your browser
- 🚫 **No ads** — ever

## Screenshots

| Habits | Focus | Mood | Stats |
|--------|-------|------|-------|
| Track daily habits with streaks | 25-min Pomodoro sessions | Log mood with emoji | View your progress |

## Stack

- Vanilla HTML/CSS/JavaScript — zero dependencies, zero build step
- Service Worker for offline caching
- Web App Manifest for PWA install
- Netlify for hosting + forms
- Google Analytics 4 for anonymous usage insights

## Deploy

Every push to `main` auto-deploys to [teo-momentum-pwapp.netlify.app](https://teo-momentum-pwapp.netlify.app/) via Netlify.

```
git clone https://github.com/teo96mario/momentum-app
# Open index.html in a browser — no build step needed
```

## File structure

```
momentum-app/
├── index.html        # Main app (single-file PWA)
├── landing.html      # SEO marketing landing page
├── manifest.json     # PWA manifest
├── sw.js             # Service worker (offline cache)
├── icon.svg          # App icon
├── og-image.png      # Social share image (1200×630)
├── sitemap.xml       # XML sitemap for search engines
├── robots.txt        # Crawl rules
└── netlify.toml      # Headers, redirects, cache rules
```

## License

MIT — fork it, build on it, make it yours.

---

*Made with ⚡ · [Live app](https://teo-momentum-pwapp.netlify.app/) · [Landing page](https://teo-momentum-pwapp.netlify.app/landing.html)*
