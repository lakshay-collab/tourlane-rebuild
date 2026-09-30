// Egypt product for Hi Tours – "Misr Maya". Content adapted (facts + owned imagery)
// from the supplied tour package. Copy rewritten in Hi Tours voice, INR pricing.

const P = '/egypt-tours/misr-maya-nile-cruise/';
const I = {
  hero: P + 'hero-01.webp',
  luxor: P + 'gallery-02.webp',
  cairo: P + 'gallery-03.webp',
  map: P + 'route-map.webp'
};

export const cardImages = [I.hero, I.luxor, I.cairo, I.map];

export const detail = {
  slug: 'misr-maya-nile-cruise',
  region: 'africa',
  ctaHref: '/l/egypt/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan – no obligation & tailor-made',
  banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Misr Maya: Cairo, Aswan & Luxor with a 5-Star Nile Cruise',
  alt: 'Misr Maya Egypt tour – Cairo, Aswan and Luxor Nile cruise',
  days: '8 days',
  stations: '4 stops',
  transport: 'Flights & private transfer',
  tag: 'Nile cruise',
  price: 240912,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Cairo', 'Giza', 'Aswan', 'Abu Simbel', 'Luxor'],
  tags: ['Nile cruise', 'Luxury', 'Culture'],
  stats: { days: 8, cities: 5, hotels: 3, activities: 19, transfers: 4 },
  gallery: [I.hero, I.luxor, I.cairo, I.map],
  services: [
    ['3 hotels', 'Accommodation'],
    ['19 activities', 'Activities'],
    ['4 transfers', 'Transport'],
    ['13 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ria Banerjee',
    image: '/egypt/expert-ria.webp',
    role: 'Egypt expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Egypt’s magic in one journey – the Pyramids and Grand Egyptian Museum in Cairo, a 5-star Nile cruise through Aswan and Abu Simbel, and the temples of Luxor.',
    quoteMore: 'My tip: the flight down to Aswan saves a long drive and puts you straight onto the cruise. Abu Simbel is unforgettable in the early light, and Old Cairo’s Khan El Khalili is the perfect place to shop before you fly home.',
    more: 'Read more',
    less: 'Read less'
  }
};

export const route = {
  stops: [
    {
      letter: 'A', name: 'Cairo & Giza', dayLabel: 'Day 1–2',
      bullets: [
        'Arrival in Cairo and check in to your 5-star hotel',
        'Guided tour of the Great Pyramids of Khufu, Khafre and Menkaure',
        'The Great Sphinx of Giza and the Grand Egyptian Museum',
        'Lunch at a local restaurant overlooking the pyramids'
      ],
      images: [I.hero, I.cairo],
      activities: [
        { name: 'Pyramids of Giza & the Sphinx', description: 'The three great pyramids and the Sphinx with your Egyptologist.', optional: false, image: I.hero },
        { name: 'Grand Egyptian Museum', description: 'Tutankhamun’s treasures at the world’s largest single-civilisation museum.', optional: false, image: I.cairo },
        { name: 'Nile dinner cruise', description: 'An evening cruise past Cairo’s illuminated skyline.', optional: true, image: I.luxor }
      ],
      accommodation: { name: '5-Star Hotel, Cairo', description: '2 nights · Cairo · double room', images: [I.hero, I.cairo] }
    },
    {
      letter: 'B', name: 'Aswan & Abu Simbel', subtitle: 'Aswan → Abu Simbel', dayLabel: 'Day 3–4',
      bullets: [
        'Fly to Aswan and board your 5-star Nile cruise ship',
        'The Aswan High Dam, Philae Temple on Agilkia Island and the Unfinished Obelisk',
        'Excursion to the great temples of Abu Simbel',
        'Full-board dining on board as you begin sailing north'
      ],
      images: [I.luxor, I.map],
      activities: [
        { name: 'Philae Temple & High Dam', description: 'The temple of Isis by motorboat and the mighty Aswan High Dam.', optional: false, image: I.map },
        { name: 'Abu Simbel temples', description: 'The colossal rock temples of Ramses II and Nefertari.', optional: false, image: I.luxor }
      ],
      accommodation: { name: '5-Star Nile Cruise', description: '2 nights · full board · cruise cabin', images: [I.luxor, I.hero] }
    },
    {
      letter: 'C', name: 'Luxor', dayLabel: 'Day 5–6',
      bullets: [
        'East Bank: the vast Karnak Temple and Luxor Temple',
        'West Bank: the Valley of the Kings and the Temple of Hatshepsut',
        'The Colossi of Memnon',
        'Return flight to Cairo for your final night'
      ],
      images: [I.luxor, I.hero],
      activities: [
        { name: 'Karnak & Luxor Temples', description: 'The great East-Bank temple complexes.', optional: false, image: I.luxor },
        { name: 'Valley of the Kings', description: 'Royal rock-cut tombs and the Temple of Hatshepsut.', optional: false, image: I.hero }
      ],
      accommodation: { name: '5-Star Nile Cruise → 4-Star Hotel, Cairo', description: 'Cruise cabin then Cairo hotel', images: [I.luxor, I.cairo] }
    },
    {
      letter: 'D', name: 'Cairo & departure', dayLabel: 'Day 7–8',
      bullets: [
        'The National Museum of Egyptian Civilization and the Royal Mummies Hall',
        'The Citadel of Salah El-Din and the Mosque of Muhammad Ali',
        'A stroll through the Khan El Khalili bazaar',
        'Departure transfer to Cairo International Airport on day 8'
      ],
      images: [I.cairo, I.hero],
      activities: [
        { name: 'Citadel & Muhammad Ali Mosque', description: 'Panoramic views over Cairo from the medieval citadel.', optional: false, image: I.cairo },
        { name: 'Khan El Khalili bazaar', description: 'Cairo’s famous market for spices, lanterns and crafts.', optional: false, image: I.cairo }
      ],
      accommodation: { name: '5-Star Hotel, Cairo', description: 'Final night · breakfast · double room', images: [I.cairo, I.hero] }
    }
  ]
};

export const glance = {
  h2: 'Tour summary',
  short: 'Cairo’s Pyramids and Grand Egyptian Museum, a 5-star Nile cruise through Aswan and Abu Simbel, the temples of Luxor and Old Cairo – 8 days across 5 cities.',
  readMore: 'Read more', readLess: 'Read less', hide: 'Hide tour summary',
  intro: 'This journey pairs Egypt’s greatest cities with a relaxing 5-star Nile cruise, so you see the icons of Cairo and Luxor and unwind on the river in between.',
  intro2: 'You fly down to Aswan to save the long drive, cruise past Abu Simbel and the temples of Upper Egypt, then return to Cairo for Old Cairo and the Khan El Khalili bazaar.',
  accommodationHeading: 'Accommodation', highlightsHeading: 'Key highlights', dayHeading: 'Day', routeHeading: 'Route',
  days: [
    { title: 'Day 1–2: Cairo & Giza', text: 'Arrive in Cairo, then tour the Pyramids, the Sphinx and the Grand Egyptian Museum.', hotel: '5-Star Hotel, Cairo', highlights: ['Pyramids of Giza & the Sphinx', 'Grand Egyptian Museum', 'Lunch by the pyramids'] },
    { title: 'Day 3–4: Aswan & Abu Simbel', text: 'Fly to Aswan and board your cruise for the High Dam, Philae and the temples of Abu Simbel.', hotel: '5-Star Nile Cruise', highlights: ['High Dam & Philae Temple', 'Unfinished Obelisk', 'Abu Simbel temples'] },
    { title: 'Day 5–6: Luxor', text: 'Karnak and Luxor Temples on the East Bank, the Valley of the Kings and Hatshepsut on the West Bank.', hotel: '5-Star Nile Cruise / 4-Star Cairo', highlights: ['Karnak & Luxor Temples', 'Valley of the Kings', 'Colossi of Memnon'] },
    { title: 'Day 7: Old Cairo', text: 'The National Museum of Egyptian Civilization, the Citadel, Muhammad Ali Mosque and Khan El Khalili.', hotel: '5-Star Hotel, Cairo', highlights: ['NMEC & Royal Mummies', 'Citadel of Salah El-Din', 'Khan El Khalili bazaar'] },
    { title: 'Day 8: Departure', text: 'After breakfast, a private transfer takes you to Cairo International Airport.', hotel: '—', highlights: ['Private transfer to Cairo airport'] }
  ],
  outro: 'A classic land-and-cruise combination that balances sightseeing with relaxed days on the Nile.'
};

export const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Africa', href: '/afrika/' },
  { label: 'Egypt', href: '/afrika/aegypten/' },
  { label: 'Misr Maya: Cairo, Aswan & Luxor with a 5-Star Nile Cruise' }
];
