// About us page – structure mirrors tourlane.com about-us + press page, copy in Hi Tours voice.
import { destinations } from './destinationsData';

const CT = 'https://images.ctfassets.net/rc3dlxapnu6k';
const YEARS = new Date().getFullYear() - 1995;

export const hero = {
  images: [
    { src: '/egypt/hero-egypt.webp', alt: 'Pyramids of Giza at golden hour' },
    { src: '/thailand/img4.webp', alt: 'Longtail boats in a turquoise bay, Phi Phi Islands' }
  ],
  h1: 'When travel means the world to you',
  sub: 'Personalised holidays. Easy planning. Transparent prices. Always-on support.'
};

export const about = {
  h2: 'About Hi Tours',
  paragraphs: [
    `Hi Tours is one of India’s longest-standing travel companies. Since 1995 we have been crafting tailor-made holidays and honeymoons for Indian travellers – first from a single office in Mumbai, today as a team of destination experts who have helped more than 4,00,000 travellers see over 40 countries their own way.`,
    `What makes us different? We combine ${YEARS} years of on-the-ground relationships with technology that makes planning simple. You are paired with a dedicated travel expert who has actually been where you are going, and every itinerary is built around your budget, your pace and your travel style – with a single, transparent price.`,
    'We were the first travel company in India to earn ISO 45001 certification for health and safety, and we are IATA and Travelife accredited. Our goal is simple: exquisitely crafted journeys and extraordinary experiences, planned with zero stress.'
  ],
  press: 'For press enquiries or interview requests, write to us at',
  pressEmail: 'press@hitours.in'
};

export const mediaKit = {
  h2: 'Hi Tours media kit',
  slides: [
    { src: `${CT}/48DouSD5ZmsCkAFHB1UTOD/5433052d141277b32a6d0f94d492e476/b9274e35489d5511a2d5f6b6343a011f.jpeg?w=1200&q=60&fm=webp`, alt: 'Traveller standing in a sandstone canyon' },
    { src: '/thailand/img3.webp', alt: 'Traditional Northern Thai dance performance' },
    { src: '/egypt/hero-egypt.webp', alt: 'Pyramids of Giza at golden hour' }
  ],
  quote: 'Life’s too short for standard travel. At Hi Tours we create tailor-made journeys that turn dreams into unforgettable adventures.',
  founder: { name: 'Vikram Nair', role: 'Hi Tours Founder & CEO', image: '/team/asia-3.webp' },
  cta: 'Download media kit',
  ctaHref: '#'
};

export const backed = {
  image: { src: `${CT}/5hYeqN6GyteVePjAxz8N5R/34631a551200deb2a979d07147d8c266/Andrew-Reed.jpeg?w=1200&q=60&fm=webp`, alt: 'Portrait of an industry partner' },
  h4: 'Hi Tours is trusted by the industry – IATA accredited, Travelife certified and India’s first ISO 45001 travel company.',
  quote: '“Hi Tours has quietly built one of the most dependable outbound travel operations in India. Thirty years of supplier relationships, an audited safety culture and experts who genuinely know their destinations – that is a rare combination, and it shows in their customer loyalty.”',
  by: 'Industry partner, International Air Transport Association (IATA)'
};

export const office = { src: `${CT}/26SKW2lGIieSg4aiS6iYEd/cfb2223408d7ae9fc2050607be959086/Tourlane_Office_Desks.jpg?w=2000&q=60&fm=webp`, alt: 'Inside the Hi Tours office' };

export const recognized = {
  label: 'Recognised by:',
  logos: [
    { src: '/badges/iso45001-t.png', alt: 'ISO 45001 certified' },
    { src: '/badges/cert3-t.png', alt: 'IATA accredited agent' },
    { src: '/badges/travelife-t.png', alt: 'Travelife certified' },
    { src: '/badges/tripadvisor.png', alt: 'Tripadvisor' }
  ]
};

export const why = {
  h3: 'Why choose Hi Tours?',
  items: [
    { image: `${CT}/4dTtp2faeaHnNRg0tbFfwR/43b48305c1dff18c0c4e0ad32ac2ca28/Booking_Process.jpg?w=1200&q=50&fm=webp`, alt: 'Couple planning a trip together', h4: 'Easy planning with transparent prices', text: 'Get a personalised itinerary for free in minutes, then work with one of our travel experts to fine-tune it. Planning is completely free with no hidden costs – when you book, you get one simple, all-in price. What you see is what you pay.' },
    { image: `${CT}/3h0CZ3wZkheTS9PpxjfxW3/b072bb0c84d44a78200d109a2b7bc7a9/Isle_of_Skye.png?w=1200&q=50&fm=webp`, alt: 'Travellers walking a mountain trail', h4: 'Destination experts who have been there', text: 'In a one-on-one consultation we pair you with an expert who knows your destination first-hand – the right season, the right hotels and the small details that make a trip feel effortless.' },
    { image: `${CT}/6IYRiDmRThVOAbcIPeXd14/1934d40f940b4a8ab82828ad038d54e1/Destination__Landscape__Starrating.jpg?w=1200&q=50&fm=webp`, alt: 'Mountain landscape with a customer rating', h4: 'Always-on support', text: 'Trusted by over 4,00,000 travellers, you get personal support from real people before, during and after your trip – including 24/7 assistance while you are away. We are proud to be rated 4.7 on Google and 4.9 on TripAdvisor.' }
  ]
};

