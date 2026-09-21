import React from 'react';
import { expertAdvice } from '../mock';

const isPhoneOpen = () => {
  const now = new Date(Date.now() + (330 + new Date().getTimezoneOffset()) * 60000);
  const win = expertAdvice.schedule[now.getDay()];
  return !!win && now.getHours() >= win[0] && now.getHours() < win[1];
};

const Status = ({ open }) => (
  <p className="flex items-center gap-2 t-label-lg text-onsurface" data-testid="advice-status">
    <span className={`w-3 h-3 rounded-full ${open ? 'bg-[#34E0A1]' : 'bg-outline'}`} />
    {open ? expertAdvice.openLabel : expertAdvice.closedLabel}
  </p>
);

export default function ExpertAdvicePanel({ className = '' }) {
  const open = isPhoneOpen();
  return (
    <div className={`text-left ${className}`} data-testid="advice-panel">
      <div className="px-6 py-6 flex flex-col gap-3">
        <Status open />
        <p className="t-body-lg text-onsurface">{expertAdvice.existing}</p>
        <a href="#" className="t-body-lg text-primary underline underline-offset-4 self-start" data-testid="advice-portal">{expertAdvice.portal}</a>
      </div>
      <hr className="border-outline-variant" />
      <div className="px-6 py-6 flex flex-col gap-3">
        <Status open={open} />
        <p className="t-body-lg text-onsurface">{expertAdvice.planning}</p>
        <a href={expertAdvice.phoneHref} className="t-body-lg text-primary underline underline-offset-4 self-start" data-testid="advice-phone">{expertAdvice.phone}</a>
        <div className="mt-1">
          {expertAdvice.hours.map((h) => <p key={h} className="t-body-md text-onsurface-variant leading-6">{h}</p>)}
        </div>
      </div>
    </div>
  );
}
