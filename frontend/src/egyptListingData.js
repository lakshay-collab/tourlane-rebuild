// Egypt listing page content (English, INR) for Hi Tours.
import { productImages, placeImages, activityImages, themeImages, africaImages, reviewImages } from './egyptImages';
import { cardImages as moroccoEgyptCardImages } from './moroccoEgyptData';
import { cardImages as gfImages } from './tours/egyptGrandFestivalData';
import { cardImages as mmImages } from './tours/misrMayaData';
import { cardImages as mkjImages } from './tours/misrKaJaaduData';
import { cardImages as npImages } from './tours/nilePharaohsData';
import { cardImages as pfImages } from './tours/pharaohsFeluccasData';
import { cardImages as ndImages } from './tours/nileDarshanData';
import { cardImages as nnImages } from './tours/nileNoorData';

export const holidaysPath = '/afrika/aegypten/holidays';

export const hero = {
  h1: 'Egypt Honeymoons and holidays',
  holidaysH1: 'Egypt tours & holidays',
  styleH1: (style) => `Egypt ${style.toLowerCase()} holidays`,
  cta: 'Plan for free',
  stickyCta: 'Plan your Egypt trip',
  ctaHref: '/l/egypt/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made',
  image: '/egypt/hero-egypt.webp',
  video: { vimeoId: '8951897', h: '41bf8c599a', label: 'Egypt travel film' }
};

export const trust = { label: 'Excellent', score: '4.8', outOf: 'out of 5', count: '5,000+', reviews: 'reviews', rating: 4.8 };

export const crumbs = [{ label: 'Destinations', href: '/destinations/' }, { label: 'Africa', href: '/africa/' }, { label: 'Egypt' }];
export const holidaysCrumbs = [{ label: 'Home', to: '/' }, { label: 'Egypt', to: '/afrika/aegypten' }, { label: 'Egypt tours & holidays' }];

export const styles = [
  { key: 'Family', slug: 'family', icon: 'family' },
  { key: 'Honeymoon', slug: 'honeymoon', icon: 'heart' },
  { key: 'Culture', slug: 'culture', icon: 'culture' },
  { key: 'Short trips', slug: 'short-trips', icon: 'short' },
  { key: 'Beach', slug: 'beach', icon: 'beach' },
  { key: 'Nile cruise', slug: 'nile-cruise', icon: 'boat' },
  { key: 'Luxury', slug: 'luxury', icon: 'gem' }
];
export const styleBySlug = (slug) => styles.find((s) => s.slug === slug) || null;
export const styleLanding = (slug) => `${holidaysPath}/${slug}`;

export const sorts = [
  { key: 'price-asc', label: 'Price: low to high', icon: 'sortAsc' },
  { key: 'price-desc', label: 'Price: high to low', icon: 'sortDesc' },
  { key: 'days-asc', label: 'Duration: short to long', icon: 'clock' },
  { key: 'days-desc', label: 'Duration: long to short', icon: 'clock' }
];

export const intro = {
  h2: 'About Egypt',
  text: 'Egypt is synonymous with history. Anyone visiting Cairo should include Saqqara in their itinerary. The Step Pyramid of Djoser is the oldest monumental stone structure in the world, older than Giza, and attracts a fraction of the visitors.',
  more: ' Beyond the pyramids, Egypt is a river, a desert and two seas. A Nile cruise between Luxor and Aswan strings together Karnak, the Valley of the Kings, Edfu and Philae without a single early-morning drive; the Red Sea coast at Hurghada, Marsa Alam and Sharm El-Sheikh offers some of the clearest snorkelling and diving water anywhere; and the White Desert and Siwa reward travellers with more time. October to April brings the most comfortable weather, and with direct flights from India and no long layovers, a rich itinerary fits comfortably into 8 to 12 days.',
  learnMore: 'Learn more',
  learnLess: 'Show less',
  quote: 'Egypt is one of those places the photos undersell. Standing under the Great Pyramid at sunrise, or drifting past Kom Ombo on a Nile cruise, you understand why travellers have been coming here for two thousand years.',
  quoteMore: 'My advice: don\u2019t rush it. Give Cairo two full days, sail the Nile between Luxor and Aswan instead of driving it, and finish on the Red Sea so the trip ends slower than it began. Every Egypt itinerary we build starts with what you want from the holiday, not a fixed template, and I personally check each one before it reaches you.',
  readMore: 'Read more',
  readLess: 'Read less',
  expert: { image: '/egypt/expert-ria.webp', name: 'Ria Banerjee', role: 'Head of Product & Travel Expert for Egypt' }
};

