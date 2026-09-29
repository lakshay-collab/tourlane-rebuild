// Six Vietnam itineraries for the shared EgyptDetail template. Built from the Vietnam listing products.
import { products } from '../vietnamListingData';

const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p, w = 1080) => `${CT}/${p}?w=${w}&q=60&fm=webp`;
const I = {
  halong: ct('3Z7A5HXNMctqsB6GE2jphI/4cef5ccca7d896a0b4f88281499fec30/Halong_Bucht_Vietnam.jpg'),
  hanoi: ct('3qsQDApUiMDejmmNxXcr0g/3bd51ca9fa429966c8ba194946b30cb1/Pagode_Hanoi.png'),
  hanoiTrain: ct('3Lgk982isenWqjktA4ww3l/e54fc888a3706981eb5c144ff2e0dd4e/Zugstrasse_Hanoi.png'),
  mausoleum: ct('6Prkix7tuaFidcMZzbx6eR/3d94f728ec92dee48e409c737420ee24/Vietnam__Hanoi__Ho-Chi-Minh-Mausoleum.jpg'),
  hue: ct('JDASnNCaoB20TSwhQc4iE/420a9d60e73d9bcb592723cdc22f4abf/Vietnam__Th%E1%BB%ABa_Thi%C3%AAn_Hu%E1%BA%BF__Hu%E1%BA%BF__Kaiserstadt.jpg'),
  hueAbove: ct('62B2Sk2PBjhW4UqGOAwCFy/7b0ac59dc466f20c779fc174bffd330e/Vietnam__Hue.jpg'),
  hoian: ct('4oRJ8JDJy6fZfVRUgAtjgy/a6e0956ec4af80390b64a389a0c3acf1/Vietnam__Qu%E1%BA%A3ng_Nam__H%E1%BB%99i_An..jpg'),
  hoianBoats: ct('2ec5zYEqTuCtsvZTUafUQs/b91bb18a48cf35494e3944635bf2e44a/Vietna_HoiAn_Boote.jpg'),
  hoianRiver: ct('1oona4EHxFNonfYfpgKQRu/fd45a84873954f50c0192a904b5c13db/Hoi_An_Vietnam_2.jpg'),
  danang: ct('1M6fmNzrSPt0exyQZ26Bzk/b4eea1905a7bd527f4c6a494b1b1b700/Vietnam_Da_Nang_Mamorberge_TCG.png'),
  hcmc: ct('4Ihuoev7y3ozkoyBtvaWe4/1839744b36bfb9e1d4bd8759bcfc28c6/Ho-Chi-Minh.jpg'),
  mekong: ct('6ERhQvEhzuwJMGgmSik6Zd/cf6947d9b1583c5f19e14ecbdd312e52/Mekong_Delta_Vietnam_2.jpg'),
  sapa: ct('5ujKcctP43Y7HHOFAKvWIU/4e29a70d5c0657d946762c42bd2f1eb5/Sapa_Vietname.jpg'),
  phuquoc: ct('1Tm427NrLOOFiGLG2qNwBX/b525194ba3f361bacdd2938831843a3a/Phu_Quoc_Vietnam.jpg'),
  catba: ct('pYi413E9aILuSFpglpms3/70ee69157ab6f08060ff814a66a659c6/Lan-Ha-Bay_Cat-Ba_Vietnam.png'),
  dalat: ct('5ZFR2I910b5mMsVDOKqm89/9b54b8d3b8b77e9a5de0064bbf3d630a/Vietnam_Dalat_Bergstadt_TCG.png'),
  bayon: ct('4keSsuacghypAJkpQ5NNXQ/21d76fdf15777b7b69a23eca59340cb7/Tempel-von-Bayon_Angkor_Kambodscha.png'),
  angkor: ct('3cz9ZdWGSaLYlWHCHaeIf8/041206670b85f0d72d0c4d706b270df9/Kambodscha__Siem_Reap__Angkor_Wat.jpg'),
  angkor2: ct('4R1jjp7eZvm10f2Pgx3kmF/a62d5738a208642c6c984b84f9fb9d72/Kambodscha__Siem_Reap__Angkor_Wat__2_.jpg'),
  battambang: ct('7bbMD4iPanI1rE91pLSdqm/547e1b9cf11e715878d98171b392b20e/Kambodscha__Battambang__Wat_Ek_Phnom.jpg'),
  food: ct('4UHMlSky2OCC9u26L6NUil/80071dd6f3584a8b64ae1ac97ef76961/Vietnam__Essen.jpg'),
  snorkel: ct('5C7uDv9EfHPEvtzUcEz9GY/c99389efe54168881fde2f1a43516c58/Vietnam__Schnorcheln__Familie.jpg')
};

