import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { customerReviews as egyptCustomerReviews } from '../../egyptListingData';
import { BoxStars } from '../Rating';
import { HotelIcon, TicketIcon, CarIcon, UserIcon, PhoneIcon, SparkleLeft, SparkleRight, SparklesIcon } from './EgyptIcons';

const CAT_ICON = { hotel: HotelIcon, activity: TicketIcon, transport: CarIcon, advice: UserIcon, service: PhoneIcon };

const Category = ({ c }) => {
  const Icon = CAT_ICON[c.icon];
  return (
    <li className="mt-6 first:mt-0" data-testid="eg-cr-category">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 eg-title-md text-[#002131]"><Icon size={18} className="text-[#174358]" />{c.label}</span>
        <span className="eg-title-md text-[#002131]">{c.value}</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-[#E4E3DB]"><div className="h-full rounded-full bg-[#174358]" style={{ width: `${(c.value / 5) * 100}%` }} /></div>
    </li>
  );
};

const ReviewCard = ({ r, readMore, readLess }) => {
  const [open, setOpen] = useState(false);
  return (
    <article className="rounded-2xl bg-[#F6F4EB] p-4 md:pl-4 md:pr-4 md:py-6 flex gap-4" data-testid="eg-cr-card">
      <div className="hidden sm:flex flex-col items-start w-[145px] shrink-0 gap-1">
        <span className="w-12 h-12 rounded-full bg-[#FBEADB] text-[#002131] flex items-center justify-center text-[20px]" aria-hidden="true">{r.initial}</span>
        <h3 className="eg-label-lg text-[#002131] mt-1">{r.name}</h3>
        <span className="eg-label-md text-[#174358]">{r.date}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="sm:hidden flex items-center gap-2 mb-2">
            <span className="w-10 h-10 rounded-full bg-[#FBEADB] text-[#002131] flex items-center justify-center" aria-hidden="true">{r.initial}</span>
            <div><h3 className="eg-label-lg text-[#002131]">{r.name}</h3><span className="eg-label-md text-[#174358]">{r.date}</span></div>
          </div>
          <BoxStars rating={5} size={18} className="hidden sm:flex" />
          <span className="eg-label-lg text-[#002131] whitespace-nowrap">{r.source}</span>
        </div>
        <p className="mt-2 eg-title-md text-[#002131]" data-testid="eg-cr-card-title">{r.title}</p>
        <p className={`mt-2 eg-body-lg text-[#002131] ${open ? '' : 'eg-clamp-2'}`} data-testid="eg-cr-card-text">{r.text}</p>
        <button type="button" onClick={() => setOpen((v) => !v)} className="mt-0.5 eg-body-lg font-medium underline text-[#002131]" data-testid="eg-cr-card-more">{open ? readLess : readMore}</button>
      </div>
    </article>
  );
};

export default function EgyptCustomerReviews({ className = 'eg-wide mt-12 md:mt-16', data = egyptCustomerReviews }) {
  const d = data;
  return (
    <section className={className} data-testid="eg-customer-reviews">
      <h2 className="eg-display-sm text-[#002131] text-center">{d.h2}</h2>
      <div className="mt-6 flex items-center justify-center gap-4">
        <SparkleLeft className="text-[#174358]" />
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="eg-display-sm text-[#002131]" data-testid="eg-cr-score">{d.score}</span>
            <BoxStars rating={d.rating} size={28} />
            <a href="#reviews" onClick={(e) => e.preventDefault()} className="eg-body-lg text-[#002131] underline" data-testid="eg-cr-count">{d.count}</a>
          </div>
          <span className="eg-label-lg text-[#174358]">{d.source}</span>
        </div>
        <SparkleRight className="text-[#174358]" />
      </div>

      <div className="mt-8 grid gap-2 md:grid-cols-[620fr_740fr]" data-testid="eg-cr-mosaic">
        <img src={d.photos[0]} alt="" className="w-full h-[220px] md:h-[412px] object-cover rounded-xl" loading="lazy" />
        <div className="grid md:grid-rows-[202px_202px] gap-2">
          <div className="grid md:grid-cols-[467fr_257fr] gap-2 md:h-[202px]">
            <div className="rounded-xl bg-[#FBEADB] p-4 md:p-5 flex gap-3 md:h-[202px] overflow-hidden" data-testid="eg-cr-summary">
              <span className="eg-quote !text-[64px] !leading-[64px] text-[#002131] -mt-2">“</span>
              <div className="flex flex-col justify-between gap-2 min-w-0">
                <p className="eg-title-md text-[#002131]">{d.summary}</p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-[#002131] h-4 pl-0.5 pr-1.5">
                    {d.avatars.map((a, i) => <img key={a} src={a} alt="" className="w-[13px] h-[13px] rounded-full object-cover" style={{ marginLeft: i ? -4 : 0 }} />)}
                    <span className="ml-1 text-white text-[11px] leading-3 font-medium">+{d.countN}</span>
                  </span>
                  <span className="text-[11px] leading-4 text-[#6F777C] font-medium flex items-center gap-1">{d.summaryTag}<SparklesIcon size={12} className="text-[#174358]" /></span>
                </div>
              </div>
            </div>
            <img src={d.photos[1]} alt="" className="hidden md:block w-full h-[202px] object-cover rounded-xl" loading="lazy" />
          </div>
          <div className="hidden md:grid grid-cols-[257fr_467fr] gap-2 h-[202px]">
            <img src={d.photos[2]} alt="" className="w-full h-[202px] object-cover rounded-xl" loading="lazy" />
            <img src={d.photos[3]} alt="" className="w-full h-[202px] object-cover rounded-xl" loading="lazy" />
          </div>
        </div>
      </div>

      <hr className="mt-10 border-[#C4CBD0]" />

      <div className="mt-10 grid gap-8 md:grid-cols-[381fr_955fr] md:gap-6" id="reviews">
        <aside>
          <h4 className="eg-title-lg !text-[24px] !leading-8 text-[#002131]">{d.categoriesH4}</h4>
          <ul className="mt-6" data-testid="eg-cr-categories">{d.categories.map((c) => <Category key={c.label} c={c} />)}</ul>
          <div className="mt-8 rounded-2xl border border-[#C4CBD0] bg-white p-6" data-testid="eg-cr-plan-card">
            <h3 className="eg-title-lg text-[#002131]">{d.planH3}</h3>
            <div className="mt-4 flex items-center justify-between gap-3">
              <p className="eg-body-md text-[#174358]">{d.planText}</p>
              <img src={d.planExpert} alt="Your Egypt expert" className="w-12 h-12 rounded-full object-cover shrink-0" />
            </div>
            <a href="#planner" onClick={(e) => { e.preventDefault(); const el = document.getElementById('planner'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="eg-btn-filled w-full h-12 mt-6 eg-label-lg" data-testid="eg-cr-plan-cta">{d.planCta}</a>
          </div>
        </aside>
        <div>
          <div className="flex items-center gap-3">
            <button type="button" className="inline-flex items-center gap-2 h-10 px-4 rounded-full border border-[#6F777C] eg-label-lg text-[#002131]" data-testid="eg-cr-filter"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z" /></svg>{d.filterLabel}<ChevronDown size={18} /></button>
            <button type="button" aria-label="Search reviews" className="w-10 h-10 rounded-full border border-[#6F777C] flex items-center justify-center text-[#002131]" data-testid="eg-cr-search">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" /></svg>
            </button>
          </div>
          <div className="mt-6 flex flex-col gap-4" data-testid="eg-cr-list">{d.items.map((r, i) => <ReviewCard key={i} r={r} readMore={d.readMore} readLess={d.readLess} />)}</div>
          <button type="button" className="mt-6 inline-flex items-center gap-1 h-11 px-4 rounded-full eg-body-lg font-medium text-[#174358] hover:bg-[rgba(23,67,88,0.08)]" data-testid="eg-cr-more">{d.more}<ChevronRight size={20} /></button>
        </div>
      </div>
      <hr className="mt-10 border-[#C4CBD0]" />
    </section>
  );
}
