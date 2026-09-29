// Sri Lanka destination landing – same template/data shape as vietnamListingData (destination = Sri Lanka, continent = Asia).
// The existing Emerald Isle Explorer package (asiaListingData / srilankaData.js) is reused as-is – not duplicated.
import { features, planner as egyptPlanner, reviews as egyptReviews, customerReviews as egyptCustomerReviews } from './egyptListingData';
import { products as asiaProducts } from './asiaListingData';
import { srilankaProducts } from './tours/srilankaToursData';

const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const CT2 = 'https://images.ctfassets.net/rc3dlxapnu6k';
const ct = (p) => `${CT}/${p}?w=1080&q=60&fm=webp`;
const ct2 = (p) => `${CT2}/${p}?w=1080&q=60&fm=webp`;

export const destination = { name: 'Sri Lanka', continent: 'Asia', primary: ['Colombo', 'Kandy', 'Ella', 'Galle'] };

export const holidaysPath = '/asien/sri-lanka/holidays';
export const holidaysCrumbs = [{ label: 'Home', to: '/' }, { label: 'Sri Lanka', to: '/asien/sri-lanka' }, { label: 'Sri Lanka tours & holidays' }];

export const hero = {
  h1: 'Sri Lanka Honeymoons and holidays',
  holidaysH1: 'Sri Lanka tours & holidays',
  styleH1: (style) => `Sri Lanka ${style.toLowerCase()} holidays`,
  tabAbout: 'About Sri Lanka',
  tabTours: 'Sri Lanka holidays',
  cta: 'Plan for free',
  stickyCta: 'Plan your Sri Lanka trip',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made',
  image: ct('4ty416HtZ5fnIJe5U94pUn/04e383acf72b20230360d6cdeb960993/Sigiriya_Sri_Lanka.jpg').replace('w=1080', 'w=2400'),
  imageAlt: 'Sigiriya Lion Rock at sunset, Sri Lanka'
};

export const crumbs = [{ label: 'Destinations', href: '/destinations/' }, { label: 'Asia', to: '/asien' }, { label: 'Sri Lanka' }];

export const intro = {
  h2: 'About Sri Lanka',
  text: 'Sri Lanka is more varied than most travellers expect: UNESCO sites, tea plantations, national parks and tropical coastline all sit within a few hours of each other. My tip for the Bentota region is a boat trip on the Madu Ganga – old mangroves form natural tunnels over the water and, on the banks, cinnamon is still peeled by hand. Little known and absolutely worth it.',
  more: ' The island divides neatly into a cultural triangle in the north (Anuradhapura, Polonnaruwa, Sigiriya and Dambulla), the tea-covered hill country around Kandy, Nuwara Eliya and Ella, leopard country in Yala and Wilpattu, and beaches on every coast – Bentota and Mirissa in the south-west, Trincomalee and Arugam Bay in the east. Because the two monsoons hit opposite coasts at different times, there is always a sunny shore somewhere, and with direct flights from India a rich itinerary fits comfortably into 7 to 14 days.',
  learnMore: 'Learn more',
  learnLess: 'Show less',
  quote: 'If you have a little time in Colombo, take the train a few stops to the suburb of Mount Lavinia. Behind the famous hotel there are a handful of local beach bars where you can linger over a drink late into the evening.',
  quoteMore: 'Privately guided tours in Sri Lanka offer excellent value compared with other countries and are definitely worth it. A ride on one of the fabulous railway lines – Kandy to Ella above all – can be built in and is a must for every traveller. And for something off the beaten path, climb Pidurangala Rock: the non-touristy alternative to Sigiriya, which you then admire from across the plain.',
  readMore: 'Read more',
  readLess: 'Read less',
  expert: { image: '/team/asia-5.webp', name: 'Kabir Shah', role: 'Travel expert for Sri Lanka & Maldives' }
};

