// Malaysia packages – same structured data model as vietnamPackages.js (destination → packages[] → itinerary days[]).
// Adapters for the listing/detail templates live in tours/malaysiaToursData.js.
const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p, w = 1080) => `${CT}/${p}?w=${w}&q=60&fm=webp`;

export const IMG = {
  petronas: ct('7v9STD4EzC9uO1vB6vl2SC/2d6be37e8ab85ac375ae2d2ac46ec9b0/Malaysia__Kuala_Lumpur__Petronas_Towers.jpg'),
  klCity: ct('7ESNSlcaBy677vvS6n9007/e39b7f110e4be76e4a4071d0e7f37973/Kuala_Lumpur_Malaysia.jpg'),
  ipoh: ct('X7b0PdKpWDMzl19jytcJ6/d0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg'),
  georgeTown: ct('51tkEfILsnNr3oDIU4ElpU/bc3ac3dac83ed5c1f18aa7024e8f1c32/Malaysia__George_Town.jpg'),
  cameron: ct('6tQ0fuewJsT1XGyPtk1feM/46e2bf106f4544461abd40528a72610e/Sonnenaufgang_Wolken_Cameron-Highlands_Malaysia.png'),
  sabah: ct('75OivhbWUIcq5PlUmpmA1j/30161b201b3fd087f637ed6b5cfb5ecd/Malaysia__Sabah__Sepilok-Orang-Utan-Rehabilitationszentrum.jpg'),
  kuching: ct('24BB1qRdodIYm9e7lbZ9ae/c3e668ed13b3bab687aec1074f2a9d32/Malaysia__Kuching.jpg'),
  strand: ct('551fN43gzcrBZuaq1Htm5G/7178fc9e6f18a09d653189847d195f8e/Strand_Malaysia.jpg')
};
const CITY_IMG = {
  'Kuala Lumpur': [IMG.petronas, IMG.klCity, IMG.ipoh],
  Penang: [IMG.georgeTown, IMG.strand],
  'Cameron Highlands': [IMG.cameron],
  Langkawi: [IMG.strand],
  'Kota Kinabalu': [IMG.sabah, IMG.strand],
  Sabah: [IMG.sabah],
  Kuching: [IMG.kuching]
};
export const cityImages = (c) => CITY_IMG[c] || [IMG.petronas];

const INCL_BASE = ['Meals as indicated in the itinerary (B = Breakfast, L = Lunch, D = Dinner)', 'Entrance fees to the attractions mentioned in the programme', 'Sightseeing and excursions mentioned in the itinerary', 'English-speaking local guide', 'Transportation used in the programme'];
const EXCL_BASE = ['Tips for guides and drivers', 'Personal expenses such as telephone, laundry, drinks, etc.', 'Meals not mentioned in the programme', 'Bank fees related to payment', 'Other services not clearly indicated under "Included"'];
const STYLES_ALL = ['Family', 'Beach', 'Honeymoon'];

// day: [dayNo, title, meals, bullets[], overnight]
const D = (day, title, meals, bullets, overnight) => ({ day, title, meals, bullets, overnight });

export const destination = { name: 'Malaysia', slug: 'malaysia', continent: 'Asia', image: IMG.petronas };

