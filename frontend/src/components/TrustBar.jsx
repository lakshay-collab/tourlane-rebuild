import React from 'react';
import { ratings } from '../mock';
import { GoogleLogo, TripAdvisorLogo } from './Rating';

export default function TrustBar() {
  return (
    <div className="bg-secondary-container min-h-11 py-2 flex items-center justify-center px-4" data-testid="trust-bar">
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
    </div>
  );
}
