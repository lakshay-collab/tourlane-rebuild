import React, { useEffect, useRef, useState } from 'react';
import { detail, route } from '../../egyptDetailData';
import { ChevronLeft, ChevronRight, ChevronDown, HotelIcon, ExploreIcon } from './EgyptIcons';

const stop = (e) => e.preventDefault();

function StopText({ s }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:w-[346px] shrink-0" data-testid="eg-route-stop">
      <h3 className="eg-title-lg text-[#002131] pb-2" data-testid="eg-route-stop-name">{s.name}</h3>
      <p className="eg-body-md text-[#174358] pb-3">{s.dayLabel}</p>
      <p className={`eg-body-md text-[#002131] whitespace-pre-line ${open ? '' : 'eg-clamp-6'}`} data-testid="eg-route-text">{s.text}</p>
      <button type="button" onClick={() => setOpen((v) => !v)} className="inline-flex items-center gap-1 pt-1 eg-body-md text-[#002131] underline" data-testid="eg-route-text-toggle">
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
      <div className="absolute inset-x-0 bottom-0 h-6 flex items-center justify-center gap-2 pointer-events-none">
        {images.map((_, k) => <span key={k} className="w-2 h-2 rounded-full bg-white" style={{ opacity: k === i ? 1 : 0.65 }} />)}
      </div>
    </div>
  );
}

const Card = ({ children, testId }) => <div className="bg-[#FBF9F1] border border-[#C4CBD0] rounded-xl overflow-hidden" data-testid={testId}>{children}</div>;

function Accommodation({ a }) {
  return (
    <div className="flex flex-col gap-4 min-w-0" data-testid="eg-stop-accommodation">
      <div className="flex items-center gap-4 h-7">
        <div className="flex items-center gap-2"><HotelIcon size={24} className="text-[#002131]" /><h3 className="eg-title-lg text-[#002131]">{route.accommodationHeading}</h3></div>
        <a href={detail.ctaHref} onClick={stop} className="eg-body-lg text-[#174358] underline whitespace-nowrap" data-testid="eg-accommodation-cta">{route.accommodationCta}</a>
      </div>
      <Card testId="eg-accommodation-card">
        <div className="grid grid-cols-[3fr_2fr] gap-1 h-[176px]">
          <div className="relative overflow-hidden"><img src={a.images[0]} alt={a.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" /></div>
          <div className="grid grid-rows-2 gap-1 min-h-0">
            {a.images.slice(1, 3).map((src, k) => <div key={k} className="relative overflow-hidden"><img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" /></div>)}
          </div>
        </div>
        <div className="p-4 flex flex-col gap-2 h-36">
          <h4 className="eg-title-md text-[#002131] eg-clamp-1">{a.name}</h4>
          <div className="eg-body-md text-[#002131] eg-clamp-4">{a.description.split('\n\n').map((p, k) => <p key={k}>{p}</p>)}</div>
        </div>
      </Card>
    </div>
  );
}

function Program({ p, d }) {
  return (
    <div className="flex flex-col gap-4 min-w-0" data-testid="eg-stop-program">
      <div className="flex items-center gap-2 h-7"><ExploreIcon size={24} className="text-[#002131]" /><h3 className="eg-title-lg text-[#002131]">{route.programHeading}</h3></div>
      <Card testId="eg-program-card">
        <div className="h-[176px] bg-[#EAE8E0]"><img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" /></div>
        <div className="p-4 flex flex-col gap-2 h-36">
          <h4 className="eg-title-md text-[#002131] eg-clamp-1">{p.name}</h4>
          <div className="eg-body-md text-[#002131] eg-clamp-4">
            <p>{p.description}</p>
            {d && <><h3 className="eg-body-md">{d.h3}</h3>{d.points.map((pt) => <React.Fragment key={pt.h}><p className="pt-4">{pt.h}</p><p>{pt.t}</p></React.Fragment>)}</>}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function EgyptRoute() {
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
    <div className="bg-[#F6F4EB] rounded-xl" data-testid="eg-detail-route">
      <div ref={head} className="sticky top-0 z-20 bg-[#F0EEE6] rounded-t-xl px-4 md:px-10" data-testid="eg-route-header">
        <h2 className="eg-headline-md !leading-7 pt-3.5 pb-1.5 text-[#002131]">{route.h2}</h2>
        {!stuck && <p className="eg-body-md text-[#002131] py-3" data-testid="eg-route-sub">{route.sub}</p>}
        <div role="tablist" className="flex overflow-x-auto no-scrollbar border-b border-[#E4E3DB]" data-testid="eg-route-tabs">
          {route.stops.map((st, i) => (
            <button key={st.letter} role="tab" aria-selected={active === i} onClick={() => setActive(i)} className={`relative h-12 ${i ? 'pl-2' : 'pl-1'} pr-2 flex items-center gap-2 eg-label-lg whitespace-nowrap ${active === i ? 'text-[#174358]' : 'text-[#174358]'}`} data-testid={`eg-route-tab-${i}`}>
              <span className={`w-6 h-6 rounded-full border flex items-center justify-center eg-label-lg ${active === i ? 'bg-[#174358] border-white text-white' : 'bg-white border-[#DCE5DC] text-[#174358]'}`}>{st.letter}</span>{st.name}
              {active === i && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-[#174358]" />}
            </button>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-10 pt-9 pb-7">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col md:flex-row gap-8">
            <StopText key={active} s={s} />
            <StopCarousel key={`c${active}`} images={s.images} name={s.name} />
          </div>
          <div className={`grid gap-8 ${s.accommodation && s.program ? 'md:grid-cols-[520px_312px]' : s.accommodation ? 'md:grid-cols-[520px]' : 'md:grid-cols-[312px]'}`}>
            {s.accommodation && <Accommodation a={s.accommodation} />}
            {s.program && <Program p={s.program} d={s.programDetail} />}
          </div>
        </div>
      </div>
    </div>
  );
}
