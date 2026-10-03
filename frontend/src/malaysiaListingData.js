// Malaysia destination landing – same template/data shape as vietnamListingData (destination = Malaysia, continent = Asia).
import { features, planner as egyptPlanner, reviews as egyptReviews, customerReviews as egyptCustomerReviews } from './egyptListingData';
import { malaysiaProducts } from './tours/malaysiaToursData';

const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p) => `${CT}/${p}?w=1080&q=60&fm=webp`;

export const destination = { name: 'Malaysia', continent: 'Asia', primary: ['Kuala Lumpur', 'Penang', 'Langkawi', 'Borneo'] };

export const holidaysPath = '/asien/malaysia/holidays';
export const holidaysCrumbs = [{ label: 'Home', to: '/' }, { label: 'Malaysia', to: '/asien/malaysia' }, { label: 'Malaysia tours & holidays' }];

export const hero = {
  h1: 'Malaysia Honeymoons and holidays',
  holidaysH1: 'Malaysia tours & holidays',
  styleH1: (style) => `Malaysia ${style.toLowerCase()} holidays`,
  tabAbout: 'About Malaysia',
  tabTours: 'Malaysia holidays',
  cta: 'Plan for free',
  stickyCta: 'Plan your Malaysia trip',
  ctaHref: '/l/malaysia/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made',
  image: ct('7v9STD4EzC9uO1vB6vl2SC/2d6be37e8ab85ac375ae2d2ac46ec9b0/Malaysia__Kuala_Lumpur__Petronas_Towers.jpg').replace('w=1080', 'w=2400'),
  imageAlt: 'The Petronas Twin Towers lit up above the Kuala Lumpur skyline, Malaysia'
};

export const crumbs = [{ label: 'Destinations', href: '/destinations/' }, { label: 'Asia', to: '/asien' }, { label: 'Malaysia' }];

export const intro = {
  h2: 'About Malaysia',
  text: 'Malaysia packs an entire continent into one country: gleaming skyscrapers in Kuala Lumpur, UNESCO-listed heritage streets in George Town, cool tea plantations in the Cameron Highlands and some of the oldest rainforest on earth in Borneo. Few destinations switch so easily between city buzz, mountain air and palm-fringed beaches – often within the same week.',
  more: ' The peninsula strings together naturally: Kuala Lumpur and its Petronas Towers, the food capital of Penang, the highlands and the islands of Langkawi and the Perhentians. Across the sea, Malaysian Borneo rewards travellers with orangutans at Sepilok, proboscis monkeys on the Kinabatangan River and the diving of Sipadan. The climate is warm and tropical year-round, and with direct flights from India a varied itinerary fits comfortably into 7 to 14 days.',
  learnMore: 'Learn more',
  learnLess: 'Show less',
  quote: 'Hungry in Kuala Lumpur and not sure where to start? Head for a buzzing hawker centre and order whatever the longest queue is for – nasi lemak, char kway teow or satay. For a few hundred rupees you will eat some of the best food in Asia.',
  quoteMore: 'My advice: give yourself time in both the peninsula and Borneo if you can. A morning with the orangutans at Sepilok or a river cruise on the Kinabatangan stays with you for years. And in George Town, simply get lost on foot – every lane hides a temple, a mural or a coffee shop that has been there for a century.',
  readMore: 'Read more',
  readLess: 'Read less',
  expert: { image: '/experts/riya.webp', name: 'Arjun', role: 'Travel expert for Malaysia' }
};

export const tours = {
  h2: 'Top-selling Malaysia holiday ideas',
  allH2: 'Malaysia tours & holidays',
  styleH2: (style) => `Malaysia ${style.toLowerCase()} holidays`,
  browse: (n) => `Browse ${n} package ${n === 1 ? 'idea' : 'ideas'}`,
  filterLabel: 'Travel style:',
  sortLabel: 'Sorted by:',
  filterBy: 'Filter by',
  sortBy: 'Sort by',
  empty: 'No holidays match this travel style yet – clear the filter to see all Malaysia holidays.',
  viewAll: 'View all Malaysia holidays',
  short: ['Embark on an ', ['unforgettable journey of discovery'], ' from the towers of Kuala Lumpur to the rainforests of Borneo – every Malaysia holiday is tailor-made by our experts.'],
  intro: [
    ' Marvel at heritage streets, cool tea country and island beaches. Whether you are looking for a ', ['city and culture tour, a highlands escape or a Borneo wildlife adventure'], ' – our travel experts will be happy to advise you personally.'
  ],
  readMore: 'Read more',
  readLess: 'Read less'
};

export const products = malaysiaProducts;

