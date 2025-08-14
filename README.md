# Quick Temp (Dark PWA)
A super-minimal, dark-themed Progressive Web App that displays the current temperature using your phone's location.

## Features
- Big, car-friendly temperature display
- Dark theme (great at night)
- Uses phone GPS for location
- C/°F toggle
- Works offline with last known data (service worker + localStorage)
- PWA: Add to Home Screen on iOS/Android

## Setup
1. Get a free API key from OpenWeatherMap: https://openweathermap.org/api
2. Open `index.html` and replace `YOUR_OPENWEATHERMAP_API_KEY` with your key.
3. Host the folder on any static host (GitHub Pages, Netlify, Vercel).
4. Visit on your iPhone (Safari) → Share → Add to Home Screen.

## Optional: Auto-launch when you start the car
Use **Shortcuts** app on iOS:
- Automation → Create Personal Automation → **Bluetooth** → Choose your car's Bluetooth → Next.
- Add action: **Open URL** (your hosted Quick Temp URL), or **Open App** if installed as PWA.
- Save. Now it opens automatically when you connect to the car.

## Notes / Privacy
- Location is only used in your browser; no data is sent anywhere except to OpenWeatherMap for weather lookup.
- If you deny location, the app shows the last saved reading if available.

## Files
- `index.html` — App UI + logic
- `manifest.json` — PWA manifest
- `sw.js` — Service worker cache
- `icons/` — App icons

Enjoy!
