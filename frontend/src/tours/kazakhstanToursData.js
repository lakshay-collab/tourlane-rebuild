// Adapters: Kazakhstan packages → listing cards + detail-template data (reuses the shared createAdapters from vietnamToursData).
import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../kazakhstanPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/kazakhstan/enquiry/passengers/', cruiseCity: '—',
  expert: { name: 'Aisha Khan', image: '/experts/riya.webp', role: 'Kazakhstan expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: 'Kazakhstan', href: '/asien/kazakhstan' }]
});

export const kazakhstanProducts = packages.map(toProduct);
export const kazakhstanTours = packages.map(build);
export const kazakhstanBySlug = Object.fromEntries(kazakhstanTours.map((t) => [t.detail.slug, t]));
