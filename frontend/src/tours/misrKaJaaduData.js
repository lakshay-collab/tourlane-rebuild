// Egypt product for Hi Tours – "Misr Ka Jaadu". Content adapted (facts + owned imagery)
// from the supplied tour package. Copy rewritten in Hi Tours voice, INR pricing.

const P = '/egypt-tours/misr-ka-jaadu/';
const I = {
  t1: P + 'tour_01.webp', t2: P + 'tour_02.webp', t3: P + 'tour_03.webp', t4: P + 'tour_04.webp',
  t5: P + 'tour_05.webp', t6: P + 'tour_06.webp', t7: P + 'tour_07.webp', t8: P + 'tour_08.webp',
  t9: P + 'tour_09.webp', t10: P + 'tour_10.webp', t11: P + 'tour_11.webp', t12: P + 'tour_12.webp',
  t13: P + 'tour_13.webp', accom: P + 'accommodation_01.webp', map: P + 'route_map.webp'
};

export const cardImages = [I.t1, I.t2, I.t7, I.t11];

export const detail = {
  slug: 'misr-ka-jaadu',
  region: 'africa',
  ctaHref: '/l/egypt/enquiry/passengers/',
  cta: 'Start customising',
  sub: 'Your travel plan – no obligation & tailor-made',
  banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Misr Ka Jaadu: Pyramids, Nile Cruise & the World of the Pharaohs',
  alt: 'Misr Ka Jaadu Egypt tour – Cairo, Alexandria and a Nile cruise to Luxor',
  days: '8 days',
  stations: '4 stops',
  transport: 'Flights & private transfer',
  tag: 'Culture',
  price: 202490,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Cairo', 'Alexandria', 'Aswan', 'Kom Ombo', 'Edfu', 'Luxor'],
  tags: ['Culture', 'Nile cruise', 'Luxury'],
  stats: { days: 8, cities: 6, hotels: 2, activities: 20, transfers: 4 },
  gallery: [I.t1, I.t2, I.t12, I.t6, I.t5],
  services: [
    ['2 hotels', 'Accommodation'],
    ['20 activities', 'Activities'],
    ['4 transfers', 'Transport'],
    ['17 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ria Banerjee',
    image: '/egypt/expert-ria.webp',
    role: 'Egypt expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'The full magic of Egypt – three days in Cairo and a day in Alexandria, then a 5-star Nile cruise from Aswan through Kom Ombo and Edfu to Luxor.',
    quoteMore: 'My tip: don’t rush Cairo – the Grand Egyptian Museum and Khan El Khalili each deserve a half day. On the cruise, the horse-drawn carriage ride into Edfu is a fun, old-fashioned touch the whole family enjoys.',
    more: 'Read more',
    less: 'Read less'
  }
};

export const route = {
  stops: [
    {
      letter: 'A', name: 'Cairo', dayLabel: 'Day 1–3',
      bullets: [
        'Arrival in Cairo and check in to your 5-star hotel',
        'The Great Pyramids of Giza, the Sphinx and the Grand Egyptian Museum',
        'The Citadel of Saladin, the Mosque of Muhammad Ali and Coptic Cairo',
        'Al-Muizz Street and the lively Khan El Khalili bazaar'
      ],
      images: [I.t1, I.t2, I.t12, I.t6],
      activities: [
        { name: 'Pyramids of Giza & the Sphinx', description: 'The Giza plateau with an optional camel ride.', optional: false, image: I.t9 },
        { name: 'Grand Egyptian Museum', description: 'The world’s greatest collection of Pharaonic treasures.', optional: false, image: I.t12 },
        { name: 'Islamic & Coptic Cairo', description: 'The Citadel, Muhammad Ali Mosque, the Hanging Church and Khan El Khalili.', optional: false, image: I.t6 },
        { name: 'Nile dinner cruise', description: 'Dinner and entertainment on the river after dark.', optional: true, image: I.t10 }
      ],
      accommodation: { name: 'The Steigenberger Pyramids Hotel (or similar 5★)', description: '4 nights · Cairo · double room', images: [I.accom, I.t8, I.t1] }
    },
    {
      letter: 'B', name: 'Alexandria', dayLabel: 'Day 4',
      bullets: [
        'Full-day trip to Alexandria on the Mediterranean coast',
        'The Bibliotheca Alexandrina and the Roman Amphitheatre',
        'Qaitbay Citadel on the harbour and the Corniche promenade'
      ],
      images: [I.t11, I.t8],
      activities: [
        { name: 'Qaitbay Citadel', description: 'The 15th-century fort guarding Alexandria’s harbour.', optional: false, image: I.t11 },
        { name: 'Bibliotheca Alexandrina', description: 'The striking modern revival of the ancient library.', optional: false, image: I.t11 },
        { name: 'Roman Amphitheatre & Corniche', description: 'Kom El-Dikka and a walk along the seafront.', optional: false, image: I.t8 }
      ],
      accommodation: { name: 'The Steigenberger Pyramids Hotel (or similar 5★)', description: 'Cairo · breakfast · return after the day trip', images: [I.accom, I.t8] }
    },
    {
      letter: 'C', name: 'Aswan, Kom Ombo & Edfu', subtitle: 'Aswan → Kom Ombo → Edfu', dayLabel: 'Day 5–6',
      bullets: [
        'Fly to Aswan and board your 5-star Nile cruise',
        'The High Dam, Philae Temple and the Unfinished Obelisk',
        'The dual temple of Kom Ombo, dedicated to Sobek and Horus',
        'A horse-drawn carriage ride to the Temple of Edfu'
      ],
      images: [I.t7, I.t4, I.t10, I.t3],
      activities: [
        { name: 'Philae & the High Dam', description: 'The island temple of Isis and the great Aswan dam.', optional: false, image: I.t7 },
        { name: 'Kom Ombo Temple', description: 'The unique double temple on a bend of the Nile.', optional: false, image: I.t3 },
        { name: 'Temple of Edfu', description: 'The best-preserved temple in Egypt, reached by carriage.', optional: false, image: I.t3 }
      ],
      accommodation: { name: 'Nile Cruise ship (5★ cabin)', description: '3 nights · full board · cruise cabin', images: [I.t4, I.t7, I.t10] }
    },
    {
      letter: 'D', name: 'Luxor & departure', dayLabel: 'Day 7–8',
      bullets: [
        'The Valley of the Kings and the Temple of Hatshepsut',
        'The Colossi of Memnon',
        'The vast Karnak Temple and Luxor Temple',
        'Flight to Cairo and departure transfer on day 8'
      ],
      images: [I.t5, I.t3],
      activities: [
        { name: 'Valley of the Kings', description: 'Royal rock-cut tombs on the Theban West Bank.', optional: false, image: I.t5 },
        { name: 'Karnak & Luxor Temples', description: 'The great East-Bank temple complexes.', optional: false, image: I.t5 }
      ],
      accommodation: { name: 'Nile Cruise ship (5★ cabin)', description: 'Final cruise night · full board', images: [I.t4, I.t10] }
    }
  ]
};

export const glance = {
  h2: 'Tour summary',
  short: 'Three days in Cairo, a day on Alexandria’s coast and a 5-star Nile cruise from Aswan through Kom Ombo and Edfu to Luxor – 8 days across 6 cities.',
  readMore: 'Read more', readLess: 'Read less', hide: 'Hide tour summary',
  intro: 'This grand tour combines a full Cairo programme and a coastal day in Alexandria with a relaxing Nile cruise through Upper Egypt.',
  intro2: 'You cover the Pyramids, the Grand Egyptian Museum, Islamic and Coptic Cairo, then sail from Aswan past Kom Ombo and Edfu to the temples and tombs of Luxor.',
  accommodationHeading: 'Accommodation', highlightsHeading: 'Key highlights', dayHeading: 'Day', routeHeading: 'Route',
  days: [
    { title: 'Day 1–3: Cairo', text: 'The Pyramids, the Sphinx, the Grand Egyptian Museum, Islamic and Coptic Cairo and Khan El Khalili.', hotel: 'The Steigenberger Pyramids Hotel (5★)', highlights: ['Pyramids of Giza & Sphinx', 'Grand Egyptian Museum', 'Citadel & Muhammad Ali Mosque', 'Khan El Khalili bazaar'] },
    { title: 'Day 4: Alexandria day trip', text: 'A full day on the Mediterranean coast – the Library, Qaitbay Citadel and the Roman Amphitheatre.', hotel: 'The Steigenberger Pyramids Hotel (5★)', highlights: ['Bibliotheca Alexandrina', 'Qaitbay Citadel', 'Roman Amphitheatre & Corniche'] },
    { title: 'Day 5–6: Aswan, Kom Ombo & Edfu', text: 'Fly to Aswan and board the cruise for the High Dam, Philae, Kom Ombo and Edfu.', hotel: 'Nile Cruise ship (5★)', highlights: ['High Dam & Philae Temple', 'Kom Ombo Temple', 'Temple of Edfu by carriage'] },
    { title: 'Day 7: Luxor', text: 'The Valley of the Kings, Hatshepsut, the Colossi of Memnon and the temples of Karnak and Luxor.', hotel: 'Nile Cruise ship (5★)', highlights: ['Valley of the Kings', 'Karnak & Luxor Temples', 'Colossi of Memnon'] },
    { title: 'Day 8: Departure', text: 'Fly back to Cairo and connect to your onward flight home.', hotel: '—', highlights: ['Flight Luxor → Cairo', 'Departure transfer'] }
  ],
  outro: 'A comprehensive Egypt journey that pairs the two great cities with the best of a Nile cruise.'
};

export const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Africa', href: '/afrika/' },
  { label: 'Egypt', href: '/afrika/aegypten/' },
  { label: 'Misr Ka Jaadu: Pyramids, Nile Cruise & the World of the Pharaohs' }
];
