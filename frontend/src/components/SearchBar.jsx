import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MapPin, Search } from 'lucide-react';
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
        className={`flex items-center w-full h-14 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.06)] pl-6 pr-2 transition-shadow ${focused ? 'shadow-[0_2px_8px_rgba(0,0,0,0.16),0_12px_32px_rgba(0,0,0,0.18)]' : ''} ${className}`}
        data-testid={`${id}-search-form`}
      >
        <MapPin size={22} strokeWidth={1.75} className="text-accent shrink-0" />
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
          className="absolute left-0 right-0 top-full mt-2 z-50 bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.12),0_12px_32px_rgba(0,0,0,0.18)] overflow-hidden"
          data-testid={`${id}-search-suggestions`}
        >
          <div className="px-6 pt-4 pb-2 t-label-md text-onsurface-variant uppercase tracking-wide">Destinations</div>
          <div className="max-h-[340px] overflow-y-auto pb-2">
            {matches.length === 0 && (
              <div className="px-6 py-4 t-body-md text-onsurface-variant">No destinations found</div>
            )}
            {matches.map((d) => (
              <button
                type="button"
                key={d.name}
                onClick={() => pick(d)}
                className="w-full flex items-center gap-4 px-6 py-2.5 text-left hover:bg-onsurface/[0.05] transition-colors"
                data-testid={`${id}-search-suggestion-${d.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                <img src={d.src} alt={d.name} loading="lazy" className="w-14 h-10 rounded-lg object-cover shrink-0 bg-surface-highest" />
                <span className="flex-1 t-body-lg text-onsurface">{d.name}</span>
                {d.to
                  ? <span className="t-label-md text-primary">View trips</span>
                  : <Search size={18} className="text-onsurface-variant" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
