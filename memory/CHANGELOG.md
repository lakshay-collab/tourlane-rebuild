
## Footer update (2026-06)
- Added thin black divider (border-onsurface/Ink) separating Hi Tours logo+socials top row from footer link columns, matching tourlane.de.
- Restructured footer: logo+socials now a full-width top row above the divider.
- Mobile optimization: footer link columns (Hi Tours, Destinations, Hi Tours Care) are now collapsible accordions (collapsed by default, chevron toggle) so fewer links show on mobile. Desktop (sm+) keeps full expanded grid.
- File: frontend/src/components/Footer.jsx. Verified via true mobile emulation (390px) collapsed/expanded + desktop 1440px screenshots.

## 2026-06 — Homepage TripShowcase mobile photo strip
- Mobile (<md): replaced 5-tile mosaic (420px) with horizontal snap-scroll strip of same-size landscape photos (16:10, 82% width, #tag overlay). Card height reduced ~240px. Desktop mosaic unchanged. Self-tested via 390px screenshot; user acceptance pending.
