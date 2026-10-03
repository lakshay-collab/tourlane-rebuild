// Thailand destination landing – same template/data shape as vietnamListingData (destination = Thailand, continent = Asia).
import { features, planner as egyptPlanner, reviews as egyptReviews, customerReviews as egyptCustomerReviews } from './egyptListingData';
import { thailandProducts } from './tours/thailandToursData';
import { IMG } from './thailandPackages';
import { detail as siamDetail } from './thailandData';

const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p) => `${CT}/${p}?w=1080&q=60&fm=webp`;

export const destination = { name: 'Thailand', continent: 'Asia', primary: ['Bangkok', 'Chiang Mai', 'Phuket', 'Krabi'] };

export const holidaysPath = '/asien/thailand/holidays';
export const holidaysCrumbs = [{ label: 'Home', to: '/' }, { label: 'Thailand', to: '/asien/thailand' }, { label: 'Thailand tours & holidays' }];

export const hero = {
  h1: 'Thailand Honeymoons and holidays',
  holidaysH1: 'Thailand tours & holidays',
  styleH1: (style) => `Thailand ${style.toLowerCase()} holidays`,
  tabAbout: 'About Thailand',
  tabTours: 'Thailand holidays',
  cta: 'Plan for free',
  stickyCta: 'Plan your Thailand trip',
  ctaHref: '/l/thailand/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made',
  image: ct('27MnAH4RS1zTSFygAmnq5i/97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg').replace('w=1080', 'w=2400'),
  imageAlt: 'Longtail boats on a turquoise Thai bay beneath limestone cliffs'
};

export const crumbs = [{ label: 'Destinations', href: '/destinations/' }, { label: 'Asia', to: '/asien' }, { label: 'Thailand' }];

export const intro = {
  h2: 'About Thailand',
  text: 'Thailand is the ultimate introduction to Southeast Asia: glittering temples and buzzing street-food markets in Bangkok, the cool green mountains and lanterns of Chiang Mai, and some of the most beautiful beaches on earth along the Andaman and Gulf coasts. Warm, welcoming and wonderfully easy to travel, it rewards first-timers and returning travellers alike.',
  more: ' A classic journey links Bangkok with the north around Chiang Mai and Chiang Rai, then flies south to the islands – Phuket, Krabi, Koh Samui and the Phi Phi Islands. Add an ethical elephant sanctuary, a longtail-boat day among limestone karsts and a Thai cooking class, and you have a trip that mixes culture, nature and pure relaxation. The tropical climate is warmest and driest from November to March, and with direct flights from India a rewarding itinerary fits into 7 to 14 days.',
  learnMore: 'Learn more',
  learnLess: 'Show less',
  quote: 'Do the Grand Palace first thing in the morning before the coaches arrive, then cool off with a longtail boat ride through Bangkok’s canals. And always leave a free day on the islands – after the temples you’ll want a slow morning by the sea.',
  quoteMore: 'My advice: give the north its due. The elephants, the White Temple and a Doi Inthanon national-park day are every bit as memorable as the beaches. Domestic flights make it easy to combine culture and coast without long road days.',
  readMore: 'Read more',
  readLess: 'Read less',
  expert: { image: '/team/asia-2.webp', name: 'Ananya', role: 'Travel expert for Thailand' }
};

export const tours = {
  h2: 'Top-selling Thailand holiday ideas',
  allH2: 'Thailand tours & holidays',
  styleH2: (style) => `Thailand ${style.toLowerCase()} holidays`,
  browse: (n) => `Browse ${n} package ${n === 1 ? 'idea' : 'ideas'}`,
  filterLabel: 'Travel style:',
  sortLabel: 'Sorted by:',
  filterBy: 'Filter by',
  sortBy: 'Sort by',
  empty: 'No holidays match this travel style yet – clear the filter to see all Thailand holidays.',
  viewAll: 'View all Thailand holidays',
  short: ['Embark on an ', ['unforgettable journey of discovery'], ' from the temples of Bangkok to the islands of the Andaman Sea – every Thailand holiday is tailor-made by our experts.'],
  intro: [
    ' Marvel at golden temples, the cool green north and turquoise island bays. Whether you are looking for a ', ['culture-and-beach odyssey, a northern explorer or an island honeymoon'], ' – our travel experts will be happy to advise you personally.'
  ],
  readMore: 'Read more',
  readLess: 'Read less'
};

