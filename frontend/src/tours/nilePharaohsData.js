// Egypt product for Hi Tours – "Nile Pharaohs' Voyage". Content adapted (facts + owned imagery)
// from the supplied tour package. Copy rewritten in Hi Tours voice, INR pricing.

const P = '/egypt-tours/nile-pharaohs-voyage/';
const I = {
  hero1: P + '01_HERO_Luxor_Temple.webp', hero2: P + '02_HERO_Luxor_Temple_Evening.webp', hero3: P + '03_HERO_Luxor_Obelisk_Colossi.webp',
  edfu: P + '04_LANDMARK_Temple_of_Horus_Edfu.webp', falcon: P + '05_LANDMARK_Falcon_Horus_Statue_Edfu.webp', edfuEnt: P + '06_LANDMARK_Temple_of_Horus_Entrance.webp',
  philae: P + '07_LANDMARK_Philae_Temple.webp', philaeCt: P + '08_LANDMARK_Philae_Temple_Courtyard.webp', osiride: P + '09_LANDMARK_Osiride_Statues.webp',
  memnon: P + '10_LANDMARK_Colossi_of_Memnon.webp', karnak: P + '11_LANDMARK_Karnak_Temple_Columns.webp', relief: P + '12_LANDMARK_Temple_Relief_Closeup.webp',
  ship: P + '13_CRUISE_Nile_River_Cruise_Ship.webp', sunset: P + '14_CRUISE_Nile_Sunset_from_Ship.webp', stair: P + '15_CRUISE_Temple_Interior_Staircase.webp',
  balloons: P + '16_ACTIVITY_Hot_Air_Balloons_Luxor.webp', joy: P + '17_ACTIVITY_Luxor_Temple_Joy.webp', museum: P + '18_ACTIVITY_Egyptian_Museum.webp',
  nubian: P + '19_ACTIVITY_Nubian_Village_Experience.webp', dam1: P + '20_ACTIVITY_Aswan_High_Dam_Viewpoint.webp', dam2: P + '21_ACTIVITY_Aswan_High_Dam_Panorama.webp',
  map: P + '22_MAP_Nile_Cruise_Route_Map.webp', accom: P + '23_ACCOMMODATION_Nile_Treasure_Cruise_Ship.webp'
};

export const cardImages = [I.hero1, I.karnak, I.balloons, I.philae];

