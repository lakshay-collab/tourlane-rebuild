import React from 'react';
import { hero } from '../mock';
import SearchBar from './SearchBar';

export default function Hero() {
  const c = hero.collage;
  return (
    <section
      className="relative w-full bg-surface-container flex flex-col items-center h-[566px] sm:h-[800px] md:h-[680px] lg:h-[720px] overflow-hidden"
      data-testid="hero-section"
    >
      <div className="relative z-[2] w-full flex flex-col items-center gap-8 mt-4 lg:mt-10 px-4 sm:px-8 md:px-0">
        <div className="min-w-[328px] sm:w-[536px] md:w-[857px] lg:w-[880px] md:mb-4">
          <h1 className="t-display-sm md:t-display-lg text-center text-onsurface [text-wrap:balance]" data-testid="hero-title">
            {hero.title}
          </h1>
        </div>
        <div className="w-full md:w-[552px]">
          <SearchBar id="hero" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[278px] sm:h-[452px] md:h-[275px] lg:h-[386px] xl:h-[432px]">
        <div className="relative h-full w-full max-w-full xl:max-w-[2088px] mx-auto overflow-hidden">
          <picture>
            <source srcSet={c.xs} media="(max-width: 599px)" />
            <source srcSet={c.sm} media="(min-width: 600px) and (max-width: 904px)" />
            <source srcSet={c.md} media="(min-width: 905px) and (max-width: 1279px)" />
            <source srcSet={c.lg} media="(min-width: 1280px) and (max-width: 1439px)" />
            <source srcSet={c.xl} media="(min-width: 1440px)" />
            <img
              src={c.xl}
              alt={hero.title}
              loading="eager"
              decoding="async"
              className="absolute top-0 h-full left-1/2 -translate-x-1/2 object-cover min-w-[599px] sm:min-w-[904px] md:min-w-[1279px] lg:min-w-[1439px] xl:min-w-full"
              data-testid="hero-collage"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
