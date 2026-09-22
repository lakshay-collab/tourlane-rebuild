
## Footer update (2026-06)
- Added thin black divider (border-onsurface/Ink) separating Hi Tours logo+socials top row from footer link columns, matching tourlane.de.
- Restructured footer: logo+socials now a full-width top row above the divider.
- Mobile optimization: footer link columns (Hi Tours, Destinations, Hi Tours Care) are now collapsible accordions (collapsed by default, chevron toggle) so fewer links show on mobile. Desktop (sm+) keeps full expanded grid.
- File: frontend/src/components/Footer.jsx. Verified via true mobile emulation (390px) collapsed/expanded + desktop 1440px screenshots.

## 2026-06 — Homepage TripShowcase mobile photo strip
- Mobile (<md): replaced 5-tile mosaic (420px) with horizontal snap-scroll strip of same-size landscape photos (16:10, 82% width, #tag overlay). Card height reduced ~240px. Desktop mosaic unchanged. Self-tested via 390px screenshot; user acceptance pending.

## 2026-06 — Remove "Tourlane" wording, replace with "Hi Tours"
- Renamed TourlaneLogo -> HiToursLogo (EgyptIcons.jsx), now renders /hitours-logo.webp with alt="Hi Tours"; updated imports/usages in EgyptNav.jsx & EgyptFooter.jsx (aria-label "Tourlane" -> "Hi Tours").
- Service menu key 'Tourlane App' -> 'Hi Tours App'.
- Asia listing ctaHref changed from tourlane.de enquiry URL to '#'.
- Updated source-comment mentions of Tourlane in egyptListingData/egyptDetailData/egyptImages/egyptData/asiaListingData/index.css.
- Left CDN image URLs (imgix/ctfassets/tourlane-experts) and local avatar filenames (/egypt/tourlaner*.webp) untouched to avoid breaking images (non-visible).
- Note: EgyptListing/EgyptDetail/AsiaListing already rendered Hi Tours Header/Footer/Logo.