export const steps = {
  h2: 'Tailor-made holidays don’t have to be complicated',
  items: [
    { n: 1, title: 'Dream it', text: 'Give us a few details – destination, travel dates, preferences and budget – and receive a free personalised itinerary in minutes.' },
    { n: 2, title: 'Customise it', text: 'In a one-on-one consultation we pair you with a destination expert who fine-tunes every stop, hotel and activity until the trip is unmistakably yours.' },
    { n: 3, title: 'Book it', text: 'Or better yet, we book it for you. Every detail is covered – visas, flights, transfers and hotels – and you have a dedicated expert with you every step of the way.' }
  ]
};

export const cta = { h2: 'Start planning your own Hi Tours holiday', button: 'Plan for free', href: '/asien' };

const pick = (region, name) => destinations[region].find((d) => d.name === name);
export const best = {
  h2: 'Experience the best of Asia & Africa',
  text: 'Handpicked, handcrafted and unforgettable. Whether you dream of sunrise at the pyramids, a leopard safari in Sri Lanka, island-hopping in Thailand or the tea hills of Kerala, our destination experts design a holiday just for you.',
  items: [
    { ...pick('Africa', 'Egypt'), href: '/afrika/aegypten' },
    { ...pick('Asia', 'Thailand'), href: '/asien/siam-splendour-thailand' },
    { ...pick('Asia', 'Sri Lanka'), href: '/asien/emerald-isle-explorer-sri-lanka' },
    { ...pick('Asia', 'Maldives'), href: '/asien' },
    { ...pick('Asia', 'Vietnam'), href: '/asien' },
    { ...pick('Asia', 'Japan'), href: '/asien' },
    { ...pick('Asia', 'Indonesia'), href: '/asien' },
    { ...pick('Africa', 'South Africa'), href: '#' },
    { ...pick('Africa', 'Kenya'), href: '#' }
  ]
};

export const faq = {
  h2: 'Frequently asked questions',
  items: [
    { q: 'What is Hi Tours?', a: ['Hi Tours is an Indian travel company that specialises in tailor-made international holidays and honeymoons. Since 1995 we have worked with destination experts and trusted local partners to design custom trips covering everything from flights and hotels to unique activities.', `With more than 4,00,000 travellers over ${YEARS} years, we have built a reputation for dependable, personal service – reflected in our 4.7 Google and 4.9 TripAdvisor ratings.`] },
    { q: 'How does Hi Tours work?', a: ['Start by giving us a few details – destination, dates, preferences and budget – and receive a free personalised itinerary in minutes. Then, in a one-on-one consultation, your dedicated travel expert refines the trip with you.', 'Once the trip is exactly how you want it, we handle every booking. You get personal support before, during and after your trip, including 24/7 assistance while you travel.'] },
    { q: 'Is Hi Tours only for luxury travel?', a: ['No – we create trips for all kinds of travellers and budgets. Our job is to match your travel style, whether that means five-star resorts or charming boutique stays off the beaten path.'] },
    { q: 'How do I start planning a trip?', a: ['Fill in the short planning form on any destination page to receive a free personalised itinerary. We then pair you with a personal travel expert who helps you customise the details.'] },
    { q: 'How much does a personalised trip from Hi Tours cost?', a: ['The cost depends on destination, duration, hotel category and the experiences you choose. We work with all budgets, and your expert provides a tailored quote based on your preferences.'] },
    { q: 'How much does a personalised offer cost?', a: ['Consulting with our travel experts is free and without obligation, including your initial personalised itinerary.'] },
    { q: 'Do I need to book my flights separately?', a: ['Not if you don’t want to. As an IATA-accredited agent we can book your international and domestic flights as part of your itinerary so that everything is coordinated.'] },
    { q: 'Can I modify or cancel my trip after booking?', a: ['Plans can change, and our team is here to help with any modifications or cancellations. Hi Tours Assure is included with every booking, and Hi Tours Flex adds free changes and cancellation up to 30 days before departure. Some supplier fees may apply – see Hi Tours Care for details.'] },
    { q: 'Are the trips private or group-based?', a: ['We specialise in private trips, giving you and your family or friends the flexibility to travel on your own terms. If you prefer a group departure, we can arrange that too.'] },
    { q: 'How do I contact Hi Tours for support during my trip?', a: ['You have a dedicated travel expert you can reach by phone, WhatsApp or email throughout your journey, plus our 24/7 emergency line while you are abroad.'] },
    { q: 'Can I book a private guide for my trip?', a: ['Yes – simply let your travel expert know and we will include the best local guide for your destination and interests in your itinerary.'] },
    { q: 'Is Hi Tours certified?', a: ['Yes. Hi Tours is IATA accredited, Travelife certified and was the first travel company in India to achieve ISO 45001 certification for occupational health and safety – an internationally audited standard for how we look after our travellers and our teams.'] }
  ]
};
