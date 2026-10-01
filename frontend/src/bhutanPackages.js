// Bhutan packages – same structured data model as vietnamPackages.js.
// Adapters for the listing/detail templates live in tours/bhutanToursData.js.
const U = (base, w = 1080) => `${base}&w=${w}`;
const B = {
  tigersNest: 'https://images.unsplash.com/photo-1638246439638-b37095b34879?crop=entropy&cs=srgb&fm=jpg&q=85',
  dzong: 'https://images.unsplash.com/photo-1667232170246-034cf6daef4d?crop=entropy&cs=srgb&fm=jpg&q=85',
  peaks: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?crop=entropy&cs=srgb&fm=jpg&q=85',
  village: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?crop=entropy&cs=srgb&fm=jpg&q=85',
  prayerFlags: 'https://images.unsplash.com/photo-1571330177831-a12160efd5e7?crop=entropy&cs=srgb&fm=jpg&q=85',
  punakha: 'https://images.unsplash.com/photo-1580649851649-992b28f56e98?crop=entropy&cs=srgb&fm=jpg&q=85',
  bridge: 'https://images.unsplash.com/photo-1650747858910-5d48a4116296?crop=entropy&cs=srgb&fm=jpg&q=85',
  tigersNest2: 'https://images.unsplash.com/photo-1578556881786-851d4b79cb73?crop=entropy&cs=srgb&fm=jpg&q=85'
};
export const IMG = {
  tigersNest: U(B.tigersNest), dzong: U(B.dzong), peaks: U(B.peaks), village: U(B.village),
  prayerFlags: U(B.prayerFlags), punakha: U(B.punakha), bridge: U(B.bridge), tigersNest2: U(B.tigersNest2), RAW: B
};
const CITY_IMG = {
  Paro: [IMG.tigersNest, IMG.tigersNest2, IMG.peaks],
  Thimphu: [IMG.dzong, IMG.village],
  Punakha: [IMG.punakha, IMG.bridge],
  Bumthang: [IMG.prayerFlags, IMG.peaks]
};
export const cityImages = (c) => CITY_IMG[c] || [IMG.tigersNest];

const INCL_BASE = ['Meals as indicated in the itinerary (B = Breakfast, L = Lunch, D = Dinner)', 'Entrance fees to the attractions mentioned in the programme', 'Sightseeing and excursions mentioned in the itinerary', 'English-speaking local guide', 'Transportation used in the programme'];
const EXCL_BASE = ['Tips for guides and drivers', 'Personal expenses such as telephone, laundry, drinks, etc.', 'Meals not mentioned in the programme', 'Bank fees related to payment', 'Other services not clearly indicated under "Included"'];

const D = (day, title, meals, bullets, overnight) => ({ day, title, meals, bullets, overnight });

export const destination = { name: 'Bhutan', slug: 'bhutan', continent: 'Asia', image: IMG.tigersNest };

