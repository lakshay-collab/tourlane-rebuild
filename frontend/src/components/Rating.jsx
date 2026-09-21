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

export const TripAdvisorLogo = ({ size = 18 }) => (
  <svg viewBox="0 0 40 40" width={size} height={size} aria-label="Tripadvisor">
    <circle cx="20" cy="20" r="20" fill="#000" />
    <circle cx="14" cy="21" r="6" fill="#34E0A1" /><circle cx="14" cy="21" r="2.4" fill="#000" />
    <circle cx="26" cy="21" r="6" fill="#34E0A1" /><circle cx="26" cy="21" r="2.4" fill="#000" />
    <path d="M20 9c3.6 0 6.9 1 9.4 2.6h4.6l-2.3 2.5A9 9 0 1 1 20 30a9 9 0 1 1-11.7-13.4L6 14h4.6C13.1 10 16.4 9 20 9z" fill="none" stroke="#34E0A1" strokeWidth="0" />
  </svg>
);
