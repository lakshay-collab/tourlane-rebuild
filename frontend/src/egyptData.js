const cf = (p, q = 'w=900&q=60&fm=webp') => `https://images.ctfassets.net/bth3mlrehms2/${p}?${q}`;

export const egyptImages = {
  hero: cf('6gyGUPbZwvOjMlGZh3uJ0i/a701566f7e121a20285909f5017d7833/EGYPT_XL.png', 'w=1600&q=70&fm=webp'),
  heroMobile: cf('24xDYT81bL8WTINkjKVOqo/08a146db1a55e37c3ce86b68e3bbbb15/EGYPT_XS.png', 'w=800&q=70&fm=webp'),
  expert: cf('5WDN0enVSY7RhkHLlwW9XG/11e2eb851af3c9afe6c5d39ef60df878/Camille_Mollon_Oman_1.jpg.png', 'w=160&q=70&fm=webp'),
  giza: cf('qsp90U72Z4CxCVhVhtdGE/3b9cf2cac3e162fb25231d046cafd25e/Giza_Pyramid_Complex_-_Cairo__EgyptTCG.jpg'),
  komOmbo: cf('5UYtw3NqCqTJrOhhtUCuJQ/f8d96e59417195e0a6d052ecf42200f1/Temple_Of_Kom_Ombo__Aswan__Egypt.jpg'),
  aswan: cf('6lq0iDkL6OXXdg91tiPtqq/311462f9e726ce5ed62b34aa45b293f8/Assuan_%C3%83_gypten_Boote.jpg'),
  luxor: cf('33XEQZncDaZfAsWXm6FXl7/6ba291bd7492e64a514bc81373042591/Hatshepsut_temple_in_Luxor__EgyptTCG.jpg'),
  hurghada: cf('1xlFivJXqVOgQqsSexKRzX/2921f755c15da4aeba3be9ba8b4bfeda/Straw_umbrella_on_the_beach._Hurghada__Egypt.TCG.jpg'),
  redSea: cf('133ayLANvxGoUJAFtfjBLK/8a42aed281303a18324a8a6a5f4ca9a5/%C3%83_gypten_RotesMeer_ElphinstoneRiff.jpg'),
  golf: cf('1TY8uHaoDGdoCJuQUG0Esm/e6c466d992740d62ef1b996da0ece141/golfen_in_%C3%83_gypten.jpg'),
  alexandria: cf('o1S4xP8oedskdBeZ2qoqf/837df3b0b0699c5f7f2a5300cea56801/Citadelle_Alexandrie_EgypteTCG.jpg'),
  sharm: cf('7FCgimcOkGku6Rx5oKf1DT/80272b779a3009e8dbe10b66210d788e/Sharm_al-Sheikh_coastline__EgyptTCG.jpg'),
  reviews: [
    cf('6csFPp0VcYzeWfxdBiQXxs/91ee8e994fd0d0b5be150395a540e148/%C3%83_gypten_RotesMeer_ElQuseirFestung.jpg'),
    cf('7vEClQSNNkPz3R5JLjg2GL/78174b7cbb5b9e561e88299ddb089eaf/%C3%83_gypten_Strand.jpg'),
    cf('4KswRmimcnWUBWof4R7DQT/832773f71338ac6ef960637059f9cef9/%C3%83_gypten_MarsaAlam_Quadtour.jpg')
  ]
};

const editions = [
  ['Comfort Edition', 'Superior 4★'],
  ['Premium Edition', '5★'],
  ['Grand Luxury Edition', '5★ Deluxe']
];

