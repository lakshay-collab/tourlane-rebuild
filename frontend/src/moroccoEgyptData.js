// Additional Egypt product for Hi Tours, adapted (facts + imagery) from a
// Morocco & Egypt combined itinerary. All copy rewritten in Hi Tours voice, INR pricing.

const img = (p) => `https://media1.thrillophilia.com/filestore/${p}?w=1000&dpr=1`;

const M = {
  jemaaNight: img('1pvil9k6j0yb3gqpe5spze3yf96f_Place-Jemaa-El-Fna-Marrakech-tomb%C3%A9e-de-la-Nuit.jpg'),
  caption21: img('l36ah5secxqrtkzzs78nka3ar1mc_caption%20(21).jpg'),
  street: img('8nz4eq1aplnpwk4a4xzluwini8j9_shutterstock_778455901.jpg'),
  medina: img('492o88lnkv4m023tw3fbrh2x34dv_shutterstock_2271267477.jpg'),
  souk: img('xis71m832ctr8k9ogn1odp80mklb_shutterstock_2199884557.jpg'),
  koutoubia: img('zlu9jddh9ggala2l9mr4ww4kt992_koutoubia-mosque-marrakech.png'),
  bahia: img('mgvrqfw6m0e223yb20zrooo17d26_Bahia_Palace_large_court.jpg'),
  jemaa: img('5fynh2hh53nw5p7o7kw2fcsnsomv_Jemaa%20el-Fnaa,%20Marrakech.webp'),
  majorelle: img('tmdcpitj91ij04rqlx8mjizi3i7a_download.png'),
  hammam: img('yfxluwlftsktf0ldevffo8yr9d9d_shutterstock_2440991963.jpg'),
  mamounia: img('i7pq9d9z7vydg0uf2vso5jfsjv4f_La%20Mamounia1.jpg'),
  mogador: img('wk9ypp8rlj8xvu3htyn7ufy68rg4_download%20(6).jpg')
};
const C = {
  banner: img('fb9ffnjydwglzuqc5fsvpetcwkgm_shutterstock_2169604227.jpg'),
  coast: img('5pv3wbfn8g8s4jlb9pfoj41axv9e_shutterstock_2385643255.jpg'),
  city: img('72bpdczzxt3d41vyhgsre9o25zbz_shutterstock_2245673125.jpg'),
  hassan: img('ukqvlib72sssnk468v3658k20x0h_1617781988_100d1f000001goskhFAFD.png'),
  chef1: img('k65r35zeecuu8ny934tdwanzsacd_shutterstock_2543052287.jpg'),
  chef2: img('odquhr7q2t1oyu5zttwih70egkxa_shutterstock_2159764503.jpg'),
  chef3: img('tj3a6h24bdhbrsb0iv8g4r2vmqcr_shutterstock_1249099867.jpg'),
  fourSeasons: img('1bz3a97vc2au7kvtc9mmo3v4mq81_DSC_0261.jpg'),
  radisson: img('nr31a8zew3y1xu3gwycdf1bt7j03_486277154.jpg')
};
const K = {
  banner: img('5xo8dctz1nkg0wz43myammae33g2_shutterstock_2122066670.jpg'),
  pyramids1: img('wt0vn7pdaxsmtq2sse7cp38ae155_shutterstock_1244489314.jpg'),
  pyramids2: img('5m0y0fj645qnbs7besh0xiq46lv2_shutterstock_1037036482.jpg'),
  museum1: img('4e3sxgoqzq37qsefi8qziemc1g0z_pootry.jpg'),
  museum2: img('7ax4ivq9me86j5h2yk227wx0lt8v_shutterstock_1076241563.jpg'),
  alex1: img('czv11gtsq397k701akfojci9dgj1_shutterstock_2402606033.jpg'),
  alex2: img('xc1o6ro4icbnih3osrhlu8agg3qn_shutterstock_273309197.jpg'),
  tower: img('11zxpqexr8qq2mrn1gjwhnta0m26_1613994848_shutterstock_200091866.jpg'),
  azhar: img('676tysj5ft0rc3muyezwg70k2yws_1613992253_shutterstock_745082155.jpg'),
  citadel: img('h6na9ac6sbptmcqpa5o3tnzqkenq_1613993033_shutterstock_231983539.jpg'),
  nileTower: img('wsojnx2bpo67a8jtaa4y52ajpeex_Grand_Nile_Tower_Hotel_(8590204805).jpg'),
  safir: img('timkuj0b7vxbcz5up0y8cnded2r1_59758725.jpg')
};
const featured = img('j2f850s5gdth079hck5vnxkuuyye_shutterstock_2446812657.jpg');

export const cardImages = [featured, K.pyramids1, M.jemaaNight, C.chef1];

