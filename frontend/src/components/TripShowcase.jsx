import React, { useState } from 'react';
import { BedDouble, Building2, Car, Baby, Plane, Sparkles, Leaf, TreePalm, Bike, UtensilsCrossed, Binoculars } from 'lucide-react';
import { showcase } from '../mock';

const icons = { bed: BedDouble, tower: Building2, car: Car, family: Baby, plane: Plane, aurora: Sparkles, leaf: Leaf, island: TreePalm, bike: Bike, food: UtensilsCrossed, safari: Binoculars };

const Tile = ({ img, className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <img src={img.src} alt={img.tag} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    <span className="absolute left-4 bottom-4 t-label-lg text-white drop-shadow">#{img.tag}</span>
  </div>
);

export default function TripShowcase() {
  const [active, setActive] = useState(0);
  const trip = showcase.trips[active];
  const [a, b, c, d, e] = trip.images;

  return (
    <section className="pt-16 md:pt-20" data-testid="showcase-section">
      <div className="tl-container flex flex-col items-center gap-8">
        <h2 className="t-section text-center text-onsurface">{showcase.heading}</h2>
        <div className="no-scrollbar w-full md:w-auto overflow-x-auto">
          <div className="flex border-b-2 border-surface-highest min-w-max mx-auto" role="tablist" data-testid="showcase-tabs">
            {showcase.trips.map((t, i) => (
              <button
                key={t.tab}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`relative px-6 py-3 t-label-lg transition-colors ${active === i ? 'text-primary' : 'text-onsurface hover:text-primary'}`}
                data-testid={`showcase-tab-${t.tab.toLowerCase().replace(/\s/g, '-')}`}
              >
                {t.tab}
                {active === i && <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-primary" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="tl-wide mt-10">
        <div className="flex flex-col md:flex-row rounded-xl overflow-hidden md:h-[560px]" data-testid="showcase-card">
          <div className="bg-surface-container md:w-[340px] lg:w-[432px] shrink-0 p-6 md:p-8 flex flex-col">
            <h3 className="t-headline-md md:t-headline-lg text-onsurface" data-testid="showcase-title">{trip.title}</h3>
            <div className="flex items-center gap-4 mt-4 t-body-lg text-onsurface-variant">
              <span>{trip.duration}</span><span className="h-4 w-px bg-outline-variant" />
              <span>{trip.stops}</span><span className="h-4 w-px bg-outline-variant" />
              <span>{trip.transport}</span>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              {trip.tags.map(([k, label]) => {
                const Icon = icons[k];
                return (
                  <span key={label} className="inline-flex items-center gap-2 h-8 px-3 rounded-full bg-surface-highest t-label-lg text-onsurface">
                    <Icon size={16} strokeWidth={1.75} className="text-onsurface-variant" />{label}
                  </span>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-8 md:mt-auto">
              <img src={trip.avatar} alt={trip.customer} className="w-[60px] h-[60px] rounded-full object-cover" />
              <div>
                <div className="t-body-sm text-onsurface-variant">{showcase.createdFor}</div>
                <div className="t-title-md text-onsurface">{trip.customer}</div>
              </div>
            </div>
          </div>

          <div className="md:flex-1 flex gap-1 h-[420px] md:h-auto" data-testid="showcase-mosaic">
            <div className="w-1/3 flex flex-col gap-1">
              <Tile img={a} className="h-[55%]" />
              <Tile img={b} className="flex-1" />
            </div>
            <div className="w-2/3 flex flex-col gap-1">
              <Tile img={c} className="h-[44%]" />
              <div className="flex-1 flex gap-1">
                <Tile img={d} className="flex-1" />
                <Tile img={e} className="flex-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 md:mt-10">
        <button className="btn-filled" data-testid="showcase-cta">{trip.cta}</button>
      </div>
    </section>
  );
}
