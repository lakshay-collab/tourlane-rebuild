// Maldives destination landing – same template/data shape as bhutanListingData (destination = Maldives, continent = Asia).
import { features, planner as egyptPlanner, reviews as egyptReviews, customerReviews as egyptCustomerReviews } from './egyptListingData';
import { maldivesProducts } from './tours/maldivesToursData';
import { IMG } from './maldivesPackages';

const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p) => `${CT}/${p}?w=1080&q=60&fm=webp`;
const wide = (base, w) => `${base}&w=${w}`;

export const destination = { name: 'Maldives', continent: 'Asia', primary: ['Malé', 'North Malé Atoll', 'Baa Atoll', 'Ari Atoll'] };

export const holidaysPath = '/asien/maldives/holidays';
export const holidaysCrumbs = [{ label: 'Home', to: '/' }, { label: 'Maldives', to: '/asien/maldives' }, { label: 'Maldives tours & holidays' }];

export const hero = {
  h1: 'Maldives Honeymoons and holidays',
  holidaysH1: 'Maldives tours & holidays',
  styleH1: (style) => `Maldives ${style.toLowerCase()} holidays`,
  tabAbout: 'About Maldives',
  tabTours: 'Maldives holidays',
  cta: 'Plan for free',
  stickyCta: 'Plan your Maldives trip',
  ctaHref: '/l/maldives/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made',
  image: wide(IMG.RAW.overwater, 2400),
  imageAlt: 'Overwater villas over a turquoise lagoon in the Maldives'
};

export const crumbs = [{ label: 'Destinations', href: '/destinations/' }, { label: 'Asia', to: '/asien' }, { label: 'Maldives' }];

export const intro = {
  h2: 'About the Maldives',
  text: 'The Maldives is a scatter of over a thousand coral islands strung across the Indian Ocean – a world of powder-white sand, glowing turquoise lagoons and some of the finest overwater villas on earth. It is the ultimate escape for honeymooners, divers and anyone dreaming of barefoot luxury, where each resort has its own private island.',
  more: ' Beyond the postcard beaches lies one of the planet’s richest marine worlds: coral reefs teeming with turtles and reef sharks, and seasonal gatherings of manta rays and whale sharks in Baa Atoll’s Hanifaru Bay. Island-hop by speedboat or scenic seaplane, visit a local island for a taste of Maldivian culture, or simply slow down to the rhythm of the tides. Trips are tailor-made and effortless, with 4 to 7 nights ideal for most travellers.',
  learnMore: 'Learn more',
  learnLess: 'Show less',
  quote: 'Choose your atoll to match your pace: North Malé is quick to reach by speedboat and great for a short break, while Baa and Ari atolls reward a seaplane transfer with world-class snorkelling and fewer crowds.',
  quoteMore: 'And don’t spend every day on the lounger – a sandbank picnic, a sunrise snorkel and a visit to a local island will give your trip real texture. The seaplane flight over the atolls is an experience in itself, so grab a window seat.',
  readMore: 'Read more',
  readLess: 'Read less',
  expert: { image: '/experts/riya.webp', name: 'Aisha', role: 'Travel expert for the Maldives' }
};

export const tours = {
  h2: 'Top-selling Maldives holiday ideas',
  allH2: 'Maldives tours & holidays',
  styleH2: (style) => `Maldives ${style.toLowerCase()} holidays`,
  browse: (n) => `Browse ${n} package ${n === 1 ? 'idea' : 'ideas'}`,
  filterLabel: 'Travel style:',
  sortLabel: 'Sorted by:',
  filterBy: 'Filter by',
  sortBy: 'Sort by',
  empty: 'No holidays match this travel style yet – clear the filter to see all Maldives holidays.',
  viewAll: 'View all Maldives holidays',
  short: ['Drift between ', ['private-island resorts and turquoise lagoons'], ' from overwater villas to vibrant coral reefs – every Maldives holiday is tailor-made by our experts.'],
  intro: [
    ' Snorkel with manta rays, dine on your own sandbank and fall asleep to the sound of the ocean. Whether you are looking for a ', ['romantic honeymoon, a family beach escape or a diving adventure'], ' – our travel experts will be happy to advise you personally.'
  ],
  readMore: 'Read more',
  readLess: 'Read less'
};

export const products = maldivesProducts;

export const planner = { ...egyptPlanner, h3: 'Plan your Maldives trip', bg: wide(IMG.RAW.lagoon, 2000) };

