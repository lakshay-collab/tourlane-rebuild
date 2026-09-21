import React, { useEffect, useState } from 'react';
import { CalendarDays, ShieldCheck } from 'lucide-react';
import { ratings } from '../mock';
import { GoogleLogo, TripAdvisorLogo } from './Rating';

const INTERVAL = 5000;

const Seg = ({ icon: Icon, children, testId }) => (
  <div className="flex items-center gap-2 whitespace-nowrap" data-testid={testId}>
    {Icon && <Icon size={18} strokeWidth={1.75} className="text-primary shrink-0" />}
    <span className="t-label-lg text-onsurface">{children}</span>
  </div>
);
const Sep = () => <span className="hidden sm:block h-5 w-px bg-outline-variant" />;
const Group = ({ children }) => <div className="flex items-center gap-x-3 gap-y-0 sm:gap-6 flex-wrap justify-center">{children}</div>;

const SLIDES = [
  {
    key: 'ratings',
    node: (
      <Group>
        <Seg icon={GoogleLogo} testId="rating-google">Rated <span className="font-semibold">{ratings.google.score}</span> on Google</Seg>
        <Sep />
        <Seg icon={TripAdvisorLogo} testId="rating-tripadvisor">Rated <span className="font-semibold">{ratings.tripadvisor.score}</span> on TripAdvisor</Seg>
      </Group>
    )
  },
  {
    key: 'heritage',
    node: (
      <Group>
        <Seg icon={CalendarDays} testId="trust-slide-heritage">Established in <span className="font-semibold">1995</span></Seg>
        <Sep />
        <Seg><span className="font-semibold">30+</span> years of expertise</Seg>
        <Sep />
        <Seg><span className="font-semibold">400,000+</span> happy travellers</Seg>
      </Group>
    )
  },
  {
    key: 'iso',
    node: (
      <Group>
        <Seg icon={ShieldCheck} testId="trust-slide-iso">Hi Tours is <span className="font-semibold">ISO 45001</span> certified</Seg>
        <Sep />
        <Seg>Health &amp; safety is our priority</Seg>
      </Group>
    )
  }
];

export default function TrustBar() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  const slide = SLIDES[i];
  return (
    <div
      className="bg-secondary-container h-11 flex items-center justify-center px-4 overflow-hidden select-none"
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
