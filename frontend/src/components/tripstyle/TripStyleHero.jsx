import React from 'react';
import { ChevronRight } from '../egypt/EgyptIcons';
import TrustBar from '../TrustBar';
import Header from '../Header';

export default function TripStyleHero({ hero, crumbs }) {
  const [a, b] = hero.images;
  return (
    <>
      <Header />
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-1" data-testid="ts-hero">
        <div className="grid gap-1 grid-cols-2 md:grid-cols-[2fr_1fr] h-[186px] sm:h-[282px] md:h-[292px] lg:h-[328px] rounded-t-xl overflow-hidden" data-testid="ts-hero-collage">
          {[a, b].map((img) => (
            <div key={img.src} className="relative overflow-hidden bg-[#EAE8E0]">
              <img src={img.src} alt={img.alt} title={img.title} className="absolute inset-0 w-full h-full object-cover" loading="eager" data-testid="ts-hero-image" />
            </div>
          ))}
        </div>
        <div className="mt-1 bg-[#F6F4EB] px-3 pt-4 pb-6 sm:px-4 md:pl-4 md:pr-16 md:pt-6 md:pb-10 flex flex-col md:flex-row md:items-end gap-6 md:gap-16" data-testid="ts-hero-copy">
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="eg-display-lg text-[#002131] [text-wrap:balance]" data-testid="ts-hero-title">{hero.h1}</h1>
            <p className="eg-body-lg text-[#002131] pl-1" data-testid="ts-hero-sub">{hero.sub}</p>
          </div>
          <div className="flex flex-col items-center gap-2 md:shrink-0">
            <a href={hero.ctaHref} onClick={(e) => e.preventDefault()} className="eg-btn-filled h-12 px-6 eg-title-md w-full md:w-auto" data-testid="ts-hero-cta">{hero.cta}</a>
            <p className="eg-body-sm text-[#174358] text-center">{hero.note}</p>
          </div>
        </div>
        <div className="rounded-b-xl overflow-hidden" data-testid="ts-trust-bar"><TrustBar /></div>
      </section>

      <nav className="mt-8 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[60px] flex items-center gap-1 eg-body-md text-[#174358]" aria-label="Breadcrumb" data-testid="ts-breadcrumb">
        {crumbs.map((cr, i) => (
          <React.Fragment key={cr.label}>
            {i > 0 && <ChevronRight size={20} className="text-[#174358]" />}
            {cr.href ? <a href={cr.href} onClick={(e) => e.preventDefault()} className="hover:underline">{cr.label}</a> : <span className="eg-label-lg text-[#002131]">{cr.label}</span>}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}
