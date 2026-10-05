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
            <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" aria-hidden="true">
              <path fill="#25D366" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2z"/>
              <path fill="#fff" d="M9.53 7.33c-.19-.43-.39-.44-.57-.44l-.49-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.12.17 1.75 2.8 4.33 3.82 2.14.85 2.58.68 3.05.64.46-.04 1.5-.61 1.71-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.49-.3-.25-.12-1.5-.74-1.74-.83-.23-.08-.4-.12-.57.13-.17.25-.65.83-.8 1-.14.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.54-1.37-.76-1.87z"/>
            </svg>
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
