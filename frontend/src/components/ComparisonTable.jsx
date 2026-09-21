import React from 'react';
import { X } from 'lucide-react';
import { comparison } from '../mock';

const Check = () => (
  <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center" data-testid="check-icon">
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
  </span>
);

export default function ComparisonTable() {
  const cols = 'grid grid-cols-[1fr_64px_88px] sm:grid-cols-[1fr_120px_140px] md:grid-cols-[1fr_156px_156px]';
  return (
    <section className="pt-16 md:pt-20" data-testid="comparison-section">
      <div className="tl-container flex flex-col gap-8">
        <h2 className="t-section text-center text-onsurface">{comparison.heading}</h2>
        <div className="rounded-xl overflow-hidden" data-testid="comparison-table">
          <div className={`${cols} bg-onprimary-fixedvariant text-white t-label-lg h-10 items-center`}>
            <div />
            <div className="text-center">{comparison.colAlone}</div>
            <div className="text-center">{comparison.colTourlane}</div>
          </div>
          {comparison.rows.map((row, i) => (
            <div key={i} className={`${cols} items-center min-h-9 ${i % 2 ? 'bg-surface-variant' : 'bg-surface-low'}`} data-testid="comparison-row">
              <div className="px-4 py-2 t-body-md text-onsurface">{row.text}</div>
              <div className="flex justify-center">{row.alone ? <Check /> : <X size={18} strokeWidth={2} className="text-onsurface-variant" />}</div>
              <div className="flex justify-center"><Check /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
