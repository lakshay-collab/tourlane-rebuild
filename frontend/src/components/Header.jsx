import React, { useState, useEffect } from 'react';
import { Phone, User, Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { nav } from '../mock';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {bannerOpen && (
        <div className="relative bg-deep-water text-white px-10 py-2 t-body-md text-center" data-testid="top-banner">
          {nav.banner}
          <button onClick={() => setBannerOpen(false)} aria-label="Dismiss" data-testid="banner-close" className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/80 hover:text-white transition-colors">
            <X size={18} strokeWidth={2} />
          </button>
        </div>
      )}

      <header className="relative z-40 bg-surface" data-testid="site-header">
        <div className="tl-wide h-[72px] flex items-center justify-between">
          <a href="/" aria-label="Hi Tours" data-testid="logo-link">
            <Logo className="h-9 sm:h-10 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center" data-testid="desktop-nav">
            {nav.links.map((l, i) => (
              <React.Fragment key={l.label}>
                {i >= 3 && <span className="h-6 w-px bg-outline-variant mx-4" />}
                <button className={`t-body-md text-onsurface hover:text-primary transition-colors whitespace-nowrap ${i < 3 ? 'px-4' : ''}`} data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, '-')}`}>
                  {l.label}
                </button>
              </React.Fragment>
            ))}
            <span className="h-6 w-px bg-outline-variant mx-4" />
            <button className="flex items-center gap-2 t-body-md text-onsurface hover:text-primary transition-colors" data-testid="nav-phone">
              <Phone size={18} strokeWidth={1.75} className="text-primary" />
              {nav.phone}
            </button>
            <button className="btn-outlined ml-7" data-testid="nav-login">
              <User size={18} strokeWidth={1.75} className="text-primary" />
              {nav.login}
            </button>
          </nav>

          <button className="text-onsurface p-1 ml-3 lg:ml-6" onClick={() => setOpen((v) => !v)} aria-label="Menu" data-testid="mobile-menu-toggle">
            {open ? <X size={26} strokeWidth={1.75} /> : <Menu size={26} strokeWidth={1.75} />}
          </button>
        </div>

        {open && (
          <div className="fixed inset-x-0 top-[72px] bottom-0 bg-surface z-50 overflow-y-auto" data-testid="mobile-menu">
            <ul className="px-4 sm:px-8 py-2">
              {nav.links.map((l) => (
                <li key={l.label} className="border-b border-surface-highest">
                  <button className="w-full flex items-center justify-between py-4 t-body-lg text-onsurface">
                    {l.label}
                    {l.menu && <ChevronDown size={20} className="text-onsurface-variant" />}
                  </button>
                </li>
              ))}
            </ul>
            <div className="px-4 sm:px-8 pt-4 flex flex-col gap-4">
              <button className="flex items-center gap-3 t-body-lg text-onsurface"><Phone size={20} className="text-primary" /> {nav.phone}</button>
              <button className="btn-outlined w-fit"><User size={18} className="text-primary" /> {nav.login}</button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
