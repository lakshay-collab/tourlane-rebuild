// Themes mega-menu data for Hi Tours. Travel styles clubbed under thematic groups.
// Links point to existing Egypt holiday filter pages where a matching style exists, else '#'.

const EG = '/afrika/aegypten/holidays';

export const themeGroups = [
  {
    key: 'adventure',
    title: 'Adventure',
    blurb: 'Big-nature trips for travellers who want to be out in it.',
    items: [
      { label: 'Northern Lights', href: '#' },
      { label: 'Wildlife & Safari', href: '#' },
      { label: 'Trekking & Hiking', href: '#' },
      { label: 'Diving & Snorkelling', href: '#' },
      { label: 'Desert & Dunes', href: '#' }
    ]
  },
  {
    key: 'travel-styles',
    title: 'Travel styles',
    blurb: 'Trips shaped around who you are travelling with.',
    items: [
      { label: 'Honeymoons', href: `${EG}/honeymoon` },
      { label: 'Romantic escapes', href: `${EG}/honeymoon` },
      { label: 'Solo travel', href: '#' },
      { label: 'Family holidays', href: `${EG}/family` },
      { label: 'Group & friends', href: '#' },
      { label: 'Luxury', href: `${EG}/luxury` }
    ]
  },
  {
    key: 'culture-cities',
    title: 'Culture & cities',
    blurb: 'History, heritage and the buzz of great cities.',
    items: [
      { label: 'Culture & heritage', href: `${EG}/culture` },
      { label: 'City breaks', href: '#' },
      { label: 'Food & culinary', href: '#' },
      { label: 'Short trips', href: `${EG}/short-trips` }
    ]
  },
  {
    key: 'nature-water',
    title: 'Nature & water',
    blurb: 'Beaches, islands, rivers and the great outdoors.',
    items: [
      { label: 'Beach & relaxation', href: `${EG}/beach` },
      { label: 'Nile & river cruises', href: `${EG}/nile-cruise` },
      { label: 'Islands & lagoons', href: '#' },
      { label: 'Lakes & mountains', href: '#' }
    ]
  }
];

export const themesFeatured = {
  eyebrow: 'In the spotlight',
  title: 'Egypt honeymoons',
  text: 'Sunrise at the pyramids and a slow Nile cruise for two — tailor-made.',
  href: `${EG}/honeymoon`,
  cta: 'Explore honeymoons',
  image: '/egypt/hero-egypt.webp'
};
