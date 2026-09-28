import React, { useState } from 'react';
import { ambassadors } from '../mock';

export default function Ambassadors() {
  const [idx] = useState(0);
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
          </div>
        </div>
      </div>
    </section>
  );
}
