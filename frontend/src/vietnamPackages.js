// Vietnam packages – source of truth: Hi Tours WorkDrive (AVEX Vietnam Travel quotations + "Vietnam Price.docx").
// Structured data model: destination → packages[] → itinerary days[]. Adapters for the listing/detail templates live in vietnamToursData.js.
const CT = 'https://images.ctfassets.net/bth3mlrehms2';
const ct = (p, w = 1080) => `${CT}/${p}?w=${w}&q=60&fm=webp`;

export const IMG = {
  halongCover: '/vietnam-packages/halong-aerial.webp',
  phuquocCover: '/vietnam-packages/phu-quoc-beach.webp',
  halong: ct('3Z7A5HXNMctqsB6GE2jphI/4cef5ccca7d896a0b4f88281499fec30/Halong_Bucht_Vietnam.jpg'),
  hanoi: ct('3qsQDApUiMDejmmNxXcr0g/3bd51ca9fa429966c8ba194946b30cb1/Pagode_Hanoi.png'),
  hanoiTrain: ct('3Lgk982isenWqjktA4ww3l/e54fc888a3706981eb5c144ff2e0dd4e/Zugstrasse_Hanoi.png'),
  mausoleum: ct('6Prkix7tuaFidcMZzbx6eR/3d94f728ec92dee48e409c737420ee24/Vietnam__Hanoi__Ho-Chi-Minh-Mausoleum.jpg'),
  ninhbinh: 'https://kiwi-cdn.tlservers.com/items%2F6d86277b-f666-4d59-b2e8-d31e3d3e1f4e%2Fimage%2Fjpeg%2FBYvY9GVVs-p_Yomff5v_KQ%2Fvietnam_-_ninh_binh_sunset_-_istock.jpg?w=1080&q=60&auto=format&fit=max',
  trangan: 'https://images.ctfassets.net/rc3dlxapnu6k/MJ60KvlJDTvcNIxxyYRZ0/e8c2a9aa16b80ecf1f395c04a9cc9d96/Vietnam__Ninh_Binh__Trang_An.jpg?w=1080&q=60&fm=webp',
  hoian: ct('4oRJ8JDJy6fZfVRUgAtjgy/a6e0956ec4af80390b64a389a0c3acf1/Vietnam__Qu%E1%BA%A3ng_Nam__H%E1%BB%99i_An..jpg'),
  hoianBoats: ct('2ec5zYEqTuCtsvZTUafUQs/b91bb18a48cf35494e3944635bf2e44a/Vietna_HoiAn_Boote.jpg'),
  hoianRiver: ct('1oona4EHxFNonfYfpgKQRu/fd45a84873954f50c0192a904b5c13db/Hoi_An_Vietnam_2.jpg'),
  danang: ct('1M6fmNzrSPt0exyQZ26Bzk/b4eea1905a7bd527f4c6a494b1b1b700/Vietnam_Da_Nang_Mamorberge_TCG.png'),
  hcmc: ct('4Ihuoev7y3ozkoyBtvaWe4/1839744b36bfb9e1d4bd8759bcfc28c6/Ho-Chi-Minh.jpg'),
  mekong: ct('6ERhQvEhzuwJMGgmSik6Zd/cf6947d9b1583c5f19e14ecbdd312e52/Mekong_Delta_Vietnam_2.jpg'),
  sapa: ct('5ujKcctP43Y7HHOFAKvWIU/4e29a70d5c0657d946762c42bd2f1eb5/Sapa_Vietname.jpg'),
  phuquoc: ct('1Tm427NrLOOFiGLG2qNwBX/b525194ba3f361bacdd2938831843a3a/Phu_Quoc_Vietnam.jpg'),
  catba: ct('pYi413E9aILuSFpglpms3/70ee69157ab6f08060ff814a66a659c6/Lan-Ha-Bay_Cat-Ba_Vietnam.png'),
  food: ct('4UHMlSky2OCC9u26L6NUil/80071dd6f3584a8b64ae1ac97ef76961/Vietnam__Essen.jpg'),
  snorkel: ct('5C7uDv9EfHPEvtzUcEz9GY/c99389efe54168881fde2f1a43516c58/Vietnam__Schnorcheln__Familie.jpg')
};
const CITY_IMG = {
  Hanoi: [IMG.hanoi, IMG.mausoleum, IMG.hanoiTrain], 'Ha Long Bay': [IMG.halongCover, IMG.halong, IMG.catba], 'Ninh Binh': [IMG.trangan],
  'Da Nang': [IMG.danang, IMG.hoianBoats, IMG.hoian], 'Hoi An': [IMG.hoian, IMG.hoianRiver, IMG.hoianBoats], 'Ho Chi Minh City': [IMG.hcmc, IMG.mekong, IMG.food],
  Sapa: [IMG.sapa], 'Phu Quoc': [IMG.phuquocCover, IMG.phuquoc, IMG.snorkel]
};
export const cityImages = (c) => CITY_IMG[c] || [IMG.halong];

