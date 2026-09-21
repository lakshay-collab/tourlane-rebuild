# Tourlane.de Homepage Clone – PRD

## Original problem statement
Migrate/clone https://www.tourlane.de/ into Emergent as a pixel-faithful, fully responsive recreation. Scope (approved): homepage only, English copy acceptable, reuse Tourlane CDN assets, frontend-only mock first (backend migration later). Acceptance bar: designer/developer visual approval.

## Architecture
- React (CRA) + Tailwind. Backend/Mongo untouched (template only).
- `src/mock.js` – all homepage copy + asset URLs (single place to swap for API data later).
- `src/destinationsData.js` – region tabs + country cards (mirrors source data exactly).
- `src/components/*` – one component per section; `Carousel.jsx`, `SearchBar.jsx`, `TrustLine.jsx`, `Logo.jsx` shared.
- `public/*.svg` – original Tourlane SVG assets (logo path, feature icons, trust badges, Trustpilot wordmark).

## Brand re-skin (Hi Tours brand kit, 2026-06)
- Layout/backgrounds unchanged (cream surfaces kept per user). Only brand colors, fonts, logos swapped.
- Colors: primary Ember #E75E26 (hover #C84D1B), Amber #FB7F26, Peach #F4B49A (primary-container), Blush #FADDD1 (secondary-container: trust bar, step circles, arrows), Sand #FBEADB (surface-variant: table rows, active pill), Ink #002131 (text, banner, photo scrims), Harbor #174358 (secondary text, table header).
- Fonts: Bricolage Grotesque (display, weight 500), Inter (body), Instrument Sans (labels/buttons/tags).
- Logos: /public/hitours-logo.webp (header + footer), hitours-logo-white.webp (for dark use), Logo.jsx renders <img>.
- 2026-06 update: blue-first palette (primary Harbor #174358, hover Deep Harbor #113141, Sky #E0F7FF tints, Ink table header); orange Ember kept only as small accents (search pin, active trip-tab underline, newsletter icons). Hero headline: 'Discover and book customized honeymoons and holidays' (2 lines at desktop, verified 1440/1280/905; 4 lines on 390 mobile).
- 2026-06 update 2: light blues removed. Tints now Blush #FADDD1 (trust bar, arrows, active pill), Peach hover, Sand #FBEADB (table rows). Brand gradients in use: Deep Water (top banner, comparison header), Sunset Run (search 'Plan for free' + newsletter CTA buttons, hover slides gradient), Sunset line (active trip tab), Dawn Haze (step number circles). Card headlines (t-headline-*) now Bricolage Grotesque 600. Hero: 'Exquisitely crafted luxury / honeymoons and holidays' (forced 2 lines ≥905px).
- 2026-06 update 3: Hero is now a full-bleed background video (user-supplied, /public/hero-video.mp4 H.264 CRF20 ~15.5MB + hero-video.webm VP9 ~17MB, 1280x720, muted/loop/autoplay, poster hero-poster.jpg) with a light Ink scrim (30%/10%/55%), white headline + subtitle + search on top. Heights 560/600/620/680. Original 78MB upload was re-encoded for web; earlier low-quality (CRF28) version replaced after user feedback. Tourlane collage assets no longer used in hero.
- Copy still says "Tourlane" (user asked not to change anything else) – backlog item.

## Original Tourlane design tokens (reference, superseded by brand re-skin)
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

## Egypt listing + sample product page (2026-06)
- Routes: `/afrika/aegypten` (EgyptListing.jsx, mirrors tourlane.de/afrika/aegypten/) and `/afrika/aegypten/:slug` (TourDetail.jsx, only `egypt-explorer-grand` = product 18 "Egypt Explorer — Grand Luxury Edition"; other slugs redirect to listing).
- Data: `src/egyptData.js` – 18 products (6 families × Comfort/Premium/Grand Luxury, prices from PDF), categories, places, planning/FAQ copy, full itinerary for product 18 (stops A–F, inclusions/exclusions, stats, route-at-a-glance). Images reused from Tourlane Contentful CDN.
- Shared: TourList.jsx (category tabs + cards), Breadcrumb.jsx. Homepage Africa→Egypt card links to the listing.
- Tested: iteration_5 (Egypt pages) all pass.

## Egypt pages – pixel-parity rebuild (2026-06, latest)
- Goal: make listing an exact structural copy of tourlane.de/afrika/aegypten/ and detail of .../luxor-strand-urlaub/ using PDF product 18, for backend migration comparison.
- egyptData.js rewritten: `families` (6 product cards, Tourlane card layout w/ image carousel + category chip + days/stops/price), `listingCopy` (banner, subnav, expert intro, plan, themes, faq, more-Africa), `featured` = product 18 expanded (gallery, service-included list of 8, Roman Karin expert quote, 5 route stops A-E with per-stop image galleries, stats, route-at-a-glance with hotel + highlights per day).
- EgyptListing.jsx reordered to match source: hero → sticky subnav → breadcrumb → expert (with intro para) → tours → features → testimonials → places (image overlay cards) → activities → plan cards → travel themes → FAQ → more Africa destinations → footer.
- TourDetail.jsx restructured to match source: gallery mosaic → title+meta+tag → expert quote card → sticky price card (Trustpilot + From $1,690 + Plan for free + 8 included services w/ icons) → What's included (incl/excl) → Recommended route (A-E tabs + per-stop) → Why plan with experts stats → Route at a glance timeline → features → testimonials → more tours → steps → sticky mobile CTA.
- TourList.jsx rebuilt to Tourlane card style (no category tabs); mobile carousel arrows always visible.
- Tested: iteration_6 – 100% frontend pass, 0 console errors, no overflow at 390/1920, all route tabs + carousels + FAQ + redirects verified.

## Egypt pages – exact clone revision + header edits (2026-06, latest)
- User feedback: previous version changed card style/content; they want an EXACT clone of source pages, only translated to English (own site migration).
- egyptData.js rewritten: `families` = the exact 7 source products (translated titles, exact days/stops/€ prices); first product slug `luxor-strand-urlaub` (detail:true, 12 days/6 stops/€2,945) links to detail, other 6 → listing. `reviewCards` = 3 real reviews (Lysann/Iris/anna .f). `featured` = luxor-strand-urlaub product translated (route A-F Giza/Luxor/Edfu/Luxor/Aswan/Sharm El Sheikh, expert Roman Karin, 8 service items, glance day-by-day).
- EgyptListing.jsx: hero recomposed to match source (centered H1 + CTA + sub, full-width EGYPT image band, Trustpilot trust bar, sticky subnav, breadcrumb), then expert intro → 7 cards → 3 benefits → reviews → places → activities → collapsible how-to-plan (6 subsections) → 8 travel themes → FAQ → 9 more-Africa → footer.
- TourList.jsx: card restyled to source (category label above image, image w/ dots + arrows, bold title, days/stops/From €price lines). No category tabs.
- TourDetail.jsx: detail = luxor-strand-urlaub; removed the extra incl/excl panel (source detail has none).
- Header.jsx: top banner now dismissable (banner-close X); hamburger (mobile-menu-toggle) now visible at ALL breakpoints and opens the full menu panel.
- Detail URL changed egypt-explorer-grand → luxor-strand-urlaub (matches source URL slug).
- Tested: iteration_7 – 100% frontend pass, 0 console errors, no overflow at 390/1440, all flows verified.

## Egypt listing – TRUE pixel clone rebuild (2026-06, latest)
- User: "forget the detail page"; listing must be indistinguishable from tourlane.de/afrika/aegypten/ side by side; German content allowed.
- Method: scraped the live source with Playwright (DOM + computed styles at 1440), extracted every text/image/link with bs4 → generated `src/egyptListingData.js` (7 products w/ all carousel images, 6 places, 2 activities, 8 themes, 9 Africa tiles, 3 reviews, 6 plan sections, 4 FAQs). Local assets in `public/egypt/` (hero XS/S/M/XL, StarLike/Tickets/Destination icons, tourlaner avatars, press logos, planner bg, L.svg decoration, expert photo, anna avatar).
- Page body uses exact Tourlane tokens scoped under `.eg` (index.css): Roboto Serif / Roboto Flex (Google Fonts), #1B1C17 text, #006D44 green, #C0C9C0 borders, #DCE5DC trust bar, 1128px container. Header/Footer remain the shared Hi Tours components.
- New components: `components/egypt/` EgyptHero (hero, trust bar, sticky tabs w/ CTA when scrolled, breadcrumb, ScrollTop), EgyptProductCard (badge icons, per-card carousel, dots, hover arrows), EgyptPlanner (passenger counter widget), EgyptTileRow (places/africa carousel + EgyptTile), EgyptSections (reviews, collapsible plan, FAQ accordion), EgyptIcons. `pages/EgyptListing.jsx` rewritten.
- Verified with automated geometry diff (cmp.py): every h2/card/button/text block matches source x/y/w/h within 1px at 1440; page height 7341 vs 7322 (delta = shared footer). Mobile 390: stacked hero, compact trust bar, no overflow.
- Old `egyptData.js` / `TourList.jsx` kept only for TourDetail.jsx (detail page out of scope now).
- Tested: iteration_8 – 100% frontend pass (17 flows), 0 console errors.

## Egypt detail – TRUE pixel clone of /afrika/aegypten/luxor-strand-urlaub/ (2026-06, latest)
- User: exact replica of the source product page for side-by-side comparison (pixel by pixel). Detail page rebuilt from live-source DOM/computed-style dumps at 1920×800 (Playwright).
- Route: `/afrika/aegypten/:slug` → `pages/EgyptDetail.jsx` (only `luxor-strand-urlaub`; other slugs redirect to listing). Old TourDetail.jsx unused.
- Data: `src/egyptDetailData.js` (exact German source copy: gallery, meta, expert quote, 6 route stops A–F with hotel/program cards + images, experts stats, glance, features, footer, nav, breadcrumb, trust).
- New components (`components/egypt/`): EgyptNav (dark banner + Tourlane nav: logo `/tourlane-logo.svg`, Reiseziele/Reisearten/Aktivitäten, Deals, Über uns, Expertenberatung, Login pill), EgyptFooter (German Tourlane footer, 4 columns + badges + legal bar), EgyptRoute (sticky "Empfohlene Route" header w/ A–F tabs, subtitle hides when stuck exactly like source, stop text clamp-6 + "Mehr anzeigen", image carousel, "Ihre Unterkunft"/"Ihr Programm" cards 520/312px). EgyptDetail.jsx composes: gallery mosaic (328px) → grey info block (h1 32px, meta, Kultur chip | CTA + Trustpilot) → breadcrumb → Google Maps embed (400px) → 944/384 two-column (expert card + route box | white price card + sticky "Warum mit unseren Experten planen?" card + trust) → EgyptPlanner (72px gaps) → "Die Route auf einen Blick" (serif 36px, collapsible) → features → reviews (centered h2) → 6 recommended cards → 3 grey step cards → footer; fixed white bottom bar (expert + "Ab 2.945 €" + CTA) after 500px scroll; ScrollTop above the bar.
- Typography calibration: Google Fonts import now includes all Roboto Flex parametric axes; `.eg` sets the source's `font-variation-settings` (XTRA 500 globally, 505 for h1, 470 for 16px styles) so text widths/wrapping match Tourlane's self-hosted build (h1 wraps to 2 lines exactly like source). New tokens: eg-headline-lg/md, eg-label-md, eg-wide (1440 container), eg-clamp-*.
- Geometry verified at 1920: h1 y=460/h=80, breadcrumb 684, map 736, expert 1168, route box 1428 (h 896 unstuck / 849 stuck), sidebar experts card 1347/658, planner 2396, glance/features/reviews/recommended/steps/footer all within ±5px of source. Mobile 390: no horizontal overflow.
- Known deltas: Google Maps iframe (no API key → generic embed, no A–F route markers); Trustpilot/expert images hotlinked from Tourlane CDNs.

## Backlog
- P1: Replace remaining 'Tourlane' brand mentions in copy with 'Hi Tours' (mock.js).
- P1: Swap English copy for German source copy if exact wording is required (all in mock.js).
- P1: Backend migration – lead/search enquiry persistence, newsletter signups (+ email provider), destinations API. Create `/app/contracts.md` first.
- P1: Detail pages for the remaining 17 products (data model already supports it – add `stops` per product).
- P2: Nav dropdown menus (Destinations / Trip types / Activities), destination detail pages, mobile Trustpilot bar variant.
- P2: Replace hotlinked Tourlane CDN assets with owned storage before production.
