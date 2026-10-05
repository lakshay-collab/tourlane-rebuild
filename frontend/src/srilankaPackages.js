// Sri Lanka packages – source of truth: Hi Tours quotation PDFs (Trip# 4518359 series, Nov–19 Dec 2026, 2 adults, half board).
// Same structured model as vietnamPackages.js. The existing Emerald Isle Explorer package lives separately (srilankaData.js) and is untouched.
const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p) => `${CT}/${p}?w=1080&q=60&fm=webp`;
const PK = (n) => `/srilanka-packages/${n}.webp`;

export const IMG = {
  turtles: PK('turtles'), coast: PK('coast-aerial'), hill: PK('hill-station'), rivendell: PK('rivendell'), colomboNight: PK('colombo-night'), pinnawala: PK('pinnawala'), tea: PK('tea-pluckers'),
  kandy: ct('5txxVlE127H9wf3FeJUKox/f8f3ad88cca71fc13bce4579481061f2/Kandy_Sri_Lanka_2.jpg'),
  kandyTemple: ct('1tXogJFN76YCthWrqs1rbz/1efdd4d03c76d7608cf6e4f3ba60ca81/Kandy_Sri_Lanka_-_Tempel_der_Zahn.jpg'),
  nuwara: ct('6QvAxLipu3xvmlnPE5HN0w/a196045328212c43388d14d1b8c76d5c/Sri_Lanka__Central_Province__Nuwara_Eliya__Stausee.jpg'),
  bentota: ct('2Qmktfpd63iN6dIbGQVV5a/a739f37a3d1bd5d3613cbe380b96394d/Hikkaduwa_Sri_Lanka.jpg'),
  galle: ct('74ItYZBeAzDqpNS76sj5Zg/a4e9c05ccc5070757dfdf657e93a819f/Galle_Sri_Lanka.jpg'),
  colombo: ct('5Ct3r5b6xduSjwU0QaSWjl/88511cf3f2d85c643f081681d172f68e/Colombo_SriLanka_2.jpg'),
  sigiriya: ct('4ty416HtZ5fnIJe5U94pUn/04e383acf72b20230360d6cdeb960993/Sigiriya_Sri_Lanka.jpg'),
  sigiriyaElephant: ct('7am9HezUT6UVVuCZDR0XCY/2dd79b0670aa3f7ba1f0a162dba0146b/Sri_Lanka__Sigiriya.jpg')
};
const CITY_IMG = {
  Kandy: [IMG.kandyTemple, IMG.kandy, IMG.rivendell], 'Nuwara Eliya': [IMG.hill, IMG.tea, IMG.nuwara], Bentota: [IMG.bentota, IMG.coast, IMG.turtles],
  Colombo: [IMG.colombo, IMG.colomboNight], Dambulla: [IMG.sigiriya, IMG.sigiriyaElephant]
};
export const cityImages = (c) => CITY_IMG[c] || [IMG.kandy];

const INCL = (n) => [`Accommodation in standard rooms on half-board basis for ${n} nights`, 'Transportation by A/C vehicle as per the itinerary', 'Service of an English-speaking chauffeur guide', 'All sightseeing as per the programme'];
const EXCL = ['Any entrance fees & fares to the sightseeing places mentioned', 'Beverages throughout the tour', 'Lunch throughout the tour', 'Anything relating to air ticketing', 'Expenses of a personal nature', 'Tips and porterage', 'GST and any bank charges', 'Anything not mentioned in the inclusions'];
const PRICING = (pp, total, first) => ({ currency: 'INR', basis: 'Per person on double-sharing basis, 2 adults, standard rooms, half board, excluding GST · valid Nov – 19 Dec 2026', rows: [['Nov – 19 Dec 2026', pp]], columns: ['Standard'], total, firstInstalment: first, note: 'Applicable for Indian passport / OCI card holders' });
const D = (day, title, meals, bullets, overnight) => ({ day, title, meals, bullets, overnight });

