const cf = (p, q = 'w=900&q=60&fm=webp') => `https://images.ctfassets.net/bth3mlrehms2/${p}?${q}`;
const kiwi = (p, w = 1080) => `https://kiwi-cdn.tlservers.com/${p}?w=${w}&q=60&auto=format&fit=max`;

export const egyptImages = {
  hero: cf('24xDYT81bL8WTINkjKVOqo/08a146db1a55e37c3ce86b68e3bbbb15/EGYPT_XS.png', 'w=1600&q=70&fm=webp'),
  heroMobile: cf('24xDYT81bL8WTINkjKVOqo/08a146db1a55e37c3ce86b68e3bbbb15/EGYPT_XS.png', 'w=900&q=70&fm=webp'),
  expert: cf('5WDN0enVSY7RhkHLlwW9XG/11e2eb851af3c9afe6c5d39ef60df878/Camille_Mollon_Oman_1.jpg.png', 'w=200&q=70&fm=webp'),
  giza: cf('qsp90U72Z4CxCVhVhtdGE/3b9cf2cac3e162fb25231d046cafd25e/Giza_Pyramid_Complex_-_Cairo__EgyptTCG.jpg'),
  komOmbo: cf('5UYtw3NqCqTJrOhhtUCuJQ/f8d96e59417195e0a6d052ecf42200f1/Temple_Of_Kom_Ombo__Aswan__Egypt.jpg'),
  aswan: cf('6lq0iDkL6OXXdg91tiPtqq/311462f9e726ce5ed62b34aa45b293f8/Assuan_%C3%83_gypten_Boote.jpg'),
  luxor: cf('33XEQZncDaZfAsWXm6FXl7/6ba291bd7492e64a514bc81373042591/Hatshepsut_temple_in_Luxor__EgyptTCG.jpg'),
  hurghada: cf('1xlFivJXqVOgQqsSexKRzX/2921f755c15da4aeba3be9ba8b4bfeda/Straw_umbrella_on_the_beach._Hurghada__Egypt.TCG.jpg'),
  redSea: cf('133ayLANvxGoUJAFtfjBLK/8a42aed281303a18324a8a6a5f4ca9a5/%C3%83_gypten_RotesMeer_ElphinstoneRiff.jpg'),
  golf: cf('1TY8uHaoDGdoCJuQUG0Esm/e6c466d992740d62ef1b996da0ece141/golfen_in_%C3%83_gypten.jpg'),
  alexandria: cf('o1S4xP8oedskdBeZ2qoqf/837df3b0b0699c5f7f2a5300cea56801/Citadelle_Alexandrie_EgypteTCG.jpg'),
  sharm: cf('7FCgimcOkGku6Rx5oKf1DT/80272b779a3009e8dbe10b66210d788e/Sharm_al-Sheikh_coastline__EgyptTCG.jpg'),
  // Product / itinerary photos (Tourlane public CDN)
  p1: kiwi('items%2F9dbcb14f-a83e-414f-8ed1-2f7f9b1173d7%2Fimage%2Fjpeg%2FPbCTUPKH54s1ML3VuZworA%2FiStock-1691038856.jpg'),
  p2: kiwi('items%2Fb8fb6a95-8fb3-4ef5-aa8e-fdbf751ddb01%2Fimage%2Fjpeg%2F9kORDM_-0K_Ej3bFpKTQYA%2Fpradeep-gopal-6ujdeqx-cho-unsplash.jpg'),
  p3: kiwi('items%2F7b743050-b17f-42b2-8179-d1e6fae370e8%2Fimage%2Fjpeg%2FjI5MNhhx8eaOMbuhVEEtJg%2FiStock-1305840978.jpg'),
  p4: kiwi('items%2Faac487ef-1314-4d93-809a-3f407a9b12b2%2Fimage%2Fjpeg%2FRudhVVpyaS21MwTtLaDafQ%2Fistock-185209709.jpg'),
  p5: kiwi('items%2F7b743050-b17f-42b2-8179-d1e6fae370e8%2Fimage%2Fjpeg%2FgGF9ayHbRxAtvOQoxtnHjg%2FiStock-1355995823.jpg'),
  p6: kiwi('items%2F4f1d4380-39d1-4c0d-8e74-4bcae12bc068%2Fimage%2Fjpeg%2FZl3wzbEfgQA_IqP1yTNDtw%2Fdmitrii-zhodzishskii-4rxhe9xewa-unsplash.jpg'),
  reviews: [
    cf('6csFPp0VcYzeWfxdBiQXxs/91ee8e994fd0d0b5be150395a540e148/%C3%83_gypten_RotesMeer_ElQuseirFestung.jpg'),
    cf('7vEClQSNNkPz3R5JLjg2GL/78174b7cbb5b9e561e88299ddb089eaf/%C3%83_gypten_Strand.jpg'),
    cf('4KswRmimcnWUBWof4R7DQT/832773f71338ac6ef960637059f9cef9/%C3%83_gypten_MarsaAlam_Quadtour.jpg')
  ]
};