export const tours = {
  h2: 'Top-selling Egypt holiday ideas',
  allH2: 'Egypt tours & holidays',
  browse: (n) => `Browse ${n} package ${n === 1 ? 'idea' : 'ideas'}`,
  filterBy: 'Filter by',
  sortBy: 'Sort by',
  viewAll: 'View all Egypt holidays',
  styleH2: (style) => `Egypt ${style.toLowerCase()} holidays`,
  short: ['Embark on an ', ['unforgettable journey of discovery'], ' through a millennia-old culture – every Egypt holiday is tailor-made by our experts.'],
  intro: [
    ' Marvel at impressive architecture and enjoy the unique combination of desert and sea. Whether you are looking for a ', ['cultural holiday, a Nile cruise or relaxing days on the beach'], ' – our travel experts will be happy to advise you personally.'
  ],
  readMore: 'Read more',
  readLess: 'Read less',
  more: 'Show more',
  less: 'Show less',
  filterLabel: 'Travel style:',
  sortLabel: 'Sorted by:',
  clear: 'Clear',
  empty: 'No holidays match this travel style yet – clear the filter to see all Egypt holidays.'
};

// Prices in INR (converted at ~₹90/€ and ₹85/$, rounded). hotels/cities/activities/transfers for products 2–7 are placeholders.
export const products = [
  { slug: 'luxor-strand-urlaub', tag: 'Culture', styles: ['Culture', 'Luxury', 'Nile cruise', 'Beach', 'Honeymoon'], title: 'Egypt Explorer: Pyramids, Nile & Red Sea Beach Retreat — Grand Luxury Edition', days: 11, stops: 5, hotels: 4, cities: 5, activities: 12, transfers: 9, meals: 25, price: 144000, images: productImages[0] },
  { slug: 'morocco-egypt-palaces-pyramids', tag: 'Culture', styles: ['Culture', 'Luxury'], title: 'Morocco & Egypt: Palaces, Medinas & Pyramids', days: 8, stops: 3, hotels: 3, cities: 3, activities: 8, transfers: 8, meals: 7, price: 164000, images: moroccoEgyptCardImages },
  { slug: 'egypt-grand-festival', tag: 'Culture', styles: ['Culture', 'Short trips'], title: 'Egypt Grand Festival: Pyramids, Sphinx & the Mediterranean Coast', days: 5, stops: 4, hotels: 1, cities: 6, activities: 19, transfers: 7, meals: 4, price: 36621, images: gfImages },
  { slug: 'misr-maya-nile-cruise', tag: 'Nile cruise', styles: ['Nile cruise', 'Luxury', 'Culture'], title: 'Misr Maya: Cairo, Aswan & Luxor with a 5-Star Nile Cruise', days: 8, stops: 4, hotels: 3, cities: 5, activities: 19, transfers: 4, meals: 13, price: 240912, images: mmImages },
  { slug: 'misr-ka-jaadu', tag: 'Culture', styles: ['Culture', 'Nile cruise', 'Luxury'], title: 'Misr Ka Jaadu: Pyramids, Nile Cruise & the World of the Pharaohs', days: 8, stops: 4, hotels: 2, cities: 6, activities: 20, transfers: 4, meals: 17, price: 202490, images: mkjImages },
  { slug: 'nile-pharaohs-voyage', tag: 'Nile cruise', styles: ['Nile cruise', 'Culture'], title: "Nile Pharaohs' Voyage: Luxor to Aswan Cruise", days: 5, stops: 5, hotels: 1, cities: 5, activities: 9, transfers: 3, meals: 13, price: 72448, images: npImages },
  { slug: 'pharaohs-feluccas', tag: 'Luxury', styles: ['Luxury', 'Nile cruise', 'Culture'], title: 'Pharaohs & Feluccas: A Royal Egyptian Sojourn', days: 8, stops: 5, hotels: 2, cities: 5, activities: 17, transfers: 3, meals: 15, price: 382878, images: pfImages },
  { slug: 'nile-darshan', tag: 'Culture', styles: ['Culture', 'Beach', 'Family'], title: "Nile Darshan: Egypt's Royal Odyssey", days: 9, stops: 5, hotels: 4, cities: 6, activities: 25, transfers: 4, meals: 5, price: 99091, images: ndImages },
  { slug: 'nile-noor-cruise', tag: 'Nile cruise', styles: ['Nile cruise', 'Short trips'], title: 'Nile Noor: A Royal 4-Day Nile Cruise & Temple Trail', days: 4, stops: 4, hotels: 1, cities: 4, activities: 9, transfers: 2, meals: 9, price: 65486, images: nnImages }
].map((p) => ({ ...p, alt: p.title, href: `/afrika/aegypten/${p.slug}/` }));