const families = [
  { key: 'city-break', name: 'Pyramids & Pharaohs City Break', route: 'Cairo', days: 4, stops: 1, transport: 'Private transfers', category: 'City breaks', prices: [361, 490, 526], image: egyptImages.giza },
  { key: 'nile-romance', name: 'Nile Romance: Pyramids to Pharaohs Cruise', route: 'Cairo – Aswan – Nile Cruise – Luxor – Cairo', days: 7, stops: 4, transport: 'Flights & cruise', category: 'Nile cruises', prices: [692, 857, 1168], image: egyptImages.aswan },
  { key: 'pharaohs-trail', name: "Pharaoh's Trail: Sleeper Train & Nile Odyssey", route: 'Cairo – Sleeper Train – Aswan – Nile Cruise – Luxor – Cairo', days: 8, stops: 4, transport: 'Sleeper train & cruise', category: 'Nile cruises', prices: [1039, 1129, 1240], image: egyptImages.komOmbo },
  { key: 'royal-nile', name: 'Royal Nile Voyage: Luxor to Aswan Cruise', route: 'Cairo – Luxor – Nile Cruise – Aswan – Cairo', days: 8, stops: 4, transport: 'Flights & cruise', category: 'Nile cruises', prices: [930, 1070, 1248], image: egyptImages.luxor },
  { key: 'egyptian-grandeur', name: 'Egyptian Grandeur: Pyramids, Museum & Nile Cruise', route: 'Cairo – Luxor – Nile Cruise – Aswan – Cairo', days: 9, stops: 4, transport: 'Flights & cruise', category: 'Culture', prices: [1067, 1230, 1442], image: egyptImages.giza },
  { key: 'egypt-explorer', name: 'Egypt Explorer: Pyramids, Nile & Red Sea Beach Retreat', route: 'Cairo – Aswan – Nile Cruise – Luxor – Hurghada – Cairo', days: 11, stops: 5, transport: 'Flights, cruise & coach', category: 'Round trip & beach', prices: [1264, 1490, 1690], image: egyptImages.hurghada }
];

export const products = families.flatMap((f, fi) =>
  editions.map(([ed, stars], ei) => ({
    id: fi * 3 + ei + 1,
    slug: `${f.key}-${ed.split(' ')[0].toLowerCase()}`,
    title: `${f.name} — ${ed}`,
    edition: ed,
    stars,
    route: f.route,
    days: f.days,
    stops: f.stops,
    transport: f.transport,
    category: f.category,
    price: f.prices[ei],
    image: f.image
  }))
);

export const categories = ['Culture', 'City breaks', 'Nile cruises', 'Round trip & beach'];

export const places = [
  { name: 'Alexandria', image: egyptImages.alexandria }, { name: 'Aswan', image: egyptImages.aswan }, { name: 'Hurghada', image: egyptImages.hurghada },
  { name: 'Cairo', image: egyptImages.giza }, { name: 'Luxor', image: egyptImages.luxor }, { name: 'Sharm El-Sheikh', image: egyptImages.sharm }
];

