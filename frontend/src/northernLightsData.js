// Northern Lights trip-style page (English, INR) – structure mirrors tourlane.de/reisearten/inselhopping/
export const hero = {
  h1: 'Northern Lights',
  sub: 'Chase the aurora across the Arctic',
  cta: 'Plan for free',
  ctaHref: '/l/northern-lights/enquiry/passengers/',
  note: 'Your travel plan – no obligation & tailor-made',
  images: [
    { alt: 'Green Northern Lights above snow-covered cabins and pine trees in Lapland', title: 'Lapland, Finland', src: 'https://images.ctfassets.net/bth3mlrehms2/5bPB8dEQGT5Hl1icMTfEiM/2393b18a187a961b249dfd4ed7a22d7d/iStock-1256670045.jpg?w=1400&q=60&fm=webp' },
    { alt: 'Aurora borealis over red wooden houses and snowy mountains, Tromsø, Norway', title: 'Tromsø, Norway', src: 'https://images.ctfassets.net/bth3mlrehms2/65CO4vgIBVlwJzE0b73JtX/077e72134d5022910c6019c36efa7964/Tromso__Norway2.jpg?w=800&q=60&fm=webp' }
  ]
};

export const crumbs = [{ label: 'Trip styles', href: '/trip-styles/' }, { label: 'Northern Lights' }];

export const team = {
  h2: 'Who are our Northern Lights specialists?',
  members: [
    { name: 'Ishita Rao', role: 'Head of Arctic & Nordic Product', image: '/team/nl-1.webp', quote: 'Chasing the Northern Lights shouldn\'t be a gamble – we plan around the forecast, not the brochure.' },
    { name: 'Rohan Deshpande', role: 'Travel Expert, Norway & Lofoten', image: '/team/nl-2.webp', quote: 'Tromsø in February changed how I see winter. Let me show you why.' },
    { name: 'Tanvi Kulkarni', role: 'Travel Expert, Finnish Lapland', image: '/team/nl-3.webp', quote: 'Huskies, glass igloos and minus twenty degrees – I\'ll tell you exactly what to pack.' },
    { name: 'Suresh Menon', role: 'Senior Travel Expert, Iceland', image: '/team/nl-4.webp', quote: 'Iceland in winter is quiet, wild and unforgettable when the route is right.' },
    { name: 'Nandini Pillai', role: 'Travel Expert, Swedish Lapland', image: '/team/nl-5.webp', quote: 'From the Icehotel to the Treehotel – I know which nights are worth it.' }
  ]
};

export const tours = { h2: 'Your Northern Lights trip with Hi Tours', more: 'Show more', less: 'Show less' };

const P = (title, tag, days, cities, hotels, activities, transfers, price, alt, images) => ({ title, tag, days, stops: cities, cities, hotels, activities, transfers, price, alt, images });