// Existing "Siam Splendour" Thailand package → product card that opens its EXISTING detail page (/asien/siam-splendour-thailand).
const siamProduct = {
  slug: siamDetail.slug,
  title: siamDetail.title,
  tag: siamDetail.tag,
  styles: siamDetail.tags,
  days: siamDetail.stats.days,
  stops: siamDetail.stats.cities,
  cities: siamDetail.stats.cities,
  hotels: siamDetail.stats.hotels,
  activities: siamDetail.stats.activities,
  transfers: siamDetail.stats.transfers,
  meals: 9,
  price: siamDetail.price,
  alt: siamDetail.alt,
  images: siamDetail.gallery,
  href: `/asien/${siamDetail.slug}`
};

export const products = [siamProduct, ...thailandProducts];

export const planner = { ...egyptPlanner, h3: 'Plan your Thailand trip', bg: ct('SM5V0pOzqkcZYtxbL69wU/62ac1dea663f5d24355ac47b579002c5/THA_-_-FreedomBeach.png').replace('w=1080', 'w=2000') };

export const reviews = {
  h2: 'What customers say about booking Thailand with Hi Tours',
  count: 'based on 410 Thailand reviews',
  items: [
    { name: 'Rohan and Isha', title: 'Temples, elephants and islands – perfect', date: '10 May 2026', stars: 5, image: IMG.palace, text: 'Bangkok, Chiang Mai and Phuket flowed together perfectly. The elephant sanctuary and the Phi Phi speedboat day were unforgettable, and every flight and transfer was arranged for us.' },
    { name: 'Aditya and Sneha', title: 'A dream honeymoon', date: '21 April 2026', stars: 5, image: IMG.mayabay, text: 'Maya Bay, the limestone cliffs of Krabi and a private longtail at sunset – Hi Tours planned a flawless, romantic trip. We did nothing but enjoy.' },
    { name: 'The Menon family', title: 'The kids loved every minute', date: '3 April 2026', stars: 5, image: IMG.falls, text: 'The north was magical for the children – elephants, waterfalls and the night markets. Beautifully organised from the first temple to the last beach.' }
  ]
};

export const customerReviews = {
  ...egyptCustomerReviews,
  h2: 'Our customers about their Thailand trip',
  summary: 'Amazing Thailand trip – temples, the cool north, elephants and turquoise islands, all perfectly organised.',
  photos: [IMG.palace, IMG.falls, IMG.mayabay, IMG.phuket],
  planExpert: '/team/asia-2.webp',
  items: reviews.items.map((r) => ({ initial: r.name[0], name: r.name, date: r.date, title: r.title, source: 'Trustpilot', text: r.text }))
};

const placeList = [
  ['Bangkok', IMG.palace],
  ['Chiang Mai', IMG.falls],
  ['Phuket', IMG.phuket],
  ['Krabi', IMG.mayabay],
  ['Phi Phi Islands', IMG.freedom],
  ['Chiang Rai', IMG.wachi]
];
export const places = { h2: `Discover these places in ${destination.name}`, items: placeList.map(([title, image], i) => ({ title, alt: title, tag: null, href: `#place-${i}`, image })) };

export const activities = { h2: 'The best activities on your trip', items: [
  { href: '#', title: 'Island-hop the Andaman Sea by longtail boat', alt: 'Longtail boat at Maya Bay in the Phi Phi Islands, Thailand', tag: 'Beach', image: IMG.mayabay },
  { href: '#', title: 'Meet rescued elephants at an ethical sanctuary', alt: 'Elephant at a sanctuary near Chiang Mai, Thailand', tag: 'Nature', image: IMG.elephant }
] };

