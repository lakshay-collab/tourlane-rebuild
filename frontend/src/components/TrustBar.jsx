import React from 'react';
import { ratings } from '../mock';
import { GoldStars, TripAdvisorBubbles, GoogleLogo, TripAdvisorLogo } from './Rating';

const Cluster = ({ logo, score, stars, count, label, testId }) => (
  <div className="flex items-center gap-2 whitespace-nowrap" data-testid={testId}>
    {logo}
    <span className="t-label-lg font-semibold text-onsurface">{score}</span>
    {stars}
    <span className="hidden md:inline t-body-sm text-onsurface-variant">{count} {label}</span>
  </div>
);

export default function TrustBar() {
  return (
    <div className="bg-secondary-container h-11 flex items-center justify-center px-4" data-testid="trust-bar">
      <div className="flex items-center gap-3 sm:gap-5">
        <Cluster
          testId="rating-google"
          logo={<GoogleLogo size={18} />}
          score={ratings.google.score}
          stars={<GoldStars rating={ratings.google.score} size={14} />}
          count={ratings.google.count}
          label={ratings.google.label}
        />
        <span className="h-5 w-px bg-outline-variant" />
        <Cluster
          testId="rating-tripadvisor"
          logo={<TripAdvisorLogo size={18} />}
          score={ratings.tripadvisor.score}
          stars={<TripAdvisorBubbles rating={ratings.tripadvisor.score} size={14} />}
          count={ratings.tripadvisor.count}
          label={ratings.tripadvisor.label}
        />
      </div>
    </div>
  );
}
