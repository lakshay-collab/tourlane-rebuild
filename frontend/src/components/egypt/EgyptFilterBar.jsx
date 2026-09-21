import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { styles, sorts, hero } from '../../egyptListingData';
import { ChevronDown } from './EgyptIcons';
import { NavIcon } from './EgyptNavIcons';

const menus = (style, sort) => [
  { key: 'styles', label: 'Travel styles', pick: 'style', items: styles.map((s) => ({ id: s.key, label: s.key, icon: s.icon, selected: style === s.key })) },
  { key: 'sort', label: 'Sort', pick: 'sort', items: sorts.map((s) => ({ id: s.key, label: s.label, icon: s.icon, selected: sort === s.key })) }
];

export default function EgyptFilterBar({ style, sort, onStyle, onSort }) {
  const [open, setOpen] = useState(null);
  const [left, setLeft] = useState(0);
  const [stuck, setStuck] = useState(false);
  const ref = useRef(null);
  const list = menus(style, sort);

  useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(null); };
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null); };
    const onScroll = () => { if (ref.current) setStuck(ref.current.getBoundingClientRect().top <= 1); };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('touchstart', onDoc, { passive: true });
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('touchstart', onDoc); document.removeEventListener('keydown', onKey); window.removeEventListener('scroll', onScroll); };
  }, []);

  const toggle = (key, e) => {
    if (open === key) return setOpen(null);
    const r = e.currentTarget.getBoundingClientRect();
    const w = ref.current.getBoundingClientRect();
    setLeft(Math.max(0, Math.min(r.left - w.left, w.width - 280)));
    setOpen(key);
  };
  const pick = (menu, item) => {
    const v = item.selected ? null : item.id;
    if (menu.pick === 'style') onStyle(v); else onSort(v);
    setOpen(null);
  };
  const openMenu = list.find((m) => m.key === open);

  return (
    <div ref={ref} className={`sticky top-0 z-30 mt-6 -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 bg-[#FBF9F1] transition-shadow ${stuck ? 'shadow-[0_6px_12px_-8px_rgba(0,33,49,0.25)]' : ''}`} data-testid="eg-filter-bar">
      <div className="relative flex items-center gap-2 sm:gap-3 h-16">
        {list.map((m) => {
          const active = m.items.some((i) => i.selected);
          const isOpen = open === m.key;
          return (
            <button key={m.key} type="button" onClick={(e) => toggle(m.key, e)} aria-expanded={isOpen} aria-haspopup="menu"
              className={`shrink-0 inline-flex items-center gap-1 h-10 pl-3 sm:pl-4 pr-2 sm:pr-3 rounded-full border whitespace-nowrap eg-label-lg transition-colors ${active || isOpen ? 'border-transparent eg-grad-harbor text-white shadow-[0_2px_8px_rgba(23,67,88,0.3)]' : 'border-[#6F777C] text-[#002131] hover:bg-[rgba(23,67,88,0.08)]'}`}
              data-testid={`eg-filter-${m.key}`}>
              {m.label}
              {active && <span className="ml-0.5 w-1.5 h-1.5 rounded-full bg-white" data-testid={`eg-filter-${m.key}-dot`} />}
              <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
          );
        })}
        <a href={hero.ctaHref} onClick={(e) => e.preventDefault()} className="eg-btn-filled hidden lg:inline-flex ml-auto h-11 px-6 eg-title-md" data-testid="eg-filter-cta">{hero.stickyCta}</a>
      </div>
      {openMenu && (
        <div role="menu" style={{ left }} className="absolute top-full z-30 w-[280px] max-h-[364px] overflow-y-auto no-scrollbar rounded-lg bg-[#F0EEE6] shadow-[0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_2px_rgba(0,0,0,0.15)] animate-[hi-fade-in_150ms_ease-out]" data-testid={`eg-filter-dropdown-${openMenu.key}`}>
          {openMenu.items.map((it) => (
            <button key={it.id} type="button" role="menuitemradio" aria-checked={!!it.selected} onClick={() => pick(openMenu, it)} className="w-full flex items-center gap-3 px-4 py-3 text-left eg-body-lg text-[#002131] hover:bg-[rgba(23,67,88,0.08)] transition-colors" data-testid="eg-filter-item">
              <NavIcon name={it.icon} />
              <span className={`flex-1 ${it.selected ? 'font-semibold' : ''}`}>{it.label}</span>
              {it.selected && <Check size={20} className="text-[#174358] shrink-0" aria-hidden />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
