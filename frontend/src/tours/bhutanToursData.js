// Adapters: Bhutan packages → listing cards + detail-template data (reuses the shared createAdapters from vietnamToursData).
import { createAdapters } from './vietnamToursData';
import { packages, cityImages } from '../bhutanPackages';

const { toProduct, build } = createAdapters({
  cityImages, base: '/asien', ctaHref: '/l/bhutan/enquiry/passengers/', cruiseCity: '—',
  expert: { name: 'Tenzin Dorji', image: '/experts/riya.webp', role: 'Bhutan expert at Hi Tours', createdBy: 'Trip created by', more: 'Read more', less: 'Read less' },
  crumbs: [{ label: 'Destinations', href: '/reiseziele/' }, { label: 'Asia', href: '/asien' }, { label: 'Bhutan', href: '/asien/bhutan' }]
});

export const bhutanProducts = packages.map(toProduct);
export const bhutanTours = packages.map(build);
export const bhutanBySlug = Object.fromEntries(bhutanTours.map((t) => [t.detail.slug, t]));
