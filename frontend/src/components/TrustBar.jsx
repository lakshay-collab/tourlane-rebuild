import React, { useEffect, useState } from 'react';
import { CalendarDays, ShieldCheck } from 'lucide-react';
import { ratings } from '../mock';
import { GoogleLogo, TripAdvisorLogo } from './Rating';

const INTERVAL = 5000;

const RatingsSlide = () => (
  <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
    <div className="flex items-center gap-2 whitespace-nowrap" data-testid="rating-google">
      <GoogleLogo size={18} />
      <span className="t-label-lg text-onsurface">Rated <span className="font-semibold">{ratings.google.score}</span> on Google</span>
    </div>
    <span className="hidden sm:block h-5 w-px bg-outline-variant" />
    <div className="flex items-center gap-2 whitespace-nowrap" data-testid="rating-tripadvisor">
      <TripAdvisorLogo size={20} />
      <span className="t-label-lg text-onsurface">Rated <span className="font-semibold">{ratings.tripadvisor.score}</span> on TripAdvisor</span>
    </div>
  </div>
);

const TextSlide = ({ icon: Icon, children, testId }) => (
  <p className="flex items-center gap-2 t-label-lg text-onsurface text-center" data-testid={testId}>
    <Icon size={18} strokeWidth={1.75} className="text-primary shrink-0 hidden sm:block" />
    <span>{children}</span>
  </p>
);

const SLIDES = [
  { key: 'ratings', node: <RatingsSlide /> },
  {
    key: 'heritage',
    node: (
      <TextSlide icon={CalendarDays} testId="trust-slide-heritage">
        Established in 1995. <span className="font-semibold">30+ years</span> of crafting incredible holidays for lakhs of travellers around the globe.
      </TextSlide>
    )
  },
  {
    key: 'iso',
    node: (
      <TextSlide icon={ShieldCheck} testId="trust-slide-iso">
        Did you know? Hi Tours was the <span className="font-semibold">first travel company in India</span> to earn ISO 45001 health &amp; safety certification.
      </TextSlide>
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
      className="bg-secondary-container min-h-11 py-2 flex items-center justify-center px-4 overflow-hidden select-none"
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