export const planner = { ...egyptPlanner, h3: 'Plan your Malaysia trip', bg: ct('6tQ0fuewJsT1XGyPtk1feM/46e2bf106f4544461abd40528a72610e/Sonnenaufgang_Wolken_Cameron-Highlands_Malaysia.png').replace('w=1080', 'w=2000') };

export const reviews = {
  h2: 'What customers say about booking Malaysia with Hi Tours',
  count: 'based on 360 Malaysia reviews',
  items: [
    { name: 'Rahul and Meera', title: 'An incredible trip through Malaysia', date: '7 May 2026', stars: 5, image: ct('7v9STD4EzC9uO1vB6vl2SC/2d6be37e8ab85ac375ae2d2ac46ec9b0/Malaysia__Kuala_Lumpur__Petronas_Towers.jpg').replace('w=1080', 'w=600'), text: 'Kuala Lumpur, the Cameron Highlands and Langkawi – every stop was perfectly organised. Flights, transfers and guides all worked flawlessly. We felt looked after from start to finish.' },
    { name: 'Sanjay and Divya', title: 'Borneo was the trip of a lifetime', date: '19 April 2026', stars: 5, image: ct('75OivhbWUIcq5PlUmpmA1j/30161b201b3fd087f637ed6b5cfb5ecd/Malaysia__Sabah__Sepilok-Orang-Utan-Rehabilitationszentrum.jpg').replace('w=1080', 'w=600'), text: 'Seeing the orangutans at Sepilok and cruising the Kinabatangan was unforgettable. Hi Tours arranged everything down to the last detail; we simply enjoyed the adventure.' },
    { name: 'Farah', title: 'Everything perfectly organised', date: '2 April 2026', stars: 5, image: ct('51tkEfILsnNr3oDIU4ElpU/bc3ac3dac83ed5c1f18aa7024e8f1c32/Malaysia__George_Town.jpg').replace('w=1080', 'w=600'), text: 'George Town and Penang’s food scene were the highlight. Thanks to the excellent local partner we could relax and enjoy, with time for spontaneous exploring too.' }
  ]
};

export const customerReviews = {
  ...egyptCustomerReviews,
  h2: 'Our customers about their Malaysia trip',
  summary: 'Amazing Malaysia trip – city, highlands and islands all perfectly organised, and every stop was a highlight.',
  photos: [ct('51tkEfILsnNr3oDIU4ElpU/bc3ac3dac83ed5c1f18aa7024e8f1c32/Malaysia__George_Town.jpg').replace('w=1080', 'w=600'), ct('6tQ0fuewJsT1XGyPtk1feM/46e2bf106f4544461abd40528a72610e/Sonnenaufgang_Wolken_Cameron-Highlands_Malaysia.png').replace('w=1080', 'w=300'), ct('551fN43gzcrBZuaq1Htm5G/7178fc9e6f18a09d653189847d195f8e/Strand_Malaysia.jpg').replace('w=1080', 'w=300'), ct('7v9STD4EzC9uO1vB6vl2SC/2d6be37e8ab85ac375ae2d2ac46ec9b0/Malaysia__Kuala_Lumpur__Petronas_Towers.jpg').replace('w=1080', 'w=450')],
  planExpert: '/experts/riya.webp',
  items: reviews.items.map((r) => ({ initial: r.name[0], name: r.name, date: r.date, title: r.title, source: 'Trustpilot', text: r.text }))
};

const placeList = [
  ['Kuala Lumpur', ct('7v9STD4EzC9uO1vB6vl2SC/2d6be37e8ab85ac375ae2d2ac46ec9b0/Malaysia__Kuala_Lumpur__Petronas_Towers.jpg')],
  ['Penang', ct('51tkEfILsnNr3oDIU4ElpU/bc3ac3dac83ed5c1f18aa7024e8f1c32/Malaysia__George_Town.jpg')],
  ['Cameron Highlands', ct('6tQ0fuewJsT1XGyPtk1feM/46e2bf106f4544461abd40528a72610e/Sonnenaufgang_Wolken_Cameron-Highlands_Malaysia.png')],
  ['Langkawi', ct('551fN43gzcrBZuaq1Htm5G/7178fc9e6f18a09d653189847d195f8e/Strand_Malaysia.jpg')],
  ['Ipoh', ct('X7b0PdKpWDMzl19jytcJ6/d0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg')],
  ['Borneo', ct('75OivhbWUIcq5PlUmpmA1j/30161b201b3fd087f637ed6b5cfb5ecd/Malaysia__Sabah__Sepilok-Orang-Utan-Rehabilitationszentrum.jpg')]
];
export const places = { h2: `Discover these places in ${destination.name}`, items: placeList.map(([title, image], i) => ({ title, alt: title, tag: null, href: `#place-${i}`, image })) };

