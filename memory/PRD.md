# Tourlane.de Homepage Clone – PRD

## Original problem statement
Migrate/clone https://www.tourlane.de/ into Emergent as a pixel-faithful, fully responsive recreation. Scope (approved): homepage only, English copy acceptable, reuse Tourlane CDN assets, frontend-only mock first (backend migration later). Acceptance bar: designer/developer visual approval.

## Architecture
- React (CRA) + Tailwind. Backend/Mongo untouched (template only).
- `src/mock.js` – all homepage copy + asset URLs (single place to swap for API data later).
- `src/destinationsData.js` – region tabs + country cards (mirrors source data exactly).
- `src/components/*` – one component per section; `Carousel.jsx`, `SearchBar.jsx`, `TrustLine.jsx`, `Logo.jsx` shared.
- `public/*.svg` – original Tourlane SVG assets (logo path, feature icons, trust badges, Trustpilot wordmark).

## Design tokens (extracted from tourlane.de CSS)
- Fonts: Roboto Serif (display) / Roboto Flex (body) via Google Fonts.
- Colors: primary #006D44, primary-fixed-variant #005232, secondary-container #D0E8D6, surface #FBF9F1, surface-low #F6F4EB, surface-container #F0EEE6, surface-highest #E4E3DB, surface-variant #DCE5DC, on-surface #1B1C17, on-surface-variant #404942, outline #717972, outline-variant #C0C9C0, Trustpilot #00B67A.
- Type scale utilities `.t-display-*`, `.t-headline-*`, `.t-title-*`, `.t-body-*`, `.t-label-*` in `index.css`.
- Breakpoints (Tourlane's): sm 600, md 905, lg 1280, xl 1440. Container `.tl-container` = 100% → 857 → 880 → 1128px; `.tl-wide` = max 1440.

## Implemented (2026-06)
- v1 (previous session): first approximation clone (Lora/Inter, wrong palette, missing sections).
- v2 (this session) – full rebuild to source spec:
  - Header (banner, real logo SVG, nav dividers, outlined Login, mobile drawer), non-sticky like source
  - Hero (responsive `<picture>` collage header-xs…xl with source heights/min-widths, search pill, mobile placeholder "Where to?")
  - Trustpilot bar; Features (source line-art SVG icons, mobile icon-left layout)
  - NEW "On the road with Tourlane" ambassadors card + slider
  - Comparison table (dark header, alternating cream/sage rows)
  - NEW "Unforgettable Tourlane moments" carousel (10 cards, avatar stack)
  - Steps (3 cards); Trip showcase (underline tabs, 5 trips, info panel + 5-tile mosaic with #tags)
  - Adventure band (overflowing collage images + search)
  - NEW Experts carousel (7 experts)
  - Testimonials (3-up carousel, Trustpilot stars, avatars/initials)
  - Destinations (outlined pill tabs, bordered image cards, 10 regions)
  - Newsletter band (hummingbird image, mail pill, 3 icon bullets)
  - Footer (light, 3 columns, trust badges, country selector + legal bar)
- Tested: testing agent iteration_1 – 100% pass at 390/905/1440, 0 broken images, 0 console errors.

## Backlog
- P1: Swap English copy for German source copy if exact wording is required (all in mock.js).
- P1: Backend migration – lead/search enquiry persistence, newsletter signups (+ email provider), destinations API. Create `/app/contracts.md` first.
- P2: Nav dropdown menus (Destinations / Trip types / Activities), destination detail pages, mobile Trustpilot bar variant.
- P2: Replace hotlinked Tourlane CDN assets with owned storage before production.
