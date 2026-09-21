import React from 'react';
import { adventure } from '../mock';
import useInView from '../hooks/useInView';

export default function AdventureCTA() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className={`bg-cream py-16 md:py-24 fade-up ${inView ? 'in-view' : ''}`}>
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-4">
          <div className="img-zoom-wrap rounded-2xl overflow-hidden h-[200px] md:h-[300px] order-2 md:order-1">
            <img src={adventure.images[0]} alt="" className="img-zoom w-full h-full object-cover" />
          </div>
          <div className="text-center px-2 md:px-6 order-1 md:order-2">
            <h2 className="font-serif text-ink text-[30px] md:text-[40px] font-medium leading-tight">{adventure.heading}</h2>
            <button className="mt-6 bg-forest hover:bg-forest-dark text-white rounded-full px-8 py-3.5 text-[15px] font-medium transition-colors">
              {adventure.cta}
            </button>
          </div>
          <div className="img-zoom-wrap rounded-2xl overflow-hidden h-[200px] md:h-[300px] order-3">
            <img src={adventure.images[1]} alt="" className="img-zoom w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
