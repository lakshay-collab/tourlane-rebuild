// Kazakhstan packages – same structured data model as vietnamPackages.js.
// Adapters for the listing/detail templates live in tours/kazakhstanToursData.js.
const U = (base, w = 1080) => `${base}&w=${w}`;
const B = {
  mountains1: 'https://images.unsplash.com/photo-1530480667809-b655d4dc3aaa?crop=entropy&cs=srgb&fm=jpg&q=85',
  mountains2: 'https://images.unsplash.com/photo-1727527667362-87ed862d6c87?crop=entropy&cs=srgb&fm=jpg&q=85',
  mountains3: 'https://images.unsplash.com/photo-1727527667388-b520a5307a0c?crop=entropy&cs=srgb&fm=jpg&q=85',
  canyon: 'https://images.unsplash.com/photo-1754111801632-5af388b7c877?crop=entropy&cs=srgb&fm=jpg&q=85',
  almaty1: 'https://images.unsplash.com/photo-1715534968341-c3dd089f1821?crop=entropy&cs=srgb&fm=jpg&q=85',
  almaty2: 'https://images.unsplash.com/photo-1698420458208-35f6d9adc6f3?crop=entropy&cs=srgb&fm=jpg&q=85',
  steppe1: 'https://images.unsplash.com/photo-1562595706-61433957484a?crop=entropy&cs=srgb&fm=jpg&q=85',
  steppe2: 'https://images.unsplash.com/photo-1705300307605-66fe7c0a268f?crop=entropy&cs=srgb&fm=jpg&q=85'
};
export const IMG = {
  mountains: U(B.mountains1), peaks: U(B.mountains2), ridge: U(B.mountains3), canyon: U(B.canyon),
  almaty: U(B.almaty1), city: U(B.almaty2), steppe: U(B.steppe1), astana: U(B.steppe2), RAW: B
};
const CITY_IMG = {
  Almaty: [IMG.almaty, IMG.city, IMG.mountains],
  Astana: [IMG.astana, IMG.steppe],
  'Charyn Canyon': [IMG.canyon],
  'Kolsai Lakes': [IMG.peaks, IMG.ridge],
  Saty: [IMG.ridge, IMG.peaks]
};
export const cityImages = (c) => CITY_IMG[c] || [IMG.mountains];

const INCL_BASE = ['Meals as indicated in the itinerary (B = Breakfast, L = Lunch, D = Dinner)', 'Entrance fees to the attractions mentioned in the programme', 'Sightseeing and excursions mentioned in the itinerary', 'English-speaking local guide', 'Transportation used in the programme'];
const EXCL_BASE = ['Tips for guides and drivers', 'Personal expenses such as telephone, laundry, drinks, etc.', 'Meals not mentioned in the programme', 'Bank fees related to payment', 'Other services not clearly indicated under "Included"'];

const D = (day, title, meals, bullets, overnight) => ({ day, title, meals, bullets, overnight });

export const destination = { name: 'Kazakhstan', slug: 'kazakhstan', continent: 'Asia', image: IMG.mountains };

