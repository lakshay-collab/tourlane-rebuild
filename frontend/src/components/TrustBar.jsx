import React from 'react';
import { Star } from 'lucide-react';
import { trust } from '../mock';

export default function TrustBar() {
  return (
    <div className="bg-sage">
      <div className="max-w-[1240px] mx-auto px-5 py-3 flex items-center justify-center gap-3 flex-wrap text-[14px] text-ink">
        <span className="font-semibold">{trust.label}</span>
        <span className="flex items-center gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="bg-forest w-6 h-6 flex items-center justify-center">
              <Star size={15} className="text-white fill-white" />
            </span>
          ))}
        </span>
        <span className="font-semibold">{trust.score}</span>
        <span className="text-ink/70">{trust.outOf}</span>
        <span className="font-semibold">{trust.count}</span>
        <span className="text-ink/70">{trust.reviews}</span>
        <span className="flex items-center gap-1 ml-1">
          <Star size={15} className="text-forest fill-forest" />
          <span className="font-medium">Trustpilot</span>
        </span>
      </div>
    </div>
  );
}
