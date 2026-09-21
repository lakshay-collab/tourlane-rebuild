import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EgyptRoute from '../components/egypt/EgyptRoute';
import EgyptPlanner from '../components/egypt/EgyptPlanner';
import EgyptProductCard from '../components/egypt/EgyptProductCard';
import { ScrollTop } from '../components/egypt/EgyptHero';
import { EgyptReviews } from '../components/egypt/EgyptSections';
import { GoogleLogo, TripAdvisorLogo } from '../components/Rating';
import { CalendarIcon, PinIcon, ChevronRight, ChevronDown, ServiceIcon, CheckBadge, ClockIcon, CheckCircleIcon, TransfersIcon, SparkleLeft, SparkleRight, GalleryIcon } from '../components/egypt/EgyptIcons';
import { detail, experts, glance, brandFeatures, recommended, steps, crumbs, trust, price, planner, route, reviewsHeading } from '../egyptDetailData';
import { products, formatInr, styles } from '../egyptListingData';
import { NavIcon } from '../components/egypt/EgyptNavIcons';

const tagIcon = Object.fromEntries(styles.map((s) => [s.key, s.icon]));
import { ratings as trustBar } from '../mock';

const stop = (e) => e.preventDefault();
const inr = formatInr(detail.price);
const Cta = ({ className = '', testId }) => <a href={detail.ctaHref} onClick={stop} title={detail.cta} className={`eg-btn-filled h-12 px-7 eg-title-md ${className}`} data-testid={testId}>{detail.cta}</a>;

const Ratings = ({ className = '' }) => (
  <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 ${className}`} data-testid="eg-ratings-row">
    <span className="flex items-center gap-2 eg-label-lg text-[#002131]"><GoogleLogo size={18} />Rated {trustBar.google.score} on Google</span>
    <span className="flex items-center gap-2 eg-label-lg text-[#002131]"><TripAdvisorLogo size={20} />Rated {trustBar.tripadvisor.score} on TripAdvisor</span>
  </div>
);

function Gallery() {
  const g = detail.gallery;
  return (
    <div className="relative" data-testid="eg-detail-gallery">
      <div className="grid grid-cols-2 gap-1 h-[186px] md:h-[328px] rounded-t-2xl overflow-hidden">
        <div className="relative cursor-pointer"><img src={g[0]} alt={`${detail.alt} - main image`} className="absolute inset-0 w-full h-full object-cover" loading="eager" /></div>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-1">
          {g.slice(1, 5).map((src, i) => <div key={i} className={`relative cursor-pointer ${i > 1 ? 'hidden md:block' : ''}`}><img src={src} alt={`${detail.alt} - Image ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" /></div>)}
        </div>
      </div>
      <button type="button" className="absolute bottom-3 right-3 z-[2] h-10 px-4 rounded-full bg-[#FADDD1] text-[#002131] inline-flex items-center justify-center" aria-label="Gallery" data-testid="eg-gallery-button"><GalleryIcon size={18} /></button>
    </div>
  );
}