export const listingCopy = {
  h1: 'Egypt round trip',
  cta: 'Plan for free',
  sub: 'Your itinerary – non-binding & tailor-made',
  expertHeading: 'Your individual Egypt trip, planned by experts',
  expert: { name: 'Camille Mollon', role: 'Travel expert for Egypt', updated: 'Updated on 21.08.2026' },
  activitiesHeading: 'The best activities on your trip',
  activities: [{ title: 'Diving & snorkelling', text: 'An unforgettable underwater experience', image: egyptImages.redSea }, { title: 'Golf', text: 'Enjoy sport and relaxation', image: egyptImages.golf }],
  toursHeading: 'Plan your Egypt trip now',
  toursIntro: 'Embark on an unforgettable journey of discovery through a land of pharaohs, pyramids and the eternal Nile with a tailor-made Egypt holiday.',
  placesHeading: 'Discover these places in Egypt',
  planHeading: 'How to plan your Egypt trip',
  planIntro: 'Egypt – the land of the pharaohs – fascinates with millennia-old history, majestic temples and breathtaking underwater worlds on the Red Sea.',
  plan: [
    ['Best time to travel & climate', 'The best time to travel to Egypt is between October and May, when temperatures are pleasant for sightseeing and beach days alike.'],
    ['Trip length & route ideas', 'For a comprehensive Egypt trip we recommend at least 8 to 10 days. Classic routes combine Cairo, a Nile cruise between Luxor and Aswan and a few days on the Red Sea.'],
    ['Sights & culture', 'Visit world-famous monuments such as the Pyramids of Giza, the Valley of the Kings in Luxor, the temples of Karnak and Abu Simbel and the Grand Egyptian Museum.'],
    ['Nile cruise & activities', 'A Nile cruise between Luxor and Aswan is a highlight of every Egypt trip. Also popular: snorkelling and diving in Hurghada or Sharm El-Sheikh.'],
    ['Costs & budget', 'Travel costs in Egypt average around €83 per person per day. Luxury travellers should budget roughly €200 per day.'],
    ['Safety & entry', 'A visa is required to enter Egypt and can be applied for online or on arrival. Please check the official travel advice before departure.']
  ],
  faqHeading: 'Practical information for your trip',
  faq: [
    ['When is the best time to visit Egypt?', 'The best time to visit Egypt is between October and May. Temperatures are pleasant and ideal for exploring temples and pyramids as well as relaxing on the Red Sea.'],
    ['What is typical food in Egypt?', 'Typical Egyptian dishes are koshari (lentils, rice and pasta with tomato sauce), ful medames (stewed fava beans), ta’ameya (Egyptian falafel) and molokhia.'],
    ['How is my trip protected if travel conditions change?', 'With Hi Tours Care Flex you can cancel your land programme up to 30 days before departure without giving reasons – for maximum flexibility and peace of mind.']
  ]
};

