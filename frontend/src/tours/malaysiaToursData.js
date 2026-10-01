// Adapters: Malaysia packages → listing cards + detail-template data (reuses the shared createAdapters from vietnamToursData).
import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../malaysiaPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/malaysia/enquiry/passengers/', cruiseCity: '—',
  expert: { name: 'Arjun Mehta', image: '/experts/riya.webp', role: 'Malaysia expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: 'Malaysia', href: '/asien/malaysia' }]
});

export const malaysiaProducts = packages.map(toProduct);
export const malaysiaTours = packages.map(build);
export const malaysiaBySlug = Object.fromEntries(malaysiaTours.map((t) => [t.detail.slug, t]));