export const detail = {
  slug: 'morocco-egypt-palaces-pyramids',
  ctaHref: '/l/egypt/enquiry/passengers/',
  cta: 'Design Your Escape',
  sub: 'Your travel plan – no obligation & tailor-made',
  banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
  title: 'Morocco & Egypt: Palaces, Medinas & Pyramids',
  alt: 'Morocco & Egypt: Palaces, Medinas & Pyramids',
  days: '8 days',
  stations: '3 stops',
  transport: 'Private transfer',
  tag: 'Culture',
  price: 164000,
  routeCode: 'RAK-CMN-CAI · 8D',
  routeLabel: 'This holiday takes you to',
  routeCodeLabel: 'Route code',
  routeCities: ['Marrakech', 'Casablanca', 'Chefchaouen', 'Cairo', 'Alexandria'],
  tags: ['Culture', 'Luxury'],
  stats: { days: 8, cities: 3, hotels: 3, activities: 8, transfers: 8 },
  gallery: [featured, K.pyramids1, M.jemaaNight, C.chef1, C.coast],
  services: [
    ['3 hotels', 'Accommodation'],
    ['8 activities', 'Activities'],
    ['8 transfers', 'Transport'],
    ['7 meals', 'Meals'],
    ['24/7 support', '24/7 Support'],
    ['Customisation', 'Customise', 'Expert customisation']
  ],
  expert: {
    name: 'Ria Banerjee',
    image: '/egypt/expert-ria.webp',
    role: 'Egypt & North Africa expert at Hi Tours',
    createdBy: 'Trip created by',
    quote: 'Two legendary countries in one journey – Morocco’s medinas and palaces, then Egypt’s pyramids and the Nile.',
    quoteMore: 'My tip: keep a free evening in Marrakech for Jemaa el-Fnaa after dark, and see the Pyramids of Giza early in the morning before the crowds arrive. The day trip to the blue city of Chefchaouen is worth every minute of the drive.',
    more: 'Read more',
    less: 'Read less'
  }
};

export const route = {
  stops: [
    {
      letter: 'A',
      name: 'Marrakech',
      dayLabel: 'Day 1–3',
      bullets: [
        'Arrival at Marrakech Menara Airport with a private transfer to your hotel',
        'Guided tour of Jardin Majorelle, the Koutoubia minaret and Bahia Palace',
        'Traditional Moroccan hammam: black-soap scrub, steam bath and argan-oil massage',
        'Free time in the medina, the souks and the buzzing Jemaa el-Fnaa square'
      ],
      images: [M.jemaaNight, M.caption21, M.street, M.medina],
      activities: [
        { name: 'Marrakech half-day sightseeing', description: 'Jardin Majorelle, Koutoubia Mosque and the ornate Bahia Palace.', optional: false, image: M.bahia },
        { name: 'Traditional Moroccan hammam', description: 'A soothing black-soap scrub, steam cleanse and argan-oil massage.', optional: false, image: M.hammam },
        { name: 'Jemaa el-Fnaa & the souks', description: 'The lively main square and the labyrinth of Marrakech markets.', optional: false, image: M.jemaa },
        { name: 'Jardin Majorelle', description: 'The vivid cobalt-blue garden created by artist Jacques Majorelle.', optional: true, image: M.majorelle }
      ],
      accommodation: {
        name: 'La Mamounia, Marrakech',
        description: '2 nights · breakfast · classic room',
        images: [M.mamounia, M.mogador, M.medina]
      },
      program: {
        name: 'Marrakech city highlights',
        description: 'A guided half day through the Red City’s gardens, mosque and palaces, finished with a restorative hammam ritual.',
        image: M.koutoubia
      }
    },
    {
      letter: 'B',
      name: 'Casablanca',
      subtitle: 'Casablanca → Chefchaouen',
      dayLabel: 'Day 3–5',
      bullets: [
        'Scenic drive to Casablanca on Morocco’s Atlantic coast',
        'City tour: the vast Hassan II Mosque, Rick’s Café and the Habous quarter',
        'Full-day excursion to the blue-washed mountain town of Chefchaouen',
        'Wander Plaza Uta el-Hammam, the restored Kasbah and the Grand Mosque'
      ],
      images: [C.hassan, C.city, C.chef1, C.chef2],
      activities: [
        { name: 'Casablanca city tour', description: 'The Hassan II Mosque on the ocean, Rick’s Café and the Habous quarter.', optional: false, image: C.hassan },
        { name: 'Day trip to Chefchaouen', description: 'The famous blue city – markets, the Kasbah and Plaza Uta el-Hammam.', optional: false, image: C.chef1 },
        { name: 'La Corniche & Atlantic coast', description: 'A relaxed drive along Casablanca’s seafront promenade.', optional: true, image: C.coast }
      ],
      accommodation: {
        name: 'Four Seasons Hotel Casablanca',
        description: '2 nights · breakfast · superior room',
        images: [C.fourSeasons, C.radisson, C.coast]
      },
      program: {
        name: 'Casablanca & the blue city',
        description: 'The Atlantic metropolis by day, then a memorable excursion up into the Rif mountains to blue-washed Chefchaouen.',
        image: C.chef3
      }
    },
    {
      letter: 'C',
      name: 'Cairo',
      subtitle: 'Cairo → Alexandria',
      dayLabel: 'Day 5–8',
      bullets: [
        'Fly from Casablanca to Cairo and transfer to your Nile-side hotel',
        'The Egyptian Museum, home to the treasures of Tutankhamun',
        'Pyramids of Giza and the Great Sphinx, followed by a Nile dinner cruise',
        'Full-day trip to Alexandria: the Catacombs, Pompey’s Pillar and Montazah',
        'Departure transfer to Cairo International Airport on day 8'
      ],
      images: [K.pyramids1, K.museum1, K.banner, K.alex1],
      activities: [
        { name: 'Pyramids of Giza & the Sphinx', description: 'The last surviving wonder of the ancient world, with a Nile dinner cruise.', optional: false, image: K.pyramids2 },
        { name: 'The Egyptian Museum', description: 'The world’s greatest collection of Pharaonic treasures.', optional: false, image: K.museum1 },
        { name: 'Alexandria day trip', description: 'Kom El-Dikka, Pompey’s Pillar, the Catacombs and Montazah Palace.', optional: false, image: K.alex1 },
        { name: 'Cairo Tower & Islamic Cairo', description: 'Skyline views, the Citadel and the Al-Azhar Mosque.', optional: true, image: K.tower }
      ],
      accommodation: {
        name: 'Grand Nile Tower, Cairo',
        description: '3 nights · breakfast · Nile-view room',
        images: [K.nileTower, K.safir, K.banner]
      },
      program: {
        name: 'Giza, the Nile & Alexandria',
        description: 'Egypt’s icons in three days – the pyramids and Sphinx, the Egyptian Museum, a Nile dinner cruise and a coastal day in Alexandria.',
        image: K.pyramids1
      }
    }
  ]
};

