import React from 'react';
import { steps } from '../mock';

export default function Steps() {
  return (
    <section className="pt-16 md:pt-20" data-testid="steps-section">
      <div className="tl-container flex flex-col gap-8">
        <h2 className="t-section text-center text-onsurface">{steps.heading}</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {steps.items.map((s) => (
            <div key={s.n} className="flex-1 bg-surface-container rounded-xl px-6 py-6 flex flex-col items-center text-center" data-testid="step-card">
              <span className="w-10 h-10 rounded-full bg-dawn-haze text-onsurface t-title-lg flex items-center justify-center">{s.n}</span>
              <h3 className="t-headline-sm text-onsurface mt-6">{s.title}</h3>
              <p className="t-body-lg text-onsurface-variant mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
