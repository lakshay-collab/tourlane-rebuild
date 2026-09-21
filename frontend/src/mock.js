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
  phone: '+91 22 6140 1500',
  phoneHref: 'tel:+912261401500',
  hours: ['Mon – Fri (excl. holidays): 9 am – 8 pm', 'Sat (excl. holidays): 10 am – 6 pm', 'All times IST'],
  schedule: { 1: [9, 20], 2: [9, 20], 3: [9, 20], 4: [9, 20], 5: [9, 20], 6: [10, 18] },
  cta: 'Plan for free'
};

export const hero = {
  title: ['Exquisitely crafted luxury', 'honeymoons & holidays'],
  searchPlaceholder: 'Where would you like to go?',
  searchPlaceholderMobile: 'Where to?',
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
  cta: 'Get started for free',
  items: [
    { icon: '/StarLike.svg', title: 'Real travel experts', text: 'Benefit from our local expert knowledge and award-winning service.' },
    { icon: '/Tickets.svg', title: 'Fully organised', text: 'We take care of every detail – from inspiration to homecoming.' },
    { icon: '/Destination.svg', title: 'Travel made easy', text: 'Whether multi-stop or country combo, we make your travel wishes come true.' }
  ]
};

export const ambassadors = {
  heading: 'On the road with Hi Tours',
  subheading: 'Voices from TV, media and culture',
  text:
    'Those who travel a lot know what matters. That is why well-known personalities trust Hi Tours – to experience extraordinary trips planned individually, personally and down to the last detail.',
  cta: 'Learn more',
  images: [
    cf('6ukED2YGVhw5AgrnKYAwe6/64dfa5b7f35b779d8b0fe3b8d1355b84/Ambassadors_Homepage_Module_01.png', 'w=1400&q=70&fm=webp'),
    cf('5kYtSQxnWHsYulaVFu9GhC/ef4a6ed7d4548aab56f8c4764f260e87/Ambassadors_Homepage_Module_02.png', 'w=1400&q=70&fm=webp')
  ]
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
    { title: 'Riding the train through the tea fields of Sri Lanka', name: 'Sophia and Jonas', image: cf('1dQ7d5CgcY0b4H47L6ZFco/da54c9701bb26be3c0b83cf61efcfa0d/Hi ToursMoments2_TGrading_ResizedHQ_10__1_.png', 'w=520&q=60&fm=webp') },
    { title: 'Discovering that giraffes have blue-black tongues', name: 'Petra', image: cf('x9b7lqPNy2lQx7yhJjDXi/8f867b8ef57c91370ccfdd0f855dfaca/Hi ToursMoments2_TGrading_ResizedHQ__1_.png', 'w=520&q=60&fm=webp') },
    { title: 'Travelling alone for the first time to finally see sequoias', name: 'Sven', image: cf('3h3BnZFYsZclZv4Q9y4WEJ/6f77d190f67214e1ce70c367a333d387/Hi ToursMoments2_TGrading_ResizedHQ_9__1_.png', 'w=520&q=60&fm=webp') },
    { title: 'Feeding the giant tortoises in the Seychelles', name: 'Josephine', image: cf('6IClyztxwJ0cagUFzZxl72/0d433c2a885d2775596ee0089f7d5ef1/jose_phiiine_Seychelles.png', 'w=520&q=60&fm=webp') },
    { title: 'Sleeping under the starry sky of Botswana', name: 'Daniel and Laura', image: cf('6z7P0FZ5GShUpT5Z5t9jeV/18757623b9f838bbf9d2d388f618c5c3/Hi ToursMoments2_TGrading_ResizedHQ_4.png', 'w=520&q=60&fm=webp') },
    { title: 'Showing a 6-year-old the Grand Canyon from above', name: 'Miriam, Sebastian and Noah', image: cf('6xpboCcJswsUTdugksbGJP/4a02c2377400555ac65ff3240d4c4e99/Grand_canyon.jpg', 'w=520&q=60&fm=webp') },
    { title: 'Relaxing with a mud mask in Iceland’s lagoons', name: 'Gauthier', image: cf('2kpFC0Gsi00VzrDASMLD7y/fd37e9928cb47782062fcad51c0ad384/Hi ToursMoments2_TGrading_ResizedHQ_8__1_.png', 'w=520&q=60&fm=webp') },
    { title: 'Travelling Namibia with three generations', name: 'Karina and her family', image: cf('2qXzDmsIm4yphVesAT7GAH/b91211db32330a966e999146a8a41230/Hi ToursMoments2_TGrading_ResizedHQ_5.png', 'w=520&q=60&fm=webp') },
    { title: 'Celebrating a milestone birthday in the rainforest', name: 'Gregor', image: cf('7qfRHsMsKGbKwqYEJQrHyN/6222ee23dab05d6d251ecf053b1069eb/Hi ToursMoments2_TGrading_ResizedHQ_7.png', 'w=520&q=60&fm=webp') },
    { title: 'Finally seeing the Big Five on safari', name: 'Karl-Heinz, Michael and Susanne', image: cf('6kTfWQ3BBlANQNE9nSHQ3C/773f286b7aa097be5705cd19d2e41be6/Hi ToursMoments2_TGrading_ResizedHQ_2.png', 'w=520&q=60&fm=webp') }
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
  images: o.images.map(([path, tag]) => ({ src: cf(path, 'w=700&q=60&fm=webp'), tag }))
});

