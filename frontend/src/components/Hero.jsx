import React from 'react';
import { MapPin, Search } from 'lucide-react';
import { hero } from '../mock';

export default function Hero() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 pt-12 md:pt-16 pb-0 text-center relative z-20">
        <h1 className="font-serif text-ink text-[40px] leading-[1.08] md:text-[62px] md:leading-[1.05] font-medium">
          {hero.title[0]}<br />{hero.title[1]}
        </h1>

        <div className="mt-8 md:mt-10 max-w-[560px] mx-auto">
          <div className="flex items-center bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.10)] p-1.5 pl-5">
            <MapPin size={20} className="text-forest shrink-0" />
            <input
              type="text"
              placeholder={hero.searchPlaceholder}
              className="flex-1 bg-transparent outline-none px-3 text-[15px] text-ink placeholder:text-ink/50"
            />
            <button className="flex items-center gap-2 bg-forest hover:bg-forest-dark text-white rounded-full px-5 md:px-6 py-3 text-[15px] font-medium transition-colors">
              <Search size={17} className="md:hidden" />
              <span className="hidden md:inline">{hero.cta}</span>
              <span className="md:hidden">Go</span>
            </button>
          </div>
        </div>
      </div>

      {/* Collage band */}
      <div className="relative mt-8 md:-mt-10">
        <div className="flex items-end justify-center gap-0 max-w-[1400px] mx-auto px-2">
          {hero.collage.map((c, i) => {
            const heights = ['h-40 md:h-72', 'h-52 md:h-96', 'h-44 md:h-80', 'h-56 md:h-[26rem]', 'h-40 md:h-72'];
            return (
              <div
                key={i}
                className={`img-zoom-wrap relative flex-1 ${heights[i]} overflow-hidden ${i === 0 ? 'rounded-tl-[40px]' : ''} ${i === hero.collage.length - 1 ? 'rounded-tr-[40px]' : ''}`}
                style={{ marginLeft: i === 0 ? 0 : '-2px' }}
              >
                <img src={c.src} alt={c.alt} className="img-zoom w-full h-full object-cover" loading="eager" />
              </div>
            );
          })}
        </div>

        {/* Handwritten labels */}
        {hero.labels.map((lbl, i) => (
          <span
            key={i}
            className="hidden md:block absolute font-hand text-ink text-[26px] rotate-[-6deg] pointer-events-none drop-shadow-sm"
            style={{ top: lbl.top, left: lbl.left }}
          >
            {lbl.text}
          </span>
        ))}

        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