export const packages = [
  {
    slug: 'bhutan-tigers-nest-happy-valleys-6d5n', name: 'Bhutan: Tiger’s Nest & Happy Valleys', code: 'BT-1', days: 6, nights: 5, tag: 'Culture', styles: ['Honeymoon', 'Adventure'],
    summary: 'The essential Bhutan: the fortress-monasteries (dzongs) of Paro, Thimphu and Punakha, a Himalayan valley drive and the iconic hike to the Tiger’s Nest.',
    stays: [['Thimphu', 'Days 1–2', 'Taj Tashi Thimphu'], ['Punakha', 'Day 3', 'COMO Uma Punakha'], ['Paro', 'Days 4–5', 'Le Méridien Paro, Riverfront']],
    itinerary: [
      D(1, 'Arrival in Paro – Thimphu', 'D', ['Scenic Himalayan flight into Paro and transfer to the capital Thimphu', 'Visit the giant Buddha Dordenma statue overlooking the valley', 'Evening stroll through Thimphu’s only traffic-light town'], 'Thimphu'),
      D(2, 'Thimphu sightseeing', 'B, L', ['Tashichho Dzong, the National Memorial Chorten and the Folk Heritage Museum', 'Takin preserve (Bhutan’s national animal) and a traditional paper mill', 'Hand-painting and archery demonstration'], 'Thimphu'),
      D(3, 'Thimphu – Dochula Pass – Punakha', 'B, L, D', ['Cross the Dochula Pass (3,100 m) with its 108 chortens and Himalayan views', 'Walk through rice fields to the Chimi Lhakhang fertility temple', 'Visit the majestic Punakha Dzong at the river confluence'], 'Punakha'),
      D(4, 'Punakha – Paro & suspension bridge', 'B, L', ['Punakha suspension bridge draped in prayer flags', 'Drive back over the pass to the Paro valley', 'Visit Rinpung Dzong and the National Museum'], 'Paro'),
      D(5, 'Hike to the Tiger’s Nest (Taktsang)', 'B, L', ['Guided hike up to the cliff-side Tiger’s Nest monastery', 'Picnic lunch at the viewpoint cafeteria', 'Evening traditional hot-stone bath (optional)'], 'Paro'),
      D(6, 'Paro – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Paro airport for your onward flight'], null)
    ],
    pricing: { currency: 'INR', basis: '5-star hotels, per person on double-sharing basis', rows: [['All months', 89999]] },
    price: 89999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Bhutan Sustainable Development Fee', 'Bhutan visa processing'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.tigersNest, IMG.punakha, IMG.dzong, IMG.prayerFlags], alt: 'The Tiger’s Nest monastery clinging to a cliff above Paro, Bhutan'
  },
  {
    slug: 'grand-tour-of-bhutan-9d8n', name: 'Grand Tour of Bhutan', code: 'BT-2', days: 9, nights: 8, tag: 'Culture', styles: ['Honeymoon', 'Family'],
    summary: 'A deeper journey into the Last Shangri-La, adding the sacred Bumthang valleys to the classic Paro–Thimphu–Punakha circuit, with the Tiger’s Nest as a finale.',
    stays: [['Thimphu', 'Days 1–2', 'Taj Tashi Thimphu'], ['Punakha', 'Days 3–4', 'COMO Uma Punakha'], ['Bumthang', 'Days 5–6', 'Six Senses Bumthang'], ['Paro', 'Days 7–8', 'Le Méridien Paro, Riverfront']],
    itinerary: [
      D(1, 'Arrival in Paro – Thimphu', 'D', ['Himalayan flight into Paro and transfer to Thimphu', 'Buddha Dordenma statue and evening in town'], 'Thimphu'),
      D(2, 'Thimphu sightseeing', 'B, L', ['Tashichho Dzong, Memorial Chorten and the Folk Heritage Museum', 'Takin preserve and local markets'], 'Thimphu'),
      D(3, 'Thimphu – Dochula Pass – Punakha', 'B, L, D', ['Dochula Pass and the 108 chortens', 'Chimi Lhakhang walk and the Punakha Dzong'], 'Punakha'),
      D(4, 'Punakha valley', 'B, L', ['Punakha suspension bridge and a gentle valley hike', 'Afternoon rafting option on the Mo Chhu river'], 'Punakha'),
      D(5, 'Punakha – Bumthang (flight)', 'B, L, D', ['Domestic flight to the sacred Bumthang valleys', 'Visit Jakar Dzong and the Jambay Lhakhang temple'], 'Bumthang'),
      D(6, 'Bumthang – temples & villages', 'B, L, D', ['Kurjey Lhakhang and Tamshing monastery', 'Walk through buckwheat fields and a local cheese and honey farm'], 'Bumthang'),
      D(7, 'Bumthang – Paro', 'B, L', ['Flight back to the Paro valley', 'Visit Rinpung Dzong and the National Museum'], 'Paro'),
      D(8, 'Hike to the Tiger’s Nest (Taktsang)', 'B, L', ['Guided hike to the cliff-side Tiger’s Nest monastery', 'Evening hot-stone bath (optional)'], 'Paro'),
      D(9, 'Paro – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Paro airport'], null)
    ],
    pricing: { currency: 'INR', basis: 'Per person on double-sharing basis', rows: [['January–June', 134999, 158999], ['July–December', 139999, 164999]], columns: ['4-star', '5-star'] },
    price: 134999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Domestic flights within Bhutan', 'Bhutan Sustainable Development Fee', 'Bhutan visa processing'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.punakha, IMG.peaks, IMG.prayerFlags, IMG.tigersNest, IMG.village], alt: 'Punakha Dzong at the confluence of two rivers, Bhutan'
  },
  {
    slug: 'bhutan-honeymoon-escape-5d4n', name: 'Bhutan Honeymoon Escape', code: 'BT-3', days: 5, nights: 4, tag: 'Honeymoon', styles: ['Honeymoon'],
    summary: 'A romantic short escape to the Last Shangri-La: the Paro and Thimphu valleys, prayer-flag passes and the unforgettable hike to the Tiger’s Nest, for two.',
    stays: [['Thimphu', 'Days 1–2', 'Taj Tashi Thimphu'], ['Paro', 'Days 3–4', 'Le Méridien Paro, Riverfront']],
    itinerary: [
      D(1, 'Arrival in Paro – Thimphu', 'D', ['Himalayan flight into Paro and transfer to Thimphu', 'Buddha Dordenma statue at sunset', 'Romantic welcome dinner'], 'Thimphu'),
      D(2, 'Thimphu valley', 'B, L', ['Tashichho Dzong and the Memorial Chorten', 'Takin preserve and a couples’ hand-painting session', 'Evening traditional hot-stone bath'], 'Thimphu'),
      D(3, 'Thimphu – Paro via Dochula Pass', 'B, L', ['Cross the prayer-flag Dochula Pass with Himalayan views', 'Drive to the Paro valley; visit Rinpung Dzong', 'Riverside dinner for two'], 'Paro'),
      D(4, 'Hike to the Tiger’s Nest (Taktsang)', 'B, L, D', ['Guided hike to the iconic Tiger’s Nest monastery', 'Picnic lunch at the viewpoint', 'Farewell candlelit dinner'], 'Paro'),
      D(5, 'Paro – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Paro airport'], null)
    ],
    pricing: { currency: 'INR', basis: '5-star hotels, per person on double-sharing basis', rows: [['All months', 76999]] },
    price: 76999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Bhutan Sustainable Development Fee', 'Bhutan visa processing'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.tigersNest2, IMG.prayerFlags, IMG.punakha, IMG.peaks], alt: 'Prayer flags on a Himalayan pass in Bhutan'
  }
];