const g = egyptImages;
const carousel = [g.p2, g.p3, g.p4, g.p5, g.p6];

// Product families (from the Hi Tours Egypt catalogue / itinerary PDF), presented in Tourlane card layout.
export const families = [
  { slug: 'egypt-explorer-grand', category: 'Round trip & beach', title: 'Egypt Explorer: Pyramids, Nile & Red Sea Beach Retreat', days: 11, stops: 5, price: 1690, cover: g.hurghada, images: [g.hurghada, ...carousel], detail: true },
  { slug: 'nile-romance', category: 'Nile cruises', title: 'Nile Romance: Pyramids to Pharaohs Cruise', days: 7, stops: 4, price: 692, cover: g.aswan, images: [g.aswan, ...carousel] },
  { slug: 'pharaohs-trail', category: 'Nile cruises', title: "Pharaoh's Trail: Sleeper Train & Nile Odyssey", days: 8, stops: 4, price: 1039, cover: g.komOmbo, images: [g.komOmbo, ...carousel] },
  { slug: 'royal-nile', category: 'Nile cruises', title: 'Royal Nile Voyage: Luxor to Aswan Cruise', days: 8, stops: 4, price: 930, cover: g.luxor, images: [g.luxor, ...carousel] },
  { slug: 'egyptian-grandeur', category: 'Culture', title: 'Egyptian Grandeur: Pyramids, Museum & Nile Cruise', days: 9, stops: 4, price: 1067, cover: g.giza, images: [g.giza, ...carousel] },
  { slug: 'city-break', category: 'City breaks', title: 'Pyramids & Pharaohs City Break', days: 4, stops: 1, price: 361, cover: g.giza, images: [g.giza, ...carousel] }
];

export const places = [
  { name: 'Alexandria', image: g.alexandria }, { name: 'Aswan', image: g.aswan }, { name: 'Hurghada', image: g.hurghada },
  { name: 'Cairo', image: g.giza }, { name: 'Luxor', image: g.luxor }, { name: 'Sharm El-Sheikh', image: g.sharm }
];

export const themes = [
  { tag: 'Travel guide', title: 'The best time to travel to Egypt', image: g.giza },
  { tag: 'Travel guide', title: 'The ideal trip length for Egypt', image: g.hurghada },
  { tag: 'Inspiration', title: 'Food in Egypt: top 10 dishes', image: g.komOmbo },
  { tag: 'Inspiration', title: 'The 12 best sights in Egypt in 2026', image: g.giza },
  { tag: 'Inspiration', title: 'Top 10 activities in Egypt', image: g.luxor },
  { tag: 'Inspiration', title: 'The 10 most beautiful beaches in Egypt', image: g.hurghada }
];

