// Thailand packages (NEW, for the Thailand destination landing page) – same model as vietnamPackages.js.
// NOTE: the existing "Siam Splendour" package (thailandData.js, slug siam-splendour-thailand) is NOT defined here;
// it is added into the Thailand landing page's product grid separately and keeps its own existing detail page.
const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p, w = 1080) => `${CT}/${p}?w=${w}&q=60&fm=webp`;
const L = (f) => `/thailand/${f}`;

export const IMG = {
  natur: ct('27MnAH4RS1zTSFygAmnq5i/97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg'),
  khaosok: ct('A2kAwcfVxbWxQRQIqLVcM/5e25b1e33b9bc306e834fcfe2f8a99b6/THA_-_-KhaoSok.png'),
  phuket: ct('s0tM0ptUexcdfhU4HTwgh/64c82b916559b0a460fa3fca5ebad20a/THA_-_-Phuket.png'),
  buddha: ct('7HtZOrGdjOUTb867vNotZS/8d943ee4512ca1f877e214b533104956/THA_-_-MingMongkolBuddha.png'),
  mayabay: ct('5SBGUEdaCyRBPiktrtmzaX/09c6c1fc53fb1daffcd491e0182493eb/THA_-_-MayaBay.png'),
  freedom: ct('SM5V0pOzqkcZYtxbL69wU/62ac1dea663f5d24355ac47b579002c5/THA_-_-FreedomBeach.png'),
  palace: L('img2.webp'), falls: L('img5.webp'), elephant: L('img1.webp'), phiphi: L('img4.webp'), wachi: L('img6.webp')
};
const CITY_IMG = {
  Bangkok: [IMG.palace, IMG.buddha, IMG.natur],
  Phuket: [IMG.phuket, IMG.freedom],
  Krabi: [IMG.mayabay, IMG.khaosok],
  'Chiang Mai': [IMG.falls, IMG.elephant],
  'Chiang Rai': [IMG.wachi, IMG.natur]
};
export const cityImages = (c) => CITY_IMG[c] || [IMG.natur];

const INCL_BASE = ['Meals as indicated in the itinerary (B = Breakfast, L = Lunch, D = Dinner)', 'Entrance fees to the attractions mentioned in the programme', 'Sightseeing and excursions mentioned in the itinerary', 'English-speaking local guide', 'Transportation used in the programme'];
const EXCL_BASE = ['Tips for guides and drivers', 'Personal expenses such as telephone, laundry, drinks, etc.', 'Meals not mentioned in the programme', 'Bank fees related to payment', 'Other services not clearly indicated under "Included"'];

const D = (day, title, meals, bullets, overnight) => ({ day, title, meals, bullets, overnight });

export const destination = { name: 'Thailand', slug: 'thailand', continent: 'Asia', image: IMG.natur };

