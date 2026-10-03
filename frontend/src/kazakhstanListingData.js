// Kazakhstan destination landing – same template/data shape as vietnamListingData (destination = Kazakhstan, continent = Asia).
import { features, planner as egyptPlanner, reviews as egyptReviews, customerReviews as egyptCustomerReviews } from './egyptListingData';
import { kazakhstanProducts } from './tours/kazakhstanToursData';
import { IMG } from './kazakhstanPackages';

const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p) => `${CT}/${p}?w=1080&q=60&fm=webp`;
const wide = (base, w) => `${base}&w=${w}`;

export const destination = { name: 'Kazakhstan', continent: 'Asia', primary: ['Almaty', 'Astana', 'Charyn Canyon', 'Kolsai Lakes'] };

export const holidaysPath = '/asien/kazakhstan/holidays';
export const holidaysCrumbs = [{ label: 'Home', to: '/' }, { label: 'Kazakhstan', to: '/asien/kazakhstan' }, { label: 'Kazakhstan tours & holidays' }];

export const hero = {
  h1: 'Kazakhstan Honeymoons and holidays',
  holidaysH1: 'Kazakhstan tours & holidays',
  styleH1: (style) => `Kazakhstan ${style.toLowerCase()} holidays`,
  tabAbout: 'About Kazakhstan',
  tabTours: 'Kazakhstan holidays',
  cta: 'Plan for free',
  stickyCta: 'Plan your Kazakhstan trip',
  ctaHref: '/l/kazakhstan/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made',
  image: wide(IMG.RAW.mountains1, 2400),
  imageAlt: 'Snow-capped Tian Shan mountains rising above Almaty, Kazakhstan'
};

export const crumbs = [{ label: 'Destinations', href: '/destinations/' }, { label: 'Asia', to: '/asien' }, { label: 'Kazakhstan' }];

export const intro = {
  h2: 'About Kazakhstan',
  text: 'Kazakhstan is the giant of Central Asia – the ninth-largest country on earth, where the snow-capped Tian Shan mountains meet an endless golden steppe. Leafy, laid-back Almaty sits beneath alpine peaks and turquoise lakes, while the futuristic capital Astana rises straight out of the plains with some of the boldest architecture in Asia.',
  more: ' Few destinations combine such space and variety: hike to Big Almaty Lake and the emerald Kolsai Lakes, marvel at the red cliffs of the Charyn Canyon, ride across the steppe with eagle hunters and discover a rich nomadic culture and warm Central Asian hospitality. The climate is continental – warm, green summers and crisp, snowy winters – and with convenient flight connections, a rewarding trip fits comfortably into 6 to 10 days.',
  learnMore: 'Learn more',
  learnLess: 'Show less',
  quote: 'My tip for Almaty: take the cable car up to Kok Tobe at dusk, when the whole city lights up beneath the mountains. Then come down for a plate of beshbarmak and a glass of kumis – you’ll feel the spirit of the steppe.',
  quoteMore: 'And don’t rush the nature. The drive to the Kolsai Lakes and the sunken forest of Lake Kaindy is one of the most beautiful in Central Asia. Spend a night in a village guesthouse near Saty, wake up to the mountains and you’ll understand why travellers fall for Kazakhstan.',
  readMore: 'Read more',
  readLess: 'Read less',
  expert: { image: '/experts/riya.webp', name: 'Aisha', role: 'Travel expert for Kazakhstan' }
};

export const tours = {
  h2: 'Top-selling Kazakhstan holiday ideas',
  allH2: 'Kazakhstan tours & holidays',
  styleH2: (style) => `Kazakhstan ${style.toLowerCase()} holidays`,
  browse: (n) => `Browse ${n} package ${n === 1 ? 'idea' : 'ideas'}`,
  filterLabel: 'Travel style:',
  sortLabel: 'Sorted by:',
  filterBy: 'Filter by',
  sortBy: 'Sort by',
  empty: 'No holidays match this travel style yet – clear the filter to see all Kazakhstan holidays.',
  viewAll: 'View all Kazakhstan holidays',
  short: ['Embark on an ', ['unforgettable journey of discovery'], ' from the peaks above Almaty to the futuristic capital Astana – every Kazakhstan holiday is tailor-made by our experts.'],
  intro: [
    ' Marvel at alpine lakes, red-rock canyons and the vast steppe. Whether you are looking for a ', ['mountains-and-lakes nature escape, a city and culture tour or a steppe adventure'], ' – our travel experts will be happy to advise you personally.'
  ],
  readMore: 'Read more',
  readLess: 'Read less'
};

export const products = kazakhstanProducts;

export const planner = { ...egyptPlanner, h3: 'Plan your Kazakhstan trip', bg: wide(IMG.RAW.mountains2, 2000) };

