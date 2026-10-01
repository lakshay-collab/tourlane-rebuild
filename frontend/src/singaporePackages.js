// Singapore packages – same structured data model as vietnamPackages.js (destination → packages[] → itinerary days[]).
// Adapters for the listing/detail templates live in tours/singaporeToursData.js.
const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p, w = 1080) => `${CT}/${p}?w=${w}&q=60&fm=webp`;
const un = (id, w = 1080) => `https://images.unsplash.com/${id}?crop=entropy&cs=srgb&fm=jpg&q=80&w=${w}`;

export const IMG = {
  skyline: ct('4B5tE96BHxRVFYUVJQibEE/efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg'),
  jalanBesar: ct('1S1CFngY8la37r0DqH3xb1/8052b7405ea5431391f2be4fba023227/Jalan_Besar_Singapore_2.jpg'),
  gardens: un('photo-1605425183435-25b7e99104a4'),
  supertreeNight: un('photo-1499359875449-10bbeb21501e'),
  supertreeBlue: un('photo-1508597370841-836e72ef6f54'),
  marinaAerial: un('photo-1525625293386-3f8f99389edd'),
  twilight: un('photo-1496939376851-89342e90adcd')
};
const CITY_IMG = {
  'Marina Bay': [IMG.skyline, IMG.marinaAerial, IMG.twilight],
  'Gardens by the Bay': [IMG.gardens, IMG.supertreeNight, IMG.supertreeBlue],
  Sentosa: [IMG.supertreeBlue, IMG.gardens, IMG.marinaAerial],
  Chinatown: [IMG.jalanBesar, IMG.twilight]
};
export const cityImages = (c) => CITY_IMG[c] || [IMG.skyline];

const INCL_BASE = ['Meals as indicated in the itinerary (B = Breakfast, L = Lunch, D = Dinner)', 'Entrance fees to the attractions mentioned in the programme', 'Sightseeing and excursions mentioned in the itinerary', 'English-speaking local guide', 'Transportation used in the programme'];
const EXCL_BASE = ['Tips for guides and drivers', 'Personal expenses such as telephone, laundry, drinks, etc.', 'Meals not mentioned in the programme', 'Bank fees related to payment', 'Other services not clearly indicated under "Included"'];

// day: [dayNo, title, meals, bullets[], overnight]
const D = (day, title, meals, bullets, overnight) => ({ day, title, meals, bullets, overnight });

export const destination = { name: 'Singapore', slug: 'singapore', continent: 'Asia', image: IMG.skyline };

