import React, { useState } from 'react';
import { reviews, plan, faq } from '../../egyptListingData';
import { TrustRow } from './EgyptHero';
import { TpStars, ChevronRight, ChevronDown } from './EgyptIcons';

const Rich = ({ parts }) => (Array.isArray(parts)
  ? parts.map((x, i) => (Array.isArray(x) ? <a key={i} href={x[1]} onClick={(e) => e.preventDefault()} className="eg-link">{x[0]}</a> : x))
  : parts);

export function EgyptReviews({ centered = false, className = 'eg-container mt-16' }) {
  return (
    <section className={className} data-testid="eg-reviews">
      <h2 className={centered ? 'eg-headline-md text-[#1B1C17] text-center' : 'eg-display-sm text-[#1B1C17]'}>{reviews.h2}</h2>
      <a href={reviews.trustpilotHref} target="_blank" rel="noreferrer" className="block mt-8"><TrustRow /></a>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {reviews.items.map((r) => (
          <article key={r.name} data-testid="eg-review-card">
            <div className="relative h-[225px] rounded-xl overflow-hidden">
              <img src={r.image} alt={r.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-[linear-gradient(rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.65)_100%)]" />
              <p className="absolute left-0 bottom-3 px-4 eg-title-md text-white">{r.title}</p>
            </div>
            <div className="pt-4 px-4">
              <div className="flex items-center gap-3">
                {r.avatar ? <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" /> : <span className="w-10 h-10 rounded-full bg-[#D0E8D6] text-[#1B1C17] text-[20px] leading-6 flex items-center justify-center">{r.initial}</span>}
                <div><h3 className="eg-title-md text-[#1B1C17]">{r.name}</h3><div className="mt-1"><TpStars rating={5} size={18} gap={2} /></div></div>
              </div>
              <p className="mt-4 eg-label-lg text-[#1B1C17] line-clamp-5">{r.text}</p>
              <div className="mt-4 eg-body-md text-[#404942]">{r.date}</div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-center gap-2">
        <a href={reviews.ctaHref} onClick={(e) => e.preventDefault()} className="eg-btn-filled h-10 px-14 eg-label-lg" data-testid="eg-reviews-cta">{reviews.cta}</a>
        {!centered && <p className="eg-body-sm text-[#1B1C17] text-center">{reviews.sub}</p>}
      </div>
    </section>
  );
}

export function EgyptPlan() {
  const [open, setOpen] = useState(false);
  return (
    <section className="eg-container mt-16" data-testid="eg-plan">
      <h2 className="eg-display-sm text-[#1B1C17]">{plan.h2}</h2>
      <p className="mt-8 eg-body-lg text-[#1B1C17]">{plan.intro}</p>
      <div className="pt-2 pb-4">
        <button type="button" onClick={() => setOpen((v) => !v)} className="flex items-center gap-1 eg-body-lg font-semibold text-[#006D44]" data-testid="eg-plan-toggle">
          {open ? plan.less : plan.more}<ChevronRight size={24} className={open ? 'rotate-90' : ''} />
        </button>
      </div>
      {open && plan.sections.map((s) => (
        <div key={s.h4} className="mt-4" data-testid="eg-plan-section">
          <h4 className="eg-title-lg text-[#1B1C17]">{s.h4}</h4>
          <p className="mt-6 eg-body-lg text-[#1B1C17]">{s.text}</p>
          <p className="mt-6 eg-body-lg text-[#1B1C17]">
            ➔ {s.links.map((l, i) => <React.Fragment key={l[0]}>{i > 0 && ' | '}<a href={l[1]} onClick={(e) => e.preventDefault()} className="eg-link">{l[0]}</a></React.Fragment>)}
          </p>
        </div>
      ))}
    </section>
  );
}

export function EgyptFaq() {
  const [open, setOpen] = useState(null);
  return (
    <section className="eg-container mt-16" data-testid="eg-faq">
      <h2 className="eg-display-sm text-[#1B1C17]">{faq.h2}</h2>
      <div className="mt-8 pb-4 border-t border-[#C0C9C0]">
        {faq.items.map((it, i) => (
          <div key={it.q} className="border-b border-[#C0C9C0]" data-testid="eg-faq-item">
            <button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="w-full flex items-center justify-between gap-2 py-4 text-left eg-title-md text-[#1B1C17]" data-testid="eg-faq-question">
              {it.q}<ChevronDown size={24} className={`text-black transition-transform ${open === i ? 'rotate-180' : ''}`} />
            </button>
            {open === i && (
              <div className="pb-4 flex flex-col gap-6 eg-body-lg text-[#1B1C17]" data-testid="eg-faq-answer">
                {it.a.map((p, k) => <p key={k}><Rich parts={p} /></p>)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