export const tours = {
  h2: 'Top-selling Sri Lanka holiday ideas',
  allH2: 'Sri Lanka tours & holidays',
  styleH2: (style) => `Sri Lanka ${style.toLowerCase()} holidays`,
  browse: (n) => `Browse ${n} package ${n === 1 ? 'idea' : 'ideas'}`,
  filterLabel: 'Travel style:',
  sortLabel: 'Sorted by:',
  filterBy: 'Filter by',
  sortBy: 'Sort by',
  empty: 'No holidays match this travel style yet – clear the filter to see all Sri Lanka holidays.',
  viewAll: 'View all Sri Lanka holidays',
  short: ['Embark on an ', ['unforgettable journey of discovery'], ' from the cultural triangle to the leopards of Yala – every Sri Lanka holiday is tailor-made by our experts.'],
  intro: [
    ' Marvel at the Lion Rock of Sigiriya, the Temple of the Tooth in Kandy and the tea country around Ella. Whether you are looking for a ', ['cultural tour, a wildlife safari or relaxing days on the beach'], ' – our travel experts will be happy to advise you personally.'
  ],
  readMore: 'Read more',
  readLess: 'Read less'
};

// Existing approved package – referenced from the Asia catalogue (same slug/href/data); only a `styles` field is added for the holidays filter.
const emeraldIsle = asiaProducts.find((p) => p.slug === 'emerald-isle-explorer-sri-lanka');
export const products = [{ ...emeraldIsle, styles: ['Culture', 'Family', 'Honeymoon'] }, ...srilankaProducts];

export const planner = { ...egyptPlanner, h3: 'Plan your Sri Lanka trip', bg: ct('52ZxIJbx0zC3QmeXtTjVpo/b109083307d8ee990f394165679c4ccc/Sri_Lanka__Ella__Neun-Bogen-Br%C3%BCcke.jpg').replace('w=1080', 'w=2000') };

export const reviews = {
  ...egyptReviews,
  h2: 'Customers about Hi Tours',
  items: [
    { name: 'Ayushi', title: 'Recommendation', date: '13 October 2025', stars: 5, image: '/sri-lanka/reviews/ella.webp', text: 'Great contact with our travel expert while planning – quick and competent, and our wishes were taken into account. When one hotel in Sri Lanka turned out differently than described, the hotline was reachable, helpful and sorted a change without fuss; the extra cost was refunded afterwards.' },
    { name: 'Prachi', title: 'A wonderful Sri Lanka round trip as a family', date: '29 April 2025', stars: 5, image: '/sri-lanka/reviews/kandy-ella-train.webp', pos: '50% 40%', text: 'We had a great, well-organised round trip through Sri Lanka. The hotels were good to very good, the activities were chosen to suit our family and the highlight was our local guide, who showed us his home country. Rumesh, if you read this: thank you – you do a super job!' },
    { name: 'Suman', title: 'A dream trip at a high level', date: '12 February 2024', stars: 5, image: '/sri-lanka/reviews/beach.webp', pos: '50% 80%', text: 'The trip was perfectly planned and took all our wishes into account. Every hotel was of a high standard, very clean and centrally located, and the excursions were very well organised. Our first trip with Hi Tours and certainly not the last.' }
  ]
};

// Destination-specific version of the holidays-page customer reviews block (same structure as Egypt's).
export const customerReviews = {
  ...egyptCustomerReviews,
  h2: 'Our customers about their Sri Lanka trip',
  summary: 'Wonderful Sri Lanka round trip – hotels, guide and organisation were excellent and the trip was a dream.',
  photos: [ct('54HxN7XjxWJIEbomRTlOjz/f78d77d857d450d34e468eff0a228bb7/Sigiriya_Sri_Lanka.png').replace('w=1080', 'w=600'), ct('3LUvuCLQpxscwG17oRV4tH/1c3561d56269ee5177e6a3711f564eeb/Sri_Lanka-Family-1.jpg').replace('w=1080', 'w=300'), ct('1pJVEFtmaAbZ2hILLe7SiM/b3124bf63641293841dee93466bc29de/iStock-1199024368.jpg').replace('w=1080', 'w=300'), ct('5UXyem5q8ccxNZDahYXQZV/c066a2d74db93b0fb689ceb3d5ab1ba5/Sri_Lanka__Elefantenherde_im_Fluss.jpg').replace('w=1080', 'w=450')],
  planExpert: '/team/asia-5.webp',
  items: reviews.items.map((r) => ({ initial: r.name[0], name: r.name, date: r.date, title: r.title, source: 'Trustpilot', text: r.text }))
};