export const reviews = {
  h2: 'What customers say about booking Kazakhstan with Hi Tours',
  count: 'based on 190 Kazakhstan reviews',
  items: [
    { name: 'Vikram and Anjali', title: 'Mountains, lakes and the steppe – wow', date: '6 May 2026', stars: 5, image: wide(IMG.RAW.mountains1, 600), text: 'Big Almaty Lake, Charyn Canyon and the Kolsai Lakes were breathtaking, and our guide and 4x4 driver were superb. Everything was organised to perfection.' },
    { name: 'Rohit and Neha', title: 'Almaty and Astana both amazed us', date: '18 April 2026', stars: 5, image: wide(IMG.RAW.steppe2, 600), text: 'The contrast between relaxed Almaty and futuristic Astana was fascinating. Flights, hotels and transfers all ran like clockwork thanks to Hi Tours.' },
    { name: 'Priya', title: 'A Central Asian adventure to remember', date: '1 April 2026', stars: 5, image: wide(IMG.RAW.almaty1, 600), text: 'Staying near the Kolsai Lakes and meeting a local family was the highlight. Perfectly planned, safe and unforgettable from start to finish.' }
  ]
};

export const customerReviews = {
  ...egyptCustomerReviews,
  h2: 'Our customers about their Kazakhstan trip',
  summary: 'Amazing Kazakhstan trip – mountains, lakes, canyon and two very different cities, all perfectly organised.',
  photos: [wide(IMG.RAW.almaty1, 600), wide(IMG.RAW.canyon, 300), wide(IMG.RAW.mountains2, 300), wide(IMG.RAW.steppe2, 450)],
  planExpert: '/experts/riya.webp',
  items: reviews.items.map((r) => ({ initial: r.name[0], name: r.name, date: r.date, title: r.title, source: 'Trustpilot', text: r.text }))
};

const placeList = [
  ['Almaty', IMG.almaty],
  ['Charyn Canyon', IMG.canyon],
  ['Kolsai Lakes', IMG.peaks],
  ['Big Almaty Lake', IMG.mountains],
  ['Astana', IMG.astana],
  ['Tian Shan', IMG.ridge]
];
export const places = { h2: `Discover these places in ${destination.name}`, items: placeList.map(([title, image], i) => ({ title, alt: title, tag: null, href: `#place-${i}`, image })) };

export const activities = { h2: 'The best activities on your trip', items: [
  { href: '#', title: 'Hike the Tian Shan to alpine lakes', alt: 'Hiking trail to an alpine lake in the Tian Shan, Kazakhstan', tag: 'Hiking', image: IMG.peaks },
  { href: '#', title: 'Explore the red cliffs of Charyn Canyon', alt: 'Red rock formations of the Charyn Canyon, Kazakhstan', tag: 'Nature', image: IMG.canyon }
] };

export const plan = {
  h2: 'How to plan your Kazakhstan trip',
  intro: 'Kazakhstan impresses with its sheer scale and variety. Between the alpine lakes and canyons around Almaty, the futuristic capital Astana and the endless steppe with its nomadic culture, the country offers unforgettable experiences for nature-lovers and the curious alike. Experience Kazakhstan your way with Hi Tours: safe, tailor-made and unforgettable.',
  more: 'Show more details',
  less: 'Show fewer details',
  sections: [
    { h4: 'Best time to travel & climate', text: 'Kazakhstan has a continental climate. The best time to visit is from May to September, when the mountains and steppe are green and the lakes are accessible – July and August are warmest. Winters are cold and snowy, ideal for skiing near Almaty but harsh on the steppe.', links: [['Best time to visit Kazakhstan', '#']] },
    { h4: 'Trip duration & route suggestions', text: '6 days cover Almaty with the Tian Shan, Charyn Canyon and the Kolsai Lakes. 7 to 8 days add nights in the mountains. 9 to 10 days combine Almaty with the capital Astana for a city-and-nature contrast, linked by a short domestic flight.', links: [['Ideal trip duration', '#'], ['Kazakhstan in 7 days', '#']] },
    { h4: 'Sights & culture', text: 'Highlights include the mountains, lakes and leafy boulevards of Almaty, the Charyn Canyon, the emerald Kolsai and Kaindy lakes, and the striking modern landmarks of Astana such as the Bayterek Tower, Khan Shatyr and the Palace of Peace. Nomadic traditions, eagle hunting and the Green Bazaar bring the culture to life.', links: [['Top sights in Kazakhstan', '#'], ['Top activities in Kazakhstan', '#']] },
    { h4: 'Activities & adventure', text: 'Hike or ski in the Tian Shan, trek between the Kolsai Lakes, explore the Charyn Canyon, ride horses across the steppe, meet eagle hunters and ride the cable cars of Medeu and Shymbulak above Almaty.', links: [['Activities in Kazakhstan', '#'], ['Hiking in Kazakhstan', '#']] },
    { h4: 'Costs & budget', text: 'Comfortable travel in Kazakhstan averages around ₹11,000 per person per day for 4- to 5-star hotels, a private guide, a 4x4 and excursions. Luxury travellers staying in top Almaty and Astana hotels should budget around ₹22,000 daily. Local food and transport are inexpensive.', links: [['Kazakhstan holiday costs', '#']] },
    { h4: 'Safety & entry', text: 'Indian passport holders can enter Kazakhstan visa-free for stays of up to 14 days (subject to current rules); longer stays require an e-visa applied for online before departure. Your passport must be valid for at least six months. Kazakhstan is considered safe and welcoming for travellers.', links: [['Travel advice', '#']] }
  ]
};

