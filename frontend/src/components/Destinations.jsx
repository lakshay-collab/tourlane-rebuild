import React, { useState } from 'react';
import { destinationTabs, destinations } from '../destinationsData';
import { destinationsHeading } from '../mock';

export default function Destinations() {
  const [active, setActive] = useState(destinationTabs[0]);
  const list = destinations[active] || [];

  return (
    <section className="pt-16 md:pt-20" data-testid="destinations-section">
      <div className="tl-container flex flex-col items-center gap-8 md:gap-10">
        <h2 className="t-section text-center text-onsurface md:max-w-[700px]">{destinationsHeading}</h2>

        <div className="no-scrollbar w-full overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex md:flex-wrap md:justify-center gap-2 min-w-max md:min-w-0" role="tablist" data-testid="destination-tabs">
            {destinationTabs.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={active === t}
                onClick={() => setActive(t)}
                className={`h-8 px-3 rounded-lg t-label-lg whitespace-nowrap transition-colors ${
                  active === t ? 'bg-surface-variant text-onsurface' : 'border border-outline-variant text-onsurface hover:bg-onsurface/[0.06]'
                }`}
                data-testid={`destination-tab-${t.toLowerCase().replace(/\s/g, '-')}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6" data-testid="destination-grid">
          {list.map((d) => (
            <a
              key={d.name}
              href={d.name === 'Egypt' ? '/afrika/aegypten' : '#'}
              onClick={(e) => { if (d.name !== 'Egypt') e.preventDefault(); }}
              className="group block rounded-xl border border-outline-variant overflow-hidden bg-surface-lowest hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-shadow"
              data-testid="destination-card"
            >
              <div className="h-[150px] overflow-hidden">
                <img src={d.src} alt={d.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="px-2 py-2 t-body-lg text-onsurface">{d.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
