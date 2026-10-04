// Homepage content (frontend-only mock). Copy in English, assets from the original Hi Tours CDNs.
const cf = (path, q = 'w=800&q=60&fm=webp') => `https://images.ctfassets.net/bth3mlrehms2/${path}?${q}`;

export const nav = {
  banner: 'Worry-free planning: stable flight prices for over a year, plus flexible rebooking and cancellation options.',
  links: [
    { label: 'Destinations', menu: true },
    { label: 'Trip types', menu: true },
    { label: 'Activities', menu: true },
    { label: 'Deals' },
    { label: 'About us' }
  ],
  phone: 'Expert advice',
  login: 'Login'
};

export const expertAdvice = {
  title: 'Expert advice',
  openLabel: 'Available now!',
  closedLabel: 'Outside opening hours.',
  existing: 'For questions about an existing trip',
  portal: 'Service portal',
  planning: 'For planning your next trip',
  phone: '+91 89206 06060',
  phoneHref: 'tel:+918920606060',
  whatsappHref: `https://wa.me/918920606060?text=${encodeURIComponent('Hi, I’d like to plan my dream trip. Can you help me?')}`,
  hours: ['Mon – Fri (excl. holidays): 9 am – 8 pm', 'Sat (excl. holidays): 10 am – 6 pm', 'All times IST'],
  schedule: { 1: [9, 20], 2: [9, 20], 3: [9, 20], 4: [9, 20], 5: [9, 20], 6: [10, 18] },
  cta: 'Plan for free'
};

export const hero = {
  title: ['Exquisitely crafted luxury', 'honeymoons & holidays'],
  searchPlaceholder: 'Where would you like to go?',
  searchPlaceholderMobile: 'Where to?',
  searchPlaceholderStyle: "What's your travel style?",
  searchPlaceholderStyleMobile: 'Travel style?',
  searchEmptyTitle: 'Destination not available',
  searchEmptyText: 'Try searching for a different destination or travel style for trip ideas.',
  searchStyleTag: 'Travel style',
  cta: 'Plan for free',
  subtitle:
    'Hi Tours creates unforgettable travel experiences and supports you with real expertise and individual service – from inspiration to return.',
  collage: {
    xs: 'https://tourlane-dm-images.imgix.net/hp/de/header-xs.png?w=640&auto=format&fit=max&bg=FBF9F1',
    sm: 'https://tourlane-dm-images.imgix.net/hp/de/header-sm.png?w=768&auto=format&fit=max&bg=FBF9F1',
    md: 'https://tourlane-dm-images.imgix.net/hp/de/header-md.png?w=1024&auto=format&fit=max&bg=FBF9F1',
    lg: 'https://tourlane-dm-images.imgix.net/hp/de/header-lg.png?w=1280&auto=format&fit=max&bg=FBF9F1',
    xl: 'https://tourlane-dm-images.imgix.net/hp/de/header-xl.png?w=1920&auto=format&fit=max&bg=FBF9F1'
  }
};

export const trust = { label: 'Excellent', score: '4.5', outOf: 'out of 5', count: '5,748', reviews: 'reviews', rating: 4.5 };

export const ratings = {
  google: { score: 4.7, count: '3,200+', label: 'Google reviews' },
  tripadvisor: { score: 4.9, count: '2,100+', label: 'Tripadvisor reviews' }
};

export const features = {
  heading: 'Your trip, planned by pros',
  items: [
    { icon: '/pros/experts.png', title: 'Real travel experts', text: 'Benefit from our local expert knowledge and award-winning service.' },
    { icon: '/pros/organised.png', title: 'Fully organised', text: 'We take care of every detail – from inspiration to homecoming.' },
    { icon: '/pros/easy.png', title: 'Travel made easy', text: 'Whether multi-stop or country combo, we make your travel wishes come true.' }
  ]
};

export const ambassadors = {
  heading: 'Talking Travel with Hi Tours',
  subheading: 'Voices from TV, media and culture',
  text:
    'Those who travel a lot know what matters. That is why well-known personalities trust Hi Tours – to experience extraordinary trips planned individually, personally and down to the last detail.',
  cta: 'Learn more',
  images: ['/home/on-the-road.webp']
};

