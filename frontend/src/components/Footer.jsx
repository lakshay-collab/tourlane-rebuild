import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, ChevronDown, X } from 'lucide-react';
import Logo from './Logo';
import { footer, trust } from '../mock';
import { BoxStars } from './Rating';
import ExpertAdvicePanel from './ExpertAdvicePanel';

const FOOTER_HREFS = {
  'About us': '/about',
  'Vietnam': '/asien/vietnam',
  'Sri Lanka': '/asien/sri-lanka',
  'Thailand': '/asien/thailand',
  'Singapore': '/asien/singapore',
  'Malaysia': '/asien/malaysia',
  'Egypt': '/afrika/aegypten',
  'Kazakhstan': '/asien/kazakhstan',
  'Bhutan': '/asien/bhutan',
  'Maldives': '/asien/maldives',
  'Press': '/press'
};

const LEGAL_HREFS = { 'Privacy': '/privacy', 'Terms & Conditions': '/terms' };

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

const FooterColumn = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-outline-variant sm:border-0" data-testid="footer-column">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-4 sm:py-0 sm:pointer-events-none"
        data-testid="footer-column-toggle"
      >
        <h4 className="t-title-md text-onsurface">{title}</h4>
        <ChevronDown size={18} className={`sm:hidden transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`${open ? 'block' : 'hidden'} sm:block pb-4 sm:pb-0 sm:mt-5`}>
        {children}
      </div>
    </div>
  );
};

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [adviceOpen, setAdviceOpen] = useState(false);

  const goToSection = (id) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 400);
    }
  };

  return (
    <footer className="bg-surface" data-testid="site-footer">
      <div className="h-px bg-outline-variant/60" data-testid="footer-divider-top" />

      <div className="tl-wide py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <a href="/" aria-label="Hi Tours" className="shrink-0"><Logo tagline className="h-12 w-auto" /></a>
          <div className="flex items-center gap-3 sm:gap-4"><Socials /></div>
        </div>
      </div>

      <div className="h-px bg-outline-variant/60" data-testid="footer-divider-logo" />

      <div className="tl-wide pt-6 sm:hidden">
        <Badges />
      </div>

      <div className="tl-wide pt-8 pb-10 flex flex-col lg:flex-row gap-4 sm:gap-10 lg:gap-16">
        <p className="hidden lg:block lg:w-[340px] shrink-0 t-body-md text-onsurface">{footer.description}</p>

        <div className="flex flex-col sm:flex-row gap-0 sm:gap-6 flex-1">
          {footer.columns.map((col) => (
            <FooterColumn key={col.title} title={col.title}>
              <ul className="space-y-2 sm:w-[200px]">
                {col.links.map((l) => (
                  <li key={l}>{FOOTER_HREFS[l]
                    ? <Link to={FOOTER_HREFS[l]} className="t-body-md text-onsurface hover:underline text-left" data-testid={`footer-link-${l.toLowerCase().replace(/\s/g, '-')}`}>{l}</Link>
                    : l === 'Reviews'
                      ? <button onClick={() => goToSection('moments')} className="t-body-md text-onsurface hover:underline text-left" data-testid="footer-link-reviews">{l}</button>
                      : l === 'Travel with us' || l === 'More destinations'
                        ? <button onClick={() => goToSection('destinations')} className="t-body-md text-onsurface hover:underline text-left" data-testid={`footer-link-${l.toLowerCase().replace(/\s/g, '-')}`}>{l}</button>
                        : <button className="t-body-md text-onsurface hover:underline text-left" data-testid="footer-link">{l}</button>}</li>
                ))}
              </ul>
            </FooterColumn>
          ))}
          <FooterColumn title={footer.care.title}>
            <ul className="space-y-2">
              {footer.care.lines.map((l) => <li key={l} className="t-body-md text-onsurface">{l}</li>)}
              <li><Link to="/about" className="t-label-lg text-primary hover:underline" data-testid="footer-care-cta">{footer.care.cta}</Link></li>
            </ul>
            <div className="hidden sm:block mt-8"><Badges /></div>
          </FooterColumn>
        </div>
      </div>

      <div className="border-t border-outline-variant">
        <div className="tl-wide py-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0">
          <button className="flex items-center gap-2 t-body-md text-onsurface" data-testid="footer-country">
            <svg viewBox="0 0 30 20" className="w-6 h-4 rounded-[2px] shrink-0" aria-hidden data-testid="footer-flag-india">
              <rect width="30" height="20" fill="#FF9933" />
              <rect y="6.667" width="30" height="6.667" fill="#FFFFFF" />
              <rect y="13.333" width="30" height="6.667" fill="#138808" />
              <circle cx="15" cy="10" r="2.6" fill="none" stroke="#000080" strokeWidth="0.55" />
              <circle cx="15" cy="10" r="0.45" fill="#000080" />
              {Array.from({ length: 24 }).map((_, i) => (
                <line key={i} x1="15" y1="10" x2="15" y2="7.45" stroke="#000080" strokeWidth="0.22" transform={`rotate(${i * 15} 15 10)`} />
              ))}
            </svg>
            {footer.country}
            <ChevronDown size={16} />
          </button>
          <span className="hidden sm:block h-6 w-px bg-outline-variant mx-6" />
          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6">
            {footer.legal.map((l) => (
              <li key={l}>{LEGAL_HREFS[l]
                ? <Link to={LEGAL_HREFS[l]} className="t-body-md text-onsurface hover:underline" data-testid={`footer-legal-${l.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{l}</Link>
                : l === 'Expert advice'
                  ? <button onClick={() => setAdviceOpen(true)} className="t-body-md text-onsurface hover:underline" data-testid="footer-legal-expert-advice">{l}</button>
                  : <button className="t-body-md text-onsurface hover:underline" data-testid="footer-legal-link">{l}</button>}</li>
            ))}
          </ul>
        </div>
      </div>

      {adviceOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40" onClick={() => setAdviceOpen(false)} data-testid="footer-advice-overlay">
          <div className="relative w-full max-w-[360px] bg-surface-low rounded-2xl shadow-[0_12px_40px_rgba(0,33,49,0.28)] overflow-hidden animate-[hi-fade-in_200ms_ease-out]" onClick={(e) => e.stopPropagation()} data-testid="footer-advice-modal">
            <button onClick={() => setAdviceOpen(false)} aria-label="Close" className="absolute right-3 top-3 w-8 h-8 rounded-full flex items-center justify-center text-onsurface hover:bg-onsurface/[0.08] transition-colors z-10" data-testid="footer-advice-close">
              <X size={18} />
            </button>
            <ExpertAdvicePanel />
          </div>
        </div>
      )}
    </footer>
  );
}

function Socials() {
  const links = [
    { Icon: Facebook, href: 'https://www.facebook.com/HiToursIN/', label: 'Facebook' },
    { Icon: Instagram, href: 'https://www.instagram.com/hitours', label: 'Instagram' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/hi-tours-group/', label: 'LinkedIn' },
    { Icon: Youtube, href: 'https://youtube.com/@hitoursgroup?si=EfxsTKBbup36lxiZ', label: 'YouTube' }
  ];
  return links.map(({ Icon, href, label }) => (
    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-onsurface/[0.06] flex items-center justify-center text-onsurface hover:bg-primary hover:text-white transition-colors" aria-label={label} data-testid={`footer-social-${label.toLowerCase()}`}>
      <Icon size={18} strokeWidth={1.9} className="w-[18px] h-[18px]" />
    </a>
  ));
}
