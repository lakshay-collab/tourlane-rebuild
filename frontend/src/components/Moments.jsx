import React from 'react';
import { moments } from '../mock';
import Carousel from './Carousel';

export default function Moments() {
  return (
    <section className="pt-16 md:pt-20 overflow-hidden" data-testid="moments-section">
      <div className="tl-container flex flex-col items-center gap-6 text-center">
        <h2 className="t-section text-onsurface">{moments.heading}</h2>
        <div className="flex items-center gap-3" data-testid="moments-subheading">
          <span className="flex -space-x-2">
            {moments.avatars.map((a, i) => (
              <img key={i} src={a} alt="" className="w-7 h-7 rounded-full object-cover ring-2 ring-surface" />
            ))}
          </span>
          <span className="t-body-lg text-onsurface">{moments.subheading}</span>
        </div>
      </div>

      <div className="tl-container mt-8">
        <Carousel step={272} className="lg:-mx-0" trackClassName="gap-4 pb-1 -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0" testId="moments-carousel">
          {moments.items.map((m) => (
            <article key={m.title} className="relative shrink-0 snap-start w-[256px] h-[328px] rounded-xl overflow-hidden" data-testid="moment-card">
              <img src={m.image} alt={m.title} className="absolute inset-0 w-full h-full object-contain object-center" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002131]/80 via-[#002131]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="t-title-md">{m.title}</h3>
                <p className="t-label-sm text-white/80 mt-1 font-normal">{m.name}</p>
              </div>
            </article>
          ))}
        </Carousel>
      </div>

      <div className="flex justify-center mt-8">
        <button className="btn-filled" data-testid="moments-cta">{moments.cta}</button>
      </div>
    </section>
  );
}
