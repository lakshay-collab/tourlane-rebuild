// Bhutan destination landing – same template/data shape as vietnamListingData (destination = Bhutan, continent = Asia).
import { features, planner as egyptPlanner, reviews as egyptReviews, customerReviews as egyptCustomerReviews } from './egyptListingData';
import { bhutanProducts } from './tours/bhutanToursData';
import { IMG } from './bhutanPackages';

const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p) => `${CT}/${p}?w=1080&q=60&fm=webp`;
const wide = (base, w) => `${base}&w=${w}`;

export const destination = { name: 'Bhutan', continent: 'Asia', primary: ['Paro', 'Thimphu', 'Punakha', 'Bumthang'] };

export const holidaysPath = '/asien/bhutan/holidays';
export const holidaysCrumbs = [{ label: 'Home', to: '/' }, { label: 'Bhutan', to: '/asien/bhutan' }, { label: 'Bhutan tours & holidays' }];

export const hero = {
  h1: 'Bhutan Honeymoons and holidays',
  holidaysH1: 'Bhutan tours & holidays',
  styleH1: (style) => `Bhutan ${style.toLowerCase()} holidays`,
  tabAbout: 'About Bhutan',
  tabTours: 'Bhutan holidays',
  cta: 'Plan for free',
  stickyCta: 'Plan your Bhutan trip',
  ctaHref: '/l/bhutan/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made',
  image: wide(IMG.RAW.tigersNest, 2400),
  imageAlt: 'The Tiger’s Nest monastery clinging to a cliff above the Paro valley, Bhutan'
};

export const crumbs = [{ label: 'Destinations', href: '/destinations/' }, { label: 'Asia', to: '/asien' }, { label: 'Bhutan' }];

export const intro = {
  h2: 'About Bhutan',
  text: 'Bhutan is the last great Himalayan kingdom – a land of cliff-top monasteries, fortress-like dzongs and deep green valleys fluttering with prayer flags. Famous for measuring Gross National Happiness rather than GDP, this carbon-negative country protects its culture and forests fiercely, making every visit feel rare, authentic and deeply peaceful.',
  more: ' The classic journey links the valleys of Paro, Thimphu and Punakha, crossing prayer-flag passes such as Dochula with its sweeping Himalayan views. The undisputed highlight is the hike to the Tiger’s Nest (Taktsang), clinging to a sheer cliff 900 m above Paro. Add the sacred Bumthang valleys for a deeper journey. Bhutan’s tourism is low-volume and tailor-made by design, so trips feel private and unhurried – and 5 to 9 days is ideal.',
  learnMore: 'Learn more',
  learnLess: 'Show less',
  quote: 'Save the Tiger’s Nest for the end of your trip – by then you’ll be acclimatised and the climb becomes a joy rather than a slog. Start early, take it slow, and pause at the cafeteria viewpoint for that first unforgettable look at the monastery.',
  quoteMore: 'And don’t just tick off the dzongs. Share butter tea with a farming family, spin a prayer wheel at a village temple and walk through the rice fields to Chimi Lhakhang. It’s these quiet moments, as much as the big sights, that make Bhutan unforgettable.',
  readMore: 'Read more',
  readLess: 'Read less',
  expert: { image: '/experts/riya.webp', name: 'Tenzin', role: 'Travel expert for Bhutan' }
};

export const tours = {
  h2: 'Top-selling Bhutan holiday ideas',
  allH2: 'Bhutan tours & holidays',
  styleH2: (style) => `Bhutan ${style.toLowerCase()} holidays`,
  browse: (n) => `Browse ${n} package ${n === 1 ? 'idea' : 'ideas'}`,
  filterLabel: 'Travel style:',
  sortLabel: 'Sorted by:',
  filterBy: 'Filter by',
  sortBy: 'Sort by',
  empty: 'No holidays match this travel style yet – clear the filter to see all Bhutan holidays.',
  viewAll: 'View all Bhutan holidays',
  short: ['Embark on an ', ['unforgettable Himalayan journey'], ' through the valleys of Paro, Thimphu and Punakha to the cliff-top Tiger’s Nest – every Bhutan holiday is tailor-made by our experts.'],
  intro: [
    ' Marvel at fortress-monasteries, prayer-flag passes and green Himalayan valleys. Whether you are looking for a ', ['romantic honeymoon, a cultural grand tour or a short Tiger’s Nest escape'], ' – our travel experts will be happy to advise you personally.'
  ],
  readMore: 'Read more',
  readLess: 'Read less'
};

export const products = bhutanProducts;

export const planner = { ...egyptPlanner, h3: 'Plan your Bhutan trip', bg: wide(IMG.RAW.punakha, 2000) };

