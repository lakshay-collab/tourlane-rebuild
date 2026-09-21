import React, { useState } from 'react';
import { planner } from '../../egyptListingData';
import { MinusIcon, PlusIcon } from './EgyptIcons';

function CounterRow({ row, value, onChange }) {
  const dis = value <= row.min;
  return (
    <div className="flex items-center justify-between gap-2 py-4" data-testid="eg-planner-row">
      <div>
        <p className="eg-title-md text-[#1B1C17]">{row.label}</p>
        <span className="block eg-body-md text-[#404942]">{row.sub}</span>
      </div>
      <div className="flex items-center gap-2">
        <button type="button" disabled={dis} onClick={() => onChange(value - 1)} className={`w-10 h-10 rounded-full border border-[#717972] text-[#404942] flex items-center justify-center ${dis ? 'opacity-40' : 'hover:bg-black/5'}`} aria-label="Weniger" data-testid="eg-planner-minus"><MinusIcon size={24} /></button>
        <span className="w-5 text-center eg-title-md text-[#1B1C17]" data-testid="eg-planner-value">{value}</span>
        <button type="button" onClick={() => onChange(value + 1)} className="w-10 h-10 rounded-full border border-[#717972] text-[#404942] flex items-center justify-center hover:bg-black/5" aria-label="Mehr" data-testid="eg-planner-plus"><PlusIcon size={24} /></button>
      </div>
    </div>
  );
}

export default function EgyptPlanner({ className = 'mt-16 px-4 sm:px-8 lg:px-10', titleClass = 'eg-display-sm' }) {
  const [vals, setVals] = useState(planner.rows.map((r) => r.value));
  return (
    <section className={className} data-testid="eg-planner">
      <div className="relative h-[702px] hidden lg:block" style={{ backgroundImage: `url(${planner.decoration})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center 444px', backgroundSize: '1200px 258px' }}>
        <div className="relative h-[372px] rounded-2xl overflow-hidden">
          <img src={planner.bg} alt="Ägypten" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-x-0 top-0 pt-[43px] px-6 flex flex-col items-center gap-1 text-white">
            <h3 className={`${titleClass} text-white text-center`}>{planner.h3}</h3>
            <div className="flex items-center gap-2">
              <div className="flex">
                {planner.avatars.map((a, i) => <img key={a} src={a} alt={`Tourlaner${i + 1}`} className="w-6 h-6 rounded-full border border-white object-cover" style={{ marginLeft: i ? -4 : 0 }} />)}
              </div>
              <span className="eg-title-md text-white">{planner.social}</span>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[141px] w-[650px] rounded-xl bg-[#FEFCF4] shadow-[0_1px_2px_rgba(0,0,0,0.3),0_1px_3px_1px_rgba(0,0,0,0.15)] z-10" data-testid="eg-planner-card">
          <div className="pt-7 px-16">
            <h3 className="eg-title-lg text-[#1B1C17] text-center">{planner.question}</h3>
            <div className="mt-[33px] rounded-xl border border-[#C0C9C0] px-4">
              {planner.rows.map((r, i) => <CounterRow key={r.label} row={r} value={vals[i]} onChange={(v) => setVals(vals.map((x, k) => (k === i ? Math.max(r.min, v) : x)))} />)}
            </div>
          </div>
          <div className="px-6 mt-[104px]">
            <div className="h-[2px] bg-[#E4E3DB] rounded-full"><div className="h-full w-[12.5%] bg-[#006D44] rounded-full" /></div>
            <button type="button" className="eg-btn-filled w-full h-10 mt-4 eg-label-lg" data-testid="eg-planner-next">{planner.next}</button>
          </div>
          <div className="mt-4 h-16 rounded-b-xl bg-[#F0EEE6] px-8 py-3 flex items-center gap-8">
            <span className="eg-title-md text-[#1B1C17] whitespace-nowrap">{planner.known}</span>
            <div className="flex-1 flex items-center justify-center gap-4">
              {planner.press.map((l, i) => (
                <React.Fragment key={l.alt}>
                  {i > 0 && <span className="w-px h-6 bg-[#C0C9C0]" />}
                  <img src={l.src} alt={l.alt} width={l.w} height={l.h} style={{ width: l.w, height: l.h }} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Compact layout below lg */}
      <div className="lg:hidden relative rounded-2xl overflow-hidden">
        <img src={planner.bg} alt="Ägypten" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative p-4 pt-6 flex flex-col items-center gap-4">
          <h3 className="eg-display-sm text-white text-center">{planner.h3}</h3>
          <span className="eg-title-md text-white">{planner.social}</span>
          <div className="w-full max-w-[650px] rounded-xl bg-[#FEFCF4] p-4">
            <h3 className="eg-title-lg text-[#1B1C17] text-center">{planner.question}</h3>
            <div className="mt-4 rounded-xl border border-[#C0C9C0] px-4">
              {planner.rows.map((r, i) => <CounterRow key={r.label} row={r} value={vals[i]} onChange={(v) => setVals(vals.map((x, k) => (k === i ? Math.max(r.min, v) : x)))} />)}
            </div>
            <button type="button" className="eg-btn-filled w-full h-10 mt-6 eg-label-lg">{planner.next}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
