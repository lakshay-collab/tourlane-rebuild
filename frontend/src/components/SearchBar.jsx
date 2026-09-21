import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { hero } from '../mock';
import { destinations } from '../destinationsData';

const ROUTES = { 'Egypt': '/afrika/aegypten', 'Asia': '/asien' };
const ASIA_IMG = 'https://images.ctfassets.net/bth3mlrehms2/27MnAH4RS1zTSFygAmnq5i/97ec55278a94f2ab56c26847396201ba/Thailand_Natur.jpg?w=160&q=60&fm=webp';

function buildDestinations() {
  const map = new Map();
  Object.values(destinations).forEach((list) => {
    list.forEach((d) => {
      if (!map.has(d.name)) map.set(d.name, { name: d.name, src: d.src, to: ROUTES[d.name] || null });
    });
  });
  map.set('Asia', { name: 'Asia', src: ASIA_IMG, to: '/asien' });
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}

const useIsMobile = () => {
  const [mobile, setMobile] = useState(() => window.matchMedia('(max-width: 599px)').matches);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 599px)');
    const fn = (e) => setMobile(e.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return mobile;
};

export default function SearchBar({ id = 'hero', className = '' }) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const mobile = useIsMobile();
  const navigate = useNavigate();
  const wrapRef = useRef(null);

  const all = useMemo(buildDestinations, []);
  const q = value.trim().toLowerCase();
  const matches = q ? all.filter((d) => d.name.toLowerCase().includes(q)) : all;

  useEffect(() => {
    const onDoc = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setFocused(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const pick = (d) => {
    if (d.to) { navigate(d.to); return; }
    setValue(d.name);
    setFocused(false);
  };

  const submit = (e) => {
    e.preventDefault();
    const routed = matches.find((d) => d.to);
    if (routed) navigate(routed.to);
  };

  return (
    <div ref={wrapRef} className="relative w-full">
      <form
        onSubmit={submit}
        className={`flex items-center w-full h-14 bg-white rounded-full pl-6 pr-2 transition-[box-shadow,transform] duration-300 ease-out ${focused ? 'shadow-[0_0_0_2px_#FFFFFF,0_0_0_5px_rgba(23,67,88,0.6),0_12px_32px_rgba(0,33,49,0.25)] -translate-y-0.5 scale-[1.01]' : 'shadow-[0_1px_3px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.06)]'} ${className}`}
        data-focused={focused}
        data-testid={`${id}-search-form`}
      >
        <MapPin size={22} strokeWidth={1.75} className={`text-accent shrink-0 transition-transform duration-300 ${focused ? 'animate-[hi-pin-nudge_500ms_ease-out]' : ''}`} />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          placeholder={mobile ? hero.searchPlaceholderMobile : hero.searchPlaceholder}
          className="flex-1 min-w-0 bg-transparent outline-none px-4 t-body-lg text-onsurface placeholder:text-onsurface-variant"
          data-testid={`${id}-search-input`}
          autoComplete="off"
        />
        <button type="submit" className="btn-sunset" data-testid={`${id}-search-submit`}>{hero.cta}</button>
      </form>

      {focused && (
        <div
          className="absolute left-0 right-0 top-full mt-2 z-50 bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.12),0_12px_32px_rgba(0,0,0,0.18)] overflow-hidden origin-top animate-[hi-drop-in_260ms_cubic-bezier(.22,.61,.36,1)]"
          data-testid={`${id}-search-suggestions`}
        >
          <div className="max-h-[360px] overflow-y-auto py-2">
            {matches.length === 0 && (
              <div className="px-6 py-4 t-body-md text-onsurface-variant">No destinations found</div>
            )}
            {matches.map((d, idx) => (
              <button
                type="button"
                key={d.name}
                onClick={() => pick(d)}
                style={{ animationDelay: `${Math.min(idx, 8) * 35}ms` }}
                className="w-full flex items-center gap-4 px-5 py-2.5 text-left hover:bg-onsurface/[0.05] transition-colors opacity-0 animate-[hi-row-in_300ms_ease-out_forwards]"
                data-testid={`${id}-search-suggestion-${d.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                <img src={d.src} alt={d.name} loading="lazy" className="w-12 h-12 rounded-full object-cover shrink-0 bg-surface-highest" />
                <span className="t-body-lg text-onsurface">{d.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
