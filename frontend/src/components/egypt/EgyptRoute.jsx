import React, { useEffect, useRef, useState } from 'react';
import { route } from '../../egyptDetailData';
import { X, Plane, Car } from 'lucide-react';
import { ChevronLeft, ChevronRight, HotelIcon, ExploreIcon, GalleryIcon, PinIcon } from './EgyptIcons';


export const RouteLine = ({ cities, className = '', testId = 'eg-route-line' }) => (
  <div className={`flex flex-wrap items-center gap-x-1 gap-y-1.5 ${className}`} data-testid={testId}>
    {cities.map((c, i) => (
      <React.Fragment key={`${c}-${i}`}>
        {i > 0 && <ChevronRight size={14} className="text-[#308BB6] mx-1 shrink-0" />}
        <span className="inline-flex items-center gap-1 eg-label-lg text-[#002131] whitespace-nowrap" data-testid={`${testId}-chip-${i}`}><PinIcon size={14} className="text-[#308BB6]" />{c}</span>
      </React.Fragment>
    ))}
  </div>
);
const HEADER = 120;

const BulletMark = ({ text }) => {
  const t = text.toLowerCase();
  const cls = 'mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0';
  if (t.includes('flight') || t.includes('departure') || t.includes('fly ') || t.includes('airport')) return <span className={`${cls} bg-[#308BB6] text-white`}><Plane size={14} /></span>;
  if (t.includes('transfer')) return <span className={`${cls} bg-[#FB7F26] text-white`}><Car size={14} /></span>;
  return <span className={`${cls} bg-[#9ACDE5] text-[#002131]`}><span className="w-1.5 h-1.5 rounded-full bg-[#002131]" /></span>;
};

function StopText({ s }) {
  return (
    <div className="md:w-[346px] shrink-0" data-testid="eg-route-stop">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <h3 className="eg-title-lg text-[#002131]" data-testid="eg-route-stop-name">{s.name}</h3>
        <span className="eg-label-lg font-semibold text-[#174358] whitespace-nowrap" data-testid="eg-route-daylabel">{s.dayLabel}</span>
      </div>
      {s.subtitle && <RouteLine cities={s.subtitle.split(' → ')} className="mt-2" testId="eg-route-subtitle" />}
      <ul className="mt-4 flex flex-col gap-2.5" data-testid="eg-route-bullets">
        {s.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 eg-body-lg text-[#002131]" data-testid="eg-route-bullet"><BulletMark text={b} />{b}</li>
        ))}
      </ul>
    </div>
  );
}