export const glance = {
  h2: 'Tour summary',
  short: 'Marrakech’s palaces and souks, Casablanca and the blue city of Chefchaouen, then Cairo with the Pyramids, the Egyptian Museum and a day in Alexandria – 8 days, 3 cities.',
  readMore: 'Read more',
  readLess: 'Read less',
  hide: 'Hide tour summary',
  intro: 'This journey pairs the best of Morocco with the greatest highlights of Egypt. You begin in Marrakech among gardens, palaces and lively souks, drive to Casablanca on the Atlantic and take a day trip to blue-washed Chefchaouen.',
  intro2: 'A short flight then brings you to Cairo for the Pyramids of Giza, the Egyptian Museum and a relaxed Nile dinner cruise, with a full day exploring the Greco-Roman sights of Alexandria before you fly home.',
  accommodationHeading: 'Accommodation',
  highlightsHeading: 'Key highlights',
  dayHeading: 'Day',
  routeHeading: 'Route',
  days: [
    { title: 'Day 1–3: Marrakech (2 nights)', text: 'Arrive in the Red City and explore its gardens, mosque and palaces, with a traditional hammam and free time in the medina.', hotel: 'La Mamounia, Marrakech', highlights: ['Airport meet & assist, private transfer', 'Jardin Majorelle, Koutoubia & Bahia Palace', 'Traditional Moroccan hammam', 'Jemaa el-Fnaa & the souks'] },
    { title: 'Day 3–5: Casablanca & Chefchaouen (2 nights)', text: 'Drive to the Atlantic coast for the Hassan II Mosque, then take a full-day trip to the famous blue city of Chefchaouen.', hotel: 'Four Seasons Hotel Casablanca', highlights: ['Transfer Marrakech → Casablanca', 'Hassan II Mosque & Habous quarter', 'Day trip to Chefchaouen'] },
    { title: 'Day 5–8: Cairo, Giza & Alexandria (3 nights)', text: 'Fly to Cairo for the Pyramids, the Egyptian Museum and a Nile dinner cruise, plus a full day in Alexandria.', hotel: 'Grand Nile Tower, Cairo', highlights: ['Flight Casablanca → Cairo', 'Egyptian Museum & Tutankhamun', 'Pyramids of Giza, Sphinx & Nile cruise', 'Alexandria day trip'] },
    { title: 'Day 8: Departure', text: 'After breakfast, a private transfer takes you to Cairo International Airport for your onward flight.', hotel: '—', highlights: ['Private transfer to Cairo airport'] }
  ],
  outro: 'A balanced two-country journey that combines Morocco’s colour and craft with Egypt’s ancient wonders.'
};

export const crumbs = [
  { label: 'Destinations', href: '/reiseziele/' },
  { label: 'Africa', href: '/afrika/' },
  { label: 'Egypt', href: '/afrika/aegypten/' },
  { label: 'Morocco & Egypt: Palaces, Medinas & Pyramids' }
];
