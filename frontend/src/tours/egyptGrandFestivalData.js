// Egypt product for Hi Tours – "Egypt Grand Festival". Content adapted (facts + owned imagery)
// from the supplied tour package. Copy rewritten in Hi Tours voice, INR pricing.

const P = '/egypt-tours/egypt-grand-festival/';
const I = {
  hero: P + 'hero_pyramids.webp',
  temple: P + 'temple_ruins.webp',
  sunset: P + 'sunset_pyramids.webp',
  alex: P + 'alexandria_bay.webp',
  glyphs: P + 'hieroglyphics.webp',
  accom4: P + 'accom4star.webp',
  accom3: P + 'accom3star.webp',
  map: P + 'day3_map.webp'
};

export const cardImages = [I.hero, I.sunset, I.alex, I.glyphs];

export const detail = {
  slug: 'egypt-grand-festival',
  region: 'africa',
  ctaHref: '/l/egypt/enquiry/passengers/',
  cta: 'Start customising',
  sub: 'Your travel plan – no obligation & tailor-made',
  banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Egypt Grand Festival: Pyramids, Sphinx & the Mediterranean Coast',
  alt: 'Egypt Grand Festival tour – Pyramids, Sphinx and Alexandria',
  days: '5 days',
  stations: '4 stops',
  transport: 'Private transfer',
  tag: 'Culture',
  price: 36621,
  routeLabel: 'This holiday takes you to',
  routeCities: ['Cairo', 'Giza', 'Saqqara', 'Memphis', 'Alexandria'],
  tags: ['Culture', 'Short trips'],
  stats: { days: 5, cities: 6, hotels: 1, activities: 19, transfers: 7 },
  gallery: [I.hero, I.temple, I.sunset, I.alex, I.glyphs],
  services: [
    ['1 hotel', 'Accommodation'],
    ['19 activities', 'Activities'],
    ['7 transfers', 'Transport'],
    ['4 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ria Banerjee',
    image: '/egypt/expert-ria.webp',
    role: 'Egypt expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'A short but complete Egypt escape – the Pyramids and Sphinx, the step pyramid of Saqqara, ancient Memphis and a full day on Alexandria’s Mediterranean coast.',
    quoteMore: 'My tip: see the Great Pyramids early in the morning, and keep your camera ready on the Alexandria corniche at golden hour. The optional dinner cruise on the Nile is a lovely way to end day two.',
    more: 'Read more',
    less: 'Read less'
  }
};

export const route = {
  stops: [
    {
      letter: 'A', name: 'Cairo', dayLabel: 'Day 1',
      bullets: [
        'Airport meet & assist and private transfer from Cairo International Airport',
        'Check in to your Pyramids-view hotel and relax after the flight',
        'Optional Nile dinner cruise past the illuminated Cairo skyline'
      ],
      images: [I.hero, I.temple],
      activities: [
        { name: 'Arrival & transfer', description: 'Private airport pick-up and transfer to your hotel near the Pyramids.', optional: false, image: I.hero },
        { name: 'Nile dinner cruise', description: 'Dinner, live music and a Tanura show as Cairo lights up along the river.', optional: true, image: I.sunset }
      ],
      accommodation: { name: 'Turquoise Pyramids & GEM View Hotel (4★) or Pyramids Yard Hotel (3★)', description: '4 nights · Cairo · pyramid-view room', images: [I.accom4, I.accom3, I.hero] }
    },
    {
      letter: 'B', name: 'Giza · Memphis · Saqqara', dayLabel: 'Day 2',
      bullets: [
        'Guided tour of the Great Pyramids of Cheops, Chephren and Mykerinos',
        'The Valley Temple and a close-up view of the Great Sphinx',
        'The Step Pyramid of Zoser at Saqqara',
        'Ancient Memphis with the colossal statue of Ramses II and the Alabaster Sphinx'
      ],
      images: [I.temple, I.sunset, I.glyphs],
      activities: [
        { name: 'Great Pyramids & the Sphinx', description: 'The Giza plateau with the Valley Temple and photo assistance.', optional: false, image: I.sunset },
        { name: 'Saqqara Step Pyramid', description: 'The oldest stone pyramid, built for King Zoser.', optional: false, image: I.temple },
        { name: 'Memphis, the ancient capital', description: 'The colossal Ramses II and the Alabaster Sphinx.', optional: false, image: I.glyphs }
      ],
      accommodation: { name: 'Turquoise Pyramids & GEM View Hotel (4★) or Pyramids Yard Hotel (3★)', description: 'Cairo · half board · pyramid-view room', images: [I.accom4, I.accom3, I.hero] }
    },
    {
      letter: 'C', name: 'Alexandria', dayLabel: 'Day 3',
      bullets: [
        'Scenic drive to Alexandria on the Mediterranean coast',
        'The Roman Theatre (Kom El-Deka) and Pompey’s Pillar',
        'The Catacombs of Kom El-Shoqafa and Montaza Palace gardens',
        'The modern Bibliotheca Alexandrina and views of Qaitbay Citadel'
      ],
      images: [I.alex, I.map],
      activities: [
        { name: 'Bibliotheca Alexandrina', description: 'The striking modern library on the site of the ancient one.', optional: false, image: I.alex },
        { name: 'Catacombs & Pompey’s Pillar', description: 'Roman-era tombs and the towering granite column.', optional: false, image: I.glyphs },
        { name: 'Montaza gardens & corniche', description: 'Seaside palace gardens and the Alexandria waterfront.', optional: false, image: I.alex }
      ],
      accommodation: { name: 'Turquoise Pyramids & GEM View Hotel (4★) or Pyramids Yard Hotel (3★)', description: 'Cairo · breakfast · return after the day trip', images: [I.accom4, I.accom3] }
    },
    {
      letter: 'D', name: 'Cairo: Grand Egyptian Museum & Old Cairo', dayLabel: 'Day 4–5',
      bullets: [
        'The Grand Egyptian Museum with the full Tutankhamun collection',
        'Coptic Cairo: the churches of Abu-Sergah and St Barbara and the Hanging Church',
        'The Ben Ezra Synagogue in historic Old Cairo',
        'Departure transfer to Cairo International Airport on day 5'
      ],
      images: [I.glyphs, I.temple],
      activities: [
        { name: 'Grand Egyptian Museum', description: 'The world’s largest museum for a single civilisation, with Tutankhamun’s treasures.', optional: false, image: I.glyphs },
        { name: 'Old Cairo walking tour', description: 'The Hanging Church, Abu-Sergah and the Ben Ezra Synagogue.', optional: false, image: I.temple }
      ],
      accommodation: { name: 'Turquoise Pyramids & GEM View Hotel (4★) or Pyramids Yard Hotel (3★)', description: 'Cairo · breakfast · final night', images: [I.accom4, I.accom3] }
    }
  ]
};

export const glance = {
  h2: 'Tour summary',
  short: 'The Pyramids, Sphinx and Grand Egyptian Museum, the step pyramid of Saqqara and ancient Memphis, plus a full day on Alexandria’s Mediterranean coast – 5 days from Cairo.',
  readMore: 'Read more', readLess: 'Read less', hide: 'Hide tour summary',
  intro: 'This compact festival of Egypt’s icons is based entirely in Cairo, so you unpack once and travel out each day with your private guide.',
  intro2: 'You combine the Giza plateau, Saqqara and Memphis with a coastal day in Alexandria and a deep dive into Coptic and ancient Cairo before flying home.',
  accommodationHeading: 'Accommodation', highlightsHeading: 'Key highlights', dayHeading: 'Day', routeHeading: 'Route',
  days: [
    { title: 'Day 1: Arrival in Cairo', text: 'Meet & assist at the airport and transfer to your pyramid-view hotel, with an optional Nile dinner cruise.', hotel: 'Turquoise Pyramids & GEM View Hotel (4★) / Pyramids Yard (3★)', highlights: ['Private airport transfer', 'Optional Nile dinner cruise'] },
    { title: 'Day 2: Giza, Memphis & Saqqara', text: 'The Great Pyramids, the Sphinx and Valley Temple, the Saqqara step pyramid and ancient Memphis.', hotel: 'Cairo hotel (4★/3★)', highlights: ['Great Pyramids & Sphinx', 'Saqqara Step Pyramid', 'Memphis & Ramses II', 'Lunch at a local restaurant'] },
    { title: 'Day 3: Alexandria day trip', text: 'A full day on the Mediterranean coast – the Roman Theatre, Catacombs, Montaza gardens and the Library.', hotel: 'Cairo hotel (4★/3★)', highlights: ['Bibliotheca Alexandrina', 'Catacombs & Pompey’s Pillar', 'Montaza & the corniche'] },
    { title: 'Day 4: Grand Egyptian Museum & Old Cairo', text: 'The Grand Egyptian Museum with Tutankhamun, then the churches and synagogue of Coptic Cairo.', hotel: 'Cairo hotel (4★/3★)', highlights: ['Grand Egyptian Museum', 'Hanging Church & Abu-Sergah', 'Ben Ezra Synagogue'] },
    { title: 'Day 5: Departure', text: 'After breakfast, a private transfer takes you to Cairo International Airport.', hotel: '—', highlights: ['Private transfer to Cairo airport'] }
  ],
  outro: 'A well-paced short break that captures Egypt’s greatest hits without changing hotels.'
};

export const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Africa', href: '/afrika/' },
  { label: 'Egypt', href: '/afrika/aegypten/' },
  { label: 'Egypt Grand Festival: Pyramids, Sphinx & the Mediterranean Coast' }
];