export const reviews = {
  h2: 'What customers say about booking the Maldives with Hi Tours',
  count: 'based on 310 Maldives reviews',
  items: [
    { name: 'Rhea and Arjun', title: 'The honeymoon of our dreams', date: '12 May 2026', stars: 5, image: wide(IMG.RAW.overwater, 600), text: 'Our overwater villa, the sunset cruises and the sandbank dinner were magical. Every detail, from the seaplane to the dining, was handled perfectly.' },
    { name: 'The Menon family', title: 'Paradise for the whole family', date: '26 April 2026', stars: 5, image: wide(IMG.RAW.island, 600), text: 'Snorkelling with turtles and the kids’ club made this unforgettable. The island-hopping itinerary from Hi Tours was flawlessly planned.' },
    { name: 'Dev', title: 'World-class diving and total calm', date: '5 April 2026', stars: 5, image: wide(IMG.RAW.lagoon, 600), text: 'The reefs and the manta rays in Baa Atoll were incredible, and the resort was pure serenity. Hi Tours made a complex trip completely effortless.' }
  ]
};

export const customerReviews = {
  ...egyptCustomerReviews,
  h2: 'Our customers about their Maldives trip',
  summary: 'Amazing Maldives trip – the overwater villa, the reefs and the sandbank dinner all perfectly organised and utterly relaxing.',
  photos: [wide(IMG.RAW.overwater, 600), wide(IMG.RAW.island, 300), wide(IMG.RAW.lagoon, 300), wide(IMG.RAW.beach, 450)],
  planExpert: '/experts/riya.webp',
  items: reviews.items.map((r) => ({ initial: r.name[0], name: r.name, date: r.date, title: r.title, source: 'Trustpilot', text: r.text }))
};

const placeList = [
  ['Malé', IMG.island],
  ['North Malé Atoll', IMG.overwater],
  ['Baa Atoll', IMG.reef],
  ['Ari Atoll', IMG.villa],
  ['Hanifaru Bay', IMG.lagoon],
  ['Maafushi', IMG.beach]
];
export const places = { h2: `Discover these places in the ${destination.name}`, items: placeList.map(([title, image], i) => ({ title, alt: title, tag: null, href: `#place-${i}`, image })) };

export const activities = { h2: 'The best activities on your trip', items: [
  { href: '#', title: 'Snorkel the house reef from your villa deck', alt: 'Snorkelling over a coral reef in the Maldives', tag: 'Snorkelling', image: IMG.reef },
  { href: '#', title: 'Seaplane over the turquoise atolls', alt: 'A seaplane over Maldivian atolls', tag: 'Adventure', image: IMG.seaplane }
] };

export const plan = {
  h2: 'How to plan your Maldives trip',
  intro: 'The Maldives impresses with its turquoise lagoons, overwater villas and world-class marine life. Between private-island resorts, coral reefs, sandbanks and local islands, the archipelago offers unforgettable experiences for honeymooners, families and divers. Experience the Maldives your way with Hi Tours: safe, tailor-made and unforgettable.',
  more: 'Show more details',
  less: 'Show fewer details',
  sections: [
    { h4: 'Best time to travel & climate', text: 'The best time to visit the Maldives is the dry season from November to April, with sunny skies and calm seas – ideal for diving and snorkelling. The wet season (May to October) brings occasional rain and better surf, as well as the chance to see manta rays and whale sharks in Baa Atoll. Temperatures stay warm year-round.', links: [['Best time to visit the Maldives', '#']] },
    { h4: 'Trip duration & route suggestions', text: '4 nights are perfect for a short romantic escape on a single island. 5 to 6 nights allow a more relaxed stay with excursions, while 7 nights or more let you island-hop between two atolls for beaches and world-class reefs.', links: [['Ideal trip duration', '#'], ['Maldives in 7 days', '#']] },
    { h4: 'Islands & marine life', text: 'Highlights include overwater villas in North Malé and Ari atolls, the UNESCO Biosphere Reserve of Baa Atoll, manta rays and whale sharks at Hanifaru Bay, reef sharks and turtles on the house reefs, and the colourful capital island of Malé.', links: [['Top islands in the Maldives', '#'], ['Top activities in the Maldives', '#']] },
    { h4: 'Activities & adventure', text: 'Snorkel and dive vibrant coral reefs, take a sunset dolphin cruise, picnic on a private sandbank, try jet-skiing, paddleboarding and fishing, and visit a local island to experience Maldivian culture and cuisine.', links: [['Activities in the Maldives', '#'], ['Diving in the Maldives', '#']] },
    { h4: 'Costs & budget', text: 'The Maldives is a premium destination. Comfortable overwater travel averages around ₹25,000 per person per day including villa, transfers and half-board, while four-star beach-villa resorts can be considerably less. Luxury resorts such as Soneva or the St. Regis should budget significantly more.', links: [['Maldives holiday costs', '#']] },
    { h4: 'Safety & entry', text: 'Indian passport holders receive a free 30-day visa on arrival in the Maldives; a passport valid for at least six months and a confirmed hotel booking are required. All resort and seaplane transfers are arranged by Hi Tours. The Maldives is one of the safest and most welcoming beach destinations in the region.', links: [['Travel advice', '#']] }
  ]
};