export const listingCopy = {
  banner: 'Plan worry-free: stable flight prices for over a year, plus flexible rebooking and cancellation options.',
  subnav: ['Egypt round trips', 'Travel guide', 'Inspiration', 'Places'],
  h1: 'Egypt round trip',
  cta: 'Plan for free',
  sub: 'Your itinerary – non-binding & tailor-made',
  expertHeading: 'Your individual Egypt trip, planned by experts',
  expertIntro: 'Egypt stands for its history. Anyone visiting Cairo should plan in Saqqara. The Step Pyramid of Djoser is the oldest monumental stone building in the world – older than Giza, and with a fraction of the visitors.',
  expert: { name: 'Camille Mollon', role: 'Travel expert for Egypt', updated: 'Updated on 21.08.2026' },
  activitiesHeading: 'The best activities on your trip',
  activities: [{ tag: 'Diving & snorkelling', title: 'An unforgettable underwater experience', image: g.redSea }, { tag: 'Golf', title: 'Enjoy sport and relaxation', image: g.golf }],
  toursHeading: 'Plan your Egypt trip now',
  toursIntro: 'Embark on an unforgettable journey of discovery through a millennia-old culture on a tailor-made Egypt holiday. Marvel at imposing monuments and enjoy the combination of desert and sea. Whether a culture holiday, a Nile cruise or relaxed beach days – our travel experts are happy to advise you individually.',
  placesHeading: 'Discover these places in Egypt',
  themesHeading: 'Travel themes: what you should know about Egypt',
  planHeading: 'How to plan your Egypt trip',
  planIntro: 'Egypt – the land of the pharaohs – fascinates with millennia-old history, majestic temples and breathtaking natural wonders. Whether a Nile cruise, a desert safari or a relaxed beach holiday on the Red Sea – experience Egypt with Hi Tours in your own individual way: safe, tailor-made and unforgettable.',
  plan: [
    ['Best time to travel & climate', 'The best time to travel to Egypt is between October and May. During these months temperatures are pleasant, between 21 and 29 °C – ideal for culture trips, Nile cruises or a beach holiday on the Red Sea. The summer months are much hotter, especially inland.'],
    ['Trip length & route ideas', 'For a comprehensive Egypt trip we recommend at least 8 to 10 days. Classic routes combine Cairo, Luxor and Aswan with a Nile cruise. Anyone wanting a beach holiday continues to the Red Sea to Hurghada or Sharm El Sheikh.'],
    ['Sights & culture', 'Visit world-famous monuments such as the Pyramids of Giza, the Valley of the Kings in Luxor, the temples of Karnak and Hatshepsut or the lively old town of Cairo. Historic mosques, souks and museums make the cultural experience perfect.'],
    ['Nile cruise & activities', 'A Nile cruise between Luxor and Aswan is one of the highlights of every Egypt trip. Equally popular: snorkelling and diving in the Red Sea, hiking in the Sinai or desert safaris with sunset over the dunes.'],
    ['Costs & budget', 'Travel costs in Egypt average around €83 per person per day. Luxury travellers should budget roughly €228 per day. Meals, taxis and many entrance fees are especially affordable.'],
    ['Safety & entry', 'A visa is required to enter Egypt and can be applied for online or on arrival. Your passport must be valid for at least six more months. Travel is generally considered safe, but individual overland trips should be undertaken with caution.']
  ],
  faqHeading: 'Practical information for your trip',
  faq: [
    ['When is the best time to visit Egypt?', 'The best time to visit Egypt is between October and May. In these months temperatures are pleasant (20–30 °C), ideal for sightseeing and desert tours. Summer (May to September) is very hot, especially in Luxor and Aswan, but good for swimming on the Red Sea.'],
    ['What is typical food in Egypt?', 'Typical Egyptian dishes are koshari (a lentil-and-pasta dish with tomato sauce), ful medames (stewed fava beans with oil and spices), ta’ameya (Egyptian falafel made from fava beans) and molokhia (a green herb dish). These are often served with flatbread and mezze such as hummus and baba ghanoush.'],
    ['How is my trip protected if travel conditions change?', 'With Hi Tours Care Flex you can cancel or rebook your land programme up to 30 days before departure without giving reasons. Depending on the destination, further protection and flexibility options may also apply.']
  ],
  africaHeading: 'More travel destinations in Africa',
  africa: [
    { name: 'South Africa', image: g.alexandria }, { name: 'Seychelles', image: g.hurghada }, { name: 'Tanzania', image: g.luxor },
    { name: 'Namibia', image: g.redSea }, { name: 'Botswana', image: g.aswan }, { name: 'Kenya', image: g.komOmbo }
  ]
};

