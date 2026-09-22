import React, { useEffect, useState, useRef, useCallback } from 'react';
import { hero, crumbs, places, themes } from '../../egyptListingData';
import { ChevronRight, ChevronDown } from './EgyptIcons';
import { NavIcon } from './EgyptNavIcons';
import TrustBar from '../TrustBar';
import Header from '../Header';

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

const guide = themes.items.filter((t) => t.tag === 'Travel guide');
const inspiration = themes.items.filter((t) => t.tag === 'Inspiration');

const buildTabs = () => [
  { key: 'about', label: 'About Egypt', target: 'about' },
  { key: 'tours', label: 'Egypt holidays', target: 'tours' },
  { key: 'guide', label: 'Travel guide', items: guide.map((t) => ({ id: t.title, label: t.title, icon: t.icon, href: t.href })) },
  { key: 'inspiration', label: 'Inspiration', items: inspiration.map((t) => ({ id: t.title, label: t.title, icon: t.icon, href: t.href })) },
  { key: 'places', label: 'Places', items: places.items.map((p) => ({ id: p.title, label: p.title, icon: 'pin', href: p.href })) }
];

export function StickyTabs({ tabs: tabsProp, testId = 'eg' }) {
  const [active, setActive] = useState('about');
  const [open, setOpen] = useState(null);
  const [left, setLeft] = useState(16);
  const wrapRef = useRef(null);
  const tabs = tabsProp || buildTabs();

  useEffect(() => {
    const onScroll = () => {
      const t = document.getElementById('tours');
      setActive(t && t.getBoundingClientRect().top <= 120 ? 'tours' : 'about');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(null); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('touchstart', onDoc, { passive: true });
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('touchstart', onDoc); document.removeEventListener('keydown', onKey); };
  }, []);

  const toggle = useCallback((key, e) => {
    if (open === key) return setOpen(null);
    const r = e.currentTarget.getBoundingClientRect();
    const w = wrapRef.current.getBoundingClientRect();
    setLeft(Math.max(8, Math.min(r.left - w.left, w.width - 288)));
    setOpen(key);
  }, [open]);

  const openTab = tabs.find((t) => t.key === open);

  return (
    <div ref={wrapRef} className="relative z-20 bg-[#FBF9F1] border-b border-[#E4E3DB]" data-testid={`${testId}-tabs`}>
      <div className="w-full max-w-[1440px] mx-auto md:px-6 lg:px-10 flex items-center justify-between">
        <div className="flex flex-nowrap overflow-x-auto no-scrollbar px-2 sm:px-4 md:px-0 w-full md:w-auto" data-testid={`${testId}-tabs-strip`}>
          {tabs.map((t) => {
            const isOpen = open === t.key;
            const isActive = !t.items && active === t.key;
            const hasPick = t.items && t.items.some((i) => i.selected);
            const base = `relative h-16 px-4 md:px-5 flex items-center gap-1 whitespace-nowrap eg-label-lg rounded-t-xl transition-colors ${isActive || isOpen || hasPick ? 'text-[#002131]' : 'text-[#174358]'} ${isOpen ? 'bg-[rgba(27,28,23,0.08)]' : 'hover:bg-[rgba(27,28,23,0.08)]'}`;
            if (!t.items) {
              return (
                <button key={t.key} type="button" onClick={() => scrollToId(t.target)} className={base} data-testid={`${testId}-tab-${t.key}`}>
                  {t.label}
                  {isActive && <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#174358]" />}
                </button>
              );
            }
            return (
              <button key={t.key} type="button" onClick={(e) => toggle(t.key, e)} aria-expanded={isOpen} aria-haspopup="menu" className={base} data-testid={`${testId}-tab-${t.key}`}>
                {t.label}
                {hasPick && <span className="ml-0.5 w-2 h-2 rounded-full bg-[#174358]" data-testid={`${testId}-tab-${t.key}-dot`} />}
                <ChevronDown size={24} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                {hasPick && !isOpen && <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#174358]" />}
              </button>
            );
          })}
        </div>
      </div>

      {openTab && (
        <div role="menu" style={{ left }} className="absolute top-full mt-0 z-40 w-[280px] max-h-[364px] overflow-y-auto no-scrollbar rounded-lg bg-[#F0EEE6] shadow-[0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_2px_rgba(0,0,0,0.15)] animate-[hi-fade-in_150ms_ease-out]" data-testid={`${testId}-tab-dropdown-${openTab.key}`}>
          {openTab.items.map((it) => {
            const cls = 'w-full flex items-center gap-3 px-4 py-3 text-left eg-body-lg text-[#002131] hover:bg-[rgba(64,73,66,0.08)] transition-colors';
            return (
              <a key={it.id} role="menuitem" href={it.href} onClick={(e) => { e.preventDefault(); setOpen(null); }} className={cls} data-testid={`${testId}-tab-dropdown-item`}>
                <NavIcon name={it.icon} /><span>{it.label}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function ScrollTop({ className = 'bottom-10 right-12' }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className={`fixed ${className} z-40 w-14 h-14 rounded-full eg-grad-harbor shadow-[0_4px_12px_rgba(0,33,49,0.3)] flex items-center justify-center text-white`} data-testid="eg-scroll-top">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11 20V7.825l-5.6 5.6L4 12l8-8l8 8l-1.4 1.425l-5.6-5.6V20z" /></svg>
    </button>
  );
}

const HeroCopy = ({ title }) => (
  <>
    <h1 className="eg-display-lg text-white drop-shadow-[0_2px_12px_rgba(0,33,49,0.45)] [text-wrap:balance]" data-testid="eg-hero-title">{title}</h1>
    <div className="flex flex-col items-center gap-2">
      <a href={hero.ctaHref} onClick={(e) => e.preventDefault()} className="eg-btn-filled h-12 px-6 eg-title-md" data-testid="eg-hero-cta">{hero.cta}</a>
      <p className="eg-body-sm text-white/90 max-w-[300px] md:max-w-none">{hero.sub}</p>
    </div>
  </>
);

export default function EgyptHero({ style }) {
  const title = style ? hero.styleH1(style) : hero.h1;
  return (
    <>
      <div className="relative">
        <Header overlay />
        <section className="relative h-[520px] sm:h-[560px] md:h-[600px] lg:h-[640px] bg-[#EAE8E0]" data-testid="eg-hero">
          <img src={hero.image} alt="Pyramids of Giza, Egypt" className="absolute inset-0 w-full h-full object-cover" loading="eager" data-testid="eg-hero-image" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,33,49,0.5)_0%,rgba(0,33,49,0.15)_45%,rgba(0,33,49,0.5)_100%)] pointer-events-none" />
          <div className="absolute inset-0 pt-[112px] md:pt-[108px] flex flex-col items-center justify-center gap-6 md:gap-8 px-4 text-center" data-testid="eg-hero-copy"><HeroCopy title={title} /></div>
        </section>
      </div>

      <div data-testid="eg-trust-bar"><TrustBar /></div>

      <StickyTabs />

      <nav className="mt-8 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[60px] flex items-center gap-1 eg-body-md text-[#174358]" aria-label="Breadcrumb" data-testid="eg-breadcrumb">
        {crumbs.map((c, i) => (
          <React.Fragment key={c.label}>
            {i > 0 && <ChevronRight size={20} className="text-[#174358]" />}
            {c.href ? <a href={c.href} onClick={(e) => e.preventDefault()} className="hover:underline">{c.label}</a> : <span className="eg-label-lg text-[#002131]">{c.label}</span>}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}
