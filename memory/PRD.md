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
