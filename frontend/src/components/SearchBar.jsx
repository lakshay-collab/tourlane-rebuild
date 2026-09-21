import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { hero } from '../mock';

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
  const mobile = useIsMobile();
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={submit}
      className={`flex items-center w-full h-14 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.06)] pl-6 pr-2 ${className}`}
      data-testid={`${id}-search-form`}
    >
      <MapPin size={22} strokeWidth={1.75} className="text-primary shrink-0" />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={mobile ? hero.searchPlaceholderMobile : hero.searchPlaceholder}
        className="flex-1 min-w-0 bg-transparent outline-none px-4 t-body-lg text-onsurface placeholder:text-onsurface-variant"
        data-testid={`${id}-search-input`}
      />
      <button type="submit" className="btn-filled" data-testid={`${id}-search-submit`}>{hero.cta}</button>
    </form>
  );
}