export const showcase = {
  heading: 'This could be your next dream trip',
  createdFor: 'Crafted specially for',
  trips: [
    trip({
      tab: 'Canada', title: 'Family road trip through Canada', cta: 'Plan your Canada trip now',
      duration: '13 days', stops: '7 stops', transport: 'Rental car', activities: 8, hotels: 6, transfers: 5,
      tags: [['bed', 'Boutique hotels'], ['tower', 'CN Tower'], ['car', 'Vintage cars'], ['family', 'Family-friendly'], ['plane', 'Stopover in Iceland']],
      customer: "Daniel & Laura's family road trip", quote: 'Every stop was planned for us – the kids still talk about the vintage-car day in Toronto and the Niagara boat ride.', avatar: cf('1W5rwBgpzW3Oknz3zEG8lI/1b40a54517258274685f32a3e9f1bb78/usa_family.jpg', 'w=128&q=60&fm=webp'),
      images: [
        ['3n8hNDrWSt9sW4LeQoM1lU/f58618d738867aeb21a2d265392a85f6/CAN_-_-MoraineLake.png', 'MoraineLake'],
        ['29X11RG3tE7AlGru2Fh8Zw/3d2aa405c0695689011b479dbf6de449/CAN_-_-Tofino.png', 'Tofino'],
        ['6nF1n75lzjhRb1XHd6aFrI/739228e337611cf2f36f95e0ac2594a1/CAN_-_-Toronto.png', 'Toronto'],
        ['25u7uX2j5fvmYLW5DOhwll/373d5c0d3bcff212715742030f115cee/CAN_-_-Ottawa.png', 'Ottawa'],
        ['71m2PWbnDAnGrseQc401jK/faeb942d0f09bc538885496ee96ddbeb/CAN_-_-Niagara.png', 'Niagara']
      ]
    }),
    trip({
      tab: 'Iceland', title: 'Outdoor adventure in Iceland', cta: 'Plan your Iceland trip now',
      duration: '14 days', stops: '7 stops', transport: 'Rental car', activities: 9, hotels: 6, transfers: 4,
      tags: [['bed', 'Tiny houses'], ['aurora', 'Northern lights'], ['car', 'Electric vehicle'], ['leaf', 'Vegetarian'], ['plane', 'Direct flights']],
      customer: 'the Thomas family', quote: 'From the northern lights to our tiny house by the glacier, everything was arranged before we landed. We just enjoyed Iceland.', avatar: cf('7aiJAepiAkFd0fdEi5mPEX/7634da5cd986ad0e63f91d52a3eb9e8d/iceland_couple.jpg', 'w=128&q=60&fm=webp'),
      images: [
        ['gW0adNKiWn5bCjNPojuoU/060852b0731840da58a9bd763f880a7d/ISL_-_-%C3%83_ingvellir.png', 'Þingvellir'],
        ['31rmk7sbcl3aeEK7VnOwEf/4fae5727dd432b3986ecfd0f3e5cdd49/ISL_-_-Ingo%C3%8C_lfsho%C3%8C_f%C3%83_i.png', 'Ingólfshöfði'],
        ['1farYVTEZge1ifBnK8SZqN/6d17af9825bf13a860da5193e8d4dcd2/ISL_-_-Polarlichter.png', 'NorthernLights'],
        ['PAD4UW6QFtDdNuzMX4aPf/b3236ae2fe38a8952cd777dbf3494d4f/ISL_-_-Hochland.png', 'Highlands'],
        ['7iEFmxlwrvo3XH7fuwOIbu/300a55a0ababf324bd8fcc33126fe045/ISL_-_-Reykjavi%C3%8C_k.png', 'Reykjavík']
      ]
    }),
    trip({
      tab: 'Thailand', title: 'Asian adventure with friends', cta: 'Plan your Thailand trip now',
      duration: '20 days', stops: '11 stops', transport: 'Transfers', activities: 12, hotels: 7, transfers: 10,
      tags: [['bed', 'Glamping in the jungle'], ['island', 'Island hopping'], ['bike', 'Motorbike'], ['food', 'Local specialities'], ['plane', 'Stopover in Dubai']],
      customer: "Marc, Sofie, Oskar & Kira's trip with friends", quote: 'Glamping in the jungle one night, island hopping the next – Hi Tours matched our pace perfectly.', avatar: cf('1KRVeu7Hv6eXMHjrvIwo6h/ad6802af5abb475b1b4f7354c321bba2/thailand_couples.jpg', 'w=128&q=60&fm=webp'),
      images: [
        ['A2kAwcfVxbWxQRQIqLVcM/5e25b1e33b9bc306e834fcfe2f8a99b6/THA_-_-KhaoSok.png', 'KhaoSok'],
        ['s0tM0ptUexcdfhU4HTwgh/64c82b916559b0a460fa3fca5ebad20a/THA_-_-Phuket.png', 'Phuket'],
        ['7HtZOrGdjOUTb867vNotZS/8d943ee4512ca1f877e214b533104956/THA_-_-MingMongkolBuddha.png', 'MingMongkolBuddha'],
        ['5SBGUEdaCyRBPiktrtmzaX/09c6c1fc53fb1daffcd491e0182493eb/THA_-_-MayaBay.png', 'MayaBay'],
        ['SM5V0pOzqkcZYtxbL69wU/62ac1dea663f5d24355ac47b579002c5/THA_-_-FreedomBeach.png', 'FreedomBeach']
      ]
    }),
    trip({
      tab: 'Namibia', title: 'Wonders of nature in Namibia', cta: 'Plan your Namibia trip now',
      duration: '19 days', stops: '11 stops', transport: 'Rental car', activities: 10, hotels: 7, transfers: 6,
      tags: [['bed', 'Comfortable lodges'], ['safari', 'Wildlife safari'], ['car', '4x4 SUV'], ['leaf', 'Locally grown'], ['plane', 'Premium economy flights']],
      customer: "Simone & Thomas's honeymoon", quote: 'Namibia felt made for two. The lodges, the dunes at sunrise – every detail was thought through for us.', avatar: cf('2lDVEIUref86ek5dIhSQhP/50bf83adc99a8c2bab5e3204b2c4add6/australia_couple.jpg', 'w=128&q=60&fm=webp'),
      images: [
        ['6Edh0HETOpLmc1qLXgkfdt/6eee003e3062a9d209d1f38d7ff0591e/NAM_-_-NamibNaukluft.png', 'NamibNaukluft'],
        ['5M69vhCbfqVmp9iuM0vkd2/eb830409e8d9acf63434aec933d14711/Item-2__4_.png', 'WildlifeSafari'],
        ['249QBudrmKsgTBJIo9Cq4R/18cc6b82a3218c3a2cc8135d79f94b81/NAM_-_-Etosha.png', 'Etosha'],
        ['6F7Wq81OqaVqk2n4yBPfYu/1e3384f62d552d300d93e13c3b48c4a0/NAM_-_-Deadvlei.png', 'Deadvlei'],
        ['2PkNir23oxuYwM3gAcYKm9/37ccb4bdf7a1cb8dcaffd92e584da7e7/NAM_-_-Swakopmund.png', 'Swakopmund']
      ]
    }),
    trip({
      tab: 'Costa Rica', title: 'Pura Vida in Costa Rica', cta: 'Plan your Costa Rica trip now',
      duration: '26 days', stops: '12 stops', transport: 'Rental car', activities: 14, hotels: 9, transfers: 8,
      tags: [['bed', 'Guesthouses'], ['leaf', 'Rainforests'], ['car', 'Round trip'], ['food', 'Gluten-free'], ['plane', 'Business class']],
      customer: "Mike & Ramona's honeymoon", quote: 'Pura Vida from day one. Our expert knew exactly which beaches and rainforest lodges would suit us.', avatar: cf('1VwYM421DcfxO71gvjf7K0/1349a0615821b755ac5b97b886a5b5dd/tanzania_couple.jpg', 'w=128&q=60&fm=webp'),
      images: [
        ['51otFlNM3kkox3VuKTkcja/98eaa82e2241d35681fe41ecaef5a049/colin-meg-yKZZUGBE_0E-unsplash__1_.jpg', 'SantaElena'],
        ['47N2BAQ0NleQcyi8Ht4hCr/3f4abdd3ec35b50e131fc4583519fb72/CRI_-_-BocaTapada.png', 'Wildlife'],
        ['7wuRxnSYsJCnmo1364oTQ8/575c6da322c01a8ed5b4462bf7fcdf62/CRI_-_-SanJose%C3%8C_.png', 'LaFortuna'],
        ['4ATpNdOb9xFBlAERmfN1en/01eaa796669a51e73ddf88da31431d7a/CRI_-_-Pazifikku%C3%83__ste.png', 'PacificCoast'],
        ['4LS3H9b53tEAQ0XczZcgn4/d155921185a5ab678eb529ef2c1a46cc/patricia-palacin-EitAJO7TDLk-unsplash.jpg', 'ArenalVolcano']
      ]
    })
  ]
};

