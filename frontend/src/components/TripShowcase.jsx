import React, { useState } from 'react';
import { Calendar, MapPin, Car, ArrowRight } from 'lucide-react';
import { showcase } from '../mock';
import useInView from '../hooks/useInView';

export default function TripShowcase() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView();
  const trip = showcase.trip;

  return (
    <section ref={ref} className={`bg-creamdark py-16 md:py-24 fade-up ${inView ? 'in-view' : ''}`}>
      <div className="max-w-[1180px] mx-auto px-5">
        <h2 className="font-serif text-ink text-[30px] md:text-[42px] font-medium text-center mb-8">{showcase.heading}</h2>

        <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap mb-10">
          {showcase.tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-[14px] font-medium transition-colors ${active === i ? 'bg-forest text-white' : 'bg-white text-ink/70 hover:text-forest'}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-3 mb-6">
          <div className="img-zoom-wrap rounded-2xl overflow-hidden h-[280px] md:h-[420px]">
            <img src={trip.images[0]} alt={trip.title} className="img-zoom w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {trip.images.slice(1).map((im, i) => (
              <div key={i} className="img-zoom-wrap rounded-2xl overflow-hidden h-[135px] md:h-[204px]">
                <img src={im} alt="" className="img-zoom w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 md:p-8 flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex-1">
            <h3 className="font-serif text-[26px] md:text-[30px] text-ink">{trip.title}</h3>
            <div className="flex items-center gap-5 mt-3 text-[14px] text-ink/70">
              <span className="flex items-center gap-1.5"><Calendar size={16} className="text-forest" />{trip.days}</span>
              <span className="flex items-center gap-1.5"><MapPin size={16} className="text-forest" />{trip.stops}</span>
              <span className="flex items-center gap-1.5"><Car size={16} className="text-forest" />{trip.transport}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {trip.tags.map((tag) => (
                <span key={tag} className="text-[13px] bg-sage text-forest-dark rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <div className="flex items-center gap-3">
              <img src={trip.avatar} alt={trip.createdFor} className="w-11 h-11 rounded-full object-cover" />
              <div className="text-[13px] leading-tight">
                <div className="text-ink/50">Created for</div>
                <div className="font-medium text-ink">{trip.createdFor}</div>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-forest hover:bg-forest-dark text-white rounded-full px-6 py-3 text-[15px] font-medium transition-colors">
              {trip.cta} <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
