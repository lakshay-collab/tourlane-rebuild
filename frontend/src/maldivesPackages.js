// Maldives packages – same structured data model as bhutanPackages.js.
// Adapters for the listing/detail templates live in tours/maldivesToursData.js.
const U = (base, w = 1080) => `${base}&w=${w}`;
const B = {
  overwater: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?crop=entropy&cs=srgb&fm=jpg&q=85',
  island: 'https://images.unsplash.com/photo-1574226780565-388f10f8121e?crop=entropy&cs=srgb&fm=jpg&q=85',
  lagoon: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?crop=entropy&cs=srgb&fm=jpg&q=85',
  beach: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?crop=entropy&cs=srgb&fm=jpg&q=85',
  villa: 'https://images.unsplash.com/photo-1777199663418-3dd126c9fd40?crop=entropy&cs=srgb&fm=jpg&q=85'
};
export const IMG = {
  overwater: U(B.overwater), island: U(B.island), lagoon: U(B.lagoon), beach: U(B.beach),
  villa: U(B.villa), seaplane: U(B.beach), reef: U(B.lagoon), sunset: U(B.overwater), RAW: B
};
const CITY_IMG = {
  'Malé': [IMG.island, IMG.villa],
  'North Malé Atoll': [IMG.overwater, IMG.lagoon],
  'Baa Atoll': [IMG.reef, IMG.beach],
  'Ari Atoll': [IMG.villa, IMG.seaplane]
};
export const cityImages = (c) => CITY_IMG[c] || [IMG.overwater];

const INCL_BASE = ['Meals as indicated in the itinerary (B = Breakfast, L = Lunch, D = Dinner)', 'Entrance fees to the attractions mentioned in the programme', 'Sightseeing and excursions mentioned in the itinerary', 'English-speaking local guide', 'Transportation used in the programme'];
const EXCL_BASE = ['Tips for guides and drivers', 'Personal expenses such as telephone, laundry, drinks, etc.', 'Meals not mentioned in the programme', 'Bank fees related to payment', 'Other services not clearly indicated under "Included"'];

const D = (day, title, meals, bullets, overnight) => ({ day, title, meals, bullets, overnight });

export const destination = { name: 'Maldives', slug: 'maldives', continent: 'Asia', image: IMG.overwater };

