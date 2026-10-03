// Singapore destination landing – same template/data shape as vietnamListingData (destination = Singapore, continent = Asia).
import { features, planner as egyptPlanner, reviews as egyptReviews, customerReviews as egyptCustomerReviews } from './egyptListingData';
import { singaporeProducts } from './tours/singaporeToursData';

const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p) => `${CT}/${p}?w=1080&q=60&fm=webp`;
const un = (id, w = 1080) => `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&q=80&w=${w}`;

const SKYLINE = ct('4B5tE96BHxRVFYUVJQibEE/efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg');
const JALAN = ct('1S1CFngY8la37r0DqH3xb1/8052b7405ea5431391f2be4fba023227/Jalan_Besar_Singapore_2.jpg');
const GARDENS = un('photo-1605425183435-25b7e99104a4');
const SUPERTREE_NIGHT = un('photo-1499359875449-10bbeb21501e');
const SUPERTREE_BLUE = un('photo-1508597370841-836e72ef6f54');
const MARINA_AERIAL = un('photo-1525625293386-3f8f99389edd');
const TWILIGHT = un('photo-1496939376851-89342e90adcd');

export const destination = { name: 'Singapore', continent: 'Asia', primary: ['Marina Bay', 'Gardens by the Bay', 'Sentosa', 'Chinatown'] };

export const holidaysPath = '/asien/singapore/holidays';
export const holidaysCrumbs = [{ label: 'Home', to: '/' }, { label: 'Singapore', to: '/asien/singapore' }, { label: 'Singapore tours & holidays' }];

export const hero = {
  h1: 'Singapore Honeymoons and holidays',
  holidaysH1: 'Singapore tours & holidays',
  styleH1: (style) => `Singapore ${style.toLowerCase()} holidays`,
  tabAbout: 'About Singapore',
  tabTours: 'Singapore holidays',
  cta: 'Plan for free',
  stickyCta: 'Plan your Singapore trip',
  ctaHref: '/l/singapore/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made',
  image: un('photo-1525625293386-3f8f99389edd', 2400),
  imageAlt: 'Marina Bay Sands and the Singapore skyline reflected in the bay at dusk'
};

export const crumbs = [{ label: 'Destinations', href: '/destinations/' }, { label: 'Asia', to: '/asien' }, { label: 'Singapore' }];

export const intro = {
  h2: 'About Singapore',
  text: 'Singapore is a city-state like no other: a garden metropolis where futuristic architecture, tropical greenery and four cultures meet on a single island. In a few short days you can wander the Supertrees of Gardens by the Bay, feast your way through a hawker centre, temple-hop in Chinatown and sip a Singapore Sling where it was invented – all with the ease and polish Singapore is famous for.',
  more: ' Compact and effortlessly connected, Singapore rewards both first-timers and families. Marina Bay dazzles after dark with its light shows, Sentosa island packs in theme parks and beaches, and the heritage quarters of Chinatown, Little India and Kampong Glam burst with colour and flavour. It is warm and humid year-round, making it a perfect short break or stopover – and with direct flights from India, even two or three days feel wonderfully full.',
  learnMore: 'Learn more',
  learnLess: 'Show less',
  quote: 'Not sure where to eat in Singapore? Skip the fancy restaurants on your first night and head straight to a hawker centre like Maxwell or Lau Pa Sat. Hainanese chicken rice, chilli crab, satay – some of the world’s best food for the price of a coffee back home.',
  quoteMore: 'My advice: see Gardens by the Bay twice – once by day in the cool conservatories and again at night for the Garden Rhapsody light show among the Supertrees. And give yourself an afternoon simply to wander Chinatown, Little India and Kampong Glam on foot; the city changes character from street to street.',
  readMore: 'Read more',
  readLess: 'Read less',
  expert: { image: '/experts/riya.webp', name: 'Nisha', role: 'Travel expert for Singapore' }
};

export const tours = {
  h2: 'Top-selling Singapore holiday ideas',
  allH2: 'Singapore tours & holidays',
  styleH2: (style) => `Singapore ${style.toLowerCase()} holidays`,
  browse: (n) => `Browse ${n} package ${n === 1 ? 'idea' : 'ideas'}`,
  filterLabel: 'Travel style:',
  sortLabel: 'Sorted by:',
  filterBy: 'Filter by',
  sortBy: 'Sort by',
  empty: 'No holidays match this travel style yet – clear the filter to see all Singapore holidays.',
  viewAll: 'View all Singapore holidays',
  short: ['Embark on an ', ['unforgettable city escape'], ' from Marina Bay to Sentosa island – every Singapore holiday is tailor-made by our experts.'],
  intro: [
    ' Marvel at futuristic gardens, heritage quarters and world-class food. Whether you are looking for a ', ['romantic city break, a family adventure or a short stopover'], ' – our travel experts will be happy to advise you personally.'
  ],
  readMore: 'Read more',
  readLess: 'Read less'
};

export const products = singaporeProducts;

export const planner = { ...egyptPlanner, h3: 'Plan your Singapore trip', bg: un('photo-1605425183435-25b7e99104a4', 2000) };