const detailImg = { size: 18, day: 22 };

export const featured = {
  slug: 'egypt-explorer-grand',
  title: 'Egypt Explorer: Pyramids, Nile & Red Sea Beach Retreat',
  days: '11 days', stops: 5, transport: 'Individual transfer', tag: 'Round trip & beach', price: 1690,
  gallery: [g.giza, g.p2, g.p3, g.p4, g.p5],
  service: ['Accommodation', 'Transport', '24/7 support', 'Activities', 'Hi Tours App', 'Itinerary', 'eSim', 'Flights'],
  expertName: 'Roman Karin',
  quote: 'This Egypt route has an itinerary I find particularly convincing: the Pyramids of Giza and the Grand Egyptian Museum as a historical opening, then the Nile cruise between Luxor, Edfu and Aswan as slow, atmospheric travel, and finally Sharm El Sheikh as a complete counterpoint on the Red Sea. The Temple of Edfu is for me one of the best-preserved temples in all of Egypt. What I always recommend: visit the Valley of the Kings early in the morning, when it is still cool at the tombs and the large groups have not yet arrived.',
  included: [
    '04 nights in Cairo (city-view room), half board', '03 nights aboard the Nile cruise, full board', '03 nights in Hurghada, all-inclusive',
    'All tours and transfers as indicated by luxury mini coach', 'Half-day tour: Pyramids and Sphinx', 'Half-day tour: Grand Egyptian Museum (GEM)',
    'All Upper Egypt visits: Aswan (High Dam + felucca), Kom Ombo Temple, Edfu Temple by horse carriage, Luxor West Bank + East Bank',
    'English-speaking guide during sightseeing', 'All entrance fees'
  ],
  excluded: ['Entry visa to Egypt', 'Personal activities and extra meals', 'Beverages during meals (except Hurghada – all-inclusive)', 'Tipping for guide, drivers and cruise staff (approx. $60 per person)'],
  stops: [
    { letter: 'A', name: 'Giza', days: 'Day 1 – 3', nights: '3 nights', image: g.giza, images: [g.p2, g.giza, g.p5],
      text: 'Giza, technically a separate administrative district, is part of the sprawling city of Cairo. The area is famous as the location of the Giza plateau: the site of some of the most impressive ancient monuments in the world. The Giza Pyramids were marvelled at as the first of the Seven Wonders of the World and still exert a powerful fascination – both as an extraordinary engineering feat and as a demonstration of the power and ambition of Egypt’s pharaonic rulers.',
      hotel: 'Semiramis InterContinental or Hyatt Centric (5★ Deluxe)', program: ['Half-day tour: Pyramids of Giza & Sphinx', 'Full-day visit of the Grand Egyptian Museum'] },
    { letter: 'B', name: 'Aswan', days: 'Day 4', nights: '1 night on board', image: g.aswan, images: [g.aswan, g.p6],
      text: 'Fly to Aswan, Egypt’s tranquil southern city known for its warm climate, river islands and strong Nubian heritage. Visit the monumental High Dam with panoramic views of Lake Nasser, embark on the M/S Concerto Plus and drift past the Botanical Gardens and Agha Khan Mausoleum on an afternoon felucca ride.',
      hotel: 'M/S Concerto Plus (5★ Deluxe Nile cruise)', program: ['Aswan High Dam', 'Felucca ride on the Nile', 'Optional: Abu Simbel excursion'] },
    { letter: 'C', name: 'Edfu', days: 'Day 5', nights: '1 night on board', image: g.komOmbo, images: [g.komOmbo, g.p4],
      text: 'Sail north to Kom Ombo, the rare dual-deity temple dedicated to Sobek the crocodile god and Horus the Elder. Continue to Edfu and visit the Temple of Horus by horse carriage – considered the best-preserved temple in Egypt, dating from the Ptolemaic period – before crossing the Esna lock towards Luxor.',
      hotel: 'M/S Concerto Plus (5★ Deluxe Nile cruise)', program: ['Kom Ombo Temple', 'Edfu Temple by horse carriage', 'Sailing through the Esna lock'] },
    { letter: 'D', name: 'Luxor', days: 'Day 6 – 7', nights: '1 night on board', image: g.luxor, images: [g.luxor, g.p3, g.p5],
      text: 'Luxor, on the banks of the Nile, is a fascinating place full of history and magic – once ancient Thebes, the glamorous capital of the New Kingdom. On the West Bank discover the Valley of the Kings, the Temple of Hatshepsut and the Colossi of Memnon; on the East Bank the vast Karnak Temple with its 134-column Great Hypostyle Hall and the golden-hour glow of Luxor Temple.',
      hotel: 'M/S Concerto Plus / transfer by luxury coach to Hurghada', program: ['Valley of the Kings & Hatshepsut Temple', 'Colossi of Memnon', 'Karnak & Luxor temples'] },
    { letter: 'E', name: 'Hurghada', days: 'Day 8 – 10', nights: '3 nights', image: g.hurghada, images: [g.hurghada, g.redSea],
      text: 'Unwind on the Red Sea. Three all-inclusive nights at the Marriott Hurghada give you time for coral-reef snorkelling, water sports or simply the beach – the perfect counterpoint to a week of temples and tombs.',
      hotel: 'Marriott Hurghada (5★ Deluxe, all-inclusive)', program: ['Red Sea beach relaxation', 'Snorkelling & water sports', 'Free days at leisure'] }
  ],
  stats: [['200+', 'Plan with real travel experts'], ['33+ hours', 'of planning time saved'], ['12+ bookings', 'handled for you – hotels, flights, activities'], ['9+ transfers', 'seamlessly organised from stop to stop']],
  glanceIntro: 'A beach holiday in Egypt offers a fascinating mix of history and relaxation. Alongside the cultural treasures you experience Egypt especially intensely along the Nile: on a multi-day Nile cruise you discover Luxor, Edfu and Aswan at a relaxed pace, before Sharm El Sheikh rounds off your trip with a classic beach stay on the Red Sea.',
  glance: [
    ['Day 1–3: Cairo (3 nights)', 'Your opening with the world-famous pyramids and first impressions of the ancient Egyptian civilisation.', 'Semiramis InterContinental / Hyatt Centric', ['Pyramids of Giza & Sphinx', 'Grand Egyptian Museum']],
    ['Day 4: Aswan (embarkation)', 'Fly to Aswan, visit the High Dam and embark your Nile cruise for an afternoon felucca ride.', 'M/S Concerto Plus', ['Aswan High Dam', 'Felucca ride on the Nile']],
    ['Day 5: Kom Ombo → Edfu', 'An impressive stop along the Nile with the dual-deity temple of Kom Ombo.', 'M/S Concerto Plus', ['Kom Ombo Temple', 'Optional Abu Simbel']],
    ['Day 6: Edfu → Luxor', 'Visit the Temple of Horus by horse carriage before sailing on to Luxor.', 'M/S Concerto Plus', ['Edfu Temple by horse carriage', 'Esna lock']],
    ['Day 7: Luxor → Hurghada', 'Explore the West and East Banks of Luxor, then transfer by coach to the Red Sea.', 'Marriott Hurghada', ['Valley of the Kings', 'Karnak & Luxor temples']],
    ['Day 8–9: Hurghada', 'Relax on the Red Sea and let your trip wind down at an all-inclusive resort.', 'Marriott Hurghada', ['Red Sea beach days', 'Snorkelling & diving']],
    ['Day 10: Hurghada → Cairo', 'Fly back to Cairo for a final evening at leisure in the capital.', 'Semiramis InterContinental', ['Flight to Cairo', 'Evening at leisure']],
    ['Day 11: Cairo', 'Your Egypt trip ends – a balanced combination of culture, Nile and beach.', '—', ['Departure transfer']]
  ]
};
