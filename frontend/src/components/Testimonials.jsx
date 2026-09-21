import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials, trust } from '../mock';
import useInView from '../hooks/useInView';

export default function Testimonials() {
  const [ref, inView] = useInView();
  const scroller = useRef(null);

  const scroll = (dir) => {
    if (scroller.current) scroller.current.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <section ref={ref} className={`bg-creamdark py-16 md:py-24 fade-up ${inView ? 'in-view' : ''}`}>
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <h2 className="font-serif text-ink text-[30px] md:text-[42px] font-medium">{testimonials.heading}</h2>
          <div className="flex items-center gap-3 text-[14px] text-ink">
            <span className="font-semibold">{trust.label}</span>
            <span className="flex gap-0.5">
              {[0,1,2,3,4].map((i)=>(
                <span key={i} className="bg-forest w-5 h-5 flex items-center justify-center"><Star size={12} className="text-white fill-white" /></span>
              ))}
            </span>
            <span>{trust.score} {trust.outOf} · {trust.count} {trust.reviews}</span>
          </div>
        </div>

        <div className="relative">
          <div ref={scroller} className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth pb-2">
            {testimonials.items.map((t, i) => (
              <div key={i} className="card-hover shrink-0 w-[300px] md:w-[340px] bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <div className="h-[180px] overflow-hidden">
                  <img src={t.image} alt={t.trip} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-[13px] text-forest font-medium">{t.trip}</div>
                  <div className="flex items-center gap-0.5 mt-2">
                    {[0,1,2,3,4].map((s)=>(<Star key={s} size={15} className="text-forest fill-forest" />))}
                  </div>
                  <h4 className="mt-3 font-medium text-ink text-[16px]">{t.name}</h4>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink/70 line-clamp-5">{t.text}</p>
                  <div className="mt-3 text-[12px] text-ink/40">{t.date}</div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => scroll(-1)} className="hidden md:flex absolute -left-4 top-[100px] w-11 h-11 rounded-full bg-white shadow-md items-center justify-center text-ink hover:text-forest">
            <ChevronLeft size={22} />
          </button>
          <button onClick={() => scroll(1)} className="hidden md:flex absolute -right-4 top-[100px] w-11 h-11 rounded-full bg-white shadow-md items-center justify-center text-ink hover:text-forest">
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="text-center mt-12">
          <button className="bg-forest hover:bg-forest-dark text-white rounded-full px-8 py-3.5 text-[15px] font-medium transition-colors">
            {testimonials.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
