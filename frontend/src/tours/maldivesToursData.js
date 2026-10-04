// Adapters: Maldives packages → listing cards + detail-template data (reuses the shared createAdapters from vietnamToursData).
import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../maldivesPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/maldives/enquiry/passengers/', cruiseCity: '—',
  expert: { name: 'Aisha Naseem', image: '/experts/riya.webp', role: 'Maldives expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: 'Maldives', href: '/asien/maldives' }]
});

export const maldivesProducts = packages.map(toProduct);
export const maldivesTours = packages.map(build);
export const maldivesBySlug = Object.fromEntries(maldivesTours.map((t) => [t.detail.slug, t]));
