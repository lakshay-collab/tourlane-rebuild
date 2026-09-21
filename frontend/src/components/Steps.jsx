import React from 'react';
import { steps } from '../mock';
import useInView from '../hooks/useInView';

export default function Steps() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className={`bg-cream py-16 md:py-24 fade-up ${inView ? 'in-view' : ''}`}>
      <div className="max-w-[1040px] mx-auto px-5">
        <h2 className="font-serif text-ink text-[30px] md:text-[42px] font-medium text-center mb-14">{steps.heading}</h2>
        <div className="grid md:grid-cols-3 gap-12 md:gap-10 relative">
          {steps.items.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-11 h-11 rounded-full bg-forest text-white font-serif text-[20px] flex items-center justify-center shrink-0">{s.n}</span>
                <h3 className="font-serif text-[21px] text-ink">{s.title}</h3>
              </div>
              <p className="text-[15px] leading-relaxed text-ink/70">{s.text}</p>
              {i < steps.items.length - 1 && (
                <span className="hidden md:block absolute top-5 -right-5 w-10 h-px bg-forest/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