const KANDY_ARRIVAL = D(1, 'Colombo Airport to Kandy – en route Pinnawala Elephant Orphanage, Temple of the Tooth Relic', 'D', ['Arrive at Bandaranaike International Airport and meet your representative', 'Drive to Kandy, Sri Lanka’s cultural capital; en route visit Pinnawala Elephant Orphanage', 'Check in, then visit the sacred Temple of the Tooth Relic', 'Sri Lankan cultural dance show with traditional music and performances'], 'Kandy');
const KANDY_NUWARA = (n) => D(n, 'Kandy to Nuwara Eliya – tea plantation and tea factory', 'B, D', ['Drive to Nuwara Eliya, Sri Lanka’s scenic hill station', 'Visit a tea plantation and tea factory to learn about Ceylon tea production', 'Views of tea estates, lush hills and waterfalls', 'Explore “Little England” – colonial architecture, gardens and cool climate'], 'Nuwara Eliya');
const NUWARA_BENTOTA = (n) => D(n, 'Nuwara Eliya to Bentota – Hakgala Botanical Gardens, Sita Amman Temple', 'B, D', ['Hakgala Botanical Gardens, famous for vibrant flowers and tropical plants', 'The sacred Sita Amman Temple, a revered Ramayana pilgrimage site', 'Drive to Bentota, Sri Lanka’s premier beach destination, and check in'], 'Bentota');
const GALLE_DAY = (n) => D(n, 'Galle excursion – Galle Fort, Madu River, Turtle Hatchery', 'B, D', ['Historic Galle and the UNESCO-listed Galle Fort', 'Scenic Madu River boat safari at Balapitiya', 'Turtle Hatchery Conservation Centre'], 'Bentota');
const BENTOTA_COLOMBO = (n) => D(n, 'Bentota to Colombo – Gangaramaya Temple, city tour', 'B, D', ['Drive to Colombo, Sri Lanka’s vibrant commercial capital', 'City tour: Independence Square, Gangaramaya Temple, Galle Face Green and key landmarks', 'Shopping for tea, spices, gemstones, handicrafts and souvenirs; evening at leisure'], 'Colombo');
const DEPART = (n) => D(n, 'Colombo hotel to Colombo Airport – departure transfer', 'B', ['Check out and transfer to Bandaranaike International Airport for your departure flight'], null);

const URBAN_ITIN = [
  D(1, 'Colombo Airport to Colombo hotel – Independence Square, Gangaramaya Temple, Galle Face Green', 'D', ['Arrive at Bandaranaike International Airport and meet your representative; transfer to Colombo and check in', 'City tour covering Independence Square, Gangaramaya Temple, Galle Face Green and major landmarks', 'Colombo’s shopping districts for tea, spices, gemstones, handicrafts, clothing and souvenirs', 'Evening at leisure'], 'Colombo'),
  D(2, 'Colombo – leisure day', 'B, D', ['Full day at leisure exploring Colombo'], 'Colombo'),
  D(3, 'Colombo hotel to Bentota – water sports activities in Bentota', 'B, D', ['Proceed to Bentota, Sri Lanka’s premier beach resort destination, and check in', 'Afternoon water sports activities and the coastal charm of Bentota'], 'Bentota'),
  D(4, 'Galle excursion – Galle Fort, Madu River, Turtle Hatchery', 'B, D', ['Historic Galle and the UNESCO-listed Galle Fort – colonial streets, boutiques and ocean views', 'Balapitiya: scenic Madu River boat safari through mangroves and islands', 'Turtle Hatchery Conservation Centre; return to Bentota'], 'Bentota'),
  D(5, 'Bentota to Colombo Airport – departure transfer', 'B', ['Check out and transfer to Bandaranaike International Airport for your departure flight'], null)
];

