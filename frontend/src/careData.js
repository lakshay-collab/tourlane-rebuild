// Hi Tours Care page – structure mirrors tourlane.com/tourlanecare/, terms adapted for the Indian market.
const CT = 'https://images.ctfassets.net/rc3dlxapnu6k';

export const hero = {
  images: [
    { src: `${CT}/1j3FagiKLFCk0w1F07B3vH/6ca9480e7aaac3a81251312e7e568c44/Tourlane_Care_Header_Image_left.png?w=1400&q=60&fm=webp`, alt: 'Aircraft flying overhead against a blue sky' },
    { src: `${CT}/5PnmwDUAzCAHLy1mg9gitp/01007f543d0819b7a94a6b05d5af50cd/Tourlane_Care_Header_Image_right.png?w=800&q=60&fm=webp`, alt: 'Two travellers by a river with a protection badge' }
  ],
  h1: 'Hi Tours Care',
  sub: 'Flexible rebooking and cancellation options',
  cta: 'Plan for free',
  ctaHref: '/asien',
  note: 'Your tailor-made itinerary – no cost, no commitment'
};

export const intro = {
  h2: 'Hi Tours Care: always by your side',
  p1: 'Your Hi Tours holiday should be smooth from start to finish. To guarantee you a peaceful and safe experience, every Hi Tours Care option includes:',
  bullets: [
    'Strict hygiene and safety standards, audited under ISO 45001',
    'A team dedicated to your safety and crisis management',
    'Immediate assistance in English and Hindi, available 24/7 in case of emergency'
  ],
  p2: 'Plan your trip with peace of mind and handle unexpected events with Hi Tours Care.',
  p3: 'Hi Tours Assure is included with every booking at no extra cost. For added peace of mind you can upgrade to Hi Tours Flex for a flat fee and enjoy greater flexibility with your booking, based on the terms outlined below. Review the options to find the best fit for you.'
};

export const graphic = {
  title: 'Your options at a glance',
  columns: ['45+ days before departure', '44–30 days', '29–15 days', '14–7 days', 'Less than 7 days / no-show'],
  rows: [
    { name: 'Hi Tours Assure', tag: 'Included', cells: ['25% cancellation fee', '50% cancellation fee', '75% cancellation fee', '90% cancellation fee', '100% cancellation fee'], note: 'Changes up to 30 days before departure for ₹2,500 per person plus any price difference' },
    { name: 'Hi Tours Flex', tag: 'Upgrade · ₹4,999 p.p.', free: 2, freeLabel: 'Free change of booking & free cancellation', cells: ['75% cancellation fee', '90% cancellation fee', '100% cancellation fee'] }
  ],
  legend: ['Free change & cancellation', 'Cancellation fees apply']
};

export const assure = {
  h2: 'Hi Tours Assure',
  lead: 'Our standard option, automatically included with your reservation at no additional cost.',
  blocks: [
    { label: 'Changes', text: 'With Hi Tours Assure you can make changes to part or all of your trip up to 30 days before departure. An administrative fee of ₹2,500 per person applies, along with any difference in price for the updated travel arrangements. Refunds of the original trip price are not available. Non-refundable flight tickets are excluded from changes.' },
    { label: 'Cancellation', text: 'If you cancel your entire trip, cancellation fees are charged depending on the period before your departure:', list: [
      'Up to 45 days before departure: 25% of the booking amount',
      '44 to 30 days before departure: 50% of the booking amount',
      '29 to 15 days before departure: 75% of the booking amount',
      '14 to 7 days before departure: 90% of the booking amount',
      'Less than 7 days or no-show: 100% of the booking amount'
    ] }
  ]
};

export const flex = {
  h2: 'Hi Tours Flex',
  lead: 'Add Hi Tours Flex to your reservation and enjoy no-questions-asked flexibility, for any reason.',
  blocks: [
    { label: 'Changes', text: 'With Hi Tours Flex you can make a one-time change to your dates or itinerary free of charge up to 30 days before departure – no administrative fee, you only pay any difference in tariff for the new arrangements. After using your one-time Flex change, further changes follow the terms of Hi Tours Assure. Refunds of the original trip price are not available.' },
    { label: 'Cancellation', text: 'With Hi Tours Flex you can cancel your land package at no cost up to 30 days before departure and receive a full refund (minus the Flex fee itself). If you cancel after that, cancellation fees apply based on how close you are to departure:', list: [
      '29 to 15 days before departure: 75% of the booking amount',
      '14 to 7 days before departure: 90% of the booking amount',
      'Less than 7 days or no-show: 100% of the booking amount'
    ] },
    { label: 'Upgrade fee', text: 'You can add Hi Tours Flex to your booking for a flat fee of ₹4,999 per person (₹9,999 per person for long-haul and luxury itineraries). Your travel expert confirms the exact amount with your quote. The fee is non-refundable and is paid with your initial deposit.' },
    { label: 'Availability', text: 'Hi Tours Flex applies to land arrangements only (excluding flights). Certain highly restricted wilderness and safari lodges follow the unbending policies of the property and are excluded; your travel expert will flag these clearly in your itinerary.' },
    { label: 'Important disclaimer', italic: true, text: 'Hi Tours Flex is not an insurance product but an optional service that gives you the flexibility to change your mind for any reason up to 30 days before your trip start date. If you add Hi Tours Flex to your booking, we waive our normal cancellation and change fees for cancellations or changes you request up to 30 days before departure. Hi Tours Flex is independent of, and not a substitute for, any travel insurance you may purchase from an insurance company. It does not reimburse third-party costs or other financial losses, is not applicable to flights included in your booking, and the Flex fee is non-refundable.' }
  ]
};

export const iso = {
  eyebrow: 'Globally certified safety',
  h2: 'One of the few travel brands in India with ISO 45001 certification',
  text: 'Your peace of mind is our standard, not an upgrade. As an ISO 45001 certified organisation, our commitment to your safety goes beyond standard agency promises. It means every ground partner, transport provider and hotel in our global network is held to rigorous, internationally audited safety and health standards. From 24/7 global crisis management to strict hygiene and operational audits, your well-being is engineered into every itinerary we design.',
  points: [
    'Vetted ground handlers and audited hotel safety standards',
    'Transport partners held to driver-rest and vehicle-safety rules',
    '24/7 crisis management and emergency assistance while you travel'
  ],
  badge: '/badges/iso45001-t.png'
};

export const cta = {
  title: 'Start your flexible booking',
  text: 'Plan your next Hi Tours holiday without any worries',
  button: 'Plan for free',
  href: '/asien'
};
