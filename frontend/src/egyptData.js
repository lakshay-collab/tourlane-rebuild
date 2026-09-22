const cf = (p, q = 'w=900&q=60&fm=webp') => `https://images.ctfassets.net/bth3mlrehms2/${p}?${q}`;
const kiwi = (p, w = 1080) => `https://kiwi-cdn.tlservers.com/${p}?w=${w}&q=60&auto=format&fit=max`;

export const egyptImages = {
  hero: cf('24xDYT81bL8WTINkjKVOqo/08a146db1a55e37c3ce86b68e3bbbb15/EGYPT_XS.png', 'w=1920&q=75&fm=webp'),
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
  // Hi Tours product / itinerary photos (public CDN)
  p1: kiwi('items%2F9dbcb14f-a83e-414f-8ed1-2f7f9b1173d7%2Fimage%2Fjpeg%2FPbCTUPKH54s1ML3VuZworA%2FiStock-1691038856.jpg'),
  p2: kiwi('items%2Fb8fb6a95-8fb3-4ef5-aa8e-fdbf751ddb01%2Fimage%2Fjpeg%2F9kORDM_-0K_Ej3bFpKTQYA%2Fpradeep-gopal-6ujdeqx-cho-unsplash.jpg'),
  p3: kiwi('items%2F7b743050-b17f-42b2-8179-d1e6fae370e8%2Fimage%2Fjpeg%2FjI5MNhhx8eaOMbuhVEEtJg%2FiStock-1305840978.jpg'),
  p4: kiwi('items%2Faac487ef-1314-4d93-809a-3f407a9b12b2%2Fimage%2Fjpeg%2FRudhVVpyaS21MwTtLaDafQ%2Fistock-185209709.jpg'),
  p5: kiwi('items%2F7b743050-b17f-42b2-8179-d1e6fae370e8%2Fimage%2Fjpeg%2FgGF9ayHbRxAtvOQoxtnHjg%2FiStock-1355995823.jpg'),
  p6: kiwi('items%2F4f1d4380-39d1-4c0d-8e74-4bcae12bc068%2Fimage%2Fjpeg%2FZl3wzbEfgQA_IqP1yTNDtw%2Fdmitrii-zhodzishskii-4rxhe9xewa-unsplash.jpg'),
  reviews: [
    cf('6csFPp0VcYzeWfxdBiQXxs/91ee8e994fd0d0b5be150395a540e148/%C3%83_gypten_RotesMeer_ElQuseirFestung.jpg', 'w=600&q=60&fm=webp'),
    cf('7vEClQSNNkPz3R5JLjg2GL/78174b7cbb5b9e561e88299ddb089eaf/%C3%83_gypten_Strand.jpg', 'w=600&q=60&fm=webp'),
    cf('4KswRmimcnWUBWof4R7DQT/832773f71338ac6ef960637059f9cef9/%C3%83_gypten_MarsaAlam_Quadtour.jpg', 'w=600&q=60&fm=webp')
  ]
};

const g = egyptImages;

// The exact seven Egypt round-trip products from the source page (titles translated to English).
export const families = [
  { slug: 'luxor-strand-urlaub', detail: true, category: 'Culture', title: 'Egypt holiday from Cairo with Nile cruise and stop in ancient Thebes', days: 12, stops: 6, price: 2945, images: [g.p1, g.p2, g.p3, g.p4, g.p5, g.p6] },
  { slug: 'rundreise-7-tage', category: 'Short trips', title: 'Unforgettable holiday in Egypt', days: 7, stops: 1, price: 1350, images: [g.hurghada, g.p2, g.aswan, g.p6, g.p3] },
  { slug: 'urlaub-am-meer', category: 'Culture', title: 'Egypt round trip: experience fascinating culture', days: 8, stops: 3, price: 1500, images: [g.luxor, g.p2, g.p6, g.komOmbo, g.p5, g.p3] },
  { slug: 'pyramiden-urlaub', category: 'Culture', title: 'Egypt: experience the fascinating pyramids', days: 9, stops: 3, price: 1750, images: [g.giza, g.p2, g.p6, g.p3, g.p5, g.komOmbo] },
  { slug: 'familienurlaub', category: 'Family holiday', title: 'Egypt family holiday: adventure for children', days: 11, stops: 4, price: 2190, images: [g.komOmbo, g.p2, g.hurghada, g.p6, g.luxor] },
  { slug: 'rundreise-bade', category: 'Culture', title: 'Round trip and beach holiday Egypt', days: 11, stops: 6, price: 2730, images: [g.aswan, g.p2, g.p3, g.alexandria, g.p5, g.komOmbo] },
  { slug: 'rundreise-10-tage', category: 'Culture', title: 'Egypt round trip: 11 days of adventure', days: 11, stops: 6, price: 2770, images: [g.luxor, g.p2, g.p6, g.p4, g.p3, g.aswan] }
];

