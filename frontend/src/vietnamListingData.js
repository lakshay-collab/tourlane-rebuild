// Vietnam destination landing – same template/data shape as egyptListingData (destination = Vietnam, continent = Asia).
import { features, planner as egyptPlanner, reviews as egyptReviews, customerReviews as egyptCustomerReviews } from './egyptListingData';
import { vietnamProducts } from './tours/vietnamToursData';

const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const CT2 = 'https://images.ctfassets.net/rc3dlxapnu6k';
const ct = (p) => `${CT}/${p}?w=1080&q=60&fm=webp`;
const ct2 = (p) => `${CT2}/${p}?w=1080&q=60&fm=webp`;

export const destination = { name: 'Vietnam', continent: 'Asia', primary: ['Hanoi', 'Ho Chi Minh City', 'Ha Long Bay', 'Da Nang'] };

export const holidaysPath = '/asien/vietnam/holidays';
export const holidaysCrumbs = [{ label: 'Home', to: '/' }, { label: 'Vietnam', to: '/asien/vietnam' }, { label: 'Vietnam tours & holidays' }];

export const hero = {
  h1: 'Vietnam Honeymoons and holidays',
  holidaysH1: 'Vietnam tours & holidays',
  styleH1: (style) => `Vietnam ${style.toLowerCase()} holidays`,
  tabAbout: 'About Vietnam',
  tabTours: 'Vietnam holidays',
  cta: 'Plan for free',
  stickyCta: 'Plan your Vietnam trip',
  ctaHref: '/l/vietnam/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made',
  image: ct('3Z7A5HXNMctqsB6GE2jphI/4cef5ccca7d896a0b4f88281499fec30/Halong_Bucht_Vietnam.jpg').replace('w=1080', 'w=2400'),
  imageAlt: 'Traditional boats between limestone karsts, Ha Long Bay, Vietnam'
};

export const crumbs = [{ label: 'Destinations', href: '/destinations/' }, { label: 'Asia', to: '/asien' }, { label: 'Vietnam' }];

export const intro = {
  h2: 'About Vietnam',
  text: 'Vietnam keeps surprising you: the north and the south are so different in culture and landscape that it is hard to believe you are in the same country. Anyone with a little time in Hanoi should plan for Ninh Binh – 2.5 hours by train, with rice paddies, limestone cliffs and traditional rowing boats on the river. The same scenery as Ha Long Bay, without the tour groups.',
  more: ' Beyond that, Vietnam is a 3,000 km coastline, two great river deltas and a mountain north. A cruise through Ha Long Bay, the lantern-lit old town of Hoi An, the imperial city of Hue and the energy of Ho Chi Minh City string together naturally from north to south; the Mekong Delta and the beaches of Phu Quoc and Da Nang reward travellers with more time. There is no single best season – the north is at its best from October to April, the centre from February to May and the south from December to April – and with direct flights from India, a rich itinerary fits comfortably into 8 to 14 days.',
  learnMore: 'Learn more',
  learnLess: 'Show less',
  quote: 'Standing in Hanoi and not sure where to eat tonight? Look for the little bistros with the most locals in front of them. For a few hundred rupees you will dine like royalty – and do try the local Bia Saigon.',
  quoteMore: 'My advice: in smaller places, especially Hoi An, rent bicycles to get around. Ride through sleepy villages, past rice fields and ancient pagodas and see Vietnam as it really is. And book a couple of guided experiences, such as a cooking class with a local family – you learn more about the culture, mentality and history of the country in an afternoon than in a week of sightseeing.',
  readMore: 'Read more',
  readLess: 'Read less',
  expert: { image: '/experts/riya.webp', name: 'Riya', role: 'Travel expert for Vietnam' }
};

export const tours = {
  h2: 'Top-selling Vietnam holiday ideas',
  allH2: 'Vietnam tours & holidays',
  styleH2: (style) => `Vietnam ${style.toLowerCase()} holidays`,
  browse: (n) => `Browse ${n} package ${n === 1 ? 'idea' : 'ideas'}`,
  filterLabel: 'Travel style:',
  sortLabel: 'Sorted by:',
  filterBy: 'Filter by',
  sortBy: 'Sort by',
  empty: 'No holidays match this travel style yet – clear the filter to see all Vietnam holidays.',
  viewAll: 'View all Vietnam holidays',
  short: ['Embark on an ', ['unforgettable journey of discovery'], ' from the karsts of the north to the Mekong Delta – every Vietnam holiday is tailor-made by our experts.'],
  intro: [
    ' Marvel at lantern-lit old towns, imperial citadels and emerald bays. Whether you are looking for a ', ['cultural tour, a Ha Long Bay cruise or relaxing days on the beach'], ' – our travel experts will be happy to advise you personally.'
  ],
  readMore: 'Read more',
  readLess: 'Read less'
};