export const activities = { h2: 'The best activities on your trip', items: [
  { href: '#', title: 'Rainforest trails and highland tea country', alt: 'Misty tea terraces of the Cameron Highlands, Malaysia', tag: 'Hiking', image: ct('6tQ0fuewJsT1XGyPtk1feM/46e2bf106f4544461abd40528a72610e/Sonnenaufgang_Wolken_Cameron-Highlands_Malaysia.png') },
  { href: '#', title: 'Island beaches from Langkawi to the Perhentians', alt: 'White-sand beach and turquoise water in Malaysia', tag: 'Beach', image: ct('551fN43gzcrBZuaq1Htm5G/7178fc9e6f18a09d653189847d195f8e/Strand_Malaysia.jpg') }
] };

export const plan = {
  h2: 'How to plan your Malaysia trip',
  intro: 'Malaysia impresses with extraordinary variety. Between the energy of Kuala Lumpur, the heritage of Penang, the cool highlands and the wild rainforests of Borneo, the country offers unforgettable travel experiences for every kind of traveller. Experience Malaysia your way with Hi Tours: safe, tailor-made and unforgettable.',
  more: 'Show more details',
  less: 'Show fewer details',
  sections: [
    { h4: 'Best time to travel & climate', text: 'Malaysia is warm and tropical all year. The west coast (Kuala Lumpur, Penang, Langkawi) is driest from December to April; the east coast islands are best from March to October; and Borneo can be visited year-round, with slightly drier weather from March to October. Brief afternoon showers are common and rarely spoil a day.', links: [['Best time to visit Malaysia', '#'], ['Best time to visit Langkawi', '#']] },
    { h4: 'Trip duration & route suggestions', text: '5 days cover Kuala Lumpur with a highlands or Penang add-on. 7 days link Kuala Lumpur, the Cameron Highlands and Penang or Langkawi. 10 days add a Borneo wildlife extension, while 14 days combine the peninsula with Sabah and Sarawak at a relaxed pace.', links: [['Ideal trip duration', '#'], ['Malaysia in 7 days', '#'], ['Malaysia in 10 days', '#']] },
    { h4: 'Sights & culture', text: 'Malaysia blends Malay, Chinese, Indian and colonial influences. Highlights include the Petronas Towers and Batu Caves in Kuala Lumpur, the UNESCO streets and street art of George Town, the tea plantations of the Cameron Highlands, the beaches of Langkawi and the rainforest and orangutans of Borneo.', links: [['Top sights in Malaysia', '#'], ['Top activities in Malaysia', '#']] },
    { h4: 'Activities & adventure', text: 'Trek the Mossy Forest of the Cameron Highlands, dive at Sipadan or the Perhentians, cruise the Kinabatangan River for wildlife, climb Mount Kinabalu, take a street-food tour in Penang or a city and temple tour in Kuala Lumpur.', links: [['Activities in Malaysia', '#'], ['Beaches in Malaysia', '#'], ['Wildlife in Borneo', '#']] },
    { h4: 'Costs & budget', text: 'Comfortable travel in Malaysia averages around ₹5,000 per person per day for 3- to 4-star hotels, meals and excursions. Luxury travellers with 5-star resorts, private tours and domestic flights should budget around ₹13,500 daily. Hawker food, taxis and entrance fees are very inexpensive.', links: [['Malaysia holiday costs', '#']] },
    { h4: 'Safety & entry', text: 'Indian passport holders can enter Malaysia visa-free for stays of up to 30 days (subject to current rules); registration via the Malaysia Digital Arrival Card is required before arrival. Your passport must be valid for at least 6 months. Malaysia is considered safe and very welcoming.', links: [['Travel advice', '#']] }
  ]
};