export const reviewCards = [
  { image: g.reviews[0], title: 'Top service, great app, fair price', initial: 'L', name: 'Lysann', text: 'The advice was very individually tailored to us. The presentation and app are great. Everything was easy to find and understand. We were particularly satisfied with the support from Ms Burchardt before and during our trip. The price was fair too.', date: '04.10.2025' },
  { image: g.reviews[1], title: 'Friendly and competent', initial: 'I', name: 'Iris', text: 'Very friendly and competent staff. All change requests were responded to quickly. I can recommend them without reservation.', date: '09.08.2025' },
  { image: g.reviews[2], title: 'Excellently organised', initial: 'A', name: 'anna .f', text: 'Our trip was excellently organised from start to finish, a very warm thank you for that! We were especially impressed by the consistently outstanding service, both in preparation and on site. A big compliment goes to our local guide, who was there for us at any time. Through his warm and competent manner we never felt alone, but were well looked after throughout. We can wholeheartedly recommend Hi Tours and will gladly book again!', date: '22.06.2025' }
];

export const places = [
  { name: 'Alexandria', image: g.alexandria }, { name: 'Aswan', image: g.aswan }, { name: 'Hurghada', image: g.hurghada },
  { name: 'Cairo', image: g.giza }, { name: 'Luxor', image: g.luxor }, { name: 'Sharm El-Sheikh', image: g.sharm }
];

export const themes = [
  { tag: 'Travel guide', title: 'The best time to travel to Egypt', image: g.giza },
  { tag: 'Travel guide', title: 'The optimal trip duration for Egypt', image: g.hurghada },
  { tag: 'Inspiration', title: 'Food in Egypt: top 10 dishes', image: g.komOmbo },
  { tag: 'Inspiration', title: 'The 12 best sights in Egypt in 2026', image: g.giza },
  { tag: 'Inspiration', title: 'Top 10 activities in Egypt', image: g.luxor },
  { tag: 'Inspiration', title: 'The 10 most beautiful beaches in Egypt', image: g.hurghada },
  { tag: 'Inspiration', title: 'The 5 most beautiful islands of Egypt', image: g.aswan },
  { tag: 'Travel guide', title: 'Egypt holiday: costs at a glance', image: g.giza }
];