export const formatInr = (n) => `₹${n.toLocaleString('en-IN')}`;

export const features = [
  { icon: '/pros/experts.png', title: 'Real travel experts', text: 'Benefit from our local expert knowledge and award-winning service.' },
  { icon: '/pros/organised.png', title: 'Fully organised', text: 'We take care of every detail – from inspiration to your journey home.' },
  { icon: '/pros/easy.png', title: 'Travel made easy', text: 'Multi-stop or multi-country, we make your travel wishes come true.' }
];

export const planner = {
  bg: '/egypt/planner-bg.jpg',
  h3: 'Plan your Egypt trip',
  avatars: ['/egypt/tourlaner1.webp', '/egypt/tourlaner2.webp', '/egypt/tourlaner3.webp', '/egypt/tourlaner4.webp'],
  social: '4,00,000+ travellers trust Hi Tours',
  question: 'For how many people are you planning your trip?',
  rows: [
    { label: 'Adults', sub: '13+ years', value: 2, min: 1 },
    { label: 'Children', sub: '2 to 12 years', value: 0, min: 0 },
    { label: 'Infants', sub: 'Under 2 years', value: 0, min: 0 }
  ],
  next: 'Continue',
  formTitle: 'Start customising your trip',
  formSub: 'A few quick details and your Hi Tours expert takes it from here — free, no obligation.',
  nameLabel: 'Full name',
  namePlaceholder: 'e.g. Priya Sharma',
  phoneLabel: 'Phone number',
  phonePlaceholder: '98765 43210',
  emailLabel: 'Email address',
  emailPlaceholder: 'you@example.com',
  cta: 'Start customising',
  ctaIdle: 'Fill above to start customising',
  sending: 'Sending…',
  successTitle: 'Thank you!',
  successText: 'Your request is in. A Hi Tours expert will reach out shortly to build your trip.',
  known: 'As seen in:',
  press: [
    { src: '/egypt/sueddeutsche-zeitung.svg', alt: 'Süddeutsche Zeitung', w: 96, h: 36 },
    { src: '/egypt/stern.svg', alt: 'Stern', w: 96, h: 33 },
    { src: '/egypt/die-zeit.svg', alt: 'Die Zeit', w: 123, h: 19 }
  ],
  decoration: '/egypt/L.svg'
};

export const reviews = {
  h2: 'Customers about Hi Tours',
  cta: 'Plan for free now',
  ctaHref: '/l/egypt/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made',
  items: [
    { name: 'Lysann', title: 'Top service, great app, fair price', date: '4 October 2025', stars: 5, image: reviewImages[0], text: 'The advice was tailored very individually to us. The presentation and the app are superb. Everything was easy to find and understand. We were particularly happy with the support from Ms Burchardt before and during our trip. The price was fair too.' },
    { name: 'Iris', title: 'Friendly and competent', date: '9 August 2025', stars: 5, image: reviewImages[1], text: 'Very friendly and competent staff. All change requests were dealt with quickly. I can recommend them without reservation.' },
    { name: 'Anna F.', title: 'Excellently organised', date: '22 June 2025', stars: 5, image: reviewImages[2], text: 'Our trip was excellently organised from start to finish – a heartfelt thank you for that! We were particularly impressed by the consistently outstanding service, both in the preparation and on site. A big compliment to our local guide, who was there for us at any time of day. When we unexpectedly had to leave early, we were helped immediately and without any fuss.' }
  ]
};
const egyptReviewNames = { Lysann: 'Swati', Iris: 'Rahul & Priya', 'Anna F.': 'Nancy' };
export const egyptReviewItems = reviews.items.map((r) => ({ ...r, name: egyptReviewNames[r.name] || r.name }));

const placeNames = ['Alexandria', 'Aswan', 'Hurghada', 'Cairo', 'Luxor', 'Sharm El-Sheikh'];
export const places = { h2: 'Discover these places in Egypt', items: placeNames.map((title, i) => ({ title, alt: title, tag: null, href: `#place-${i}`, image: placeImages[i] })) };

export const activities = { h2: 'The best activities on your trip', items: [
  { href: '#', title: 'An unforgettable underwater experience', alt: 'Elphinstone Reef, Red Sea, Egypt', tag: 'Diving & snorkelling', image: activityImages[0] },
  { href: '#', title: 'Enjoy sport and relaxation', alt: 'Golf holiday in Egypt', tag: 'Golf', image: activityImages[1] }
] };