export const comparison = {
  heading: 'Why Hi Tours is worth it',
  colAlone: 'On your own',
  colHiTours: 'With Hi Tours',
  rows: [
    { text: 'More than 50 destinations worldwide to discover', alone: true },
    { text: 'All-round travel service (hotel / flight / transfer / activities)', alone: false },
    { text: 'A personal travel expert for the planning', alone: false },
    { text: 'Insider tips and tailored recommendations', alone: false },
    { text: 'Minimal time spent planning the trip', alone: false },
    { text: 'Entire booking through a single provider', alone: false },
    { text: 'Flexible cancellation and rebooking options for the whole trip', alone: false },
    { text: 'Customer service and 24-hour emergency assistance while travelling', alone: false }
  ]
};

export const moments = {
  heading: 'Unforgettable Hi Tours moments',
  subheading: 'More than 150,000 delighted travellers',
  cta: 'Plan your trip',
  avatars: [
    cf('1W5rwBgpzW3Oknz3zEG8lI/1b40a54517258274685f32a3e9f1bb78/usa_family.jpg', 'w=64&q=60&fm=webp'),
    cf('7aiJAepiAkFd0fdEi5mPEX/7634da5cd986ad0e63f91d52a3eb9e8d/iceland_couple.jpg', 'w=64&q=60&fm=webp'),
    cf('1KRVeu7Hv6eXMHjrvIwo6h/ad6802af5abb475b1b4f7354c321bba2/thailand_couples.jpg', 'w=64&q=60&fm=webp'),
    cf('2lDVEIUref86ek5dIhSQhP/50bf83adc99a8c2bab5e3204b2c4add6/australia_couple.jpg', 'w=64&q=60&fm=webp')
  ],
  items: [
    { title: 'Sri Lanka gave our family the perfect escape into nature', name: 'The Sharma Family', image: '/moments/forest_family.webp' },
    { title: 'Spotting a wild koala made my solo Australia trip even more special', name: 'Kavya', image: '/moments/kangaroo.webp' },
    { title: 'That Santorini sunset was the perfect ending to our Greece getaway', name: 'Simran & Aditya', image: '/moments/santorini.webp' },
    { title: 'Getting close to the giant tortoises made Seychelles truly special.', name: 'Ishita', image: '/moments/tortoise.webp' },
    { title: 'Seeing the Northern Lights in Tromsø felt like a dream come true', name: 'Meera & Kunal', image: '/moments/northern_lights.webp' },
    { title: "Exploring New Zealand's mountains together was a family memory to cherish", name: 'The Shah Family', image: '/moments/family_trip.webp' },
    { title: 'The Swiss Alps in summer were the perfect mix of adventure and calm', name: 'Ananya & Rohan', image: '/moments/alps.webp' },
    { title: "Paris with our family gave us memories we'll always cherish", name: 'The Mehra Family', image: '/moments/eiffel_family.webp' },
    { title: 'Meeting pandas up close was our favourite memory from Chengdu', name: 'Ishita', image: '/moments/panda.webp' },
    { title: 'Our Maasai Mara safari brought us closer to the wild than ever', name: 'Rahul & Priya', image: '/moments/safari.webp' }
  ]
};

export const steps = {
  heading: 'Step by step to your trip',
  items: [
    { n: 1, title: 'Choose destination', text: 'Want to make your dream trip come true? Tell us a few details – your desired destination, preferences, budget – and receive a free, personalised travel offer in under 1 minute.' },
    { n: 2, title: 'Customise', text: 'In a 30-minute phone or video call we connect you with an expert who tailors your route even more to you – with insider knowledge of every destination.' },
    { n: 3, title: 'Book', text: 'Confirm the offer and look forward to your trip! We take care of everything else with our all-round service – and we are there for you on the road with our 24-hour emergency assistance.' }
  ]
};