export const products = vietnamProducts;

export const planner = { ...egyptPlanner, h3: 'Plan your Vietnam trip', bg: ct('5ujKcctP43Y7HHOFAKvWIU/4e29a70d5c0657d946762c42bd2f1eb5/Sapa_Vietname.jpg').replace('w=1080', 'w=2000') };

export const reviews = {
  h2: 'What customers say about booking Vietnam with Hi Tours',
  count: 'based on 420 Vietnam reviews',
  items: [
    { name: 'Camelia', title: 'A dream come true in Vietnam', date: '3 May 2026', stars: 5, image: '/vietnam/reviews/friends-trip.webp', text: 'We wanted a very special trip – a honeymoon made up for 25 years later. Vietnam and Cambodia were exactly that. We felt like we were in a dream: inspiring, educational and delicious. I will not forget a single minute of it.' },
    { name: 'Nicolas', title: 'A unique trip through Vietnam', date: '14 April 2026', stars: 5, image: '/vietnam/reviews/halong-bay-couple.webp', text: 'WOW! Vietnam was simply amazing. Everything planned with our travel expert – flights, transfers, excursions – worked perfectly. I travelled alone but never felt alone or lost. Happy to book again.' },
    { name: 'Christina', title: 'Everything perfectly organised', date: '29 March 2026', stars: 5, image: '/vietnam/reviews/hoi-an.webp', text: 'We had a wonderful time in Vietnam. Thanks to the excellent organisation by Hi Tours and the local partner we could really enjoy the trip and hardly had to worry about anything, while still having time for spontaneous activities. The advice before the trip was great too.' }
  ]
};

// Destination-specific version of the holidays-page customer reviews block (same structure as Egypt's).
export const customerReviews = {
  ...egyptCustomerReviews,
  h2: 'Our customers about their Vietnam trip',
  summary: 'Amazing Vietnam trip – flights, transfers and excursions worked perfectly and every stop was a highlight.',
  photos: [ct('64KctsEhG5C5Gvp7bPAOls/c8b507257968817a4193794f99671b5d/Vietnam_HoiAn_Stra%C3%83_e.jpg').replace('w=1080', 'w=600'), ct('2hggRcJJIUBpnLKSukA9nB/66ac7e66a4fcbe61ef782ec2b3ae15cf/Vietnam_VangVieng_Reisfelder.jpg').replace('w=1080', 'w=300'), ct('TKNjhrPNRWkSQBMowEUEr/6f74539faaf319b93fcfa1fe0cf9f202/Vietnam__Sapa__Wanderung.jpg').replace('w=1080', 'w=300'), ct('3Z7A5HXNMctqsB6GE2jphI/4cef5ccca7d896a0b4f88281499fec30/Halong_Bucht_Vietnam.jpg').replace('w=1080', 'w=450')],
  planExpert: '/experts/riya.webp',
  items: reviews.items.map((r) => ({ initial: r.name[0], name: r.name, date: r.date, title: r.title, source: 'Trustpilot', text: r.text }))
};

const placeList = [
  ['Hanoi', ct('3qsQDApUiMDejmmNxXcr0g/3bd51ca9fa429966c8ba194946b30cb1/Pagode_Hanoi.png')],
  ['Ho Chi Minh City', ct('4Ihuoev7y3ozkoyBtvaWe4/1839744b36bfb9e1d4bd8759bcfc28c6/Ho-Chi-Minh.jpg')],
  ['Ha Long Bay', ct('3Z7A5HXNMctqsB6GE2jphI/4cef5ccca7d896a0b4f88281499fec30/Halong_Bucht_Vietnam.jpg')],
  ['Da Nang', ct('1M6fmNzrSPt0exyQZ26Bzk/b4eea1905a7bd527f4c6a494b1b1b700/Vietnam_Da_Nang_Mamorberge_TCG.png')],
  ['Hoi An', ct('1oona4EHxFNonfYfpgKQRu/fd45a84873954f50c0192a904b5c13db/Hoi_An_Vietnam_2.jpg')],
  ['Sapa', ct('5ujKcctP43Y7HHOFAKvWIU/4e29a70d5c0657d946762c42bd2f1eb5/Sapa_Vietname.jpg')]
];
export const places = { h2: `Discover these places in ${destination.name}`, items: placeList.map(([title, image], i) => ({ title, alt: title, tag: null, href: `#place-${i}`, image })) };