export const packages = [
  {
    slug: 'thailand-beaches-islands-8d7n', name: 'Thailand Beaches & Islands', code: 'TH-2', days: 8, nights: 7, tag: 'Beach', styles: ['Beach', 'Honeymoon', 'Family'],
    summary: 'Bangkok’s temples and the turquoise Andaman coast in one trip – the Grand Palace, then island-hopping and barefoot beach days around Phuket and Krabi.',
    stays: [['Bangkok', 'Days 1–2', 'The Sukosol Bangkok 5★'], ['Phuket', 'Days 3–5', 'Katathani Phuket Beach Resort'], ['Krabi', 'Days 6–7', 'Rayavadee Krabi']],
    itinerary: [
      D(1, 'Arrival in Bangkok', 'D', ['Arrival at Suvarnabhumi Airport and private transfer to your hotel', 'Evening dinner cruise on the Chao Phraya River'], 'Bangkok'),
      D(2, 'Bangkok temples & city (private tour)', 'B, L', ['Grand Palace and the Emerald Buddha', 'Wat Pho and the Reclining Buddha, then a longtail boat through the klongs', 'Evening at leisure on Khao San Road or a rooftop bar'], 'Bangkok'),
      D(3, 'Bangkok – Phuket (flight)', 'B', ['Morning flight to Phuket and transfer to your beach resort', 'Afternoon free on the Andaman coast; sunset at Promthep Cape'], 'Phuket'),
      D(4, 'Phi Phi Islands speedboat tour', 'B, L', ['Full-day speedboat to the Phi Phi Islands', 'Snorkelling at Bamboo Island, beach lunch and Maya Bay', 'Pileh Lagoon and Monkey Beach'], 'Phuket'),
      D(5, 'Phuket at leisure / James Bond Island', 'B', ['Optional Phang Nga Bay and James Bond Island canoe tour', 'Or a free day by the pool and Patong nightlife'], 'Phuket'),
      D(6, 'Phuket – Krabi', 'B', ['Scenic transfer by road and ferry to Krabi', 'Afternoon on Railay Beach beneath the limestone cliffs'], 'Krabi'),
      D(7, 'Krabi – four islands & Emerald Pool', 'B, L', ['Four Islands longtail tour: Tup, Chicken and Poda islands', 'Or the Emerald Pool and Tiger Cave Temple inland', 'Farewell seafood dinner on the beach'], 'Krabi'),
      D(8, 'Krabi – departure', 'B', ['Breakfast at the resort', 'Private transfer to Krabi airport for your onward flight'], null)
    ],
    pricing: { currency: 'INR', basis: 'Per person on double-sharing basis', rows: [['January–June', 72999, 86999], ['July–December', 69999, 83999]], columns: ['4-star', '5-star'] },
    price: 69999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Domestic flight Bangkok–Phuket', 'Island speedboat tours as listed'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.mayabay, IMG.phuket, IMG.freedom, IMG.palace], alt: 'Longtail boat and limestone cliffs at Maya Bay, Thailand'
  },
  {
    slug: 'northern-thailand-explorer-7d6n', name: 'Northern Thailand Explorer', code: 'TH-3', days: 7, nights: 6, tag: 'Culture', styles: ['Culture', 'Adventure', 'Family'],
    summary: 'The cool green north: Bangkok’s golden temples, the lanterns and night markets of Chiang Mai, an ethical elephant sanctuary and the dazzling White Temple of Chiang Rai.',
    stays: [['Bangkok', 'Days 1–2', 'The Sukosol Bangkok 5★'], ['Chiang Mai', 'Days 3–5', 'NA NIRAND Romantic Boutique Resort'], ['Chiang Rai', 'Day 6', 'The Riverie by Katathani']],
    itinerary: [
      D(1, 'Arrival in Bangkok', 'D', ['Arrival and private transfer to your hotel', 'Evening street-food walk through Chinatown (Yaowarat)'], 'Bangkok'),
      D(2, 'Bangkok temples (private tour)', 'B, L', ['Grand Palace, Wat Pho and the Marble Temple', 'Longtail boat through the canals and a flower-market stop'], 'Bangkok'),
      D(3, 'Bangkok – Chiang Mai (flight)', 'B', ['Morning flight to Chiang Mai', 'Doi Suthep temple on the mountain above the city', 'Evening at the Sunday Walking Street market'], 'Chiang Mai'),
      D(4, 'Chiang Mai – ethical elephant sanctuary', 'B, L', ['Full day at an ethical elephant sanctuary: feed, walk and bathe rescued elephants', 'Karen hill-tribe village and hillside coffee tasting'], 'Chiang Mai'),
      D(5, 'Doi Inthanon National Park', 'B, L', ['Thailand’s highest peak and the twin royal pagodas', 'Wachirathan Waterfall and cool-air nature trails', 'Evening Thai cooking class (optional)'], 'Chiang Mai'),
      D(6, 'Chiang Mai – Chiang Rai', 'B, L', ['Drive north with a stop at the Maekhachan hot springs', 'The all-white Wat Rong Khun (White Temple) and the sapphire Blue Temple', 'Overnight by the Kok River'], 'Chiang Rai'),
      D(7, 'Chiang Rai – departure', 'B', ['Breakfast at the hotel', 'Transfer to Chiang Rai airport (or scenic Golden Triangle add-on)'], null)
    ],
    pricing: { currency: 'INR', basis: '4-star hotels, per person on double-sharing basis', rows: [['All months', 58999]] },
    price: 58999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Domestic flight Bangkok–Chiang Mai', 'Ethical elephant sanctuary visit'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.falls, IMG.elephant, IMG.wachi, IMG.palace], alt: 'Waterfall and lush forest in Doi Inthanon, northern Thailand'
  }
];