export const themes = { h2: 'Travel guide & inspiration', more: 'Show more', less: 'Show less', items: [
  { href: '#', title: 'The best time to visit the Maldives', tag: 'Travel guide', icon: 'sun', image: IMG.overwater },
  { href: '#', title: 'The ideal trip duration for the Maldives', tag: 'Travel guide', icon: 'calendar', image: IMG.island },
  { href: '#', title: 'Choosing the right Maldives atoll', tag: 'Inspiration', icon: 'island', image: IMG.lagoon },
  { href: '#', title: 'The best islands in the Maldives in 2026', tag: 'Inspiration', icon: 'landscape', image: IMG.villa },
  { href: '#', title: 'Top activities in the Maldives', tag: 'Inspiration', icon: 'kayak', image: IMG.reef },
  { href: '#', title: 'Diving & snorkelling in the Maldives', tag: 'Inspiration', icon: 'beach', image: IMG.beach },
  { href: '#', title: 'The Maldives for honeymooners', tag: 'Inspiration', icon: 'beach', image: IMG.seaplane },
  { href: '#', title: 'Maldives holiday: costs at a glance', tag: 'Travel guide', icon: 'wallet', image: IMG.sunset }
].map((t) => ({ ...t, alt: t.title })) };

export const faq = {
  h2: 'Practical information for your trip',
  items: [
    { q: 'When is the best time to visit the Maldives?', a: [
      'The best time to visit the Maldives is the dry season from November to April, with sunny skies and calm, clear seas – perfect for diving and snorkelling. The wet season (May to October) brings occasional showers and the chance to see manta rays and whale sharks in Baa Atoll.',
      ['More information about the ', ['best time to visit the Maldives', '#'], ' by season, type of trip, activities and more.']
    ] },
    { q: 'What is typical food in the Maldives?', a: [
      'Maldivian cuisine centres on fish and coconut. Signature dishes include mas huni (shredded tuna with coconut and chilli) eaten with roshi flatbread, garudhiya (a clear fish soup) and fihunu mas (grilled reef fish). Resorts also offer extensive international dining, from Japanese to Italian.'
    ] },
    { q: 'Do Indian citizens need a visa for the Maldives?', a: [
      'Indian passport holders receive a free 30-day tourist visa on arrival in the Maldives. You will need a passport valid for at least six months, a confirmed hotel/resort booking and a return ticket. Most travellers fly into Malé (Velana International Airport).',
      'Our travel experts handle all resort, speedboat and seaplane transfers as part of your travel plan, so there are no surprises on arrival.'
    ] },
    { q: 'How is my trip protected if travel conditions change?', a: [
      'Many travellers want extra flexibility and security before booking an island escape. With Hi Tours Care Flex you can cancel or rebook your resort stay up to 30 days before departure without giving a reason. Depending on the resort, further protection and flexibility options may apply.',
      'Hi Tours Care was developed to give travellers more flexibility and cover when travel conditions or personal circumstances change unexpectedly.',
      ['Find out more at: ', ['Hi Tours Care Flex', '#']]
    ] }
  ]
};

const asiaList = [
  ['Japan', ct('5E91LAbIo29xmfzemwDnnu/082cd826dbf9b2744cbcf00015005330/Japan_MtFuji.jpg')],
  ['Thailand', ct('27MnAH4RS1zTSFygAmnq5i/97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg')],
  ['Vietnam', ct('3Z7A5HXNMctqsB6GE2jphI/4cef5ccca7d896a0b4f88281499fec30/Halong_Bucht_Vietnam.jpg')],
  ['Sri Lanka', ct('6etzBcZlvbOLHqzCOq0NES/764d862634b04fbcd521a3ad01740f1d/iStock-1779897953.jpg')],
  ['Malaysia', ct('X7b0PdKpWDMzl19jytcJ6/d0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg')],
  ['Singapore', ct('4B5tE96BHxRVFYUVJQibEE/efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg')],
  ['Kazakhstan', 'https://images.unsplash.com/photo-1530480667809-b655d4dc3aaa?crop=entropy&cs=srgb&fm=jpg&q=85&w=1080'],
  ['Bhutan', 'https://images.unsplash.com/photo-1638246439638-b37095b34879?crop=entropy&cs=srgb&fm=jpg&q=85&w=1080']
];
const ASIA_HREF = { Vietnam: '/asien/vietnam', 'Sri Lanka': '/asien/sri-lanka', Thailand: '/asien/thailand', Malaysia: '/asien/malaysia', Singapore: '/asien/singapore', Kazakhstan: '/asien/kazakhstan', Bhutan: '/asien/bhutan' };
export const related = { h2: `More destinations in ${destination.continent}`, items: asiaList.map(([title, image]) => ({ title, alt: title, tag: null, href: ASIA_HREF[title] || '#', image })) };

export const maldives = {
  pageTitle: 'Maldives Honeymoons and holidays | Hi Tours',
  hero, crumbs, intro, tours, products, features, places, activities, themes, related, holidaysPath, holidaysCrumbs, plan, faq, planner,
  reviews: { ...egyptReviews, ...reviews }, customerReviews,
  plannerSource: 'maldives-planner'
};
