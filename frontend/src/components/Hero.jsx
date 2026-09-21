import React from 'react';
import { hero } from '../mock';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden h-[560px] sm:h-[600px] md:h-[620px] lg:h-[680px] flex items-center justify-center"
      data-testid="hero-section"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={hero.title.join(' ')}
        data-testid="hero-collage"
      >
        <source src="/hero-video.webm" type="video/webm" />
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,33,49,0.55)_0%,rgba(0,33,49,0.25)_45%,rgba(0,33,49,0.75)_100%)] pointer-events-none" />

      <div className="relative z-[2] w-full flex flex-col items-center gap-6 md:gap-8 px-4 sm:px-8 md:px-0 -mt-6 md:-mt-8">
        <div className="min-w-[328px] sm:w-[536px] md:w-[857px] lg:w-[880px]">
          <h1 className="t-display-sm md:t-display-lg text-center text-white [text-wrap:balance] drop-shadow-[0_2px_12px_rgba(0,33,49,0.45)]" data-testid="hero-title">
            {hero.title[0]}<br className="hidden md:block" /> {hero.title[1]}
          </h1>
          <p className="hidden sm:block mt-4 t-body-lg text-white/85 text-center max-w-[620px] mx-auto" data-testid="hero-subtitle">
            {hero.subtitle}
          </p>
        </div>
        <div className="w-full md:w-[552px]">
          <SearchBar id="hero" />
        </div>
      </div>
    </section>
  );
}