export const reviews = {
  h2: 'What customers say about booking Bhutan with Hi Tours',
  count: 'based on 240 Bhutan reviews',
  items: [
    { name: 'Karan and Simran', title: 'The honeymoon of our dreams', date: '8 May 2026', stars: 5, image: wide(IMG.RAW.tigersNest, 600), text: 'The hike to the Tiger’s Nest, the dzongs and the Dochula Pass were magical, and our guide was wonderful. Every detail, including the visa and permits, was handled for us.' },
    { name: 'The Nair family', title: 'Peaceful, beautiful and so well run', date: '20 April 2026', stars: 5, image: wide(IMG.RAW.punakha, 600), text: 'Punakha Dzong and the valleys of Bumthang were unforgettable, and the children loved the suspension bridges. Flawless planning from flights to hot-stone baths.' },
    { name: 'Ananya', title: 'The Last Shangri-La lived up to its name', date: '2 April 2026', stars: 5, image: wide(IMG.RAW.prayerFlags, 600), text: 'From prayer-flag passes to quiet monasteries, Bhutan was pure serenity. Hi Tours made a complex trip completely effortless and safe.' }
  ]
};

export const customerReviews = {
  ...egyptCustomerReviews,
  h2: 'Our customers about their Bhutan trip',
  summary: 'Amazing Bhutan trip – the Tiger’s Nest, the dzongs and the Himalayan valleys all perfectly organised and deeply peaceful.',
  photos: [wide(IMG.RAW.tigersNest, 600), wide(IMG.RAW.punakha, 300), wide(IMG.RAW.prayerFlags, 300), wide(IMG.RAW.dzong, 450)],
  planExpert: '/experts/riya.webp',
  items: reviews.items.map((r) => ({ initial: r.name[0], name: r.name, date: r.date, title: r.title, source: 'Trustpilot', text: r.text }))
};

const placeList = [
  ['Paro', IMG.tigersNest],
  ['Thimphu', IMG.dzong],
  ['Punakha', IMG.punakha],
  ['Dochula Pass', IMG.prayerFlags],
  ['Bumthang', IMG.village],
  ['Himalayas', IMG.peaks]
];
export const places = { h2: `Discover these places in ${destination.name}`, items: placeList.map(([title, image], i) => ({ title, alt: title, tag: null, href: `#place-${i}`, image })) };

export const activities = { h2: 'The best activities on your trip', items: [
  { href: '#', title: 'Hike to the cliff-top Tiger’s Nest monastery', alt: 'The Tiger’s Nest monastery above Paro, Bhutan', tag: 'Hiking', image: IMG.tigersNest2 },
  { href: '#', title: 'Cross the prayer-flag Dochula Pass', alt: 'Colourful prayer flags on a Himalayan pass in Bhutan', tag: 'Culture', image: IMG.prayerFlags }
] };

export const plan = {
  h2: 'How to plan your Bhutan trip',
  intro: 'Bhutan impresses with its serenity, culture and unspoiled Himalayan landscapes. Between cliff-top monasteries, fortress dzongs, prayer-flag passes and green valleys, the kingdom offers unforgettable experiences for honeymooners, families and culture-lovers. Experience Bhutan your way with Hi Tours: safe, tailor-made and unforgettable.',
  more: 'Show more details',
  less: 'Show fewer details',
  sections: [
    { h4: 'Best time to travel & climate', text: 'The best times to visit Bhutan are spring (March–May), when rhododendrons bloom, and autumn (September–November), with clear skies and vibrant festivals (tshechus). Winters are cold but clear in the valleys; the monsoon brings rain from June to August. Days are mild and nights cool across the seasons.', links: [['Best time to visit Bhutan', '#']] },
    { h4: 'Trip duration & route suggestions', text: '5 days cover Paro and Thimphu with the Tiger’s Nest – perfect for a short escape or honeymoon. 6 to 7 days add Punakha across the Dochula Pass. 9 days reach the sacred Bumthang valleys by domestic flight for a deeper grand tour.', links: [['Ideal trip duration', '#'], ['Bhutan in 6 days', '#']] },
    { h4: 'Sights & culture', text: 'Highlights include the Tiger’s Nest (Taktsang), the dzongs of Paro, Thimphu and Punakha, the Buddha Dordenma statue, the Dochula Pass with its 108 chortens, Chimi Lhakhang and the temples of Bumthang. Colourful tshechu festivals and everyday Buddhist life bring the culture vividly to life.', links: [['Top sights in Bhutan', '#'], ['Top activities in Bhutan', '#']] },
    { h4: 'Activities & adventure', text: 'Hike to the Tiger’s Nest, trek the Himalayan trails, cross prayer-flag passes, raft the Mo Chhu river at Punakha, try archery (the national sport), relax in a traditional hot-stone bath and join a village temple visit or a tshechu festival.', links: [['Activities in Bhutan', '#'], ['Trekking in Bhutan', '#']] },
    { h4: 'Costs & budget', text: 'Bhutan is a premium, low-volume destination. In addition to the daily Sustainable Development Fee, comfortable travel averages around ₹18,000 per person per day for good hotels, a private guide and driver and all sightseeing. Luxury travellers staying at Six Senses or Amankora should budget significantly more.', links: [['Bhutan holiday costs', '#']] },
    { h4: 'Safety & entry', text: 'Indian passport holders need a permit (not a visa) to enter Bhutan, which Hi Tours arranges along with the Sustainable Development Fee; a valid passport (6+ months) or Voter ID is required. Most visitors fly into Paro. Bhutan is one of the safest and most welcoming countries in Asia.', links: [['Travel advice', '#']] }
  ]
};

