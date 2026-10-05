import React from 'react';
import { MessageCircle } from 'lucide-react';
import { expertAdvice } from '../mock';

export default function ExpertAdvicePanel({ className = '' }) {
  return (
    <div className={`text-left ${className}`} data-testid="advice-panel">
      <div className="px-6 py-6 flex flex-col gap-3">
        <p className="t-body-lg text-onsurface">{expertAdvice.planning}</p>
        <a href={expertAdvice.telHref} className="t-body-lg text-primary underline underline-offset-4 self-start" data-testid="advice-tel">{expertAdvice.tel}</a>
        <a href={expertAdvice.whatsappHref} target="_blank" rel="noopener noreferrer" className="t-body-lg text-primary underline underline-offset-4 self-start inline-flex items-center gap-2" data-testid="advice-phone">
          <MessageCircle size={18} strokeWidth={2} className="text-[#25D366] shrink-0" />
          {expertAdvice.phone}
        </a>
        <div className="mt-1">
          {expertAdvice.hours.map((h) => <p key={h} className="t-body-md text-onsurface-variant leading-6">{h}</p>)}
        </div>
      </div>
    </div>
  );
}
