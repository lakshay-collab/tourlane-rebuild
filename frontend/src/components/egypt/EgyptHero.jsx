import React, { useEffect, useState } from 'react';
import { hero, trust, tabs, crumbs } from '../../egyptListingData';
import { ChevronRight, TpStars } from './EgyptIcons';

function StickyTabs() {
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 560);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`mt-3 sticky top-0 z-30 bg-[#FBF9F1] border-b border-[#E4E3DB] ${stuck ? 'shadow-[0_1px_2px_rgba(0,0,0,0.3),0_1px_3px_1px_rgba(0,0,0,0.15)]' : ''}`} data-testid="eg-tabs">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 flex items-center justify-between">
        <div className="flex overflow-x-auto no-scrollbar">
          {tabs.map((t, i) => (
            <a key={t} href="#" onClick={(e) => e.preventDefault()} className={`relative h-16 px-5 flex items-center whitespace-nowrap eg-label-lg ${i === 0 ? 'text-[#1B1C17]' : 'text-[#404942] hover:text-[#1B1C17]'}`} data-testid={`eg-tab-${i}`}>
              {t}
              {i === 0 && <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#006D44]" />}
            </a>
          ))}
        </div>
        {stuck && (
          <div className="hidden lg:flex items-center gap-4 pr-[65px]" data-testid="eg-tabs-cta">
            <p className="eg-body-sm text-[#1B1C17] text-right whitespace-nowrap">Ihr Reiseplan – unverbindlich<br />&amp; maßgeschneidert</p>
            <a href={hero.ctaHref} onClick={(e) => e.preventDefault()} className="eg-btn-filled h-12 px-6 eg-title-md">{hero.cta}</a>
          </div>
        )}
      </div>
    </div>
  );
}

export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Nach oben" className="fixed bottom-10 right-12 z-40 w-14 h-14 rounded-full bg-[#FEFCF4] shadow-[0_1px_3px_rgba(0,0,0,0.3),0_4px_8px_3px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#1B1C17]" data-testid="eg-scroll-top">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11 20V7.825l-5.6 5.6L4 12l8-8l8 8l-1.4 1.425l-5.6-5.6V20z" /></svg>
    </button>
  );
}

export const TrustRow = ({ size = 20, className = '', compact = false }) => (
  <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-2 eg-label-lg text-[#1B1C17] ${className}`} data-testid="eg-trust-row">
    <span>{trust.label}</span>
    <TpStars rating={trust.rating} size={size} />
    <span className={compact ? 'hidden sm:inline' : ''}><span>{trust.score} </span>{trust.outOf}</span>
    <span className={compact ? 'hidden sm:inline' : ''}>{trust.count} <span>{trust.reviews}</span></span>
    <img src="/trustpilot.svg" alt="Trustpilot" className="h-5 w-auto" />
  </div>
);

export default function EgyptHero() {
  const img = hero.images;
  return (
    <>
      <section className="pt-6 md:pt-10" data-testid="eg-hero">
        <div className="relative md:h-[453px]">
          <div className="relative md:absolute md:inset-x-0 md:top-12 z-10 flex flex-col items-center gap-6 md:gap-8 px-4 pb-6 md:pb-0 text-center">
            <h1 className="eg-display-lg text-[#1B1C17]" data-testid="eg-hero-title">{hero.h1}</h1>
            <div className="flex flex-col items-center gap-2">
              <a href={hero.ctaHref} onClick={(e) => e.preventDefault()} className="eg-btn-filled h-12 px-6 eg-title-md" data-testid="eg-hero-cta">{hero.cta}</a>
              <p className="eg-body-sm text-[#1B1C17] max-w-[220px] md:max-w-none">{hero.sub}</p>
            </div>
          </div>
          <picture>
            <source media="(min-width: 1280px)" srcSet={img.xl} />
            <source media="(min-width: 905px)" srcSet={img.m} />
            <source media="(min-width: 600px)" srcSet={img.s} />
            <img src={img.xs} alt="EGYPT XL" className="w-full aspect-[2.54] md:aspect-auto md:absolute md:inset-0 md:h-full object-cover" loading="eager" data-testid="eg-hero-image" />
          </picture>
        </div>
      </section>

      <div className="bg-[#DCE5DC] py-3 px-4" data-testid="eg-trust-bar"><TrustRow compact /></div>

      <StickyTabs />

      <nav className="mt-8 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[60px] flex items-center gap-1 eg-body-md text-[#404942]" aria-label="Breadcrumb" data-testid="eg-breadcrumb">
        {crumbs.map((c, i) => (
          <React.Fragment key={c.label}>
            {i > 0 && <ChevronRight size={20} className="text-[#404942]" />}
            {c.href ? <a href={c.href} onClick={(e) => e.preventDefault()} className="hover:underline">{c.label}</a> : <span className="eg-label-lg text-[#1B1C17]">{c.label}</span>}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}