export const reviews = {
  h2: 'What customers say about booking Singapore with Hi Tours',
  count: 'based on 285 Singapore reviews',
  items: [
    { name: 'Aditi and Rohan', title: 'The perfect city escape', date: '9 May 2026', stars: 5, image: SKYLINE.replace('w=1080', 'w=600'), text: 'Gardens by the Bay after dark and hawker feasts by day – Singapore packed so much magic into a few days. Every transfer and ticket was arranged; we just enjoyed the city.' },
    { name: 'The Kapoor family', title: 'Our kids did not want to leave', date: '22 April 2026', stars: 5, image: SUPERTREE_BLUE.replace('w=1080', 'w=600'), text: 'Universal Studios, the aquarium and the Night Safari were a dream for the children, and Marina Bay was stunning in the evenings. Flawlessly organised from start to finish.' },
    { name: 'Meghna', title: 'A wonderful stopover', date: '3 April 2026', stars: 5, image: GARDENS.replace('w=1080', 'w=600'), text: 'Even in two nights we saw so much thanks to the perfect planning. The hotel at Marina Bay was incredible and the local guide made the city come alive.' }
  ]
};

export const customerReviews = {
  ...egyptCustomerReviews,
  h2: 'Our customers about their Singapore trip',
  summary: 'Amazing Singapore trip – Marina Bay, Gardens by the Bay and Sentosa all perfectly organised, and every day was a highlight.',
  photos: [SKYLINE.replace('w=1080', 'w=600'), GARDENS.replace('w=1080', 'w=300'), SUPERTREE_NIGHT.replace('w=1080', 'w=300'), MARINA_AERIAL.replace('w=1080', 'w=450')],
  planExpert: '/experts/riya.webp',
  items: reviews.items.map((r) => ({ initial: r.name[0], name: r.name, date: r.date, title: r.title, source: 'Trustpilot', text: r.text }))
};

const placeList = [
  ['Marina Bay', SKYLINE],
  ['Gardens by the Bay', GARDENS],
  ['Sentosa', SUPERTREE_BLUE],
  ['Chinatown', JALAN],
  ['Marina Bay Sands', MARINA_AERIAL],
  ['Singapore skyline', TWILIGHT]
];
export const places = { h2: `Discover these places in ${destination.name}`, items: placeList.map(([title, image], i) => ({ title, alt: title, tag: null, href: `#place-${i}`, image })) };

export const activities = { h2: 'The best activities on your trip', items: [
  { href: '#', title: 'Gardens by the Bay and the Supertree light show', alt: 'Illuminated Supertrees at Gardens by the Bay, Singapore', tag: 'City', image: GARDENS },
  { href: '#', title: 'Sentosa island: theme parks, beaches and cable cars', alt: 'Marina Bay and islands of Singapore from above', tag: 'Family', image: MARINA_AERIAL }
] };

export const plan = {
  h2: 'How to plan your Singapore trip',
  intro: 'Singapore impresses with how much it fits into one compact, effortlessly connected island. Between futuristic gardens, four living cultures, a legendary food scene and family theme parks, the city offers unforgettable experiences for romantics, families and stopover travellers alike. Experience Singapore your way with Hi Tours: safe, tailor-made and unforgettable.',
  more: 'Show more details',
  less: 'Show fewer details',
  sections: [
    { h4: 'Best time to travel & climate', text: 'Singapore is warm and humid all year, with temperatures around 26–32°C. February to April tends to be the driest and sunniest; the monsoon from November to January brings heavier but short-lived showers. There is no bad time to visit – an umbrella and a relaxed pace are all you need.', links: [['Best time to visit Singapore', '#']] },
    { h4: 'Trip duration & route suggestions', text: '2 to 3 nights cover the essentials of Marina Bay, Gardens by the Bay and the cultural quarters – perfect as a stopover. 4 to 5 nights add Sentosa island, Universal Studios and the zoo, ideal for families. Singapore also pairs beautifully with Malaysia, Bali or a cruise for a longer trip.', links: [['Ideal trip duration', '#'], ['Singapore in 3 days', '#']] },
    { h4: 'Sights & culture', text: 'Singapore blends Chinese, Malay, Indian and colonial heritage. Highlights include Marina Bay Sands and the Merlion, Gardens by the Bay, the temples and shophouses of Chinatown and Little India, the colour of Kampong Glam, Orchard Road shopping and the island playground of Sentosa.', links: [['Top sights in Singapore', '#'], ['Top activities in Singapore', '#']] },
    { h4: 'Activities & adventure', text: 'Walk the OCBC Skyway among the Supertrees, ride the Singapore Flyer, cruise the Singapore River by bumboat, explore Universal Studios and the S.E.A. Aquarium on Sentosa, join a night tram ride at the famous Night Safari and eat your way through hawker centres and food streets.', links: [['Activities in Singapore', '#'], ['Family fun in Singapore', '#']] },
    { h4: 'Costs & budget', text: 'Singapore is one of Asia’s more premium destinations. Comfortable travel averages around ₹9,000 per person per day for 4-star hotels, meals and attractions. Luxury travellers staying at Marina Bay or on Sentosa should budget around ₹20,000 daily. Hawker food, however, remains wonderfully affordable.', links: [['Singapore holiday costs', '#']] },
    { h4: 'Safety & entry', text: 'Indian passport holders need an e-Visa for Singapore, applied for online before departure through an authorised agent. Your passport must be valid for at least six months. Singapore is one of the safest and cleanest cities in the world, with excellent public transport.', links: [['Travel advice', '#']] }
  ]
};

