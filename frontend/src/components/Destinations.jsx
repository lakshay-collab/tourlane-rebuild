import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { destinationTabs, destinations } from '../destinationsData';
import { destinationsHeading } from '../mock';

const COUNTRY_HREF = { 'Egypt': '/afrika/aegypten', 'Sri Lanka': '/asien/emerald-isle-explorer-sri-lanka', 'Thailand': '/asien/siam-splendour-thailand' };
const REGION_HREF = { 'Asia': '/asien' };

export default function Destinations() {
  const [active, setActive] = useState(destinationTabs[0]);
  const list = destinations[active] || [];
  const regionHref = REGION_HREF[active];

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
          {list.map((d) => {
            const href = COUNTRY_HREF[d.name];
            const cls = 'group block rounded-xl border border-outline-variant overflow-hidden bg-surface-lowest hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-shadow';
            const inner = <><div className="h-[150px] overflow-hidden"><img src={d.src} alt={d.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></div><div className="px-2 py-2 t-body-lg text-onsurface">{d.name}</div></>;
            return href
              ? <Link key={d.name} to={href} className={cls} data-testid="destination-card">{inner}</Link>
              : <a key={d.name} href="#" onClick={(e) => e.preventDefault()} className={cls} data-testid="destination-card">{inner}</a>;
          })}
        </div>
        {regionHref && (
          <Link to={regionHref} className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-outline-variant t-label-lg text-onsurface hover:bg-onsurface/[0.06] transition-colors" data-testid="destination-region-link">
            View all {active} holidays <ArrowRight size={16} strokeWidth={2} />
          </Link>
        )}
      </div>
    </section>
  );
}
