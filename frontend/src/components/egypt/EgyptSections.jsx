import React, { useState } from 'react';
import { reviews, plan, faq, trust } from '../../egyptListingData';
import { BoxStars, BRAND_BLUE } from '../Rating';
import { ChevronRight, ChevronDown } from './EgyptIcons';

const Rich = ({ parts }) => (Array.isArray(parts)
  ? parts.map((x, i) => (Array.isArray(x) ? <a key={i} href={x[1]} onClick={(e) => e.preventDefault()} className="eg-link">{x[0]}</a> : x))
  : parts);

export const ReviewSummary = ({ className = '' }) => (
  <div className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-2 eg-label-lg text-[#002131] ${className}`} data-testid="eg-review-summary">
    <span>{trust.label}</span>
    <BoxStars rating={trust.rating} size={20} color={BRAND_BLUE} />
    <span>{trust.score} {trust.outOf}</span>
  </div>
);

export function EgyptReviews({ centered = false, className = 'eg-container mt-12 md:mt-16' }) {
  return (
    <section className={className} id="reviews" data-testid="eg-reviews">
      {!centered && <p className="eg-eyebrow mb-3">Traveller stories</p>}
      <h2 className={centered ? 'eg-headline-md text-[#002131] text-center' : 'eg-display-sm text-[#002131]'}>{reviews.h2}</h2>
      <ReviewSummary className="mt-8" />
      <div className="mt-8 flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0" data-testid="eg-review-track">
        {reviews.items.map((r) => (
          <article key={r.name} className="shrink-0 snap-start w-[300px] md:w-auto" data-testid="eg-review-card">
            <div className="relative h-[200px] md:h-[225px] rounded-xl overflow-hidden">
              <img src={r.image} alt={r.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-[linear-gradient(rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.65)_100%)]" />
              <p className="absolute left-0 bottom-3 px-4 eg-title-md text-white">{r.title}</p>
            </div>
            <div className="pt-4 px-4">
              <BoxStars rating={r.stars} size={18} color={BRAND_BLUE} />
              <h3 className="mt-3 eg-title-md text-[#002131]">{r.name}</h3>
              <p className="mt-3 eg-body-md text-[#002131] line-clamp-5">{r.text}</p>
              <div className="mt-4 eg-body-md text-[#174358]">{r.date}</div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-center gap-2">
        <a href={reviews.ctaHref} onClick={(e) => e.preventDefault()} className="eg-btn-filled h-10 px-14 eg-label-lg" data-testid="eg-reviews-cta">{reviews.cta}</a>
        {!centered && <p className="eg-body-sm text-[#002131] text-center">{reviews.sub}</p>}
      </div>
    </section>
  );
}

export function EgyptPlan() {
  const [open, setOpen] = useState(false);
  return (
    <section className="eg-container mt-12 md:mt-16" data-testid="eg-plan">
      <h2 className="eg-display-sm text-[#002131]">{plan.h2}</h2>
      <p className="mt-8 eg-body-lg text-[#002131]">{plan.intro}</p>
      <div className="pt-2 pb-4">
        <button type="button" onClick={() => setOpen((v) => !v)} className="flex items-center gap-1 eg-body-lg font-semibold text-[#174358]" data-testid="eg-plan-toggle">
          {open ? plan.less : plan.more}<ChevronRight size={24} className={open ? 'rotate-90' : ''} />
        </button>
      </div>
      {open && plan.sections.map((s) => (
        <div key={s.h4} className="mt-4" data-testid="eg-plan-section">
          <h4 className="eg-title-lg text-[#002131]">{s.h4}</h4>
          <p className="mt-6 eg-body-lg text-[#002131]">{s.text}</p>
          <p className="mt-6 eg-body-lg text-[#002131]">
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
    <section className="mt-12 md:mt-16 eg-band-sky py-12 md:py-16" id="faq" data-testid="eg-faq">
      <div className="eg-container">
      <p className="eg-eyebrow mb-3">Good to know</p>
      <h2 className="eg-display-sm text-[#002131]">{faq.h2}</h2>
      <div className="mt-8 pb-4 border-t border-[#C4CBD0]">
        {faq.items.map((it, i) => (
          <div key={it.q} className="border-b border-[#C4CBD0]" data-testid="eg-faq-item">
            <button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="w-full flex items-center justify-between gap-2 py-4 text-left eg-title-md text-[#002131]" data-testid="eg-faq-question">
              {it.q}<ChevronDown size={24} className={`text-black shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
            </button>
            {open === i && (
              <div className="pb-4 flex flex-col gap-6 eg-body-lg text-[#002131]" data-testid="eg-faq-answer">
                {it.a.map((p, k) => <p key={k}><Rich parts={p} /></p>)}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
