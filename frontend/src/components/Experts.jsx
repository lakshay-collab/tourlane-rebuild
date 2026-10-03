import React, { useState } from 'react';
import { Headset, Check } from 'lucide-react';
import { experts } from '../mock';
import Carousel from './Carousel';

const CardInner = ({ e }) => (
  <>
    <div className="relative h-[360px] md:h-[448px] rounded-xl overflow-hidden">
      <img src={e.photo} alt={e.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#002131]/75 to-transparent" />
      <div className="absolute left-4 bottom-4 text-white">
        <h3 className="t-headline-sm">{e.name}</h3>
        <p className="t-label-lg font-normal text-white/90">{e.role}</p>
      </div>
    </div>
    <ul className="mt-4 ml-4 space-y-1 t-body-lg text-onsurface">
      <li className="flex items-center gap-3"><Headset size={20} strokeWidth={1.75} className="text-onsurface-variant" />{e.experience}</li>
      {e.specialties.map((s) => (
        <li key={s} className="flex items-center gap-3"><Check size={20} strokeWidth={1.75} className="text-onsurface-variant" />{s}</li>
      ))}
    </ul>
  </>
);

export default function Experts() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="pt-16 md:pt-20" data-testid="experts-section">
      <div className="tl-container flex flex-col gap-8 md:gap-10">
        <h2 className="t-section text-center text-onsurface">{experts.heading}</h2>

        {expanded ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6" data-testid="experts-grid">
            {experts.items.map((e) => (
              <article key={e.name} data-testid="expert-card">
                <CardInner e={e} />
              </article>
            ))}
          </div>
        ) : (
          <Carousel step={376} arrowTop="224px" trackClassName="gap-4 md:gap-6 -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0" testId="experts-carousel">
            {experts.items.map((e) => (
              <article key={e.name} className="shrink-0 snap-start w-[280px] md:w-[calc((100%-48px)/3)]" data-testid="expert-card">
                <CardInner e={e} />
              </article>
            ))}
          </Carousel>
        )}

        <div className="flex justify-center -mt-2">
          <button className="btn-filled" data-testid="experts-cta" onClick={() => setExpanded((v) => !v)}>
            {expanded ? 'Show fewer experts' : experts.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
