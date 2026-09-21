import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';
import { nav } from '../mock';
import MobileDrawer from './MobileDrawer';
import ExpertAdvicePanel from './ExpertAdvicePanel';

const BANNER_KEY = 'hi-banner-dismissed';

export default function Header({ overlay = false }) {
  const [open, setOpen] = useState(false);
  const [adviceOpen, setAdviceOpen] = useState(false);
  const adviceRef = useRef(null);
  const hoverTimer = useRef(null);
  const [bannerOpen, setBannerOpen] = useState(() => {
    try { return sessionStorage.getItem(BANNER_KEY) !== '1'; } catch { return true; }
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onDoc = (e) => { if (adviceRef.current && !adviceRef.current.contains(e.target)) setAdviceOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const dismissBanner = () => {
    try { sessionStorage.setItem(BANNER_KEY, '1'); } catch (e) { /* noop */ }
    setBannerOpen(false);
  };

  const hoverIn = () => { clearTimeout(hoverTimer.current); setAdviceOpen(true); };
  const hoverOut = () => { hoverTimer.current = setTimeout(() => setAdviceOpen(false), 120); };

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
        <Logo white={overlay} className="h-10 sm:h-11 w-auto" />
      </a>

      <nav className="hidden lg:flex items-center h-full" data-testid="desktop-nav">
        {nav.links.map((l, i) => (
          <React.Fragment key={l.label}>
            {i >= 3 && <span className={`h-6 w-px ${dividerCls} mx-4`} />}
            <button className={`t-body-md ${textCls} hover:opacity-75 transition-opacity whitespace-nowrap ${i < 3 ? 'px-4' : ''}`} data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, '-')}`}>
              {l.label}
            </button>
          </React.Fragment>
        ))}
        <span className={`h-6 w-px ${dividerCls} mx-4`} />
        <div className="relative h-full flex items-center" ref={adviceRef} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
          <button onClick={() => setAdviceOpen((v) => !v)} className={`flex items-center gap-2 t-body-md ${textCls} hover:opacity-75 transition-opacity`} data-testid="nav-phone" aria-expanded={adviceOpen}>
            <Phone size={18} strokeWidth={1.75} />
            {nav.phone}
          </button>
          <span className={`absolute inset-x-[-12px] bottom-0 h-[3px] rounded-t-sm transition-opacity duration-200 ${adviceOpen ? 'opacity-100' : 'opacity-0'} ${overlay ? 'bg-white' : 'bg-primary'}`} />
          {adviceOpen && (
            <div className="absolute right-[-12px] top-full pt-1 z-50" data-testid="advice-popover">
              <div className="w-[340px] bg-surface-low rounded-2xl shadow-[0_8px_24px_rgba(0,33,49,0.18)] overflow-hidden animate-[hi-fade-in_200ms_ease-out]">
                <ExpertAdvicePanel />
              </div>
            </div>
          )}
        </div>
      </nav>

      <button className={`lg:hidden ${textCls} w-10 h-10 -mr-2 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors`} onClick={() => setOpen(true)} aria-label="Open menu" data-testid="mobile-menu-toggle">
        <Menu size={24} strokeWidth={1.75} />
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
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