export const plan = {
  h2: 'How to plan your Thailand trip',
  intro: 'Thailand impresses with its extraordinary variety. Between the temples and street food of Bangkok, the cool green mountains of the north, ethical elephant encounters and the turquoise islands of the south, the country offers unforgettable experiences for culture-lovers, families and honeymooners alike. Experience Thailand your way with Hi Tours: safe, tailor-made and unforgettable.',
  more: 'Show more details',
  less: 'Show fewer details',
  sections: [
    { h4: 'Best time to travel & climate', text: 'Thailand is warm and tropical all year. The best time to visit is the cool, dry season from November to March. April and May are hottest, and the monsoon (June–October) brings short, heavy showers – the islands of the Gulf (Koh Samui) stay drier slightly later than the Andaman coast.', links: [['Best time to visit Thailand', '#'], ['Best time to visit Phuket', '#']] },
    { h4: 'Trip duration & route suggestions', text: '7 days cover Bangkok with either the north or the islands. 9 to 10 days combine Bangkok, Chiang Mai and a southern beach. 14 days link the capital, the north and two islands at a relaxed pace, with domestic flights keeping road days short.', links: [['Ideal trip duration', '#'], ['Thailand in 9 days', '#']] },
    { h4: 'Sights & culture', text: 'Highlights include the Grand Palace and temples of Bangkok, the lantern-lit old city and Doi Suthep of Chiang Mai, the White and Blue temples of Chiang Rai, Doi Inthanon National Park, and the beaches and limestone bays of Phuket, Krabi and the Phi Phi Islands.', links: [['Top sights in Thailand', '#'], ['Top activities in Thailand', '#']] },
    { h4: 'Activities & adventure', text: 'Island-hop by speedboat, snorkel and dive the Andaman Sea, meet rescued elephants at an ethical sanctuary, take a Thai cooking class, explore national parks and waterfalls, and wander the floating and night markets.', links: [['Activities in Thailand', '#'], ['Beaches in Thailand', '#'], ['Islands of Thailand', '#']] },
    { h4: 'Costs & budget', text: 'Thailand offers excellent value. Comfortable travel averages around ₹6,500 per person per day for 4-star hotels, meals and excursions. Luxury travellers with 5-star resorts, private tours and domestic flights should budget around ₹15,000 daily. Street food and local transport are famously inexpensive.', links: [['Thailand holiday costs', '#']] },
    { h4: 'Safety & entry', text: 'Indian passport holders can currently enter Thailand visa-free for stays of up to 60 days (subject to prevailing rules); you may need to complete an online arrival card before travel. Your passport must be valid for at least six months. Thailand is considered safe and very welcoming for travellers.', links: [['Travel advice', '#']] }
  ]
};

export const themes = { h2: 'Travel guide & inspiration', more: 'Show more', less: 'Show less', items: [
  { href: '#', title: 'The best time to visit Thailand', tag: 'Travel guide', icon: 'sun', image: IMG.natur },
  { href: '#', title: 'The ideal trip duration for Thailand', tag: 'Travel guide', icon: 'calendar', image: IMG.palace },
  { href: '#', title: 'Food in Thailand: top 10 dishes', tag: 'Inspiration', icon: 'food', image: IMG.buddha },
  { href: '#', title: 'The best sights in Thailand in 2026', tag: 'Inspiration', icon: 'landscape', image: IMG.khaosok },
  { href: '#', title: 'Top activities in Thailand', tag: 'Inspiration', icon: 'kayak', image: IMG.mayabay },
  { href: '#', title: 'The most beautiful islands in Thailand', tag: 'Inspiration', icon: 'beach', image: IMG.freedom },
  { href: '#', title: 'Ethical elephant encounters', tag: 'Inspiration', icon: 'island', image: IMG.elephant },
  { href: '#', title: 'Thailand holiday: costs at a glance', tag: 'Travel guide', icon: 'wallet', image: IMG.phuket }
].map((t) => ({ ...t, alt: t.title })) };