const EXPERT = { name: 'Riya', image: '/experts/riya.webp', role: 'Vietnam expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' };
const LETTERS = 'ABCDEFGHIJ';

// stop: [name, dayLabel, bullets[], images[], hotel, hotelDesc]
const stop = ([name, dayLabel, bullets, images, hotel, hotelDesc], i) => ({
  letter: LETTERS[i], name, dayLabel, bullets, images,
  activities: bullets.slice(0, 3).map((b, k) => ({ name: b, description: `${b} – included in your ${name} stay.`, optional: k === 2, image: images[k % images.length] })),
  accommodation: { name: hotel, description: hotelDesc, images: images.slice(0, 3) }
});

const build = (p, { cities, stops, quote, quoteMore, short, intro, intro2, outro, meals }) => {
  const s = p.stats || { days: p.days, cities: p.cities, hotels: p.hotels, activities: p.activities, transfers: p.transfers };
  const route = { stops: stops.map(stop) };
  return {
    detail: {
      slug: p.slug, region: 'asia', ctaHref: '/l/vietnam/enquiry/passengers/', cta: 'Start customising',
      sub: 'Your travel plan – no obligation & tailor-made',
      banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
      title: p.title, alt: p.alt, days: `${p.days} days`, stations: `${p.cities} stops`, transport: 'Flights, transfers & guided tours',
      tag: p.tag, price: p.price, routeLabel: 'This holiday takes you to', routeCities: cities, tags: [p.tag, 'Culture'],
      stats: s, gallery: p.images,
      services: [[`${p.hotels} hotels`, 'Accommodation'], [`${p.activities} activities`, 'Activities'], [`${p.transfers} transfers`, 'Transport'], [`${meals} meals`, 'Meals'], ['24/7 support', '24/7 Support'], ['Customisation', 'Customise', 'Expert customisation']],
      expert: { ...EXPERT, quote, quoteMore }
    },
    route,
    glance: {
      h2: 'Tour summary', short, readMore: 'Read more', readLess: 'Read less', hide: 'Hide tour summary', intro, intro2,
      accommodationHeading: 'Accommodation', highlightsHeading: 'Key highlights', dayHeading: 'Day', routeHeading: 'Route',
      days: stops.map(([name, dayLabel, bullets, , hotel]) => ({ title: `${dayLabel}: ${name}`, text: bullets[0] + '.', hotel, highlights: bullets.slice(0, 3) })),
      outro
    },
    crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: 'Vietnam', href: '/asien/vietnam' }, { label: p.title }]
  };
};

const P = Object.fromEntries(products.map((p) => [p.slug, p]));