export const themes = { h2: 'Travel guide & inspiration', more: 'Show more', less: 'Show less', items: [
  { href: '#', title: 'The best time to visit Kazakhstan', tag: 'Travel guide', icon: 'sun', image: IMG.mountains },
  { href: '#', title: 'The ideal trip duration for Kazakhstan', tag: 'Travel guide', icon: 'calendar', image: IMG.almaty },
  { href: '#', title: 'Food in Kazakhstan: dishes to try', tag: 'Inspiration', icon: 'food', image: IMG.city },
  { href: '#', title: 'The best sights in Kazakhstan in 2026', tag: 'Inspiration', icon: 'landscape', image: IMG.canyon },
  { href: '#', title: 'Top activities in Kazakhstan', tag: 'Inspiration', icon: 'kayak', image: IMG.peaks },
  { href: '#', title: 'Hiking the Tian Shan: insider tips', tag: 'Inspiration', icon: 'island', image: IMG.ridge },
  { href: '#', title: 'Almaty vs Astana: which to visit', tag: 'Inspiration', icon: 'beach', image: IMG.astana },
  { href: '#', title: 'Kazakhstan holiday: costs at a glance', tag: 'Travel guide', icon: 'wallet', image: IMG.steppe }
].map((t) => ({ ...t, alt: t.title })) };

export const faq = {
  h2: 'Practical information for your trip',
  items: [
    { q: 'When is the best time to visit Kazakhstan?', a: [
      'The best time to visit Kazakhstan is from May to September, when the mountains and steppe are green and the alpine lakes are accessible. July and August are warmest, while winters are cold and snowy – perfect for skiing near Almaty.',
      ['More information about the ', ['best time to visit Kazakhstan', '#'], ' by season, region, type of trip, activities and more.']
    ] },
    { q: 'What is typical food in Kazakhstan?', a: [
      'Kazakh cuisine is hearty and nomadic in origin. Signature dishes include beshbarmak (boiled meat with flat noodles), kazy (horse-meat sausage), manti dumplings, plov and shashlik, often accompanied by kumis (fermented mare’s milk) or black tea. Almaty also has a lively modern café scene.'
    ] },
    { q: 'Do Indian citizens need a visa for Kazakhstan?', a: [
      'Indian passport holders can currently enter Kazakhstan visa-free for stays of up to 14 days (subject to prevailing rules). For longer stays, an e-visa can be applied for online before departure. Your passport must be valid for at least six months.',
      'Our travel experts will guide you through the latest entry requirements as part of your travel plan, so there are no surprises at the airport.'
    ] },
    { q: 'How is my trip protected if travel conditions change?', a: [
      'Many travellers want extra flexibility and security before booking a trip to Central Asia. With Hi Tours Care Flex you can cancel or rebook your land programme up to 30 days before departure without giving a reason. Depending on the destination, further protection and flexibility options may apply.',
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
  ['Bhutan', 'https://images.unsplash.com/photo-1638246439638-b37095b34879?crop=entropy&cs=srgb&fm=jpg&q=85&w=1080'],
  ['Cambodia', ct('3zbplvZU8SZYLZqdmaPsZv/c16250ef83321324f10fbf00c9b058a1/Kambodscha_AngkorWat.jpg')],
  ['Maldives', ct('3hsuR5UvfamJlqKCTM81Ii/b43e484beb8b92c43047174a4a3e7be8/Maldiven__Holzsteg.jpg')]
];
const ASIA_HREF = { Vietnam: '/asien/vietnam', 'Sri Lanka': '/asien/sri-lanka', Thailand: '/asien/thailand', Malaysia: '/asien/malaysia', Singapore: '/asien/singapore', Bhutan: '/asien/bhutan' };
export const related = { h2: `More destinations in ${destination.continent}`, items: asiaList.map(([title, image]) => ({ title, alt: title, tag: null, href: ASIA_HREF[title] || '#', image })) };

export const kazakhstan = {
  pageTitle: 'Kazakhstan Honeymoons and holidays | Hi Tours',
  hero, crumbs, intro, tours, products, features, places, activities, themes, related, holidaysPath, holidaysCrumbs, plan, faq, planner,
  reviews: { ...egyptReviews, ...reviews }, customerReviews,
  plannerSource: 'kazakhstan-planner'
};