export const listingCopy = {
  subnav: ['Egypt round trips', 'Travel guide', 'Inspiration', 'Places'],
  h1: 'Egypt round trip',
  cta: 'Plan for free',
  sub: 'Your itinerary – non-binding & tailor-made',
  expertHeading: 'Your individual Egypt trip, planned by experts',
  expertIntro: 'Egypt stands for its history. Anyone travelling to Cairo should plan in Saqqara. The Step Pyramid of Djoser is the oldest monumental stone building in the world, older than Giza, and with a fraction of the visitors.',
  expert: { name: 'Camille Mollon', role: 'Travel expert for Egypt', updated: 'Updated on 21.08.2026' },
  toursHeading: 'Now plan your Egypt trip',
  toursIntro: 'On a tailor-made Egypt holiday, embark on an unforgettable journey of discovery through a millennia-old culture. Marvel at imposing structures and enjoy the combination of desert and sea. Whether a culture holiday, a Nile cruise or relaxed beach days – our travel experts are happy to advise you individually.',
  reviewsHeading: 'Customers about Hi Tours',
  placesHeading: 'Discover these places in Egypt',
  activitiesHeading: 'The best activities on your trip',
  activities: [{ tag: 'Diving & snorkelling', title: 'An unforgettable underwater experience', image: g.redSea }, { tag: 'Golf', title: 'Enjoy sport and relaxation', image: g.golf }],
  planHeading: 'How to plan your Egypt trip',
  planIntro: 'Egypt – the land of the pharaohs – fascinates with millennia-old history, majestic temples and fascinating natural wonders. Whether a Nile cruise, a desert safari or a relaxed beach holiday on the Red Sea – experience Egypt with Hi Tours in your own individual way: safe, tailor-made and unforgettable.',
  plan: [
    ['Best time to travel & climate', 'The best time to travel to Egypt is between October and May. In these months there are pleasant temperatures between 21 and 29 °C, ideal conditions for culture trips, Nile cruises or a beach holiday on the Red Sea. The summer months are significantly hotter, especially inland.', ['Best time to travel Egypt']],
    ['Trip duration & route suggestions', 'For a comprehensive Egypt trip, at least 8 to 10 days are recommended. Classic routes combine Cairo, Luxor and Aswan with a Nile cruise. Those who want a beach holiday continue to the Red Sea to Hurghada or Sharm El Sheikh.', ['Egypt round trip 7 days', 'Unforgettable holiday in Egypt']],
    ['Sights & culture', 'Visit world-famous monuments such as the Pyramids of Giza, the Valley of the Kings in Luxor, the temples of Karnak and Hatshepsut or the lively old town of Cairo. Historic mosques, souks and museums make the cultural experience perfect.', ['Sights Egypt', 'Discover Cairo', 'Luxor highlights']],
    ['Nile cruise & activities', 'A Nile cruise between Luxor and Aswan is one of the highlights of every Egypt trip. Equally popular: snorkelling and diving in the Red Sea, hiking in the Sinai or desert safaris with sunset over the dunes.', ['Experience Sharm el Sheikh', 'Beaches Egypt', 'Diving & snorkelling']],
    ['Costs & budget', 'Travel costs in Egypt average around €83 per person per day. Luxury travellers should budget roughly €228 daily. Meals, taxis and many entrance fees are especially affordable.', ['Travel costs Egypt']],
    ['Safety & entry', 'A visa is required to enter Egypt and can be applied for online or on arrival. Your passport must be valid for at least six more months. Travel is generally considered safe, however individual overland trips should be undertaken with caution.', ['Official travel advice from the Foreign Office']]
  ],
  themesHeading: 'Travel themes: what you should know about Egypt',
  faqHeading: 'Practical information for your trip',
  faq: [
    ['When is the best time to visit Egypt?', 'The best time to visit Egypt is between October and May. In these months temperatures are pleasant (20–30 °C), ideal for sightseeing and desert tours. Summer (May to September) is very hot, especially in Luxor and Aswan, but good for swimming on the Red Sea.'],
    ['What is typical food in Egypt?', 'Typical Egyptian dishes are koshari (a lentil and pasta dish with tomato sauce), ful medames (cooked fava beans with oil and spices), ta’ameya (Egyptian falafel made from fava beans) and molokhia (a green herb dish). These are often served with flatbread and mezze such as hummus and baba ghanoush.'],
    ['What happens if the situation in the Middle East affects my trip?', 'We fully understand that many travellers are currently wondering how developments in the Middle East might affect their trip. At present there are no reliable signs of far-reaching disruptions to international air traffic. Should travel conditions change, our teams actively support you with solutions such as rebooking, itinerary adjustments or coordination with airlines and local partners. The advantage of booking with Hi Tours is that you do not have to manage such situations alone.'],
    ['How is my trip protected if travel conditions change due to current global developments?', 'With Hi Tours Care Flex you can cancel or rebook your land programme up to 30 days before departure without giving reasons. Depending on the destination, further protection and flexibility options may apply. Hi Tours Care was developed to give travellers more flexibility and security when travel conditions or personal circumstances change unexpectedly.']
  ],
  africaHeading: 'More travel destinations in Africa',
  africa: [
    { name: 'South Africa', image: g.alexandria }, { name: 'Seychelles', image: g.hurghada }, { name: 'Tanzania', image: g.luxor },
    { name: 'Namibia', image: g.redSea }, { name: 'Botswana', image: g.aswan }, { name: 'Kenya', image: g.komOmbo },
    { name: 'Morocco', image: g.giza }, { name: 'Mauritius', image: g.sharm }, { name: 'Uganda', image: g.p6 }
  ]
};