const placeList = [
  ['Colombo', ct('5Ct3r5b6xduSjwU0QaSWjl/88511cf3f2d85c643f081681d172f68e/Colombo_SriLanka_2.jpg')],
  ['Kandy', ct('5txxVlE127H9wf3FeJUKox/f8f3ad88cca71fc13bce4579481061f2/Kandy_Sri_Lanka_2.jpg')],
  ['Ella', ct('6o1IxfGRBROVANrXe8gXBY/e44cf3cddb8077d8674f3a6a1b576d8b/Ella_Sri_Lanka.jpg')],
  ['Galle', ct('74ItYZBeAzDqpNS76sj5Zg/a4e9c05ccc5070757dfdf657e93a819f/Galle_Sri_Lanka.jpg')],
  ['Sigiriya', ct('4ty416HtZ5fnIJe5U94pUn/04e383acf72b20230360d6cdeb960993/Sigiriya_Sri_Lanka.jpg')],
  ['Nuwara Eliya', ct('6QvAxLipu3xvmlnPE5HN0w/a196045328212c43388d14d1b8c76d5c/Sri_Lanka__Central_Province__Nuwara_Eliya__Stausee.jpg')],
  ['Bentota', ct('2Qmktfpd63iN6dIbGQVV5a/a739f37a3d1bd5d3613cbe380b96394d/Hikkaduwa_Sri_Lanka.jpg')]
];
export const places = { h2: `Discover these places in ${destination.name}`, items: placeList.map(([title, image], i) => ({ title, alt: title, tag: null, href: `#place-${i}`, image })) };

export const activities = { h2: 'The best activities on your trip', items: [
  { href: '#', title: 'Dense jungle and lush grassland', alt: 'Elephant herd crossing a river on safari in Sri Lanka', tag: 'Safari', image: ct('5UXyem5q8ccxNZDahYXQZV/c066a2d74db93b0fb689ceb3d5ab1ba5/Sri_Lanka__Elefantenherde_im_Fluss.jpg') },
  { href: '#', title: 'Rainforest and tea terraces', alt: 'Hiker at Dunhinda Falls, Sri Lanka', tag: 'Hiking', image: ct('1chS8NZoHwA5JlZdLd8WiO/7157bc5b368cb500a8dcda12dba82715/Sri_Lanka__Wandern.jpg') }
] };

export const plan = {
  h2: 'How to plan your Sri Lanka trip',
  intro: 'Sri Lanka offers a journey full of cultural variety, warm hospitality and impressive landscapes. Immerse yourself in the island’s Buddhist culture, discover UNESCO-protected cities and go on safari in search of leopards. Add green tea plantations, golden beaches and ever-changing scenery – all on a single trip. Experience Sri Lanka your way with Hi Tours: safe, tailor-made and unforgettable.',
  more: 'Show more details',
  less: 'Show fewer details',
  sections: [
    { h4: 'Destinations & sights', text: 'Culture and UNESCO heritage in the Lion Rock of Sigiriya, the cave temples of Dambulla, the Temple of the Tooth in Kandy and the ancient royal cities of Anuradhapura and Polonnaruwa; leopards, elephants and crocodiles on safari in Yala, Minneriya or Wilpattu; tea plantations around Nuwara Eliya and the spectacular train to Ella; beaches in Mirissa, Unawatuna and Bentota; and multicultural Colombo and colonial Galle.', links: [['Top sights in Sri Lanka', '#'], ['Sigiriya', '#'], ['Yala National Park', '#']] },
    { h4: 'Best time to travel & climate', text: 'Sri Lanka is warm all year; the two monsoons create regional differences. The south and west coasts are at their best from December to March, the north and east from May to October, and the hill country can be visited year-round. Surf in the south from November to April and in the east from April to September; dive or watch whales between January and April.', links: [['Best time to visit Sri Lanka', '#']] },
    { h4: 'Activities & adventure', text: 'Jeep safaris in Yala, Minneriya or Wilpattu; the climb to Adam’s Peak, trekking in the Horton Plains or up Ella Rock; surfing in Arugam Bay or Hikkaduwa; diving and snorkelling in Trincomalee or Mirissa; yoga and Ayurveda retreats in the south; and a cuisine of curries, kottu roti, fresh fish and Ceylon tea.', links: [['Activities in Sri Lanka', '#'], ['Safari & wildlife', '#'], ['Surfing', '#']] },
    { h4: 'Trip duration & routes', text: 'We recommend 10 to 14 days for a first visit. 7 days cover Anuradhapura, Sigiriya, Kandy and Colombo; 10 days add Trincomalee or Minneriya; 14 days fit in Nuwara Eliya, the Horton Plains and Yala; and 21 days allow every highlight plus beach time in Galle, Mirissa or on the east coast.', links: [['Ideal trip duration', '#']] },
    { h4: 'Beaches & beach holidays', text: 'Between December and March the southern resorts of Mirissa, Unawatuna and Tangalle are the favourites; from May to September the east coast – Arugam Bay, Trincomalee and Nilaveli – has the best conditions; and the west around Bentota and Negombo is ideal for an easy arrival and departure.', links: [['Beaches in Sri Lanka', '#'], ['East coast holidays', '#']] },
    { h4: 'Costs & budget', text: 'Comfortable travel with 3-star hotels, guided tours and taxis averages around ₹6,000 per person per day. Luxury travellers with 4- to 5-star hotels, private drivers and exclusive safaris should budget around ₹15,000 daily. A private driver costs roughly ₹4,500 per day – but do not skip the train from Ella to Kandy.', links: [['Sri Lanka holiday costs', '#']] },
    { h4: 'Entry & practical tips', text: 'Indian passport holders apply online for a Sri Lanka ETA (Electronic Travel Authorisation) before departure. Your passport must be valid for at least six months beyond your return date. No compulsory vaccinations; hepatitis A protection is recommended. Keep valuables close in busy places.', links: [['Travel advice', '#']] },
    { h4: 'Families & honeymoons', text: 'For families, the calm, shallow beaches of Bentota and Nilaveli are a hit, and safaris are a unique adventure for children. Honeymooners book beach resorts in Tangalle or Mirissa, private drivers and Ayurveda spas – the perfect mix of relaxation and romance. Sri Lanka also combines beautifully with the Maldives.', links: [['Sri Lanka family holidays', '#'], ['Sri Lanka honeymoons', '#']] }
  ]
};

