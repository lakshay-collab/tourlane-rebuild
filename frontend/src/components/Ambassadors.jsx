import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { ambassadors } from '../mock';

export default function Ambassadors() {
  const [idx, setIdx] = useState(0);
  const n = ambassadors.images.length;
  return (
    <section className="pt-16 md:pt-20" data-testid="ambassadors-section">
      <div className="tl-container">
        <div className="bg-surface-container rounded-2xl overflow-hidden pt-12 md:pt-16">
          <div className="flex flex-col items-center gap-6 px-4 sm:px-8 md:px-16 text-center">
            <h2 className="t-section text-onsurface">{ambassadors.heading}</h2>
            <h3 className="t-headline-sm text-onsurface">{ambassadors.subheading}</h3>
            <p className="t-body-lg text-onsurface max-w-[760px]">{ambassadors.text}</p>
            <button className="btn-filled" data-testid="ambassadors-cta">{ambassadors.cta}</button>
          </div>

          <div className="relative mt-10 md:mt-12" data-testid="ambassadors-carousel">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${idx * 100}%)` }}>
                {ambassadors.images.map((src, i) => (
                  <img key={i} src={src} alt="" className="w-full shrink-0 block" loading="lazy" />
                ))}
              </div>
            </div>
            <button onClick={() => setIdx((idx - 1 + n) % n)} className="arrow-btn absolute left-4 top-1/2 -translate-y-1/2" aria-label="Previous" data-testid="ambassadors-prev">
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