export const featured = {
  slug: 'egypt-explorer-grand',
  title: 'Egypt Explorer: Pyramids, Nile & Red Sea Beach Retreat — Grand Luxury Edition',
  days: '11 days', stops: '5 stops', transport: 'Flights, cruise & coach', tag: 'Round trip & beach', price: 1690,
  quote: 'This Egypt route has an itinerary I find particularly convincing: the Pyramids of Giza and the Grand Egyptian Museum as a grand opening, three nights aboard the 5★ deluxe M/S Concerto Plus between Aswan and Luxor, and finally three all-inclusive nights on the Red Sea in Hurghada. Culture, the Nile and beach – perfectly balanced.',
  included: [
    '04 nights in Cairo (city-view room), half board', '03 nights aboard the Nile cruise, full board', '03 nights in Hurghada, all-inclusive',
    'All tours and transfers as indicated by luxury mini coach', 'Half-day tour: Pyramids and Sphinx', 'Half-day tour: Grand Egyptian Museum (GEM)',
    'All Upper Egypt visits: Aswan (High Dam + felucca), Kom Ombo Temple, Edfu Temple by horse carriage, Luxor West Bank + East Bank',
    'English-speaking guide during sightseeing', 'All entrance fees'
  ],
  excluded: ['Entry visa to Egypt', 'Personal activities and extra meals', 'Beverages during meals (except Hurghada – all-inclusive)', 'Tipping for guide, drivers and cruise staff (approx. $60 per person)'],
  stops: [
    { letter: 'A', name: 'Cairo', days: 'Day 1 – 3', nights: '3 nights', image: egyptImages.giza,
      text: 'Cairo, the vibrant capital on the Nile, is your gateway to ancient Egypt. Stand before the Pyramids of Giza – Cheops, Chephren and Mykerinos – and the majestic Sphinx, then explore the Grand Egyptian Museum with its 100,000+ artefacts including the complete Tutankhamun collection.',
      hotel: 'Semiramis InterContinental or Hyatt Centric (5★ Deluxe)', program: ['Half-day tour: Pyramids of Giza & Sphinx', 'Half-day tour: Grand Egyptian Museum (GEM)'] },
    { letter: 'B', name: 'Aswan', days: 'Day 4', nights: '1 night on board', image: egyptImages.aswan,
      text: 'Fly to Aswan, Egypt’s tranquil southern city. Visit the monumental High Dam with panoramic views of Lake Nasser, embark on the M/S Concerto Plus and drift past the Botanical Gardens and Agha Khan Mausoleum on an afternoon felucca ride.',
      hotel: 'M/S Concerto Plus (5★ Deluxe Nile cruise)', program: ['Aswan High Dam', 'Felucca ride on the Nile', 'Optional: Abu Simbel excursion'] },
    { letter: 'C', name: 'Kom Ombo & Edfu', days: 'Day 5 – 6', nights: '2 nights on board', image: egyptImages.komOmbo,
      text: 'Sail north to Kom Ombo, the rare dual-deity temple dedicated to Sobek the crocodile god and Horus the Elder. Continue to Edfu and visit the Temple of Horus by horse carriage – one of the best-preserved temples in Egypt – before crossing the Esna lock towards Luxor.',
      hotel: 'M/S Concerto Plus (5★ Deluxe Nile cruise)', program: ['Kom Ombo Temple', 'Edfu Temple by horse carriage', 'Sailing through the Esna lock'] },
    { letter: 'D', name: 'Luxor', days: 'Day 7', nights: 'Day visit', image: egyptImages.luxor,
      text: 'Disembark in Luxor, the world’s greatest open-air museum. On the West Bank discover the Valley of the Kings, the Temple of Hatshepsut and the Colossi of Memnon; on the East Bank the vast Karnak Temple with its 134-column Great Hypostyle Hall and the golden-hour glow of Luxor Temple.',
      hotel: 'Transfer by luxury coach to Hurghada', program: ['Valley of the Kings & Hatshepsut Temple', 'Colossi of Memnon', 'Karnak & Luxor temples'] },
    { letter: 'E', name: 'Hurghada', days: 'Day 7 – 10', nights: '3 nights', image: egyptImages.hurghada,
      text: 'Unwind on the Red Sea. Three all-inclusive nights at the Marriott Hurghada give you time for coral-reef snorkelling, water sports or simply the beach – the perfect counterpoint to a week of temples and tombs.',
      hotel: 'Marriott Hurghada (5★ Deluxe, all-inclusive)', program: ['Red Sea beach relaxation', 'Snorkelling & water sports', 'Free days at leisure'] },
    { letter: 'F', name: 'Cairo', days: 'Day 10 – 11', nights: '1 night', image: egyptImages.giza,
      text: 'Fly back to Cairo for a final evening at leisure in the capital before your departure transfer to Cairo International Airport.',
      hotel: 'Semiramis InterContinental or Hyatt Centric (5★ Deluxe)', program: ['Evening at leisure', 'Departure transfer'] }
  ],
  stats: [['200+', 'Plan with real travel experts'], ['33+ hours', 'of planning time saved'], ['12+ bookings', 'handled for you – hotels, flights, activities'], ['9+ transfers', 'seamlessly organised from stop to stop']],
  glance: [
    ['Day 1–3: Cairo (3 nights)', 'Pyramids of Giza & Sphinx · Grand Egyptian Museum'],
    ['Day 4: Aswan (embarkation)', 'High Dam · felucca ride · M/S Concerto Plus'],
    ['Day 5: Kom Ombo → Edfu', 'Optional Abu Simbel · Kom Ombo Temple'],
    ['Day 6: Edfu → Luxor', 'Edfu Temple by horse carriage · Esna lock'],
    ['Day 7: Luxor → Hurghada', 'West Bank & East Bank · coach to the Red Sea'],
    ['Day 8–9: Hurghada', 'All-inclusive beach days'],
    ['Day 10: Hurghada → Cairo', 'Flight to Cairo · evening at leisure'],
    ['Day 11: Cairo', 'Departure transfer']
  ]
};