export const packages = [
  {
    slug: 'almaty-mountains-kazakhstan-6d5n', name: 'Almaty & the Mountains of Kazakhstan', code: 'KZ-1', days: 6, nights: 5, tag: 'Nature', styles: ['Family', 'Adventure'],
    summary: 'Base yourself in leafy Almaty and head into the Tian Shan mountains: turquoise Big Almaty Lake, the dramatic Charyn Canyon and the alpine Kolsai Lakes.',
    stays: [['Almaty', 'Days 1–5', 'The Ritz-Carlton Almaty (Deluxe room)']],
    itinerary: [
      D(1, 'Arrival in Almaty', 'D', ['Arrival and private transfer to your hotel', 'Evening stroll through Panfilov Park and the Zenkov Cathedral', 'Welcome dinner of Kazakh specialities'], 'Almaty'),
      D(2, 'Almaty city & Medeu / Shymbulak', 'B, L', ['City tour: Republic Square, Green Bazaar and the Central Mosque', 'Cable car up to Medeu ice rink and Shymbulak mountain resort', 'Panoramic views over the Tian Shan'], 'Almaty'),
      D(3, 'Big Almaty Lake & the Tian Shan', 'B, L', ['Drive up to the turquoise Big Almaty Lake at 2,500 m', 'Mountain walk and photography amid alpine scenery', 'Return to Almaty; evening free'], 'Almaty'),
      D(4, 'Charyn Canyon day trip', 'B, L', ['Full-day excursion to the Charyn Canyon, the "Grand Canyon of Central Asia"', 'Walk through the Valley of Castles to the Charyn River', 'Picnic lunch among the red rock formations'], 'Almaty'),
      D(5, 'Kolsai & Kaindy Lakes', 'B, L', ['Day trip to the first Kolsai Lake and the sunken forest of Lake Kaindy', 'Gentle hike and boat option on the lakes', 'Evening at leisure in Almaty'], 'Almaty'),
      D(6, 'Almaty – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Almaty airport'], null)
    ],
    pricing: { currency: 'INR', basis: '5-star hotels, per person on double-sharing basis', rows: [['All months', 72999]] },
    price: 72999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', '4x4 vehicle for mountain excursions'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.mountains, IMG.canyon, IMG.almaty, IMG.peaks], alt: 'Snow-capped Tian Shan mountains above Almaty, Kazakhstan'
  },
  {
    slug: 'highlights-kazakhstan-almaty-astana-9d8n', name: 'Highlights of Kazakhstan: Almaty & Astana', code: 'KZ-2', days: 9, nights: 8, tag: 'Culture', styles: ['Family', 'Adventure', 'Honeymoon'],
    summary: 'The two faces of Kazakhstan: the mountains and old-world charm of Almaty and the futuristic architecture of the capital Astana, linked by the vast steppe.',
    stays: [['Almaty', 'Days 1–5', 'The Ritz-Carlton Almaty'], ['Astana', 'Days 6–8', 'The St. Regis Astana']],
    itinerary: [
      D(1, 'Arrival in Almaty', '', ['Arrival and private transfer to your hotel', 'Evening at leisure in the city centre'], 'Almaty'),
      D(2, 'Almaty city tour', 'B, L', ['Republic Square, Green Bazaar, Zenkov Cathedral and Panfilov Park', 'Cable car to Kok Tobe hill for sweeping city views'], 'Almaty'),
      D(3, 'Big Almaty Lake & Shymbulak', 'B, L', ['Drive to Big Almaty Lake in the Tian Shan', 'Afternoon at Medeu and Shymbulak mountain resort'], 'Almaty'),
      D(4, 'Charyn Canyon', 'B, L', ['Full-day excursion to the Charyn Canyon and the Valley of Castles', 'River walk and picnic lunch'], 'Almaty'),
      D(5, 'Kolsai Lakes', 'B, L', ['Day trip to the Kolsai and Kaindy lakes', 'Gentle alpine hike'], 'Almaty'),
      D(6, 'Almaty – Astana (flight)', 'B', ['Morning flight across the steppe to the capital Astana', 'Afternoon tour of the left bank: Bayterek Tower and Nur-Alem sphere'], 'Astana'),
      D(7, 'Astana city tour', 'B, L', ['Khan Shatyr entertainment tent and the Palace of Peace pyramid', 'Hazret Sultan Mosque and the Ak Orda presidential area', 'Evening light show along the Nurzhol Boulevard'], 'Astana'),
      D(8, 'Astana at leisure / ALZHIR & steppe', 'B', ['Optional excursion onto the steppe and the ALZHIR memorial', 'Afternoon free for museums or shopping'], 'Astana'),
      D(9, 'Astana – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Astana airport'], null)
    ],
    pricing: { currency: 'INR', basis: 'Per person on double-sharing basis', rows: [['January–June', 98999, 114999], ['July–December', 101999, 118999]], columns: ['4-star', '5-star'] },
    price: 98999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Domestic flight Almaty–Astana', '4x4 vehicle for mountain excursions'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.almaty, IMG.astana, IMG.canyon, IMG.steppe, IMG.mountains], alt: 'Futuristic skyline of Astana, the capital of Kazakhstan'
  },
  {
    slug: 'kazakhstan-nature-lakes-7d6n', name: 'Kazakhstan Nature & Lakes', code: 'KZ-3', days: 7, nights: 6, tag: 'Nature', styles: ['Adventure', 'Honeymoon'],
    summary: 'A nature-lover’s journey through the Tian Shan: Charyn Canyon, the sunken forest of Lake Kaindy and nights beside the emerald Kolsai Lakes.',
    stays: [['Almaty', 'Days 1–2', 'The Ritz-Carlton Almaty'], ['Saty', 'Days 3–5', 'Kolsai Lakes eco-lodge'], ['Almaty', 'Day 6', 'The Ritz-Carlton Almaty']],
    itinerary: [
      D(1, 'Arrival in Almaty', 'D', ['Arrival and private transfer to your hotel', 'Welcome dinner in the city'], 'Almaty'),
      D(2, 'Almaty & Big Almaty Lake', 'B, L', ['City highlights and the Green Bazaar', 'Afternoon drive to the turquoise Big Almaty Lake'], 'Almaty'),
      D(3, 'Almaty – Charyn Canyon – Saty', 'B, L, D', ['Scenic drive to the Charyn Canyon and the Valley of Castles', 'Continue to the mountain village of Saty near the Kolsai Lakes'], 'Saty'),
      D(4, 'Kolsai Lakes trek', 'B, L, D', ['Hike from the first to the second Kolsai Lake through pine forest', 'Horse-riding option and time by the water'], 'Saty'),
      D(5, 'Lake Kaindy & local life', 'B, L, D', ['Excursion to the sunken forest of Lake Kaindy', 'Visit a local family and learn about nomadic traditions'], 'Saty'),
      D(6, 'Saty – Almaty', 'B', ['Return drive to Almaty across the foothills', 'Evening free for shopping or a farewell dinner'], 'Almaty'),
      D(7, 'Almaty – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Almaty airport'], null)
    ],
    pricing: { currency: 'INR', basis: '4- to 5-star / eco-lodge, per person on double-sharing basis', rows: [['All months', 84999]] },
    price: 84999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', '4x4 vehicle throughout', 'Kolsai Lakes national-park permits'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.peaks, IMG.ridge, IMG.canyon, IMG.mountains], alt: 'Emerald Kolsai Lake surrounded by pine forest, Kazakhstan'
  }
];
