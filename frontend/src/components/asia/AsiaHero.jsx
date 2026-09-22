import React from 'react';
import { hero, crumbs, tabs } from '../../asiaListingData';
import { ChevronRight } from '../egypt/EgyptIcons';
import { StickyTabs } from '../egypt/EgyptHero';
import TrustBar from '../TrustBar';
import Header from '../Header';

const Photo = ({ img, className = '', eager }) => (
  <div className={`relative overflow-hidden bg-[#EAE8E0] ${className}`}>
    <img src={img.src} alt={img.alt} title={img.title} className="absolute inset-0 w-full h-full object-cover" loading={eager ? 'eager' : 'lazy'} data-testid="as-hero-image" />
  </div>
);

export default function AsiaHero() {
  const [a, b, c] = hero.images;
  return (
    <>
      <Header />
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-6 lg:px-10 pt-4 md:pt-6" data-testid="as-hero">
        <div className="grid gap-1 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 h-[220px] sm:h-[282px] md:h-[292px] lg:h-[328px] rounded-t-xl overflow-hidden" data-testid="as-hero-collage">
          <Photo img={a} className="row-span-2 md:row-span-1" eager />
          <Photo img={b} eager />
          <Photo img={c} eager />
        </div>
        <div className="mt-1 rounded-b-xl bg-[#F6F4EB] px-4 pt-4 pb-5 sm:px-6 sm:pt-5 sm:pb-6 md:px-8 md:py-6 lg:pb-8 flex flex-col md:flex-row md:items-end gap-6 md:gap-12 lg:gap-[100px]" data-testid="as-hero-copy">
          <div className="flex-1 flex flex-col gap-2 md:gap-3">
            <h1 className="eg-display-lg text-[#002131] [text-wrap:balance]" data-testid="as-hero-title">{hero.h1}</h1>
            <p className="eg-body-lg text-[#002131]" data-testid="as-hero-sub">{hero.sub}</p>
          </div>
          <div className="flex flex-col items-center gap-2 md:shrink-0">
            <a href={hero.ctaHref} onClick={(e) => e.preventDefault()} className="eg-btn-filled h-12 px-6 eg-title-md w-full md:w-auto" data-testid="as-hero-cta">{hero.cta}</a>
            <p className="eg-body-sm text-[#174358] text-center">{hero.note}</p>
          </div>
        </div>
      </section>

      <div className="mt-6" data-testid="as-trust-bar"><TrustBar /></div>

      <StickyTabs tabs={tabs} testId="as" />

      <nav className="mt-8 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[60px] flex items-center gap-1 eg-body-md text-[#174358]" aria-label="Breadcrumb" data-testid="as-breadcrumb">
        {crumbs.map((cr, i) => (
          <React.Fragment key={cr.label}>
            {i > 0 && <ChevronRight size={20} className="text-[#174358]" />}
            {cr.href ? <a href={cr.href} className="hover:underline">{cr.label}</a> : <span className="eg-label-lg text-[#002131]">{cr.label}</span>}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}
