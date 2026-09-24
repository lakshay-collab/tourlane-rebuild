// Egypt product for Hi Tours – "Pharaohs & Feluccas". Content adapted (facts + owned imagery)
// from the supplied tour package. Copy rewritten in Hi Tours voice, INR pricing.

const P = '/egypt-tours/pharaohs-feluccas/';
const I = {
  hero: P + 'tour_1_hero.webp', highlight: P + 'tour_2.webp', cruise: P + 'tour_3.webp', experience: P + 'tour_4.webp', map: P + 'route_map.webp',
  tr1: P + 'traveler_1.webp', tr2: P + 'traveler_2.webp', tr3: P + 'traveler_3.webp', tr4: P + 'traveler_4.webp', tr5: P + 'traveler_5.webp',
  tr6: P + 'traveler_6.webp', tr7: P + 'traveler_7.webp', tr8: P + 'traveler_8.webp', tr9: P + 'traveler_9.webp', tr10: P + 'traveler_10.webp'
};

export const cardImages = [I.hero, I.highlight, I.cruise, I.experience];

export const detail = {
  slug: 'pharaohs-feluccas',
  region: 'africa',
  ctaHref: '/l/egypt/enquiry/passengers/',
  cta: 'Start customising',
  sub: 'Your travel plan – no obligation & tailor-made',
  banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Pharaohs & Feluccas: A Royal Egyptian Sojourn',
  alt: 'Pharaohs & Feluccas – a royal Egypt tour with a 5-star Nile cruise',
  days: '8 days',
  stations: '5 stops',
  transport: 'Flights & private transfer',
  tag: 'Luxury',
  price: 382878,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Cairo', 'Giza', 'Luxor', 'Aswan', 'Abu Simbel'],
  tags: ['Luxury', 'Nile cruise', 'Culture'],
  stats: { days: 8, cities: 5, hotels: 2, activities: 17, transfers: 3 },
  gallery: [I.hero, I.highlight, I.cruise, I.experience, I.tr1],
  services: [
    ['2 hotels', 'Accommodation'],
    ['17 activities', 'Activities'],
    ['3 transfers', 'Transport'],
    ['15 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ria Banerjee',
    image: '/egypt/expert-ria.webp',
    role: 'Egypt expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Our flagship Egypt journey – the Pyramids and Grand Egyptian Museum, a five-star Nile cruise through Luxor, Edfu, Kom Ombo and Aswan, a felucca around Elephantine Island and the temples of Abu Simbel.',
    quoteMore: 'My tip: this is the trip to do properly. Waking on the cruise to the Nile each morning is pure magic, and the private Egyptologist guides turn every temple into a story. Abu Simbel is worth the early start.',
    more: 'Read more',
    less: 'Read less'
  }
};

export const route = {
  stops: [
    {
      letter: 'A', name: 'Cairo & Giza', dayLabel: 'Day 1–2',
      bullets: [
        'Airport meet-and-greet and private transfer to your 5-star hotel',
        'Private guided tour of the Great Pyramids and the Sphinx at Giza',
        'The Grand Egyptian Museum with privileged access to Tutankhamun’s treasures'
      ],
      images: [I.hero, I.highlight, I.tr2],
      activities: [
        { name: 'Pyramids of Giza & the Sphinx', description: 'The Giza plateau with your private Egyptologist.', optional: false, image: I.hero },
        { name: 'Grand Egyptian Museum', description: 'Privileged access to the Tutankhamun collection.', optional: false, image: I.highlight }
      ],
      accommodation: { name: '5-Star Luxury Hotel, Cairo', description: '2 nights · Cairo · deluxe room', images: [I.experience, I.tr2, I.hero] }
    },
    {
      letter: 'B', name: 'Luxor', dayLabel: 'Day 3–4',
      bullets: [
        'Fly to Luxor and board your 5-star Nile cruise',
        'The Karnak Temple complex and its Great Hypostyle Hall',
        'Luxor Temple in the city centre',
        'West Bank: the Colossi of Memnon, the Valley of the Kings, Hatshepsut and the Valley of the Queens'
      ],
      images: [I.cruise, I.tr3, I.tr4],
      activities: [
        { name: 'Karnak & Luxor Temples', description: 'The Great Hypostyle Hall and the riverside Luxor Temple.', optional: false, image: I.cruise },
        { name: 'Valley of the Kings & Queens', description: 'Royal tombs, the Colossi of Memnon and Hatshepsut’s temple.', optional: false, image: I.tr3 }
      ],
      accommodation: { name: '5-Star Nile Cruise', description: '4 nights · full board · cruise cabin', images: [I.cruise, I.tr4, I.experience] }
    },
    {
      letter: 'C', name: 'Edfu, Kom Ombo & Aswan', subtitle: 'Edfu → Kom Ombo → Aswan', dayLabel: 'Day 5–6',
      bullets: [
        'The Temple of Horus at Edfu and the Temple of Sobek at Kom Ombo',
        'The Aswan High Dam and the Unfinished Obelisk',
        'The graceful Temple of Philae',
        'A felucca sail around Elephantine Island'
      ],
      images: [I.cruise, I.tr5, I.experience],
      activities: [
        { name: 'Edfu & Kom Ombo temples', description: 'Two of the Nile’s best-preserved temples.', optional: false, image: I.cruise },
        { name: 'Philae Temple & High Dam', description: 'The island temple of Isis and the great dam.', optional: false, image: I.tr5 },
        { name: 'Felucca around Elephantine', description: 'A gentle sail on a traditional Nile sailboat.', optional: false, image: I.experience }
      ],
      accommodation: { name: '5-Star Nile Cruise', description: 'Full board · cruise cabin', images: [I.cruise, I.experience, I.tr8] }
    },
    {
      letter: 'D', name: 'Abu Simbel & departure', dayLabel: 'Day 7–8',
      bullets: [
        'Guided tour of the great rock temples of Abu Simbel',
        'Return to Cairo for your final night',
        'Private transfer to Cairo International Airport on day 8'
      ],
      images: [I.tr6, I.highlight],
      activities: [
        { name: 'Abu Simbel temples', description: 'The colossal temples of Ramses II and Nefertari.', optional: false, image: I.tr6 }
      ],
      accommodation: { name: '5-Star Luxury Hotel, Cairo', description: 'Final night · breakfast · deluxe room', images: [I.experience, I.hero] }
    }
  ]
};

export const glance = {
  h2: 'Tour summary',
  short: 'The Pyramids and Grand Egyptian Museum, a five-star Nile cruise through Luxor, Edfu, Kom Ombo and Aswan, a felucca around Elephantine Island and the temples of Abu Simbel – 8 days.',
  readMore: 'Read more', readLess: 'Read less', hide: 'Hide tour summary',
  intro: 'This is our most complete Egypt journey, combining a private Cairo programme with the finest of a five-star Nile cruise.',
  intro2: 'You explore Giza and the Grand Egyptian Museum, cruise from Luxor to Aswan through the great temples, sail a felucca on the Nile and finish at the mighty temples of Abu Simbel.',
  accommodationHeading: 'Accommodation', highlightsHeading: 'Key highlights', dayHeading: 'Day', routeHeading: 'Route',
  days: [
    { title: 'Day 1–2: Cairo & Giza', text: 'Arrive in Cairo, then tour the Pyramids, the Sphinx and the Grand Egyptian Museum.', hotel: '5-Star Luxury Hotel, Cairo', highlights: ['Meet & assist arrival', 'Pyramids of Giza & the Sphinx', 'Grand Egyptian Museum'] },
    { title: 'Day 3–4: Luxor', text: 'Fly to Luxor and board the cruise for Karnak, Luxor Temple and the Theban West Bank.', hotel: '5-Star Nile Cruise', highlights: ['Karnak & Luxor Temples', 'Valley of the Kings & Queens', 'Hatshepsut & Colossi of Memnon'] },
    { title: 'Day 5–6: Edfu, Kom Ombo & Aswan', text: 'Sail past Edfu and Kom Ombo to Aswan for Philae, the High Dam and a felucca sail.', hotel: '5-Star Nile Cruise', highlights: ['Edfu & Kom Ombo temples', 'Philae Temple & High Dam', 'Felucca around Elephantine'] },
    { title: 'Day 7: Abu Simbel', text: 'Visit the great temples of Abu Simbel, then return to Cairo for your final night.', hotel: '5-Star Luxury Hotel, Cairo', highlights: ['Abu Simbel temples', 'Return flight to Cairo'] },
    { title: 'Day 8: Departure', text: 'After breakfast, a private transfer takes you to Cairo International Airport.', hotel: '—', highlights: ['Private transfer to Cairo airport'] }
  ],
  outro: 'A once-in-a-lifetime Egypt journey with private guiding throughout and a truly complete itinerary.'
};

export const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Africa', href: '/afrika/' },
  { label: 'Egypt', href: '/afrika/aegypten/' },
  { label: 'Pharaohs & Feluccas: A Royal Egyptian Sojourn' }
];