function Head() {
  return (
    <div className="eg-wide" data-testid="eg-detail-head">
      <Gallery />
      <div className="bg-[#F0EEE6] rounded-b-2xl p-4 md:p-6">
        <div className="flex flex-col gap-4">
            <h1 className="eg-card-title !text-[22px] !leading-[28px] sm:!text-[26px] sm:!leading-8 md:!text-[30px] md:!leading-9 text-[#002131]" data-testid="eg-detail-title">{detail.title}</h1>
            <div className="flex flex-wrap items-center gap-2" data-testid="eg-detail-tags">
              <span className="inline-flex items-center gap-1.5 rounded-full eg-grad-harbor text-white pl-2.5 pr-3 py-1.5 eg-label-lg" data-testid="eg-detail-days"><CalendarIcon size={18} />{detail.stats.days} days</span>
              <span className="inline-flex items-center gap-1.5 rounded-full eg-grad-harbor text-white pl-2.5 pr-3 py-1.5 eg-label-lg" data-testid="eg-detail-cities"><PinIcon size={18} />{detail.stats.cities} cities</span>
              {detail.tags.map((tag) => <span key={tag} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#C4CBD0] pl-2.5 pr-3 py-1.5 eg-label-lg text-[#174358]" data-testid="eg-detail-tag"><NavIcon name={tagIcon[tag]} size={18} className="text-[#174358]" />{tag}</span>)}
            </div>
        </div>
      </div>
    </div>
  );
}

const Crumbs = () => (
  <nav className="eg-wide" aria-label="Breadcrumb" data-testid="eg-breadcrumb">
    <ol className="md:px-5 flex flex-wrap items-center gap-1">
      {crumbs.map((c, i) => (
        <li key={c.label} className="flex items-center gap-1 min-w-0">
          {i > 0 && <ChevronRight size={18} className="text-[#6F777C] shrink-0" />}
          {c.href
            ? (c.href.startsWith('/afrika/aegypten')
                ? <Link to="/afrika/aegypten" className="eg-body-md text-[#174358] hover:underline">{c.label}</Link>
                : <a href={c.href} onClick={stop} className="eg-body-md text-[#174358] hover:underline">{c.label}</a>)
            : <span className="eg-label-lg text-[#002131] truncate max-w-[220px] sm:max-w-none">{c.label}</span>}
        </li>
      ))}
    </ol>
  </nav>
);

const PriceCard = () => (
  <div className="bg-white rounded-2xl border border-[#C4CBD0] p-5 md:p-6 flex flex-col gap-4" data-testid="eg-detail-price">
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-col shrink-0">
        <span className="eg-body-md text-[#6F777C]">{price.from}</span>
        <span className="eg-price text-[#174358]" data-testid="eg-detail-price-value">{inr}</span>
        <span className="eg-body-md text-[#6F777C]">{price.perPerson}</span>
      </div>
      <Cta className="flex-1" testId="eg-detail-price-cta" />
    </div>
    <hr className="border-[#E4E3DB]" />
    <div className="flex flex-col gap-3">
      <p className="eg-title-md text-[#002131]" data-testid="eg-price-included-title">{price.included}</p>
      <ul className="grid grid-cols-2 gap-2" data-testid="eg-price-services">
        {detail.services.map(([label, icon]) => <li key={label} className="flex items-center gap-2.5 rounded-lg bg-[#FBEADB] px-3 min-h-[44px] py-1.5 eg-label-lg text-[#002131]"><ServiceIcon name={icon} size={20} className="text-[#174358] shrink-0" /><span className="leading-tight">{label}</span></li>)}
      </ul>
    </div>
    <hr className="border-[#E4E3DB]" />
    <Ratings />
  </div>
);

const ExpertCard = () => {
  const e = detail.expert;
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-start gap-3" data-testid="eg-detail-expert">
      <img src={e.image} alt={e.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
      <div className="flex flex-col gap-2 min-w-0">
        <p className="eg-title-md text-[#002131]" data-testid="eg-expert-title">{e.createdBy} {e.name}, {e.role} <CheckBadge size={18} className="inline text-[#174358] -mt-0.5" /></p>
        <p className="eg-quote !text-[18px] !leading-[26px] md:!text-[22px] md:!leading-[30px] text-[#002131]" data-testid="eg-expert-quote">“{e.quote}{open ? ` ${e.quoteMore}` : ''}”</p>
        <button type="button" onClick={() => setOpen((v) => !v)} className="self-start inline-flex items-center gap-1 eg-label-lg text-[#174358] underline" data-testid="eg-expert-quote-toggle">{open ? e.less : e.more}<ChevronDown size={16} className={open ? 'rotate-180' : ''} /></button>
      </div>
    </div>
  );
};

const statIcons = [ClockIcon, CheckCircleIcon, TransfersIcon];
const ExpertsCard = ({ testId = 'eg-detail-experts' }) => (
  <div className="flex flex-col gap-4" data-testid={testId}>
    <div className="rounded-2xl border border-[#C4CBD0] bg-[#FBF9F1] py-6 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="eg-headline-md text-[#002131] text-center px-6">{experts.h2}</h2>
        <div className="px-5 flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <hr className="flex-1 border-[#C4CBD0]" />
            <div className="flex items-center">
              {experts.avatars.slice(0, 2).map((a, i) => <img key={a} src={a} alt="Hi Tours expert" className={`w-10 h-10 rounded-full border-2 border-white object-cover ${i ? '-ml-2.5' : ''}`} />)}
              <span className="w-10 h-10 -ml-2.5 rounded-full border-2 border-white bg-white flex items-center justify-center"><CheckBadge size={28} className="text-[#174358]" /></span>
              <img src={experts.avatars[2]} alt="Hi Tours expert" className="w-10 h-10 -ml-2.5 rounded-full border-2 border-white object-cover" />
              <span className="relative -ml-2.5"><img src={experts.avatars[3]} alt="Hi Tours expert" className="w-10 h-10 rounded-full border-2 border-white object-cover" /><span className="absolute inset-0.5 rounded-full bg-[#002131]/70 flex items-center justify-center text-white text-[11px] font-bold">{experts.count}</span></span>
            </div>
            <hr className="flex-1 border-[#C4CBD0]" />
          </div>
          <div className="flex items-center justify-center gap-2 h-12 text-[#002131]"><SparkleLeft /><p className="eg-title-md">Plan with real travel experts</p><SparkleRight /></div>
        </div>
      </div>
      <div className="px-6 flex flex-col gap-5">
        {experts.stats.map((st, i) => { const Icon = statIcons[i]; return (
          <div key={st.h} className="flex items-center gap-4">
            <span className="w-11 h-11 rounded-full bg-[#FBEADB] shrink-0 flex items-center justify-center text-[#174358]"><Icon size={20} /></span>
            <div className="flex flex-col gap-1"><p className="eg-title-md text-[#002131]">{st.h}</p><p className="eg-body-md text-[#174358]">{st.t}</p></div>
          </div>
        ); })}
      </div>
    </div>
  </div>
);

function Glance({ open, setOpen }) {
  const [more, setMore] = useState(false);
  return (
    <section className="eg-container flex flex-col gap-6 scroll-mt-4" id="summary" data-testid="eg-detail-glance">
      <h2 className="eg-display-sm text-[#002131]">{glance.h2}</h2>
      <p className="eg-body-lg text-[#002131]">
        {glance.short}{more && <> {glance.intro} {glance.intro2}</>}
        {' '}<button type="button" onClick={() => setMore((v) => !v)} className="eg-body-lg font-semibold text-[#174358] hover:underline" data-testid="eg-glance-readmore">{more ? glance.readLess : glance.readMore}</button>
      </p>
      {open ? (
        <div data-testid="eg-glance-days">
          <div className="md:hidden flex flex-col divide-y divide-[#C4CBD0] border-y border-[#C4CBD0]">
            {glance.days.map((d, i) => (
              <div key={d.title} className="py-5 flex flex-col gap-4" data-testid="eg-glance-day">
                <div className="flex gap-4">
                  <img src={route.stops[i].images[0]} alt={route.stops[i].name} className="w-20 h-20 rounded-xl object-cover shrink-0" loading="lazy" data-testid="eg-glance-photo" />
                  <div className="min-w-0"><h3 className="eg-title-md text-[#002131]">{d.title}</h3><p className="mt-1 eg-body-md text-[#002131]">{d.text}</p></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div><p className="eg-label-md uppercase tracking-wide text-[#6F777C]">{glance.accommodationHeading}</p><p className="mt-1 eg-body-sm text-[#174358]">{d.hotel}</p></div>
                  <div><p className="eg-label-md uppercase tracking-wide text-[#6F777C]">{glance.highlightsHeading}</p><ul className="mt-1 eg-body-sm text-[#174358] list-disc pl-4">{d.highlights.map((h) => <li key={h}>{h}</li>)}</ul></div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden md:table w-full border-collapse" data-testid="eg-glance-table">
            <thead>
              <tr className="text-left eg-label-md uppercase tracking-wide text-[#6F777C] border-b border-[#C4CBD0]">
                <th className="py-3 pr-4 w-[88px] font-semibold">{glance.dayHeading}</th>
                <th className="py-3 pr-6 font-semibold">{glance.routeHeading}</th>
                <th className="py-3 pr-6 w-[220px] font-semibold">{glance.accommodationHeading}</th>
                <th className="py-3 w-[260px] font-semibold">{glance.highlightsHeading}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4E3DB]">
              {glance.days.map((d, i) => {
                const [day, rest] = d.title.split(': ');
                return (
                  <tr key={d.title} className="align-top" data-testid="eg-glance-day">
                    <td className="py-5 pr-4"><span className="inline-flex items-center justify-center min-w-[64px] h-8 px-2 rounded-full bg-[#FADDD1] eg-label-lg text-[#002131] whitespace-nowrap">{day.replace('Day ', '')}</span></td>
                    <td className="py-5 pr-6">
                      <div className="flex gap-4">
                        <img src={route.stops[i].images[0]} alt={route.stops[i].name} className="w-20 h-20 rounded-xl object-cover shrink-0" loading="lazy" data-testid="eg-glance-photo" />
                        <div className="min-w-0"><h3 className="eg-title-md text-[#002131]">{rest || d.title}</h3><p className="mt-1 eg-body-md text-[#002131]">{d.text}</p></div>
                      </div>
                    </td>
                    <td className="py-5 pr-6 eg-body-md text-[#174358]">{d.hotel}</td>
                    <td className="py-5"><ul className="eg-body-md text-[#174358] list-disc pl-4">{d.highlights.map((h) => <li key={h}>{h}</li>)}</ul></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button type="button" onClick={() => setOpen(false)} className="inline-flex items-center gap-1 pt-4 eg-label-lg text-[#174358] underline" data-testid="eg-glance-hide">{glance.hide}<ChevronDown size={16} className="rotate-180" /></button>
        </div>
      ) : (
        <button type="button" onClick={() => setOpen(true)} className="self-start eg-btn-outlined eg-label-lg" data-testid="eg-glance-toggle"><ChevronDown size={18} />{glance.h2}</button>
      )}
    </section>
  );
}

const Features = () => (
  <section className="eg-container flex flex-col gap-8" data-testid="eg-detail-features">
    <h2 className="eg-display-sm text-[#002131] text-center">{brandFeatures.h2}</h2>
    <div className="grid gap-8 md:grid-cols-3">
      {brandFeatures.items.map((f) => (
        <div key={f.title} className="flex md:flex-col items-start md:items-center gap-4 text-left md:text-center">
          <img src={f.icon} alt="" className="w-[72px] h-[72px] md:w-[120px] md:h-[120px] shrink-0" />
          <div className="md:max-w-[270px] flex flex-col gap-2"><h3 className="eg-title-lg text-[#002131]">{f.title}</h3><p className="eg-body-lg text-[#174358]">{f.text}</p></div>
        </div>
      ))}
    </div>
  </section>
);

const Recommended = () => (
  <section className="eg-container flex flex-col gap-8" data-testid="eg-detail-recommended">
    <h2 className="eg-display-sm text-[#002131]">{recommended.h2}</h2>
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6" data-testid="eg-recommended-grid">
      {products.filter((p) => p.slug !== detail.slug).slice(0, 6).map((p, i) => <EgyptProductCard key={`${p.slug}-${i}`} p={p} />)}
    </div>
  </section>
);

const Steps = () => (
  <section className="eg-container flex flex-col gap-8" data-testid="eg-detail-steps">
    <h2 className="eg-display-sm text-[#002131] text-center">{steps.h2}</h2>
    <div className="flex flex-col sm:flex-row gap-4">
      {steps.items.map((st) => (
        <div key={st.n} className="flex-1 bg-[#F0EEE6] rounded-xl px-4 py-6 flex flex-col items-center gap-3" data-testid="eg-step">
          <span className="w-10 h-10 rounded-full bg-[#FADDD1] eg-title-lg text-[#002131] flex items-center justify-center">{st.n}</span>
          <div className="flex flex-col gap-2 text-center"><div className="eg-title-lg text-[#002131]">{st.title}</div><p className="eg-body-lg text-[#174358]">{st.text}</p></div>
        </div>
      ))}
    </div>
  </section>
);

function StickyBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`fixed bottom-0 inset-x-0 z-30 bg-[#FBF9F1]/95 backdrop-blur border-t border-[#E4E3DB] transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`} data-testid="eg-detail-sticky-bar">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:justify-end md:items-center md:py-3 md:px-10">
        <div className="px-4 py-3 md:py-0 md:px-0 md:pl-6 flex items-center justify-between md:justify-end gap-3">
          <div className="flex flex-col"><span className="eg-title-md text-[#002131]">{price.from} {inr}</span><span className="eg-body-sm text-[#6F777C]">{price.perPerson}</span></div>
          <Cta className="w-auto" testId="eg-sticky-cta" />
        </div>
      </div>
    </div>
  );
}

export default function EgyptDetail() {
  const { slug } = useParams();
  const [summaryOpen, setSummaryOpen] = useState(false);
  const showSummary = () => {
    setSummaryOpen(true);
    requestAnimationFrame(() => { const el = document.getElementById('summary'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 16, behavior: 'smooth' }); });
  };
  if (slug !== detail.slug) return <Navigate to="/afrika/aegypten" replace />;
  return (
    <div className="eg" data-testid="egypt-detail-page">
      <Header />
      <main className="flex flex-col gap-8 pb-28 md:pb-[100px]">
        <Head />
        <Crumbs />
        <div className="eg-wide md:hidden" data-testid="eg-detail-mobile-price"><PriceCard /></div>
        <div className="flex flex-col gap-14 md:gap-[72px]">
          <div className="eg-wide flex flex-col md:flex-row gap-8">
            <div className="flex-1 min-w-0 flex flex-col gap-8">
              <ExpertCard />
              <EgyptRoute onSummary={showSummary} />
              <div className="md:max-w-[520px]"><ExpertsCard /></div>
            </div>
            <aside className="hidden md:flex w-[384px] shrink-0 flex-col gap-6" data-testid="eg-detail-sidebar">
              <div className="sticky top-6"><PriceCard /></div>
            </aside>
          </div>
          <Glance open={summaryOpen} setOpen={setSummaryOpen} />
          <EgyptPlanner className="eg-wide" titleClass="eg-headline-lg" data={planner} />
          <Features />
          <EgyptReviews centered className="eg-container" h2={reviewsHeading} count={trust.count} />
          <Recommended />
          <Steps />
        </div>
      </main>
      <StickyBar />
      <ScrollTop className="bottom-24 right-4 md:bottom-[104px] md:right-10" />
      <Footer />
    </div>
  );
}
