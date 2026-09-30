import React from 'react';
import { features } from '../mock';

export default function Features() {
  return (
    <section className="pt-16 md:pt-20" data-testid="features-section">
      <div className="tl-container flex flex-col gap-8 md:gap-10">
        <h2 className="t-section text-center text-onsurface">{features.heading}</h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-6">
          {features.items.map((it) => (
            <div key={it.title} className="flex-1 flex md:flex-col items-start md:items-center gap-6 md:gap-0" data-testid="feature-item">
              <img src={it.icon} alt="" className="w-[88px] h-[88px] shrink-0 object-contain object-center" />
              <div className="md:text-center md:mt-6">
                <h3 className="t-headline-sm text-onsurface">{it.title}</h3>
                <p className="t-body-lg text-onsurface-variant mt-2 md:mt-1 md:max-w-[280px] md:mx-auto">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
