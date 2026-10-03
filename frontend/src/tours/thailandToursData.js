// Adapters: NEW Thailand packages → listing cards + detail-template data (reuses the shared createAdapters).
import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../thailandPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/thailand/enquiry/passengers/', cruiseCity: '—',
  expert: { name: 'Ananya Iyer', image: '/team/asia-2.webp', role: 'Thailand expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: 'Thailand', href: '/asien/thailand' }]
});

export const thailandProducts = packages.map(toProduct);
export const thailandTours = packages.map(build);
export const thailandBySlug = Object.fromEntries(thailandTours.map((t) => [t.detail.slug, t]));
