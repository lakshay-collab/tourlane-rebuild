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

## Asia listing – aligned with Egypt listing + 3-photo hero + English (2026-06, latest)
- `/asien` rebuilt to match Egypt listing system: Header (solid) → 3-photo collage hero (source Tourlane layout: mobile big-left + 2 stacked right, desktop 3 columns, h 220/282/292/328, rounded-t-xl) → cream panel (h1 'Asia holidays', 'The largest continent on Earth', Deep Water 'Plan for free' CTA) → rotating Hi Tours `TrustBar` (Trustpilot removed) → Egypt `StickyTabs` (now exported from EgyptHero with `tabs` + `testId` props): About Asia · Asia holidays · Countries ▾ (14, pin icons) · Travel guide ▾ (3) · Inspiration ▾ (5) → breadcrumb Home > Asia.
- Sections: intro (#about) → 'Popular Asia holidays' (6 → Show more 18) with `EgyptProductCard` (numeric days/cities/hotels/activities/transfers placeholders, INR prices ~₹90/€, English tags) → Egypt features (3 SVG USPs, imported from egyptListingData) → `EgyptReviews` (new `items` prop; 3 Asia reviews – PLACEHOLDER copy) → 14 countries → 'Where to go in Asia?' (1 + toggle) → 11 continents → footer. Old lucide USP block removed.
- `TagIcon` falls back to lucide via `tagNav` (Nature/Island hopping/Road trip/Luxury/Multi-country/Beach); EgyptNavIcons gained leaf/road/globe.
- `asiaListingData.js` fully English (products, countries, continents, whereTo, tabs, reviews). document.title 'Asia holidays | Hi Tours'.
- Tested: iteration_28 – 100% frontend pass at 1440 + 390 (0 console errors, no overflow, Egypt listing/detail regression OK).

## Search bar upgrade (2026-06, latest)
- `SearchBar.jsx` (hero + adventure band): idle placeholder rotates every 3.5s between "Where would you like to go?" (MapPin) and "What's your travel style?" (Compass) with slide-up transition (`data-prompt`, `*-search-placeholder`, `*-search-icon`); mobile short copies "Where to?"/"Travel style?".
- Results = destinations (58, thumbnails) + 12 travel styles (Sand icon circles + 'Travel style' tag; Northern Lights → /trip-styles/northern-lights, Egypt styles → travel-style routes; others placeholders). Picking anything shows a Sand chip with ✕ (`*-search-selected`, `*-search-clear`) instead of navigating; 'Plan for free' navigates if the pick has a route.
- No match → EyeOff icon + "Destination not available" / "Try searching for a different destination or travel style for trip ideas." (`*-search-empty`). Copy in `mock.hero`.
- Verified via Playwright screenshots (placeholder rotation, Australia chip + clear, empty state, Northern Lights navigation), 0 console errors.

## Northern Lights trip-style page + specialist team blocks (2026-06, latest)
- User: replicate tourlane.de/reisearten/inselhopping/ structure exactly (side-by-side check) but with Northern Lights as the travel style; route `/trip-styles/northern-lights`. Tourlane has no Northern Lights page (404) – products assembled from Tourlane Norway/Iceland/Finland/Sweden listings (20 winter/aurora trips, English titles, INR ~₹90/€; hotels/activities/transfers PLACEHOLDER counts).
- Generic `pages/TripStyleListing.jsx` (`/trip-styles/:slug`, data map → unknown slug redirects `/`). Data: `src/northernLightsData.js` (hero 2 images, crumbs, team, tours, products, destinations 7, reviews 7). Composition mirrors source geometry at 1440 (collage 40/112/1360×328 2fr:1fr, gap 4, rounded-t-xl → cream panel #F6F4EB h1 + sub | CTA → TrustBar rounded-b → breadcrumb 'Trip styles > Northern Lights') → TeamIntro → 'Your Northern Lights trip with Hi Tours' 6→20 cards → 'The best destinations for the Northern Lights' 7-tile row → 3 USPs → 'What our customers say' (eg-display-lg) 7-review carousel → `AdventureCTA` search band → footer. Mobile: 2 equal hero columns h186, stacked panel.
- `components/tripstyle/TripStyleHero.jsx`; `components/TeamIntro.jsx` (h2 + avatar stack + cards: Instrument Serif quote `.eg-team-quote` 19px + 56px portrait + name/role; desktop 3-col grid, mobile swipe row). Portraits generated (Gemini) → `/public/team/asia-1..5.webp`, `nl-1..5.webp` (320px, PLACEHOLDER names/quotes).
- Asia page: 'Why go on an Asia holiday?' intro REPLACED by TeamIntro 'Who are our Asia specialists?' (5 members, first quote "Planning an Asia holiday shouldn't be a headache – that's my job, not yours."); tab 'About Asia' → 'Our specialists' (still #about).
- Shared changes: `EgyptReviews` gained `items`, `row` (horizontal 384px carousel via EgyptTileRow, 316px mobile) and `h2Class` props + extracted `ReviewCard`; `EgyptTileRow` gained `itemWidth`/`renderItem` props (key = name||title); `TagIcon` lucide fallbacks now include Honeymoon/City breaks.
- Scraper kept at `/app/tests/src/dump.py` (Playwright DOM+geometry dump; chromium installed via `python3 -m playwright install chromium`).
- Tested: iteration_29 – all specs pass at 1440 + 390; the single HIGH issue (duplicate React keys in review carousel) fixed afterwards and re-verified (0 console errors, 7 cards).

## Egypt detail – TRUE pixel clone of /afrika/aegypten/luxor-strand-urlaub/ (2026-06, latest)
- User: exact replica of the source product page for side-by-side comparison (pixel by pixel). Detail page rebuilt from live-source DOM/computed-style dumps at 1920×800 (Playwright).
- Route: `/afrika/aegypten/:slug` → `pages/EgyptDetail.jsx` (only `luxor-strand-urlaub`; other slugs redirect to listing). Old TourDetail.jsx unused.
- Data: `src/egyptDetailData.js` (exact German source copy: gallery, meta, expert quote, 6 route stops A–F with hotel/program cards + images, experts stats, glance, features, footer, nav, breadcrumb, trust).
- New components (`components/egypt/`): EgyptNav (dark banner + Tourlane nav: logo `/tourlane-logo.svg`, Reiseziele/Reisearten/Aktivitäten, Deals, Über uns, Expertenberatung, Login pill), EgyptFooter (German Tourlane footer, 4 columns + badges + legal bar), EgyptRoute (sticky "Empfohlene Route" header w/ A–F tabs, subtitle hides when stuck exactly like source, stop text clamp-6 + "Mehr anzeigen", image carousel, "Ihre Unterkunft"/"Ihr Programm" cards 520/312px). EgyptDetail.jsx composes: gallery mosaic (328px) → grey info block (h1 32px, meta, Kultur chip | CTA + Trustpilot) → breadcrumb → Google Maps embed (400px) → 944/384 two-column (expert card + route box | white price card + sticky "Warum mit unseren Experten planen?" card + trust) → EgyptPlanner (72px gaps) → "Die Route auf einen Blick" (serif 36px, collapsible) → features → reviews (centered h2) → 6 recommended cards → 3 grey step cards → footer; fixed white bottom bar (expert + "Ab 2.945 €" + CTA) after 500px scroll; ScrollTop above the bar.
- Typography calibration: Google Fonts import now includes all Roboto Flex parametric axes; `.eg` sets the source's `font-variation-settings` (XTRA 500 globally, 505 for h1, 470 for 16px styles) so text widths/wrapping match Tourlane's self-hosted build (h1 wraps to 2 lines exactly like source). New tokens: eg-headline-lg/md, eg-label-md, eg-wide (1440 container), eg-clamp-*.
- Geometry verified at 1920: h1 y=460/h=80, breadcrumb 684, map 736, expert 1168, route box 1428 (h 896 unstuck / 849 stuck), sidebar experts card 1347/658, planner 2396, glance/features/reviews/recommended/steps/footer all within ±5px of source. Mobile 390: no horizontal overflow.
- Known deltas: Google Maps iframe (no API key → generic embed, no A–F route markers); Trustpilot/expert images hotlinked from Tourlane CDNs; Tourlane's self-hosted Roboto Flex build renders ~3% wider than Google's at small sizes, so a few 16px lines may wrap differently (e.g. sidebar stat titles).
- Tested: iteration_9 – frontend ~98% pass (all flows), duplicate-key warning fixed afterwards (recommended grid keys now slug+index), eg-nav-logo testid moved onto the <img>.

## Cross-page linking + listing sub-nav dropdowns + detail branding (2026-06, latest)
- Listing sub-nav (EgyptHero StickyTabs): 'Reiseführer'/'Inspiration'/'Orte' are now dropdown buttons (chevron + panel, outside-click closes). Reiseführer=3 themes, Inspiration=5 themes, Orte=6 places. Items link to '#' (no pages). 'Ägypten Rundreisen' stays a plain active tab.
- Header: hamburger (mobile-menu-toggle) now `lg:hidden` (desktop shows nav links only).
- Home hero search (SearchBar.jsx): added a suggestions dropdown with destinations; 'Egypt'→/afrika/aegypten and 'Asia'→/asien navigate, others are placeholders. Hero `overflow-hidden` removed so the dropdown isn't clipped.
- EgyptDetail now uses the shared Header/Footer (Hi Tours branding) instead of EgyptNav/EgyptFooter; breadcrumb 'Ägypten' links to /afrika/aegypten. Three pages linked: Home↔Listing↔Detail.
- Tested: iteration_10 – 100% frontend pass, 0 console errors.

## Asia continent clone – /asien (2026-06, latest)
- Goal: clone tourlane.de/asien/ at route `/asien` for side-by-side comparison ("shift our tourlane website").
- Route added in App.js: `/asien` → `pages/AsiaListing.jsx`. Reuses the Egypt design system (shared Hi Tours Header/Footer, `.eg` tokens, green #006D44, EgyptProductCard, EgyptTileRow, ScrollTop).
- Data: `src/asiaListingData.js` – hero (Mu Cang Chai image, 'Asien Rundreise' / 'Der größte Kontinent der Erde'), trust, tabs, crumbs, intro (bold spans), 18 tour products (tag/days/stations/price/images, NO slug → non-navigating), 14 country tiles, 4 'Wohin in Asien' numbered blurbs, 11 continent tiles, 3 USPs.
- New components: `components/asia/AsiaHero.jsx` (hero w/ white title + dark gradient overlay for contrast, trust bar, sticky sub-nav: 'Asien Rundreisen' active + 'Länder' dropdown of 14 countries + 'Reiseführer'/'Inspiration' plain, breadcrumb Startseite>Asien).
- EgyptProductCard refactored: renders non-navigating `<a href=#>` when `p.slug` absent (Asia), keeps `<Link>` for Egypt.
- Sections: intro 'Warum eine Asien Rundreise unternehmen?' → tours 'Beliebte Asien Rundreisen' (6 shown, 'Mehr erfahren' → 18) → 'Die schönsten Reiseziele entdecken' (14 country row) → 'Wohin in Asien reisen?' (item 1 + 'Weitere Details anzeigen' reveals 2-4) → 'Weitere Reiseziele entdecken' (11 continent row) → 3 USPs (lucide icons) → footer.
- Known deltas: single full-bleed hero image (not the source 3-image collage); product cards use 3 images each (source shows 6 dots); reviews/FAQ sections omitted (not captured in source crawl); USP icons are lucide (Star/Ticket/MapPinned), not Tourlane's exact SVGs; images hotlinked from ctfassets/kiwi CDNs.
- Tested: iteration_11 – 100% frontend pass at 1920 + 390, 0 console errors; counts verified products=18/6, countries=14, continents=11, wohin=4, usps=3, Länder=14.

## Egypt detail copy → Itinerary Product #18 (2026-06, latest)
- User uploaded "Tourlane Products Itinerary.pdf"; requested the Egypt product page copy be changed to PRODUCT #18.
- egyptDetailData.js updated to Product #18 "Egypt Explorer: Pyramids, Nile & Red Sea Beach Retreat — Grand Luxury Edition": 11 Tage / 5 Stationen / ab 1.690 $. Route rebuilt to 5 stops A–E (Cairo Tag1-4 → Nilkreuzfahrt Aswan→Edfu→Luxor Tag4-7 → Luxor→Hurghada Tag7 → Hurghada/Rotes Meer Tag7-10 → Cairo Tag10-11) with hotels (Semiramis/Hyatt, M/S Concerto Plus, Marriott Hurghada) and programs from the PDF. `glance` day-by-day + intro/outro rewritten to this itinerary; expert quote reworded; crumbs updated. Route/UI labels kept German; itinerary descriptions in English per the PDF. Images reused from existing Egypt CDN set.
- Matching listing card (egyptListingData product slug `luxor-strand-urlaub`) title/days/stations/price updated for consistency. Slug/route unchanged so all links still work.
- Verified: compiles clean, detail page renders new title/meta/gallery/breadcrumb, 0 app console errors (smoke screenshot). Kept the expert block (Roman Karin photo) since the PDF provides no expert photo/quote; price shown in USD as per PDF.
- Follow-up (user): entire detail page translated to ENGLISH and the Google Maps embed REMOVED. egyptDetailData.js is now all English (route, glance, experts, brandFeatures, recommended, steps, crumbs, trust, price, expert quote + a new English `planner` export reusing the same /egypt asset paths). EgyptPlanner now takes an optional `data` prop (defaults to German listing planner) so the detail page passes the English planner without affecting the German listing. servicePaths keys in EgyptIcons renamed to English (Accommodation/24-7 Support/Activities/Travel plan/Flights/eSIM). Hardcoded German in EgyptDetail ("Galerie"→Gallery, expert strapline) and aria-labels in EgyptRoute/EgyptPlanner translated. Map block removed; mobile price card retained.

## Homepage revamp — video header, ratings, search, reviews, mobile (2026-06, latest)
- **Announcement bar**: dismiss (X) now persists for the browser session via `sessionStorage('hi-banner-dismissed')` — stays hidden on reload, shows again in a new session.
- **Login removed** from header (desktop + mobile).
- **Full-bleed hero video + transparent header**: `Header` gained an `overlay` prop. Home renders `<div class=relative><Header overlay/><Hero/></div>` → uploaded Hi Tours video (`/hero-video.mp4`) full-bleed with a transparent header, **white logo** (`/hitours-white.webp`) and white nav on top. Interior pages (Egypt/Asia/detail) keep the solid header now with a thin bottom border line.
- **Rating bar** (below hero, `TrustBar` + new `Rating.jsx`): replaced Trustpilot with **Google 4.7 (3,200+)** gold stars + **Tripadvisor 4.9 (2,100+)** green bubbles, brand-styled, same bar height.
- **TripShowcase**: tabs centered with underline under the active tab; the trip card now shows **days · activities · hotels · transfers** (added counts to `mock.showcase`), removed 'stops/rental car'.
- **Search** (`SearchBar.jsx`): Tourlane-style dropdown listing ALL destinations **alphabetically with thumbnail photos** (58 built from `destinationsData` + Asia). Egypt→/afrika/aegypten, Asia→/asien navigate; typing filters.
- **Testimonials**: removed Trustpilot; uses brand **amber stars** (`BrandStars`) and a **user-icon avatar circle** placeholder.
- **Footer**: socials now Facebook, Instagram, LinkedIn, YouTube, Spotify (inline Spotify SVG); footer badges use brand stars instead of Trustpilot.
- **Mobile**: Tourlane-style full-screen hamburger menu with accordion sub-menus (Destinations/Trip types/Activities); Egypt/Asia sub-items navigate. No horizontal overflow at 390px.
- Brand palette (from Hi Tours Brand Kit): Ember #E75E26, Amber #FB7F26, Ink #002131. Stars use Amber #FB7F26.
- Tested: iteration_12 — 14/14 frontend checks pass at 1920 + 390, 0 console errors. Minor note: footer renders mobile+desktop social variants sharing `footer-social` testid (5 visible per viewport; not a bug).

## Homepage refinements round 2 (2026-06, latest)
- **Logo**: trimmed transparent padding on `/hitours-white.webp` (was 16:9 with padding → now ~2.6:1) so the white header logo sizes correctly; header logo set to h-10 sm:h-11.
- **Search dropdown**: minimal — removed the "Destinations" label and the trailing icons/"View trips"; each row is a round thumbnail + name, alphabetical (58 rows). Egypt→listing, Asia→/asien.
- **Expert Advice**: `nav-phone` now opens a Tourlane-style popover (desktop, `advice-popover`) and a contact block in the mobile menu (`mobile-advice`) with phone, hours, CTA. Data in `mock.expertAdvice` — phone is a PLACEHOLDER (+91 22 6140 1500) pending client's real number. Hamburger + expert-advice are Tourlane-style approximations (client to confirm side-by-side).
- **Rating bar**: now "Rated 4.7 on Google" (Google G) + real Tripadvisor logo image (`/badges/tripadvisor.png`, white bg made transparent) with "Rated 4.9"; no review counts.
- **Testimonials**: reverted to original card layout with Trustpilot-style BOXED stars turned BLUE (#1C6FB8), no Trustpilot text, and NO avatar/photo circles.
- **Footer**: German award badges replaced with ISO 45001 + IATA + Travelife (`/badges/*.png`); country → India with tricolour flag; 5 socials (FB/IG/LinkedIn/YouTube/Spotify) enlarged to w-9/h-9 filled circles so Spotify is clearly visible.
- **Copy**: all homepage "Tourlane" → "Hi Tours" (mock.js).
- Tested: iteration_12 (14/14), iteration_13 (12/12) — 100% frontend pass, 0 console errors, desktop + mobile. Tripadvisor logo swap verified visually.

## Egypt: listing page + dedicated holidays page split, planner revert, card meta, Lora quotes (2026-06, latest)
- `/afrika/aegypten` = "Listing page": hero → trust bar → sub-nav (About Egypt · Egypt holidays · Travel guide · Inspiration · Places, unchanged) → breadcrumb → **About Egypt** (short text + "Learn more"/"Show less" toggle, `intro.more`) → **Ria Banerjee quote block** (Sand-tinted figure, clamp 2/3 lines + Read more/Read less, `intro.quote/quoteMore`) → **"Top-selling Egypt holiday ideas"** (6 cards desktop, 4 on <600px, no filters/lazy) → **"View all Egypt holidays"** button → USPs → planner → reviews → places → activities → plan → "Travel guide & inspiration" (themes) → FAQ → Africa → footer. Mobile bottom bar = CTA only (`MobileToursBars filters={false}`).
- NEW `/afrika/aegypten/holidays` (+ `/holidays/:style`, `pages/EgyptHolidays.jsx`) = focused SEO/ads landing: EgyptHero with `title`, `showTabs={false}`, `crumbs` (Home › Egypt › Egypt holidays), then h2 + "N holidays & tours available" count + sticky filter bar (Travel styles / Sort) + chips + lazy-loaded grid (6/3 per page) + mobile filter/CTA bar + footer. Nothing else. Style pick → URL `/afrika/aegypten/holidays/<slug>` (H1 "Egypt honeymoon holidays" etc.), sort → `?sort=`. Old `/afrika/aegypten/travel-style/:style` → `StyleRedirect` (Navigate). SearchBar travel-style links updated. `styleLanding()` + `holidaysPath` + `holidaysCrumbs` in egyptListingData.
- Lead planner (`EgyptPlanner`) reverted to the ORIGINAL centred layout (desktop: 372px image band w/ title + avatars, 650px cream card overlapping at top 141px, container h-760; mobile: compact stacked card) — only the fields changed to name / phone (+cc select) / email inside a bordered box, CTA "Fill above to start customising" → "Start customising", success state, "As seen in" strip. Both variants in DOM; testids `eg-planner-*` (desktop) / `eg-planner-m-*` (mobile). RULE (user): never redesign a component when asked only to change its fields/content.
- Product card image meta: plain white sentence-case text "11 days • 5 cities" TOP-LEFT over a faint Ink top scrim — no pill/badge (user rejected the frosted pill). RULE (user): one case style site-wide = **sentence case**; all `uppercase` labels removed (glance headings, optional badge).
- Quote typography: `.eg-quote`, `.eg-team-quote`, `.t-quote` now **Lora** regular (not italic) 20/32 — Instrument Serif italic was judged unreadable. Google Fonts import extended with Lora.
- Tested: iteration_30 – all frontend checks pass at 1440 + 390 (listing order, quote toggle, view-all nav, holidays filters/URLs/lazy/redirects, planner desktop+mobile incl. in-browser lead submit → success, card meta, regressions), 0 console errors. Follow-up edits (count line, Learn more, heading rename, Lora) verified by screenshot.
- Holidays page (latest): FULL-BLEED VIMEO VIDEO HERO (`VideoHero` in EgyptHolidays.jsx): `Header overlay` + 520–640px section, Vimeo background embed (id 8951897 "Giza pyramids" 16s loop, h=41bf8c599a, params background=1&autoplay=1&loop=1&muted=1&controls=0, iframe sized 177.78vh×56.25vw min 100% to cover, hero image as fallback beneath), Ink scrim, centred white H1 "Egypt tours & holidays" / "Egypt <style> holidays" + "N package ideas available" + white pill "Browse package ideas" (scrolls to #tours). Then breadcrumb → h2 → sticky filter bar → grid. Old YouTube/reel tile removed. NOTE: both YouTube and Vimeo block playback inside the headless screenshot browser (bot check) – verify in a real browser.
- Holidays page hero REMOVED (user): now solid `Header` → breadcrumb → title row: h1 "Egypt holidays & tours" / "Egypt <style> holidays" + "N holidays & tours available" on the left, a reel-style 9:16 video tile (96×170 mobile / 124×220 desktop, autoplay muted loop, tap-to-unmute button) on the right → sticky filter bar → grid. Entrance animation (`.eg-rise` staggered on breadcrumb/title/count/filter bar/first page of cards, `.eg-pop` on the video); listing "View all" click plays a 320ms exit (`.eg-page-leave`) then navigates; holidays page scrolls to top on mount.

## Egypt holidays page – Tourlane sections + hero CTA merge (2026-06, latest)
- Hero (Vimeo) copy = H1 "Egypt tours & holidays" (or "Egypt <style> holidays") + ONE white pill CTA "Browse N package ideas" (`tours.browse(n)`, scrolls to #tours, count follows filter). No repeated h2 below; rotating homepage `TrustBar` (Google/TripAdvisor → Est. 1995 → ISO 45001) sits under the video hero like the listing page. Filter pills renamed "Filter by" / "Sort by" (`tours.filterBy/sortBy`). Filter bar no longer wrapped in `.eg-rise` (transform created a stacking context that put dropdowns behind cards – fixed after iteration_31).
- After the grid, three sections copied 1:1 from tourlane.de/asien/thailand/khao-lak-urlaub/ (user will compare side by side): (1) **Planner** = original Tourlane passenger counter (step 0: "For how many people are you planning your trip?" Adults 2 / Children 0 / Infants 0, −/+ 40px circles, 12.5% progress, "Continue") → step 1 = name/phone/email lead form (25% progress) → POST /api/leads incl. `passengers` dict (backend `LeadCreate.passengers: Optional[Dict[str,int]]`). Planner data (`rows/question/next`) added to egyptListingData AND egyptDetailData so listing/detail/holidays all show the counter first. `id="planner"`. (2) **`EgyptCustomerReviews.jsx`** (`customerReviews` data): centred h2 "Our customers about their Egypt trip", laurel-style sparkles + 4.5 + BoxStars + "7,618 reviews" link + "Hi Tours customer reviews"; 620/740 mosaic (412px: big photo | Sand AI-summary quote card 467×202 + photo 257×202 / photos 257+467) – photos hotlinked from tourlane-dm-images (PLACEHOLDER Thailand photos); divider; 381/955 two-col: "Ratings by category" 5 progress bars (4.4/4.6/4.6/4.7/4.5) + "Plan your individual round trip." card (Ria portrait, "Plan for free" → scrolls to #planner) | "All reviews" pill + search button, 3 review cards (initial circle, name, date, 5 BoxStars, source badge, title, 2-line clamp `eg-clamp-2` + Read more/Read less), "Show more reviews ›". (3) **`EgyptFaq`** with new `centered`/`className` props. Then footer.
- CSS: added `.eg-clamp-2`, `.eg-clamp-3`, `.md\:eg-clamp-2`.
- Tested: iteration_31 – everything passed except the 2 bugs above (dropdown z-order, detail planner missing counter) – both fixed and re-verified by screenshot (Filter by → Honeymoon click → URL + H1 update; detail page shows counter step).

## Backlog
- P1: Replace remaining 'Tourlane' brand mentions in copy with 'Hi Tours' (mock.js).
- P1: Swap English copy for German source copy if exact wording is required (all in mock.js).
- P1: Backend migration – lead/search enquiry persistence, newsletter signups (+ email provider), destinations API. Create `/app/contracts.md` first.
- P1: Detail pages for the remaining 17 products (data model already supports it – add `stops` per product).
- P2: Nav dropdown menus (Destinations / Trip types / Activities), destination detail pages, mobile Trustpilot bar variant.
- P2: Replace hotlinked Tourlane CDN assets with owned storage before production.

## Homepage refinements round 3 (2026-06, latest)
- Ratings bar: Google G + "Rated 4.7 on Google"; TripAdvisor round owl (user-supplied image, `/badges/tripadvisor-owl.png`, circle-masked) + "Rated 4.9 on TripAdvisor".
- Stars: `BoxStars` now brand Harbor blue `#174358` (exported `BRAND_BLUE`), unfilled tile `#D6DCE0`; used in Testimonials AND footer 4.8 stars (consistent).
- Footer certifications: ISO 45001 + IATA + Travelife as transparent PNGs (`/badges/*-t.png`, white boxes removed, mix-blend-multiply) sitting flat on cream. India flag is now a proper SVG with Ashoka Chakra.
- Mobile menu rebuilt as `MobileDrawer.jsx` — measured from tourlane.de (390px): 50% dark overlay, 320px (sm:360) right drawer, rounded-l-2xl, surface-low bg, 40px close/back buttons, 56px rows (t-label-lg, onsurface-variant), pill hover, hr dividers inset 16px. Sections: Destinations/Trip types/Activities (arrow) | Deals, About us, Work with us, Press, Hi Tours Care | Expert advice. L2 Destinations: heading row + regions (40px round thumbs from destinationsData) with drop-triangle accordion → countries (first = region). Egypt→/afrika/aegypten, Asia→/asien. L2 Expert advice = `ExpertAdvicePanel`.
- `ExpertAdvicePanel.jsx` mirrors Tourlane: status dot (Available now / Outside opening hours computed in IST from `expertAdvice.schedule`), existing-trip → Service portal, planning → phone + hours. Desktop popover opens on hover and click, right-aligned under "Expert advice" with underline indicator.
- Tested: iteration_14.json (all pass, 0 console errors, desktop + mobile).

## Search feedback + rotating trust bar (2026-06)
- SearchBar: focus → white + Harbor-blue halo ring, lift/scale, pin nudge (`hi-pin-nudge`), dropdown `hi-drop-in`, rows staggered `hi-row-in` (35ms). `data-focused` attr on form.
- TrustBar: auto-rotating 3 slides every 5s (`hi-slide-up`), no dots, no manual control, pauses on hover, `data-slide` = ratings | heritage | iso. Copy: "Established in 1995. 30+ years of crafting incredible holidays for lakhs of travellers around the globe." / "Did you know? Hi Tours was the first travel company in India to earn ISO 45001 health & safety certification." Ratings slide unchanged. Homepage only.
- Self-tested via screenshots (desktop + 390 mobile); slide cycle verified.
- Update: TrustBar fixed h-11 (44px) on all viewports; slides are segment groups (icon + t-label-lg, dividers on sm+). Heritage: "Established in 1995 | 30+ years of expertise | 400,000+ happy travellers". ISO: "Hi Tours is ISO 45001 certified | Health & safety is our priority". IATA slide intentionally skipped (user). No manual scrolling.
- Update: TrustBar mobile = one line per slide (12px text, 16px icons, short copy variants via `short` prop: "Est. 1995 | 30+ years | 400,000+ travellers", "ISO 45001 certified | Health & safety first"); desktop 14px full copy. Tap/Enter on bar advances to next slide and restarts the 5s timer (setTimeout keyed on slide index). Hover pauses.
- Update: TrustBar breakpoint 400px (`useWide`). ≥400px: rotates 3 slides, dividers visible on mobile, copy "Established in 1995 | 30+ years | 400,000+ happy travellers" / "ISO 45001 certified | Health & safety is our priority" (desktop adds "of expertise", "Hi Tours is"). <400px: only the ratings slide, no rotation/tap. Verified widths 375/390/402/440: content ≤ bar width, one line.
- Update: mobile (<640) heritage slide = "Established in 1995 | 400,000+ travellers in 30+ years" (two segments); desktop keeps 3 segments.
- Update: heritage slide = "Established in 1995 | {YEARS} years of trust | 400,000+ (happy) travellers", YEARS computed as currentYear-1995 (31 in 2026). Three segments with dividers on both mobile (≥400px) and desktop.

## Egypt listing – Hi Tours migration round (2026-06, latest)
- User: listing page `/afrika/aegypten` migrates from tourlane.de → Hi Tours (Indian market, 95% mobile). All copy ENGLISH, prices INR (Indian grouping via `formatInr`, converted ~₹90/€, ₹85/$).
- Data: `egyptListingData.js` rewritten in English; image URLs moved to generated `egyptImages.js`. Products now numeric `days/stops/price` + `hotels/cities/activities/transfers` (placeholders for products 2–7) + `styles[]`. New exports `styles` (Family, Romantic, Culture, Short trips, Beach, Nile cruise, Luxury) and `sorts` (price asc/desc, duration asc/desc).
- Hero: user-supplied photo `/egypt/hero-egypt.webp`, H1 'Egypt Honeymoons and holidays'. Band heights match source: 236 (xs) / 356 (sm) / 453 (md+). <md: copy stacked above image (like source); md+: white copy overlaid with Ink scrim.
- Trust bar: homepage rotating `TrustBar` (Google 4.7 / TripAdvisor 4.9 → Established 1995 → ISO 45001) replaces Trustpilot everywhere on the page.
- Sticky sub-nav (EgyptHero StickyTabs): About Egypt (→#about) · Egypt holidays (→#tours, scroll-spy active state) · Travel guide ▾ (3, icons) · Inspiration ▾ (5, icons) · Places ▾ (6, pin icons) · Travel styles ▾ (filter, check mark + green dot) · Sort ▾ (re-orders). Dropdown = Tourlane style: 280px, #F0EEE6, 8px radius, e2 shadow, 24px icons (lucide, `EgyptNavIcons.jsx`). Picks scroll to #tours. Mobile: strip horizontally scrollable, dropdown clamped inside viewport. No FAQ tab.
- Listing: filter/sort state in EgyptListing.jsx; chips (eg-filter-chip-style/sort, clear) + result count; 'Show more' hidden while a filter/sort is active.
- Product card: days/stops row + 2×2 inclusions (hotels, cities, activities, transfers) + 'From ₹x p.p.'.
- Reviews: 'Customers about Hi Tours', Excellent + brand-blue BoxStars 4.8 + 5,000+ reviews; cards use blue BoxStars, no avatars; swipe row on mobile.
- Mobile fixes: horizontal overflow removed (tabs strip), activities 2-up swipe row, ScrollTop bottom-right smaller offset.
- Header logo: `Logo.jsx` default now `/hitours-dark.webp` (no tagline, same framing as white logo); `tagline` prop keeps `/hitours-logo.webp` (used in Footer).
- Tested: iteration_15 – 100% frontend pass (14 groups) at 1440 + 390, 0 console errors.

## Egypt listing – round 2: full-bleed hero, brand tokens, SEO style URLs (2026-06, latest)
- Hero now full-bleed with `Header overlay` (white logo) on desktop AND mobile, heights 520/560/600/640, white copy centered over image with Ink scrim. No white gap under header. H1 switches to 'Egypt <style> holidays' on style landing pages.
- `.eg` scope re-tokenised to Hi Tours brand: Bricolage Grotesque (display/headline/title-lg), Inter (body), Instrument Sans (labels/title-md); Ink #002131 text, Harbor #174358 primary/secondary text + links, Ember #E75E26 active-tab underline/dots/progress, Blush arrows, outline #6F777C / #C4CBD0. `.eg-btn-filled` = Sunset Run gradient (like homepage CTAs). Applied across Egypt listing/detail/Asia components (shared).
- Sub-nav order: About Egypt · Egypt holidays · Travel styles · Travel guide · Inspiration · Places · Sort.
- Travel style = URL: route `/afrika/aegypten/travel-style/:style` (slugs family, honeymoon, culture, short-trips, beach, nile-cruise, luxury; 'Romantic' renamed 'Honeymoon'); sort = `?sort=price-asc|price-desc|days-asc|days-desc`; unknown style redirects to listing; document.title updates. Enables SEO landing pages.
- About section: h2 'About Egypt – planned by experts'; expert Ria Banerjee, 'Head of Product & Travel Expert for Egypt', generated portrait `/egypt/expert-ria.webp`; 'Updated on' removed. Tours intro shortened to one sentence + 'Read more' toggle.
- Product card: image dots removed; one 2-col grid of icon stats (days, cities, hotels, activities, transfers — no 'stops'), divider only above 'From ₹x per person'. Simpler icons (calendar, pin, bed, ticket, car).
- Planner: reverted to 'As seen in:' press logos (Süddeutsche/Stern/Die Zeit) per user.
- Section spacing: mt-12 on mobile, mt-16 desktop.
- Tested: iteration_16 – 13/13 frontend scenarios pass at 1440 + 390, 0 console errors (card grid re-layout verified by screenshot afterwards).

## Egypt listing – card hierarchy + mobile sticky CTA (2026-06, latest)
- Product card: title `eg-card-title` (Bricolage 18/600) → muted "5 cities" line → 2×2 Sand-tinted single-line tiles (days, hotels, activities, transfers; Ember icons; h-11) → price row "From **₹1,44,000** per person" (`eg-price` 22/600). No divider lines; card is shorter than before.
- `MobileStickyCta` (EgyptHero.jsx): fixed bottom bar <lg, slides in after 600px scroll, "Customize this trip" (hero.stickyCta); desktop sticky sub-nav CTA also says "Customize this trip". ScrollTop moved up on mobile (bottom-24).
- Review summary no longer shows the "5,000+ reviews" count.
- Verified via screenshots at 1440 + 390 (0 console errors).
- Follow-up: "5 cities" now an overlay chip (pin icon, Ink/70 blur) bottom-left on the card image; tiles = days/hotels/activities/transfers. Mobile sticky CTA is a single full-width "Customize this trip" button (no sub text). Mobile (<905px) lazy-loads packages: 3 initially, +3 per IntersectionObserver hit with a spinner (eg-lazy-sentinel/eg-lazy-spinner); desktop keeps Show more. Tab order: About Egypt · Egypt holidays · Travel styles · Sort · Travel guide · Inspiration · Places.

## Egypt listing – luxury palette, single sticky filter bar, lazy load everywhere (2026-06, latest)
- Top sub-nav (About Egypt · Egypt holidays · Travel guide · Inspiration · Places) is NO LONGER sticky; no CTA in it.
- `EgyptFilterBar.jsx` (inside #tours, after intro): only [Travel styles ▾] [Sort ▾] pills + desktop-only "Plan your Egypt trip" CTA on the right; sticky top-0 z-30 within the tours section on desktop + mobile (shadow when stuck). No title / count repetition. Active pill = filled Harbor with white dot.
- Lazy loading on ALL breakpoints (6 per page desktop, 3 mobile; IntersectionObserver + Harbor spinner). 'Show more/less' removed for tours (themes still use it).
- Product title shows in full (no line clamp).
- Luxury palette: `.eg-btn-filled` = Deep Water gradient (Ink→Deep Harbor→Harbor) with Ink shadow; tiles neutral #F0EEE6 with Harbor icons; underlines/progress/spinner Harbor; orange removed from Egypt components (Ember only remains on homepage accents).
- CTA copy: sticky bar + mobile bottom bar say "Plan your Egypt trip"; hero keeps "Plan for free".
- iteration_17 passed the previous state (before this round); this round verified via screenshots at 1440 + 390, 0 console errors, 7 cards lazy-loaded on both.

## Palette mix + homepage alignment (2026-06, latest)
- New gradients in tailwind: harbor-sky (#174358→#308BB6), sky-mist (#E0F7FF→cream), warm-mist (Sand→Blush); CSS helpers `.eg-grad-harbor`, `.eg-band-sky`, `.eg-band-warm`, `.eg-eyebrow` (Ember caps label).
- Listing: eyebrows above tours/places/themes/reviews/FAQ; USP section on warm-mist rounded band; FAQ on sky-mist full-width band; card tiles Sky #E0F7FF w/ Harbor icons; cities chip + active filter pill + ScrollTop = harbor-sky gradient; price Harbor; arrows Sky; planner overlay Deep Water tint.
- Homepage: `.btn-sunset` now Deep Water gradient (aligned with listing CTAs); Blush trust bar, Dawn Haze step circles, Ember accents retained.
- Cards: equal-height rows on desktop, natural height on mobile, titles never truncated (UX decision explained to user).

## Cleanup + sticky title (2026-06, latest)
- Per user: removed all eyebrow sub-headings and the Sky/warm section bands (user did not ask for them). Listing colours now follow the homepage system only: Deep Water gradient (CTAs, cities chip, active filter pill, ScrollTop), Blush arrows, Sand #FBEADB value tiles with Harbor icons, Ink/Harbor text. No Sky tints (user removed light blues earlier).
- Sticky filter bar shows the section title ("Egypt holidays" / "Egypt honeymoon holidays") ONLY while stuck (eg-filter-title); on mobile the Travel styles pill shortens to "Styles" while stuck, title wraps to 2 lines at 14px.
- RULE (user): do not add UI elements/copy that were not requested.

## Thumb-friendly mobile filters + homepage showcase alignment (2026-06, latest)
- Mobile (<905px): Travel styles + Sort pills moved into the fixed bottom bar above the "Plan your Egypt trip" CTA (`MobileToursBars` in EgyptFilterBar.jsx; dropdowns open upward, pick scrolls to #tours). A fixed top title bar (eg-mobile-tours-title, eg-title-lg 22px) shows "Egypt holidays"/"Egypt <style> holidays" only while the #tours section spans the viewport top. Desktop keeps the sticky top bar (title-when-stuck + pills + CTA). ScrollTop moved to bottom-40 on mobile.
- Homepage TripShowcase card aligned with listing cards: 2×2 Sand tiles (days/hotels/activities/transfers, Harbor icons); tags moved onto the image mosaic as white chips (scrollable row at top) → panel much shorter on mobile.
- Card sizing decision (explained to user): adaptive height, not fixed — desktop rows equal-height (grid stretch, title top, price bottom-anchored), mobile natural height.

## Brand typography + showcase redesign (2026-06, latest)
- Brand Kit typography now applied: Bricolage Grotesque = section/display titles only; Instrument Sans 600 = card/step/sub titles (t-headline-sm/md/lg, eg-card-title, eg-title-lg); Inter = body; Instrument Serif italic = quotes (`.t-quote`, `.eg-quote`). Google Fonts import extended with Instrument Serif.
- TripShowcase: tags removed entirely; testimonial quote (t-quote) between value tiles and avatar; single-line "Crafted specially for **name**"; titles shortened to one mobile line (Canada road trip, Iceland adventure, Thailand with friends, Wild Namibia, Costa Rica Pura Vida; whitespace-nowrap <905px); tabs render BELOW the card on mobile (thumb reach) and above on desktop (showcase-tabs-mobile / showcase-tabs).
- TripShowcase mobile (Jun 2026): 5-tile mosaic replaced by a horizontal snap-scroll strip of same-size landscape photos (16:10, 82% width, #tag bottom-left) → card ~240px shorter. Desktop mosaic unchanged (`showcase-mobile-strip` / `showcase-mosaic`).
- Footer logo row: py-8 (equal 32px above/below), stacked logo + socials on mobile.
- Tested: iteration_18 (footer/showcase), 19 (typography/tabs), 20 (single-line titles) – all pass.

## Egypt detail page rework – Hi Tours version (2026-06, latest)
- `/afrika/aegypten/luxor-strand-urlaub` mirrors tourlane.de detail page with Hi Tours brand. Header block: gallery → h1 (Instrument Sans; 16px/2 lines on mobile, 30px desktop) → 5 Sand value tiles (days/cities/hotels/activities/transfers, same icons as listing) → Culture chip | CTA + "Excellent ★ 4.9 based on 1,400+ Egypt reviews" (Trustpilot removed everywhere).
- Price ₹1,44,000 per person (`detail.price` numeric, `formatInr`); What's included = fixed list of 8 `[label, icon]` pairs incl. 24/7 support + "Travel customisation by your travel expert" (existing ServiceIcon vectors).
- Expert: "Trip created by Ria Banerjee · Our destination expert for Egypt", Instrument Serif quote clamped to 2 lines + Read more.
- Itinerary (EgyptRoute): "Your suggested itinerary", "View quick summary" button (→ opens + scrolls to #summary), tabs show name + day label (Cairo/Nile Cruise/Luxor/Hurghada/Cairo), stop text 2-line clamp, "Customise this accommodation", "Your activities" = horizontal card carousel per stop (`stops[].activities`, 3/4/3/3/2, `optional` badge), desktop arrows.
- "The route at a glance": short line + Read more; day rows collapsed by default, opened via summary CTA (or eg-glance-toggle), 5 rows with dividers, hierarchy h2 > day h3 (title-md) > uppercase label-md, "Hide summary".
- "Why plan with our experts?" now also rendered on mobile below itinerary; Google/TripAdvisor ratings row (eg-ratings-row) under it and under "Why book with Hi Tours". Recommended = "Other Egypt holidays you may like". Planner social "4,00,000+ travellers trust Hi Tours". Sticky bar INR + "per person".
- Tested: iteration_21 – 70/70 assertions pass (1440 + 390), 0 console errors.

## Egypt detail page – round 2 polish (2026-06, latest)
- Header block has NO CTA (only title, tiles, tag); single "Plan for free" in price card (+ sticky bar). Google/TripAdvisor `Ratings` row lives under the price card only (removed from experts card + features; header trust row removed).
- What's included = 6 items: Hotels, Transfers, Activities, Entry tickets (new servicePaths key), 24/7 support, Holiday expert-led customisation.
- Expert one-line title "Trip created by Ria Banerjee, our product head and destination expert for Egypt" + full-size `eg-quote` (22px Instrument Serif italic) clamp-2 + Read more.
- EgyptRoute: all stops rendered stacked (eg-route-section-0..4) with dividers; sticky header with scroll-spy tabs (HEADER offset 120), tab click scrolls to stop; stop text clamp-3; compact horizontal accommodation card (one featured hotel + board-basis line) with "Customise this"; activities header "Customise activities"; "View quick summary" = Blush pill.
- Glance rows: photo (route.stops[i].images[0]) + wide text column | narrow bordered accommodation/highlights column (2-col on mobile).
- Reviews section: h2 'What customers say about booking Egypt with Hi Tours', summary 'Excellent ★ 4.8 out of 5 based on 420 Egypt reviews' (EgyptReviews `h2`/`count` props).
- Tested: iteration_22 – all 11 checks pass (1440 + 390), 0 console errors.

## Egypt detail page – round 3 (2026-06, latest)
- Mobile h1 22px/28px (3 lines ok). 4 value tiles (days/hotels/activities/transfers); chips row: "5 cities" Deep Water chip + tags Culture/Honeymoon/Luxury (`detail.tags`, NavIcon icons).
- What's included = 6 Sand blocks in 2-col grid. Ratings row = Google/TripAdvisor text + logos only (no stars).
- Expert: "Trip created by Ria Banerjee, product & destination expert for Egypt"; `quote` = one short sentence (2 mobile lines, 18px mobile / 22px desktop), `quoteMore` appended on Read more.
- Route: day label and `subtitle` on separate lines; Blush pill CTAs "Customise this"/"Customise activities"; accommodation "View photos (n)" opens `Lightbox` (Esc/close/prev/next).
- Route at a glance: desktop = table (Day pill | Route photo+title+text | Your accommodation | Key highlights & activities), mobile = stacked cards. Sticky bar without team block.
- Tested: iteration_23 – all 9 groups pass (1440 + 390), 0 console errors.

## Egypt detail page – round 4 (2026-06, latest)
- Header: title + chips row only ("11 days", "5 cities" Deep Water chips + Culture/Honeymoon/Luxury). Value tiles removed from header.
- Price card What's included = 6 Sand blocks with counts: 4 hotels · 12 activities · 9 transfers · 3 entry tickets · 24/7 support · Customisation (new 'Customise' sliders vector in servicePaths).
- Itinerary stops: `bullets[]` replace `text` (crisp per-stop list incl. transfers/flights); stop header = name + Blush Day pill on one row, subtitle beneath. Glance highlights include transfers/flights.
- Desktop sidebar = sticky price card only; "Why plan with our experts?" moved into main column under the itinerary (all breakpoints, max-w 520). Expert line: "Trip created by Ria Banerjee, Egypt expert at Hi Tours".
- Tested: iteration_24 – all 9 checks pass (1440 + 390).

## Visual-edit rounds + lead capture (2026-06, latest)
- Lead capture: new backend `POST /api/leads` + `GET /api/leads` (Mongo `leads` collection; fields name/phone/email/country_code/trip_title/source). Verified end-to-end via curl (persists). `EgyptPlanner` rebuilt from a people-counter into a lead form (name, phone with flag country-code selector +91/+1/+44/+971/+61/+65/+49, email), challenge CTA ("Fill above to start customising" → "Start customising" when valid), success state. Wired site-wide: Egypt listing, Egypt/Morocco/Sri Lanka detail pages, and Asia listing (asiaPlanner override with Asia bg). NOTE: browser POST can't be verified through the screenshot proxy (cross-origin preflight artifact); real users are same-origin so it works.
- Detail (`EgyptDetail`): CTA renamed "Start customising" (bigger, full-width); gallery button icon-only; header facts = light white chips (days/cities) with Lagoon icons; **tags removed** from header; route label "This holiday takes you to"; What's-included shows Meals (X meals) via new MealIcon; experts card uses Indian team faces (no count/blue-tick), value-prop copy (crafted by experts / customised to the T / best prices bundled) with UserIcon/SparklesIcon/WalletIcon.
- Route (`EgyptRoute`): RouteLine now plain text (no dark capsules); day label bold/prominent; tabs show city only; clicking a tab sets active immediately + scroll-spy threshold widened; departure/airport bullets show a Plane icon; hotel description title-cased and "or similar" removed from data.
- Product card: holistic stats grid; removed image city overlay.
- Card slimming (later): removed the single `tag` pill from cards (a multi-use holiday shouldn't carry one misleading tag); moved days·cities onto the image as a subtle bottom-left label over a soft gradient; stats grid trimmed to hotels/activities/transfers/meals (2×2) so cards are shorter.
- Asia: hero edge-to-edge + bigger images, subtitle removed, witty tagline "No two trips alike."; TeamIntro redesigned to one team statement + "Meet the full team" read-more; heading "Our Asia specialists"; Asia listing now has the lead-capture planner footer.
- Copy/CTA also propagated to Morocco & Sri Lanka product data (cta, routeLabel, meals label).
- DEFERRED (needs clarification): EgyptHero "Asia holidays" landing-focus/lock behaviour; Asia tours sort/filter controls (like Egypt). Backend self-serve admin (Option A) still open.

## New Sri Lanka product: Emerald Isle Explorer (2026-06)
- User uploaded a "Emerald Isle Explorer" 9-day Sri Lanka PDF and asked to turn it into a product in the existing Hi Tours design (extract info + imagery only, no design change).
- New data file `src/srilankaData.js`: `detail` (slug `emerald-isle-explorer-sri-lanka`, region `asia`, 9 days / 6 cities, ₹94,472 pp from the PDF's discounted price, tags Culture/Beach, gallery + services), `route.stops` (A Colombo, B Dambulla/Sigiriya, C Kandy, D Nuwara Eliya, E Yala, F Bentota/Galle — each with bullets, image carousel, activities, hotels, program), `glance` (7 day-rows), `crumbs` (Destinations › Asia › Sri Lanka). All prose written in Hi Tours voice (facts from PDF, no verbatim copy). The PDF referenced TourRadar images with no usable URLs, so imagery was sourced via `image_selector_tool` (Unsplash/Pexels): Sigiriya, Dambulla, Kandy temple, Nuwara Eliya tea, Yala safari, Galle Fort, Bentota beach, Colombo.
- Reused the existing detail template: added Sri Lanka to `EgyptDetail.jsx` `BY_SLUG` registry (3rd product). Made `Recommended` region-aware (`detail.region==='asia'` → Asia products pool, heading "Other Asia holidays you may like"); generalized `Crumbs` to also `<Link>` the `/asien` breadcrumb.
- `EgyptProductCard` now honours a `p.href` (falls back to `/afrika/aegypten/{slug}`), so Asia cards can deep-link to `/asien/{slug}`.
- `App.js`: added route `/asien/:slug` → `EgyptDetail`.
- `asiaListingData.js`: added the product as the 1st card in `products` (slug + href, imagery via `cardImages` from srilankaData). It now appears on the `/asien` listing and links to the detail page.
- Verified: compiles clean; `/asien/emerald-isle-explorer-sri-lanka` renders full page (Sigiriya hero gallery, title, ₹94,472, Culture/Beach tags, 7-city route line, Kabir Shah expert, A–F itinerary tabs, what's-included); `/asien` listing loads with the Sri Lanka card first; 0 console errors at 1920px.
- OPEN DECISION (deferred by user): backend + self-serve admin (Option A) so the team can add future products at ~0 agent credits, ideally with "paste link / upload PDF → auto-fill" via the Emergent LLM key. Pending answers on admin auth, LLM auto-extract model, and Egypt-only vs generic scope.

## New Egypt product: Morocco & Egypt combo (2026-06)
- User: take a Thrillophilia Morocco+Egypt 8-day itinerary and add it as another Egypt product in Hi Tours' existing design/style (extract info + images only, keep our design).
- New data file `src/moroccoEgyptData.js`: `detail` (slug `morocco-egypt-palaces-pyramids`, title 'Morocco & Egypt: Palaces, Medinas & Pyramids', 8 days / 3 cities, ₹1,64,000 pp ≈ USD 1,930×85, tags Culture/Luxury, gallery + services), `route.stops` (A Marrakech D1–3, B Casablanca→Chefchaouen D3–5, C Cairo→Alexandria D5–8; each with bullets, image carousel, activities, accommodation, program), `glance` (4 day-rows), `crumbs`. All prose rewritten in Hi Tours voice (no verbatim source copy). Images hotlinked from media1.thrillophilia.com (via `img()` helper) — same external-CDN approach as existing Egypt data.
- `EgyptDetail.jsx` refactored from a single hard-coded product to a `BY_SLUG` registry ({luxor-strand-urlaub, morocco-egypt-palaces-pyramids} → {detail, route, glance, crumbs}); all product-specific components (Gallery/Head/Crumbs/PriceCard/ExpertCard/Glance/Recommended/StickyBar/Cta) now take props instead of module-scope constants. Shared exports (experts/brandFeatures/recommended/steps/price/planner/trust/reviewsHeading) still from egyptDetailData. Unknown slug → redirect to /afrika/aegypten.
- `EgyptRoute` gained a `stops` prop (default = imported route.stops) so it can render either product; labels stay shared.
- `egyptListingData.js`: added the product as 2nd card in `products` (styles Culture/Luxury) using `cardImages` from moroccoEgyptData; appears on the Egypt listing and in the detail "Other Egypt holidays" grid.
- Verified: compiles clean, /afrika/aegypten/morocco-egypt-palaces-pyramids renders full page (title, ₹1,64,000, 3 route tabs Marrakech/Casablanca/Cairo, route line, expert, what's-included, itinerary), 0 console errors; listing loads with 0 errors.

## Egypt detail page – rounds 5–7 (2026-06, latest)
- Header: title → one row of chips on desktop (11 days, 5 cities Deep Water; Culture/Honeymoon/Luxury white with Ink border) → Route line (Ink chips with Dusk pin, Lagoon chevrons, testids eg-detail-route-line-chip-i). Route code REMOVED (user). Breadcrumb hidden on mobile.
- Gallery: mobile = single swipeable image row with dots (debounced active dot); desktop = 5-image grid, gallery button + image click open `Lightbox` (exported from EgyptRoute, `start` prop).
- CTA copy everywhere "Customise this trip" (detail.cta; EgyptReviews `cta` prop). Sticky bar: bigger price + h-14 CTA. Price-card CTA h-14.
- What's included: 6th block "Customisation" (mobile) / "Expert customisation" (desktop) via services [label, icon, long].
- Itinerary: stop header = name + Lagoon Day pill; subtitle rendered as Ink route chips; bullets 16px with BulletMark (flight = Lagoon plane, transfer = Amber car, else Dusk dot); Customise pills = Ember; "Tour summary"/"View tour summary" button = Deep Water gradient; activity/accommodation text never clamped.
- Tour summary (renamed from "The route at a glance"): labels "Accommodation"/"Key highlights"; mobile rows stacked with Lagoon day pill + Dusk left rule; desktop table with Lagoon day pills. "Hide tour summary".
- Sidebar (desktop): sticky aside (max-h 100vh, internal scroll) with PriceCard + ExpertsCard (experts on the RIGHT per user); mobile experts card in main column (eg-detail-experts-mobile).
- Palette rule (user): no Blush/"stale pink" on detail page; `.eg-arrow` now Sky/Harbor (hover Dusk). Use brand-kit colours: Ink chips, Lagoon days, Ember accents, Amber transfers, Dusk neutrals.
- Tested: iteration_25 (found reviews CTA → fixed), 26 (dot index → fixed), 27 – all pass (1440 + 390).

## 2026-06 — Nav mega-menus (Destinations + Themes)
- Header desktop nav restructured to: Destinations (mega-menu) · Themes (mega-menu) · Deals · About us · Expert advice.
- Destinations mega-menu: region list (from destinationsData.js) + country grid; Egypt→/afrika/aegypten, Sri Lanka & Asia→/asien, others '#'.
- Themes mega-menu: groups Adventure / Travel styles / Culture & cities / Nature & water + featured Egypt honeymoons card. Items deep-link to /afrika/aegypten/holidays/<style> where a match exists.
- New files: src/themesData.js, src/components/DesktopMenus.jsx. Mobile drawer updated with Themes level (src/components/MobileDrawer.jsx).
- Deals page intentionally left out per user.

## 2026-06 — New Thailand product: Siam Splendour (portrait reel hero)
- Built from user ZIP (PDF + 6 portrait photos + 6 portrait reels + 9 hotel photos). Assets are Hi Tours-owned, served from `/public/thailand/` (photos → webp ≤1200px; reels re-encoded 960p H.264 CRF27 + VP9 webm fallback, muted; posters). Source ZIP kept only in /tmp (not in repo).
- `src/thailandData.js`: slug `siam-splendour-thailand`, region asia, `media: 'portrait'`, title "Siam Splendour: 9-Day Thailand Odyssey" (user choice), price ₹63,650 ORIGINAL price (user choice – not the 10% discounted ₹57,285), 9 days / 4 cities, stats 3 hotels · 14 activities · 2 flights + 4 transfers · 9 meals, route A Bangkok D1–3 · B Chiang Mai→Chiang Rai→Doi Inthanon D3–6 · C Phuket→Phi Phi D6–9, glance 9 day rows, expert Ananya Iyer (/team/asia-2). `reels[]` = [reel4 Phi Phi video, Grand Palace, Doi Inthanon, reel2 Elephant video, Wachirathan, Karen village, Kinnari dance] (user: 2 reels).
- NEW `components/egypt/ReelGallery.jsx`: adaptive hero used ONLY when `detail.media === 'portrait'` (Head in EgyptDetail.jsx picks ReelGallery vs Gallery). Ink strip, 9:16 rounded tiles (h 440 mobile / 464 desktop), snap-scroll, staggered eg-rise entrance, captions on gradient scrim, "Reel" glass badge, shared mute toggle, IntersectionObserver play/pause, desktop edge-aware arrows, "N photos" button top-right → Lightbox (`portrait` prop added to Lightbox in EgyptRoute.jsx), mobile dots.
- Rest of the page = shared template unchanged. Egypt + Sri Lanka pages untouched (Sri Lanka keeps Vimeo gallery).
- Asia listing: Thailand card is now first; Destinations mega-menu + mobile drawer 'Thailand' → the product page.
- Remaining reels (reel1 dance, reel3 temples, reel5/6 waterfalls) are in /public/thailand but NOT used (user chose not to inline them in stops).
- Tested: iteration_32 – all frontend checks pass (1440 + 390), videos play (webm in headless), lightbox, arrows, regressions on Egypt/Sri Lanka/Asia listing.
- FIX (user: "first two should be reels, rest photos"): ReelGallery now = 2 portrait reels (left, 9:16, h-400) + standard 2×2 landscape photo grid (desktop); mobile = swipe row: 2 reels (62% width) then full-width photos, dots. `detail.gallery` (8 photos incl. hotels) feeds the grid/lightbox; `reels[]` holds only the 2 videos. Verified by screenshot 1440 + 390, videos playing.

## 2026-06 — Nav redesign, About us + Hi Tours Care pages, itinerary fix
- Header: 'Deals' REMOVED (user). Nav = Destinations · Themes · About us (→ /about) · Expert advice. Mobile drawer: Deals removed; About us → /about, Press → /about, Hi Tours Care → /care.
- Destinations mega-menu (DesktopMenus.jsx): region list (200px) + pictorial 4/5-col country image tiles (4:3, gradient + name), region tagline, 'View all Asia holidays', featured card (xl, first country with a page). Sri Lanka → its product page, Thailand → its product page, Egypt → listing.
- Themes mega-menu: 4 groups, each item = 56×44 thumb (from destinationsData) + label; blurbs and featured card removed (user: less cluttered, pictorial). themesData.js items now carry `image`.
- NEW `/about` (pages/About.jsx + aboutData.js): tourlane.com about-us + press merged. Order: collage hero (Egypt + Phi Phi) → H1 'When travel means the world to you' → About Hi Tours (3 paras + press email PLACEHOLDER press@hitours.in) → Media kit (founder quote, founder PLACEHOLDER 'Vikram Nair' /team/asia-3, 3-slide carousel, Download media kit '#') → 'backed/trusted' block (IATA partner quote PLACEHOLDER copy + Tourlane CDN portrait) → office photo (Tourlane CDN, PLACEHOLDER) → Recognised by (ISO/IATA/Travelife/Tripadvisor badges) → Why choose (3 alternating rows, Tourlane CDN images) → 3 steps → CTA band → 9 destination cards → 12-item FAQ. Copy in Hi Tours voice (1995, 4,00,000+ travellers, ISO 45001).
- NEW `/care` (pages/Care.jsx + careData.js): mirrors tourlane.com/tourlanecare. Tiers = **Hi Tours Assure** (included: changes ≤30 days ₹2,500 p.p. admin fee; cancellation 25/50/75/90/100% at 45+/44–30/29–15/14–7/<7 days) and **Hi Tours Flex** (flat ₹4,999 p.p., ₹9,999 long-haul/luxury; one-time free change + free land-package cancellation ≤30 days; land only, safari lodges excluded; non-insurance disclaimer). Comparison graphic built in HTML (table), ISO 45001 dark section with user-supplied pitch copy, CTA card.
- EgyptRoute StopCarousel: `md:h-auto md:min-h-[268px] md:self-stretch` + row `md:items-stretch` → stop image always matches bullet-column height (Thailand Bangkok stop 396px).
- Tested: iteration_33 – 100% frontend pass (desktop + mobile, all pages, menus, regressions).
- About tweaks (user): removed 'Experience the best of Asia & Africa' grid and the 'Hi Tours media kit' title; CTA band replaced with the homepage `AdventureCTA` ("Start your next adventure" search banner). Homepage Destinations: country cards use COUNTRY_HREF (Egypt/Thailand/Sri Lanka), 'View all Asia holidays' pill under the grid (REGION_HREF – only Asia has a page); Destinations mega-menu region buttons navigate when a region page exists (Asia → /asien). Verified via screenshots.

## 2026-06 — 7 new Egypt products from uploaded ZIP (Archive.zip)
- User uploaded Archive.zip = 7 tour folders (each = one Egypt product). Task: extract images + content, build detail pages "nicely" using the EXISTING template — do NOT change any landing/detail design.
- Owned images extracted, converted to webp (max-width 1400, q82) → `/app/frontend/public/egypt-tours/<slug>/` (~9.6 MB total). Source ZIP kept only in /tmp (not in repo).
- 7 new data files in `/app/frontend/src/tours/` (each exports detail/route/glance/crumbs/cardImages, same schema as moroccoEgyptData.js). Prices = the 10% "Massi"-discounted INR from each package:
  - `egypt-grand-festival` — Egypt Grand Festival (5d, Cairo/Giza/Saqqara/Memphis/Alexandria) ₹36,621 — egyptGrandFestivalData.js
  - `misr-maya-nile-cruise` — Misr Maya: Cairo/Aswan/Luxor + 5★ Nile cruise (8d) ₹2,40,912 — misrMayaData.js (only 3 photos + map in source; images reused across stops)
  - `misr-ka-jaadu` — Misr Ka Jaadu: Pyramids, Nile cruise & Pharaohs (8d, +Alexandria) ₹2,02,490 — misrKaJaaduData.js (13 photos)
  - `nile-pharaohs-voyage` — Nile Pharaohs' Voyage: Luxor→Aswan cruise (5d) ₹72,448 — nilePharaohsData.js (25 photos)
  - `pharaohs-feluccas` — Pharaohs & Feluccas (8d, +Abu Simbel, felucca) ₹3,82,878 — pharaohsFeluccasData.js
  - `nile-darshan` — Nile Darshan: Royal Odyssey (9d, +Hurghada/Red Sea) ₹99,091 — nileDarshanData.js
  - `nile-noor-cruise` — Nile Noor: 4-day Aswan→Luxor cruise ₹65,486 — nileNoorData.js
- Wiring: `EgyptDetail.jsx` BY_SLUG now has 11 slugs (7 new imported from src/tours/). `egyptListingData.js` `products` array: the 6 fake placeholder cards (rundreise-*, urlaub-am-meer, etc.) REPLACED by the 7 new real products (kept luxor-strand-urlaub + morocco-egypt) → 9 products total. Expert = shared Ria Banerjee for all.
- Egypt landing `/afrika/aegypten` shows top 6 by original design (`products.slice(0,6)` in EgyptListing.jsx) + "View all" → `/holidays` shows all 9. Left as-is (do-not-change-design). All 9 reachable via /holidays and direct `/afrika/aegypten/<slug>`.
- Legacy `egyptData.js` still references old placeholder slugs but is unused (only imported by unused TourDetail.jsx) — harmless.
- Tested: iteration_34 – all 7 new detail pages + 2 regressions pass (titles, tabs, included tiles, expert, glance, 0 broken images, 0 console errors, no overflow 1920/390); /holidays shows 9 cards.

## 2026-09-24 — Homepage "Start your next adventure" banner
- Replaced the two Tourlane imgix collage images with user-supplied banner (cut into transparent left/right clusters): `/public/home/adventure-left.webp`, `/public/home/adventure-right.webp`, referenced from `mock.js` (`adventure.images`).
- `AdventureCTA.jsx` layout/width/style untouched.

## 2026-09-28 — Homepage content swaps + About page rebuild
- Newsletter banner: user birds (left) + family/palms (right) cutouts in /public/home/newsletter-*.webp.
- Experts: 7 Drive portraits in /public/experts/, names/roles updated (Gurpreet, Karan Malhotra/Egypt, Aditya, Rahul/Switzerland, Sharon/Thailand, Raghav/Italy, Riya/Vietnam), Karan 5th.
- Ambassadors ("Talking Travel with Hi Tours"): single slide /public/home/on-the-road.webp, both arrows removed.
- Moments: 10 Drive photos (/public/moments/, object-contain) + testimonial lines/names from user sheet.
- Features ("planned by pros"): 3 Drive line icons /public/pros-*.png.
- About page (/about) rebuilt as 1:1 copy of tourlane.com/about-us (brand swapped to Hi Tours): hero collage, Welcome, Recognized by (CNBC/Forbes/Lonely Planet + BBB/ASTA), Why Choose, 3 step cards, AdventureCTA with "Start planning your own Hi Tours" heading (AdventureCTA now accepts `heading` prop), destination carousel (Hi Tours destinations), 12 FAQs. Old media-kit/backed/office sections removed. aboutData.js rewritten.
- Footer "Hi Tours" column: "About us" link (-> /about) added first; Footer supports FOOTER_HREFS map.

## 2026-09-29 — Vietnam destination landing (data-driven template)
- Egypt listing refactored into shared template `pages/DestinationListing.jsx` (takes `d` data object). `EgyptListing.jsx` is now a thin wrapper passing egyptListingData. EgyptHero/StickyTabs, EgyptPlan, EgyptFaq, MobileToursBars accept data props (Egypt defaults).
- New `/asien/vietnam` (VietnamListing.jsx + vietnamListingData.js): Vietnam hero (Ha Long Bay), intro/expert quote (Riya), 6 Vietnam products (link to /asien — no detail pages yet), planner, 3 reviews, "Discover these places in Vietnam" (Hanoi, HCMC, Ha Long Bay, Da Nang, Hoi An, Sapa), activities, plan, 8 guide/inspiration tiles, FAQ, "More destinations in Asia" (Japan, Thailand, Indonesia, Sri Lanka, Maldives, Cambodia, Malaysia, Singapore, Philippines). Section titles derive from destination.name/continent.
- Vietnam linked from Destinations mega menu / mobile drawer and About page carousel.
- Homepage tweaks: Moments cards use object-cover, 12px text; "Talking Travel" collage edge-to-edge; "planned by pros" sketch icons (Drive).
- Tested: iteration_35 all pass (Vietnam + Egypt regression).

## 2026-09-29 — WorkDrive Vietnam packages (data-only)
- Source: user ZIP of Zoho WorkDrive (7 AVEX Vietnam quotation PDFs + Vietnam Price.docx). Folder contained ONLY Vietnam packages.
- New structured model `src/vietnamPackages.js` (destination → packages[] → itinerary days, stays/hotels, seasonal INR pricing by star category, inclusions, exclusions, gallery). Adapters in `src/tours/vietnamToursData.js` produce listing cards + detail-template data. Replaced the 6 placeholder Vietnam tours with the 7 real packages (slugs: hanoi-sapa-5d4n, north-vietnam-ninh-binh-6d5n, north-vietnam-6d5n, north-central-vietnam-highlights-6d5n, vietnam-highlights-reverse-halong-8d7n, north-central-vietnam-phu-quoc-8d7n, vietnam-full-package-9d8n).
- Vietnam holidays page /asien/vietnam/holidays(+/:style) via parametrised EgyptHolidays (d prop). Detail pages use Vietnam planner + Vietnam recommendations. Inclusions/exclusions/seasonal pricing surface inside the existing Tour summary "Read more" text (no UI change). PDF covers saved to /public/vietnam-packages/.
- Prices shown = 3-star September INR (per person, double sharing) from Vietnam Price.docx. Supplier USD quotes kept in data (pricing.supplier).
- Tested: iteration_36 all pass.

## 2026-09-29 — Sri Lanka destination landing
- New `/asien/sri-lanka` (SriLankaListing.jsx + srilankaListingData.js) on the shared DestinationListing template; `/asien/sri-lanka/holidays(+/:style)` via EgyptHolidays. Places: Colombo, Kandy, Ella, Galle, Sigiriya, Nuwara Eliya, Bentota. Related: Asia (Vietnam, Thailand linked).
- Existing Emerald Isle Explorer package preserved: same slug/href/data (referenced from asiaListingData; only `styles` added). Sri Lanka country links (menus, homepage cards, search, About, Asia listing tile) now point to /asien/sri-lanka; package URL unchanged.
- Tested: iteration_37 all pass.

## 2026-09-29 — Sri Lanka PDF packages + destination-aware detail sections
- 4 Hi Tours quotation PDFs → `src/srilankaPackages.js` (same model as Vietnam) + adapters `tours/srilankaToursData.js` (generic `createAdapters` now lives in vietnamToursData.js). Slugs: sri-lanka-hill-stations-heritage-forts-6d5n (₹43,199), sri-lanka-ancient-citadels-coastal-paradises-7d6n (₹98,998), sri-lanka-cultural-coastal-journey-6d5n (₹84,998), sri-lanka-culture-coast-colonial-charm-5d4n (₹66,598). Prices = per person double sharing, Nov–19 Dec 2026, excl. GST (from PDFs). PDF photos saved to /public/srilanka-packages/.
- Emerald Isle Explorer preserved as card #1 and detail page untouched.
- EgyptDetail now resolves destination (`destinationFor`) → planner heading/bg, reviews heading/count/items, recommended pool (Vietnam / Sri Lanka / Thailand / Morocco / Egypt fallback).
- Tested: iteration_38 all pass.
- 2026-09-29: +2 Sri Lanka packages from PDFs: sri-lanka-urban-vibes-southern-shores-5d4n (₹69,200; Best Western + Club Bentota) and sri-lanka-premium-urban-explorations-watersports-5d4n (₹70,598; Morven Hotel + EKHO Surf). Sri Lanka now = Emerald Isle + 6 PDF packages (7 total). Self-tested: cards, detail pages, lazy-load on holidays page.
- 2026-09-29: Holidays-page customer reviews block (EgyptCustomerReviews) now takes `data`; Sri Lanka/Vietnam listing data export `customerReviews` (heading, summary, photos, expert, 3 items). Testing agent fixed a scope bug (ReviewCard readMore/readLess props). iteration_39 pass.

## 2026-09-29 — "Design Your Escape" lead popup
- Detail-page CTAs (sidebar price card + sticky bar) relabelled "Design Your Escape" (same eg-btn-filled style) and open reusable `components/egypt/DesignEscapeModal.jsx`. Destination auto-detected via `destinationFor(detail)` (Sri Lanka / Vietnam / Egypt / Thailand / Morocco) and shown read-only. Validation inline; Esc / overlay / × close; body scroll locked while open.
- Backend: LeadCreate/Lead gained `destination` field; POST /api/leads stores {name, phone, email, destination, trip_title, source:"design-your-escape"} in Mongo `leads`; GET /api/leads lists.
- Tested: iteration_40 all pass (4 destinations, validation, persistence, mobile).
- 2026-09-29: DesignEscapeModal visual upgrade: two-panel (46% destination image = itinerary gallery[0] with gradient + "PLAN YOUR ESCAPE / <Destination>" label; form panel), 960px max, rounded-3xl, white glass close button; mobile = image top (200px) + scrollable form. Logic/testids unchanged.
- 2026-09-29: DesignEscapeModal backdrop only: replaced flat dark-grey look (root `.eg` cream bg + 60% navy) with live blurred page — `.dye-backdrop` = rgba(0,33,49,.28) + backdrop-filter blur(12px) saturate(1.15), fade-in; `.eg.dye-root` bg transparent; `@supports not` fallback 55% tint (index.css). Form card untouched. Verified via screenshot desktop+mobile.


## 2026-09-29 — Kraya CRM lead sync
- `POST /api/leads` now forwards every lead server-side to Kraya (`KRAYA_API_KEY`, `KRAYA_LEADS_URL` in backend/.env, never in frontend). Payload: name, phone (country_code+phone), email, Destination, stage "New Lead", pipeline "Leads".
- Server validation (name/phone/email/destination → 400 with user-facing message); planner leads without destination fall back to trip_title/source.
- Kraya failure → lead stored with `kraya_status: failed` and 502 returned; DesignEscapeModal shows the server message instead of success. Duplicate guard: same email+phone+destination synced within 2 min returns the existing lead (no second Kraya call); modal also ignores clicks while sending.
- Verified: one controlled UI submission ("Hi Tours Website Test", website-test@hitours.in) → Kraya 200 OK; double-click created one lead; error path confirmed with an invalid URL. `.env` added to .gitignore.

- 2026-09-29: Removed "Customise hotels" / "Customise activities" orange pill CTAs from itinerary route sections site-wide (`EgyptRoute.jsx` SectionHead, `egyptDetailData.js` accommodationCta/programCta). Headings unchanged.

- 2026-09-29: DesignEscapeModal images swapped to Drive folder assets (Egypt.png/Vietnam.png/Sri Lanka.png → `/public/escape/*.webp`, 1400x1750). `escapeImage(destination, fallback)` in the modal picks by normalised destination name; other destinations (Thailand, Morocco…) fall back to the itinerary gallery[0] as before. Form untouched. Verified all 3 destinations desktop + mobile.

- 2026-09-29: Egypt package (itinerary) pages: review card images replaced with Drive assets (`/public/egypt/reviews/{camel,couple-pyramid,karnak-temple,luxor-balloon}.webp`). Wired in `EgyptDetail.jsx` (`egyptReviewItems`, Egypt-only). 3 cards → first 3 images in folder order; `luxor-balloon` unused. Listing pages & other destinations untouched. Verified via screenshot.

- 2026-09-29: Egypt review names → Swati / Rahul & Priya / Nancy (`egyptReviewItems` in egyptListingData; used by EgyptListing + Egypt package pages only). Sri Lanka review images → Drive assets `/public/sri-lanka/reviews/{ella,kandy-ella-train,beach,udawalawe}.webp` (first 3 used, folder order; `udawalawe` spare). ReviewCard now supports optional `pos` (objectPosition) per item; "Our customers about their Sri Lanka trip" photo strip pinned to old URLs (unchanged).

- 2026-09-29: Route-level `ScrollToTop` in App.js (useLocation → window.scrollTo(0,0) on pathname change; hash links exempt). Verified 6 client-side navigations from deep scroll positions all land at scrollY 0.

- 2026-09-29: Vietnam review images → Drive assets `/public/vietnam/reviews/{friends-trip,halong-bay-couple,hoi-an,vietnam}.webp` (first 3 used, folder order; `vietnam.webp` spare). Holidays-page customer photo strip pinned to old URLs.

- 2026-09-29: Feature-block vector icons (StarLike/Tickets/Destination.svg + homepage pros-*.png) replaced site-wide with Drive hand-drawn icons → `/public/pros/{experts,organised,easy}.png` (trimmed, transparent, 480px). Referenced from egyptListingData.features, egyptDetailData.brandFeatures, mock.js features. Vietnam review headline now centred "What customers say about booking Vietnam with Hi Tours" + count (DestinationListing passes `reviews.count`/centered when present). Vietnam names → Prajakta and Sneha / Shubham and Arpita / Apporva.

- 2026-09-29: Global floating WhatsApp widget (`components/WhatsAppWidget.jsx`, mounted in App.js) → wa.me/918920606060 with prefilled "Hi, I’d like to plan my dream trip. Can you help me?". Bottom offset via CSS var `--wa-bottom` (96px mobile / 32px desktop; `html.wa-lift` → 104px when package-page sticky bar is shown). Back-to-top buttons moved to bottom-LEFT on all pages to avoid overlap.

- 2026-09-29: Kraya payload extended: "Lead Source": "Website" (server-side constant), "Travel Dates" (`travel_dates`), "Traveller Count" (`traveller_count`, or derived from planner `passengers`). Phone normalised to digits only; 10-digit numbers get "91" prefix. Verified offline payload + one controlled live submission (Riya Sharma / Sri Lanka) → Kraya 200 synced.

- 2026-09-30: "Sort by" price pill (Price: low to high / high to low) added above the package grid on destination pages (DestinationListing → Egypt/Vietnam/Sri Lanka, AsiaListing). `SortPill`, `priceSorts`, `priceSortFns` exported from EgyptFilterBar.jsx (FilterPills gained `menuKeys`, `sortItems`, `alignRight` props). Sorts full destination catalogue then shows top 6. Holidays pages keep their existing 4-option sort.

- 2026-09-30: Hero "Plan for free" button + tagline removed from destination heroes (EgyptHero HeroCopy, AsiaHero). Global `LeadModalProvider` (components/egypt/LeadModalProvider.jsx, mounted in App.js) renders one DesignEscapeModal; pages register destination/image via `usePageLead()` (DestinationListing → last crumb, AsiaListing "Asia", EgyptHolidays → holidaysCrumbs[1], TripStyleListing → hero.h1, EgyptDetail → dest.name). "Plan for free now" (reviews CTA), desktop filter-bar CTA and mobile bottom CTA ("Plan your X trip") now call `openLead()`.

- 2026-09-30: DesignEscapeModal mobile: sheet fixed at 94vh, image panel 40% (object-contain, centered, blurred same-image fill behind), form 60% scrollable. Desktop unchanged (object-cover). "Start customising" CTAs → "Design Your Escape" in all data files (formTitle heading left as is).

- 2026-09-30: DesignEscapeModal mobile re-tuned for 9:16: sheet h-[calc(100dvh-12px)], image panel clamp(112px,18dvh,170px) full-width object-cover (no side bands), compact spacing (py-3, gap-2.5, inputs h-12, button h-12) so heading + 4 fields + CTA fit a ~700px viewport without scrolling (≈40px scroll on 640px). Desktop unchanged.

- 2026-09-30: DesignEscapeModal: added "Number of Travelers" (−/+ stepper, 1–20, default 2 → `traveller_count` "N travellers") and "When are you travelling?" (select: Within a week / 10 to 15 days / Within a month / Just exploring, required → `travel_dates`), in a 2-col row above Destination. Both flow to Kraya "Traveller Count"/"Travel Dates".
