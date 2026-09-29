// About us page – 1:1 copy of tourlane.com/about-us with Hi Tours branding.
import { destinations } from './destinationsData';

const CT = 'https://images.ctfassets.net/rc3dlxapnu6k';
const TL = 'https://www.tourlane.com/cfa-assets/media';

export const hero = {
  images: [
    { src: `${CT}/OaJw6YzwUUtV26kLyUBO6/79912739be76f4e90d9e199372441b36/Landscape_Sicily_Italy.jpg?w=1400&q=60&fm=webp`, alt: 'Coastal landscape at sunset with rocky cliffs, turquoise water and a historic stone tower, Sicily' },
    { src: `${CT}/1vyau2tbwjkDRCv588lHTC/0ca8e1daf46dd6ace6865506ce7ce3d8/Big-Ben_London_UK.png?w=800&q=60&fm=webp`, alt: 'Low-angle view of Big Ben in London against a partly cloudy sky' }
  ],
  h1: 'When travel means the world to you',
  sub: 'Personalized travel. Easy planning. Transparent prices. Always-on support.'
};

export const welcome = {
  h2: 'Welcome to Hi Tours',
  paragraphs: [
    'Born in Europe, now planning trips for Americans who want to experience it like a local. Since 2016, we’ve crafted custom, multi-stop trips all across Europe that fit your budget and your travel style.',
    'What makes us different? We bring our European roots and local know-how to to every step. By pairing you with an English-speaking, native-European expert and focusing on the essential needs of U.S. travelers, you get a seamless, authentic experience from start to finish.',
    'Trusted by over 100,000 global travelers, our goal at Hi Tours is simple: Tailored, exclusive journeys and extraordinary experiences that fit your budget.'
  ]
};

export const recognized = {
  label: 'Recognized by:',
  press: [
    { src: `${TL}/cnbc.svg`, alt: 'CNBC' },
    { src: `${TL}/forbes.svg`, alt: 'Forbes' },
    { src: `${TL}/lonely-planet.svg`, alt: 'Lonely Planet' }
  ],
  badges: [
    { src: `${TL}/bbb-a-rating.svg`, alt: 'Better Business Bureau A+ Rating' },
    { src: `${TL}/asta.png`, alt: 'American Society of Travel Advisors' }
  ]
};

export const why = {
  h3: 'Why Choose Hi Tours?',
  items: [
    { image: `${CT}/4dTtp2faeaHnNRg0tbFfwR/43b48305c1dff18c0c4e0ad32ac2ca28/Booking_Process.jpg?w=1200&q=50&fm=webp`, alt: 'Couple, planning', h4: 'Easy planning with transparent prices', text: 'Get a personalized travel itinerary for free in minutes. Then, work with one of our travel experts to customize it to your preferences. Creating your perfect getaway is completely free — there are no hidden costs. When you book, you get a simple, all-in-one price. What you see is what you pay.' },
    { image: `${CT}/3h0CZ3wZkheTS9PpxjfxW3/b072bb0c84d44a78200d109a2b7bc7a9/Isle_of_Skye.png?w=1200&q=50&fm=webp`, alt: 'Isle of Skye, Scotland', h4: 'Local expertise from private VIP guides', text: 'In a one-on-one consultation, we pair you with an English-speaking, native-European travel expert and customize your itinerary even more. Our experts are locals to where you\'re going, providing in-depth knowledge on every destination.' },
    { image: `${CT}/6IYRiDmRThVOAbcIPeXd14/1934d40f940b4a8ab82828ad038d54e1/Destination__Landscape__Starrating.jpg?w=1200&q=50&fm=webp`, alt: 'Trustpilot, mountain', h4: 'Always-on support', text: 'Trusted by over 150,000 global travelers, get personalized support from real people before, during, and after your trip. Our services are designed specifically for U.S. travelers, meaning we understand your unique needs to ensure an exceptional journey. We’re proud to consistently deliver ', link: { label: 'outstanding customer satisfaction', href: 'https://www.trustpilot.com/review/www.tourlane.de' }, textAfter: ', with travelers rating our support among the best in the industry.' }
  ]
};

export const steps = {
  h2: 'Custom travel packages don\'t have to be complicated',
  items: [
    { n: 1, title: 'Dream it', text: 'Give us a few details like destination, travel preferences, and budget to receive a free personalized travel itinerary in minutes.' },
    { n: 2, title: 'Customize it', text: 'In a one-on-one consultation, we pair you with an English-speaking, native-European travel expert to customize your trip even more, making it unique to you and providing in-depth knowledge on every destination.' },
    { n: 3, title: 'Book it', text: 'Or better yet, we\'ll book it for you. Every detail is covered by us and you\'ll have dedicated guides with you every step of the way, so you can focus on the fun. No action needed — just enjoy the ride.' }
  ]
};

export const cta = { h2: 'Start planning your own Hi Tours' };