const INCL_BASE = ['Meals as indicated in the itinerary (B = Breakfast, L = Lunch, D = Dinner)', 'Entrance fees to the attractions mentioned in the programme', 'Sightseeing and excursions mentioned in the itinerary', 'English-speaking local guide', 'Transportation used in the programme'];
const EXCL_BASE = ['Tips for guides and drivers', 'Personal expenses such as telephone, laundry, drinks, etc.', 'Meals not mentioned in the programme', 'Bank fees related to payment', 'Other services not clearly indicated under "Included"'];
const STYLES_ALL = ['Family', 'Beach', 'Honeymoon'];

// day: [dayNo, title, meals, bullets[], overnight]
const D = (day, title, meals, bullets, overnight) => ({ day, title, meals, bullets, overnight });

export const destination = { name: 'Vietnam', slug: 'vietnam', continent: 'Asia', image: IMG.halong };

export const packages = [
  {
    slug: 'hanoi-sapa-5d4n', name: 'Hanoi – Sapa: Discovering North Vietnam', code: 'PKG-1', days: 5, nights: 4, tag: 'Culture', styles: ['Family', 'Honeymoon'], included: { hotels: 2, activities: 12, transfers: 5, meals: 8 },
    summary: 'Hanoi’s Old Quarter, the terraced valleys of Sapa, Cat Cat village and the Fansipan cable car to the “Roof of Indochina”.',
    stays: [['Hanoi', 'Day 1', 'La Dolce Vita (Superior room)'], ['Sapa', 'Days 2–3', 'The View (Standard room)'], ['Hanoi', 'Day 4', 'La Dolce Vita (Superior room)']],
    itinerary: [
      D(1, 'Arrival in Hanoi – afternoon city tour', 'D', ['Arrival at Hanoi International Airport and private transfer to your hotel', 'Afternoon tour (14:00–18:00): Temple of Literature, West Lake and Tran Quoc Pagoda', 'Hoan Kiem Lake, the Old Quarter, The Huc Bridge and Ma May ancient house', 'Green-car or cyclo ride around the Old Quarter, ending with coffee at a local corner café'], 'Hanoi'),
      D(2, 'Hanoi – Sapa – Cat Cat Village (join-in tour)', 'B, L', ['06:00 sleeper bus from Hanoi to Sapa via Lao Cai with comfort breaks', 'Arrive Sapa around 13:00; welcome drink, briefing, lunch and hotel check-in', 'Walk to Cat Cat village, home of the Black H’mong, at the foot of Fansipan', 'Trek down to the waterfall and old French hydro station, back uphill to Sapa'], 'Sapa'),
      D(3, 'Sapa – Fansipan Peak – Moana View (join-in tour)', 'B, L', ['Cable car (20 min) to 2,800 m, then 600 steps to the summit of Fansipan – the Roof of Indochina', 'Lunch at a local restaurant or the hotel', 'Afternoon at Moana View: Bali gate, infinity lake, golden hand and panoramic café over Muong Hoa valley'], 'Sapa'),
      D(4, 'Sapa – return to Hanoi by shared limousine', 'B, L', ['Morning free to explore Sapa', 'Check-out, lunch and 13:00–14:00 shared limousine back to Hanoi', 'Arrive Hanoi 20:00–20:30 and transfer to your hotel'], 'Hanoi'),
      D(5, 'Hanoi – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Hanoi airport for your onward flight'], null)
    ],
    pricing: { currency: 'INR', basis: '3-star hotels, per person on double-sharing basis', rows: [['All months', 28049]], supplier: { low: '224 US$ pp (2 pax) · low season 1 May–30 Sep 2026', high: '234 US$ pp (2 pax) · high season 1 Oct–30 Nov 2026', single: 'Single supplement 92–98 US$' } },
    price: 28049,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room', 'SIC (join-in) tour in Sapa'],
    exclusions: ['All flights', ...EXCL_BASE],
    gallery: [IMG.sapa, IMG.hanoi, IMG.hanoiTrain, IMG.mausoleum], alt: 'Rice terraces around Sapa, Vietnam'
  },
  {
    slug: 'north-vietnam-ninh-binh-6d5n', name: 'North of Vietnam with Ninh Binh – 6 days 5 nights', code: 'PKG-2', days: 6, nights: 5, tag: 'Nature', styles: STYLES_ALL, included: { hotels: 2, activities: 11, transfers: 6, meals: 10 },
    summary: 'Hanoi city exploration, an overnight Ha Long Bay cruise and a full day in Ninh Binh with Mua Cave, Bich Dong and the Tam Coc boat ride.',
    stays: [['Hanoi', 'Days 1–2', 'Golden Legend Boutique (3★) · Hanoi Pearl (4★) · May de Ville Lakeside (5★)'], ['Ha Long Bay', 'Day 3', 'Mila Cruise (3★) · Verdure Lotus Luxury Cruise (4★) · Peony Cruises (5★)'], ['Hanoi', 'Days 4–5', 'Golden Legend Boutique (3★) · Hanoi Pearl (4★) · May de Ville Lakeside (5★)']],
    itinerary: [
      D(1, 'Arrival in Hanoi', '', ['Arrival at Hanoi International Airport and private transfer to your hotel', 'Free time for leisure'], 'Hanoi'),
      D(2, 'Hanoi city exploration (private tour)', 'B, L', ['Ho Chi Minh Mausoleum (exterior) from Ba Dinh Square and the One Pillar Pagoda', 'Temple of Literature – Vietnam’s first university, founded 1070', 'Lunch at a local restaurant', 'Hoan Kiem Lake, Turtle Tower and Ngoc Son Temple', 'Rickshaw ride through the 36 Streets of the Old Quarter'], 'Hanoi'),
      D(3, 'Hanoi – Ha Long Bay overnight cruise', 'B, L, D', ['Shared minivan to UNESCO-listed Ha Long Bay', 'Board the cruise, lunch on board and island-hopping among 3,000 limestone islets', 'Cave visit or fishing village, sunset dinner and onboard activities'], 'On board'),
      D(4, 'Ha Long Bay cruise – return to Hanoi', 'B, Brunch', ['06:00 tai chi at sunrise, cruise the bay', '09:30 check-out and brunch on board', 'Disembark at Tuan Chau port and shared limousine back to Hanoi; free evening'], 'Hanoi'),
      D(5, 'Hanoi – Ninh Binh – Hanoi', 'B, L', ['Transfer to Ninh Binh; climb 500 steps at Mua Cave for the view over Tam Coc', 'Bich Dong prayer hall and lunch at a local restaurant', 'Two-hour boat ride on the Ngo Dong River through Tam Coc’s rice fields, cliffs and caves', 'Return to Hanoi in the evening'], 'Hanoi'),
      D(6, 'Hanoi – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Hanoi airport'], null)
    ],
    pricing: { currency: 'INR', basis: 'Per person on double-sharing basis', rows: [['September', 59999, 67249, 77949], ['October', 61349, 69999, 83049], ['November', 61349, 69999, 83049], ['December', 61349, 69999, 83049]], columns: ['3-star', '4-star', '5-star'] },
    price: 59999,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room'],
    exclusions: ['All flights', ...EXCL_BASE],
    gallery: [IMG.trangan, IMG.halongCover, IMG.hanoi, IMG.halong, IMG.mausoleum], alt: 'Trang An, Ninh Binh, Vietnam'
  },
  {
    slug: 'north-vietnam-6d5n', name: 'North of Vietnam – 6 days 5 nights', code: 'PKG-3', days: 6, nights: 5, tag: 'Short trips', styles: STYLES_ALL, included: { hotels: 2, activities: 8, transfers: 5, meals: 9 },
    summary: 'A relaxed northern loop: Hanoi city exploration, an overnight Ha Long Bay cruise and a free day to enjoy the capital at your own pace.',
    stays: [['Hanoi', 'Days 1–2', 'Golden Legend Boutique (3★) · Hanoi Pearl (4★) · May de Ville Lakeside (5★)'], ['Ha Long Bay', 'Day 3', 'Mila Cruise (3★) · Verdure Lotus Luxury Cruise (4★) · Peony Cruises (5★)'], ['Hanoi', 'Days 4–5', 'Golden Legend Boutique (3★) · Hanoi Pearl (4★) · May de Ville Lakeside (5★)']],
    itinerary: [
      D(1, 'Arrival in Hanoi', '', ['Arrival at Hanoi International Airport and private transfer to your hotel', 'Free time for leisure'], 'Hanoi'),
      D(2, 'Hanoi city exploration (private tour)', 'B, L', ['Ho Chi Minh Mausoleum (exterior) and the One Pillar Pagoda', 'Temple of Literature', 'Lunch at a local restaurant', 'Hoan Kiem Lake, Turtle Tower and Ngoc Son Temple', 'Rickshaw ride through the Old Quarter’s 36 Streets'], 'Hanoi'),
      D(3, 'Hanoi – Ha Long Bay overnight cruise', 'B, L, D', ['Shared minivan to Ha Long Bay', 'Lunch on board, island-hopping, cave or fishing-village visit', 'Sunset dinner and onboard activities'], 'On board'),
      D(4, 'Ha Long Bay cruise – return to Hanoi', 'B, Brunch', ['Sunrise tai chi and cruising the bay', 'Brunch, check-out and shared limousine back to Hanoi', 'Free time in the city'], 'Hanoi'),
      D(5, 'Free day in Hanoi', 'B', ['Day at leisure at your own expense'], 'Hanoi'),
      D(6, 'Hanoi – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Hanoi airport'], null)
    ],
    pricing: { currency: 'INR', basis: 'Per person on double-sharing basis', rows: [['September', 48249, 55399, 66199], ['October', 50299, 58149, 74199], ['November', 50299, 58149, 74199], ['December', 50299, 58149, 74199]], columns: ['3-star', '4-star', '5-star'] },
    price: 48249,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room'],
    exclusions: ['All flights', ...EXCL_BASE],
    gallery: [IMG.halongCover, IMG.hanoi, IMG.catba, IMG.hanoiTrain], alt: 'Ha Long Bay from above, Vietnam'
  },
  {
    slug: 'north-central-vietnam-highlights-6d5n', name: '6D5N North & Central Vietnam Highlights', code: 'PKG-4', days: 6, nights: 5, tag: 'Culture', styles: STYLES_ALL, included: { hotels: 2, activities: 10, transfers: 6, meals: 9 },
    summary: 'Ha Long Bay day cruise, Ninh Binh, a Hanoi city tour, then a flight to Da Nang for the Golden Bridge at Ba Na Hills.',
    stays: [['Hanoi', 'Days 1–3', 'La Dolce Vita (Superior room)'], ['Ha Long Bay', 'Day 2 (day cruise)', 'Ambassador day cruise'], ['Da Nang', 'Days 4–5', 'San Marino Hotel (Deluxe room)']],
    itinerary: [
      D(1, 'Arrival in Hanoi', '', ['Arrival at Hanoi International Airport and private transfer to your hotel', 'Free time for leisure'], 'Hanoi'),
      D(2, 'Hanoi – full-day Ha Long Bay cruise (join-in)', 'B, L', ['Early transfer to Ha Long and embark on the Ambassador day cruise', 'Sung Sot Cave and Titov Island – swim and climb for the 360° view', 'Premium lunch on board, Luon Cave by bamboo boat or kayak (optional)', 'Afternoon tea and live music on the sundeck; shared limousine back to Hanoi'], 'Hanoi'),
      D(3, 'Hanoi – Ninh Binh full day (join-in)', 'B, L', ['Hoa Lu, the ancient capital, and the temples of the Dinh and Le kings', '30-minute cycling through the villages; buffet lunch at Trang An Heritage Garden', 'Tam Coc – 1.5-hour boat ride on the Ngo Dong River through paddies and caves', 'Mua Cave – 500 steps to the summit of Ngoa Long Mountain'], 'Hanoi'),
      D(4, 'Hanoi morning city tour – fly to Da Nang', 'B, L', ['Ho Chi Minh Mausoleum (exterior), One Pillar Pagoda and Temple of Literature', 'Lunch at a local restaurant', 'Flight Hanoi – Da Nang; private transfer to your hotel'], 'Da Nang'),
      D(5, 'Da Nang – full-day Ba Na Hills (join-in)', 'B, L', ['Cable car to Ba Na Hills; Golden Bridge, Le Jardin, Linh Ung Pagoda, Moon and Sun Palaces', 'French Village, Fantasy Park games and buffet lunch', 'Return cable car and drop-off at your hotel'], 'Da Nang'),
      D(6, 'Da Nang – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Da Nang airport'], null)
    ],
    pricing: { currency: 'INR', basis: '3-star hotels, per person on double-sharing basis', rows: [['September', 61749], ['October', 64099], ['November', 64099], ['December', 64099]], columns: ['3-star'], supplier: { low: '516 US$ pp (2 pax) · low season 1 May–30 Sep 2026', high: '536 US$ pp (2 pax) · high season 1 Oct–30 Nov 2026', single: 'Single supplement 115–125 US$' } },
    price: 61749,
    inclusions: [...INCL_BASE, 'Accommodation based on 2 people per room or triple room', 'SIC tours in Da Nang, Ha Long Bay and Ninh Binh', 'Flight ticket Hanoi – Da Nang'],
    exclusions: ['All international flights', ...EXCL_BASE],
    gallery: [IMG.danang, IMG.halongCover, IMG.trangan, IMG.hanoi, IMG.hoianBoats], alt: 'Marble Mountains, Da Nang, Vietnam'
  },
  {
    slug: 'vietnam-highlights-reverse-halong-8d7n', name: '8D7N Vietnam Highlights in Reverse with Ha Long', code: 'PKG-5', days: 8, nights: 7, tag: 'Culture', styles: STYLES_ALL, included: { hotels: 3, activities: 13, transfers: 8, meals: 12 },
    summary: 'South to north: Saigon’s Chinatown and river bus, Cu Chi Tunnels and the Mekong, Hoi An and Ba Na Hills, Ninh Binh and a 2-day Ha Long overnight cruise.',
    stays: [['Ho Chi Minh City', 'Days 1–2', 'Acnos Hotel (Grand Deluxe room)'], ['Da Nang', 'Days 3–4', 'San Marino Boutique Da Nang (Deluxe room)'], ['Hanoi', 'Days 5–6', 'La Dolce Vita (Deluxe room)'], ['Ha Long Bay', 'Day 7', 'Le Journey Premium Cruise (Deluxe Ocean View)']],
    itinerary: [
      D(1, 'Ho Chi Minh City – arrival – afternoon city tour (join-in)', '', ['Arrival at Ho Chi Minh airport and private transfer to your hotel', 'Thien Hau Pagoda and Cho Lon – Saigon’s historic Chinatown', 'Saigon River water-bus ride with skyline views'], 'Ho Chi Minh City'),
      D(2, 'Cu Chi Tunnels & Mekong Delta (join-in)', 'B, L', ['Cu Chi Tunnels: documentary, living areas, bunkers and trapdoors; cassava and hot tea', 'Lunch at a local restaurant, then My Tho in the Mekong Delta', 'Motorboat on the Tien River, sampan through the canals, honey farm and coconut-candy workshop, folk music'], 'Ho Chi Minh City'),
      D(3, 'Fly to Da Nang – Coconut Forest & Hoi An Old Town (join-in)', 'B, D', ['Flight Ho Chi Minh City – Da Nang; private transfer to your hotel', 'Marble Mountains: Tam Thai and Linh Ung pagodas, Non Nuoc village', 'Basket-boat ride in Bay Mau coconut forest', 'Dinner of Hoi An specialities and a walk through the Ancient Town and Japanese Bridge'], 'Da Nang'),
      D(4, 'Da Nang – full-day Ba Na Hills (join-in)', 'B, L', ['Record-breaking cable car to Ba Na Hills', 'Golden Bridge, Le Jardin D’Amour, Linh Ung Pagoda; buffet lunch at Nui Chua peak', 'Fantasy Park games, Beer B’estival and local shopping'], 'Da Nang'),
      D(5, 'Da Nang – fly to Hanoi', 'B', ['Private transfer to Da Nang airport for your flight to Hanoi', 'Arrival transfer to your Hanoi hotel'], 'Hanoi'),
      D(6, 'Hanoi – full-day Ninh Binh excursion (join-in)', 'B, L', ['Hoa Lu ancient capital and the Dinh, Le and Ly dynasties', 'Buffet lunch of local specialities', '1.5-hour bamboo boat through Tam Coc, 45-minute cycle through villages'], 'Hanoi'),
      D(7, 'Hanoi – Ha Long Bay overnight cruise (join-in)', 'B, L, D', ['Limousine to Tuan Chau port; board Le Journey Premium Cruise', 'Lunch on board, Surprising Cave and Titop Island', 'Sunset party, spring-roll cooking class, happy hour, dinner on the sundeck, squid fishing'], 'On board'),
      D(8, 'Ha Long Bay – Hanoi – departure', 'B, Brunch', ['Sunrise tai chi and breakfast while cruising to the preservation area', 'Kayaking or rafting at Luon Cave', 'Early lunch, disembark at Tuan Chau, shared limousine to Hanoi and private transfer to the airport'], null)
    ],
    pricing: { currency: 'INR', basis: '3-star hotels, per person on double-sharing basis', rows: [['September', 97649], ['October', 99899], ['November', 99899], ['December', 99899]], columns: ['3-star'], supplier: { low: '816 US$ pp (2 pax) · low season 1 May–30 Sep 2026', high: '835 US$ pp (2 pax) · high season 1 Oct–30 Nov 2026', single: 'Single supplement 205–235 US$' } },
    price: 97649,
    inclusions: [...INCL_BASE, 'Domestic flights: Ho Chi Minh City – Da Nang, Da Nang – Hanoi', 'Accommodation based on 2 or 3 people per room'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.halongCover, IMG.hcmc, IMG.mekong, IMG.hoianBoats, IMG.danang], alt: 'Ha Long Bay, Vietnam'
  },
  {
    slug: 'north-central-vietnam-phu-quoc-8d7n', name: '8D7N North & Central Vietnam with Phu Quoc', code: 'PKG-6', days: 8, nights: 7, tag: 'Beach', styles: STYLES_ALL,
    summary: 'Hanoi, a Ha Long Bay day cruise and Ninh Binh, Hoi An and Ba Na Hills, then island time on Phu Quoc with a 4-isle speedboat and cable-car day.',
    stays: [['Hanoi', 'Days 1–3', 'La Dolce Vita (Deluxe room)'], ['Ha Long Bay', 'Day 2 (day cruise)', 'Ambassador Cruise'], ['Da Nang', 'Days 4–5', 'San Marino Boutique Da Nang (Deluxe room)'], ['Phu Quoc', 'Days 6–7', 'An Phu Hotel (Superior City River View)']],
    itinerary: [
      D(1, 'Hanoi – arrival – afternoon city tour (join-in)', '', ['Arrival at Hanoi airport and private transfer to your hotel', 'Tran Quoc Pagoda on West Lake – Hanoi’s oldest Buddhist temple', 'Ho Chi Minh Complex: mausoleum (exterior), Presidential Palace, stilt house and One Pillar Pagoda', 'Temple of Literature'], 'Hanoi'),
      D(2, 'Hanoi – full-day Ha Long Bay cruise (join-in)', 'B, L', ['Transfer to Ha Long and embark on the Ambassador cruise', 'Sung Sot Cave and Titov Island', 'Premium lunch, Luon Cave by bamboo boat or kayak (optional), afternoon tea and live music', 'Shared limousine back to Hanoi'], 'Hanoi'),
      D(3, 'Hanoi – full-day Ninh Binh excursion (join-in)', 'B, L', ['Hoa Lu ancient capital', 'Buffet lunch of local specialities', '1.5-hour bamboo boat through Tam Coc and 45-minute village cycle', 'Mua Cave – 500 steps up Lying Dragon Mountain'], 'Hanoi'),
      D(4, 'Fly to Da Nang – Coconut Forest & Hoi An Old Town (join-in)', 'B, D', ['Flight Hanoi – Da Nang; private transfer to your hotel', 'Marble Mountains, Bay Mau coconut forest by basket boat', 'Dinner of local dishes and Hoi An Ancient Town with the Japanese Bridge'], 'Da Nang'),
      D(5, 'Da Nang – full-day Ba Na Hills (join-in)', 'B, L', ['Cable car to Ba Na Hills; Golden Bridge, Le Jardin D’Amour, Linh Ung Pagoda', 'Buffet lunch at Nui Chua peak, Fantasy Park', 'Local shopping and drop-off at your hotel'], 'Da Nang'),
      D(6, 'Da Nang – fly to Phu Quoc', 'B', ['Private transfer to Da Nang airport for your flight to Phu Quoc', 'Arrival transfer to your hotel'], 'Phu Quoc'),
      D(7, 'Phu Quoc – 4-isle getaway by speedboat & cable car (join-in)', 'B, L', ['Speedboat from An Thoi harbour: snorkelling at Xuong and Gam Ghi islands', 'Lunch and beach time on May Rut Trong island (optional Seawalker)', 'Aquatopia Water Park and the world’s longest three-wire cable car from Hon Thom'], 'Phu Quoc'),
      D(8, 'Phu Quoc – departure', 'B', ['Breakfast at the hotel', 'Private transfer to Phu Quoc airport'], null)
    ],
    pricing: { currency: 'INR', basis: '3-star hotels, per person on double-sharing basis', rows: [['September', 99999], ['October', 102449], ['November', 102449], ['December', 102449]], columns: ['3-star'], supplier: { low: '836 US$ pp (2 pax) · low season 1 May–30 Sep 2026', high: '856 US$ pp (2 pax) · high season 1 Oct–30 Nov 2026', single: 'Single supplement 180–185 US$' } },
    price: 99999,
    inclusions: [...INCL_BASE, 'Domestic flights: Hanoi – Da Nang, Da Nang – Phu Quoc', 'Accommodation based on 2 or 3 people per room'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.phuquocCover, IMG.halongCover, IMG.hoianBoats, IMG.phuquoc, IMG.snorkel], alt: 'Beach on Phu Quoc island, Vietnam'
  },
  {
    slug: 'vietnam-full-package-9d8n', name: 'Vietnam Full Package: 9 days exploring North, Central & South', code: 'PKG-7', days: 9, nights: 8, tag: 'Culture', styles: STYLES_ALL, included: { hotels: 4, activities: 18, transfers: 9, meals: 15 },
    summary: 'The complete country: Hanoi and an overnight Ha Long cruise, Hoi An with Ba Na Hills and Cam Thanh, then Saigon, the Cu Chi Tunnels and the Mekong Delta.',
    stays: [['Hanoi', 'Days 1–2', 'Golden Legend Boutique (3★) · Hanoi Pearl (4★) · May de Ville Lakeside (5★)'], ['Ha Long Bay', 'Day 3', 'Mila Cruise (3★) · Verdure Lotus Luxury Cruise (4★) · Peony Cruises (5★)'], ['Hoi An', 'Days 4–6', 'San Marino Boutique Da Nang (3★) · Stella Maris Beach Da Nang (4★) · Nam An Retreat (5★)'], ['Ho Chi Minh City', 'Days 7–8', 'Elios Hotel (3★) · Northern Charm (4★) · La Siesta Premium (5★)']],
    itinerary: [
      D(1, 'Arrival in Hanoi', '', ['Arrival at Hanoi International Airport and private transfer to your hotel', 'Free time for leisure'], 'Hanoi'),
      D(2, 'Hanoi city exploration (private tour)', 'B, L', ['Ho Chi Minh Mausoleum (exterior) and the One Pillar Pagoda', 'Temple of Literature', 'Lunch at a local restaurant', 'Hoan Kiem Lake, Turtle Tower and Ngoc Son Temple', 'Rickshaw ride through the 36 Streets'], 'Hanoi'),
      D(3, 'Hanoi – Ha Long Bay overnight cruise', 'B, L, D', ['Shared minivan to Ha Long Bay and board the cruise', 'Lunch on board, island-hopping, caves or fishing village', 'Sunset dinner and onboard activities'], 'On board'),
      D(4, 'Ha Long Bay – Hanoi – fly to Da Nang – Hoi An', 'B, Brunch', ['Sunrise tai chi, brunch and check-out', 'Shared limousine to Hanoi and flight to Da Nang', 'Private transfer to your hotel in Hoi An'], 'Hoi An'),
      D(5, 'Hoi An – Ba Na Hills (private tour)', 'B, L', ['Cable car with panoramic views of Quang Nam and Da Nang', 'Golden Bridge, Jardin d’Amour and Linh Ung Pagoda; French Village, Campanile and Nine-Story Goddess Shrine', 'Lunch and free time at Fantasy Park; return to Hoi An'], 'Hoi An'),
      D(6, 'Hoi An – Cam Thanh boat trip – city tour (private tour)', 'B, L', ['Japanese Covered Bridge, Quan Thang Old House and Fujian Assembly Hall', 'Round-trip boat ride in Cam Thanh village', 'Lunch at a local restaurant; free afternoon in the old town'], 'Hoi An'),
      D(7, 'Hoi An – Da Nang – fly to Ho Chi Minh City – city tour', 'B', ['Transfer to Da Nang airport for your flight to Ho Chi Minh City', 'Reunification Palace (exterior), Old Central Post Office and the War Remnants Museum'], 'Ho Chi Minh City'),
      D(8, 'Cu Chi Tunnels & Mekong Delta full day (private tour)', 'B, L', ['Cu Chi Tunnels – the Viet Cong’s underground network', 'My Tho pier: boat on the Tien River, coconut-candy factory, seasonal fruit and southern folk music', 'Canoe through the canals, 4–8 km cycle through Ben Tre coconut gardens, fresh coconut on the boat'], 'Ho Chi Minh City'),
      D(9, 'Ho Chi Minh City – departure', 'B', ['Breakfast at the hotel', 'Private transfer to the airport for your onward flight'], null)
    ],
    pricing: { currency: 'INR', basis: 'Per person on double-sharing basis', rows: [['September', 128799, 145349], ['October', 130149, 146649], ['November', 130149, 146649], ['December', 130149, 146649]], columns: ['3-star', '4-star'] },
    price: 128799,
    inclusions: [...INCL_BASE, 'Domestic flights: Hanoi – Da Nang, Da Nang – Ho Chi Minh City', 'Accommodation based on 2 people per room'],
    exclusions: ['International flights', ...EXCL_BASE],
    gallery: [IMG.halongCover, IMG.hoian, IMG.hcmc, IMG.mekong, IMG.hanoi], alt: 'Ha Long Bay, Vietnam'
  }
];

export const packageBySlug = Object.fromEntries(packages.map((p) => [p.slug, p]));