export const themes = { h2: 'Travel guide & inspiration', more: 'Show more', less: 'Show less', items: [
  { href: '#', title: 'The best time to visit Sri Lanka', tag: 'Travel guide', icon: 'sun', image: ct2('7KnfiYGnqJFkntUImDM5QS/ab0fbc23f04a288e172ef9bc6cb61d02/Sri_Lanka_L%C3%B6wenfels_Blauer_Himmel.jpg') },
  { href: '#', title: 'The ideal trip duration for Sri Lanka', tag: 'Travel guide', icon: 'calendar', image: ct2('6Dps2jF2ff5ijkXE1DG1YV/54de06feb6774a0d43a48fdf002a6cb8/Duration-Sri_Lanka-1.jpg') },
  { href: '#', title: 'Sri Lanka insider tips', tag: 'Inspiration', icon: 'island', image: ct2('76Pm72mkhHfk1EfIVtEKig/697596facd62cf9d5bf9e17350d52485/iStock-925369898.jpg') },
  { href: '#', title: 'Top 10 activities in Sri Lanka', tag: 'Inspiration', icon: 'kayak', image: ct2('ufmihfcYUltgQUfqiSBJm/065c5331fddb2af74babaa4b9b884b7c/Sri_Lanka__S_dprovinz__Yala__Elefanten-Safari.jpg') },
  { href: '#', title: 'Food in Sri Lanka: top 10 dishes', tag: 'Inspiration', icon: 'food', image: ct2('14i7D3YmtbUHkiobBODVhr/9f40f441527ee17767c54980243dc065/Sri-lankisches_Gericht__Kiribath.jpg') },
  { href: '#', title: 'The 16 best sights in Sri Lanka in 2026', tag: 'Inspiration', icon: 'landscape', image: ct2('4LJ2ptphHPQYZ0McytZbID/dc643191c789c8b253bd4c14482b7aa6/Sri_Lanka__Wilpattu-Nationalpark.jpg') },
  { href: '#', title: 'The 15 most beautiful beaches in Sri Lanka', tag: 'Inspiration', icon: 'beach', image: ct2('7FHrCvGS8dRm0aCK9GAMcA/998dfbeec2e2deae978e4ee396eafc4e/Sri_Lanka_Hiriketiya_Beach.jpg') },
  { href: '#', title: 'Sri Lanka holiday: costs at a glance', tag: 'Travel guide', icon: 'wallet', image: ct2('12bg9Xx0ChZSl30lABvEE7/2a970749e5d2067b09e86edf21690ae2/iStock-1055964410.jpg') }
].map((t) => ({ ...t, alt: t.title })) };

