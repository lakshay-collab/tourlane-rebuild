// Sri Lanka product for Hi Tours, built from the "Emerald Isle Explorer" itinerary.
// All copy written in Hi Tours voice; imagery sourced from stock (Unsplash/Pexels).

const C1 = 'https://images.unsplash.com/photo-1740812517101-fee71e001ebc?w=1000&q=70&auto=format&fit=crop';
const C2 = 'https://images.unsplash.com/photo-1696164956256-364585b3d22b?w=1000&q=70&auto=format&fit=crop';
const C3 = 'https://images.unsplash.com/photo-1736142260757-6effc558100a?w=1000&q=70&auto=format&fit=crop';
const C4 = 'https://images.pexels.com/photos/36701050/pexels-photo-36701050.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000';

const S1 = 'https://images.unsplash.com/photo-1580794749460-76f97b7180d8?w=1000&q=70&auto=format&fit=crop';
const S2 = 'https://images.unsplash.com/photo-1627895457805-c7bf42cb9873?w=1000&q=70&auto=format&fit=crop';
const S3 = 'https://images.unsplash.com/photo-1711797750174-c3750dd9d7c9?w=1000&q=70&auto=format&fit=crop';

const D1 = 'https://images.unsplash.com/photo-1593377685064-720da51f3634?w=1000&q=70&auto=format&fit=crop';
const D2 = 'https://images.unsplash.com/photo-1704797390869-a78dee660597?w=1000&q=70&auto=format&fit=crop';
const D3 = 'https://images.pexels.com/photos/35598970/pexels-photo-35598970.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000';
const D4 = 'https://images.pexels.com/photos/35598968/pexels-photo-35598968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000';

const K1 = 'https://images.unsplash.com/photo-1642095012223-65ee6d570974?w=1000&q=70&auto=format&fit=crop';
const K2 = 'https://images.unsplash.com/photo-1665849050332-8d5d7e59afb6?w=1000&q=70&auto=format&fit=crop';
const K3 = 'https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?w=1000&q=70&auto=format&fit=crop';
const K4 = 'https://images.pexels.com/photos/38253196/pexels-photo-38253196.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000';

const T1 = 'https://images.unsplash.com/photo-1544451822-38e32b887c08?w=1000&q=70&auto=format&fit=crop';
const T2 = 'https://images.pexels.com/photos/321582/pexels-photo-321582.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000';
const T3 = 'https://images.unsplash.com/photo-1559038298-ef4eecdfdbb3?w=1000&q=70&auto=format&fit=crop';

const Y1 = 'https://images.unsplash.com/photo-1635737419031-a9e52bfcba65?w=1000&q=70&auto=format&fit=crop';
const Y2 = 'https://images.unsplash.com/photo-1558791985-4241e4011215?w=1000&q=70&auto=format&fit=crop';
const Y3 = 'https://images.unsplash.com/photo-1751660762088-2c340bd7be73?w=1000&q=70&auto=format&fit=crop';
const Y4 = 'https://images.unsplash.com/photo-1705936981588-a4192f66fcfb?w=1000&q=70&auto=format&fit=crop';

const G1 = 'https://images.pexels.com/photos/38143955/pexels-photo-38143955.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000';
const G3 = 'https://images.unsplash.com/photo-1703588866434-3ce7163742ed?w=1000&q=70&auto=format&fit=crop';

const B1 = 'https://images.unsplash.com/photo-1706257023817-851555857321?w=1000&q=70&auto=format&fit=crop';
const B2 = 'https://images.unsplash.com/photo-1763397459329-b1634a6c6be2?w=1000&q=70&auto=format&fit=crop';
const B3 = 'https://images.pexels.com/photos/15689753/pexels-photo-15689753.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000';

export const cardImages = [S1, T3, Y2, B2];

