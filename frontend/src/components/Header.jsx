import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { nav } from '../mock';

const BANNER_KEY = 'hi-banner-dismissed';

const menuSub = {
  'Destinations': ['Africa', 'Egypt', 'Asia', 'Europe', 'North America', 'South America', 'Oceania', 'Middle East'],
  'Trip types': ['Honeymoons', 'Family holidays', 'Road trips', 'Safari', 'Beach & relaxation', 'Adventure'],
  'Activities': ['Wildlife safari', 'Hiking & trekking', 'Diving & snorkelling', 'Cultural tours', 'Food & wine']
};

const subHref = (s) => (s === 'Egypt' ? '/afrika/aegypten' : s === 'Asia' ? '/asien' : null);

function MobileMenu({ open, setOpen }) {
  const [expanded, setExpanded] = useState(null);
  if (!open) return null;
  return (
    <div className="lg:hidden fixed inset-0 z-[70] bg-surface flex flex-col" data-testid="mobile-menu">
      <div className="h-[64px] px-4 flex items-center justify-between border-b border-outline-variant shrink-0">
        <a href="/" aria-label="Hi Tours"><Logo className="h-9 w-auto" /></a>
        <button onClick={() => setOpen(false)} aria-label="Close menu" data-testid="mobile-menu-close" className="p-2 -mr-2 text-onsurface"><X size={26} strokeWidth={1.75} /></button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-1">
        <ul>
          {nav.links.map((l) => {
            const sub = menuSub[l.label];
            const isOpen = expanded === l.label;
            return (
              <li key={l.label} className="border-b border-surface-highest">
                <button
                  onClick={() => (sub ? setExpanded(isOpen ? null : l.label) : setOpen(false))}
                  className="w-full flex items-center justify-between py-4 t-title-md text-onsurface"
                  data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {l.label}
                  {sub && <ChevronDown size={22} className={`text-onsurface-variant transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />}
                </button>
                {sub && (
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[520px]' : 'max-h-0'}`}>
                    <ul className="pb-3">
                      {sub.map((s) => {
                        const to = subHref(s);
                        return (
                          <li key={s}>
                            <a href={to || '#'} onClick={(e) => { if (!to) e.preventDefault(); else setOpen(false); }} className="block py-2.5 pl-3 t-body-lg text-onsurface-variant hover:text-primary transition-colors" data-testid="mobile-subnav-item">{s}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 py-6 t-title-md text-onsurface" data-testid="mobile-nav-phone">
          <Phone size={22} className="text-primary" /> {nav.phone}
        </a>
      </div>
    </div>
  );
}

export default function Header({ overlay = false }) {
  const [open, setOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(() => {
    try { return sessionStorage.getItem(BANNER_KEY) !== '1'; } catch { return true; }
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const dismissBanner = () => {
    try { sessionStorage.setItem(BANNER_KEY, '1'); } catch (e) { /* noop */ }
    setBannerOpen(false);
  };

  const textCls = overlay ? 'text-white' : 'text-onsurface';
  const dividerCls = overlay ? 'bg-white/30' : 'bg-outline-variant';

  const banner = bannerOpen ? (
    <div className="relative bg-deep-water text-white px-10 py-2 t-body-md text-center" data-testid="top-banner">
      {nav.banner}
      <button onClick={dismissBanner} aria-label="Dismiss" data-testid="banner-close" className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/80 hover:text-white transition-colors">
        <X size={18} strokeWidth={2} />
      </button>
    </div>
  ) : null;

  const bar = (
    <div className="tl-wide h-[72px] flex items-center justify-between">
      <a href="/" aria-label="Hi Tours" data-testid="logo-link">
        <Logo white={overlay} className="h-9 sm:h-10 w-auto" />
      </a>

      <nav className="hidden lg:flex items-center" data-testid="desktop-nav">
        {nav.links.map((l, i) => (
          <React.Fragment key={l.label}>
            {i >= 3 && <span className={`h-6 w-px ${dividerCls} mx-4`} />}
            <button className={`t-body-md ${textCls} hover:opacity-75 transition-opacity whitespace-nowrap ${i < 3 ? 'px-4' : ''}`} data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, '-')}`}>
              {l.label}
            </button>
          </React.Fragment>
        ))}
        <span className={`h-6 w-px ${dividerCls} mx-4`} />
        <button className={`flex items-center gap-2 t-body-md ${textCls} hover:opacity-75 transition-opacity`} data-testid="nav-phone">
          <Phone size={18} strokeWidth={1.75} className={overlay ? 'text-white' : 'text-primary'} />
          {nav.phone}
        </button>
      </nav>

      <button className={`lg:hidden ${textCls} p-1 ml-3`} onClick={() => setOpen((v) => !v)} aria-label="Menu" data-testid="mobile-menu-toggle">
        <Menu size={26} strokeWidth={1.75} />
      </button>
    </div>
  );

  return (
    <>
      {overlay ? (
        <div className="absolute inset-x-0 top-0 z-40" data-testid="site-header">
          {banner}
          {bar}
        </div>
      ) : (
        <>
          {banner}
          <header className="relative z-40 bg-surface border-b border-outline-variant" data-testid="site-header">
            {bar}
          </header>
        </>
      )}
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}