export const plan = {
  h2: 'How to plan your Egypt trip',
  intro: 'Egypt – the land of the pharaohs – fascinates with millennia of history, majestic temples and stunning natural wonders. Whether a Nile cruise, a desert safari or a relaxed beach holiday on the Red Sea – experience Egypt your way with Hi Tours: safe, tailor-made and unforgettable.',
  more: 'Show more details',
  less: 'Show fewer details',
  sections: [
    { h4: 'Best time to travel & climate', text: 'The best time to visit Egypt is between October and May. These months bring pleasant temperatures of 21–29 °C – ideal conditions for cultural trips, Nile cruises or a beach holiday on the Red Sea. Summer (June to September) is very hot, especially in Upper Egypt.', links: [['Best time to visit Egypt', '#'], ['Weather in Egypt', '#']] },
    { h4: 'Trip duration & route suggestions', text: 'For a comprehensive trip to Egypt, at least 8 to 10 days are recommended. Classic routes combine Cairo, Luxor and Aswan with a Nile cruise. If you would like to add a beach holiday, continue to Hurghada, Marsa Alam or Sharm El-Sheikh.', links: [['Ideal trip duration', '#'], ['Egypt in 7 days', '#'], ['Egypt in 10 days', '#']] },
    { h4: 'Sights & culture', text: 'Visit world-famous monuments such as the Pyramids of Giza, the Valley of the Kings in Luxor, the temples of Karnak and Hatshepsut or the lively old town of Cairo. Historic mosques, souks and museums such as the Grand Egyptian Museum round off the cultural experience.', links: [['Top sights in Egypt', '#'], ['Top activities in Egypt', '#']] },
    { h4: 'Nile cruise & activities', text: 'A Nile cruise between Luxor and Aswan is one of the highlights of any trip to Egypt. Equally popular: snorkelling and diving in the Red Sea, hiking in the Sinai or desert safaris with sunsets over the dunes.', links: [['Nile cruises', '#'], ['Beaches in Egypt', '#'], ['Islands in Egypt', '#']] },
    { h4: 'Costs & budget', text: 'Travel costs in Egypt average around ₹7,500 per person per day. Luxury travellers should budget around ₹20,000 daily. Meals, taxis and many entrance fees are particularly inexpensive.', links: [['Egypt holiday costs', '#']] },
    { h4: 'Safety & entry', text: 'Indian passport holders need a visa for Egypt, which can be applied for online (e-Visa) or on arrival. Your passport must be valid for at least 6 months. Travel is generally considered safe; individual travel advice should be checked before departure.', links: [['Travel advice', '#']] }
  ]
};

export const themes = { h2: 'Travel guide & inspiration', more: 'Show more', less: 'Show less', items: [
  { href: '#', title: 'The best time to visit Egypt', tag: 'Travel guide', icon: 'sun', image: themeImages[0] },
  { href: '#', title: 'The ideal trip duration for Egypt', tag: 'Travel guide', icon: 'calendar', image: themeImages[1] },
  { href: '#', title: 'Food in Egypt: top 10 dishes', tag: 'Inspiration', icon: 'food', image: themeImages[2] },
  { href: '#', title: 'The 12 best sights in Egypt in 2026', tag: 'Inspiration', icon: 'landscape', image: themeImages[3] },
  { href: '#', title: 'Top 10 activities in Egypt', tag: 'Inspiration', icon: 'kayak', image: themeImages[4] },
  { href: '#', title: 'The 10 most beautiful beaches in Egypt', tag: 'Inspiration', icon: 'beach', image: themeImages[5] },
  { href: '#', title: 'The 5 most beautiful islands of Egypt', tag: 'Inspiration', icon: 'island', image: themeImages[6] },
  { href: '#', title: 'Egypt holiday: costs at a glance', tag: 'Travel guide', icon: 'wallet', image: themeImages[7] }
].map((t) => ({ ...t, alt: t.title })) };