export const detail = {
  slug: 'emerald-isle-explorer-sri-lanka',
  region: 'asia',
  listHref: '/asien',
  ctaHref: '/l/sri-lanka/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan – no obligation & tailor-made',
  banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Emerald Isle Explorer: A 9-Day Sri Lanka Culture & Wildlife Experience with a Stay in Yala National Park',
  alt: 'Emerald Isle Explorer – Sri Lanka culture and wildlife experience with a stay in Yala National Park',
  video: { vimeoId: '262905783', h: '1c6ae48ecf', label: 'Emerald Isle Explorer – Sri Lanka travel film' },
  days: '9 days',
  stations: '6 stops',
  transport: 'Private transfer',
  tag: 'Culture',
  price: 94472,
  routeCode: 'CMB-SIG-KDY-YAL · 9D',
  routeLabel: 'This holiday takes you to',
  routeCodeLabel: 'Route code',
  routeCities: ['Colombo', 'Dambulla', 'Kandy', 'Nuwara Eliya', 'Yala', 'Galle', 'Bentota'],
  tags: ['Culture', 'Beach'],
  stats: { days: 9, cities: 6, hotels: 6, activities: 14, transfers: 7 },
  gallery: [S1, K3, T3, Y2, B2],
  services: [
    ['6 hotels', 'Accommodation'],
    ['14 activities', 'Activities'],
    ['7 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Kabir Shah',
    image: '/team/asia-5.webp',
    role: 'Sri Lanka & Maldives expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'One compact island, three completely different worlds – ancient temples, misty tea country and wild leopard territory.',
    quoteMore: 'My tip: climb Sigiriya early before the heat builds, and keep the pace gentle in the highlands so you actually taste the tea. Finish on the south coast at Bentota, where the beach and a mangrove boat ride are the perfect way to wind down before your flight home.',
    more: 'Read more',
    less: 'Read less'
  }
};

export const route = {
  stops: [
    {
      letter: 'A',
      name: 'Colombo',
      dayLabel: 'Day 1',
      bullets: [
        'Airport welcome and private transfer to your Colombo hotel',
        'City tour of the capital – colonial landmarks and the seafront',
        'Shopping stroll through the Arcade, Pettah and the Dutch Hospital precinct',
        'Optional: Gangaramaya Temple, Port City and Colombo after dark'
      ],
      images: [C1, C3, C2],
      activities: [
        { name: 'Colombo city tour', description: 'Colonial architecture, Galle Face Green and the buzzing bazaars.', optional: false, image: C1 },
        { name: 'Shopping in Colombo', description: 'The Arcade Independence Square, Pettah market and the Dutch Hospital.', optional: false, image: C3 },
        { name: 'Gangaramaya Temple', description: 'A lively lakeside temple and museum in the heart of the city.', optional: true, image: C4 }
      ],
      accommodation: { name: 'Hilton Colombo (or Radisson Colombo 4★)', description: '1 night · breakfast · 5★', images: [C1, C3] },
      program: { name: 'Arrival & Colombo', description: 'A gentle first day to settle in, see the highlights of the capital and shop for a few island keepsakes.', image: C2 }
    },
    {
      letter: 'B',
      name: 'Dambulla',
      subtitle: 'Dambulla → Sigiriya',
      dayLabel: 'Day 2–4',
      bullets: [
        'Drive north to the Cultural Triangle and the Dambulla Cave Temple (around 350 steps)',
        'Climb the UNESCO-listed Sigiriya Lion Rock and its royal water gardens',
        'Hiriwaduna village trek, a cooking demonstration and a home-cooked local lunch',
        'Catamaran ride with birdwatching, then an afternoon jeep safari in Minneriya'
      ],
      images: [S1, D3, S3, Y4],
      activities: [
        { name: 'Dambulla Cave Temple', description: 'Five caves of golden Buddhas and painted ceilings – a UNESCO site.', optional: false, image: D3 },
        { name: 'Sigiriya Lion Rock', description: 'The 5th-century rock fortress with frescoes and landscaped gardens.', optional: false, image: S2 },
        { name: 'Minneriya jeep safari', description: 'Afternoon safari to see wild elephants gather by the reservoir.', optional: false, image: Y1 },
        { name: 'Hiriwaduna village experience', description: 'Catamaran ride, cooking demo and a traditional village lunch.', optional: false, image: D2 }
      ],
      accommodation: { name: 'Heritance Kandalama (or Amaya Lake 4★)', description: '2 nights · breakfast · 5★', images: [D1, S3, D4] },
      program: { name: 'The Cultural Triangle', description: 'Sri Lanka’s ancient heartland – cave shrines, a legendary rock fortress and your first elephant safari.', image: S2 }
    },
    {
      letter: 'C',
      name: 'Kandy',
      dayLabel: 'Day 4–5',
      bullets: [
        'Scenic drive via a Matale spice garden to the hill capital, Kandy',
        'Visit the sacred Temple of the Tooth Relic beside Kandy Lake',
        'Evening Kandyan cultural show with drummers, dancers and fire-walkers',
        'Optional: Kandy market, arts-and-crafts centre and gem museum'
      ],
      images: [K1, K3, K2, K4],
      activities: [
        { name: 'Temple of the Sacred Tooth', description: 'Sri Lanka’s holiest Buddhist shrine on the shore of Kandy Lake.', optional: false, image: K3 },
        { name: 'Kandyan cultural show', description: 'Traditional dance, drumming and a fire-walking finale.', optional: false, image: K4 },
        { name: 'Matale spice garden', description: 'Cinnamon, cardamom and vanilla on a working spice estate.', optional: false, image: K1 }
      ],
      accommodation: { name: 'Earls Regency (or Amaya Hills 4★)', description: '1 night · breakfast · 5★', images: [K1, K2] },
      program: { name: 'Kandy & the Tooth Relic', description: 'The last royal capital of Sri Lanka, wrapped around a lake and alive with Kandyan music and dance.', image: K3 }
    },
    {
      letter: 'D',
      name: 'Nuwara Eliya',
      subtitle: 'Tea country',
      dayLabel: 'Day 5–6',
      bullets: [
        'Journey into the misty highlands through emerald tea country',
        'Tour a working tea factory and see how Ceylon tea is made',
        'Try your hand at tea plucking on the plantation slopes',
        'City tour of “Little England” with its colonial bungalows and Gregory Lake'
      ],
      images: [T3, T2, T1],
      activities: [
        { name: 'Ceylon tea factory & tasting', description: 'See leaf-to-cup production and sample a fresh highland brew.', optional: false, image: T1 },
        { name: 'Tea plucking experience', description: 'Join the pluckers among the terraced hillsides.', optional: false, image: T3 },
        { name: 'Gregory Lake', description: 'A relaxed boat or bicycle ride around the highland lake.', optional: true, image: T2 }
      ],
      accommodation: { name: 'Araliya Green City (or Araliya Green Hills 4★)', description: '1 night · breakfast · 5★', images: [T3, T2] },
      program: { name: 'Highland tea country', description: 'Cool mountain air, endless green tea terraces and the story of Ceylon tea, first-hand.', image: T2 }
    },
    {
      letter: 'E',
      name: 'Yala',
      dayLabel: 'Day 6–7',
      bullets: [
        'Descend to the dry southern plains and Yala National Park',
        'Afternoon 4×4 jeep safari in search of leopards, elephants and crocodiles',
        'Sundown over the wilderness before dinner at your safari resort'
      ],
      images: [Y2, Y1, Y3, Y4],
      activities: [
        { name: 'Yala jeep safari', description: 'Open-vehicle game drive in Sri Lanka’s most famous wildlife park.', optional: false, image: Y2 },
        { name: 'Wildlife spotting', description: 'Leopards, elephants, sloth bears, crocodiles and abundant birdlife.', optional: false, image: Y3 }
      ],
      accommodation: { name: 'Cinnamon Wild Yala (or Chaarya Resort & Spa 4★)', description: '1 night · breakfast · 5★', images: [Y2, Y4] },
      program: { name: 'Yala safari', description: 'The best chance in Asia to spot a wild leopard, in a park that runs down to the sea.', image: Y2 }
    },
    {
      letter: 'F',
      name: 'Bentota',
      subtitle: 'Galle → Bentota',
      dayLabel: 'Day 7–9',
      bullets: [
        'Coastal drive to Bentota with a stop at the Dutch-built Galle Fort',
        'Explore the ramparts, lighthouse and lanes of the historic old town',
        'Kosgoda turtle hatchery and a Balapitiya boat ride through the mangroves',
        'Beach time on the south coast, then a departure transfer on day 9'
      ],
      images: [G1, B1, B2, G3],
      activities: [
        { name: 'Galle Fort', description: 'A walk around the 17th-century Dutch fort, lighthouse and ramparts.', optional: false, image: G1 },
        { name: 'Kosgoda turtle conservation', description: 'Visit a hatchery protecting Sri Lanka’s sea turtles.', optional: false, image: B1 },
        { name: 'Balapitiya mangrove boat ride', description: 'A river cruise to Cinnamon Island with a fresh coconut drink.', optional: false, image: B3 },
        { name: 'Beach relaxation in Bentota', description: 'Golden sand and the warm water of the Indian Ocean.', optional: true, image: B2 }
      ],
      accommodation: { name: 'Heritance Ahungalla (or Ekho Surf 4★)', description: '2 nights · breakfast · 5★', images: [B1, B3, B2] },
      program: { name: 'Galle & the south coast', description: 'A colonial fort town, gentle wildlife encounters and two easy days by the beach to end the journey.', image: G1 }
    }
  ]
};

export const glance = {
  h2: 'Tour summary',
  short: 'Colombo, the Cultural Triangle of Dambulla and Sigiriya, hill-country Kandy, the tea terraces of Nuwara Eliya, a Yala safari and the beaches of Bentota – 9 days across culture, wildlife and coast.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'This private journey threads together the three faces of Sri Lanka. You start in Colombo, then head into the Cultural Triangle for the Dambulla caves, the Sigiriya rock fortress and an elephant safari in Minneriya.',
  intro2: 'From the sacred city of Kandy you climb into the cool tea highlands of Nuwara Eliya, drop south for a leopard safari in Yala, and finish among the ramparts of Galle and the palm-fringed beaches of Bentota.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1: Colombo (1 night)', text: 'Arrive on the island, tour the capital and shop through its colourful markets and colonial arcades.', hotel: 'Hilton Colombo', highlights: ['Airport meet & assist, private transfer', 'Colombo city tour', 'Shopping – Arcade, Pettah, Dutch Hospital'] },
    { title: 'Day 2–4: Dambulla & Sigiriya (2 nights)', text: 'Explore the Cultural Triangle – the Dambulla caves, Sigiriya Lion Rock, a village experience and a Minneriya safari.', hotel: 'Heritance Kandalama', highlights: ['Dambulla Cave Temple', 'Sigiriya Lion Rock & gardens', 'Hiriwaduna village trek & lunch', 'Minneriya elephant jeep safari'] },
    { title: 'Day 4–5: Kandy (1 night)', text: 'Drive via a spice garden to Kandy for the Temple of the Tooth and an evening Kandyan cultural show.', hotel: 'Earls Regency', highlights: ['Matale spice garden', 'Temple of the Sacred Tooth Relic', 'Kandyan cultural show'] },
    { title: 'Day 5–6: Nuwara Eliya (1 night)', text: 'Ride into the tea highlands for a factory tour, a plucking session and a look around “Little England”.', hotel: 'Araliya Green City', highlights: ['Ceylon tea factory & tasting', 'Tea plucking experience', 'Nuwara Eliya city tour & Gregory Lake'] },
    { title: 'Day 6–7: Yala (1 night)', text: 'Head to the southern plains for an afternoon 4×4 safari in leopard territory.', hotel: 'Cinnamon Wild Yala', highlights: ['Afternoon Yala jeep safari', 'Leopards, elephants & birdlife'] },
    { title: 'Day 7–9: Bentota & Galle (2 nights)', text: 'Stop at Galle Fort, visit a turtle hatchery, cruise the mangroves and relax on the south-coast beaches.', hotel: 'Heritance Ahungalla', highlights: ['Galle Dutch Fort & lighthouse', 'Kosgoda turtle conservation', 'Balapitiya mangrove boat ride', 'Beach time in Bentota'] },
    { title: 'Day 9: Departure', text: 'After breakfast, a private transfer takes you to Colombo airport for your onward flight.', hotel: '—', highlights: ['Private transfer to Colombo airport'] }
  ],
  outro: 'Culture, wildlife and beaches in one compact, easy-to-travel island – ideal for a first visit to Sri Lanka.'
};

export const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Asia', href: '/asien' },
  { label: 'Sri Lanka', href: '/asien' },
  { label: 'Emerald Isle Explorer' }
];