export const faq = {
  h2: 'Practical information for your trip',
  items: [
    { q: 'When is the best time to visit Thailand?', a: [
      'The best time to visit Thailand is the cool, dry season from November to March. April and May are hottest, while the monsoon from June to October brings short, heavy showers; the Gulf islands such as Koh Samui stay drier slightly later than the Andaman coast.',
      ['More information about the ', ['best time to visit Thailand', '#'], ' by season, region, type of trip, activities and more.']
    ] },
    { q: 'What is typical food in Thailand?', a: [
      'Thai cuisine is world-famous for its balance of sweet, sour, salty and spicy. Must-tries include pad thai, green and massaman curries, tom yum soup, som tam (papaya salad), mango sticky rice and endless street-food snacks. Markets and hawker stalls are the heart of the experience.'
    ] },
    { q: 'Do Indian citizens need a visa for Thailand?', a: [
      'Indian passport holders can currently enter Thailand visa-free for stays of up to 60 days (subject to prevailing government rules). You may need to complete an online arrival card before travel, and your passport must be valid for at least six months.',
      'Our travel experts will guide you through the latest entry requirements as part of your travel plan, so there are no surprises at the airport.'
    ] },
    { q: 'How is my trip protected if travel conditions change?', a: [
      'Many travellers want extra flexibility and security before booking. With Hi Tours Care Flex you can cancel or rebook your land programme up to 30 days before departure without giving a reason. Depending on the destination, further protection and flexibility options may apply.',
      'Hi Tours Care was developed to give travellers more flexibility and cover when travel conditions or personal circumstances change unexpectedly.',
      ['Find out more at: ', ['Hi Tours Care Flex', '#']]
    ] }
  ]
};

const asiaList = [
  ['Japan', ct('5E91LAbIo29xmfzemwDnnu/082cd826dbf9b2744cbcf00015005330/Japan_MtFuji.jpg')],
  ['Vietnam', ct('3Z7A5HXNMctqsB6GE2jphI/4cef5ccca7d896a0b4f88281499fec30/Halong_Bucht_Vietnam.jpg')],
  ['Sri Lanka', ct('6etzBcZlvbOLHqzCOq0NES/764d862634b04fbcd521a3ad01740f1d/iStock-1779897953.jpg')],
  ['Malaysia', ct('X7b0PdKpWDMzl19jytcJ6/d0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg')],
  ['Singapore', ct('4B5tE96BHxRVFYUVJQibEE/efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg')],
  ['Bhutan', 'https://images.unsplash.com/photo-1638246439638-b37095b34879?crop=entropy&cs=srgb&fm=jpg&q=85&w=1080'],
  ['Kazakhstan', 'https://images.unsplash.com/photo-1530480667809-b655d4dc3aaa?crop=entropy&cs=srgb&fm=jpg&q=85&w=1080'],
  ['Cambodia', ct('3zbplvZU8SZYLZqdmaPsZv/c16250ef83321324f10fbf00c9b058a1/Kambodscha_AngkorWat.jpg')],
  ['Maldives', ct('3hsuR5UvfamJlqKCTM81Ii/b43e484beb8b92c43047174a4a3e7be8/Maldiven__Holzsteg.jpg')]
];
const ASIA_HREF = { Vietnam: '/asien/vietnam', 'Sri Lanka': '/asien/sri-lanka', Malaysia: '/asien/malaysia', Singapore: '/asien/singapore', Kazakhstan: '/asien/kazakhstan', Bhutan: '/asien/bhutan' };
export const related = { h2: `More destinations in ${destination.continent}`, items: asiaList.map(([title, image]) => ({ title, alt: title, tag: null, href: ASIA_HREF[title] || '#', image })) };

export const thailand = {
  pageTitle: 'Thailand Honeymoons and holidays | Hi Tours',
  hero, crumbs, intro, tours, products, features, places, activities, themes, related, holidaysPath, holidaysCrumbs, plan, faq, planner,
  reviews: { ...egyptReviews, ...reviews }, customerReviews,
  plannerSource: 'thailand-planner'
};
