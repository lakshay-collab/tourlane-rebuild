import React, { useState } from 'react';
import { Mail, Lightbulb, Percent, Headset, Check } from 'lucide-react';
import { newsletter } from '../mock';

const icons = { idea: Lightbulb, percent: Percent, headset: Headset };

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email.trim()) setDone(true);
  };

  return (
    <section className="pt-16 md:pt-24" data-testid="newsletter-section">
      <div className="relative w-full bg-surface-container md:min-h-[352px] xl:min-h-[376px]">
        <div className="relative z-[1] w-full max-w-[1440px] mx-auto flex flex-col items-start gap-4 px-4 pr-6 py-8 sm:px-8 md:px-6 md:py-[38px] lg:px-10 xl:py-[50px]">
          <h2 className="t-section text-left text-onsurface lg:max-w-[845px] xl:max-w-[975px] pr-6">{newsletter.heading}</h2>
          <div className="flex flex-col gap-8 w-full lg:max-w-[845px] xl:max-w-[975px]">
            <p className="t-body-md text-onsurface pr-6">
              {newsletter.text}{' '}
              <a href="/privacy" onClick={(e) => e.preventDefault()} className="t-label-lg text-outline underline" data-testid="newsletter-privacy-link">{newsletter.privacy}</a>
            </p>

            {done ? (
              <div className="flex items-center gap-3 t-body-lg text-primary" data-testid="newsletter-success">
                <Check size={22} /> {newsletter.success}
              </div>
            ) : (
              <form onSubmit={submit} className="flex items-center w-full sm:w-[500px] h-14 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.06)] pl-6 pr-2" data-testid="newsletter-form">
                <Mail size={22} strokeWidth={1.75} className="text-accent shrink-0" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletter.placeholder}
                  className="flex-1 min-w-0 bg-transparent outline-none px-4 t-body-lg text-onsurface placeholder:text-onsurface-variant"
                  data-testid="newsletter-email-input"
                />
                <button type="submit" className="btn-sunset" data-testid="newsletter-submit">{newsletter.cta}</button>
              </form>
            )}

            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8">
              {newsletter.bullets.map((b) => {
                const Icon = icons[b.icon];
                return (
                  <li key={b.text} className="flex items-center gap-3 t-body-lg text-onsurface">
                    <Icon size={24} strokeWidth={1.5} className="text-accent" />{b.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <img
          src={newsletter.image}
          alt=""
          className="hidden lg:block absolute right-0 bottom-0 h-[460px] w-auto pointer-events-none select-none"
          loading="lazy"
          data-testid="newsletter-image"
        />
      </div>
    </section>
  );
}