export const vietnamTours = [
  build(P['vietnam-2-weeks'], {
    cities: ['Hanoi', 'Ha Long Bay', 'Hue', 'Hoi An', 'Ho Chi Minh City', 'Mekong Delta'], meals: 13,
    stops: [
      ['Hanoi', 'Days 1–3', ['Old Quarter walking tour and Hoan Kiem Lake', 'Temple of Literature and Ho Chi Minh Mausoleum', 'Street-food evening with a local guide', 'Water-puppet theatre'], [I.hanoi, I.hanoiTrain, I.mausoleum], 'La Siesta Classic Ma May (4★)', '3 nights · breakfast'],
      ['Ha Long Bay', 'Days 4–5', ['Overnight cruise between the limestone karsts', 'Kayaking in Lan Ha Bay', 'Sunrise tai chi on deck', 'Cooking demonstration on board'], [I.halong, I.catba], 'Heritage Line Ylang (5★ junk)', '1 night · full board'],
      ['Hue', 'Days 6–7', ['The Imperial Citadel and Forbidden Purple City', 'Dragon-boat ride on the Perfume River', 'Thien Mu Pagoda and royal tombs'], [I.hue, I.hueAbove], 'Pilgrimage Village Boutique Resort (4★)', '2 nights · breakfast'],
      ['Hoi An', 'Days 8–10', ['Lantern-lit old town at dusk', 'Countryside cycling to Tra Que herb village', 'Cooking class with a local family', 'Beach afternoon at An Bang'], [I.hoian, I.hoianRiver, I.hoianBoats], 'Allegro Hoi An (4★)', '3 nights · breakfast'],
      ['Ho Chi Minh City', 'Days 11–12', ['War Remnants Museum and Reunification Palace', 'Cu Chi Tunnels half-day tour', 'Rooftop sunset over the Saigon River'], [I.hcmc, I.food], 'Hotel des Arts Saigon (5★)', '2 nights · breakfast'],
      ['Mekong Delta', 'Days 13–14', ['Sampan ride through the coconut canals of Ben Tre', 'Cai Rang floating market at dawn', 'Farewell lunch in a delta homestead'], [I.mekong, I.food], 'Victoria Can Tho Resort (4★)', '1 night · breakfast']
    ],
    quote: 'Two weeks is the sweet spot for a first Vietnam trip – enough to feel the difference between the misty north and the tropical south without rushing.',
    quoteMore: 'My tip: take the overnight cruise in Ha Long rather than a day trip, and give Hoi An three nights so you have one lazy day for the beach and a bicycle.',
    short: 'Fourteen days from Hanoi to the Mekong Delta: Ha Long Bay by overnight junk, imperial Hue, lantern-lit Hoi An and the energy of Ho Chi Minh City.',
    intro: 'The classic north-to-south route, hand-picked hotels and private guides throughout.',
    intro2: 'Domestic flights link Hanoi, Hue/Da Nang and Ho Chi Minh City so no day is lost to long drives.',
    outro: 'A complete first taste of Vietnam that can be extended with beach days on Phu Quoc.'
  }),
  build(P['vietnam-cambodia-14-days'], {
    cities: ['Hanoi', 'Ha Long Bay', 'Hoi An', 'Siem Reap', 'Battambang'], meals: 12,
    stops: [
      ['Hanoi', 'Days 1–3', ['Old Quarter and Hoan Kiem Lake by cyclo', 'Ho Chi Minh Mausoleum and One Pillar Pagoda', 'Evening street-food tour'], [I.hanoi, I.mausoleum, I.hanoiTrain], 'La Siesta Premium Hang Be (4★)', '3 nights · breakfast'],
      ['Ha Long Bay', 'Days 4–5', ['Overnight cruise among the karsts', 'Kayaking and cave visit', 'Squid fishing at night'], [I.halong, I.catba], 'Indochine Cruise (5★ junk)', '1 night · full board'],
      ['Hoi An', 'Days 6–8', ['Ancient town and Japanese Covered Bridge', 'Marble Mountains near Da Nang', 'Lantern-making workshop', 'Free beach day'], [I.hoian, I.danang, I.hoianRiver], 'Little Riverside Hoi An (4★)', '3 nights · breakfast'],
      ['Siem Reap', 'Days 9–12', ['Sunrise at Angkor Wat', 'Bayon and the faces of Angkor Thom', 'Ta Prohm jungle temple', 'Tonle Sap floating village'], [I.angkor, I.bayon, I.angkor2], 'Shinta Mani Angkor (5★)', '4 nights · breakfast'],
      ['Battambang', 'Days 13–14', ['Bamboo train and countryside villages', 'Wat Ek Phnom and the bat caves at sunset', 'Farewell Khmer dinner'], [I.battambang, I.angkor2], 'Maisons Wat Kor (4★)', '1 night · breakfast']
    ],
    quote: 'Vietnam and Cambodia belong together – the karsts of Ha Long and the temples of Angkor are two of Asia’s great sights and only a short flight apart.',
    quoteMore: 'My tip: four nights in Siem Reap lets you see Angkor at sunrise and sunset and still have a slow day at the pool.',
    short: 'Fourteen days combining Hanoi, Ha Long Bay and Hoi An with Angkor Wat, the Bayon and rural Battambang.',
    intro: 'A two-country itinerary with private guides on both sides of the border.',
    intro2: 'You fly Da Nang → Siem Reap, so the crossing is effortless.',
    outro: 'Southeast Asia’s two greatest highlights in one relaxed fortnight.'
  }),
  build(P['vietnam-with-kids'], {
    cities: ['Hanoi', 'Hoi An', 'Phu Quoc'], meals: 11,
    stops: [
      ['Hanoi', 'Days 1–4', ['Water-puppet show and cyclo ride', 'Day trip to Ninh Binh with a rowing-boat ride', 'Egg-coffee tasting in the Old Quarter', 'Ho Chi Minh Mausoleum'], [I.hanoi, I.mausoleum, I.hanoiTrain], 'Hanoi La Siesta Hotel & Spa (4★, family rooms)', '4 nights · breakfast'],
      ['Hoi An', 'Days 5–8', ['Lantern-making workshop for kids', 'Basket-boat ride in the coconut forest', 'Family cooking class', 'An Bang beach afternoons'], [I.hoianBoats, I.hoianRiver, I.hoian], 'Victoria Hoi An Beach Resort (4★)', '4 nights · breakfast'],
      ['Phu Quoc', 'Days 9–12', ['Snorkelling off the An Thoi islands', 'Cable car to Hon Thom', 'Night market seafood dinner', 'Pool and beach days'], [I.phuquoc, I.snorkel], 'Salinda Resort Phu Quoc (5★)', '3 nights · breakfast']
    ],
    quote: 'Vietnam is one of the easiest countries in Asia to travel with children – short flights, gentle beaches and locals who adore kids.',
    quoteMore: 'My tip: keep the pace slow – three or four nights per stop – and end on Phu Quoc so everyone flies home rested.',
    short: 'Twelve family-friendly days: Hanoi and Ninh Binh, lanterns and beaches in Hoi An, then snorkelling and pool time on Phu Quoc.',
    intro: 'Three relaxed bases with family rooms and hands-on activities for every age.',
    intro2: 'Domestic flights keep travel days short.',
    outro: 'A gentle introduction to Asia the whole family will remember.'
  }),
  build(P['vietnam-cambodia-6-days'], {
    cities: ['Ho Chi Minh City', 'Mekong Delta', 'Phnom Penh'], meals: 5,
    stops: [
      ['Ho Chi Minh City', 'Days 1–2', ['Reunification Palace and Notre-Dame Cathedral', 'Ben Thanh market and street food', 'Cu Chi Tunnels'], [I.hcmc, I.food], 'Hotel des Arts Saigon (5★)', '2 nights · breakfast'],
      ['Mekong Delta', 'Days 3–4', ['Tra Su cajuput forest by boat', 'Chau Doc floating houses and Cham village', 'Speedboat up the Mekong to Phnom Penh'], [I.mekong, I.food], 'Victoria Chau Doc (4★)', '2 nights · breakfast'],
      ['Phnom Penh', 'Days 5–6', ['Royal Palace and Silver Pagoda', 'National Museum of Cambodia', 'Sunset cruise on the Tonle Sap river'], [I.battambang, I.angkor2], 'Palace Gate Hotel (4★)', '1 night · breakfast']
    ],
    quote: 'A short but rich taste of the south – Saigon’s energy, the peaceful Mekong waterways and Phnom Penh’s riverside charm.',
    quoteMore: 'My tip: the Mekong speedboat between Chau Doc and Phnom Penh is the most scenic border crossing in Asia.',
    short: 'Six days from Ho Chi Minh City through the Mekong Delta to Phnom Penh by river.',
    intro: 'Ideal as a long weekend or an add-on to a longer Vietnam holiday.',
    intro2: 'Private guides and transfers throughout.',
    outro: 'Peaceful beauty, compactly packaged.'
  }),
  build(P['vietnam-10-days'], {
    cities: ['Hanoi', 'Ha Long Bay', 'Hue', 'Hoi An'], meals: 9,
    stops: [
      ['Hanoi', 'Days 1–3', ['Old Quarter walking tour', 'Temple of Literature and Ho Chi Minh Mausoleum', 'Day trip to Ninh Binh and Trang An'], [I.hanoi, I.mausoleum, I.hanoiTrain], 'Sofitel Legend Metropole (5★)', '3 nights · breakfast'],
      ['Ha Long Bay', 'Days 4–5', ['Overnight cruise in Lan Ha Bay', 'Kayaking to hidden lagoons', 'Sunrise tai chi'], [I.halong, I.catba], 'Paradise Elegance (5★ cruise)', '1 night · full board'],
      ['Hue', 'Days 6–7', ['Imperial Citadel', 'Perfume River and Thien Mu Pagoda', 'Tomb of Khai Dinh'], [I.hue, I.hueAbove], 'Azerai La Residence (5★)', '2 nights · breakfast'],
      ['Hoi An', 'Days 8–10', ['Hai Van Pass drive with a stop at Lang Co', 'Ancient town and lantern evening', 'My Son sanctuary', 'Free beach day'], [I.hoian, I.danang, I.hoianRiver], 'Anantara Hoi An (5★)', '3 nights · breakfast']
    ],
    quote: 'Ten days in the north and centre is my favourite Vietnam route – nature in Ha Long and Ninh Binh, history in Hue and Hoi An.',
    quoteMore: 'My tip: drive the Hai Van Pass between Hue and Hoi An instead of flying – the coastal views are worth every minute.',
    short: 'Ten days of nature and history: Hanoi, Ninh Binh, an overnight Ha Long cruise, imperial Hue and Hoi An.',
    intro: 'A focused route with 5-star hotels and private guides.',
    intro2: 'No internal flights needed – everything links by road and rail.',
    outro: 'Vietnam’s cultural heartland at a comfortable pace.'
  }),
  build(P['vietnam-3-weeks'], {
    cities: ['Hanoi', 'Sapa', 'Ha Long Bay', 'Hue', 'Hoi An', 'Da Lat', 'Ho Chi Minh City', 'Phu Quoc'], meals: 20,
    stops: [
      ['Hanoi', 'Days 1–3', ['Old Quarter and Hoan Kiem Lake', 'Ho Chi Minh Mausoleum and Temple of Literature', 'Street-food evening'], [I.hanoi, I.mausoleum, I.hanoiTrain], 'La Siesta Classic Ma May (4★)', '3 nights · breakfast'],
      ['Sapa', 'Days 4–6', ['Trek through rice terraces to Hmong villages', 'Cat Cat village and waterfall', 'Fansipan cable car'], [I.sapa, I.dalat], 'Topas Ecolodge (4★)', '2 nights · half board'],
      ['Ha Long Bay', 'Days 7–8', ['Overnight cruise in Bai Tu Long Bay', 'Kayaking and floating village visit', 'Cooking class on board'], [I.halong, I.catba], 'Indochina Junk (4★)', '1 night · full board'],
      ['Hue', 'Days 9–10', ['Imperial Citadel', 'Dragon-boat on the Perfume River', 'Royal tombs'], [I.hue, I.hueAbove], 'Pilgrimage Village (4★)', '2 nights · breakfast'],
      ['Hoi An', 'Days 11–13', ['Ancient town and lanterns', 'Countryside cycling', 'Cooking class', 'Beach day'], [I.hoian, I.hoianRiver, I.hoianBoats], 'Allegro Hoi An (4★)', '3 nights · breakfast'],
      ['Da Lat', 'Days 14–15', ['French colonial villas and Crazy House', 'Coffee plantation visit', 'Datanla waterfall'], [I.dalat, I.sapa], 'Ana Mandara Villas (4★)', '2 nights · breakfast'],
      ['Ho Chi Minh City', 'Days 16–17', ['Reunification Palace and War Remnants Museum', 'Cu Chi Tunnels', 'Mekong Delta day trip'], [I.hcmc, I.mekong, I.food], 'Hotel des Arts Saigon (5★)', '2 nights · breakfast'],
      ['Phu Quoc', 'Days 18–21', ['Snorkelling off the An Thoi islands', 'Sunset at Sao Beach', 'Night market dinner', 'Free beach days'], [I.phuquoc, I.snorkel], 'Salinda Resort (5★)', '3 nights · breakfast']
    ],
    quote: 'Three weeks lets you see the whole country properly – from the terraces of Sapa to the beaches of Phu Quoc – with time to breathe in between.',
    quoteMore: 'My tip: start in the north in the cool season and work south; you will follow the good weather all the way down.',
    short: 'Twenty-one days north to south: Hanoi, Sapa, Ha Long Bay, Hue, Hoi An, Da Lat, Ho Chi Minh City and Phu Quoc.',
    intro: 'The complete Vietnam experience with mountains, bays, imperial cities, highlands, the delta and the beach.',
    intro2: 'Domestic flights link the longer legs.',
    outro: 'Everything Vietnam has to offer, in one unhurried journey.'
  })
];

export const vietnamBySlug = Object.fromEntries(vietnamTours.map((t) => [t.detail.slug, t]));