export const activities = { h2: 'The best activities on your trip', items: [
  { href: '#', title: 'On foot through a fascinating country', alt: 'Karst peaks of Cat Ba island, Vietnam', tag: 'Hiking', image: ct('79H1I0yHbm2Uso9Li2MVZx/4edc84b3ed96ba23c6a5fcaef7e7ad82/iStock-1073845214.jpg') },
  { href: '#', title: 'Golf courses from Ha Long to Ho Chi Minh City', alt: 'Hilly golf course in Vietnam seen from above', tag: 'Golf', image: ct('3p9YFynVERLsVUSUoI1nGw/0fec249f24f7f38c8bc1a9658fd2bdb1/Vietnam__Golfplatz.jpg') }
] };

export const plan = {
  h2: 'How to plan your Vietnam trip',
  intro: 'Vietnam impresses with extraordinary variety. Between the lively everyday life of its cities, a cuisine full of freshness and the striking landscapes, the country offers unforgettable travel experiences – from the rice terraces around Sapa and the fertile plains of the Mekong Delta to towns with colonial charm. Experience Vietnam your way with Hi Tours: safe, tailor-made and unforgettable.',
  more: 'Show more details',
  less: 'Show fewer details',
  sections: [
    { h4: 'Best time to travel & climate', text: 'There is no single best time for Vietnam – plan by region. The north is at its best in autumn (October–November) and spring (February–April); central Vietnam is dry from February to May; and in the south the dry season from December to April is ideal for the Mekong Delta and a beach holiday.', links: [['Best time to visit Vietnam', '#'], ['Best time to visit Hanoi', '#']] },
    { h4: 'Trip duration & route suggestions', text: '7 days cover the classic route of Hanoi, Ha Long Bay and Ho Chi Minh City. 10 days allow extra stops in Hue and Hoi An, while 14 days add Ninh Binh, Cuc Phuong National Park and Cat Ba. With 21 days you can include Sapa, the Mekong Delta and a beach break on Phu Quoc.', links: [['Ideal trip duration', '#'], ['Vietnam in 10 days', '#'], ['Vietnam in 14 days', '#']] },
    { h4: 'Sights & culture', text: 'Vietnam divides into three zones: the mountainous, culture-rich north, the history-laden centre with its coast and the tropical south with the delta. Highlights include Hanoi\u2019s Old Quarter, modern Ho Chi Minh City, the UNESCO sites of Hue, Hoi An and Ha Long Bay, the rice terraces of Sapa and beaches such as Phu Quoc, Da Nang and Nha Trang.', links: [['Top sights in Vietnam', '#'], ['Top activities in Vietnam', '#']] },
    { h4: 'Activities & adventure', text: 'Hike the rice terraces of Sapa or Ba Be National Park, dive in Nha Trang or Phu Quoc, surf in Da Nang or Mui Ne, take a street-food tour in Ho Chi Minh City, join a cooking class in Hoi An or a traditional tea ceremony in Hanoi – and play golf from Ha Long to Da Lat.', links: [['Activities in Vietnam', '#'], ['Beaches in Vietnam', '#'], ['Hiking in Vietnam', '#']] },
    { h4: 'Costs & budget', text: 'Comfortable travel in Vietnam averages around ₹5,500 per person per day for 3-star hotels, restaurant meals and excursions. Luxury travellers with 4- to 5-star hotels, private tours and domestic flights should budget around ₹14,500 daily. Street food, taxis and entrance fees are very inexpensive.', links: [['Vietnam holiday costs', '#']] },
    { h4: 'Safety & entry', text: 'Indian passport holders need an e-Visa for Vietnam, which is applied for online before departure and is usually issued within a few working days. Your passport must be valid for at least 6 months. Vietnam is considered safe and very welcoming; a hepatitis A vaccination is recommended.', links: [['Travel advice', '#']] }
  ]
};

