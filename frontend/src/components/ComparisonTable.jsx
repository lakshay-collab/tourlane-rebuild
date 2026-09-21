import React from 'react';
import { Check, X } from 'lucide-react';
import { comparison } from '../mock';
import useInView from '../hooks/useInView';

export default function ComparisonTable() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className={`bg-creamdark py-16 md:py-24 fade-up ${inView ? 'in-view' : ''}`}>
      <div className="max-w-[860px] mx-auto px-5">
        <h2 className="font-serif text-ink text-[30px] md:text-[42px] font-medium text-center mb-10">{comparison.heading}</h2>
        <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="grid grid-cols-[1fr_110px_130px] md:grid-cols-[1fr_150px_170px] items-stretch">
            <div className="bg-white" />
            <div className="bg-white flex items-center justify-center py-5 text-[13px] md:text-[15px] font-medium text-ink/60">{comparison.colAlone}</div>
            <div className="bg-forest flex items-center justify-center py-5 text-[13px] md:text-[15px] font-semibold text-white rounded-t-xl">{comparison.colTourlane}</div>
          </div>
          {comparison.rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-[1fr_110px_130px] md:grid-cols-[1fr_150px_170px] items-center ${i % 2 ? 'bg-cream/40' : 'bg-white'}`}>
              <div className="px-5 md:px-7 py-4 text-[14px] md:text-[15px] text-ink/85">{row}</div>
              <div className="flex items-center justify-center py-4">
                <X size={20} className="text-ink/30" />
              </div>
              <div className={`flex items-center justify-center py-4 h-full ${i === comparison.rows.length - 1 ? 'rounded-b-xl' : ''} bg-forest/[0.06]`}>
                <span className="w-7 h-7 rounded-full bg-forest flex items-center justify-center">
                  <Check size={16} className="text-white" strokeWidth={3} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