export const products = [
  P('Norway Northern Lights trip: Lofoten & Tromsø', 'Short trips', 8, 5, 5, 6, 10, 108000, 'Lofoten, Nordland, Norway', [
    'https://images.ctfassets.net/bth3mlrehms2/2kOC8JzbK03ufOyGoaKlOi/9c5725b5f98ec282e3166b79bbb88724/Norwegen__Nordland__Lofoten.jpg?w=1080&q=60&fm=webp',
    'https://kiwi-cdn.tlservers.com/items%2F139e7d9f-600f-4274-ba32-16c1fbff56d0%2Fimage%2Fjpeg%2FOFN8D70Yv32MBOgA7EgjeQ%2FiStock-1033240454.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F139e7d9f-600f-4274-ba32-16c1fbff56d0%2Fimage%2Fjpeg%2FWT4h-2XAKD8ad12S61kxFw%2Fistock-2148712492.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Ffac4d866-e9ae-4e5f-90ce-fa0ce0c1f0e1%2Fimage%2Fjpeg%2FGbAImWFkCoQd-000sdgQCQ%2Fistock-1442910378.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Finland Northern Lights trip: 5 days of winter magic in Rovaniemi', 'Family', 5, 1, 1, 4, 2, 216000, 'Rovaniemi, Lapland, Finland', [
    'https://images.ctfassets.net/bth3mlrehms2/ZAsr3OmUcOrddeUxAVYY3/1ec508d2e3ae9d64a05b983b9e304bd3/iStock-1305704550.jpg?w=1080&q=60&fm=webp',
    'https://kiwi-cdn.tlservers.com/items%2Faa11ad14-217c-4ea9-bd03-23bb37b8eb61%2Fimage%2Fjpeg%2FLMDVGGb8KW3EfyR2_LTd6Q%2Frovaniemi-istock-1182209605.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Faa11ad14-217c-4ea9-bd03-23bb37b8eb61%2Fimage%2Fjpeg%2Fv4xF1I9fn7Kov5PYxAdWIw%2FiStock-1454645673.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Faa11ad14-217c-4ea9-bd03-23bb37b8eb61%2Fimage%2Fjpeg%2Fl-JPi2TcEIpzGC_8-MMnSg%2FiStock-1451034627.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Northern Lights tour of Lapland: 7 days in Inari and Saariselkä by car', 'Nature', 7, 2, 2, 6, 4, 306000, 'Inari, Lapland, Finland', [
    'https://images.ctfassets.net/bth3mlrehms2/5bPB8dEQGT5Hl1icMTfEiM/2393b18a187a961b249dfd4ed7a22d7d/iStock-1256670045.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/2MBPOlNDvQJF59IdwllTx1/eb27180d6d570f0ed65062359b324a2d/iStock-2232155395__1_.jpg?w=1080&q=60&fm=webp',
    'https://kiwi-cdn.tlservers.com/items%2Fd1555bed-75b8-4c49-ac80-e90b89015f47%2Fimage%2Fjpeg%2FGZhbTEgrXK-cbWq32IBf9A%2Fshutterstock_1737234665.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Fd1555bed-75b8-4c49-ac80-e90b89015f47%2Fimage%2Fjpeg%2Fb18BXp5Cfzj70aRLIF2TCQ%2Fshutterstock_1724776171.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Lapland winter holiday: premium trip to Inari with a Northern Lights hike', 'Short trips', 5, 2, 2, 4, 4, 180000, 'Inari, Lapland, Finland', [
    'https://images.ctfassets.net/bth3mlrehms2/2h6HELiZR6jgXyOQAsOZDS/033a561b9019652eae426705160e3c27/Church_Inari_Pielpajarvi_Finland.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/52mtjVSX66dkuwC9AKQE0K/32f3049517d77ef3d5cfc1d843c224b6/iStock-2203343062TCG.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/6NEQEcKD8mVDcAB397rcfM/1011aa935652a769b50d0a9cf00a3691/Norwegen__Lappland__RentiereTCG.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/2zWy3GNnzBI4Ci3hJtdBZ8/3a36a5381d19baed2035a974d5f9d41b/iStock-2221696646TCG.jpg?w=1080&q=60&fm=webp'
  ]),
  P('Norway: winter experience in Tromsø', 'Nature', 8, 5, 5, 6, 10, 240300, 'Tromsø, Norway', [
    'https://images.ctfassets.net/bth3mlrehms2/65CO4vgIBVlwJzE0b73JtX/077e72134d5022910c6019c36efa7964/Tromso__Norway2.jpg?w=1080&q=60&fm=webp',
    'https://kiwi-cdn.tlservers.com/items%2F139e7d9f-600f-4274-ba32-16c1fbff56d0%2Fimage%2Fjpeg%2FOFN8D70Yv32MBOgA7EgjeQ%2FiStock-1033240454.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F139e7d9f-600f-4274-ba32-16c1fbff56d0%2Fimage%2Fjpeg%2F3GNUPeY3XI-WkYfy-qV4tA%2Fistock-954156530.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Ffac4d866-e9ae-4e5f-90ce-fa0ce0c1f0e1%2Fimage%2Fjpeg%2FkQCjXIpzgPj4dsbYstRRUg%2Fistock-188111939.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Iceland winter holiday: a true paradise for explorers', 'Road trip', 6, 4, 4, 5, 8, 86400, 'Iceland in winter', [
    'https://kiwi-cdn.tlservers.com/items%2F27af364f-ddb3-402c-974b-b89d55b7faf0%2Fimage%2Fjpeg%2FG27acVsex9FKd31bOljJ-w%2Fkalfafell_-jannhuizenga-_istock-1256590362.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Fdb15069b-9267-436a-b232-a34403a2792e%2Fimage%2Fjpeg%2FgxmWnqZBR2DZg5MWJv8yjA%2Fistock-11378470991.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Fdb15069b-9267-436a-b232-a34403a2792e%2Fimage%2Fjpeg%2F_XTVnq52UKecr78Zst0Dcw%2Fistock-1394144806.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F27af364f-ddb3-402c-974b-b89d55b7faf0%2Fimage%2Fjpeg%2FCXtLv2S5juJflQm3rg173g%2Ficeland_vatnajokull_glacier_ice_cave_istock.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Swedish Lapland winter trip', 'Honeymoon', 6, 2, 2, 5, 4, 468000, 'Luleå, Lapland, Sweden', [
    'https://images.ctfassets.net/bth3mlrehms2/6yCALNxeVCki7mNnB39zki/0652dd1f2310b4733ef82f9a7f2973df/Village_Lulea_Lappland_Schweden.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/1CuwPvuC3NVur9ZPeBS4to/2da63d96bde0e12c8eb28c9b23f9db99/Reindeers_Lappland_Schweden.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/3JCRrYGD2YqyV7CS9ma41F/bfbf9ede79e87e632750a3a6b50ed08a/Eis_fishing_Schweden.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/4DNqNMgnZ6NONKFuXSZiby/7cbbe3dc19614fdfa56e700e24301660/Husky_tour_Schweden.jpg?w=1080&q=60&fm=webp'
  ]),
  P('Sweden in 7 days: from Stockholm to the Icehotel in Jukkasjärvi', 'Luxury', 7, 2, 2, 6, 4, 270000, 'Icehotel, Jukkasjärvi, Sweden', [
    'https://images.ctfassets.net/bth3mlrehms2/38PRA4BgEjpWh5l34lkxTI/21b74196ffe0e5531e29ff3b40a102ff/iStock-1588139555.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/h6hIoYjMm8gPUkGxGHFTK/e746454824801ba02d057ae02a52fd7f/iStock-2228781514.jpg?w=1080&q=60&fm=webp',
    'https://kiwi-cdn.tlservers.com/items%2F6024dc6e-66d7-44d7-956d-bec0fa7f44e1%2Fimage%2Fjpeg%2FR6M6wBZe9kjTsIJ8qPukjw%2Fshutterstock_1568592469.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F6024dc6e-66d7-44d7-956d-bec0fa7f44e1%2Fimage%2Fjpeg%2F5DANwY61AryQj_rP06QzXg%2Fshutterstock_236449285.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Treehotel Sweden: 6 days in Lapland at the Treehotel in Harads', 'Luxury', 6, 2, 2, 5, 4, 414000, 'Treehotel, Harads, Sweden', [
    'https://images.ctfassets.net/bth3mlrehms2/6Qi5b8CqzQtGg1z89KKxuF/1c82c51e6314485081adf54a897a220a/iStock-1312344874.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/311mlbChcnpc3jWcpcuXPj/2267dff44063a10e9580753c309ff7e5/iStock-1482001515.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/h6hIoYjMm8gPUkGxGHFTK/e746454824801ba02d057ae02a52fd7f/iStock-2228781514.jpg?w=1080&q=60&fm=webp',
    'https://kiwi-cdn.tlservers.com/items%2F6024dc6e-66d7-44d7-956d-bec0fa7f44e1%2Fimage%2Fjpeg%2FR6M6wBZe9kjTsIJ8qPukjw%2Fshutterstock_1568592469.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Winter journey through Scandinavia', 'Nature', 14, 6, 6, 11, 12, 432000, 'Scandinavia in winter', [
    'https://images.ctfassets.net/bth3mlrehms2/hfz6EqZg4hgMIkC2FnqiU/b5554c2930e5e1ed05ee2db76f65061f/Lappland_Schweden_schnee.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/6gnWmPBOc8TJcn39VFU072/a471dfd247e202cd4724b6c8f25d4f97/Cabin_aurora_Lappland_Schweden.jpg?w=1080&q=60&fm=webp',
    'https://kiwi-cdn.tlservers.com/items%2F6024dc6e-66d7-44d7-956d-bec0fa7f44e1%2Fimage%2Fjpeg%2FR6M6wBZe9kjTsIJ8qPukjw%2Fshutterstock_1568592469.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F5308e25a-3aed-42ce-af53-41315f02f3a3%2Fimage%2Fjpeg%2FO7SmXpvuSDkHgzmYzi5Lyw%2Fshutterstock_1314068888.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Norway winter road trip by car', 'Short trips', 6, 3, 3, 5, 6, 81000, 'Norway in winter', [
    'https://images.ctfassets.net/bth3mlrehms2/5hTfaCM6tgeHxndjWyhtiF/8e46a2342ad969e1cc0e61191d6f360b/Norwegen__Svalbard__Longyearbyen.jpg?w=1080&q=60&fm=webp',
    'https://kiwi-cdn.tlservers.com/items%2F5415b478-8b6a-40d0-9b2a-0bca02767f0d%2Fimage%2Fjpeg%2FGF6OkhTi5yxkLZAKuBCGJA%2Fshutterstock_2321968665.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F5415b478-8b6a-40d0-9b2a-0bca02767f0d%2Fimage%2Fjpeg%2F1FEMT72y6K0E_nvf9PZinA%2Fistock-474456375.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F1bc923a8-abc4-41f7-91cd-62dac228443b%2Fimage%2Fjpeg%2FUS2A1THi0GbtJ7ol4b5bxA%2Fistock-2193824182.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Arctic scenery in Norway: short trip with fjord tour', 'Short trips', 6, 2, 2, 5, 4, 81000, 'Northern Norway', [
    'https://images.ctfassets.net/bth3mlrehms2/11g8iBZmStY9rc0bA2V9Na/06b744c67557772fc3c5ea42b5182696/Norwegen__Svalbard__Spitzbergen.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/5rLS6ciK8Fxd7Dtw2CCSGX/41342a11366ea8fcb99c442127802692/Norwegen__Troms_og_Finnmark__Nordkapp.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/1ZzlN3suHAmgTwApYwfMEg/d276056a3bc018e556cd9c28388dd228/Norwegen__Troms_.jpg?w=1080&q=60&fm=webp',
    'https://kiwi-cdn.tlservers.com/items%2F139e7d9f-600f-4274-ba32-16c1fbff56d0%2Fimage%2Fjpeg%2FOFN8D70Yv32MBOgA7EgjeQ%2FiStock-1033240454.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('By train to Lapland: winter trip from Helsinki to Rovaniemi', 'Nature', 5, 2, 2, 4, 4, 216000, 'Rovaniemi, Finland', [
    'https://images.ctfassets.net/bth3mlrehms2/52mtjVSX66dkuwC9AKQE0K/32f3049517d77ef3d5cfc1d843c224b6/iStock-2203343062TCG.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/5bPB8dEQGT5Hl1icMTfEiM/2393b18a187a961b249dfd4ed7a22d7d/iStock-1256670045.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/6NEQEcKD8mVDcAB397rcfM/1011aa935652a769b50d0a9cf00a3691/Norwegen__Lappland__RentiereTCG.jpg?w=1080&q=60&fm=webp',
    'https://kiwi-cdn.tlservers.com/items%2Fd1cf8bf4-824c-4443-8a21-143f77385b09%2Fimage%2Fjpeg%2FzZ9E2AVskqfeQetZnLaTsA%2Fshutterstock_154741178.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Finland night train to Lapland: 7 days to the fells by rail', 'Nature', 7, 3, 3, 6, 6, 270000, 'Finnish Lapland', [
    'https://kiwi-cdn.tlservers.com/items%2F82e3ce45-792b-4d2b-b82c-9138e74a9669%2Fimage%2Fjpeg%2F0ecPNKBkgDH7DO_jfEa-xQ%2Fakaslompolo__1.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Fd1cf8bf4-824c-4443-8a21-143f77385b09%2Fimage%2Fjpeg%2FzZ9E2AVskqfeQetZnLaTsA%2Fshutterstock_154741178.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Fd1cf8bf4-824c-4443-8a21-143f77385b09%2Fimage%2Fjpeg%2FqCgIpYpHgGbeTDAzQwknTw%2Fshutterstock_1208399461.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F9271d4a7-162e-4760-afbe-6c9ecd2dae6d%2Fimage%2Fjpeg%2Fi-CSqJdzV4DkzTWsKBlQEQ%2Fsinetta__1.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Lapland winter tour: Rovaniemi and Levi in 7 days', 'Family', 7, 2, 2, 6, 4, 270000, 'Levi, Lapland, Finland', [
    'https://images.ctfassets.net/bth3mlrehms2/6vFQLnDx8TIgGsWphdBq5z/6b59112fe2c40d12cc9965009d49c065/iStock-1033838774.jpg?w=1080&q=60&fm=webp',
    'https://kiwi-cdn.tlservers.com/items%2Faa11ad14-217c-4ea9-bd03-23bb37b8eb61%2Fimage%2Fjpeg%2FLMDVGGb8KW3EfyR2_LTd6Q%2Frovaniemi-istock-1182209605.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Faa11ad14-217c-4ea9-bd03-23bb37b8eb61%2Fimage%2Fjpeg%2FKbOUA7oZDNm-Id0bNkcEcA%2Frovaniemi-istock-537718250.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Faa11ad14-217c-4ea9-bd03-23bb37b8eb61%2Fimage%2Fjpeg%2FrHZggpbIPqt4k0Pge8bD3g%2Frovaniemi-istock-1385748107.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Lapland winter trip Rovaniemi: from the Arctic Circle to the fells', 'Nature', 7, 2, 2, 6, 4, 297000, 'Rovaniemi, Finland', [
    'https://kiwi-cdn.tlservers.com/items%2Faa11ad14-217c-4ea9-bd03-23bb37b8eb61%2Fimage%2Fjpeg%2FrHZggpbIPqt4k0Pge8bD3g%2Frovaniemi-istock-1385748107.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Faa11ad14-217c-4ea9-bd03-23bb37b8eb61%2Fimage%2Fjpeg%2FLMDVGGb8KW3EfyR2_LTd6Q%2Frovaniemi-istock-1182209605.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Faa11ad14-217c-4ea9-bd03-23bb37b8eb61%2Fimage%2Fjpeg%2Fe4e4AApbNHAu_tmZ3FS3Ug%2Frovaniemi-istock-1185555704.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2Faa11ad14-217c-4ea9-bd03-23bb37b8eb61%2Fimage%2Fjpeg%2FKbOUA7oZDNm-Id0bNkcEcA%2Frovaniemi-istock-537718250.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Finland and Norway: 7 days from Rovaniemi to Kirkenes', 'Multi-country', 7, 3, 3, 6, 6, 333000, 'Kirkenes, Norway', [
    'https://images.ctfassets.net/bth3mlrehms2/54JpsXFIRgILu5hlZ1bVHy/fe0ea208f75ba89b7a4b966c3aae6b4b/Inari_See_Finnland.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/49QXmkgrmFtqy7tvw9PtRJ/ef5580f2d96786a0aabd7d621c83e530/Norwegen_Kirkenes_Winter_TCG.png?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/19cUAOllxfeNQBl70Sd4JB/04b55fe15e3b02f68828fab1717a9eff/Auora_Finnland.jpg?w=1080&q=60&fm=webp',
    'https://kiwi-cdn.tlservers.com/items%2Faa11ad14-217c-4ea9-bd03-23bb37b8eb61%2Fimage%2Fjpeg%2FLMDVGGb8KW3EfyR2_LTd6Q%2Frovaniemi-istock-1182209605.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Winter holiday in Ruka: five days in snowy Kuusamo', 'Nature', 5, 1, 1, 4, 2, 432000, 'Ruka, Kuusamo, Finland', [
    'https://images.ctfassets.net/bth3mlrehms2/S6OET32ZqcSmFGleFSsmD/8db8da4c23703bd75a47128da3e43d9a/Ski_Ruka_Finnland.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/4cbaBLY3Evm61QK4YG2nv8/74479af87677251ac29d72bbce5341b6/Cottages_Berg_Lappland_Finnland.jpg?w=1080&q=60&fm=webp',
    'https://images.ctfassets.net/bth3mlrehms2/5dOpLrGhXPA9I8meWTLAsm/06546ff80add510a810c12f5433c42d4/Schnee_wald_Finnland.jpg?w=1080&q=60&fm=webp',
    'https://kiwi-cdn.tlservers.com/items%2Fcd1a66ed-7c37-4440-8168-7e9c11e97e99%2Fimage%2Fjpeg%2FTz3ka_kV85-_-lQ61OEATw%2Fkuusamo-istock-1305703681.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Sweden from Stockholm: by train to Kiruna and Abisko', 'Nature', 7, 3, 3, 6, 6, 171000, 'Abisko, Lapland, Sweden', [
    'https://kiwi-cdn.tlservers.com/items%2F6024dc6e-66d7-44d7-956d-bec0fa7f44e1%2Fimage%2Fjpeg%2Fi6H_wNRTYQcqQa6iHDDQbg%2FiStock-105137701.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F6024dc6e-66d7-44d7-956d-bec0fa7f44e1%2Fimage%2Fjpeg%2FR6M6wBZe9kjTsIJ8qPukjw%2Fshutterstock_1568592469.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F6024dc6e-66d7-44d7-956d-bec0fa7f44e1%2Fimage%2Fjpeg%2F1BNjSPO7KOpwb6E-FmpNtQ%2Fshutterstock_1896884050.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F512627c4-1c72-4f9d-9f2f-0b7107874b81%2Fimage%2Fjpeg%2FVT1zL4qJjgX65iA3LRQuuw%2Fistock-1308895328.jpg?w=1080&q=60&auto=format&fit=max'
  ]),
  P('Svalbard holiday: from Tromsø to Spitsbergen', 'Short trips', 7, 2, 2, 6, 4, 209700, 'Spitsbergen, Svalbard, Norway', [
    'https://images.ctfassets.net/bth3mlrehms2/4pfAN2QaeYu5LiLmT2tHwt/bf4ad5d04747792c6a7750fd1f7b80eb/Norwegen__Svalbard__Longyearbyen.jpg?w=1080&q=60&fm=webp',
    'https://kiwi-cdn.tlservers.com/items%2F139e7d9f-600f-4274-ba32-16c1fbff56d0%2Fimage%2Fjpeg%2FOFN8D70Yv32MBOgA7EgjeQ%2FiStock-1033240454.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F139e7d9f-600f-4274-ba32-16c1fbff56d0%2Fimage%2Fjpeg%2F3GNUPeY3XI-WkYfy-qV4tA%2Fistock-954156530.jpg?w=1080&q=60&auto=format&fit=max',
    'https://kiwi-cdn.tlservers.com/items%2F139e7d9f-600f-4274-ba32-16c1fbff56d0%2Fimage%2Fjpeg%2FwSEhbYU1Y35sNQhKX0b4TA%2Fistock-912287550.jpg?w=1080&q=60&auto=format&fit=max'
  ])
];

export const destinations = {
  h2: 'The best destinations for the Northern Lights',
  items: [
    { title: 'Tromsø', href: '#', image: 'https://images.ctfassets.net/bth3mlrehms2/1EMz02COALI6PpzKTdbJKz/075711a5281b9bf69edd0f21ac646411/Tromso__Norway.jpg?w=1080&q=60&fm=webp' },
    { title: 'Lofoten', href: '#', image: 'https://images.ctfassets.net/bth3mlrehms2/6KNLwscjUKO3ikYFJqAW7r/94bf3f137f5c5acca14aa0a5fd578dff/Norwegen_Lofoten_Landschaft_Reine_TCG.png?w=800&q=60&fm=webp' },
    { title: 'Rovaniemi', href: '#', image: 'https://images.ctfassets.net/bth3mlrehms2/rMF3gAeorRAHM8jDipldm/bab13aa7004192e20dcea2e58fb2c024/Christmas_village_Rovaniemi_LapplandTCG.jpg?w=1080&q=60&fm=webp' },
    { title: 'Finnish Lapland', href: '#', image: 'https://images.ctfassets.net/bth3mlrehms2/6TLr75VnBQ2mbu1UrjzSF0/6d081e588a068c9d54dd2b47259e6bc4/Huskies_finnish_laplandTCG.jpg?w=800&q=60&fm=webp' },
    { title: 'Swedish Lapland', href: '#', image: 'https://images.ctfassets.net/bth3mlrehms2/6IKTl6scqXDEZGZ0IUscMn/23b5e2aaf2e0d950059a8f9393e68378/iStock-2154139409__1_TCG.jpg?w=800&q=60&fm=webp' },
    { title: 'Kiruna & Abisko', href: '#', image: 'https://images.ctfassets.net/bth3mlrehms2/5ECeCvlHxwY6R2floutjas/8fac5efa686c6230f31a4e64beade50c/iStock-2249621485TCG.jpg?w=1080&q=60&fm=webp' },
    { title: 'Iceland', href: '#', image: 'https://images.ctfassets.net/bth3mlrehms2/sfrVCsS90nJo4nfeBUm3I/b42f94b6715998763d194f22f5aea127/M_vatn_Iceland.jpg?w=1080&q=60&fm=webp' }
  ]
};

export const reviews = {
  h2: 'What our customers say',
  items: [
    { name: 'Aditya & Kavya', title: 'Norway trip', date: '18 February 2026', stars: 5, image: 'https://images.ctfassets.net/bth3mlrehms2/2kOC8JzbK03ufOyGoaKlOi/9c5725b5f98ec282e3166b79bbb88724/Norwegen__Nordland__Lofoten.jpg?w=1080&q=60&fm=webp', text: 'We saw the lights on our second night in Tromsø. Every transfer, the husky sled and the fjord cruise were booked before we landed – all we had to do was look up.' },
    { name: 'Neha S.', title: 'Finland trip', date: '2 January 2026', stars: 5, image: 'https://images.ctfassets.net/bth3mlrehms2/ZAsr3OmUcOrddeUxAVYY3/1ec508d2e3ae9d64a05b983b9e304bd3/iStock-1305704550.jpg?w=1080&q=60&fm=webp', text: 'The glass igloo in Rovaniemi was the highlight of our lives. Our expert warned us about the cold, sorted the thermal gear and even timed dinner around the aurora forecast.' },
    { name: 'Manish Gupta', title: 'Sweden trip', date: '14 December 2025', stars: 5, image: 'https://images.ctfassets.net/bth3mlrehms2/1CuwPvuC3NVur9ZPeBS4to/2da63d96bde0e12c8eb28c9b23f9db99/Reindeers_Lappland_Schweden.jpg?w=1080&q=60&fm=webp', text: 'Icehotel one night, a cosy lodge the next. The itinerary was balanced perfectly and the app kept all vouchers in one place.' },
    { name: 'Pooja & Rahul', title: 'Iceland trip', date: '27 November 2025', stars: 5, image: 'https://kiwi-cdn.tlservers.com/items%2F27af364f-ddb3-402c-974b-b89d55b7faf0%2Fimage%2Fjpeg%2FG27acVsex9FKd31bOljJ-w%2Fkalfafell_-jannhuizenga-_istock-1256590362.jpg?w=1080&q=60&auto=format&fit=max', text: 'Iceland in winter felt like another planet. Hi Tours planned a self-drive that was safe, slow and full of waterfalls – and we caught the Northern Lights twice.' },
    { name: 'Sanjay R.', title: 'Lapland trip', date: '9 March 2025', stars: 5, image: 'https://images.ctfassets.net/bth3mlrehms2/38PRA4BgEjpWh5l34lkxTI/21b74196ffe0e5531e29ff3b40a102ff/iStock-1588139555.jpg?w=1080&q=60&fm=webp', text: 'Travelling with two teenagers, we needed action every day. Snowmobiles, reindeer farm, ice fishing – they never once said they were bored.' },
    { name: 'Divya Menon', title: 'Sweden trip', date: '21 February 2025', stars: 5, image: 'https://kiwi-cdn.tlservers.com/items%2F6024dc6e-66d7-44d7-956d-bec0fa7f44e1%2Fimage%2Fjpeg%2Fi6H_wNRTYQcqQa6iHDDQbg%2FiStock-105137701.jpg?w=1080&q=60&auto=format&fit=max', text: 'The train to Abisko was a brilliant suggestion – no icy driving, and the aurora station was right there. Excellent, calm advice throughout.' },
    { name: 'Arjun T.', title: 'Norway trip', date: '3 February 2025', stars: 5, image: 'https://images.ctfassets.net/bth3mlrehms2/65CO4vgIBVlwJzE0b73JtX/077e72134d5022910c6019c36efa7964/Tromso__Norway2.jpg?w=1080&q=60&fm=webp', text: 'Our expert clearly knew Tromsø personally. Small-group aurora chase, whale safari and a Sami dinner – everything ran to the minute.' }
  ]
};
