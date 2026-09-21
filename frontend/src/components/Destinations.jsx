import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { destinationTabs, destinations } from '../destinationsData';
import useInView from '../hooks/useInView';

export default function Destinations() {
  const [active, setActive] = useState('Top 10');
  const [ref, inView] = useInView();
  const list = destinations[active] || [];

  return (
    <section ref={ref} className={`bg-cream py-16 md:py-24 fade-up ${inView ? 'in-view' : ''}`}>
      <div className="max-w-[1240px] mx-auto px-5">
        <h2 className="font-serif text-ink text-[30px] md:text-[42px] font-medium text-center mb-8">
          Discover our extraordinary destinations
        </h2>

        <div className="no-scrollbar flex md:flex-wrap md:justify-center gap-2.5 mb-10 overflow-x-auto pb-1">
          {destinationTabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-[14px] font-medium transition-colors ${active === t ? 'bg-forest text-white' : 'bg-white text-ink/70 hover:text-forest'}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {list.map((d) => (
            <button key={d.name} className="img-zoom-wrap group relative rounded-2xl overflow-hidden h-[180px] md:h-[220px] text-left">
              <img src={d.src} alt={d.name} className="img-zoom w-full h-full object-cover" loading="lazy" />
              <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <span className="absolute bottom-3 left-4 right-3 flex items-center justify-between text-white">
                <span className="font-serif text-[19px]">{d.name}</span>
                <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
