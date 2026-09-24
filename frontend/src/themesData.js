// Themes mega-menu data for Hi Tours. Travel styles clubbed under thematic groups, each with a picture.
import { destinations } from './destinationsData';

const EG = '/afrika/aegypten/holidays';
const pic = (region, name) => destinations[region].find((d) => d.name === name).src;

export const themeGroups = [
  {
    key: 'adventure',
    title: 'Adventure',
    items: [
      { label: 'Northern Lights', href: '/trip-styles/northern-lights', image: pic('Europe', 'Iceland') },
      { label: 'Wildlife & Safari', href: '#', image: pic('Africa', 'Kenya') },
      { label: 'Trekking & Hiking', href: '#', image: pic('South America', 'Peru') },
      { label: 'Diving & Snorkelling', href: '#', image: pic('Asia', 'Maldives') },
      { label: 'Desert & Dunes', href: '#', image: pic('Africa', 'Namibia') }
    ]
  },
  {
    key: 'travel-styles',
    title: 'Travel styles',
    items: [
      { label: 'Honeymoons', href: `${EG}/honeymoon`, image: pic('Asia', 'Indonesia') },
      { label: 'Romantic escapes', href: `${EG}/honeymoon`, image: pic('Europe', 'Greece') },
      { label: 'Solo travel', href: '#', image: pic('Asia', 'Japan') },
      { label: 'Family holidays', href: `${EG}/family`, image: pic('Asia', 'Thailand') },
      { label: 'Group & friends', href: '#', image: pic('Central America', 'Costa Rica') },
      { label: 'Luxury', href: `${EG}/luxury`, image: pic('Middle East', 'United Arab Emirates') }
    ]
  },
  {
    key: 'culture-cities',
    title: 'Culture & cities',
    items: [
      { label: 'Culture & heritage', href: `${EG}/culture`, image: pic('Africa', 'Egypt') },
      { label: 'City breaks', href: '#', image: pic('Europe', 'England') },
      { label: 'Food & culinary', href: '#', image: pic('Europe', 'Italy') },
      { label: 'Short trips', href: `${EG}/short-trips`, image: pic('Asia', 'Sri Lanka') }
    ]
  },
  {
    key: 'nature-water',
    title: 'Nature & water',
    items: [
      { label: 'Beach & relaxation', href: `${EG}/beach`, image: pic('Africa', 'Mauritius') },
      { label: 'Nile & river cruises', href: `${EG}/nile-cruise`, image: pic('Asia', 'Vietnam') },
      { label: 'Islands & lagoons', href: '#', image: pic('Asia', 'Philippines') },
      { label: 'Lakes & mountains', href: '#', image: pic('North America', 'Canada') }
    ]
  }
];