// Product detail = source page /afrika/aegypten/luxor-strand-urlaub/ (content translated to English).
export const featured = {
  slug: 'luxor-strand-urlaub',
  title: 'Egypt holiday from Cairo with Nile cruise and stop in ancient Thebes',
  days: '12 days', stops: 6, transport: 'Individual transfer', tag: 'Culture', price: 2945,
  gallery: [g.p1, g.p2, g.p3, g.p4, g.p5],
  service: ['Accommodation', 'Transport', '24/7 support', 'Activities', 'Hi Tours App', 'Itinerary', 'eSim', 'Flights'],
  expertName: 'Roman Karin',
  quote: 'This Egypt route has an itinerary I find particularly convincing: the Pyramids of Giza and the Grand Egyptian Museum as a historical opening, then the Nile cruise between Luxor, Edfu and Aswan as slow and atmospheric travel, and finally Sharm El Sheikh as a complete counterpoint on the Red Sea. The Temple of Edfu is for me one of the best-preserved temples in all of Egypt and deserves more attention than it gets on classic cruise routes. What I always recommend: visit the Valley of the Kings early in the morning, when it is still cool at the tombs and the large groups have not yet arrived.',
  stops: [
    { letter: 'A', name: 'Giza', days: 'Day 1 – 2', nights: '2 nights', image: g.giza, images: [g.p2, g.giza, g.p5],
      text: 'Giza, technically a separate administrative district, is part of the sprawling city of Cairo. The area is famous as the location of the Giza plateau: the site of some of the most impressive ancient monuments in the world. The Giza Pyramids were marvelled at as the first of the Seven Wonders of the World and still exert a powerful fascination – both as an extraordinary engineering feat and as a demonstration of the power and ambition of Egypt’s pharaonic rulers.',
      hotel: 'Azal Pyramids Hotel', program: ['Full-day visit of the Grand Egyptian Museum'] },
    { letter: 'B', name: 'Luxor', days: 'Day 3 – 4', nights: '1 night hotel + start of Nile cruise', image: g.luxor, images: [g.luxor, g.p3, g.p5],
      text: 'Luxor, on the banks of the Nile, is a fascinating place full of history and magic. Here once stood ancient Thebes, the glamorous capital of the New Kingdom. Today Luxor impresses with world-famous sights such as the Temple of Karnak, the Luxor Temple and the Valley of the Kings, where many pharaohs, including Tutankhamun, found their final rest. A walk along the banks of the Nile, a felucca ride or a hot-air-balloon flight at sunrise make the visit unforgettable.',
      hotel: 'Steigenberger Resort Achti / Nile cruise', program: ['Iberotel Crown Empress Nile cruise'] },
    { letter: 'C', name: 'Edfu', days: 'Day 5', nights: '1 night on board', image: g.komOmbo, images: [g.komOmbo, g.p4],
      text: 'The historic town of Edfu lies on the west bank of the Nile between Esna and Aswan and is the site of the famous Temple of Horus. The temple is considered the best-preserved temple in Egypt, dating from the Ptolemaic period (237 – 57 BC), and has played a dramatic role in our present understanding of ancient Egypt, including its religion, way of life and language. The temple is decorated with intricate and varied scenes and shows a combination of Egyptian and Greek architectural elements.',
      hotel: 'Nile cruise M/S Iberotel Crown Empress', program: ['Iberotel Crown Empress Nile cruise'] },
    { letter: 'D', name: 'Luxor', days: 'Day 6', nights: '1 night on board', image: g.p3, images: [g.p3, g.luxor],
      text: 'Luxor, on the banks of the Nile, is a fascinating place full of history and magic. Here once stood ancient Thebes, the glamorous capital of the New Kingdom. Today Luxor impresses with world-famous sights such as the Temple of Karnak, the Luxor Temple and the Valley of the Kings. A walk along the banks of the Nile, a felucca ride or a hot-air-balloon flight at sunrise make the visit unforgettable. Luxor is a must for anyone who wants to experience ancient Egypt up close!',
      hotel: 'Nile cruise M/S Iberotel Crown Empress', program: ['Iberotel Crown Empress Nile cruise'] },
    { letter: 'E', name: 'Aswan', days: 'Day 7 – 8', nights: '1 night cruise + 1 night hotel', image: g.aswan, images: [g.aswan, g.p6],
      text: 'Aswan is a tranquil city on the Nile in southern Egypt, known for its warm climate, river islands and strong Nubian heritage. Further south than Luxor, it offers a calmer starting point for exploring the ancient sites of Upper Egypt and is a popular departure point for Nile cruises. Travellers can sail the Nile by felucca, visit the island temples of Philae, explore the unfinished obelisk and stroll through the colourful markets and Nubian villages.',
      hotel: 'Nile cruise / Mövenpick Resort Aswan', program: ['Iberotel Crown Empress Nile cruise'] },
    { letter: 'F', name: 'Sharm El Sheikh', days: 'Day 9 – 12', nights: '3 nights', image: g.hurghada, images: [g.hurghada, g.redSea, g.sharm],
      text: 'Known as “Sharm”, this popular resort lies between the desert of the Sinai Peninsula and the warm waters of the Red Sea. With its sheltered white-sand beaches, crystal-clear water, colourful coral reefs and the legendary Pyramids of Giza just an excursion away, the town attracts countless visitors who come to enjoy the warm, sunny weather and countless activities – guided desert safaris, horse riding, quad biking, windsurfing, kayaking, snorkelling and diving.',
      hotel: 'JAZ Mirabel Beach', program: ['Beach stay on the Red Sea', 'Snorkelling and diving'] }
  ],
  stats: [['200+', 'Plan with real travel experts'], ['33+ hours', 'of planning time saved'], ['12+ bookings', 'handled for you – hotels, flights, activities'], ['9+ transfers', 'seamlessly organised from stop to stop']],
  glanceIntro: 'A beach holiday in Luxor offers a fascinating mix of history and relaxation. This unique destination attracts travellers seeking both cultural experiences and restful hours by the water. The impressive temples and tombs of Luxor are just a stone’s throw away and offer deep insight into Egyptian history. Beyond the cultural treasures you experience Egypt especially intensely along the Nile: on a multi-day Nile cruise you discover important places such as Luxor, Edfu and Aswan at a relaxed pace. To round off your trip, Sharm El Sheikh awaits with a classic beach stay on the Red Sea – the perfect contrast to the cultural impressions inland.',
  glance: [
    ['Day 1–2: Giza (2 nights)', 'Your opening with the world-famous pyramids and first impressions of the ancient Egyptian high culture.', 'Azal Pyramids Hotel', ['Pyramids of Giza and Sphinx', 'Visit of the Grand Egyptian Museum']],
    ['Day 3–4: Luxor (1 night hotel + start of Nile cruise)', 'Luxor forms the cultural centre of your trip and the starting point of your Nile cruise.', 'Steigenberger Resort Achti / Nile cruise', ['Karnak Temple', 'Valley of the Kings']],
    ['Day 5: Edfu (1 night, Nile cruise)', 'An impressive stopover along the Nile.', 'Nile cruise M/S Iberotel Crown Empress', ['Temple of Horus at Edfu', 'Relaxed Nile sailing']],
    ['Day 6: Luxor (1 night, Nile cruise)', 'Further cultural highlights await you along the river.', 'Nile cruise M/S Iberotel Crown Empress', ['Temple complexes of Luxor', 'Observe life on the Nile']],
    ['Day 7–8: Aswan (1 night cruise + 1 night hotel)', 'Aswan delights with its calm atmosphere and impressive landscapes.', 'Nile cruise / Mövenpick Resort Aswan', ['Temple of Philae', 'Walks along the Nile']],
    ['Day 9–12: Sharm El Sheikh (3 nights)', 'To finish, relax on the Red Sea and let your trip wind down.', 'JAZ Mirabel Beach', ['Beach stay on the Red Sea', 'Snorkelling and diving']]
  ]
};
