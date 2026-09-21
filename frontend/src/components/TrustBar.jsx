import React from 'react';
import TrustLine from './TrustLine';

export default function TrustBar() {
  return (
    <div className="bg-secondary-container h-11 flex items-center" data-testid="trust-bar">
      <TrustLine compact className="w-full px-4" />
    </div>
  );
}