const trip = (o) => ({
  ...o,
  images: o.images.map(([path, tag]) => ({ src: /^https?:\/\//.test(path) ? path : cf(path, 'w=700&q=60&fm=webp'), tag }))
});

export const showcase = {
  heading: 'This could be your next dream trip',
  createdFor: 'Crafted specially for',
  trips: [
    trip({
      tab: 'Vietnam', title: 'Vietnam honeymoon', cta: 'Plan your Vietnam trip now',
      duration: '15 days', stops: '8 stops', transport: 'Private driver', activities: 11, hotels: 7, transfers: 6,
      tags: [['bed', 'Boutique hotels'], ['boat', 'Halong Bay cruise'], ['bike', 'Motorbike'], ['food', 'Street food'], ['plane', 'Direct flights']],
      customer: "Prajakta & Sneha's honeymoon", quote: 'From a Halong Bay cruise to lantern-lit Hoi An nights, every single day felt handcrafted just for us.', avatar: cf('1KRVeu7Hv6eXMHjrvIwo6h/ad6802af5abb475b1b4f7354c321bba2/thailand_couples.jpg', 'w=128&q=60&fm=webp'),
      images: [
        ['3Z7A5HXNMctqsB6GE2jphI/4cef5ccca7d896a0b4f88281499fec30/Halong_Bucht_Vietnam.jpg', 'HalongBay'],
        ['1oona4EHxFNonfYfpgKQRu/fd45a84873954f50c0192a904b5c13db/Hoi_An_Vietnam_2.jpg', 'HoiAn'],
        ['5ujKcctP43Y7HHOFAKvWIU/4e29a70d5c0657d946762c42bd2f1eb5/Sapa_Vietname.jpg', 'Sapa'],
        ['3qsQDApUiMDejmmNxXcr0g/3bd51ca9fa429966c8ba194946b30cb1/Pagode_Hanoi.png', 'Hanoi'],
        ['1Tm427NrLOOFiGLG2qNwBX/b525194ba3f361bacdd2938831843a3a/Phu_Quoc_Vietnam.jpg', 'PhuQuoc']
      ]
    }),
    trip({
      tab: 'Sri Lanka', title: 'Sri Lanka family tour', cta: 'Plan your Sri Lanka trip now',
      duration: '12 days', stops: '6 stops', transport: 'Private driver', activities: 9, hotels: 6, transfers: 5,
      tags: [['bed', 'Heritage bungalows'], ['safari', 'Leopard safari'], ['leaf', 'Tea country'], ['food', 'Rice & curry'], ['plane', 'Direct flights']],
      customer: 'the Fernando family', quote: 'Climbing Sigiriya rock at dawn and tea-tasting in the misty hills – the kids still talk about all of it.', avatar: cf('1W5rwBgpzW3Oknz3zEG8lI/1b40a54517258274685f32a3e9f1bb78/usa_family.jpg', 'w=128&q=60&fm=webp'),
      images: [
        ['4ty416HtZ5fnIJe5U94pUn/04e383acf72b20230360d6cdeb960993/Sigiriya_Sri_Lanka.jpg', 'Sigiriya'],
        ['52ZxIJbx0zC3QmeXtTjVpo/b109083307d8ee990f394165679c4ccc/Sri_Lanka__Ella__Neun-Bogen-Br%C3%BCcke.jpg', 'EllaBridge'],
        ['1tXogJFN76YCthWrqs1rbz/1efdd4d03c76d7608cf6e4f3ba60ca81/Kandy_Sri_Lanka_-_Tempel_der_Zahn.jpg', 'Kandy'],
        ['4rykn5ApXvQcEXp8oC8cZo/91be5b5717fe6e55ea0dd489b344279d/SriLanka_NuwaraEliya.jpg', 'NuwaraEliya'],
        ['2Qmktfpd63iN6dIbGQVV5a/a739f37a3d1bd5d3613cbe380b96394d/Hikkaduwa_Sri_Lanka.jpg', 'Hikkaduwa']
      ]
    }),
    trip({
      tab: 'Thailand', title: 'Thailand island escape', cta: 'Plan your Thailand trip now',
      duration: '14 days', stops: '8 stops', transport: 'Transfers', activities: 10, hotels: 7, transfers: 6,
      tags: [['bed', 'Glamping in the jungle'], ['island', 'Island hopping'], ['bike', 'Motorbike'], ['food', 'Local specialities'], ['plane', 'Stopover in Dubai']],
      customer: "Marc & Sofie's island escape", quote: 'Glamping in the jungle one night, island hopping the next – Hi Tours matched our pace perfectly.', avatar: cf('7aiJAepiAkFd0fdEi5mPEX/7634da5cd986ad0e63f91d52a3eb9e8d/iceland_couple.jpg', 'w=128&q=60&fm=webp'),
      images: [
        ['A2kAwcfVxbWxQRQIqLVcM/5e25b1e33b9bc306e834fcfe2f8a99b6/THA_-_-KhaoSok.png', 'KhaoSok'],
        ['s0tM0ptUexcdfhU4HTwgh/64c82b916559b0a460fa3fca5ebad20a/THA_-_-Phuket.png', 'Phuket'],
        ['7HtZOrGdjOUTb867vNotZS/8d943ee4512ca1f877e214b533104956/THA_-_-MingMongkolBuddha.png', 'MingMongkolBuddha'],
        ['5SBGUEdaCyRBPiktrtmzaX/09c6c1fc53fb1daffcd491e0182493eb/THA_-_-MayaBay.png', 'MayaBay'],
        ['SM5V0pOzqkcZYtxbL69wU/62ac1dea663f5d24355ac47b579002c5/THA_-_-FreedomBeach.png', 'FreedomBeach']
      ]
    }),
    trip({
      tab: 'Singapore', title: 'Singapore city break', cta: 'Plan your Singapore trip now',
      duration: '6 days', stops: '4 stops', transport: 'Metro & transfers', activities: 9, hotels: 4, transfers: 4,
      tags: [['bed', 'Rooftop-pool hotels'], ['garden', 'Gardens by the Bay'], ['food', 'Hawker feasts'], ['family', 'Family-friendly'], ['plane', 'Direct flights']],
      customer: "Aditi & Rohan's city break", quote: 'Gardens by the Bay after dark and hawker feasts by day – Singapore packed so much magic into a few days.', avatar: cf('2lDVEIUref86ek5dIhSQhP/50bf83adc99a8c2bab5e3204b2c4add6/australia_couple.jpg', 'w=128&q=60&fm=webp'),
      images: [
        ['4B5tE96BHxRVFYUVJQibEE/efeae2ee825eda4d08a95e0717d916fd/Skyline__Singapur.jpg', 'MarinaBay'],
        ['https://images.unsplash.com/photo-1605425183435-25b7e99104a4?crop=entropy&cs=srgb&fm=jpg&q=80&w=900', 'GardensByTheBay'],
        ['1S1CFngY8la37r0DqH3xb1/8052b7405ea5431391f2be4fba023227/Jalan_Besar_Singapore_2.jpg', 'Chinatown'],
        ['https://images.unsplash.com/photo-1499359875449-10bbeb21501e?crop=entropy&cs=srgb&fm=jpg&q=80&w=900', 'SupertreeGrove'],
        ['https://images.unsplash.com/photo-1508597370841-836e72ef6f54?crop=entropy&cs=srgb&fm=jpg&q=80&w=900', 'BayFront']
      ]
    }),
    trip({
      tab: 'Malaysia', title: 'Malaysia discovery', cta: 'Plan your Malaysia trip now',
      duration: '13 days', stops: '7 stops', transport: 'Rental car', activities: 10, hotels: 7, transfers: 6,
      tags: [['bed', 'Rainforest lodges'], ['tower', 'Petronas Towers'], ['safari', 'Orangutan sanctuary'], ['food', 'Street markets'], ['plane', 'Direct flights']],
      customer: "Imran & Zara's honeymoon", quote: 'From the Petronas Towers to orangutans in Borneo, Malaysia surprised us with something new every single day.', avatar: cf('1VwYM421DcfxO71gvjf7K0/1349a0615821b755ac5b97b886a5b5dd/tanzania_couple.jpg', 'w=128&q=60&fm=webp'),
      images: [
        ['7v9STD4EzC9uO1vB6vl2SC/2d6be37e8ab85ac375ae2d2ac46ec9b0/Malaysia__Kuala_Lumpur__Petronas_Towers.jpg', 'PetronasTowers'],
        ['X7b0PdKpWDMzl19jytcJ6/d0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg', 'Ipoh'],
        ['51tkEfILsnNr3oDIU4ElpU/bc3ac3dac83ed5c1f18aa7024e8f1c32/Malaysia__George_Town.jpg', 'GeorgeTown'],
        ['6tQ0fuewJsT1XGyPtk1feM/46e2bf106f4544461abd40528a72610e/Sonnenaufgang_Wolken_Cameron-Highlands_Malaysia.png', 'CameronHighlands'],
        ['75OivhbWUIcq5PlUmpmA1j/30161b201b3fd087f637ed6b5cfb5ecd/Malaysia__Sabah__Sepilok-Orang-Utan-Rehabilitationszentrum.jpg', 'Sabah']
      ]
    })
  ]
};

export const adventure = {
  heading: 'Start your next adventure',
  images: {
    left: '/home/adventure-left.webp',
    right: '/home/adventure-right.webp'
  }
};

export const experts = {
  heading: 'Meet our travel experts',
  cta: 'Discover the Hi Tours experts',
  items: [
    { name: 'Gurpreet', role: 'Travel expert for South Africa', experience: '6 years of experience', specialties: ['Honeymoons', 'Safari'], photo: '/experts/gurpreet.webp' },
    { name: 'Aditya', role: 'Travel expert for Sri Lanka', experience: '3 years of experience', specialties: ['Family-friendly travel', 'Road trips'], photo: '/experts/devendra.webp' },
    { name: 'Rahul', role: 'Travel expert for Switzerland', experience: '5 years of experience', specialties: ['Road trips', 'Culinary recommendations'], photo: '/experts/aditya.webp' },
    { name: 'Sharon', role: 'Travel expert for Thailand', experience: '3 years of experience', specialties: ['Honeymoons', 'Active travel'], photo: '/experts/sharon.webp' },
    { name: 'Karan Malhotra', role: 'Travel expert for Egypt', experience: '15 years of experience', specialties: ['Active travel', 'Culture tips'], photo: '/experts/abhay.webp' },
    { name: 'Raghav', role: 'Travel expert for Italy', experience: '6 years of experience', specialties: ['Culture tips', 'Culinary recommendations'], photo: '/experts/raghav.webp' },
    { name: 'Riya', role: 'Travel expert for Vietnam', experience: '1 year of experience', specialties: ['Road trips', 'Active travel'], photo: '/experts/riya.webp' }
  ]
};

export const testimonials = {
  heading: 'What our customers say',
  cta: 'Plan for free now',
  items: [
    { trip: 'South Africa trip', name: 'Joachim Bader', stars: 5, date: '15.07.2025', avatar: 'https://user-images.trustpilot.com/61db168b03f66e00125b0bcc/73x73.png?w=96&q=50&auto=format&fit=max', text: 'Very friendly and competent advice, very good offers for hotels, activities and tours! Everything worked out wonderfully, before and after the trip! Great organisation of rental cars and flights! Thank you! Gladly again!', image: cf('2ZRFVQGZoHg5iVdJdeUWZs/bf695dd6e609f6a163d827dfdc611780/S_dafrika__Sandd_nen.jpg', 'w=720&q=60&fm=webp') },
    { trip: 'Scotland trip', name: 'Gander-Malin Andrea', stars: 5, date: '21.06.2025', text: 'From planning to support, an all-round good service! Even when things do not run smoothly, a 24-hour service is immediately on hand and sorts everything out smoothly.', image: cf('3rbjFrLhAs5uDVkcAqxzRR/8cb6d84e56b711eefa18ec491c4d3fb9/Loch_Leven__Glencoe__Schottland-2.jpg', 'w=720&q=60&fm=webp') },
    { trip: 'Canada trip', name: 'Jürgen F.', stars: 4, date: '22.05.2025', text: 'Detailed expert knowledge of Canada and the suggested route, as if the knowledge were based on personal experience. Great empathy and implementation of our wishes.', image: cf('3RCOXspm18MQwUfIVush4U/771e902adcbfec26aab1bfb1e90f2fc0/Kanada_JasperNationalpark.jpg', 'w=720&q=60&fm=webp') },
    { trip: 'Namibia trip', name: 'Horst Wagner', stars: 5, date: '01.05.2025', text: 'The trip planning, the personal conversations and also the app were very good. We enjoyed the trip very much and it was simply dreamlike.', image: cf('5qxWcFeQhJQowf0OrdLTUa/6196c6f8aa648c38d4369b64bc9f602f/Namibia_NamibNaukluftNationalPark.jpg', 'w=720&q=60&fm=webp') },
    { trip: 'Sri Lanka trip', name: 'Daniel Boulton', stars: 5, date: '01.05.2025', text: 'Very professional trip planning, competent staff, good service – all this led to a dreamlike trip that we took in April 25 in Sri Lanka. Thank you!', image: cf('4rykn5ApXvQcEXp8oC8cZo/91be5b5717fe6e55ea0dd489b344279d/SriLanka_NuwaraEliya.jpg', 'w=720&q=60&fm=webp') },
    { trip: 'Australia trip', name: 'Uwe Deyerling', stars: 5, date: '07.04.2025', text: 'The Australia trip was perfectly planned and everything worked out wonderfully! From the rental car to excursions and the accommodations were very well organised.', image: cf('1YEReQX7V6V9r15obWzGf5/cda2072920d91903ae29ead89a7596f2/Australien__Queensland__Cairns.jpg', 'w=720&q=60&fm=webp') },
    { trip: 'Thailand trip', name: 'Bernd', stars: 5, date: '02.04.2025', text: 'Almost perfectly organised round trip in the south of Thailand. Very good selection of accommodations and of the activities and excursions.', image: cf('3gQgz2hwHuBBxPSwC4w0Eu/37b99341ffec8c150d1e8d1f4874e81e/Koh_Phangan.jpg', 'w=720&q=60&fm=webp') }
  ]
};

export const destinationsHeading = 'Discover our extraordinary destinations';

export const newsletter = {
  heading: 'Experience the best of travel',
  text: 'Unique itineraries, secret insider tips and the best deals: subscribe to our newsletter and dive into our world of travel. Unsubscribe at any time.',
  privacy: 'Privacy policy',
  placeholder: 'Your email address',
  cta: 'Subscribe now',
  success: 'Thank you! Please check your inbox to confirm your subscription.',
  bullets: [
    { icon: 'idea', text: 'Inspiring travel ideas' },
    { icon: 'percent', text: 'Exclusive offers & benefits' },
    { icon: 'headset', text: 'Insider tips from experts' }
  ],
  image: '/home/newsletter-right.webp',
  imageLeft: '/home/newsletter-left.webp'
};

export const footer = {
  description: 'Hi Tours creates unforgettable travel experiences and supports you with real expertise and individual service – from inspiration to return.',
  columns: [
    { title: 'Hi Tours', links: ['About us', 'Travel with us', 'Reviews'] },
    { title: 'Destinations', links: ['Vietnam', 'Sri Lanka', 'Thailand', 'Singapore', 'Malaysia', 'Egypt', 'Maldives', 'Kazakhstan', 'Bhutan', 'More destinations'] }
  ],
  care: { title: 'Hi Tours Care', lines: ['Book worry-free', 'Flexible rebooking and cancellation'], cta: 'Learn more' },
  country: 'India',
  legal: ['Privacy', 'Terms & Conditions', 'Expert advice']
};