export const themes = { h2: 'Travel guide & inspiration', more: 'Show more', less: 'Show less', items: [
  { href: '#', title: 'The best time to visit Bhutan', tag: 'Travel guide', icon: 'sun', image: IMG.tigersNest },
  { href: '#', title: 'The ideal trip duration for Bhutan', tag: 'Travel guide', icon: 'calendar', image: IMG.punakha },
  { href: '#', title: 'Bhutan festivals (tshechus) guide', tag: 'Inspiration', icon: 'food', image: IMG.dzong },
  { href: '#', title: 'The best sights in Bhutan in 2026', tag: 'Inspiration', icon: 'landscape', image: IMG.peaks },
  { href: '#', title: 'Top activities in Bhutan', tag: 'Inspiration', icon: 'kayak', image: IMG.bridge },
  { href: '#', title: 'Trekking in Bhutan: insider tips', tag: 'Inspiration', icon: 'island', image: IMG.village },
  { href: '#', title: 'Bhutan for honeymooners', tag: 'Inspiration', icon: 'beach', image: IMG.prayerFlags },
  { href: '#', title: 'Bhutan holiday: costs at a glance', tag: 'Travel guide', icon: 'wallet', image: IMG.tigersNest2 }
].map((t) => ({ ...t, alt: t.title })) };

export const faq = {
  h2: 'Practical information for your trip',
  items: [
    { q: 'When is the best time to visit Bhutan?', a: [
      'The best times to visit Bhutan are spring (March–May), when the valleys bloom with rhododendrons, and autumn (September–November), with clear Himalayan skies and colourful tshechu festivals. Winters are cold but clear, while the monsoon brings rain from June to August.',
      ['More information about the ', ['best time to visit Bhutan', '#'], ' by season, type of trip, activities and more.']
    ] },
    { q: 'What is typical food in Bhutan?', a: [
      'Bhutanese cuisine is hearty and famously spicy. The national dish is ema datshi – chillies cooked in cheese – served with red rice. Other favourites include phaksha paa (pork with radish), momos (dumplings), buckwheat pancakes and butter tea (suja). Most hotels also offer milder international options.'
    ] },
    { q: 'Do Indian citizens need a visa for Bhutan?', a: [
      'Indian passport holders do not need a visa for Bhutan but do require an entry permit, which Hi Tours arranges for you along with the daily Sustainable Development Fee. You will need a passport valid for at least six months (or a Voter ID card). Most travellers fly into Paro.',
      'Our travel experts handle all permits and fees as part of your travel plan, so there are no surprises on arrival.'
    ] },
    { q: 'How is my trip protected if travel conditions change?', a: [
      'Many travellers want extra flexibility and security before booking a Himalayan trip. With Hi Tours Care Flex you can cancel or rebook your land programme up to 30 days before departure without giving a reason. Depending on the destination, further protection and flexibility options may apply.',
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
  ['Cambodia', ct('3zbplvZU8SZYLZqdmaPsZv/c16250ef83321324f10fbf00c9b058a1/Kambodscha_AngkorWat.jpg')],
  ['Maldives', ct('3hsuR5UvfamJlqKCTM81Ii/b43e484beb8b92c43047174a4a3e7be8/Maldiven__Holzsteg.jpg')]
];
const ASIA_HREF = { Vietnam: '/asien/vietnam', 'Sri Lanka': '/asien/sri-lanka', Thailand: '/asien/siam-splendour-thailand', Malaysia: '/asien/malaysia', Singapore: '/asien/singapore', Kazakhstan: '/asien/kazakhstan' };
export const related = { h2: `More destinations in ${destination.continent}`, items: asiaList.map(([title, image]) => ({ title, alt: title, tag: null, href: ASIA_HREF[title] || '#', image })) };

export const bhutan = {
  pageTitle: 'Bhutan Honeymoons and holidays | Hi Tours',
  hero, crumbs, intro, tours, products, features, places, activities, themes, related, holidaysPath, holidaysCrumbs, plan, faq, planner,
  reviews: { ...egyptReviews, ...reviews }, customerReviews,
  plannerSource: 'bhutan-planner'
};