export const themes = { h2: 'Travel guide & inspiration', more: 'Show more', less: 'Show less', items: [
  { href: '#', title: 'The best time to visit Vietnam', tag: 'Travel guide', icon: 'sun', image: ct2('231OjfnA98Apznyn84bhMQ/64cc32a17ac7de63e5287ec8101740b0/Best-Country-Vietnam-1.jpg') },
  { href: '#', title: 'The ideal trip duration for Vietnam', tag: 'Travel guide', icon: 'calendar', image: ct2('3iGNoE6C06wtBd7ZSYBmN6/3e82ee07e48e390c1295d875afa3e722/Duration-Vietnam-1.jpg') },
  { href: '#', title: 'Food in Vietnam: top 10 dishes', tag: 'Inspiration', icon: 'food', image: ct2('5EVOekQzj2iB3TjHqKGtm8/a985b9deec5eb2e0d989535a51e30002/Nationalgerichte__Vietnam.jpg') },
  { href: '#', title: 'The 21 best sights in Vietnam in 2026', tag: 'Inspiration', icon: 'landscape', image: ct2('5bq8meHXz0aioOSeUwaot4/a6b9a994d40d27e0434fba9110cb1e9b/Vietnam__Yen_Bai__Mu_Cang_Chai__Reisterrassen.jpg') },
  { href: '#', title: 'Top 10 activities in Vietnam', tag: 'Inspiration', icon: 'kayak', image: ct2('Akawawf0dXprNmvp6pNd7/6b4801a389e6bac58fa33943fcf66b27/Vietnam__Hanoi__Teezeremonie.jpg') },
  { href: '#', title: 'The 15 most beautiful beaches in Vietnam', tag: 'Inspiration', icon: 'beach', image: ct2('5UObfIrnYzBaHYgzCmaUxP/4da6792cc148a982ab481a2261529ec9/Vietnam_Star_Beach.jpg') },
  { href: '#', title: 'Vietnam insider tips', tag: 'Inspiration', icon: 'island', image: ct2('MJ60KvlJDTvcNIxxyYRZ0/e8c2a9aa16b80ecf1f395c04a9cc9d96/Vietnam__Ninh_Binh__Trang_An.jpg') },
  { href: '#', title: 'Vietnam holiday: costs at a glance', tag: 'Travel guide', icon: 'wallet', image: ct2('7d034NuQrm2X3x7QvOFbnc/352eee7dcd2bdf275050595661d56b17/iStock-673149056.jpg') }
].map((t) => ({ ...t, alt: t.title })) };

export const faq = {
  h2: 'Practical information for your trip',
  items: [
    { q: 'When is the best time to visit Vietnam?', a: [
      'It depends on the region. Northern Vietnam is best from October to April, central Vietnam from February to May, and the south during the dry season from December to April. Because the climate zones differ, a north-to-south route can find good weather in almost any month.',
      ['More information about the ', ['best time to visit Vietnam', '#'], ' by season, region, type of trip, activities and more.']
    ] },
    { q: 'What is typical food in Vietnam?', a: [
      'Vietnamese cuisine is a journey through ginger, mint, coriander and fish sauce, shaped by Chinese, Thai, Khmer and Indian influences. Try pho (noodle soup), banh mi (baguette sandwiches), bun cha (grilled pork with noodles), fresh spring rolls and cao lau in Hoi An. Every meal reflects the soul of the country and is a celebration of community.'
    ] },
    { q: 'Do Indian citizens need a visa for Vietnam?', a: [
      'Yes. Indian passport holders apply for a Vietnam e-Visa online before departure; it is usually issued within three to five working days and allows stays of up to 90 days. Your passport must be valid for at least six months from the date of entry.',
      'Our travel experts will guide you through the visa requirements as part of your travel plan, so there are no surprises at the airport.'
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
  ['Indonesia', ct('61b5ymnc76Gat5QEm4R7Uv/236a66af31569408e5fba01e2dcb53b1/Kelingking_Beach__Nusa_Penida__Indonesien_NTCG__1_.png')],
  ['Sri Lanka', ct('6etzBcZlvbOLHqzCOq0NES/764d862634b04fbcd521a3ad01740f1d/iStock-1779897953.jpg')],
  ['Maldives', ct('3hsuR5UvfamJlqKCTM81Ii/b43e484beb8b92c43047174a4a3e7be8/Maldiven__Holzsteg.jpg')],
  ['Cambodia', ct('3zbplvZU8SZYLZqdmaPsZv/c16250ef83321324f10fbf00c9b058a1/Kambodscha_AngkorWat.jpg')],
  ['Malaysia', ct('X7b0PdKpWDMzl19jytcJ6/d0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg')],
  ['Singapore', ct('4B5tE96BHxRVFYUVJQibEE/efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg')],
  ['Philippines', ct('1o2rtINxvG8y4nqhK5Bvgp/d09a493b9ea9c4db223ad37ba237b646/Philippinen_Palawan_Coron_Lagoone_TCG.png')]
];
const ASIA_HREF = { 'Sri Lanka': '/asien/sri-lanka', Thailand: '/asien/siam-splendour-thailand' };
export const related = { h2: `More destinations in ${destination.continent}`, items: asiaList.map(([title, image]) => ({ title, alt: title, tag: null, href: ASIA_HREF[title] || '#', image })) };

export const vietnam = {
  pageTitle: 'Vietnam Honeymoons and holidays | Hi Tours',
  hero, crumbs, intro, tours, products, features, places, activities, themes, related, holidaysPath, holidaysCrumbs, plan, faq, planner,
  reviews: { ...egyptReviews, ...reviews }, customerReviews,
  plannerSource: 'vietnam-planner'
};
