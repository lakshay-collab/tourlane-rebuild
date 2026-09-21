import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from './EgyptIcons';

export function EgyptTile({ item, imgClass = 'h-[287px]', testId = 'eg-tile' }) {
  return (
    <a href={item.href} onClick={(e) => e.preventDefault()} className="eg-card h-full" data-testid={testId}>
      <img src={item.image} alt={item.alt || item.title} className={`w-full object-cover ${imgClass}`} loading="lazy" />
      <div className="py-6 px-4">
        {item.tag && <p className="eg-body-lg text-[#174358]">{item.tag}</p>}
        <h3 className={`eg-title-md text-[#002131] ${item.tag ? 'mt-1' : ''}`}>{item.title}</h3>
      </div>
    </a>
  );
}

export default function EgyptTileRow({ items, testId = 'eg-tile-row' }) {
  const ref = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);
  useEffect(() => {
    update();
    const el = ref.current;
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { el.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [update]);
  const go = (d) => ref.current.scrollBy({ left: d * 288, behavior: 'smooth' });

  return (
    <div className="relative -mx-3" data-testid={testId}>
      <div ref={ref} className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory">
        {items.map((it) => (
          <div key={it.title} className="shrink-0 w-[288px] px-3 snap-start"><EgyptTile item={it} /></div>
        ))}
      </div>
      {canPrev && <button type="button" onClick={() => go(-1)} className="eg-arrow absolute left-0 top-1/2 -translate-y-1/2 hidden md:inline-flex" aria-label="Zurück" data-testid={`${testId}-prev`}><ChevronLeft size={24} /></button>}
      {canNext && <button type="button" onClick={() => go(1)} className="eg-arrow absolute right-0 top-1/2 -translate-y-1/2 hidden md:inline-flex" aria-label="Weiter" data-testid={`${testId}-next`}><ChevronRight size={24} /></button>}
    </div>
  );
}
