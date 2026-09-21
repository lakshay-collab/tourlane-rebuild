import React, { useEffect, useState } from 'react';
import { CalendarDays, ShieldCheck } from 'lucide-react';
import { ratings } from '../mock';
import { GoogleLogo, TripAdvisorLogo } from './Rating';

const INTERVAL = 5000;

const Seg = ({ icon: Icon, children, short, testId }) => (
  <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap" data-testid={testId}>
    {Icon && <span className="shrink-0 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-[18px] sm:[&>svg]:h-[18px] [&>img]:w-4 [&>img]:h-4 sm:[&>img]:w-[18px] sm:[&>img]:h-[18px] text-primary flex"><Icon size={18} strokeWidth={1.75} /></span>}
    <span className="t-label-lg text-xs sm:text-sm text-onsurface">
      {short ? <><span className="sm:hidden">{short}</span><span className="hidden sm:inline">{children}</span></> : children}
    </span>
  </div>
);
const Sep = () => <span className="hidden sm:block h-5 w-px bg-outline-variant" />;
const Group = ({ children }) => <div className="flex items-center gap-x-3 sm:gap-6 flex-nowrap justify-center">{children}</div>;
const B = ({ children }) => <span className="font-semibold">{children}</span>;

const SLIDES = [
  {
    key: 'ratings',
    node: (
      <Group>
        <Seg icon={GoogleLogo} testId="rating-google">Rated <B>{ratings.google.score}</B> on Google</Seg>
        <Sep />
        <Seg icon={TripAdvisorLogo} testId="rating-tripadvisor">Rated <B>{ratings.tripadvisor.score}</B> on TripAdvisor</Seg>
      </Group>
    )
  },
  {
    key: 'heritage',
    node: (
      <Group>
        <Seg icon={CalendarDays} testId="trust-slide-heritage" short={<>Est. <B>1995</B></>}>Established in <B>1995</B></Seg>
        <Sep />
        <Seg short={<><B>30+</B> years</>}><B>30+</B> years of expertise</Seg>
        <Sep />
        <Seg short={<><B>400,000+</B> travellers</>}><B>400,000+</B> happy travellers</Seg>
      </Group>
    )
  },
  {
    key: 'iso',
    node: (
      <Group>
        <Seg icon={ShieldCheck} testId="trust-slide-iso" short={<><B>ISO 45001</B> certified</>}>Hi Tours is <B>ISO 45001</B> certified</Seg>
        <Sep />
        <Seg short="Health & safety first">Health &amp; safety is our priority</Seg>
      </Group>
    )
  }
];

export default function TrustBar() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const t = setTimeout(() => setI((v) => (v + 1) % SLIDES.length), INTERVAL);
    return () => clearTimeout(t);
  }, [paused, i]);

  const next = () => setI((v) => (v + 1) % SLIDES.length);
  const slide = SLIDES[i];
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={next}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); } }}
      className="bg-secondary-container h-11 flex items-center justify-center px-4 overflow-hidden select-none cursor-pointer active:bg-secondary-dim transition-colors duration-200 focus-visible:outline-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-testid="trust-bar"
      data-slide={slide.key}
      aria-live="polite"
    >
      <div key={slide.key} className="w-full flex justify-center animate-[hi-slide-up_500ms_cubic-bezier(.22,.61,.36,1)]" data-testid="trust-bar-slide">
        {slide.node}
      </div>
    </div>
  );
}
