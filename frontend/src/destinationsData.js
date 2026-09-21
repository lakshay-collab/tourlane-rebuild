// Regional destinations grid data (images reused from original site CDN).
const img = (id, path) => `https://images.ctfassets.net/bth3mlrehms2/${id}/${path}?w=520&q=60&fm=webp`;

export const destinationTabs = [
  'Top 10', 'Africa', 'Asia', 'Europe', 'Central America', 'North America', 'Oceania', 'South America', 'South Seas', 'Middle East'
];

export const destinations = {
  'Top 10': [
    { name: 'USA', src: img('4qKkGsewSMqgIzrhbg8jUc', '5941e6892942fa67ac32f013d2315c10/Golden_Gate_Bridge_USA.jpg') },
    { name: 'South Africa', src: img('11BIZmUhVTObt1mVYFtofn', 'f05f87c118cdb66b143bbb69eba50c62/Su__dafrika_Kapstadt_Zwo__lf_Apostel_Berge.jpg') },
    { name: 'Thailand', src: img('27MnAH4RS1zTSFygAmnq5i', '97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg') },
    { name: 'Iceland', src: img('19jS6gkSXrat4camgvmXdJ', '6d0914a835cfb184af0111735d4332cc/Island__Reynisfjara.jpg') },
    { name: 'Canada', src: img('4o10LZngx2dF2lPBMomEIS', '79d54c77ff575453297addd96d42c9fd/Kanada_MoraineLake.jpg') },
    { name: 'Japan', src: img('5E91LAbIo29xmfzemwDnnu', '082cd826dbf9b2744cbcf00015005330/Japan_MtFuji.jpg') },
    { name: 'Namibia', src: img('6sKYDcfFOoFsBkOwJtoVoF', '35594053fdc4d0b90d18a18f1058f8b1/Namibia_Sandd%C3%83_ne.jpg') },
    { name: 'Tanzania', src: img('7edotTbL51cLSRL6y6ie5j', '13d2b882c4cdad47c4629adcf09d5b53/Tansania_Reise_Giraffen_und_der_Kilimandscharo_im_Amboseli_Nationalpark.jpg') },
    { name: 'Costa Rica', src: img('NicshTzcwRst2izOwKSAV', 'd375b934e43bd3c484b162ec1d67725b/CostaRica_Vulkankrater.jpg') },
    { name: 'Australia', src: img('62tyUpL6fH7VsSsH7KjOXt', '8965abe9818007096bca5bc3f48a1a2a/Australien_Zw%C3%83__lfApostel.jpg') }
  ],
  'Africa': [
    { name: 'South Africa', src: img('11BIZmUhVTObt1mVYFtofn', 'f05f87c118cdb66b143bbb69eba50c62/Su__dafrika_Kapstadt_Zwo__lf_Apostel_Berge.jpg') },
    { name: 'Seychelles', src: img('21cn2hwFylFIiH7eSI9Exw', '47ff3e8a504afb62603332243e0c2186/iStock-1221784138.jpg') },
    { name: 'Tanzania', src: img('7edotTbL51cLSRL6y6ie5j', '13d2b882c4cdad47c4629adcf09d5b53/Tansania_Reise_Giraffen_und_der_Kilimandscharo_im_Amboseli_Nationalpark.jpg') },
    { name: 'Namibia', src: img('6sKYDcfFOoFsBkOwJtoVoF', '35594053fdc4d0b90d18a18f1058f8b1/Namibia_Sandd%C3%83_ne.jpg') },
    { name: 'Botswana', src: img('1oeRTGrt4yYdpJ8K8Vr19t', 'dbc9ee85f9cf764ce9bde1a838b69bec/Botswana__Okavango-Delta__Elefant.jpg') },
    { name: 'Egypt', src: img('qsp90U72Z4CxCVhVhtdGE', '3b9cf2cac3e162fb25231d046cafd25e/Giza_Pyramid_Complex_-_Cairo__EgyptTCG.jpg') },
    { name: 'Kenya', src: img('3qDWPPw1OnQaSd82yXV4hi', '4864b1fafd51466ebd397cc9d9f168e6/Kenia__Nakuru.jpg') },
    { name: 'Morocco', src: img('3pOpw5Vdn399VHngUjdSF1', '807d6a8f26a2b0d7b4743cbf5bf5c252/Marrakesch_Morocco.jpg') },
    { name: 'Mauritius', src: img('5dxRiI8SebjdaHIXal8D44', 'a62281d75e52bfcf85e2df700b9c9588/Mauritius_Starnd_TCG.jpg') },
    { name: 'Uganda', src: img('6yDtphuIFbfH8optRxdIRm', '4cc7b2b8e611202ae2959cd93fca0045/Uganda_Bwindi_Nationalpark_Dschungel_TCG.png') }
  ],
  'Asia': [
    { name: 'Laos', src: img('730GUSsXgobNqsyerVaagA', 'c31524b81de30c8805073d4e2cabda93/Laos_Mekong_Boot.jpg') },
    { name: 'Thailand', src: img('27MnAH4RS1zTSFygAmnq5i', '97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg') },
    { name: 'Vietnam', src: img('6KpaBlYiRchxRrYsS84QgO', 'dfb8fec25316c0c719d2aa7a5794dc31/NinhBinhProvinz_Tempel.jpg') },
    { name: 'Japan', src: img('5E91LAbIo29xmfzemwDnnu', '082cd826dbf9b2744cbcf00015005330/Japan_MtFuji.jpg') },
    { name: 'Indonesia', src: img('61b5ymnc76Gat5QEm4R7Uv', '236a66af31569408e5fba01e2dcb53b1/Kelingking_Beach__Nusa_Penida__Indonesien_NTCG__1_.png') },
    { name: 'India', src: img('1OoLHyQc0wvo7b7ky6kOYi', '14f2e12522f80eccc465118fb92f7486/Indien_Ladakh_Landschaft_TCG.png') },
    { name: 'China', src: img('3FwBvWPMIiVGThJdqClYD1', 'bb67524f6b951541a23d6950859c4e6f/China_Jinshanling_ChinesischeMauer_TCG.png') },
    { name: 'Cambodia', src: img('3zbplvZU8SZYLZqdmaPsZv', 'c16250ef83321324f10fbf00c9b058a1/Kambodscha_AngkorWat.jpg') },
    { name: 'Malaysia', src: img('X7b0PdKpWDMzl19jytcJ6', 'd0aad3d91b3ffaaf161f205c7660fe5f/Malaysia_Ipoh_Tempel.jpg') },
    { name: 'Maldives', src: img('3hsuR5UvfamJlqKCTM81Ii', 'b43e484beb8b92c43047174a4a3e7be8/Maldiven__Holzsteg.jpg') },
    { name: 'Philippines', src: img('1o2rtINxvG8y4nqhK5Bvgp', 'd09a493b9ea9c4db223ad37ba237b646/Philippinen_Palawan_Coron_Lagoone_TCG.png') },
    { name: 'Sri Lanka', src: img('6etzBcZlvbOLHqzCOq0NES', '764d862634b04fbcd521a3ad01740f1d/iStock-1779897953.jpg') }
  ],
  'Europe': [
    { name: 'Iceland', src: img('19jS6gkSXrat4camgvmXdJ', '6d0914a835cfb184af0111735d4332cc/Island__Reynisfjara.jpg') },
    { name: 'Italy', src: img('6MDAdkdCjF16LaohT1os4R', 'a05331428849331be0c2fd266c8570db/Italien_Amalfi.jpg') },
    { name: 'Greece', src: img('4tPmbNB9QIZbfIWAsHnz3w', 'fd3191963fb012a8f8e1aeb42a2a6401/Griechenland_Santorini.jpg') },
    { name: 'Norway', src: img('UHqJkdKkOhjiJeqqdlBtb', '7f7ab850458b9aad4024ef52c5834ade/MAIN_Norwegen_Hardangerfjord_TCG.jpg') },
    { name: 'Ireland', src: img('W4uVx0uUt86jnByPHjutE', '306e7fb7b3d77e101f5fbde7cb9cab1d/Irland_CliffsofMoher-2.jpg') },
    { name: 'Spain', src: img('5957FrRqxs8F2fO8xJJ5n9', 'fb2d6cd0a2537891652feb13e96430c0/Spanien_Mallorca__Cala_de_Sa_Calobra_TCG.jpg') },
    { name: 'Portugal', src: img('uPI9aniC3uvsUAS1zRHwP', '284df47eb1a7e89a770256a62b97b3fa/S_o_Vicente__Madeira__Portugal.jpg') },
    { name: 'Croatia', src: img('6Q2Kxa138pSiiIXTkuf3g5', '7780a2df7b70cf6d10de66adc2795f87/Kroatien_InselVis.jpg') },
    { name: 'England', src: img('4L4GHNc8RMTi7ric6I9giQ', 'a1a1d4ed6ce559ffa06712cf355ea24d/England-Roadtrip-1-2.jpg') },
    { name: 'Scotland', src: img('6Ypj2Qd3m3jQk6ygmpsNAM', '076740049ff3bf1df0f025d0547d4d90/Schottland_Burg.png') },
    { name: 'Finland', src: img('5bPB8dEQGT5Hl1icMTfEiM', '2393b18a187a961b249dfd4ed7a22d7d/iStock-1256670045.jpg') },
    { name: 'Sweden', src: img('4pwuirTK8DaLqHIejBCzWU', '63b0406c67aa2f3b1a18260f86b7e6a1/iStock-1364945953.jpg') }
  ],
  'Central America': [
    { name: 'Costa Rica', src: img('NicshTzcwRst2izOwKSAV', 'd375b934e43bd3c484b162ec1d67725b/CostaRica_Vulkankrater.jpg') },
    { name: 'Bahamas', src: img('comxpruZoh9rqekDg7sD5', 'd90805d82e7cd800b1a7f99558abd90b/Bahamas_Nassau_TCG.jpg') },
    { name: 'Belize', src: img('52DlCA5bcsZwzf2OgyUj4v', '6c0a084613aa09ed578a8c9b7a17252e/iStock-2156354573.jpg') },
    { name: 'Panama', src: img('20VLISk45tKInGos3fD1u7', '9a3fd1da5bd9103d4103a28f71747f16/El_Valle_de_Anton__Panama.jpg') }
  ],
  'North America': [
    { name: 'Canada', src: img('4o10LZngx2dF2lPBMomEIS', '79d54c77ff575453297addd96d42c9fd/Kanada_MoraineLake.jpg') },
    { name: 'USA', src: img('4qKkGsewSMqgIzrhbg8jUc', '5941e6892942fa67ac32f013d2315c10/Golden_Gate_Bridge_USA.jpg') },
    { name: 'Mexico', src: img('4WGqTAkH8NoLM3L8qAWD8', '8ffd0446462f889ea89edfa8c9c01b0c/Mexiko_Yucatan_Pyramide_des_Magiers_TCG.png') }
  ],
  'Oceania': [
    { name: 'Australia', src: img('62tyUpL6fH7VsSsH7KjOXt', '8965abe9818007096bca5bc3f48a1a2a/Australien_Zw%C3%83__lfApostel.jpg') },
    { name: 'New Zealand', src: img('4TvvBboaqN9Lij6WfPWd9R', 'b7226370048754c2404ccafb2efa4b4d/Neuseeland_LakePukaki.jpg') },
    { name: 'Fiji', src: img('6vDMh9qVdWDd9AE3sDFGGK', '69047d2be508794ca4ae0cdadb460710/Fidschi_StrandmitPalmen.jpg') },
    { name: 'French Polynesia', src: img('5nKdrLe1bxjlSQr6IzE9Fv', '7d50380c19fcb155d8ab9335cfbe22ab/Fatu_Hiva__Marquesas__Franz_sisch-Polynesien.png') }
  ],
  'South America': [
    { name: 'Argentina', src: img('3SX8d47FE4M5o6L4BikkPF', '60ab4e5ad9384f0d659b0ede57beb644/Argentinien_Wasserf%C3%83_lle.jpg') },
    { name: 'Brazil', src: img('7n2wn1HmXBldiLG7fN09g7', 'cb58b1375f01f61e0a217421029b38a2/Brasilien_Copacabana.jpg') },
    { name: 'Chile', src: img('3xe18V8IX5Os5izCuYzm4o', '4632f958fb506a12c11f0cf7372891f1/Chile_TorresdelPaine.jpg') },
    { name: 'Peru', src: img('6OBzVCAvpPqTVmqiwlpurU', 'e6370f33850b14c126aaf874b1cddc33/Peru_MachuPicchu.jpg') },
    { name: 'Bolivia', src: img('1Jy8X6JQCEE14GLwSfohqn', '186e262949910c49c8f83ba3ba98c97f/IsladelSol_Bolivien.jpg') },
    { name: 'Ecuador', src: img('7iNmOTL9MV48327mpSJdfj', '93f29e2c524478ab93facca4ab7af73d/Ecuador-Amazon-3.jpg') },
    { name: 'Colombia', src: img('1ufxjS1BbMCNv6K2cBtMhG', '1e40336f5b7dce7a347179acde6a1768/Kolumbien_Guatape.jpg') },
    { name: 'Uruguay', src: img('1OlGhZPQocslgmOS1roK8t', 'e2da4b37fac621cbe0265cfa32df2623/Uruguay_Motevideo.jpg') }
  ],
  'South Seas': [
    { name: 'Cook Islands', src: img('3VPMGvou1zpVa6VDLkjRvm', 'ccbb502d028a6859e972d6665e9747db/Rarotonga__Cookinseln.jpg') }
  ],
  'Middle East': [
    { name: 'Oman', src: img('7LxzvfAIz887oIr6pT0d9R', '762e9bff95a22701331ca2a79bddca4a/Bandar_Khayran__Oman.jpg') },
    { name: 'Saudi Arabia', src: img('7hjTmD3GBdC7YGyGCcwwoZ', 'abd0651fca99b0f52b2dc6bf6f7314ec/Al-_Ula__Medina__Saudi-Arabien.png') },
    { name: 'United Arab Emirates', src: img('3EnNa2rJ23mDnHSFxFaXU', 'ad7d721a9a162a0b8d5ef044fce3d7cb/Emirates_Palace_Abu_Dhabi__VAE.jpg') }
  ]
};
