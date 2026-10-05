import React from 'react';
import { Phone } from 'lucide-react';
import { expertAdvice } from '../mock';

export default function ExpertAdvicePanel({ className = '' }) {
  return (
    <div className={`text-left ${className}`} data-testid="advice-panel">
      <div className="px-6 py-6 flex flex-col">
        <div className="flex flex-col gap-3 pb-5" data-testid="advice-whatsapp-section">
          <p className="t-body-lg text-onsurface">{expertAdvice.planning}</p>
          <a href={expertAdvice.whatsappHref} target="_blank" rel="noopener noreferrer" className="t-body-lg text-primary underline underline-offset-4 self-start inline-flex items-center gap-2" data-testid="advice-phone">
            <img src="/whatsapp.png" alt="WhatsApp" className="w-6 h-6 shrink-0" />
            {expertAdvice.phone}
          </a>
          <div className="mt-1">
            {expertAdvice.hours.map((h) => <p key={h} className="t-body-md text-onsurface-variant leading-6">{h}</p>)}
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-5 border-t border-outline" data-testid="advice-call-section">
          <p className="t-body-lg text-onsurface">Or call us directly</p>
          <a href={expertAdvice.telHref} className="t-body-lg text-primary underline underline-offset-4 self-start inline-flex items-center gap-2" data-testid="advice-tel">
            <Phone size={18} strokeWidth={2} className="text-primary shrink-0" />
            {expertAdvice.tel}
          </a>
          <div className="mt-1">
            {expertAdvice.callHours.map((h) => <p key={h} className="t-body-md text-onsurface-variant leading-6">{h}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}
