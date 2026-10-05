import React from 'react';
import { expertAdvice } from '../mock';

export default function ExpertAdvicePanel({ className = '' }) {
  return (
    <div className={`text-left ${className}`} data-testid="advice-panel">
      <div className="px-6 py-6 flex flex-col gap-3">
        <p className="t-body-lg text-onsurface">{expertAdvice.planning}</p>
        <a href={expertAdvice.whatsappHref} target="_blank" rel="noopener noreferrer" className="t-body-lg text-primary underline underline-offset-4 self-start" data-testid="advice-phone">{expertAdvice.phone}</a>
        <div className="mt-1">
          {expertAdvice.hours.map((h) => <p key={h} className="t-body-md text-onsurface-variant leading-6">{h}</p>)}
        </div>
      </div>
    </div>
  );
}
