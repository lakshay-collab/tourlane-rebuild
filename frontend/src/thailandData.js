// Thailand product for Hi Tours, built from the "Siam Splendour" upload package.
// All copy written in Hi Tours voice; imagery + reels are Hi Tours-owned assets in /public/thailand.

const P = (f) => `/thailand/${f}`;

const PHI = P('img4.webp');
const PALACE = P('img2.webp');
const FALLS = P('img5.webp');
const WACHI = P('img6.webp');
const ELEPHANT = P('img1.webp');
const DANCE = P('img3.webp');

const H = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => P(`hotel${n}.webp`));

export const cardImages = [PHI, PALACE, FALLS, ELEPHANT];

export const detail = {
  slug: 'siam-splendour-thailand',
  region: 'asia',
  media: 'portrait',
  listHref: '/asien',
  ctaHref: '/l/thailand/enquiry/passengers/',
  cta: 'Start customising',
  sub: 'Your travel plan – no obligation & tailor-made',
  banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Siam Splendour: 9-Day Thailand Odyssey',
  alt: 'Siam Splendour – Bangkok, Chiang Mai, Chiang Rai and Phuket in 9 days',
  days: '9 days',
  stations: '4 stops',
  transport: 'Domestic flights & private transfers',
  tag: 'Culture',
  price: 63650,
  routeCode: 'BKK-CNX-CEI-HKT · 9D',
  routeLabel: 'This holiday takes you to',
  routeCodeLabel: 'Route code',
  routeCities: ['Bangkok', 'Chiang Mai', 'Chiang Rai', 'Doi Inthanon', 'Phuket'],
  tags: ['Culture', 'Beach'],
  stats: { days: 9, cities: 4, hotels: 3, activities: 14, transfers: 4 },
  gallery: [PALACE, H[8], FALLS, H[5], DANCE, WACHI, ELEPHANT, PHI],
  reels: [
    { type: 'video', src: P('reel4.mp4'), webm: P('reel4.webm'), poster: P('reel4-poster.jpg'), label: 'Phi Phi Islands' },
    { type: 'video', src: P('reel2.mp4'), webm: P('reel2.webm'), poster: P('reel2-poster.jpg'), label: 'Elephant sanctuary, Chiang Mai' }
  ],
  services: [
    ['3 hotels', 'Accommodation'],
    ['14 activities', 'Activities'],
    ['2 flights + 4 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ananya Iyer',
    image: '/team/asia-2.webp',
    role: 'Thailand & Vietnam expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Three Thailands in nine days – the temples of Bangkok, the cool green north around Chiang Mai, and the turquoise bays of Phuket.',
    quoteMore: 'My tip: do the Grand Palace first thing in the morning before the coaches arrive, and keep day seven in Phuket completely free – after the north you will want a slow morning by the pool before the Phi Phi speedboat. Domestic flights are already built in, so no long road days.',
    more: 'Read more',
    less: 'Read less'
  }
};

export const route = {
  stops: [
    {
      letter: 'A',
      name: 'Bangkok',
      dayLabel: 'Day 1–3',
      bullets: [
        'Arrival at Suvarnabhumi Airport and transfer to your Bangkok hotel',
        'Guided city temples tour: the Royal Grand Palace and the Emerald Buddha (Wat Phra Kaew)',
        'The 46-metre Reclining Buddha at Wat Pho and the Marble Temple (Wat Benchamabophit)',
        'Optional: wander the old-town streets, riverside markets and Bangkok after dark',
        'Day 3: domestic flight from Bangkok to Chiang Mai (included)'
      ],
      images: [PALACE, H[2], H[0], H[1]],
      activities: [
        { name: 'Grand Palace & Emerald Buddha', description: 'Thailand’s most sacred temple complex – gilded spires, mosaic guardians and the revered Emerald Buddha.', optional: false, image: PALACE },
        { name: 'Wat Pho – the Reclining Buddha', description: 'One of Bangkok’s oldest and largest temples, home to the 46-metre golden Reclining Buddha.', optional: false, image: H[2] },
        { name: 'Wat Benchamabophit – the Marble Temple', description: 'Italian Carrara marble meets classic Thai architecture in this photogenic royal temple.', optional: false, image: H[0] },
        { name: 'Bangkok street & market wander', description: 'Explore the vibrant streets, historic quarters and local markets at your own pace.', optional: true, image: H[1] }
      ],
      accommodation: { name: 'Four Wings Hotel Bangkok 4★ (or JC Kevin Sathorn 4★ / The Sukosol 5★)', description: '2 nights · breakfast · 4★–5★', images: [H[0], H[1], H[2]] },
      program: { name: 'Temples of Bangkok', description: 'A gentle start in the capital, then a full day among the city’s three greatest temples before you fly north.', image: PALACE }
    },
    {
      letter: 'B',
      name: 'Chiang Mai',
      subtitle: 'Chiang Mai → Chiang Rai → Doi Inthanon',
      dayLabel: 'Day 3–6',
      bullets: [
        'Full-day Chiang Rai excursion: Maekhachan Hot Springs, the White Temple, the Blue Temple and the Black House',
        'Doi Inthanon National Park – Thailand’s highest peak, summit trails and the twin royal pagodas',
        'Jungle trek to a hidden waterfall, coffee plantations, flower farms and rice terraces',
        'Pagagayaw Karen hill-tribe village with a cup of freshly ground local coffee, then Wachirathan Waterfall',
        'Optional: half-day Elephant Sanctuary experience (USD 85 per person)',
        'Day 6: domestic flight from Chiang Mai to Phuket (included)'
      ],
      images: [FALLS, WACHI, DANCE, ELEPHANT, H[5], H[4]],
      activities: [
        { name: 'White Temple (Wat Rong Khun)', description: 'Chiang Rai’s dazzling all-white contemporary temple, mirrored in its own moat.', optional: false, image: H[3] },
        { name: 'Blue Temple & Black House', description: 'The sapphire-blue Wat Rong Suea Ten and the dark, eccentric Baan Dam Museum.', optional: false, image: H[4] },
        { name: 'Maekhachan Hot Springs', description: 'A natural geothermal stop on the road to Chiang Rai.', optional: false, image: H[5] },
        { name: 'Doi Inthanon summit & pagodas', description: 'Cool-air nature trails on Thailand’s highest peak and the Nophamaytanidol and Phra Mahatat Nopaphon Bhumisiri pagodas.', optional: false, image: FALLS },
        { name: 'Wachirathan Waterfall', description: 'A 70-metre curtain of white water and rainbow mist in the national park.', optional: false, image: WACHI },
        { name: 'Karen hill-tribe village & coffee', description: 'Walk through the Pagagayaw village and taste coffee grown and ground on the hillside.', optional: false, image: ELEPHANT },
        { name: 'Elephant Sanctuary half day', description: 'Dress in traditional Karen clothing, feed, walk and bathe rescued elephants, then share a traditional meal.', optional: true, image: ELEPHANT }
      ],
      accommodation: { name: 'Empress Chiang Mai 4★ (or De Charme 3★ / NA NIRAND Romantic Boutique Resort)', description: '3 nights · breakfast + 2 lunches · 3★–resort', images: [H[4], H[3], H[5]] },
      program: { name: 'The cool green north', description: 'Temples in three colours, a national-park day among waterfalls and hill tribes, and a chance to meet the elephants.', image: FALLS }
    },
    {
      letter: 'C',
      name: 'Phuket',
      subtitle: 'Phuket → Phi Phi Islands',
      dayLabel: 'Day 6–9',
      bullets: [
        'Arrive in Phuket and check in to your beach resort',
        'A free day for the beach, snorkelling, Cape Panwa Aquarium or Hanuman World ziplines',
        'Optional: Phi Phi, Maya Bay, Pileh Lagoon & Bamboo Island speedboat tour (USD 75 per person)',
        'Evenings of seafood dinners, night markets and Bangla Road',
        'Day 9: transfer to Phuket International Airport for your flight home'
      ],
      images: [PHI, H[8], H[6], H[7]],
      activities: [
        { name: 'Phi Phi Islands speedboat tour', description: 'Bamboo Island snorkelling, beach lunch on Phi Phi Don, Pileh Lagoon, Maya Bay, Monkey Beach and Viking Cave.', optional: true, image: PHI },
        { name: 'Beach day in Phuket', description: 'Sunbathe, swim or snorkel from your resort’s stretch of the Andaman coast.', optional: true, image: H[6] },
        { name: 'Cape Panwa Aquarium & Hanuman World', description: 'Marine life up close, or zipline through the rainforest canopy.', optional: true, image: H[8] },
        { name: 'Night market & seafood dinner', description: 'Browse a lively night market and feast on fresh Andaman seafood.', optional: true, image: H[7] }
      ],
      accommodation: { name: 'Kata Sea Breeze Resort (or The Old Phuket Resort / Avista Hideaway Patong 5★)', description: '3 nights · breakfast · resort–5★', images: [H[6], H[7], H[8]] },
      program: { name: 'Andaman beaches & Phi Phi', description: 'Three unhurried days on the coast to end the trip – a free beach day, the famous island speedboat run, and warm evenings in Phuket.', image: PHI }
    }
  ]
};

export const glance = {
  h2: 'Tour summary',
  short: 'Bangkok’s royal temples, the cool north around Chiang Mai and Chiang Rai, a national-park day at Doi Inthanon, and three days on the beaches of Phuket – 9 days, two domestic flights, no long road days.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'This journey strings together the three faces of Thailand. You begin in Bangkok with the Grand Palace, Wat Pho and the Marble Temple, then fly north to Chiang Mai for a day in Chiang Rai’s White, Blue and Black temples and a day on Doi Inthanon among waterfalls, hill tribes and coffee farms.',
  intro2: 'A second short flight lands you in Phuket for a free beach day, the optional Phi Phi Islands speedboat run and long, warm evenings before your flight home. Domestic flights, transfers, 8 nights and 9 meals are included.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Bangkok (arrival)', text: 'Land at Suvarnabhumi, transfer to your hotel and settle in – the evening is yours to explore.', hotel: 'Four Wings Hotel Bangkok 4★', highlights: ['Airport pick-up & transfer', 'Optional: Bangkok streets & markets'] },
    { title: 'Day 2: Bangkok city temples', text: 'A guided day through the Grand Palace, the Emerald Buddha, the Reclining Buddha at Wat Pho and the Marble Temple.', hotel: 'Four Wings Hotel Bangkok 4★', highlights: ['Grand Palace & Wat Phra Kaew', 'Wat Pho – Reclining Buddha', 'Marble Temple'] },
    { title: 'Day 3: Bangkok → Chiang Mai', text: 'Fly north to the old Lanna capital and check in to your Chiang Mai hotel.', hotel: 'Empress Chiang Mai 4★', highlights: ['Domestic flight BKK → CNX (included)', 'Transfer to hotel'] },
    { title: 'Day 4: Chiang Rai day trip', text: 'Hot springs on the way, then the White Temple, the Blue Temple and the Black House, with lunch included.', hotel: 'Empress Chiang Mai 4★', highlights: ['Maekhachan Hot Springs', 'White Temple (Wat Rong Khun)', 'Blue Temple (Wat Rong Suea Ten)', 'Black House (Baan Dam)'] },
    { title: 'Day 5: Doi Inthanon National Park', text: 'Summit views, royal pagodas, a jungle trek to a hidden waterfall, a Karen hill-tribe village and Wachirathan Waterfall.', hotel: 'Empress Chiang Mai 4★', highlights: ['Thailand’s highest peak & pagodas', 'Jungle waterfall trek', 'Karen village & local coffee', 'Wachirathan Waterfall'] },
    { title: 'Day 6: Chiang Mai → Phuket', text: 'An optional morning with the elephants, then fly south to the Andaman coast.', hotel: 'Kata Sea Breeze Resort', highlights: ['Optional: Elephant Sanctuary half day', 'Domestic flight CNX → HKT (included)'] },
    { title: 'Day 7: Phuket free day', text: 'Beach, snorkelling, the aquarium or ziplines – and a seafood dinner and night market in the evening.', hotel: 'Kata Sea Breeze Resort', highlights: ['Beach & snorkelling', 'Optional: Cape Panwa Aquarium / Hanuman World', 'Night market & Bangla Road'] },
    { title: 'Day 8: Phi Phi Islands', text: 'Optional speedboat day to Bamboo Island, Phi Phi Don, Pileh Lagoon, Maya Bay, Monkey Beach and Viking Cave.', hotel: 'Kata Sea Breeze Resort', highlights: ['Optional: Phi Phi speedboat tour', 'Maya Bay & Pileh Lagoon', 'Beach lunch on Phi Phi Don'] },
    { title: 'Day 9: Departure', text: 'A last swim or souvenir run, then a transfer to Phuket International Airport.', hotel: '—', highlights: ['Transfer to Phuket airport'] }
  ],
  outro: 'A compact first taste of Thailand – city, mountains and islands with domestic flights already taken care of.'
};

export const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Thailand', href: '/asien' },
  { label: 'Siam Splendour' }
];
