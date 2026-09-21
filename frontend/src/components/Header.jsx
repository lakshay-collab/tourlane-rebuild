import React, { useState, useEffect } from 'react';
import { Phone, User, ChevronDown, Menu, X } from 'lucide-react';
import { nav } from '../mock';

const Logo = () => (
  <div className="flex items-center gap-2 select-none">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-forest">
      <path d="M12 2C7 6 4 10 4 14a8 8 0 0016 0c0-4-3-8-8-12z" fill="currentColor" />
      <path d="M12 6c-2.5 2.5-4 5-4 8" stroke="#F4EFE6" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
    <span className="text-[22px] font-semibold tracking-tight text-ink">{nav.logo}</span>
  </div>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="w-full bg-ink text-cream text-[13px] text-center py-2.5 px-4 font-light">
        {nav.banner}
      </div>
      <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur shadow-sm' : 'bg-cream'}`}>
        <div className="max-w-[1240px] mx-auto px-5 h-[68px] flex items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-7">
            {nav.links.map((l) => (
              <button key={l} className="flex items-center gap-1 text-[15px] text-ink hover:text-forest transition-colors">
                {l}
                {(l === 'Destinations' || l === 'Trip Types' || l === 'Activities') && (
                  <ChevronDown size={15} className="mt-0.5 opacity-70" />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <span className="h-6 w-px bg-black/15" />
            <button className="flex items-center gap-2 text-[15px] text-ink hover:text-forest transition-colors">
              <Phone size={17} className="text-forest" />
              {nav.phone}
            </button>
            <span className="h-6 w-px bg-black/15" />
            <button className="flex items-center gap-2 text-[15px] text-ink border border-black/20 rounded-full pl-3 pr-4 py-1.5 hover:border-forest hover:text-forest transition-colors">
              <User size={16} />
              {nav.login}
            </button>
          </div>

          <button className="lg:hidden text-ink" onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-cream border-t border-black/10 px-5 py-4 flex flex-col gap-4">
            {nav.links.map((l) => (
              <button key={l} className="text-left text-[16px] text-ink">{l}</button>
            ))}
            <button className="flex items-center gap-2 text-[16px] text-forest"><Phone size={18} /> {nav.phone}</button>
            <button className="flex items-center gap-2 text-[16px] text-ink"><User size={18} /> {nav.login}</button>
          </div>
        )}
      </header>
    </>
  );
}
