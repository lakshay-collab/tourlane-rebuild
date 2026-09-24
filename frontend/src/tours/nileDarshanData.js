// Egypt product for Hi Tours – "Nile Darshan". Content adapted (facts + owned imagery)
// from the supplied tour package. Copy rewritten in Hi Tours voice, INR pricing.

const P = '/egypt-tours/nile-darshan/';
const I = {
  hero: P + '01-hero-pyramids.webp', sphinx: P + '02-giza-sphinx.webp', saqqara: P + '03-luxor-temple.webp', philae: P + '04-aswan-philae.webp',
  kings: P + '05-valley-kings.webp', hurghada: P + '06-hurghada-beach.webp', orange: P + '07-orange-bay.webp', karnak: P + '08-karnak.webp',
  safari: P + '09-safari.webp', museum: P + '10-cairo-museum.webp'
};

export const cardImages = [I.hero, I.sphinx, I.kings, I.orange];

export const detail = {
  slug: 'nile-darshan',
  region: 'africa',
  ctaHref: '/l/egypt/enquiry/passengers/',
  cta: 'Start customising',
  sub: 'Your travel plan – no obligation & tailor-made',
  banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
  title: "Nile Darshan: Egypt's Royal Odyssey",
  alt: "Nile Darshan – Cairo, Luxor, Aswan and the Red Sea",
  days: '9 days',
  stations: '5 stops',
  transport: 'Overnight train & private transfer',
  tag: 'Culture',
  price: 99091,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Cairo', 'Giza', 'Saqqara', 'Aswan', 'Luxor', 'Hurghada'],
  tags: ['Culture', 'Beach', 'Family'],
  stats: { days: 9, cities: 6, hotels: 4, activities: 25, transfers: 4 },
  gallery: [I.hero, I.sphinx, I.kings, I.hurghada, I.orange],
  services: [
    ['4 hotels', 'Accommodation'],
    ['25 activities', 'Activities'],
    ['4 transfers', 'Transport'],
    ['5 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ria Banerjee',
    image: '/egypt/expert-ria.webp',
    role: 'Egypt expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'History and the beach in one trip – Cairo, Giza and Saqqara, an overnight train to Luxor, the temples of Aswan and Luxor, and finally the Red Sea at Hurghada.',
    quoteMore: 'My tip: the overnight sleeper train to Luxor is an adventure in itself and saves a day. End on the Red Sea at an all-inclusive resort, with a desert safari and a snorkelling day at Orange Bay to relax before you fly home.',
    more: 'Read more',
    less: 'Read less'
  }
};

export const route = {
  stops: [
    {
      letter: 'A', name: 'Cairo & Giza', subtitle: 'Cairo → Giza → Saqqara → Luxor', dayLabel: 'Day 1–2',
      bullets: [
        'The Egyptian Museum and King Tutankhamun’s treasures',
        'The Citadel of Salah El Din and Coptic Cairo',
        'The Pyramids of Giza, the Great Sphinx and the Step Pyramid of Saqqara',
        'Overnight sleeper train from Cairo to Luxor'
      ],
      images: [I.museum, I.sphinx, I.saqqara],
      activities: [
        { name: 'Egyptian Museum & Citadel', description: 'Tutankhamun’s treasures, the Citadel and Coptic Cairo.', optional: false, image: I.museum },
        { name: 'Pyramids of Giza & the Sphinx', description: 'The Giza plateau with your private guide.', optional: false, image: I.sphinx },
        { name: 'Saqqara Step Pyramid', description: 'The oldest stone pyramid, built for King Djoser.', optional: false, image: I.saqqara }
      ],
      accommodation: { name: 'Hotel in Cairo → overnight sleeper train', description: '1 night Cairo · 1 night on the train', images: [I.museum, I.sphinx] }
    },
    {
      letter: 'B', name: 'Aswan', dayLabel: 'Day 3–4',
      bullets: [
        'The great Nubian temple of Philae, dedicated to Isis',
        'The Unfinished Obelisk and the Aswan High Dam',
        'An oriental lunch at a local restaurant',
        'Optional day tour to the temples of Abu Simbel'
      ],
      images: [I.philae],
      activities: [
        { name: 'Philae Temple', description: 'The island temple of Isis with its columns and obelisks.', optional: false, image: I.philae },
        { name: 'Aswan High Dam', description: 'One of Egypt’s major engineering feats.', optional: false, image: I.philae },
        { name: 'Abu Simbel day tour', description: 'A drive south to the colossal rock temples of Ramses II.', optional: true, image: I.philae }
      ],
      accommodation: { name: 'Hotel in Aswan', description: '2 nights · Aswan · double room', images: [I.philae, I.kings] }
    },
    {
      letter: 'C', name: 'Luxor', dayLabel: 'Day 5–6',
      bullets: [
        'The Valley of the Kings and its painted royal tombs',
        'The Temple of Queen Hatshepsut',
        'The Colossi of Memnon',
        'The vast Karnak Temple and Luxor Temple'
      ],
      images: [I.kings, I.karnak],
      activities: [
        { name: 'Valley of the Kings', description: 'Enter the rock-cut tombs of the pharaohs.', optional: false, image: I.kings },
        { name: 'Karnak & Luxor Temples', description: 'The largest religious building ever constructed, plus Luxor Temple.', optional: false, image: I.karnak }
      ],
      accommodation: { name: 'Hotel in Luxor', description: '2 nights · Luxor · double room', images: [I.kings, I.karnak] }
    },
    {
      letter: 'D', name: 'Hurghada & the Red Sea', dayLabel: 'Day 7–9',
      bullets: [
        'Drive to Hurghada and check in to an all-inclusive Red Sea resort',
        'A desert safari with a Tanura show and Bedouin dinner',
        'A full day at Orange Bay island with lunch and snorkelling',
        'Hurghada city tour and departure on day 9'
      ],
      images: [I.hurghada, I.safari, I.orange],
      activities: [
        { name: 'Desert safari & Bedouin dinner', description: 'A Tanura show and dinner under the desert sky.', optional: false, image: I.safari },
        { name: 'Orange Bay island day', description: 'Snorkelling, lunch and water activities on a Red Sea island.', optional: false, image: I.orange },
        { name: 'Hurghada beach time', description: 'Relax on the Red Sea coast before flying home.', optional: false, image: I.hurghada }
      ],
      accommodation: { name: '4-Star All-Inclusive Resort, Hurghada', description: '2 nights · all-inclusive · sea-view room', images: [I.hurghada, I.orange] }
    }
  ]
};

export const glance = {
  h2: 'Tour summary',
  short: 'Cairo, Giza and Saqqara, an overnight train to Luxor, the temples of Aswan and Luxor and three days on the Red Sea at Hurghada – 9 days across 6 cities.',
  readMore: 'Read more', readLess: 'Read less', hide: 'Hide tour summary',
  intro: 'This royal odyssey balances Egypt’s greatest ancient sites with relaxing beach time on the Red Sea.',
  intro2: 'You start in Cairo and Giza, take an overnight sleeper train to Luxor, explore Aswan and Luxor’s temples, then unwind at an all-inclusive Hurghada resort with a desert safari and a snorkelling day.',
  accommodationHeading: 'Accommodation', highlightsHeading: 'Key highlights', dayHeading: 'Day', routeHeading: 'Route',
  days: [
    { title: 'Day 1–2: Cairo, Giza & Saqqara', text: 'The Egyptian Museum, the Citadel, the Pyramids and Saqqara, then an overnight train to Luxor.', hotel: 'Cairo hotel / sleeper train', highlights: ['Egyptian Museum & Tutankhamun', 'Pyramids of Giza & the Sphinx', 'Saqqara Step Pyramid', 'Overnight train to Luxor'] },
    { title: 'Day 3–4: Aswan', text: 'Philae Temple, the High Dam and an optional day tour to Abu Simbel.', hotel: 'Aswan hotel', highlights: ['Philae Temple', 'Aswan High Dam', 'Optional Abu Simbel'] },
    { title: 'Day 5–6: Luxor', text: 'The Valley of the Kings, Hatshepsut, the Colossi of Memnon and the temples of Karnak and Luxor.', hotel: 'Luxor hotel', highlights: ['Valley of the Kings', 'Karnak & Luxor Temples', 'Colossi of Memnon'] },
    { title: 'Day 7–9: Hurghada & Red Sea', text: 'An all-inclusive resort with a desert safari, a snorkelling day at Orange Bay and a city tour.', hotel: '4-Star All-Inclusive Resort, Hurghada', highlights: ['Desert safari & Bedouin dinner', 'Orange Bay snorkelling', 'Hurghada city tour & departure'] }
  ],
  outro: 'A brilliant history-and-beach combination, ideal for families and first-time visitors alike.'
};

export const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Africa', href: '/afrika/' },
  { label: 'Egypt', href: '/afrika/aegypten/' },
  { label: "Nile Darshan: Egypt's Royal Odyssey" }
];
