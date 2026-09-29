// Adapters: Sri Lanka PDF packages → listing cards + detail-template data (existing Emerald Isle package is separate and untouched).
import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../srilankaPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/sri-lanka/enquiry/passengers/', cruiseCity: '—',
  expert: { name: 'Kabir Shah', image: '/team/asia-5.webp', role: 'Sri Lanka & Maldives expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: 'Sri Lanka', href: '/asien/sri-lanka' }]
});

export const srilankaProducts = packages.map(toProduct);
export const srilankaTours = packages.map(build);
export const srilankaBySlug = Object.fromEntries(srilankaTours.map((t) => [t.detail.slug, t]));
