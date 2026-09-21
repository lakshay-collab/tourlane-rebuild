import React, { useEffect, useRef, useState } from 'react';
import { detail, route } from '../../egyptDetailData';
import { ChevronLeft, ChevronRight, ChevronDown, HotelIcon, ExploreIcon } from './EgyptIcons';

const stop = (e) => e.preventDefault();

function StopText({ s }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:w-[346px] shrink-0" data-testid="eg-route-stop">
      <h3 className="eg-title-lg text-[#002131]" data-testid="eg-route-stop-name">{s.name}</h3>
      <p className="eg-body-md text-[#174358] pt-1 pb-3">{s.dayLabel}{s.subtitle ? ` · ${s.subtitle}` : ''}</p>
      <p className={`eg-body-md text-[#002131] whitespace-pre-line ${open ? '' : 'line-clamp-2'}`} data-testid="eg-route-text">{s.text}</p>
      <button type="button" onClick={() => setOpen((v) => !v)} className="inline-flex items-center gap-1 pt-1 eg-label-lg text-[#174358] underline" data-testid="eg-route-text-toggle">
        {open ? route.less : route.more}<ChevronDown size={16} className={open ? 'rotate-180' : ''} />
      </button>
    </div>
  );
}

function StopCarousel({ images, name }) {
  const [i, setI] = useState(0);
  const n = images.length;
  return (
    <div className="relative flex-1 min-w-0 h-[220px] md:h-[268px] rounded-xl overflow-hidden group bg-[#EAE8E0]" data-testid="eg-stop-gallery">
      <img src={images[i]} alt={`${name} ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
        <button type="button" onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0} className="eg-arrow pointer-events-auto disabled:opacity-40" aria-label="Back" data-testid="eg-stop-prev"><ChevronLeft size={24} /></button>
        <button type="button" onClick={() => setI((v) => Math.min(n - 1, v + 1))} disabled={i === n - 1} className="eg-arrow pointer-events-auto disabled:opacity-40" aria-label="Next" data-testid="eg-stop-next"><ChevronRight size={24} /></button>
      </div>
    </div>
  );
}

const Card = ({ children, testId, className = '' }) => <div className={`bg-[#FBF9F1] border border-[#C4CBD0] rounded-xl overflow-hidden ${className}`} data-testid={testId}>{children}</div>;

function Accommodation({ a }) {
  return (
    <div className="flex flex-col gap-4 min-w-0" data-testid="eg-stop-accommodation">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <div className="flex items-center gap-2"><HotelIcon size={24} className="text-[#174358]" /><h3 className="eg-title-lg text-[#002131]">{route.accommodationHeading}</h3></div>
        <a href={detail.ctaHref} onClick={stop} className="eg-label-lg text-[#174358] underline whitespace-nowrap" data-testid="eg-accommodation-cta">{route.accommodationCta}</a>
      </div>
      <Card testId="eg-accommodation-card">
        <div className="grid grid-cols-[3fr_2fr] gap-1 h-[176px]">
          <div className="relative overflow-hidden"><img src={a.images[0]} alt={a.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" /></div>
          <div className="grid grid-rows-2 gap-1 min-h-0">
            {a.images.slice(1, 3).map((src, k) => <div key={k} className="relative overflow-hidden"><img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" /></div>)}
          </div>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h4 className="eg-title-md text-[#002131]">{a.name}</h4>
          <div className="eg-body-md text-[#174358] eg-clamp-4">{a.description.split('\n\n').map((p, k) => <p key={k}>{p}</p>)}</div>
        </div>
      </Card>
    </div>
  );
}

function Activities({ items }) {
  const track = useRef(null);
  const scroll = (d) => track.current && track.current.scrollBy({ left: d * 292, behavior: 'smooth' });
  return (
    <div className="flex flex-col gap-4 min-w-0" data-testid="eg-stop-activities">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2"><ExploreIcon size={24} className="text-[#174358]" /><h3 className="eg-title-lg text-[#002131]">{route.programHeading}</h3><span className="eg-body-md text-[#174358]">({items.length})</span></div>
        {items.length > 1 && (
          <div className="hidden md:flex gap-2">
            <button type="button" onClick={() => scroll(-1)} className="eg-arrow !w-9 !h-9" aria-label="Previous activity" data-testid="eg-activities-prev"><ChevronLeft size={20} /></button>
            <button type="button" onClick={() => scroll(1)} className="eg-arrow !w-9 !h-9" aria-label="Next activity" data-testid="eg-activities-next"><ChevronRight size={20} /></button>
          </div>
        )}
      </div>
      <div ref={track} className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0" data-testid="eg-activities-track">
        {items.map((a) => (
          <Card key={a.name} className="w-[280px] shrink-0 snap-start" testId="eg-activity-card">
            <div className="relative h-[160px] bg-[#EAE8E0]">
              <img src={a.image} alt={a.name} className="w-full h-full object-cover" loading="lazy" />
              {a.optional && <span className="absolute left-2 top-2 rounded-lg bg-white/90 px-2 py-1 eg-label-md text-[#174358] uppercase tracking-wide" data-testid="eg-activity-optional">{route.optional}</span>}
            </div>
            <div className="p-4 flex flex-col gap-1.5">
              <h4 className="eg-title-md text-[#002131]" data-testid="eg-activity-name">{a.name}</h4>
              <p className="eg-body-md text-[#174358] line-clamp-3">{a.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function EgyptRoute({ onSummary }) {
  const [active, setActive] = useState(0);
  const [stuck, setStuck] = useState(false);
  const head = useRef(null);
  useEffect(() => {
    const onScroll = () => { if (head.current) setStuck(head.current.getBoundingClientRect().top <= 0 && window.scrollY > 0); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const s = route.stops[active];
  return (
    <div className="bg-[#F6F4EB] rounded-xl" id="itinerary" data-testid="eg-detail-route">
      <div ref={head} className="sticky top-0 z-20 bg-[#F0EEE6] rounded-t-xl px-4 md:px-10" data-testid="eg-route-header">
        <div className="flex items-center justify-between gap-3 pt-3.5 pb-1.5">
          <h2 className="eg-title-lg md:eg-headline-md !leading-7 text-[#002131]">{route.h2}</h2>
          <button type="button" onClick={onSummary} className="shrink-0 inline-flex items-center gap-1 h-9 px-3 rounded-full border border-[#6F777C] eg-label-lg text-[#174358] hover:bg-[rgba(23,67,88,0.08)]" data-testid="eg-route-summary-cta"><span className="md:hidden">Summary</span><span className="hidden md:inline">{route.summaryCta}</span></button>
        </div>
        {!stuck && <p className="eg-body-md text-[#174358] pb-3" data-testid="eg-route-sub">{route.sub}</p>}
        <div role="tablist" className="flex overflow-x-auto no-scrollbar border-b border-[#E4E3DB]" data-testid="eg-route-tabs">
          {route.stops.map((st, i) => (
            <button key={st.letter} role="tab" aria-selected={active === i} onClick={() => setActive(i)} className={`relative h-14 ${i ? 'pl-3' : 'pl-1'} pr-3 flex items-center gap-2 whitespace-nowrap ${active === i ? 'text-[#002131]' : 'text-[#174358]'}`} data-testid={`eg-route-tab-${i}`}>
              <span className={`w-6 h-6 rounded-full border flex items-center justify-center eg-label-lg ${active === i ? 'bg-[#174358] border-[#174358] text-white' : 'bg-white border-[#C4CBD0] text-[#174358]'}`}>{st.letter}</span>
              <span className="flex flex-col items-start leading-tight"><span className="eg-label-lg">{st.name}</span><span className="eg-body-sm text-[#6F777C]">{st.dayLabel}</span></span>
              {active === i && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-[#174358]" />}
            </button>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-10 pt-8 pb-7">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <StopText key={active} s={s} />
            <StopCarousel key={`c${active}`} images={s.images} name={s.name} />
          </div>
          {s.accommodation && <div className="md:max-w-[520px]"><Accommodation a={s.accommodation} /></div>}
          {s.activities && s.activities.length > 0 && <Activities key={`a${active}`} items={s.activities} />}
        </div>
      </div>
    </div>
  );
}
