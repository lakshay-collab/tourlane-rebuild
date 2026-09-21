import React from 'react';

const Star = ({ color }) => (
  <svg viewBox="0 0 24 24" className="w-full h-full block" aria-hidden>
    <path fill={color} d="M12 17.27 6.18 21l1.64-6.81L2.5 9.24l6.93-.59L12 2.25l2.57 6.4 6.93.59-5.32 4.95L17.82 21z" />
  </svg>
);

const Bubble = ({ color }) => (
  <svg viewBox="0 0 24 24" className="w-full h-full block" aria-hidden>
    <circle cx="12" cy="12" r="10" fill={color} />
  </svg>
);

const Row = ({ rating = 5, size = 16, Shape, on, off, gap = 2 }) => (
  <span className="inline-flex" style={{ gap }}>
    {[0, 1, 2, 3, 4].map((i) => {
      const fill = Math.max(0, Math.min(1, rating - i));
      return (
        <span key={i} className="relative block shrink-0" style={{ width: size, height: size }}>
          <Shape color={off} />
          <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}><Shape color={on} /></span>
        </span>
      );
    })}
  </span>
);

// Our own branded review stars (brand Amber)
export const BrandStars = ({ rating = 5, size = 16, className = '' }) => (
  <span className={`inline-flex ${className}`} data-testid="brand-stars">
    <Row rating={rating} size={size} Shape={Star} on="#FB7F26" off="#E7E2D6" />
  </span>
);

// Trustpilot-style boxed stars, coloured blue (no Trustpilot branding)
const StarTile = ({ fill = 1, size = 20, color }) => (
  <span className="relative block shrink-0" style={{ width: size, height: size, background: '#DADCE6' }}>
    <span className="absolute inset-y-0 left-0" style={{ width: `${fill * 100}%`, background: color }} />
    <svg viewBox="0 0 46 46" className="absolute inset-0 w-full h-full"><path fill="#FFF" d="M39.534 19.711L13.23 38.801l3.838-11.798L7.021 19.71h12.42l3.837-11.798 3.837 11.798h12.419zm-16.255 11.8L30.462 30l2.862 8.8-10.045-7.29z" /></svg>
  </span>
);

export const BoxStars = ({ rating = 5, size = 20, color = '#1C6FB8', className = '' }) => (
  <span className={`inline-flex gap-[3px] ${className}`} data-testid="brand-stars">
    {[0, 1, 2, 3, 4].map((i) => <StarTile key={i} size={size} color={color} fill={Math.max(0, Math.min(1, rating - i))} />)}
  </span>
);

export const GoldStars = ({ rating = 5, size = 15, className = '' }) => (
  <span className={`inline-flex ${className}`}>
    <Row rating={rating} size={size} Shape={Star} on="#FBBC04" off="#DADCE0" />
  </span>
);

export const TripAdvisorBubbles = ({ rating = 5, size = 15, className = '' }) => (
  <span className={`inline-flex ${className}`}>
    <Row rating={rating} size={size} Shape={Bubble} on="#34E0A1" off="#D9E6E3" />
  </span>
);

export const GoogleLogo = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-label="Google">
    <path fill="#4285F4" d="M23.52 12.27c0-.82-.07-1.6-.2-2.36H12v4.47h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.74z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.95-2.91l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.09A12 12 0 0 0 12 24z" />
    <path fill="#FBBC04" d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56V6.63H1.26a12 12 0 0 0 0 10.74z" />
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44A11.96 11.96 0 0 0 12 0 12 12 0 0 0 1.26 6.63l4.01 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
  </svg>
);

export const TripAdvisorLogo = ({ size = 20 }) => (
  <svg viewBox="0 0 68 40" height={size} width={size * 1.7} aria-label="Tripadvisor">
    <circle cx="20" cy="20" r="14" fill="none" stroke="#34E0A1" strokeWidth="5" />
    <circle cx="20" cy="20" r="5.5" fill="#000" />
    <circle cx="48" cy="20" r="14" fill="none" stroke="#34E0A1" strokeWidth="5" />
    <circle cx="48" cy="20" r="5.5" fill="#000" />
    <path d="M28 12 L40 12 L34 4 Z" fill="#34E0A1" />
  </svg>
);
