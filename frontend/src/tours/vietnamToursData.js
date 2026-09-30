// Adapters: Vietnam packages (vietnamPackages.js, WorkDrive source) → listing product cards + EgyptDetail template data.
import { packages, cityImages } from '../vietnamPackages';

const LETTERS = 'ABCDEFGHIJ';
const uniq = (a) => [...new Set(a)];
const countMeals = (it) => it.reduce((n, d) => n + (d.meals ? d.meals.split(',').length : 0), 0);
const fmt = (n) => `₹${n.toLocaleString('en-IN')}`;

// Generic adapters – ctx: { cityImages, expert, ctaHref, crumbs, base, cruiseCity }
export const createAdapters = (ctx) => {
const { cityImages, expert: EXPERT, ctaHref, crumbs: crumbBase, base, cruiseCity = 'Ha Long Bay' } = ctx;
const toProduct = (p) => {
  const cities = uniq(p.stays.map((s) => s[0]));
  const activities = p.itinerary.flatMap((d) => d.bullets).filter((b) => !/transfer|arrival|breakfast at|free time|free day|check-out|day at leisure|onward flight/i.test(b)).length;
  return {
    slug: p.slug, title: p.name, tag: p.tag, styles: p.styles, days: p.days, stops: cities.length, cities: cities.length,
    hotels: p.stays.length, activities, transfers: p.itinerary.length, meals: countMeals(p.itinerary),
    price: p.price, alt: p.alt, images: p.gallery, href: `${base}/${p.slug}`
  };
};

const pricingText = (p) => {
  const { rows, columns, basis } = p.pricing;
  const body = rows.map(([m, ...v]) => `${m}: ${v.map((x, i) => (columns && columns.length > 1 ? `${fmt(x)} (${columns[i]})` : fmt(x))).join(' / ')}`).join('; ');
  return `Pricing (${basis}): ${body}.`;
};

const build = (p) => {
  const prod = toProduct(p);
  const cities = uniq(p.stays.map((s) => s[0]));
  const stayFor = (city) => (p.stays.find((s) => s[0] === city) || [])[2] || '—';
  const stops = p.stays.map(([city, dayLabel, hotel], i) => {
    const days = p.itinerary.filter((d) => d.overnight === city || (city === cruiseCity && (d.overnight === 'On board' || d.title.includes(cruiseCity))));
    const bullets = uniq(days.flatMap((d) => d.bullets)).slice(0, 5);
    const images = cityImages(city);
    return {
      letter: LETTERS[i], name: city, dayLabel, bullets, images,
      activities: days.slice(0, 3).map((d, k) => ({ name: d.title, description: d.bullets.join('. ') + '.', optional: false, image: images[k % images.length] })),
      accommodation: { name: hotel, description: `${dayLabel} · as per the package accommodation list`, images: images.slice(0, 3) }
    };
  });
  const incl = `Included: ${p.inclusions.join('; ')}.`;
  const excl = `Not included: ${p.exclusions.join('; ')}.`;
  return {
    detail: {
      slug: p.slug, region: 'asia', ctaHref, cta: 'Design Your Escape',
      sub: 'Your travel plan – no obligation & tailor-made',
      banner: 'Worry-free planning: flexible rebooking and cancellation options on your land programme.',
      title: p.name, alt: p.alt, days: `${p.days} days / ${p.nights} nights`, stations: `${cities.length} stops`, transport: p.inclusions.some((x) => /flight/i.test(x)) ? 'Domestic flights, transfers & guided tours' : 'Transfers & guided tours',
      tag: p.tag, price: p.price, routeLabel: 'This holiday takes you to', routeCities: cities, tags: uniq([p.tag, ...p.styles]),
      stats: { days: prod.days, cities: prod.cities, hotels: prod.hotels, activities: prod.activities, transfers: prod.transfers }, gallery: p.gallery,
      services: [
        [`${prod.hotels} hotels`, 'Accommodation'], [`${prod.activities} activities`, 'Activities'], [`${prod.transfers} transfers`, 'Transport'], [`${prod.meals} meals`, 'Meals'],
        ['24/7 support', '24/7 Support'], [p.inclusions.some((x) => /flight/i.test(x)) ? 'Domestic flights' : 'Entrance fees', 'Customise', 'Included as listed']
      ],
      expert: { ...EXPERT, quote: p.summary, quoteMore: `${p.days} days / ${p.nights} nights from ${fmt(p.price)} per person. ${incl}` }
    },
    route: { stops },
    glance: {
      h2: 'Tour summary', short: p.summary, readMore: 'Read more', readLess: 'Read less', hide: 'Hide tour summary',
      intro: `${incl} ${excl}`, intro2: pricingText(p),
      accommodationHeading: 'Accommodation', highlightsHeading: 'Key highlights', dayHeading: 'Day', routeHeading: 'Route',
      days: p.itinerary.map((d) => ({ title: `Day ${d.day}: ${d.title}${d.meals ? ` (${d.meals})` : ''}`, text: d.bullets[0], hotel: d.overnight ? (d.overnight === 'On board' ? stayFor(cruiseCity) : stayFor(d.overnight)) : 'Departure', highlights: d.bullets.slice(1, 4).length ? d.bullets.slice(1, 4) : d.bullets })),
      outro: excl
    },
    crumbs: [...crumbBase, { label: p.name }]
  };
};
return { toProduct, build };
};

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/vietnam/enquiry/passengers/',
  expert: { name: 'Riya', image: '/experts/riya.webp', role: 'Vietnam expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: 'Vietnam', href: '/asien/vietnam' }]
});
export const vietnamProducts = packages.map(toProduct);
export const vietnamTours = packages.map(build);
export const vietnamBySlug = Object.fromEntries(vietnamTours.map((t) => [t.detail.slug, t]));