export const adventure = {
  heading: 'Start your next adventure',
  images: {
    left: 'https://tourlane-dm-images.imgix.net/hp/middle-left.png?w=760&q=60&auto=format&fit=max',
    right: 'https://tourlane-dm-images.imgix.net/hp/middle-right.png?w=820&q=60&auto=format&fit=max'
  }
};

export const experts = {
  heading: 'Meet our travel experts',
  cta: 'Discover the Hi Tours experts',
  items: [
    { name: 'Laura Behrens', role: 'Travel expert for South Africa', experience: '6 years of experience', specialties: ['Honeymoons', 'Safari'], photo: cf('57uKXaXzLj1c75yT6j72F0/2ba3f1e3b4e191cb0b75b7bfed96ffc2/TravelExperts_T3_Final1.png', 'w=720&q=60&fm=webp') },
    { name: 'Karan Malhotra', role: 'Travel expert for New Zealand', experience: '15 years of experience', specialties: ['Active travel', 'Culture tips'], photo: cf('3VnsobU9pjKBtPbNAr8qYw/0e8af52d777d1801f4cc0f86d2df00bb/TravelExperts_T3_Final2.png', 'w=720&q=60&fm=webp') },
    { name: 'Mireia Sanchez', role: 'Travel expert for Sri Lanka', experience: '3 years of experience', specialties: ['Family-friendly travel', 'Road trips'], photo: cf('6mQY5mgYB1JdFpHMY1y8zg/b35d05f39d536184dfc0a084b2b617b1/TravelExperts_T3_Final8.png', 'w=720&q=60&fm=webp') },
    { name: 'Marvin Luczynski', role: 'Travel expert for Italy', experience: '5 years of experience', specialties: ['Road trips', 'Culinary recommendations'], photo: cf('6dj19HFS24bMnaTPUOYwvO/dd8a83d4a408d194ef29b0863111b8aa/TravelExperts_T3_Final4.png', 'w=720&q=60&fm=webp') },
    { name: 'Camille Mollon', role: 'Travel expert for Oman', experience: '3 years of experience', specialties: ['Honeymoons', 'Active travel'], photo: cf('6hXNLgdY7gTFcq085c40aL/954a76020254ce67810a819915a6d657/TravelExperts_T3_Final7.png', 'w=720&q=60&fm=webp') },
    { name: 'Constant Le Dantec', role: 'Travel expert for Peru', experience: '6 years of experience', specialties: ['Culture tips', 'Culinary recommendations'], photo: cf('qQMkjDq6JJBlQU8t0W5Cm/f845620f8fb28eda56049e9428042079/TravelExperts_T3_Final10.png', 'w=720&q=60&fm=webp') },
    { name: 'Isabel Blaes', role: 'Travel expert for Iceland', experience: '1 year of experience', specialties: ['Road trips', 'Active travel'], photo: cf('6lFFfNcD6qTC3hvOtCWkI1/2b6a2ba274d3e46a89c17e8838ba3ed5/TravelExperts_T3_Final3.png', 'w=720&q=60&fm=webp') }
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
  image: 'https://tourlane-dm-images.imgix.net/hp/newsletter.png?w=900&q=60&auto=format&fit=max'
};

export const footer = {
  description: 'Hi Tours creates unforgettable travel experiences and supports you with real expertise and individual service – from inspiration to return.',
  columns: [
    { title: 'Hi Tours', links: ['Travel with us', 'Work with us', 'Partnerships', 'Reviews', 'Press', 'App', 'Service portal'] },
    { title: 'Destinations', links: ['Costa Rica', 'Iceland', 'South Africa', 'Tanzania', 'Namibia', 'Canada', 'USA', 'Thailand', 'Japan', 'Australia', 'More destinations', 'Travel calendar'] }
  ],
  care: { title: 'Hi Tours Care', lines: ['Book worry-free', 'Flexible rebooking and cancellation'], cta: 'Learn more' },
  country: 'India',
  legal: ['Imprint', 'Privacy', 'Terms & Conditions', 'Travel advice', 'Cookie settings']
};
