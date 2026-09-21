import React from 'react';
import { trust } from '../mock';

const StarBox = ({ fill = 1, size = 20 }) => (
  <span className="relative block bg-surface-highest" style={{ width: size, height: size }}>
    <span className="absolute inset-y-0 left-0 bg-trustpilot" style={{ width: `${fill * 100}%` }} />
    <svg viewBox="0 0 46 46" className="absolute inset-0 w-full h-full">
      <path fill="#FFF" d="M39.534 19.711L13.23 38.801l3.838-11.798L7.021 19.71h12.42l3.837-11.798 3.837 11.798h12.419zm-16.255 11.8L30.462 30l2.862 8.8-10.045-7.29z" />
    </svg>
  </span>
);

export const TrustpilotStars = ({ rating = trust.rating, size = 20, className = '' }) => (
  <span className={`inline-flex gap-[2px] ${className}`} data-testid="trustpilot-stars">
    {[0, 1, 2, 3, 4].map((i) => <StarBox key={i} size={size} fill={Math.max(0, Math.min(1, rating - i))} />)}
  </span>
);

export const TrustpilotLogo = ({ className = 'h-5' }) => (
  <img src="/trustpilot.svg" alt="Trustpilot" className={`${className} w-auto`} />
);

export default function TrustLine({ compact = false, className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 t-label-lg text-onsurface ${className}`} data-testid="trust-line">
      <span>{trust.label}</span>
      <TrustpilotStars size={compact ? 18 : 20} />
      <span className={compact ? 'hidden sm:inline' : ''}>{trust.score} {trust.outOf}</span>
      <span className={compact ? 'hidden sm:inline' : ''}>{trust.count} {trust.reviews}</span>
      <TrustpilotLogo className="h-[22px]" />
    </div>
  );
}
