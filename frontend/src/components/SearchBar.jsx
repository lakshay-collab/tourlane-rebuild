import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { hero } from '../mock';

const DESTINATIONS = [
  { name: 'Egypt', to: '/afrika/aegypten' },
  { name: 'Asia', to: '/asien' },
  { name: 'South Africa' },
  { name: 'Iceland' },
  { name: 'Namibia' },
  { name: 'Thailand' },
  { name: 'Costa Rica' },
  { name: 'Canada' },
  { name: 'Japan' }
];

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

  const q = value.trim().toLowerCase();
  const matches = DESTINATIONS.filter((d) => !q || d.name.toLowerCase().includes(q));

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
        className={`flex items-center w-full h-14 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.06)] pl-6 pr-2 ${className}`}
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

      {focused && matches.length > 0 && (
        <div
          className="absolute left-0 right-0 top-full mt-2 z-50 bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.12),0_12px_32px_rgba(0,0,0,0.16)] overflow-hidden py-2"
          data-testid={`${id}-search-suggestions`}
        >
          {matches.map((d) => (
            <button
              type="button"
              key={d.name}
              onClick={() => pick(d)}
              className="w-full flex items-center gap-3 px-6 py-3 text-left t-body-lg text-onsurface hover:bg-onsurface/[0.06] transition-colors"
              data-testid={`${id}-search-suggestion-${d.name.toLowerCase().replace(/\s/g, '-')}`}
            >
              <MapPin size={18} strokeWidth={1.75} className="text-accent shrink-0" />
              <span>{d.name}</span>
              {d.to && <span className="ml-auto t-label-md text-primary">View trips</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