export const packages = [
  {
    slug: 'kuala-lumpur-penang-malaysia-6d5n', name: 'Kuala Lumpur & Penang: Classic Malaysia', code: 'MY-1', days: 6, nights: 5, tag: 'Culture', styles: ['Family', 'Honeymoon'],
    summary: 'The twin icons of Malaysia: futuristic Kuala Lumpur with the Petronas Towers and the heritage streets, temples and food of George Town, Penang.',
    stays: [['Kuala Lumpur', 'Days 1–3', 'Hotel Stripes KL (Deluxe room)'], ['Penang', 'Days 4–5', 'Eastern & Oriental Hotel (Heritage Wing)']],
    itinerary: [
      D(1, 'Arrival in Kuala Lumpur', 'D', ['Arrival at Kuala Lumpur International Airport and private transfer to your hotel', 'Evening at leisure; optional visit to the Petronas Towers KLCC park fountain show', 'Welcome dinner at a local restaurant'], 'Kuala Lumpur'),
      D(2, 'Kuala Lumpur city tour (private)', 'B, L', ['Petronas Twin Towers and the Skybridge, Merdeka Square and the Sultan Abdul Samad building', 'National Mosque, Thean Hou Temple and the colonial old city', 'Lunch at a local restaurant, then Batu Caves and its 272 rainbow steps', 'Evening street-food walk through Jalan Alor'], 'Kuala Lumpur'),
      D(3, 'Day trip to Putrajaya & Genting foothills', 'B', ['Morning drive to Putrajaya, Malaysia’s garden city of bridges and the pink Putra Mosque', 'Cable-car option up to the Genting Highlands or Batu Caves cultural stop', 'Return to Kuala Lumpur; evening free for shopping at Bukit Bintang'], 'Kuala Lumpur'),
      D(4, 'Kuala Lumpur – Penang (flight) – George Town', 'B, L', ['Transfer to the airport for a short flight to Penang', 'George Town heritage walk: Armenian Street, clan jetties and famous street-art murals', 'Lunch of Penang laksa and char kway teow; Kek Lok Si temple in the afternoon'], 'Penang'),
      D(5, 'Penang at leisure & Penang Hill', 'B', ['Funicular up Penang Hill for panoramic island views', 'Afternoon free for the beaches of Batu Ferringhi or a cooking class', 'Optional sunset trishaw ride through the old town'], 'Penang'),
      D(6, 'Penang – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Penang airport for your onward flight'], null)
    ],
    pricing: { currency: 'INR', basis: '4-star hotels, per person on double-sharing basis', rows: [['All months', 46999]] },
    price: 46999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Domestic flight Kuala Lumpur–Penang'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.petronas, IMG.georgeTown, IMG.klCity, IMG.ipoh], alt: 'Petronas Towers lit up at dusk, Kuala Lumpur, Malaysia'
  },
  {
    slug: 'highlands-islands-malaysia-8d7n', name: 'Highlands & Islands of Malaysia', code: 'MY-2', days: 8, nights: 7, tag: 'Nature', styles: STYLES_ALL,
    summary: 'From the Petronas Towers to the tea plantations of the Cameron Highlands and the turquoise waters of Langkawi – the best of the peninsula in one journey.',
    stays: [['Kuala Lumpur', 'Days 1–2', 'Hotel Stripes KL (Deluxe room)'], ['Cameron Highlands', 'Days 3–4', 'Cameron Highlands Resort'], ['Penang', 'Day 5', 'Eastern & Oriental Hotel'], ['Langkawi', 'Days 6–7', 'The Datai Langkawi (Rainforest Villa)']],
    itinerary: [
      D(1, 'Arrival in Kuala Lumpur', '', ['Arrival and private transfer to your hotel', 'Evening free to explore Bukit Bintang at your own pace'], 'Kuala Lumpur'),
      D(2, 'Kuala Lumpur city tour (private)', 'B, L', ['Petronas Towers, Merdeka Square and the National Mosque', 'Batu Caves and the colourful steps', 'Lunch at a local restaurant and a Jalan Alor street-food walk'], 'Kuala Lumpur'),
      D(3, 'Kuala Lumpur – Cameron Highlands', 'B, L', ['Scenic drive into the cool highlands', 'Visit the BOH tea plantation and factory with a tasting', 'Strawberry and butterfly farms; evening at leisure'], 'Cameron Highlands'),
      D(4, 'Cameron Highlands – Mossy Forest & tea country', 'B', ['Guided walk through the ancient Mossy Forest', 'Local market, honey-bee farm and panoramic viewpoints', 'Afternoon free among the tea terraces'], 'Cameron Highlands'),
      D(5, 'Cameron Highlands – Penang (George Town)', 'B, L', ['Transfer to Penang via Ipoh with its limestone cave temples', 'George Town heritage walk, street art and clan jetties', 'Dinner of Penang hawker specialities'], 'Penang'),
      D(6, 'Penang – Langkawi (flight)', 'B', ['Short flight to the island of Langkawi', 'Afternoon at leisure on the beach; optional sunset cruise'], 'Langkawi'),
      D(7, 'Langkawi – island & sky', 'B', ['SkyCab cable car and the curved Langkawi Sky Bridge', 'Island-hopping boat trip or free beach time', 'Farewell dinner by the sea'], 'Langkawi'),
      D(8, 'Langkawi – departure', 'B', ['Breakfast at the resort', 'Private transfer to Langkawi airport'], null)
    ],
    pricing: { currency: 'INR', basis: 'Per person on double-sharing basis', rows: [['January–June', 74999, 86999, 99999], ['July–December', 76999, 89999, 104999]], columns: ['3-star', '4-star', '5-star'] },
    price: 74999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Domestic flight Penang–Langkawi'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.cameron, IMG.strand, IMG.petronas, IMG.georgeTown, IMG.ipoh], alt: 'Tea terraces of the Cameron Highlands, Malaysia'
  },
  {
    slug: 'borneo-wildlife-malaysia-7d6n', name: 'Borneo Wildlife Malaysia: Sabah & Kuching', code: 'MY-3', days: 7, nights: 6, tag: 'Nature', styles: ['Family', 'Honeymoon'],
    summary: 'Wild Malaysian Borneo: orangutans at Sepilok, proboscis monkeys on the Kinabatangan River and the rainforest and culture of Kuching, Sarawak.',
    stays: [['Kota Kinabalu', 'Days 1–3', 'Shangri-La Tanjung Aru Resort'], ['Kuching', 'Days 4–6', 'The Waterfront Hotel Kuching']],
    itinerary: [
      D(1, 'Arrival in Kota Kinabalu', 'D', ['Arrival in Sabah and private transfer to your beachfront resort', 'Sunset over the South China Sea; welcome dinner'], 'Kota Kinabalu'),
      D(2, 'Sepilok Orangutan Sanctuary & Kinabatangan', 'B, L, D', ['Visit the Sepilok Orangutan Rehabilitation Centre at feeding time', 'Sun Bear Conservation Centre next door', 'Afternoon river cruise on the Kinabatangan to spot proboscis monkeys and hornbills'], 'Kota Kinabalu'),
      D(3, 'Kota Kinabalu – Mount Kinabalu foothills', 'B, L', ['Day trip towards Kinabalu Park and the Poring hot springs canopy walk', 'Local Dusun village and tea estate', 'Return to the coast; evening free'], 'Kota Kinabalu'),
      D(4, 'Kota Kinabalu – Kuching (flight)', 'B', ['Flight across Borneo to Kuching, Sarawak’s riverside capital', 'Waterfront walk, the old courthouse and the Cat Museum', 'Evening at a local seafood market'], 'Kuching'),
      D(5, 'Bako National Park & Sarawak culture', 'B, L', ['Boat to Bako National Park for jungle trails and wildlife', 'Spot bearded pigs, monkeys and pitcher plants', 'Afternoon at the Sarawak Cultural Village'], 'Kuching'),
      D(6, 'Kuching at leisure / Semenggoh', 'B', ['Morning at the Semenggoh orangutan centre', 'Afternoon free for the bazaar and heritage streets'], 'Kuching'),
      D(7, 'Kuching – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Kuching airport'], null)
    ],
    pricing: { currency: 'INR', basis: '4-star hotels, per person on double-sharing basis', rows: [['All months', 68999]] },
    price: 68999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Domestic flight Kota Kinabalu–Kuching', 'River cruise and national-park permits'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.sabah, IMG.kuching, IMG.strand, IMG.petronas], alt: 'Orangutan in the rainforest of Sabah, Malaysian Borneo'
  }
];