export const themes = { h2: 'Travel guide & inspiration', more: 'Show more', less: 'Show less', items: [
  { href: '#', title: 'The best time to visit Singapore', tag: 'Travel guide', icon: 'sun', image: SKYLINE },
  { href: '#', title: 'The ideal trip duration for Singapore', tag: 'Travel guide', icon: 'calendar', image: MARINA_AERIAL },
  { href: '#', title: 'Food in Singapore: top 10 hawker dishes', tag: 'Inspiration', icon: 'food', image: JALAN },
  { href: '#', title: 'The best sights in Singapore in 2026', tag: 'Inspiration', icon: 'landscape', image: GARDENS },
  { href: '#', title: 'Top activities in Singapore', tag: 'Inspiration', icon: 'kayak', image: SUPERTREE_NIGHT },
  { href: '#', title: 'Singapore with kids: family guide', tag: 'Inspiration', icon: 'beach', image: SUPERTREE_BLUE },
  { href: '#', title: 'Singapore insider tips', tag: 'Inspiration', icon: 'island', image: TWILIGHT },
  { href: '#', title: 'Singapore holiday: costs at a glance', tag: 'Travel guide', icon: 'wallet', image: SKYLINE }
].map((t) => ({ ...t, alt: t.title })) };

export const faq = {
  h2: 'Practical information for your trip',
  items: [
    { q: 'When is the best time to visit Singapore?', a: [
      'Singapore is a year-round destination with a warm, humid tropical climate. February to April is usually the driest and sunniest period, while November to January sees heavier but short monsoon showers that rarely disrupt a trip.',
      ['More information about the ', ['best time to visit Singapore', '#'], ' by season, type of trip, activities and more.']
    ] },
    { q: 'What is typical food in Singapore?', a: [
      'Singapore is one of the world’s great food cities, where Chinese, Malay and Indian flavours meet. Must-tries include Hainanese chicken rice, chilli crab, laksa, satay, char kway teow and kaya toast. The hawker centres – a piece of UNESCO-recognised heritage – are the heart of the experience.'
    ] },
    { q: 'Do Indian citizens need a visa for Singapore?', a: [
      'Yes. Indian passport holders need a Singapore e-Visa, which is applied for online before departure through an authorised visa agent and is usually issued within a few working days. Your passport must be valid for at least six months from the date of entry.',
      'Our travel experts will guide you through the visa process as part of your travel plan, so there are no surprises at the airport.'
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
  ['Thailand', ct('27MnAH4RS1zTSFygAmnq5i/97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg')],
  ['Vietnam', ct('3Z7A5HXNMctqsB6GE2jphI/4cef5ccca7d896a0b4f88281499fec30/Halong_Bucht_Vietnam.jpg')],
  ['Sri Lanka', ct('6etzBcZlvbOLHqzCOq0NES/764d862634b04fbcd521a3ad01740f1d/iStock-1779897953.jpg')],
  ['Malaysia', ct('X7b0PdKpWDMzl19jytcJ6/d0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg')],
  ['Indonesia', ct('61b5ymnc76Gat5QEm4R7Uv/236a66af31569408e5fba01e2dcb53b1/Kelingking_Beach__Nusa_Penida__Indonesien_NTCG__1_.png')],
  ['Maldives', ct('3hsuR5UvfamJlqKCTM81Ii/b43e484beb8b92c43047174a4a3e7be8/Maldiven__Holzsteg.jpg')],
  ['Cambodia', ct('3zbplvZU8SZYLZqdmaPsZv/c16250ef83321324f10fbf00c9b058a1/Kambodscha_AngkorWat.jpg')],
  ['Philippines', ct('1o2rtINxvG8y4nqhK5Bvgp/d09a493b9ea9c4db223ad37ba237b646/Philippinen_Palawan_Coron_Lagoone_TCG.png')]
];
const ASIA_HREF = { Vietnam: '/asien/vietnam', 'Sri Lanka': '/asien/sri-lanka', Thailand: '/asien/thailand', Malaysia: '/asien/malaysia' };
export const related = { h2: `More destinations in ${destination.continent}`, items: asiaList.map(([title, image]) => ({ title, alt: title, tag: null, href: ASIA_HREF[title] || '#', image })) };

export const singapore = {
  pageTitle: 'Singapore Honeymoons and holidays | Hi Tours',
  hero, crumbs, intro, tours, products, features, places, activities, themes, related, holidaysPath, holidaysCrumbs, plan, faq, planner,
  reviews: { ...egyptReviews, ...reviews }, customerReviews,
  plannerSource: 'singapore-planner'
};