export const detail = {
  slug: 'nile-pharaohs-voyage',
  region: 'africa',
  ctaHref: '/l/egypt/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan – no obligation & tailor-made',
  banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
  title: "Nile Pharaohs' Voyage: Luxor to Aswan Cruise",
  alt: "Nile Pharaohs' Voyage – a Luxor to Aswan Nile cruise",
  days: '5 days',
  stations: '5 stops',
  transport: 'Nile cruise & transfers',
  tag: 'Nile cruise',
  price: 72448,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Luxor', 'Esna', 'Edfu', 'Kom Ombo', 'Aswan'],
  tags: ['Nile cruise', 'Culture'],
  stats: { days: 5, cities: 5, hotels: 1, activities: 9, transfers: 3 },
  gallery: [I.hero1, I.hero2, I.karnak, I.balloons, I.philae],
  services: [
    ['1 cruise ship', 'Accommodation'],
    ['9 activities', 'Activities'],
    ['3 transfers', 'Transport'],
    ['13 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ria Banerjee',
    image: '/egypt/expert-ria.webp',
    role: 'Egypt expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'A pure Nile cruise – four nights aboard a comfortable ship sailing from Luxor to Aswan, with guided temple visits at Karnak, the Valley of the Kings, Edfu, Kom Ombo and Philae.',
    quoteMore: 'My tip: add the optional sunrise hot-air balloon over Luxor’s West Bank – it is the most magical way to see the temples and the river. The festive Galabiya party on board is a fun cultural evening too.',
    more: 'Read more',
    less: 'Read less'
  }
};

export const route = {
  stops: [
    {
      letter: 'A', name: 'Luxor – East Bank', dayLabel: 'Day 1',
      bullets: [
        'Transfer from Luxor airport or railway station to your Nile cruise ship',
        'The vast Karnak Temple complex, dedicated to Amun',
        'Luxor Temple in the heart of the city',
        'Full-board dining begins on board'
      ],
      images: [I.hero1, I.hero2, I.karnak, I.joy],
      activities: [
        { name: 'Karnak Temple complex', description: 'The great hall of columns and the sacred lake.', optional: false, image: I.karnak },
        { name: 'Luxor Temple', description: 'The riverside temple lit beautifully after dark.', optional: false, image: I.hero1 }
      ],
      accommodation: { name: 'M/S Nile Treasure Cruise', description: '4 nights · full board · cruise cabin', images: [I.ship, I.accom, I.stair] }
    },
    {
      letter: 'B', name: 'Luxor – West Bank', subtitle: 'Luxor → Esna', dayLabel: 'Day 2',
      bullets: [
        'The Colossi of Memnon, twin guardians of the plain',
        'The Temple of Queen Hatshepsut against the cliffs',
        'The Valley of the Kings and its royal tombs',
        'Sail from Luxor towards Esna'
      ],
      images: [I.memnon, I.relief, I.balloons, I.sunset],
      activities: [
        { name: 'Valley of the Kings', description: 'Enter the painted rock-cut tombs of the pharaohs.', optional: false, image: I.relief },
        { name: 'Hatshepsut Temple & Memnon', description: 'The terraced temple and the Colossi of Memnon.', optional: false, image: I.memnon },
        { name: 'Sunrise hot-air balloon', description: 'Float over the West Bank temples at dawn.', optional: true, image: I.balloons }
      ],
      accommodation: { name: 'M/S Nile Treasure Cruise', description: 'Full board · cruise cabin', images: [I.ship, I.sunset, I.stair] }
    },
    {
      letter: 'C', name: 'Edfu & Kom Ombo', subtitle: 'Edfu → Aswan', dayLabel: 'Day 3',
      bullets: [
        'The Temple of Horus at Edfu, one of Egypt’s best preserved',
        'The riverside double temple of Kom Ombo',
        'A festive Oriental dinner and Galabiya party on board',
        'Sail on towards Aswan'
      ],
      images: [I.edfu, I.edfuEnt, I.falcon, I.osiride],
      activities: [
        { name: 'Temple of Horus, Edfu', description: 'The towering pylon and falcon statues of Horus.', optional: false, image: I.edfu },
        { name: 'Kom Ombo Temple', description: 'The unique temple to Sobek and Horus on the Nile.', optional: false, image: I.osiride }
      ],
      accommodation: { name: 'M/S Nile Treasure Cruise', description: 'Full board · Galabiya party evening', images: [I.ship, I.sunset] }
    },
    {
      letter: 'D', name: 'Aswan & departure', dayLabel: 'Day 4–5',
      bullets: [
        'The graceful Philae Temple on Agilkia Island',
        'The Aswan High Dam and its panoramic views',
        'Optional visit to a colourful Nubian village',
        'Transfer to Aswan airport or railway station on day 5'
      ],
      images: [I.philae, I.philaeCt, I.dam1, I.nubian],
      activities: [
        { name: 'Philae Temple', description: 'The island temple of Isis reached by motorboat.', optional: false, image: I.philae },
        { name: 'Aswan High Dam', description: 'The vast dam that created Lake Nasser.', optional: false, image: I.dam2 },
        { name: 'Nubian village experience', description: 'Colourful houses, crafts and warm Nubian hospitality.', optional: true, image: I.nubian }
      ],
      accommodation: { name: 'M/S Nile Treasure Cruise', description: 'Final cruise night · full board', images: [I.ship, I.accom] }
    }
  ]
};

export const glance = {
  h2: 'Tour summary',
  short: 'Four nights aboard a comfortable Nile cruiser sailing Luxor → Esna → Edfu → Kom Ombo → Aswan, with guided visits to Karnak, the Valley of the Kings, Edfu, Kom Ombo and Philae.',
  readMore: 'Read more', readLess: 'Read less', hide: 'Hide tour summary',
  intro: 'This is a pure Nile cruise for travellers who want to focus on Upper Egypt’s temples without changing hotels.',
  intro2: 'You board in Luxor, explore the East and West Banks, then sail south past Edfu and Kom Ombo to Aswan, ending with Philae Temple and the High Dam.',
  accommodationHeading: 'Accommodation', highlightsHeading: 'Key highlights', dayHeading: 'Day', routeHeading: 'Route',
  days: [
    { title: 'Day 1: Luxor East Bank', text: 'Board your cruiser and visit the great temples of Karnak and Luxor.', hotel: 'M/S Nile Treasure Cruise', highlights: ['Karnak Temple complex', 'Luxor Temple', 'Full-board dining begins'] },
    { title: 'Day 2: Luxor West Bank & sail to Esna', text: 'The Valley of the Kings, Hatshepsut and the Colossi of Memnon, then sail on.', hotel: 'M/S Nile Treasure Cruise', highlights: ['Valley of the Kings', 'Hatshepsut Temple', 'Optional sunrise balloon'] },
    { title: 'Day 3: Edfu & Kom Ombo, sail to Aswan', text: 'The Temple of Horus at Edfu and Kom Ombo, with a Galabiya party on board.', hotel: 'M/S Nile Treasure Cruise', highlights: ['Temple of Horus, Edfu', 'Kom Ombo Temple', 'Oriental dinner & Galabiya party'] },
    { title: 'Day 4: Aswan', text: 'Philae Temple, the Aswan High Dam and an optional Nubian village visit.', hotel: 'M/S Nile Treasure Cruise', highlights: ['Philae Temple', 'Aswan High Dam', 'Optional Nubian village'] },
    { title: 'Day 5: Departure', text: 'After breakfast, transfer to Aswan airport or railway station.', hotel: '—', highlights: ['Transfer to Aswan airport/rail'] }
  ],
  outro: 'A relaxed, temple-rich cruise that is easy to combine with a Cairo add-on.'
};

export const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Africa', href: '/afrika/' },
  { label: 'Egypt', href: '/afrika/aegypten/' },
  { label: "Nile Pharaohs' Voyage: Luxor to Aswan Cruise" }
];