export const themes = { h2: 'Travel guide & inspiration', more: 'Show more', less: 'Show less', items: [
  { href: '#', title: 'The best time to visit Malaysia', tag: 'Travel guide', icon: 'sun', image: ct('7v9STD4EzC9uO1vB6vl2SC/2d6be37e8ab85ac375ae2d2ac46ec9b0/Malaysia__Kuala_Lumpur__Petronas_Towers.jpg') },
  { href: '#', title: 'The ideal trip duration for Malaysia', tag: 'Travel guide', icon: 'calendar', image: ct('7ESNSlcaBy677vvS6n9007/e39b7f110e4be76e4a4071d0e7f37973/Kuala_Lumpur_Malaysia.jpg') },
  { href: '#', title: 'Food in Malaysia: top 10 dishes', tag: 'Inspiration', icon: 'food', image: ct('51tkEfILsnNr3oDIU4ElpU/bc3ac3dac83ed5c1f18aa7024e8f1c32/Malaysia__George_Town.jpg') },
  { href: '#', title: 'The best sights in Malaysia in 2026', tag: 'Inspiration', icon: 'landscape', image: ct('6tQ0fuewJsT1XGyPtk1feM/46e2bf106f4544461abd40528a72610e/Sonnenaufgang_Wolken_Cameron-Highlands_Malaysia.png') },
  { href: '#', title: 'Top activities in Malaysia', tag: 'Inspiration', icon: 'kayak', image: ct('X7b0PdKpWDMzl19jytcJ6/d0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg') },
  { href: '#', title: 'The most beautiful beaches in Malaysia', tag: 'Inspiration', icon: 'beach', image: ct('551fN43gzcrBZuaq1Htm5G/7178fc9e6f18a09d653189847d195f8e/Strand_Malaysia.jpg') },
  { href: '#', title: 'Borneo wildlife insider tips', tag: 'Inspiration', icon: 'island', image: ct('75OivhbWUIcq5PlUmpmA1j/30161b201b3fd087f637ed6b5cfb5ecd/Malaysia__Sabah__Sepilok-Orang-Utan-Rehabilitationszentrum.jpg') },
  { href: '#', title: 'Malaysia holiday: costs at a glance', tag: 'Travel guide', icon: 'wallet', image: ct('24BB1qRdodIYm9e7lbZ9ae/c3e668ed13b3bab687aec1074f2a9d32/Malaysia__Kuching.jpg') }
].map((t) => ({ ...t, alt: t.title })) };

export const faq = {
  h2: 'Practical information for your trip',
  items: [
    { q: 'When is the best time to visit Malaysia?', a: [
      'Malaysia is a year-round destination. The west coast (Kuala Lumpur, Penang, Langkawi) is driest from December to April, the east coast islands are best from March to October, and Borneo is good all year with slightly drier conditions from March to October.',
      ['More information about the ', ['best time to visit Malaysia', '#'], ' by season, region, type of trip, activities and more.']
    ] },
    { q: 'What is typical food in Malaysia?', a: [
      'Malaysian cuisine is one of the most exciting in Asia, blending Malay, Chinese and Indian flavours. Try nasi lemak (coconut rice), char kway teow, satay, Penang laksa, roti canai and the famous durian. Hawker centres are the heart of the food scene and a highlight of any trip.'
    ] },
    { q: 'Do Indian citizens need a visa for Malaysia?', a: [
      'Indian passport holders can currently enter Malaysia visa-free for stays of up to 30 days (subject to prevailing government rules). You must complete the online Malaysia Digital Arrival Card before arrival and hold a passport valid for at least six months.',
      'Our travel experts will guide you through the latest entry requirements as part of your travel plan, so there are no surprises at the airport.'
    ] },
    { q: 'How is my trip protected if travel conditions change?', a: [
      'Many travellers want extra flexibility and security before booking a complex trip. With Hi Tours Care Flex you can cancel or rebook your land programme up to 30 days before departure without giving a reason. Depending on the destination, further protection and flexibility options may apply.',
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
  ['Singapore', ct('4B5tE96BHxRVFYUVJQibEE/efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg')],
  ['Indonesia', ct('61b5ymnc76Gat5QEm4R7Uv/236a66af31569408e5fba01e2dcb53b1/Kelingking_Beach__Nusa_Penida__Indonesien_NTCG__1_.png')],
  ['Maldives', ct('3hsuR5UvfamJlqKCTM81Ii/b43e484beb8b92c43047174a4a3e7be8/Maldiven__Holzsteg.jpg')],
  ['Cambodia', ct('3zbplvZU8SZYLZqdmaPsZv/c16250ef83321324f10fbf00c9b058a1/Kambodscha_AngkorWat.jpg')],
  ['Philippines', ct('1o2rtINxvG8y4nqhK5Bvgp/d09a493b9ea9c4db223ad37ba237b646/Philippinen_Palawan_Coron_Lagoone_TCG.png')]
];
const ASIA_HREF = { Vietnam: '/asien/vietnam', 'Sri Lanka': '/asien/sri-lanka', Thailand: '/asien/thailand', Singapore: '/asien/singapore' };
export const related = { h2: `More destinations in ${destination.continent}`, items: asiaList.map(([title, image]) => ({ title, alt: title, tag: null, href: ASIA_HREF[title] || '#', image })) };

export const malaysia = {
  pageTitle: 'Malaysia Honeymoons and holidays | Hi Tours',
  hero, crumbs, intro, tours, products, features, places, activities, themes, related, holidaysPath, holidaysCrumbs, plan, faq, planner,
  reviews: { ...egyptReviews, ...reviews }, customerReviews,
  plannerSource: 'malaysia-planner'
};