export const packages = [
  {
    slug: 'singapore-city-break-4d3n', name: 'Singapore City Break', code: 'SG-1', days: 4, nights: 3, tag: 'City', styles: ['Honeymoon', 'Family'],
    summary: 'The essential Singapore in a few unforgettable days: Marina Bay Sands, Gardens by the Bay after dark, the heritage streets of Chinatown and hawker feasts at every turn.',
    stays: [['Marina Bay', 'Days 1–2', 'Marina Bay Sands (Deluxe room)'], ['Chinatown', 'Day 3', 'The Clan Hotel (Premier room)']],
    itinerary: [
      D(1, 'Arrival in Singapore', 'D', ['Arrival at Changi Airport and private transfer to Marina Bay', 'Evening stroll along the waterfront promenade', 'Dinner with a view of the Spectra light-and-water show'], 'Marina Bay'),
      D(2, 'Gardens by the Bay & Marina Bay (private tour)', 'B', ['Flower Dome and Cloud Forest conservatories at Gardens by the Bay', 'Supertree Grove and the OCBC Skyway walk', 'Merlion Park, the Esplanade and a Singapore River bumboat ride', 'Evening Garden Rhapsody light show among the Supertrees'], 'Marina Bay'),
      D(3, 'Cultural quarters – Chinatown, Little India & Kampong Glam', 'B, L', ['Sri Mariamman Temple and the Buddha Tooth Relic Temple in Chinatown', 'Little India and the colourful shophouses of Kampong Glam', 'Lunch at a famous hawker centre; afternoon at Orchard Road'], 'Chinatown'),
      D(4, 'Singapore – departure', 'B', ['Breakfast at the hotel', 'Optional visit to the Jewel Changi Rain Vortex before your flight', 'Private transfer to Changi Airport'], null)
    ],
    pricing: { currency: 'INR', basis: '5-star hotels, per person on double-sharing basis', rows: [['All months', 52999]] },
    price: 52999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Gardens by the Bay conservatory tickets'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.skyline, IMG.gardens, IMG.marinaAerial, IMG.jalanBesar], alt: 'Marina Bay Sands and the Singapore skyline at dusk'
  },
  {
    slug: 'singapore-with-kids-5d4n', name: 'Singapore with Kids', code: 'SG-2', days: 5, nights: 4, tag: 'Family', styles: ['Family'],
    summary: 'A family adventure built around Sentosa island, Universal Studios, the S.E.A. Aquarium and the magical night zoo – with Marina Bay’s gardens to round it off.',
    stays: [['Marina Bay', 'Days 1–2', 'PARKROYAL COLLECTION Marina Bay'], ['Sentosa', 'Days 3–4', 'Shangri-La Rasa Sentosa Resort']],
    itinerary: [
      D(1, 'Arrival in Singapore', 'D', ['Arrival at Changi and private transfer to Marina Bay', 'Evening at the Jewel Changi Rain Vortex and gardens', 'Family welcome dinner'], 'Marina Bay'),
      D(2, 'Gardens by the Bay & Singapore Flyer', 'B', ['Cloud Forest waterfall and the Supertree Grove', 'Ride the Singapore Flyer observation wheel', 'Evening ArtScience Museum or a riverside dinner'], 'Marina Bay'),
      D(3, 'Marina Bay – Sentosa island', 'B', ['Transfer to Sentosa by cable car', 'Universal Studios Singapore for the day', 'Beach time and the Wings of Time night show'], 'Sentosa'),
      D(4, 'Sentosa – S.E.A. Aquarium & Night Safari', 'B, D', ['Morning at the S.E.A. Aquarium and Adventure Cove', 'Afternoon at leisure on the island beaches', 'Evening tram ride through the world-famous Night Safari'], 'Sentosa'),
      D(5, 'Singapore – departure', 'B', ['Breakfast at the resort', 'Private transfer to Changi Airport'], null)
    ],
    pricing: { currency: 'INR', basis: 'Per person on double-sharing basis', rows: [['January–June', 58999, 69999], ['July–December', 61999, 73999]], columns: ['4-star', '5-star'] },
    price: 58999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Universal Studios and S.E.A. Aquarium tickets', 'Night Safari entry'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.supertreeBlue, IMG.gardens, IMG.marinaAerial, IMG.skyline], alt: 'Illuminated Supertrees at Gardens by the Bay, Singapore'
  },
  {
    slug: 'singapore-stopover-3d2n', name: 'Singapore Stopover', code: 'SG-3', days: 3, nights: 2, tag: 'Short trips', styles: ['Honeymoon'],
    summary: 'A perfect short stopover: the highlights of Marina Bay, a Gardens by the Bay evening and a taste of Singapore’s legendary food scene in just two nights.',
    stays: [['Marina Bay', 'Days 1–2', 'The Fullerton Bay Hotel (Bayview room)']],
    itinerary: [
      D(1, 'Arrival in Singapore', 'D', ['Arrival at Changi Airport and private transfer to Marina Bay', 'Evening Spectra light show and waterfront dinner'], 'Marina Bay'),
      D(2, 'Singapore highlights (private half-day tour)', 'B', ['Merlion Park, the Esplanade and a Singapore River cruise', 'Gardens by the Bay conservatories and Supertree Grove', 'Afternoon free for shopping or a Singapore Sling at Raffles'], 'Marina Bay'),
      D(3, 'Singapore – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Changi Airport for your onward flight'], null)
    ],
    pricing: { currency: 'INR', basis: '5-star hotels, per person on double-sharing basis', rows: [['All months', 34999]] },
    price: 34999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'Gardens by the Bay conservatory tickets'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.twilight, IMG.skyline, IMG.marinaAerial, IMG.gardens], alt: 'Singapore skyline reflected in Marina Bay at twilight'
  }
];
