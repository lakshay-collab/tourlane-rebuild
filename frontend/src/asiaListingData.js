// Asia listing page content (English, INR) for Hi Tours – mirrors the Egypt listing structure.
import { cardImages as srilankaCardImages } from './srilankaData';
import { cardImages as thailandCardImages } from './thailandData';
const CT = 'https://images.ctfassets.net/bth3mlrehms2';

export const hero = {
  h1: 'Asia holidays',
  sub: 'The largest continent on Earth',
  cta: 'Plan for free',
  ctaHref: '/l/asia/enquiry/passengers/',
  note: 'No two trips alike.',
  images: [
    { alt: 'Woman on green rice terraces in the mountains, Mu Cang Chai, Yen Bai, Vietnam', title: 'Mu Cang Chai, Yen Bai, Vietnam', src: `${CT}/iof6amVlsrr1jx8lzJpyg/83578dd1ab02d417fea84b6c4e7f47dd/Mu_Cang_Chai__Yen_Bai__Vietnam.png?w=1400&q=60&fm=webp` },
    { alt: 'Street kitchen with grilled fish and seafood, vendor in a straw hat, Bangkok, Thailand', title: 'Bangkok, Thailand', src: `${CT}/wERMGlUKJUQCrO3gKAOvG/6387880b3e5cc4d9611ed56fb15404fb/Bangkok__Thailand.png?w=800&q=60&fm=webp` },
    { alt: 'Longtail boat on turquoise water between tall cliffs, Khao Sok National Park, Thailand', title: 'Khao Sok National Park, Thailand', src: `${CT}/NaSD91U6bH24McfPQt063/69e117c118fdb0282f35a91aa0d8d67e/Khao_Sok_Nationalpark__Thailand.png?w=800&q=60&fm=webp` }
  ]
};

export const crumbs = [{ label: 'Home', href: '/' }, { label: 'Asia' }];

export const intro = {
  h2: 'Why go on an Asia holiday?',
  text: [
    'Asia, the largest continent in the world, tempts with its ',
    ['rich cultural diversity, spectacular landscapes and delicious cuisine.'],
    ' From the ',
    ['glittering skyscrapers'],
    ' of Tokyo and Shanghai to the ',
    ['ancient temples'],
    ' of Angkor Wat and the ',
    ['picturesque beaches'],
    ' of Bali, Asia offers a wealth of travel experiences for adventurers of every age.'
  ]
};

export const team = {
  h2: 'Our Asia specialists',
  members: [
    { name: 'Aarav Mehta', role: 'Senior Travel Expert, Japan & South Korea', image: '/team/asia-1.webp', quote: 'Planning an Asia holiday shouldn\'t be a headache – that\'s my job, not yours.' },
    { name: 'Ananya Iyer', role: 'Travel Expert, Thailand & Vietnam', image: '/team/asia-2.webp', quote: 'I\'ve spent months island-hopping in Thailand so your two weeks are perfectly spent.' },
    { name: 'Vikram Nair', role: 'Head of Asia Product', image: '/team/asia-3.webp', quote: 'Twenty years of Asia and I still find new corners to send our travellers to.' },
    { name: 'Meera Krishnan', role: 'Travel Expert, Bali & Indonesia', image: '/team/asia-4.webp', quote: 'Honeymoon in Bali? Tell me how you like your mornings and I\'ll plan the rest.' },
    { name: 'Kabir Shah', role: 'Travel Expert, Sri Lanka & Maldives', image: '/team/asia-5.webp', quote: 'Beaches, tea country or leopards – Sri Lanka has all three and I\'ll fit them in.' }
  ]
};

export const tours = {
  h2: 'Popular Asia holidays',
  more: 'Show more',
  less: 'Show less'
};

const P = (title, tag, days, cities, hotels, activities, transfers, price, alt, images) => ({ title, tag, days, stops: cities, cities, hotels, activities, transfers, price, alt, images });