export const packages = [
  {
    slug: 'sri-lanka-hill-stations-heritage-forts-6d5n', name: 'Sri Lanka Classic: Hill Stations & Heritage Forts', code: '5N/6D Hill Country & Coastal Highlights', days: 6, nights: 5, tag: 'Culture', styles: ['Culture', 'Family', 'Honeymoon', 'Beach'], included: { hotels: 4, activities: 11, transfers: 6, meals: 10 },
    summary: 'Kandy’s Temple of the Tooth, tea country around Nuwara Eliya, Hakgala Gardens and the Sita Amman Temple, Galle Fort and a Madu River safari from Bentota, then Colombo.',
    stays: [['Kandy', 'Night 1', 'Rivendell Hotel (Standard room, half board)'], ['Nuwara Eliya', 'Night 2', 'Daffodil Hotel (Standard room, half board)'], ['Bentota', 'Nights 3–4', 'Club Bentota (Standard room, half board)'], ['Colombo', 'Night 5', 'Best Western (Standard room, half board)']],
    itinerary: [KANDY_ARRIVAL, KANDY_NUWARA(2), NUWARA_BENTOTA(3), GALLE_DAY(4), BENTOTA_COLOMBO(5), DEPART(6)],
    pricing: PRICING(43199, 86398, 25920), price: 43199,
    inclusions: INCL(5), exclusions: EXCL,
    gallery: [IMG.kandyTemple, IMG.hill, IMG.tea, IMG.turtles, IMG.coast], alt: 'Temple of the Sacred Tooth Relic at dusk, Kandy, Sri Lanka'
  },
  {
    slug: 'sri-lanka-ancient-citadels-coastal-paradises-7d6n', name: 'Sri Lanka Classic: Ancient Citadels to Coastal Paradises', code: '6N/7D Hill Country, Culture & Coastal Highlights', days: 7, nights: 6, tag: 'Culture', styles: ['Culture', 'Family', 'Honeymoon', 'Beach'], included: { hotels: 4, activities: 13, transfers: 7, meals: 12 },
    summary: 'Two nights in Kandy with a full-day Sigiriya Rock Fortress and Dambulla Cave Temple excursion, tea country, Bentota beach with Galle Fort and turtles, and Colombo.',
    stays: [['Kandy', 'Nights 1–2', 'Rivendell Hotel (Standard room, half board)'], ['Nuwara Eliya', 'Night 3', 'Daffodil Hotel (Standard room, half board)'], ['Bentota', 'Nights 4–5', 'Club Bentota (Standard room, half board)'], ['Colombo', 'Night 6', 'Best Western (Standard room, half board)']],
    itinerary: [
      KANDY_ARRIVAL,
      D(2, 'Kandy to Sigiriya – Dambulla excursion: Sigiriya Rock Fortress, Dambulla Cave Temple', 'B, D', ['Early breakfast and drive to Sigiriya Rock Fortress, a UNESCO World Heritage Site', 'Explore the ancient royal citadel – frescoes, gardens and panoramic views', 'Dambulla Cave Temple with ancient Buddhist murals and over 150 Buddha statues', 'Return to Kandy'], 'Kandy'),
      KANDY_NUWARA(3), NUWARA_BENTOTA(4), GALLE_DAY(5), BENTOTA_COLOMBO(6), DEPART(7)
    ],
    pricing: PRICING(98998, 197996, 59399), price: 98998,
    inclusions: INCL(6).slice(0, 3), exclusions: EXCL,
    gallery: [IMG.sigiriya, IMG.kandyTemple, IMG.hill, IMG.coast, IMG.colomboNight], alt: 'Sigiriya Lion Rock at sunset, Sri Lanka'
  },
  {
    slug: 'sri-lanka-cultural-coastal-journey-6d5n', name: 'Sri Lanka Classic: Cultural & Coastal Journey', code: '5N/6D Culture, Hill Country & Coastal Highlights', days: 6, nights: 5, tag: 'Culture', styles: ['Culture', 'Family', 'Honeymoon', 'Beach'], included: { hotels: 5, activities: 12, transfers: 6, meals: 10 },
    summary: 'Dambulla Cave Temple and Sigiriya Rock Fortress first, a Matale spice garden, Kandy’s Temple of the Tooth, tea country, Bentota beach and Colombo.',
    stays: [['Dambulla', 'Night 1', 'Nice Place Hotel (Standard room, half board)'], ['Kandy', 'Night 2', 'Rivendell Hotel (Standard room, half board)'], ['Nuwara Eliya', 'Night 3', 'Daffodil Hotel (Standard room, half board)'], ['Bentota', 'Night 4', 'Club Bentota (Standard room, half board)'], ['Colombo', 'Night 5', 'Best Western (Standard room, half board)']],
    itinerary: [
      D(1, 'Colombo Airport to Dambulla – en route Pinnawala Elephant Orphanage, Dambulla Cave Temple', 'D', ['Arrive at Bandaranaike International Airport and meet your representative', 'Pinnawala Elephant Orphanage to see rescued elephants', 'UNESCO-listed Dambulla Cave Temple – ancient Buddhist murals and over 150 Buddha statues', 'Check in to the hotel in Dambulla'], 'Dambulla'),
      D(2, 'Dambulla to Kandy via Sigiriya – Rock Fortress, spice garden, Temple of the Tooth Relic', 'B, D', ['Early breakfast and Sigiriya Rock Fortress, a UNESCO World Heritage Site – citadel, frescoes and viewpoints', 'Traditional spice garden at Matale', 'Kandy: the sacred Temple of the Tooth Relic', 'Sri Lankan cultural dance show'], 'Kandy'),
      KANDY_NUWARA(3), NUWARA_BENTOTA(4), BENTOTA_COLOMBO(5), DEPART(6)
    ],
    pricing: PRICING(84998, 169996, 50999), price: 84998,
    inclusions: INCL(5).slice(0, 3), exclusions: EXCL,
    gallery: [IMG.sigiriyaElephant, IMG.pinnawala, IMG.kandyTemple, IMG.tea, IMG.bentota], alt: 'Elephant in front of Sigiriya Rock, Sri Lanka'
  },
  {
    slug: 'sri-lanka-culture-coast-colonial-charm-5d4n', name: 'Sri Lanka Classic: Culture, Coast & Colonial Charm', code: '4N/5D Sri Lanka Highlights Tour', days: 5, nights: 4, tag: 'Short trips', styles: ['Short trips', 'Beach', 'Family', 'Honeymoon'], included: { hotels: 3, activities: 8, transfers: 5, meals: 8 },
    summary: 'Kandy and the Temple of the Tooth, the Royal Botanical Gardens at Peradeniya, two nights on Bentota beach with Galle Fort, the Madu River and turtles, then a Colombo city tour.',
    stays: [['Kandy', 'Night 1', 'Rivendell Hotel (Standard room, half board)'], ['Bentota', 'Nights 2–3', 'Club Bentota (Standard room, half board)'], ['Colombo', 'Night 4', 'Best Western (Standard room, half board)']],
    itinerary: [
      KANDY_ARRIVAL,
      D(2, 'Kandy to Bentota – Royal Botanical Gardens, Peradeniya', 'B, D', ['Royal Botanical Gardens at Peradeniya – orchids, tropical plants and giant trees', 'Drive to Bentota and check in to your beach resort', 'Water sports and relaxation along the southern coastline'], 'Bentota'),
      GALLE_DAY(3),
      D(4, 'Bentota to Colombo – city tour of landmarks, colonial buildings and temples', 'B, D', ['Drive to Colombo and enjoy a city tour of major landmarks, colonial buildings, temples and modern commercial areas', 'Shopping for tea, spices, gems, handicrafts and souvenirs; evening at leisure'], 'Colombo'),
      DEPART(5)
    ],
    pricing: PRICING(66598, 133196, 39959), price: 66598,
    inclusions: INCL(4).slice(0, 3), exclusions: EXCL,
    gallery: [IMG.coast, IMG.galle, IMG.turtles, IMG.kandy, IMG.colombo], alt: 'Aerial view of the south coast, Sri Lanka'
  }
,
  {
    slug: 'sri-lanka-urban-vibes-southern-shores-5d4n', name: 'Sri Lanka Classic: Urban Vibes & Southern Shores', code: '4N/5D Sri Lanka Urban & Coastal Highlights', days: 5, nights: 4, tag: 'Beach', styles: ['Beach', 'Short trips', 'Family', 'Honeymoon'], included: { hotels: 2, activities: 8, transfers: 5, meals: 8 },
    summary: 'Two nights in Colombo with a city tour and a free day, then two nights on Bentota beach with water sports, Galle Fort, the Madu River safari and the turtle hatchery.',
    stays: [['Colombo', 'Nights 1–2', 'Best Western (Standard room, half board)'], ['Bentota', 'Nights 3–4', 'Club Bentota (Standard room, half board)']],
    itinerary: URBAN_ITIN,
    pricing: PRICING(69200, 138400, 41520), price: 69200,
    inclusions: INCL(4), exclusions: EXCL,
    gallery: [IMG.colomboNight, IMG.coast, IMG.turtles, IMG.galle, IMG.bentota], alt: 'Colombo skyline at night, Sri Lanka'
  },
  {
    slug: 'sri-lanka-premium-urban-explorations-watersports-5d4n', name: 'Sri Lanka Premium: Refined Urban Explorations & Watersports', code: '4N/5D Sri Lanka Urban & Coastal Highlights (Premium)', days: 5, nights: 4, tag: 'Luxury', styles: ['Luxury', 'Beach', 'Short trips', 'Honeymoon'], included: { hotels: 2, activities: 7, transfers: 5, meals: 8 },
    summary: 'The premium take on Colombo and Bentota: Morven Hotel in the city, EKHO Surf on the beach, with water sports, Galle Fort, the Madu River and the turtle hatchery.',
    stays: [['Colombo', 'Nights 1–2', 'Morven Hotel (Standard room, half board)'], ['Bentota', 'Nights 3–4', 'EKHO Surf (Standard room, half board)']],
    itinerary: URBAN_ITIN,
    pricing: PRICING(70598, 141196, 42359), price: 70598,
    inclusions: INCL(4), exclusions: EXCL,
    gallery: [IMG.coast, IMG.colombo, IMG.bentota, IMG.turtles, IMG.galle], alt: 'Aerial view of the south coast, Sri Lanka'
  }
];
