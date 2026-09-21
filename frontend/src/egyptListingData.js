// Egypt listing page content (English, INR). Structure mirrors tourlane.de/afrika/aegypten/.
import { productImages, placeImages, activityImages, themeImages, africaImages, reviewImages } from './egyptImages';

export const hero = {
  h1: 'Egypt Honeymoons and holidays',
  styleH1: (style) => `Egypt ${style.toLowerCase()} holidays`,
  cta: 'Plan for free',
  stickyCta: 'Plan your Egypt trip',
  ctaHref: '/l/egypt/enquiry/passengers/',
  sub: 'Your travel plan – no obligation & tailor-made',
  image: '/egypt/hero-egypt.webp'
};

export const trust = { label: 'Excellent', score: '4.8', outOf: 'out of 5', count: '5,000+', reviews: 'reviews', rating: 4.8 };

export const crumbs = [{ label: 'Destinations', href: '/destinations/' }, { label: 'Africa', href: '/africa/' }, { label: 'Egypt' }];

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
export const styleLanding = (slug) => `/afrika/aegypten/travel-style/${slug}`;

export const sorts = [
  { key: 'price-asc', label: 'Price: low to high', icon: 'sortAsc' },
  { key: 'price-desc', label: 'Price: high to low', icon: 'sortDesc' },
  { key: 'days-asc', label: 'Duration: short to long', icon: 'clock' },
  { key: 'days-desc', label: 'Duration: long to short', icon: 'clock' }
];

export const intro = {
  h2: 'About Egypt – planned by experts',
  text: 'Egypt is synonymous with history. Anyone visiting Cairo should include Saqqara in their itinerary. The Step Pyramid of Djoser is the oldest monumental stone structure in the world, older than Giza, and attracts a fraction of the visitors.',
  expert: { image: '/egypt/expert-ria.webp', name: 'Ria Banerjee', role: 'Head of Product & Travel Expert for Egypt' }
};

export const tours = {
  h2: 'Egypt holidays',
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
  { slug: 'luxor-strand-urlaub', tag: 'Culture', styles: ['Culture', 'Luxury', 'Nile cruise', 'Beach', 'Honeymoon'], title: 'Egypt Explorer: Pyramids, Nile & Red Sea Beach Retreat — Grand Luxury Edition', days: 11, stops: 5, hotels: 4, cities: 5, activities: 12, transfers: 9, price: 144000, images: productImages[0] },
  { slug: 'rundreise-7-tage', tag: 'Short trips', styles: ['Short trips', 'Culture'], title: 'Unforgettable holiday in Egypt', days: 7, stops: 1, hotels: 1, cities: 1, activities: 5, transfers: 2, price: 121500, images: productImages[1] },
  { slug: 'urlaub-am-meer', tag: null, styles: ['Culture'], title: 'Egypt round trip: experience fascinating culture', days: 8, stops: 3, hotels: 3, cities: 3, activities: 7, transfers: 6, price: 135000, images: productImages[2] },
  { slug: 'pyramiden-urlaub', tag: 'Culture', styles: ['Culture', 'Honeymoon'], title: 'Egypt: experience the fascinating pyramids', days: 9, stops: 3, hotels: 3, cities: 3, activities: 8, transfers: 6, price: 157500, images: productImages[3] },
  { slug: 'familienurlaub', tag: 'Family', styles: ['Family', 'Nile cruise'], title: 'Egypt family holiday: adventure for kids', days: 11, stops: 4, hotels: 4, cities: 4, activities: 10, transfers: 8, price: 197000, images: productImages[4] },
  { slug: 'rundreise-badeurlaub', tag: 'Culture', styles: ['Beach', 'Culture', 'Nile cruise'], title: 'Round trip and beach holiday in Egypt', days: 11, stops: 6, hotels: 6, cities: 6, activities: 11, transfers: 10, price: 245500, images: productImages[5] },
  { slug: 'rundreise-10-tage', tag: 'Culture', styles: ['Culture', 'Nile cruise', 'Luxury'], title: 'Egypt round trip: 11 days of adventure', days: 11, stops: 6, hotels: 6, cities: 6, activities: 12, transfers: 10, price: 249000, images: productImages[6] }
].map((p) => ({ ...p, alt: p.title, href: `/afrika/aegypten/${p.slug}/` }));

export const formatInr = (n) => `₹${n.toLocaleString('en-IN')}`;

export const features = [
  { icon: '/egypt/StarLike.svg', title: 'Real travel experts', text: 'Benefit from our local expert knowledge and award-winning service.' },
  { icon: '/egypt/Tickets.svg', title: 'Fully organised', text: 'We take care of every detail – from inspiration to your journey home.' },
  { icon: '/egypt/Destination.svg', title: 'Travel made easy', text: 'Multi-stop or multi-country, we make your travel wishes come true.' }
];

export const planner = {
  bg: '/egypt/planner-bg.jpg',
  h3: 'Plan your Egypt trip',
  avatars: ['/egypt/tourlaner1.webp', '/egypt/tourlaner2.webp', '/egypt/tourlaner3.webp', '/egypt/tourlaner4.webp'],
  social: '4,00,000+ travellers trust Hi Tours',
  question: 'How many people are you planning your trip for?',
  rows: [
    { label: 'Adults', sub: '13+ years', value: 2, min: 1 },
    { label: 'Children', sub: '2 to 12 years', value: 0, min: 0 },
    { label: 'Infants', sub: 'Under 2 years', value: 0, min: 0 }
  ],
  next: 'Continue',
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

export const themes = { h2: 'Travel themes: what to know about Egypt', more: 'Show more', less: 'Show less', items: [
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