function StopCarousel({ images, name }) {
  const [i, setI] = useState(0);
  const n = images.length;
  return (
    <div className="relative flex-1 min-w-0 h-[220px] md:h-auto md:min-h-[268px] md:self-stretch rounded-xl overflow-hidden bg-[#EAE8E0]" data-testid="eg-stop-gallery">
      <img src={images[i]} alt={`${name} ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
        <button type="button" onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0} className="eg-arrow pointer-events-auto disabled:opacity-40" aria-label="Back" data-testid="eg-stop-prev"><ChevronLeft size={24} /></button>
        <button type="button" onClick={() => setI((v) => Math.min(n - 1, v + 1))} disabled={i === n - 1} className="eg-arrow pointer-events-auto disabled:opacity-40" aria-label="Next" data-testid="eg-stop-next"><ChevronRight size={24} /></button>
      </div>
    </div>
  );
}

const SectionHead = ({ icon: Icon, title, extra }) => (
  <div className="flex items-center justify-between gap-3">
    <div className="flex items-center gap-2 min-w-0"><Icon size={24} className="text-[#174358] shrink-0" /><h4 className="eg-title-md md:eg-title-lg text-[#002131]">{title}</h4>{extra}</div>
  </div>
);

export function Lightbox({ images, name, onClose, start = 0, portrait = false }) {
  const [i, setI] = useState(start);
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[60] bg-[#002131]/90 flex flex-col items-center justify-center p-4" onClick={onClose} role="dialog" aria-modal="true" data-testid="eg-lightbox">
      <button type="button" onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-[#002131] flex items-center justify-center" aria-label="Close" data-testid="eg-lightbox-close"><X size={20} /></button>
      <div className={`w-full ${portrait ? 'max-w-[min(420px,calc((100vh-96px)*9/16))]' : 'max-w-[960px]'}`} onClick={(e) => e.stopPropagation()}>
        <div className={`relative ${portrait ? 'aspect-[9/16]' : 'aspect-[3/2]'} rounded-xl overflow-hidden bg-black`}>
          <img src={images[i]} alt={`${name} ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" data-testid="eg-lightbox-image" />
          <div className="absolute inset-0 flex items-center justify-between p-3">
            <button type="button" onClick={() => setI((v) => (v - 1 + images.length) % images.length)} className="eg-arrow" aria-label="Previous photo" data-testid="eg-lightbox-prev"><ChevronLeft size={24} /></button>
            <button type="button" onClick={() => setI((v) => (v + 1) % images.length)} className="eg-arrow" aria-label="Next photo" data-testid="eg-lightbox-next"><ChevronRight size={24} /></button>
          </div>
        </div>
        <p className="mt-3 text-center eg-label-lg text-white">{name} · {i + 1}/{images.length}</p>
      </div>
    </div>
  );
}

function Accommodation({ a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-3" data-testid="eg-stop-accommodation">
      <SectionHead icon={HotelIcon} title={route.accommodationHeading} />
      <div className="flex bg-[#FBF9F1] border border-[#C4CBD0] rounded-xl overflow-hidden" data-testid="eg-accommodation-card">
        <button type="button" onClick={() => setOpen(true)} className="relative w-[120px] sm:w-[160px] shrink-0 text-left" aria-label={`${route.viewPhotos}: ${a.name}`}><img src={a.images[0]} alt={a.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" /></button>
        <div className="p-4 flex flex-col justify-center gap-1 min-w-0">
          <h5 className="eg-title-md text-[#002131]" data-testid="eg-accommodation-name">{a.name}</h5>
          <p className="eg-body-md text-[#174358] capitalize">{a.description}</p>
          <button type="button" onClick={() => setOpen(true)} className="self-start inline-flex items-center gap-1 pt-1 eg-label-lg text-[#174358] underline" data-testid="eg-accommodation-photos"><GalleryIcon size={16} />{route.viewPhotos} ({a.images.length})</button>
        </div>
      </div>
      {open && <Lightbox images={a.images} name={a.name} onClose={() => setOpen(false)} />}
    </div>
  );
}

function Activities({ items }) {
  const track = useRef(null);
  const scroll = (d) => track.current && track.current.scrollBy({ left: d * 292, behavior: 'smooth' });
  return (
    <div className="flex flex-col gap-3 min-w-0" data-testid="eg-stop-activities">
      <SectionHead icon={ExploreIcon} title={route.programHeading} extra={<span className="eg-body-md text-[#174358]">({items.length})</span>} />
      <div className="relative">
        <div ref={track} className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0" data-testid="eg-activities-track">
          {items.map((a) => (
            <div key={a.name} className="w-[260px] shrink-0 snap-start bg-[#FBF9F1] border border-[#C4CBD0] rounded-xl overflow-hidden" data-testid="eg-activity-card">
              <div className="relative h-[150px] bg-[#EAE8E0]">
                <img src={a.image} alt={a.name} className="w-full h-full object-cover" loading="lazy" />
                {a.optional && <span className="absolute left-2 top-2 rounded-lg bg-white/90 px-2 py-1 eg-label-md text-[#174358]" data-testid="eg-activity-optional">{route.optional}</span>}
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h5 className="eg-title-md text-[#002131]" data-testid="eg-activity-name">{a.name}</h5>
                <p className="eg-body-md text-[#174358]">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
        {items.length > 2 && (
          <div className="hidden md:flex absolute inset-y-0 -right-3 items-center">
            <button type="button" onClick={() => scroll(1)} className="eg-arrow shadow-md" aria-label="Next activity" data-testid="eg-activities-next"><ChevronRight size={24} /></button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function EgyptRoute({ onSummary, stops = route.stops }) {
  const [active, setActive] = useState(0);
  const [stuck, setStuck] = useState(false);
  const head = useRef(null);
  const refs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      if (!head.current) return;
      const top = head.current.getBoundingClientRect().top;
      setStuck(top <= 0 && window.scrollY > 0);
      const line = HEADER + 90;
      let idx = 0;
      refs.current.forEach((el, i) => { if (el && el.getBoundingClientRect().top <= line) idx = i; });
      setActive(idx);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (i) => {
    const el = refs.current[i];
    if (el) { setActive(i); window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - HEADER, behavior: 'smooth' }); }
  };

  return (
    <div className="bg-[#F6F4EB] rounded-xl" id="itinerary" data-testid="eg-detail-route">
      <div ref={head} className="sticky top-0 z-20 bg-[#F0EEE6] rounded-t-xl px-4 md:px-10 shadow-[0_6px_12px_-8px_rgba(0,33,49,0.2)]" data-testid="eg-route-header">
        <div className="flex items-center justify-between gap-3 pt-3.5 pb-1.5">
          <h2 className="eg-title-lg md:eg-headline-md !leading-7 text-[#002131]">{route.h2}</h2>
          <button type="button" onClick={onSummary} className="shrink-0 inline-flex items-center gap-1 h-9 px-4 rounded-full eg-grad-harbor hover:opacity-90 eg-label-lg text-white transition-opacity" data-testid="eg-route-summary-cta"><span className="md:hidden">{route.summaryShort}</span><span className="hidden md:inline">{route.summaryCta}</span></button>
        </div>
        {!stuck && <p className="eg-body-md text-[#174358] pb-3" data-testid="eg-route-sub">{route.sub}</p>}
        <div role="tablist" className="flex overflow-x-auto no-scrollbar border-b border-[#E4E3DB]" data-testid="eg-route-tabs">
          {stops.map((st, i) => (
            <button key={st.letter} role="tab" aria-selected={active === i} onClick={() => goTo(i)} className={`relative h-14 ${i ? 'pl-3' : 'pl-1'} pr-3 flex items-center gap-2 whitespace-nowrap ${active === i ? 'text-[#002131]' : 'text-[#174358]'}`} data-testid={`eg-route-tab-${i}`}>
              <span className={`w-6 h-6 rounded-full border flex items-center justify-center eg-label-lg ${active === i ? 'bg-[#174358] border-[#174358] text-white' : 'bg-white border-[#C4CBD0] text-[#174358]'}`}>{st.letter}</span>
              <span className="eg-label-lg">{st.name}</span>
              {active === i && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-[#174358]" />}
            </button>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-10 pt-8 pb-7 flex flex-col divide-y divide-[#DDD9CE]">
        {stops.map((s, i) => (
          <section key={s.letter} ref={(el) => { refs.current[i] = el; }} id={`stop-${i}`} className="py-8 first:pt-0 last:pb-0 flex flex-col gap-8" data-testid={`eg-route-section-${i}`}>
            <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8">
              <StopText s={s} />
              <StopCarousel images={s.images} name={s.name} />
            </div>
            {s.accommodation && <Accommodation a={s.accommodation} />}
            {s.activities && s.activities.length > 0 && <Activities items={s.activities} />}
          </section>
        ))}
      </div>
    </div>
  );
}
