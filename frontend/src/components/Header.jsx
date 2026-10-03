import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { nav } from '../mock';
import MobileDrawer from './MobileDrawer';
import ExpertAdvicePanel from './ExpertAdvicePanel';
import { DestinationsMenu, ThemesMenu } from './DesktopMenus';

const BANNER_KEY = 'hi-banner-dismissed';

const MENUS = [
  { key: 'destinations', label: 'Destinations' },
  { key: 'themes', label: 'Themes' }
];
const LINKS = [
  { label: 'About us', href: '/about' }
];

export default function Header({ overlay = false, floating = false }) {
  const [open, setOpen] = useState(false);
  const [adviceOpen, setAdviceOpen] = useState(false);
  const [menu, setMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const adviceRef = useRef(null);
  const adviceRefFloat = useRef(null);
  const hoverTimer = useRef(null);
  const menuTimer = useRef(null);
  const [bannerOpen, setBannerOpen] = useState(() => {
    try { return sessionStorage.getItem(BANNER_KEY) !== '1'; } catch { return true; }
  });

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onDoc = (e) => { if (adviceRef.current && !adviceRef.current.contains(e.target) && adviceRefFloat.current && !adviceRefFloat.current.contains(e.target)) setAdviceOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  // Home page only: switch to the floating centered nav after the hero is scrolled past.
  useEffect(() => {
    if (!floating) return undefined;
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [floating]);

  const dismissBanner = () => {
    try { sessionStorage.setItem(BANNER_KEY, '1'); } catch (e) { /* noop */ }
    setBannerOpen(false);
  };

  const hoverIn = () => { clearTimeout(hoverTimer.current); setAdviceOpen(true); };
  const hoverOut = () => { hoverTimer.current = setTimeout(() => setAdviceOpen(false), 120); };

  const openMenu = (key) => { clearTimeout(menuTimer.current); setMenu(key); };
  const closeMenu = () => { menuTimer.current = setTimeout(() => setMenu(null), 140); };
  const keepMenu = () => clearTimeout(menuTimer.current);
  const closeNow = () => { clearTimeout(menuTimer.current); setMenu(null); };

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
        {MENUS.map((m) => (
          <div key={m.key} className="relative h-full flex items-center" onMouseEnter={() => openMenu(m.key)} onMouseLeave={closeMenu}>
            <button
              className={`flex items-center gap-1 t-body-md ${textCls} hover:opacity-75 transition-opacity whitespace-nowrap px-4`}
              onClick={() => setMenu((v) => (v === m.key ? null : m.key))}
              aria-expanded={menu === m.key}
              data-testid={`nav-${m.key}`}
            >
              {m.label}
              <ChevronDown size={16} strokeWidth={2} className={`transition-transform duration-200 ${menu === m.key ? 'rotate-180' : ''}`} />
            </button>
            <span className={`absolute inset-x-2 bottom-0 h-[3px] rounded-t-sm transition-opacity duration-200 ${menu === m.key ? 'opacity-100' : 'opacity-0'} ${overlay ? 'bg-white' : 'bg-primary'}`} />
          </div>
        ))}
        {LINKS.map((l) => (
          <Link key={l.label} to={l.href} className={`t-body-md ${textCls} hover:opacity-75 transition-opacity whitespace-nowrap px-4`} data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, '-')}`}>
            {l.label}
          </Link>
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

  const megaPanel = menu ? (
    <div
      className="hidden lg:block absolute inset-x-0 top-full z-50 bg-surface border-t border-outline-variant shadow-[0_12px_28px_rgba(0,33,49,0.12)] animate-[hi-fade-in_180ms_ease-out]"
      onMouseEnter={keepMenu}
      onMouseLeave={closeMenu}
      data-testid="mega-menu-panel"
    >
      {menu === 'destinations' && <DestinationsMenu onNavigate={closeNow} />}
      {menu === 'themes' && <ThemesMenu onNavigate={closeNow} />}
    </div>
  ) : null;

  const floatingNav = floating ? (
    <>
      {/* Desktop: centered floating pill nav (glassmorphism) – home page, after hero */}
      <div
        className={`hidden lg:block fixed top-4 left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 ease-out ${scrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-5 pointer-events-none'}`}
        data-testid="floating-nav"
      >
        <nav className="flex items-center gap-1 rounded-full bg-white/70 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_10px_34px_rgba(0,33,49,0.16)] pl-2.5 pr-2 py-1.5">
          <a href="/" aria-label="Hi Tours" data-testid="floating-logo" className="flex items-center pr-1"><Logo className="h-7 w-auto" /></a>
          <span className="h-6 w-px bg-onsurface/15 mx-1" />
          {MENUS.map((m) => (
            <div key={m.key} className="relative" onMouseEnter={() => openMenu(m.key)} onMouseLeave={closeMenu}>
              <button
                onClick={() => setMenu((v) => (v === m.key ? null : m.key))}
                aria-expanded={menu === m.key}
                data-testid={`float-nav-${m.key}`}
                className={`flex items-center gap-1 t-body-md rounded-full px-4 py-2 transition-colors ${menu === m.key ? 'bg-onsurface/[0.07] text-onsurface' : 'text-onsurface hover:bg-onsurface/[0.05]'}`}
              >
                {m.label}
                <ChevronDown size={16} strokeWidth={2} className={`transition-transform duration-200 ${menu === m.key ? 'rotate-180' : ''}`} />
              </button>
            </div>
          ))}
          {LINKS.map((l) => (
            <Link key={l.label} to={l.href} className="t-body-md rounded-full px-4 py-2 text-onsurface hover:bg-onsurface/[0.05] transition-colors whitespace-nowrap" data-testid={`float-nav-${l.label.toLowerCase().replace(/\s/g, '-')}`}>{l.label}</Link>
          ))}
          <span className="h-6 w-px bg-onsurface/15 mx-1" />
          <div className="relative" ref={adviceRefFloat} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
            <button onClick={() => setAdviceOpen((v) => !v)} className="flex items-center gap-2 t-body-md rounded-full px-4 py-2 text-onsurface hover:bg-onsurface/[0.05] transition-colors" data-testid="float-nav-phone" aria-expanded={adviceOpen}>
              <Phone size={18} strokeWidth={1.75} />
              {nav.phone}
            </button>
            {adviceOpen && (
              <div className="absolute right-0 top-full pt-2 z-[61]" data-testid="float-advice-popover">
                <div className="w-[340px] bg-surface-low rounded-2xl shadow-[0_8px_24px_rgba(0,33,49,0.18)] overflow-hidden animate-[hi-fade-in_200ms_ease-out]">
                  <ExpertAdvicePanel />
                </div>
              </div>
            )}
          </div>
        </nav>
        {menu && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[min(1080px,94vw)]" onMouseEnter={keepMenu} onMouseLeave={closeMenu} data-testid="floating-mega-panel">
            <div className="bg-surface rounded-2xl border border-outline-variant shadow-[0_16px_40px_rgba(0,33,49,0.18)] overflow-hidden animate-[hi-fade-in_180ms_ease-out]">
              {menu === 'destinations' && <DestinationsMenu onNavigate={closeNow} />}
              {menu === 'themes' && <ThemesMenu onNavigate={closeNow} />}
            </div>
          </div>
        )}
      </div>

      {/* Mobile: compact floating pill with logo + hamburger (keeps the existing drawer) */}
      <div className={`lg:hidden fixed top-3 left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 ease-out ${scrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-5 pointer-events-none'}`} data-testid="floating-nav-mobile">
        <div className="flex items-center gap-3 rounded-full bg-white/75 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_10px_30px_rgba(0,33,49,0.16)] pl-4 pr-2 py-1.5">
          <a href="/" aria-label="Hi Tours"><Logo className="h-6 w-auto" /></a>
          <button onClick={() => setOpen(true)} aria-label="Open menu" data-testid="floating-mobile-menu" className="w-9 h-9 rounded-full flex items-center justify-center text-onsurface hover:bg-onsurface/[0.06] transition-colors">
            <Menu size={20} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </>
  ) : null;

  return (
    <>
      {overlay ? (
        <div className="absolute inset-x-0 top-0 z-40" data-testid="site-header">
          {banner}
          <div className="relative">
            {bar}
            {megaPanel}
          </div>
        </div>
      ) : (
        <>
          {banner}
          <header className="relative z-40 bg-surface border-b border-outline-variant" data-testid="site-header">
            {bar}
            {megaPanel}
          </header>
        </>
      )}
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
      {floatingNav}
    </>
  );
}