export const packages = [
  {
    slug: 'maldives-overwater-honeymoon-5d4n', name: 'Maldives: Overwater Honeymoon Escape', code: 'MV-1', days: 5, nights: 4, tag: 'Honeymoon', styles: ['Honeymoon', 'Beach'],
    summary: 'Four romantic nights in an overwater villa on a private island, with a seaplane transfer, candlelit dinners and endless turquoise lagoon views.',
    stays: [['North Malé Atoll', 'Days 1–4', 'Overwater Villa, 5-star island resort']],
    itinerary: [
      D(1, 'Arrival in Malé – seaplane to the resort', 'D', ['Arrive at Velana International Airport and meet your host', 'Scenic seaplane transfer over the atolls to your island resort', 'Check in to your overwater villa and romantic welcome dinner'], 'North Malé Atoll'),
      D(2, 'Lagoon & reef day', 'B, D', ['Snorkel the house reef straight from your villa deck', 'Afternoon couples’ spa treatment overlooking the water', 'Sunset dolphin-spotting cruise'], 'North Malé Atoll'),
      D(3, 'Island & ocean', 'B, D', ['Private sandbank picnic with champagne', 'Optional sunset fishing or jet-ski excursion', 'Beachfront dinner under the stars'], 'North Malé Atoll'),
      D(4, 'Leisure at the resort', 'B, D', ['A free day to relax by the lagoon', 'Optional underwater restaurant experience', 'Farewell dinner on the beach'], 'North Malé Atoll'),
      D(5, 'Departure', 'B', ['Breakfast at the villa', 'Seaplane transfer back to Malé for your onward flight'], null)
    ],
    pricing: { currency: 'INR', basis: '5-star overwater villa, per person on double-sharing basis', rows: [['All months', 119999]] },
    price: 119999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per villa', 'Return seaplane / speedboat transfers', 'Daily breakfast and dinner'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.overwater, IMG.lagoon, IMG.villa, IMG.beach], alt: 'Overwater villas over a turquoise lagoon in the Maldives'
  },
  {
    slug: 'maldives-island-hopping-7d6n', name: 'Maldives Island Hopping & Reefs', code: 'MV-2', days: 7, nights: 6, tag: 'Beach', styles: ['Beach', 'Adventure', 'Family'],
    summary: 'Discover the many faces of the Maldives across two atolls – beach villas, world-class snorkelling with manta rays, local island culture and a sandbank picnic.',
    stays: [['North Malé Atoll', 'Days 1–3', 'Beach Villa, 4-star resort'], ['Baa Atoll', 'Days 4–6', 'Beach Villa, UNESCO Biosphere resort']],
    itinerary: [
      D(1, 'Arrival in Malé', 'D', ['Arrive at Velana International Airport', 'Speedboat transfer to your North Malé Atoll resort', 'Sunset welcome by the lagoon'], 'North Malé Atoll'),
      D(2, 'Reefs & lagoon', 'B, L, D', ['Guided snorkelling safari on nearby reefs', 'Afternoon kayaking and paddleboarding', 'Beach barbecue dinner'], 'North Malé Atoll'),
      D(3, 'Local island & sandbank', 'B, D', ['Visit a local island to experience Maldivian culture', 'Private sandbank picnic with snorkelling', 'Return to the resort for dinner'], 'North Malé Atoll'),
      D(4, 'Transfer to Baa Atoll', 'B, D', ['Seaplane transfer to the Baa Atoll UNESCO Biosphere Reserve', 'Check in to your beach villa', 'Evening reef walk at low tide'], 'Baa Atoll'),
      D(5, 'Hanifaru Bay & manta rays', 'B, L, D', ['Snorkelling excursion to Hanifaru Bay (seasonal manta rays and whale sharks)', 'Afternoon at leisure on the beach', 'Sunset cruise'], 'Baa Atoll'),
      D(6, 'Leisure in Baa Atoll', 'B, D', ['Free day to relax, swim and snorkel the house reef', 'Optional spa session', 'Farewell dinner on the sand'], 'Baa Atoll'),
      D(7, 'Departure', 'B', ['Breakfast at the resort', 'Seaplane and transfer back to Malé for departure'], null)
    ],
    pricing: { currency: 'INR', basis: 'Per person on double-sharing basis', rows: [['January–June', 134999, 169999], ['July–December', 139999, 174999]], columns: ['4-star', '5-star'] },
    price: 134999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per villa', 'Inter-atoll seaplane / speedboat transfers', 'Daily breakfast and dinner'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.island, IMG.reef, IMG.lagoon, IMG.beach, IMG.overwater], alt: 'Aerial view of a Maldivian island resort and turquoise reefs'
  },
  {
    slug: 'maldives-luxury-getaway-4d3n', name: 'Maldives Luxury Getaway', code: 'MV-3', days: 4, nights: 3, tag: 'Luxury', styles: ['Honeymoon', 'Beach'],
    summary: 'A short, indulgent escape to a five-star island – an overwater villa, a sunset cruise and a private sandbank dinner, perfect for a quick romantic break.',
    stays: [['Ari Atoll', 'Days 1–3', 'Overwater Suite, luxury resort']],
    itinerary: [
      D(1, 'Arrival & seaplane transfer', 'D', ['Arrive in Malé and board your scenic seaplane to Ari Atoll', 'Check in to your overwater suite with a private deck', 'Champagne welcome and dinner'], 'Ari Atoll'),
      D(2, 'Ocean day', 'B, D', ['Morning snorkelling with resident reef sharks and turtles', 'Afternoon couples’ spa ritual', 'Private sandbank sunset dinner'], 'Ari Atoll'),
      D(3, 'Leisure & sunset cruise', 'B, D', ['A relaxed day by the infinity pool and lagoon', 'Sunset dolphin cruise with sparkling wine', 'Farewell dinner under the stars'], 'Ari Atoll'),
      D(4, 'Departure', 'B', ['Breakfast at the resort', 'Seaplane transfer back to Malé for your onward flight'], null)
    ],
    pricing: { currency: 'INR', basis: '5-star overwater suite, per person on double-sharing basis', rows: [['All months', 99999]] },
    price: 99999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per suite', 'Return seaplane transfers', 'Daily breakfast and dinner'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.villa, IMG.overwater, IMG.beach, IMG.lagoon], alt: 'A luxury overwater suite with a private deck in the Maldives'
  }
];
