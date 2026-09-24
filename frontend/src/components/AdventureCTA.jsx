import React from 'react';
import { adventure } from '../mock';
import SearchBar from './SearchBar';

export default function AdventureCTA() {
  return (
    <section className="pt-16 md:pt-24" data-testid="adventure-section">
      <div className="relative w-full bg-surface-container h-auto sm:h-[560px] md:h-[416px] lg:h-[352px] xl:h-[376px] flex flex-col justify-between">
        <div className="relative z-[1] flex flex-col items-center gap-10 lg:gap-8 xl:gap-12 pt-16 lg:pt-12 xl:pt-[72px] px-[13px] sm:px-8">
          <h2 className="t-section text-center text-onsurface sm:w-[536px] md:w-full">{adventure.heading}</h2>
          <div className="w-full sm:w-[536px] md:w-[552px]">
            <SearchBar id="adventure" />
          </div>
        </div>
        <div className="relative z-[2] flex items-end justify-between gap-2 mt-6 md:mt-0 md:absolute md:bottom-0 md:left-0 md:w-full pointer-events-none">
          <img
            src={adventure.images.left}
            alt=""
            className="w-[162px] h-[198px] sm:w-[229px] sm:h-[280px] md:w-[210px] md:h-[256px] lg:w-[341px] lg:h-[416px] xl:w-[373px] xl:h-[456px] object-contain object-left-bottom translate-y-[5.3%]"
            loading="lazy"
          />
          <img
            src={adventure.images.right}
            alt=""
            className="w-[175px] h-[198px] sm:w-[249px] sm:h-[280px] md:w-[227px] md:h-[256px] lg:w-[369px] lg:h-[416px] xl:w-[405px] xl:h-[456px] object-contain object-right-bottom"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