export const faq = {
  h2: 'Practical information for your trip',
  items: [
    { q: 'When is the best time for a Sri Lanka round trip?', a: [
      'There is no single best time, because the island can be visited all year and it depends on whether you travel the south, east or west coast. The national parks are ideal from November to April; south-west beaches from December to March and the east from May to October. Whales and dolphins are seen in the south from January to April and in the east from May to October, turtles from September to March.',
      ['More information about the ', ['best time to visit Sri Lanka', '#'], ' by season, region, type of trip, activities and more.']
    ] },
    { q: 'How long do you need for a Sri Lanka trip?', a: ['The recommended duration is generally between 10 and 14 days. That gives you enough time for the main attractions – Colombo, Kandy, Galle and the tea plantations of Nuwara Eliya. If you also want to explore the national parks and beaches, plan at least 2 to 3 weeks.'] },
    { q: 'What is typical food in Sri Lanka?', a: ['Sri Lankan food is rich and spicy. Popular dishes are polos (young jackfruit curry), hoppers (crispy rice pancakes with egg), kottu (chopped flatbread stir-fried with vegetables and meat) and string hoppers (steamed rice noodles) – always with a selection of curries and sambols and a cup of Ceylon tea.'] },
    { q: 'Can Sri Lanka be combined with the Maldives?', a: ['Yes! Sri Lanka and the Maldives are only a short flight apart and make a perfect culture-and-beach combination. Our travel experts will be happy to build a combined itinerary for you.'] },
    { q: 'Is Sri Lanka suitable for families?', a: ['Sri Lanka is an excellent destination for families. Distances are short, there are countless activities, many hotels have child-friendly facilities and the people are very welcoming. Safaris in particular are a unique adventure for children.'] },
    { q: 'How is my trip protected if travel conditions change?', a: [
      'With Hi Tours Care Flex you can cancel or rebook your land programme up to 30 days before departure without giving a reason. Depending on the destination, further protection and flexibility options may apply.',
      ['Find out more at: ', ['Hi Tours Care Flex', '#']]
    ] }
  ]
};

const asiaList = [
  ['Vietnam', ct('6KpaBlYiRchxRrYsS84QgO/dfb8fec25316c0c719d2aa7a5794dc31/NinhBinhProvinz_Tempel.jpg'), '/asien/vietnam'],
  ['Thailand', ct('27MnAH4RS1zTSFygAmnq5i/97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg'), '/asien/siam-splendour-thailand'],
  ['Indonesia', ct('61b5ymnc76Gat5QEm4R7Uv/236a66af31569408e5fba01e2dcb53b1/Kelingking_Beach__Nusa_Penida__Indonesien_NTCG__1_.png'), '#'],
  ['Japan', ct('5E91LAbIo29xmfzemwDnnu/082cd826dbf9b2744cbcf00015005330/Japan_MtFuji.jpg'), '#'],
  ['Maldives', ct('3hsuR5UvfamJlqKCTM81Ii/b43e484beb8b92c43047174a4a3e7be8/Maldiven__Holzsteg.jpg'), '#'],
  ['Cambodia', ct('3zbplvZU8SZYLZqdmaPsZv/c16250ef83321324f10fbf00c9b058a1/Kambodscha_AngkorWat.jpg'), '#'],
  ['Malaysia', ct('X7b0PdKpWDMzl19jytcJ6/d0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg'), '#'],
  ['Singapore', ct('4B5tE96BHxRVFYUVJQibEE/efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg'), '#'],
  ['Philippines', ct('1o2rtINxvG8y4nqhK5Bvgp/d09a493b9ea9c4db223ad37ba237b646/Philippinen_Palawan_Coron_Lagoone_TCG.png'), '#']
];
export const related = { h2: `More destinations in ${destination.continent}`, items: asiaList.map(([title, image, href]) => ({ title, alt: title, tag: null, href, image })) };

export const srilanka = {
  pageTitle: 'Sri Lanka Honeymoons and holidays | Hi Tours',
  hero, crumbs, intro, tours, products, features, places, activities, themes, related, holidaysPath, holidaysCrumbs, plan, faq, planner, reviews, customerReviews,
  plannerSource: 'srilanka-planner'
};
