import React from 'react';
import { Sparkles, Ticket, MapPin } from 'lucide-react';
import { features } from '../mock';
import useInView from '../hooks/useInView';

const iconMap = { Sparkles, Ticket, MapPin };

export default function Features() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className={`bg-cream py-16 md:py-24 fade-up ${inView ? 'in-view' : ''}`}>
      <div className="max-w-[1100px] mx-auto px-5 text-center">
        <h2 className="font-serif text-ink text-[30px] md:text-[42px] font-medium">{features.heading}</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-10 md:gap-8">
          {features.items.map((it) => {
            const Icon = iconMap[it.icon];
            return (
              <div key={it.title} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-forest/25 flex items-center justify-center text-forest">
                  <Icon size={26} strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-serif text-[21px] text-ink">{it.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70 max-w-[300px]">{it.text}</p>
              </div>
            );
          })}
        </div>
        <button className="mt-12 bg-forest hover:bg-forest-dark text-white rounded-full px-8 py-3.5 text-[15px] font-medium transition-colors">
          {features.cta}
        </button>
      </div>
    </section>
  );
}
