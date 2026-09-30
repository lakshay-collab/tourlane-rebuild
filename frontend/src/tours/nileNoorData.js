// Egypt product for Hi Tours – "Nile Noor". Content adapted (facts + owned imagery)
// from the supplied tour package. Copy rewritten in Hi Tours voice, INR pricing.

const P = '/egypt-tours/nile-noor-cruise/';
const I = {
  ship: P + 'img1_268588_667867ba66317.webp',
  edfu: P + 'img2_268588_65c06bf90bd50.webp',
  komombo: P + 'img3_268588_65c06c0372d3b.webp',
  ruins: P + 'img4_268588_65c06c1241e7b.webp',
  cabin: P + 'img5_268588_660731ccce4b2.webp',
  deck: P + 'img6_268588_660731ccce4b3.webp',
  suite: P + 'img7_268588_660731ccce4b4.webp',
  lounge: P + 'img8_268588_660731ccce4b5.webp',
  hatshepsut: P + 'img9_268588_660731cce7351.webp',
  royal: P + 'accommodation_royal_esadora.webp'
};

export const cardImages = [I.ship, I.edfu, I.komombo, I.hatshepsut];

export const detail = {
  slug: 'nile-noor-cruise',
  region: 'africa',
  ctaHref: '/l/egypt/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan – no obligation & tailor-made',
  banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Nile Noor: A Royal 4-Day Nile Cruise & Temple Trail',
  alt: 'Nile Noor – a 4-day Aswan to Luxor Nile cruise',
  days: '4 days',
  stations: '4 stops',
  transport: 'Nile cruise & transfers',
  tag: 'Nile cruise',
  price: 65486,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Aswan', 'Kom Ombo', 'Edfu', 'Luxor'],
  tags: ['Nile cruise', 'Short trips'],
  stats: { days: 4, cities: 4, hotels: 1, activities: 9, transfers: 2 },
  gallery: [I.ship, I.edfu, I.komombo, I.hatshepsut, I.lounge],
  services: [
    ['1 cruise ship', 'Accommodation'],
    ['9 activities', 'Activities'],
    ['2 transfers', 'Transport'],
    ['9 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ria Banerjee',
    image: '/egypt/expert-ria.webp',
    role: 'Egypt expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'A short, sweet south-to-north Nile cruise – three nights aboard a 5-star ship from Aswan through Kom Ombo and Edfu to Luxor, with guided temple stops all the way.',
    quoteMore: 'My tip: this is the perfect add-on to a Cairo trip, or a relaxing long weekend on its own. Add the optional sunrise hot-air balloon over Luxor on the final morning – it is unforgettable.',
    more: 'Read more',
    less: 'Read less'
  }
};

export const route = {
  stops: [
    {
      letter: 'A', name: 'Aswan – embarkation', dayLabel: 'Day 1',
      bullets: [
        'Airport pick-up at Aswan and check in to your 5-star cruiser',
        'The Aswan High Dam',
        'A motorboat trip to Philae Island and the Temple of Isis',
        'Lunch and dinner on board as the cruise begins'
      ],
      images: [I.ship, I.royal, I.ruins],
      activities: [
        { name: 'Aswan High Dam', description: 'The vast dam that created Lake Nasser.', optional: false, image: I.ruins },
        { name: 'Philae Temple by motorboat', description: 'The island temple of Isis, reached across the water.', optional: false, image: I.ruins }
      ],
      accommodation: { name: 'Royal Esadora Nile Cruise (or similar 5★)', description: '3 nights · Nile cruise · cabin', images: [I.royal, I.cabin, I.deck, I.suite] }
    },
    {
      letter: 'B', name: 'Kom Ombo', dayLabel: 'Day 2',
      bullets: [
        'The unique dual Temple of Kom Ombo, dedicated to Sobek and Horus',
        'Full-board dining on board as you sail north',
        'Optional early-morning excursion to the temples of Abu Simbel'
      ],
      images: [I.komombo, I.ruins],
      activities: [
        { name: 'Kom Ombo Temple', description: 'The double temple to Sobek and Horus on a Nile bend.', optional: false, image: I.komombo },
        { name: 'Abu Simbel morning tour', description: 'An optional excursion to the great rock temples.', optional: true, image: I.ruins }
      ],
      accommodation: { name: 'Royal Esadora Nile Cruise (or similar 5★)', description: 'Full board · cruise cabin', images: [I.cabin, I.deck, I.lounge] }
    },
    {
      letter: 'C', name: 'Edfu → Luxor', subtitle: 'Edfu → Luxor', dayLabel: 'Day 3',
      bullets: [
        'The Temple of Horus at Edfu, one of Egypt’s best preserved',
        'The vast Karnak Temple complex',
        'Luxor Temple in the heart of the city',
        'Full board on board as you moor at Luxor'
      ],
      images: [I.edfu, I.hatshepsut],
      activities: [
        { name: 'Temple of Horus, Edfu', description: 'The towering pylon and colonnade of Edfu.', optional: false, image: I.edfu },
        { name: 'Karnak & Luxor Temples', description: 'The great East-Bank temple complexes.', optional: false, image: I.hatshepsut }
      ],
      accommodation: { name: 'Royal Esadora Nile Cruise (or similar 5★)', description: 'Full board · cruise cabin', images: [I.suite, I.lounge, I.deck] }
    },
    {
      letter: 'D', name: 'Luxor – disembarkation', dayLabel: 'Day 4',
      bullets: [
        'The Valley of the Kings and its royal tombs',
        'The Temple of Hatshepsut at Deir el-Bahri',
        'The Colossi of Memnon',
        'Optional sunrise hot-air balloon, then airport transfer at Luxor'
      ],
      images: [I.hatshepsut, I.edfu],
      activities: [
        { name: 'Valley of the Kings', description: 'The painted rock-cut tombs of the pharaohs.', optional: false, image: I.hatshepsut },
        { name: 'Hatshepsut Temple & Memnon', description: 'The terraced temple and the Colossi of Memnon.', optional: false, image: I.hatshepsut },
        { name: 'Sunrise hot-air balloon', description: 'Float over Luxor’s West Bank at dawn.', optional: true, image: I.edfu }
      ],
      accommodation: { name: 'Disembarkation after breakfast', description: 'Transfer to Luxor International Airport', images: [I.ship, I.royal] }
    }
  ]
};

export const glance = {
  h2: 'Tour summary',
  short: 'Three nights aboard a 5-star Nile cruiser sailing Aswan → Kom Ombo → Edfu → Luxor, with guided visits to Philae, Kom Ombo, Edfu, Karnak, Luxor Temple and the Valley of the Kings.',
  readMore: 'Read more', readLess: 'Read less', hide: 'Hide tour summary',
  intro: 'A compact south-to-north Nile cruise, ideal as a short break or an add-on to a Cairo holiday.',
  intro2: 'You board at Aswan for Philae and the High Dam, sail past Kom Ombo and Edfu, and end in Luxor with the Valley of the Kings and the great East-Bank temples.',
  accommodationHeading: 'Accommodation', highlightsHeading: 'Key highlights', dayHeading: 'Day', routeHeading: 'Route',
  days: [
    { title: 'Day 1: Aswan embarkation', text: 'Board your cruiser and visit the High Dam and Philae Temple.', hotel: 'Royal Esadora Nile Cruise (5★)', highlights: ['Aswan High Dam', 'Philae Temple by motorboat', 'Lunch & dinner on board'] },
    { title: 'Day 2: Kom Ombo', text: 'The dual temple of Kom Ombo, with an optional Abu Simbel excursion.', hotel: 'Royal Esadora Nile Cruise (5★)', highlights: ['Kom Ombo Temple', 'Full-board dining', 'Optional Abu Simbel'] },
    { title: 'Day 3: Edfu & Luxor', text: 'The Temple of Horus at Edfu, then Karnak and Luxor Temples.', hotel: 'Royal Esadora Nile Cruise (5★)', highlights: ['Temple of Horus, Edfu', 'Karnak Temple complex', 'Luxor Temple'] },
    { title: 'Day 4: Luxor disembarkation', text: 'The Valley of the Kings, Hatshepsut and the Colossi of Memnon, then your airport transfer.', hotel: '—', highlights: ['Valley of the Kings', 'Hatshepsut Temple & Memnon', 'Optional sunrise balloon'] }
  ],
  outro: 'A relaxed, temple-rich cruise that is easy to extend with a Cairo add-on.'
};

export const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Africa', href: '/afrika/' },
  { label: 'Egypt', href: '/afrika/aegypten/' },
  { label: 'Nile Noor: A Royal 4-Day Nile Cruise & Temple Trail' }
];
