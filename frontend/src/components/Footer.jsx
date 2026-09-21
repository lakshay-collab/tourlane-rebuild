import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { footer, trust } from '../mock';
import { BoxStars } from './Rating';

const Spotify = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2a10 10 0 100 20 10 10 0 000-20m4.586 14.424a.62.62 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 11-.277-1.215c3.809-.871 7.077-.496 9.712 1.115a.623.623 0 01.207.857m1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.13-9.965-1.166a.779.779 0 11-.452-1.491c3.632-1.102 8.147-.568 11.232 1.329a.78.78 0 01.257 1.071m.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.935.935 0 11-.542-1.79c3.532-1.072 9.404-.865 13.115 1.338a.936.936 0 01-.956 1.61z"/></svg>
);

const certs = [
  { src: '/badges/iso45001-t.png', alt: 'ISO 45001 certified', cls: 'h-14' },
  { src: '/badges/cert3-t.png', alt: 'IATA accredited', cls: 'h-11' },
  { src: '/badges/travelife-t.png', alt: 'Travelife certified', cls: 'h-12' }
];

const Badges = ({ className = '' }) => (
  <div className={`flex flex-col gap-5 ${className}`} data-testid="footer-badges">
    <div className="flex flex-col gap-2">
      <BoxStars size={20} rating={4.8} />
      <span className="t-body-md text-onsurface">4.8 {trust.outOf}</span>
      <span className="t-body-md text-onsurface">Based on 5,000+ travel reviews</span>
    </div>
    <div className="flex flex-wrap items-center gap-6" data-testid="footer-certifications">
      {certs.map((c) => (
        <img key={c.src} src={c.src} alt={c.alt} className={`${c.cls} w-auto object-contain mix-blend-multiply`} loading="lazy" />
      ))}
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-surface" data-testid="site-footer">
      <div className="tl-wide pt-12 pb-10 flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="lg:w-[460px] shrink-0">
          <div className="flex items-center justify-between">
            <a href="/" aria-label="Hi Tours"><Logo className="h-12 w-auto" /></a>
            <div className="flex items-center gap-4 lg:hidden"><Socials /></div>
          </div>
          <p className="hidden lg:block t-body-md text-onsurface mt-8">{footer.description}</p>
          <div className="hidden lg:flex items-center gap-4 mt-6"><Socials /></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 flex-1">
          {footer.columns.map((col) => (
            <div key={col.title} className="sm:w-[220px]">
              <h4 className="t-title-md text-onsurface">{col.title}</h4>
              <ul className="mt-5 space-y-2">
                {col.links.map((l) => (
                  <li key={l}><button className="t-body-md text-onsurface hover:underline text-left" data-testid="footer-link">{l}</button></li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex-1">
            <h4 className="t-title-md text-onsurface">{footer.care.title}</h4>
            <ul className="mt-5 space-y-2">
              {footer.care.lines.map((l) => <li key={l} className="t-body-md text-onsurface">{l}</li>)}
              <li><button className="t-label-lg text-primary hover:underline" data-testid="footer-care-cta">{footer.care.cta}</button></li>
            </ul>
            <Badges className="mt-8" />
          </div>
        </div>
      </div>

      <div className="border-t border-outline-variant">
        <div className="tl-wide py-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0">
          <button className="flex items-center gap-2 t-body-md text-onsurface" data-testid="footer-country">
            <span className="inline-block w-6 h-4 rounded-[2px] overflow-hidden" aria-hidden>
              <span className="block h-1/3 bg-[#FF9933]" /><span className="block h-1/3 bg-white" /><span className="block h-1/3 bg-[#138808]" />
            </span>
            {footer.country}
            <ChevronDown size={16} />
          </button>
          <span className="hidden sm:block h-6 w-px bg-outline-variant mx-6" />
          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6">
            {footer.legal.map((l) => (
              <li key={l}><button className="t-body-md text-onsurface hover:underline" data-testid="footer-legal-link">{l}</button></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function Socials() {
  return [Facebook, Instagram, Linkedin, Youtube, Spotify].map((Icon, i) => (
    <button key={i} className="w-9 h-9 rounded-full bg-onsurface/[0.06] flex items-center justify-center text-onsurface hover:bg-primary hover:text-white transition-colors" aria-label="Social" data-testid="footer-social">
      <Icon size={18} strokeWidth={1.9} className="w-[18px] h-[18px]" />
    </button>
  ));
}