export const faq = {
  h2: 'Practical information for your trip',
  items: [
    { q: 'When is the best time to visit Egypt?', a: [
      'The best time to visit Egypt is between October and May. Temperatures are pleasant in these months (20–30 °C), ideal for sightseeing and desert tours. Summer (May to September) is very hot, especially in Luxor and Aswan, but great for swimming in the Red Sea.',
      ['More information about the ', ['best time to visit Egypt', '#'], ' by season, region, type of trip, activities and more.']
    ] },
    { q: 'What is typical food in Egypt?', a: [
      'Typical Egyptian dishes include koshari (a lentil and pasta dish with tomato sauce), ful medames (cooked fava beans with oil and spices), taameya (Egyptian falafel made from fava beans) and molokhia (a green herb stew). These are often served with flatbread and mezze such as hummus and baba ghanoush.'
    ] },
    { q: 'Do Indian citizens need a visa for Egypt?', a: [
      'Yes. Indian passport holders can apply for an Egypt e-Visa online before departure or obtain a visa on arrival (subject to conditions such as a valid US, UK or Schengen visa). Your passport must be valid for at least six months from the date of entry.',
      'Our travel experts will guide you through the visa requirements as part of your travel plan, so there are no surprises at the airport.'
    ] },
    { q: 'How is my trip protected if travel conditions change?', a: [
      'Many travellers want extra flexibility and security before booking a complex trip. With Hi Tours Care Flex you can cancel or rebook your land programme up to 30 days before departure without giving a reason. Depending on the destination, further protection and flexibility options may apply.',
      'Hi Tours Care was developed to give travellers more flexibility and cover when travel conditions or personal circumstances change unexpectedly.',
      ['Find out more at: ', ['Hi Tours Care Flex', '#']]
    ] }
  ]
};

const africaNames = ['South Africa', 'Seychelles', 'Tanzania', 'Namibia', 'Botswana', 'Kenya', 'Morocco', 'Mauritius', 'Uganda'];
export const africa = { h2: 'More destinations in Africa', items: africaNames.map((title, i) => ({ title, alt: title, tag: null, href: '#', image: africaImages[i] })) };

export const customerReviews = {
  h2: 'Our customers about their Egypt trip',
  score: '4.5',
  rating: 4.5,
  count: '7,618 reviews',
  countN: 7618,
  source: 'Hi Tours customer reviews',
  summary: 'Fantastic two-week round trip in Egypt, unforgettable experiences and absolutely recommended!',
  summaryTag: 'Summarised with AI',
  avatars: ['/egypt/tourlaner1.webp', '/egypt/tourlaner2.webp', '/egypt/tourlaner3.webp', '/egypt/tourlaner4.webp'],
  photos: [
    'https://tourlane-dm-images.imgix.net/reviews/thailand/1.png?q=70&w=600&auto=format&fit=max',
    'https://tourlane-dm-images.imgix.net/reviews/thailand/4.png?q=70&w=300&auto=format&fit=max',
    'https://tourlane-dm-images.imgix.net/reviews/thailand/2.png?q=70&w=300&auto=format&fit=max',
    'https://tourlane-dm-images.imgix.net/reviews/thailand/3.png?q=70&w=450&auto=format&fit=max'
  ],
  categoriesH4: 'Ratings by category',
  categories: [
    { label: 'Accommodation', value: 4.4, icon: 'hotel' },
    { label: 'Activities', value: 4.6, icon: 'activity' },
    { label: 'Transport', value: 4.6, icon: 'transport' },
    { label: 'Expert advice', value: 4.7, icon: 'advice' },
    { label: 'Service during the trip', value: 4.5, icon: 'service' }
  ],
  planH3: 'Plan your individual round trip.',
  planText: 'Personalise the details now with your personal expert.',
  planCta: 'Plan for free',
  planExpert: '/egypt/expert-ria.webp',
  filterLabel: 'All reviews',
  items: [
    { initial: 'S', name: 'Sibel', date: 'August 2026', title: 'We booked our entire…', source: 'Trustpilot', text: 'We booked our entire Egypt trip through Hi Tours and were really very satisfied. Especially on a trip with several stops it was so pleasant that hotels, transfers, excursions and onward journeys were organised for us. We were picked up everywhere and hardly had to worry about anything. There were flight time changes on both the outbound and return flights. Hi Tours informed us, we only had to confirm the new time that suited us – everything else was taken care of and the new documents were updated directly in the app. The only problem was in Hurghada: because of a storm our boat was almost two hours late and when we arrived the booked transfer was no longer there. We contacted Hi Tours immediately and took a taxi ourselves. On the same day both the taxi costs and the costs for the missed transfer were fully refunded. We can only recommend Hi Tours!' },
    { initial: 'T', name: 'Hi Tours customer', date: 'May 2025', title: 'I am very satisfied with the transfers and the fast service from Hi Tours!', source: 'Customer survey', text: 'I had a great experience with the transfers. Everything worked perfectly! When we had a small problem with a hotel, Hi Tours immediately put us up in another one and organised the transfer. I am very satisfied!' },
    { initial: 'T', name: 'Hi Tours customer', date: 'May 2026', title: 'an absolute dream – that was really MEGA!', source: 'Hi Tours App', text: 'an absolute dream – that was really MEGA!' }
  ],
  readMore: 'Read more',
  readLess: 'Read less',
  more: 'Show more reviews'
};
