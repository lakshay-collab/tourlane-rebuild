import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { newsletter } from '../mock';
import useInView from '../hooks/useInView';

export default function Newsletter() {
  const [ref, inView] = useInView();
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email.trim()) setDone(true);
  };

  return (
    <section ref={ref} className={`bg-creamdark py-16 md:py-24 fade-up ${inView ? 'in-view' : ''}`}>
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-ink text-[30px] md:text-[42px] font-medium">{newsletter.heading}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/70 max-w-[460px]">{newsletter.text}</p>

            <ul className="mt-6 space-y-2.5">
              {newsletter.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] text-ink">
                  <span className="w-6 h-6 rounded-full bg-forest flex items-center justify-center shrink-0">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {done ? (
              <div className="mt-6 flex items-center gap-2 text-forest font-medium">
                <Check size={20} /> Thank you! You are subscribed.
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-[480px]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletter.placeholder}
                  className="flex-1 bg-white rounded-full px-5 py-3.5 text-[15px] outline-none border border-transparent focus:border-forest text-ink placeholder:text-ink/50"
                />
                <button type="submit" className="bg-forest hover:bg-forest-dark text-white rounded-full px-7 py-3.5 text-[15px] font-medium transition-colors">
                  {newsletter.cta}
                </button>
              </form>
            )}
            <p className="mt-3 text-[12px] text-ink/50">{newsletter.fineprint}</p>
          </div>

          <div className="img-zoom-wrap rounded-2xl overflow-hidden h-[280px] md:h-[380px]">
            <img src={newsletter.image} alt="Newsletter" className="img-zoom w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