const pick = (region, name) => destinations[region].find((d) => d.name === name);
export const best = {
  h2: 'Experience the best of Asia & Africa',
  text: 'Handpicked, handcrafted, and unforgettable. Whether you dream of sunrise at the pyramids of Egypt, island-hopping in Thailand, a leopard safari in Sri Lanka, or diving into the historic charm of Vietnam and Japan, our destination experts design personalized travel itineraries just for you.',
  items: [
    { ...pick('Africa', 'Egypt'), href: '/afrika/aegypten' },
    { ...pick('Asia', 'Thailand'), href: '/asien/siam-splendour-thailand' },
    { ...pick('Asia', 'Sri Lanka'), href: '/asien/emerald-isle-explorer-sri-lanka' },
    { ...pick('Asia', 'Maldives'), href: '/asien' },
    { ...pick('Asia', 'Vietnam'), href: '/asien/vietnam' },
    { ...pick('Asia', 'Japan'), href: '/asien' },
    { ...pick('Asia', 'Indonesia'), href: '/asien' },
    { ...pick('Africa', 'South Africa'), href: '/asien' },
    { ...pick('Africa', 'Kenya'), href: '/asien' }
  ]
};

export const faq = {
  h2: 'Frequently asked questions',
  items: [
    { q: 'What is Hi Tours?', a: ['Hi Tours is a European travel company that specializes in crafting personalized, tailor-made travel experiences. Since 2016, we have been working with local travel experts to design custom trips, covering everything from flights and accommodations to unique activities, ensuring your journey is just as seamless as it is memorable.', 'With over 100,000 trips booked, we’ve built a strong reputation for delivering exceptional travel experiences. Our commitment to customer satisfaction is reflected in our 4.4-star rating on Trustpilot, as well as the numerous awards we\'ve received for our service excellence.'] },
    { q: 'How does Hi Tours work?', a: ['Hi Tours combines the power of technology with one-on-one services to turn your dream getaway into a reality. Start by giving us a few details like destination, travel preferences, and budget to receive a free personalized travel itinerary in minutes. Then, in a one-on-one consultation, we pair you with an English-speaking, native-European travel expert to customize your itinerary even more, making it unique to you and providing in-depth knowledge on every destination.', 'Once your trip is exactly how you want it, we handle all the bookings. You\'ll get personalized support from your dedicated guides before, during, and after your trip. And since our services are designed specifically for U.S. travelers, we understand your unique needs to ensure an exceptional journey.'] },
    { q: 'Is Hi Tours only for luxury travel?', a: ['No — we create trips for all types of travelers and budgets! Our goal is to design a trip that matches your preferences, travel style, and budget, whether that means 5-star hotels or hidden gems off the beaten path.'] },
    { q: 'How do I start planning a trip?', a: ['Start by filling out our trip planning form on our website to receive a free personalize travel itinerary in less than a minute. Then, we’ll pair you with a personal travel expert who will help you customize the details even further.'] },
    { q: 'How much does a personalized trip from Hi Tours cost?', a: ['The cost of your trip depends on various factors, including the destination, duration, and type of accommodations and experiences you choose. We work with all budgets, so your personal travel expert will provide a tailored quote based on your preferences and budget.'] },
    { q: 'How much does a personalized offer cost?', a: ['Consulting with our Hi Tours travel experts is free and without obligation, including the initial personalized itinerary for your trip.'] },
    { q: 'Do I need to book my flights separately?', a: ['Not if you don\'t want to! We can take care of booking your flights as part of your customized itinerary. Our travel experts will ensure that everything from flights to accommodations are coordinated for your trip.'] },
    { q: 'Can I modify or cancel my trip after booking?', a: ['We understand that plans can change, and our team is here to assist you with any modifications or cancellations. However, please note that some changes or cancellations may incur additional fees depending on the suppliers and policies in place.'] },
    { q: 'Are the trips private or group-based?', a: ['We specialize in private trips, giving you and your family or friends the flexibility to travel on your terms. However, we can also arrange group tours if that’s what you prefer. If you can dream it, we can build it.'] },
    { q: 'How do I contact Hi Tours for support during my trip?', a: ['Our team is available to support you throughout your entire journey. You’ll have a dedicated, personal travel expert you can reach via phone, email, or through our app for any assistance you need while traveling.'] },
    { q: 'Can I book a private guide for my trip?', a: ['Yes, absolutely! If you’re interested in having a private guide during your trip, simply let your Hi Tours Travel Expert know. They’ll be happy to include this in your personalized itinerary and find the best guide to match your destination and interests.'] },
    { q: 'Are you certified by the Better Business Bureau (BBB)?', a: ['Yes. Better Business Bureau (BBB) has reviewed Hi Tours, and we are recognized as a BBB-accredited business. This accreditation reflects our commitment to transparency, customer service, and trust. You can view our BBB profile and rating directly on their website for full details.'] }
  ]
};