export const products = [
  { title: 'Siam Splendour: 9-Day Thailand Odyssey', tag: 'Culture', days: 9, stops: 4, cities: 4, hotels: 3, activities: 14, transfers: 4, meals: 9, price: 63650, alt: 'Phi Phi Islands, Thailand', slug: 'siam-splendour-thailand', href: '/asien/siam-splendour-thailand', images: thailandCardImages },
  { title: 'Emerald Isle Explorer: 9-day Sri Lanka culture & wildlife journey', tag: 'Culture', days: 9, stops: 6, cities: 6, hotels: 6, activities: 14, transfers: 7, meals: 9, price: 94472, alt: 'Sigiriya Lion Rock, Sri Lanka', slug: 'emerald-isle-explorer-sri-lanka', href: '/asien/emerald-isle-explorer-sri-lanka', images: srilankaCardImages },
  P('Khao Lak holiday for beach lovers and adventurers', 'Culture', 22, 7, 7, 14, 12, 155700, 'Khao Lak, Thailand', [
    `${CT}/5Hm10TrqCIgW8kcP3h2twj/c76291902631d2211aaafd7f4b68c726/Thailand__Khao_Lak__Sandbank.jpg?w=1080&q=60&fm=webp`,
    'https://kiwi-cdn.tlservers.com/items%2F456f162b-30ab-422f-ae7e-0c61356b3688%2Fimage%2Fjpeg%2FtXJwHQAMy1VjAu8AtLBqxA%2FiStock-4979663321.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F9b02f743-99b2-4f0d-ba96-01c1728cd48a%2Fimage%2Fjpeg%2Fj8_49pG2qQDO-hvXqlECaw%2Fcolton-duke-pit2v7nje4-unsplash.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('7-day Japan tour with Mount Fuji, tea ceremony and cuisine', 'Culture', 7, 3, 3, 6, 5, 162000, 'Mount Fuji, Japan', [
    `${CT}/EXxSQSMyUf6RVGbVy9iGX/136008404c78a72f7e64cdeebbf9b5de/Japon__Mont_Fuji.jpg?w=1080&q=60&fm=webp`,
    'https://kiwi-cdn.tlservers.com/items%2Ff55e330f-2b6a-4374-9afc-d30eb0fc6950%2Fimage%2Fjpeg%2FprHTeic0T2HVSxOYP9E9OA%2Fistock-1567549319.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F611834a9-ed0e-4e61-a246-e672b35204c5%2Fimage%2Fjpeg%2FgivfmkyKSegrskUZO3Qqzg%2FiStock-1798449102.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Indonesia in 2 weeks: Bali and Lombok', 'Nature', 15, 6, 6, 10, 10, 193500, 'Nusa Dua, Bali, Indonesia', [
    `${CT}/18mXctwKz7ZEDco4fUE11a/213ded3b470c83fdd00ffdb1af83c044/Indonesien__Bali__Nusa_Dua.jpg?w=1080&q=60&fm=webp`,
    'https://kiwi-cdn.tlservers.com/items%2Fae2b4c17-20df-464a-a3db-113cfeedd33b%2Fimage%2Fjpeg%2FuIxpXF2xyVn1_bIKDYwUOA%2Fsanur-istock-162420186.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F4129805b-6acf-47c4-9e52-fac81c87c426%2Fimage%2Fjpeg%2FnduOAcia6BSgOw2-_tiDCw%2Fistock-466138248.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Thailand with Bangkok and island hopping', 'Island hopping', 19, 6, 6, 12, 10, 209700, 'Phang Nga Bay, Krabi, Thailand', [
    `${CT}/2zOFZe2JpEvWVQygwaD3Co/ba319d0063fcffe43731a32a62320c77/Thailand__Krabi__Phang_Nga_Bay.jpg?w=1080&q=60&fm=webp`,
    `${CT}/52i1rZUn3447oZ0bpYFkAH/f0608f0798e72e9d9a18e5c3429a7e64/Thailand__Khao_Sok_Nationalpark.jpg?w=1080&q=60&fm=webp`,
    `${CT}/4DohzkIJnFpZM5ssF4ayKp/1121a0f4f9281b6be5a1359c7cfda179/Similan-Inseln__Korallen.jpg?w=1080&q=60&fm=webp`
  ]),
  P('Vietnam in 2 weeks: from Hanoi to Ho Chi Minh City', 'Culture', 13, 6, 6, 11, 10, 218700, 'Huế, Vietnam', [
    `${CT}/JDASnNCaoB20TSwhQc4iE/420a9d60e73d9bcb592723cdc22f4abf/Vietnam__Th%E1%BB%ABa_Thi%C3%AAn_Hu%E1%BA%BF__Hu%E1%BA%BF__Kaiserstadt.jpg?w=1080&q=60&fm=webp`,
    `${CT}/4oRJ8JDJy6fZfVRUgAtjgy/a6e0956ec4af80390b64a389a0c3acf1/Vietnam__Qu%E1%BA%A3ng_Nam__H%E1%BB%99i_An..jpg?w=1080&q=60&fm=webp`,
    'https://kiwi-cdn.tlservers.com/items%2F33ffa874-e537-4476-9ee4-24b879d95262%2Fimage%2Fjpeg%2FETa0z3kdrqBASIH2haKnnQ%2Fspenser-sembrat-xc8W2ZCv4j4-unsplash1.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('12-day Malaysia tour through breathtaking nature', 'Nature', 12, 4, 4, 9, 7, 221400, 'Sepilok, Sabah, Malaysia', [
    `${CT}/75OivhbWUIcq5PlUmpmA1j/30161b201b3fd087f637ed6b5cfb5ecd/Malaysia__Sabah__Sepilok-Orang-Utan-Rehabilitationszentrum.jpg?w=1080&q=60&fm=webp`,
    `${CT}/24BB1qRdodIYm9e7lbZ9ae/c3e668ed13b3bab687aec1074f2a9d32/Malaysia__Kuching.jpg?w=1080&q=60&fm=webp`,
    'https://kiwi-cdn.tlservers.com/items%2F8d42a0ee-4e81-430c-977b-8621d040766a%2Fimage%2Fjpeg%2Fp3qAwjs5IzNhOjUD-5RLwA%2Fhongwei-fan-sTCQTk2fxW0-unsplash.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Family paradise Maldives with spa and calm waters for splashing', 'Family', 8, 1, 1, 5, 2, 238500, 'Baa Atoll, Maldives', [
    `${CT}/2C7NC6T1ah4waG9TXEwVH/670bb4a69421853d464482bdbf2a46d3/Malediven__Baa-Atoll.jpg?w=1080&q=60&fm=webp`,
    'https://kiwi-cdn.tlservers.com/items%2F6c49f908-903d-4aed-b849-42adefcea8de%2Fimage%2Fjpeg%2FEKJyXwoR6B9-PrUHyRpnwA%2Fistock-1078548856.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F6c49f908-903d-4aed-b849-42adefcea8de%2Fimage%2Fjpeg%2FQwmQRjdN5Ch4bDJSltR56w%2Fistock-2169998845_1.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('17 days exploring Malaysia: tea plantations and city flair', 'Road trip', 17, 8, 8, 13, 14, 252000, 'Cameron Highlands, Malaysia', [
    `${CT}/6tQ0fuewJsT1XGyPtk1feM/46e2bf106f4544461abd40528a72610e/Sonnenaufgang_Wolken_Cameron-Highlands_Malaysia.png?w=1080&q=60&fm=webp`,
    `${CT}/51tkEfILsnNr3oDIU4ElpU/bc3ac3dac83ed5c1f18aa7024e8f1c32/Malaysia__George_Town.jpg?w=1080&q=60&fm=webp`,
    `${CT}/551fN43gzcrBZuaq1Htm5G/7178fc9e6f18a09d653189847d195f8e/Strand_Malaysia.jpg?w=1080&q=60&fm=webp`
  ]),
  P('Sri Lanka trekking & nature holiday', 'Nature', 18, 10, 10, 14, 16, 264600, 'Thabbowa, Puttalam, Sri Lanka', [
    `${CT}/2vgfHtnlPqqDtNnA56FCwz/397582a65f735796a519d3243e8efd64/Schrein-Thabbowa_Puttalam_Sri-lanka.jpg?w=1080&q=60&fm=webp`,
    'https://kiwi-cdn.tlservers.com/items%2F627d62f3-2448-49b2-b5a3-194ed629cf8a%2Fimage%2Fjpeg%2FrrAIeqWT1JnpHjG27kNliA%2Fistock-1254351655.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Ffcea9ba9-eaf1-41e5-92f8-0380700d00cc%2Fimage%2Fjpeg%2FSDc6VR1wq5Nq1R1bXcYk2g%2Fistock-1282142621.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('14-day luxury holiday in the Malaysian paradise', 'Luxury', 14, 7, 7, 10, 12, 264600, 'Petronas Towers, Kuala Lumpur, Malaysia', [
    `${CT}/7v9STD4EzC9uO1vB6vl2SC/2d6be37e8ab85ac375ae2d2ac46ec9b0/Malaysia__Kuala_Lumpur__Petronas_Towers.jpg?w=1080&q=60&fm=webp`,
    'https://kiwi-cdn.tlservers.com/items%2F57796d3a-2221-4a2c-955b-91db7a8ad7bc%2Fimage%2Fjpeg%2F3vUdLl06uy-VdMmRVLuDOA%2Fmasrur-rahman-anzr28z-kpc-unsplash.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F4726f216-1502-45a7-9c96-903e16a2a92c%2Fimage%2Fjpeg%2FMdOWiggHrTfhLPVkz1QCyw%2Fshutterstock_1120629275.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Sri Lanka round trip followed by a beach holiday', 'Nature', 19, 10, 10, 15, 16, 276300, 'Sigiriya, Sri Lanka', [
    `${CT}/7am9HezUT6UVVuCZDR0XCY/2dd79b0670aa3f7ba1f0a162dba0146b/Sri_Lanka__Sigiriya.jpg?w=1080&q=60&fm=webp`,
    'https://kiwi-cdn.tlservers.com/items%2F138842c4-c760-48b6-8f1b-cca03cfb813e%2Fimage%2Fjpeg%2Fo2JBUrHDd3brOVhShMM7ZQ%2Fistock-1292310728.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F3573c190-395f-40c9-b143-db63215b02df%2Fimage%2Fjpeg%2Fs13FKmYYEfQGfp0GvSrCWg%2Fistock-1341744466.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Fascinating journey through Malaysia, Singapore & Indonesia', 'Multi-country', 15, 6, 6, 11, 10, 300600, 'Singapore', [
    `${CT}/1S1CFngY8la37r0DqH3xb1/8052b7405ea5431391f2be4fba023227/Jalan_Besar_Singapore_2.jpg?w=1080&q=60&fm=webp`,
    `${CT}/7ESNSlcaBy677vvS6n9007/e39b7f110e4be76e4a4071d0e7f37973/Kuala_Lumpur_Malaysia.jpg?w=1080&q=60&fm=webp`,
    `${CT}/63aV7T4NNRJiHUcBpMg6dB/6bb0bb5c42756d2723639e719c28e89c/Indonesien__Bali__Nusa_Dua.jpg?w=1080&q=60&fm=webp`
  ]),
  P('Singapore–Sumatra tour with volcanoes, wildlife and relaxation', 'Nature', 17, 9, 9, 13, 14, 324000, 'Uluwatu, Bali, Indonesia', [
    `${CT}/4xZbsybJluYGxiKX3WYl12/f3d1823ca4825f3e2914022f492a153e/Indonesien_Uluwatu_Restaurant.jpg?w=1080&q=60&fm=webp`,
    'https://kiwi-cdn.tlservers.com/items%2F6c3db7f8-f4b4-4866-933b-b818ac930860%2Fimage%2Fjpeg%2FTvXpNRdlbFPRSyGiE4Xmjw%2Fsingapore_city_-burachet-_shutterstock_175914833.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F4a61056f-b8d3-46fd-a824-77b5160a244c%2Fimage%2Fjpeg%2FAlIBf_c_U5niGYTgPgxZNA%2Fistock-1184824478.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Japan in 14 days: 2 weeks through Tokyo, Kyoto and Osaka', 'Culture', 14, 3, 3, 10, 5, 329400, 'Kinkaku-ji, Kyoto, Japan', [
    `${CT}/4Dpbtbz1Avc7EO5gPwBSoW/5d3830d037809cb2622726a5bebc5d2f/Japan__Kyoto__Kinkaku-ji.jpg?w=1080&q=60&fm=webp`,
    `${CT}/5mMmoHVpRDHkV3s9Fg6LzQ/16f0cf805c18c96a6660e3d64f531fd7/Japan_Osaka_Schloss.jpg?w=1080&q=60&fm=webp`,
    `${CT}/1lSMhsRFLihJX0ZGLtroyq/140c6820e05d22b837122238bfe3d61a/Dotonbori_strasse__Osaka__Japan.jpg?w=1080&q=60&fm=webp`
  ]),
  P('Cambodia discovery from Siem Reap to Koh Rong', 'Culture', 15, 5, 5, 11, 8, 347400, 'Bokor Hill, Kampot, Cambodia', [
    `${CT}/2szQSstIlIuVgLMyuq3PZV/ae3388551cb9ed43c6fe3e8cd695a290/Kambodscha__Kampot__Bokor_Hill.jpg?w=1080&q=60&fm=webp`,
    'https://kiwi-cdn.tlservers.com/items%2Fd817d36a-6336-4d4c-9b0c-69086b127d52%2Fimage%2Fjpeg%2F5HRKllsgrq8_hGEgLPynuA%2Fjames-wheeler-9zXMb-E8pI0-unsplash.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F5737f0fe-86cf-4888-b73d-46d65d863da0%2Fimage%2Fjpeg%2Fot9PMbtye_Yqt-UAUScbzA%2Fbattambang-shutterstock-1876937614.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('China in 2 weeks with a bamboo raft trip on the Li River', 'Culture', 15, 6, 6, 12, 10, 359100, 'Forbidden City, Beijing, China', [
    'https://kiwi-cdn.tlservers.com/items%2F13930f98-67c7-47c0-8f3d-9f7f96a60425%2Fimage%2Fjpeg%2FGnS_7vq0pkRAkCyX25TzRg%2Fforbidden_city.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Fc04a0e0a-435d-4af5-9552-ff4cead7f556%2Fimage%2Fjpeg%2FjhET5TpEb7ERyB8v56_Tdw%2Fshanghai-istock-1201711683.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F26ada693-a681-4b34-9253-df4d1eb63ea5%2Fimage%2Fjpeg%2FmOt2nfg_0q0v24GaAR0QwQ%2Fyangshuo-istock-1368399386.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('India tour with tigers, tea plantations & beach time', 'Culture', 16, 6, 6, 12, 10, 360000, 'Taj Mahal, Agra, India', [
    `${CT}/3tMULy2oenWfno0vfK90fE/09021ff48b74c1cda2b618e47ea3b71b/Taj_Mahal__Indien.jpg?w=1080&q=60&fm=webp`,
    `${CT}/13iNJODjS7Pq5MWh4AeEbN/1be0d980bfe6206ee15d8563824c84bc/Thekkady__Indien.jpg?w=1080&q=60&fm=webp`,
    'https://kiwi-cdn.tlservers.com/items%2F2775752b-d90a-4323-85d2-fd0b238f1c5c%2Fimage%2Fjpeg%2FfZsW6c7_vt_QLNm0wx3ckQ%2Fistock-148427887.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('South Korea snapshot: the best experiences in 7 days', 'Short trips', 7, 3, 3, 6, 5, 368100, 'Gamcheon Culture Village, Busan, South Korea', [
    `${CT}/5wcHOCUiX8SU0OaPR6m8Ab/3f8d7fc259c2e40c9416849bdfeb8abf/S%C3%83_dkorea_Busan_GamcheonVillage.jpg?w=1080&q=60&fm=webp`,
    'https://kiwi-cdn.tlservers.com/items%2Fd01430c4-705b-418a-89a1-54d8599b6d6a%2Fimage%2Fjpeg%2F3x3W6d2Yz2PeFZCxbUxSQg%2Fistock-908748356.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Fe4667ec3-b5ab-488f-9464-f185b614465e%2Fimage%2Fjpeg%2FtUt1ldZkuwU-0tvsk77cJg%2Fistock-478766664.jpg?w=1080&q=60&auto=format&fit=max'
  ])
];

export const countries = {
  h2: 'Discover the most beautiful destinations',
  items: [
    { title: 'Laos', href: '#', image: `${CT}/730GUSsXgobNqsyerVaagA/c31524b81de30c8805073d4e2cabda93/Laos_Mekong_Boot.jpg?w=1080&q=60&fm=webp` },
    { title: 'Thailand', href: '#', image: `${CT}/27MnAH4RS1zTSFygAmnq5i/97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg?w=1080&q=60&fm=webp` },
    { title: 'Vietnam', href: '/asien/vietnam', image: `${CT}/6KpaBlYiRchxRrYsS84QgO/dfb8fec25316c0c719d2aa7a5794dc31/NinhBinhProvinz_Tempel.jpg?w=1080&q=60&fm=webp` },
    { title: 'Japan', href: '#', image: `${CT}/5E91LAbIo29xmfzemwDnnu/082cd826dbf9b2744cbcf00015005330/Japan_MtFuji.jpg?w=1080&q=60&fm=webp` },
    { title: 'Indonesia', href: '#', image: `${CT}/61b5ymnc76Gat5QEm4R7Uv/236a66af31569408e5fba01e2dcb53b1/Kelingking_Beach__Nusa_Penida__Indonesien_NTCG__1_.png?w=1080&q=60&fm=webp` },
    { title: 'India', href: '#', image: `${CT}/1OoLHyQc0wvo7b7ky6kOYi/14f2e12522f80eccc465118fb92f7486/Indien_Ladakh_Landschaft_TCG.png?w=1080&q=60&fm=webp` },
    { title: 'China', href: '#', image: `${CT}/3FwBvWPMIiVGThJdqClYD1/bb67524f6b951541a23d6950859c4e6f/China_Jinshanling_ChinesischeMauer_TCG.png?w=1080&q=60&fm=webp` },
    { title: 'Cambodia', href: '#', image: `${CT}/3zbplvZU8SZYLZqdmaPsZv/c16250ef83321324f10fbf00c9b058a1/Kambodscha_AngkorWat.jpg?w=1080&q=60&fm=webp` },
    { title: 'Malaysia', href: '#', image: `${CT}/X7b0PdKpWDMzl19jytcJ6/d0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg?w=1080&q=60&fm=webp` },
    { title: 'Maldives', href: '#', image: `${CT}/3hsuR5UvfamJlqKCTM81Ii/b43e484beb8b92c43047174a4a3e7be8/Maldiven__Holzsteg.jpg?w=1080&q=60&fm=webp` },
    { title: 'Philippines', href: '#', image: `${CT}/1o2rtINxvG8y4nqhK5Bvgp/d09a493b9ea9c4db223ad37ba237b646/Philippinen_Palawan_Coron_Lagoone_TCG.png?w=1080&q=60&fm=webp` },
    { title: 'Singapore', href: '#', image: `${CT}/4B5tE96BHxRVFYUVJQibEE/efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg?w=1080&q=60&fm=webp` },
    { title: 'Sri Lanka', href: '/asien/sri-lanka', image: `${CT}/6etzBcZlvbOLHqzCOq0NES/764d862634b04fbcd521a3ad01740f1d/iStock-1779897953.jpg?w=1080&q=60&fm=webp` },
    { title: 'South Korea', href: '#', image: `${CT}/2eRk3wUlchhuTsWYZUzJVg/8b62f957e2292414759f5afd848a72b1/South_Korea-Roadtrip-1.jpg?w=1080&q=60&fm=webp` }
  ]
};

export const whereTo = {
  h2: 'Where to go in Asia?',
  more: 'Show more details',
  less: 'Show fewer details',
  items: [
    { n: '1', title: 'Vietnam', text: 'Whether you are a culture lover, sun worshipper or adventurer – a trip to Vietnam promises every traveller an unforgettable experience. Vietnam\'s rich flora and fauna can also be admired on a journey through its jungle regions.' },
    { n: '2', title: 'Thailand', text: 'The country awaits you with paradise beaches, untouched nature and a fascinating culture waiting to be discovered. Thailand is full of unique views and a varied cuisine that is second to none.' },
    { n: '3', title: 'Sri Lanka', text: 'Whether you like to surf, hike or relax, Sri Lanka is a diverse country that is guaranteed to cast its spell on you. From cultural highlights to breathtaking nature, the island offers everything your heart desires.' },
    { n: '4', title: 'Indonesia', text: 'This dream destination attracts many travellers: here you can not only experience untouched nature with adventurous jungles and paradise beaches, but also enjoy countless activities on land and in the water.' }
  ]
};

export const continents = {
  h2: 'Discover more destinations',
  items: [
    { title: 'Africa', href: '#', image: `${CT}/110ZGS9QqFmnBB6ni7Ffl0/8845a151716a95eee1dbb9110ffd21e3/Botswana.png?w=1080&q=60&fm=webp` },
    { title: 'Europe', href: '#', image: `${CT}/3lm2kLm0CEGQUxkkthxbWU/b2bd740f1613d9428a01cac7aa0e044d/Santorin__Kykladen__Griechenland.png?w=1080&q=60&fm=webp` },
    { title: 'Central America', href: '#', image: `${CT}/7BK4jfJCokGbukoJk9X2ez/1806327847299f23af0f21ff630ede8a/Tulum__Quintana_Roo__Mexiko.png?w=1080&q=60&fm=webp` },
    { title: 'North America', href: '#', image: `${CT}/7JaaC8NKolwJoYTIa75Rpq/75bfec3cdf1925d50f3a9720b4f3cf96/Kluane_National_Park__Yukon__Kanada.png?w=1080&q=60&fm=webp` },
    { title: 'Oceania', href: '#', image: `${CT}/5YRYR3jQ0zwqJHXOJkHFmM/00df957a7053e4f8d25cdc3eec996989/iStock-892407318_NTCG.png?w=1080&q=60&fm=webp` },
    { title: 'South America', href: '#', image: `${CT}/xT3WA3FdSyfcNS9oPAKG4/1375dafef4668b29f446bebe9652dad8/Copacabana__Rio_de_Janeiro__Brasilien.png?w=1080&q=60&fm=webp` },
    { title: 'South Pacific', href: '#', image: `${CT}/2CaqGyKUYlXrDtcZNhlsqS/f93363f6895f5b91509bc31f48874142/Fidschi_Mamanuca_Islands_NTCG.png?w=1080&q=60&fm=webp` },
    { title: 'Middle East', href: '#', image: `${CT}/15XakXECStVh0gEgbFVZ0f/8a0911338094ba04cbe1df0745131ab0/Maskat__Oman.png?w=1080&q=60&fm=webp` },
    { title: 'Scandinavia', href: '#', image: `${CT}/6gnWmPBOc8TJcn39VFU072/a471dfd247e202cd4724b6c8f25d4f97/Cabin_aurora_Lappland_Schweden.jpg?w=1080&q=60&fm=webp` },
    { title: 'Southern Africa', href: '#', image: `${CT}/1Aoj5rqx89CGLZKPAO79H8/93c20bd7ba91702375ebcbab182078f4/Maun__Botswana.jpg?w=1080&q=60&fm=webp` },
    { title: 'Southeast Asia', href: '#', image: `${CT}/6Nc0kQtRFpF4EoGSJFeqT4/81a42a3805e268f386f5a638c289a5fc/Bali__Indonesien.png?w=1080&q=60&fm=webp` }
  ]
};

export const reviews = {
  h2: 'Customers about Hi Tours',
  items: [
    { name: 'Priya & Arjun', title: 'Our Bali honeymoon was flawless', date: '12 March 2026', stars: 5, image: `${CT}/18mXctwKz7ZEDco4fUE11a/213ded3b470c83fdd00ffdb1af83c044/Indonesien__Bali__Nusa_Dua.jpg?w=1080&q=60&fm=webp`, text: 'Every hotel, transfer and activity was planned around what we wanted. Our travel expert answered every question within hours and the app kept all our documents in one place. We did not have to worry about a single thing.' },
    { name: 'Rohan M.', title: 'Japan done right', date: '28 January 2026', stars: 5, image: `${CT}/4Dpbtbz1Avc7EO5gPwBSoW/5d3830d037809cb2622726a5bebc5d2f/Japan__Kyoto__Kinkaku-ji.jpg?w=1080&q=60&fm=webp`, text: 'Tokyo, Kyoto and Osaka in two weeks with rail passes, hand-picked ryokans and a tea ceremony we still talk about. The itinerary felt personal, not off the shelf, and the price was fair for the quality.' },
    { name: 'Sneha K.', title: 'Thailand with the whole family', date: '5 December 2025', stars: 5, image: `${CT}/2zOFZe2JpEvWVQygwaD3Co/ba319d0063fcffe43731a32a62320c77/Thailand__Krabi__Phang_Nga_Bay.jpg?w=1080&q=60&fm=webp`, text: 'Travelling with two kids and grandparents is not easy, but Hi Tours made it effortless. Family rooms, private transfers and a perfect mix of beach days and sightseeing. 24/7 support gave us real peace of mind.' }
  ]
};

const guide = [
  { id: 'time', label: 'The best time to visit Asia', icon: 'sun', href: '#' },
  { id: 'duration', label: 'The ideal trip duration for Asia', icon: 'calendar', href: '#' },
  { id: 'costs', label: 'Asia holiday: costs at a glance', icon: 'wallet', href: '#' }
];
const inspiration = [
  { id: 'food', label: 'Food in Asia: top 10 dishes', icon: 'food', href: '#' },
  { id: 'sights', label: 'The best sights in Asia', icon: 'landscape', href: '#' },
  { id: 'activities', label: 'Top 10 activities in Asia', icon: 'kayak', href: '#' },
  { id: 'beaches', label: 'The most beautiful beaches in Asia', icon: 'beach', href: '#' },
  { id: 'islands', label: 'The most beautiful islands of Asia', icon: 'island', href: '#' }
];

export const tabs = [
  { key: 'about', label: 'Our specialists', target: 'about' },
  { key: 'tours', label: 'Asia holidays', target: 'tours' },
  { key: 'countries', label: 'Countries', items: countries.items.map((c) => ({ id: c.title, label: c.title, icon: 'pin', href: c.href })) },
  { key: 'guide', label: 'Travel guide', items: guide },
  { key: 'inspiration', label: 'Inspiration', items: inspiration }
];
