import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EgyptRoute from '../components/egypt/EgyptRoute';
import EgyptPlanner from '../components/egypt/EgyptPlanner';
import EgyptProductCard from '../components/egypt/EgyptProductCard';
import { ScrollTop } from '../components/egypt/EgyptHero';
import { EgyptReviews } from '../components/egypt/EgyptSections';
import { BedIcon, PinIcon, CarIcon, TagIcon, ChevronRight, ChevronDown, ServiceIcon, TpStars, CheckBadge, ClockIcon, CheckCircleIcon, TransfersIcon, SparkleLeft, SparkleRight, GalleryIcon } from '../components/egypt/EgyptIcons';
import { detail, experts, glance, brandFeatures, recommended, steps, crumbs, trust, price } from '../egyptDetailData';
import { products } from '../egyptListingData';

const stop = (e) => e.preventDefault();
const Cta = ({ className = '', testId }) => <a href={detail.ctaHref} onClick={stop} title={detail.cta} className={`eg-btn-filled h-12 px-7 eg-title-md ${className}`} data-testid={testId}>{detail.cta}</a>;

const Trust = ({ className = '' }) => (
  <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-2 ${className}`} data-testid="eg-trust-row">
    <p className="eg-label-lg text-[#1B1C17]">{trust.label}</p>
    <TpStars rating={trust.rating} size={20} />
    <img src="/trustpilot.svg" alt="Trustpilot" className="h-5 w-20 -mt-0.5" />
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
      <button type="button" className="absolute bottom-3 right-3 z-[2] h-10 px-4 rounded-full bg-[#D0E8D6] text-[#0B1F14] inline-flex items-center justify-center" aria-label="Galerie" data-testid="eg-gallery-button"><GalleryIcon size={18} /></button>
    </div>
  );
}

function Head() {
  return (
    <div className="eg-wide" data-testid="eg-detail-head">
      <Gallery />
      <div className="md:hidden bg-[#F0EEE6] rounded-b-2xl px-[9px] py-3"><Trust /></div>
      <div className="md:bg-[#F0EEE6] md:rounded-b-2xl pt-6 md:p-6">
        <div className="grid md:grid-cols-[1fr_320px] gap-y-8 gap-x-6 items-center">
          <div className="flex flex-col gap-6 md:gap-4">
            <h1 className="eg-headline-lg text-[#1B1C17]" data-testid="eg-detail-title">{detail.title}</h1>
            <div className="flex flex-wrap gap-4 text-[#404942]">
              <span className="flex items-center gap-1"><BedIcon size={24} /><p className="eg-body-lg whitespace-nowrap">{detail.days}</p></span>
              <span className="flex items-center gap-1"><PinIcon size={24} /><p className="eg-body-lg whitespace-nowrap">{detail.stations}</p></span>
              <span className="flex items-center gap-1"><CarIcon size={24} /><p className="eg-body-lg whitespace-nowrap">{detail.transport}</p></span>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#D0E8D6] pl-2 pr-3 py-1.5 eg-label-lg text-[#006D44]" data-testid="eg-detail-tag"><TagIcon name={detail.tag} size={20} />{detail.tag}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-2 w-full"><Cta className="w-full" testId="eg-detail-cta" /><p className="eg-label-md text-[#1B1C17] text-center">{detail.sub}</p></div>
            <div className="hidden md:flex justify-center"><Trust /></div>
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
        <li key={c.label} className="flex items-center gap-1">
          {i > 0 && <ChevronRight size={18} className="text-[#717972]" />}
          {c.href
            ? (c.href.startsWith('/afrika/aegypten')
                ? <Link to="/afrika/aegypten" className="eg-body-md text-[#404942] hover:underline">{c.label}</Link>
                : <a href={c.href} onClick={stop} className="eg-body-md text-[#404942] hover:underline">{c.label}</a>)
            : <span className="eg-label-lg text-[#1B1C17]">{c.label}</span>}
        </li>
      ))}
    </ol>
  </nav>
);

function PriceCard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-[#C0C9C0] p-6 flex flex-col gap-4" data-testid="eg-detail-price">
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1 shrink-0">
          <div className="flex items-baseline gap-1"><span className="eg-title-lg text-[#1B1C17]">{price.from}</span><span className="eg-title-lg text-[#1B1C17]" data-testid="eg-detail-price-value">{detail.price}</span></div>
          <span className="eg-body-md text-[#404942]">{price.perPerson}</span>
        </div>
        <Cta className="flex-1" testId="eg-detail-price-cta" />
      </div>
      <hr className="border-[#C0C9C0]" />
      <div className="flex flex-col gap-3">
        <button type="button" onClick={() => setOpen((v) => !v)} className="flex items-center gap-1 eg-label-lg text-[#404942]" data-testid="eg-price-included-toggle">{price.included}<ChevronDown size={20} className={open ? 'rotate-180' : ''} /></button>
        {open && (
          <div className="flex flex-wrap gap-y-2 gap-x-4" data-testid="eg-price-services">
            {detail.services.map((s) => <span key={s} className="flex items-center gap-2 eg-body-md text-[#404942]"><ServiceIcon name={s} size={20} />{s}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

const ExpertCard = () => {
  const e = detail.expert;
  return (
    <div className="flex items-start gap-2" data-testid="eg-detail-expert">
      <span className="w-12 h-12 rounded-full bg-[#F0EEE6] shrink-0 overflow-hidden"><img src={e.image} alt={e.name} className="w-full h-full object-cover rounded-full" /></span>
      <div className="flex flex-col gap-3 min-w-0">
        <div className="h-12">
          <div className="flex items-center gap-1 eg-title-md text-[#1B1C17]">{e.createdBy} {e.name}<CheckBadge size={20} className="text-[#006D44]" /></div>
          <span className="eg-body-md text-[#404942]">{e.role}</span>
        </div>
        <p className="eg-body-lg text-[#404942]" data-testid="eg-expert-quote">{e.quote}</p>
      </div>
    </div>
  );
};

const statIcons = [ClockIcon, CheckCircleIcon, TransfersIcon];
function ExpertsCard() {
  return (
    <div className="flex flex-col gap-4" data-testid="eg-detail-experts">
      <div className="rounded-2xl border border-[#C0C9C0] py-6 flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="eg-headline-md text-[#1B1C17] text-center px-6">{experts.h2}</h2>
          <div className="px-5 flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <hr className="flex-1 border-[#C0C9C0]" />
              <div className="flex items-center">
                {experts.avatars.slice(0, 2).map((a, i) => <img key={a} src={a} alt="Tourlane Expert" className={`w-10 h-10 rounded-full border-2 border-white object-cover ${i ? '-ml-2.5' : ''}`} />)}
                <span className="w-10 h-10 -ml-2.5 rounded-full border-2 border-white bg-white flex items-center justify-center"><CheckBadge size={28} className="text-[#006D44]" /></span>
                <img src={experts.avatars[2]} alt="Tourlane Expert" className="w-10 h-10 -ml-2.5 rounded-full border-2 border-white object-cover" />
                <span className="relative -ml-2.5"><img src={experts.avatars[3]} alt="Tourlane Expert" className="w-10 h-10 rounded-full border-2 border-white object-cover" /><span className="absolute inset-0.5 rounded-full bg-black/60 flex items-center justify-center text-white text-[11px] font-bold">{experts.count}</span></span>
              </div>
              <hr className="flex-1 border-[#C0C9C0]" />
            </div>
            <div className="flex items-center justify-center gap-2 h-12 text-[#1B1C17]"><SparkleLeft /><p className="eg-title-md text-[#1B1C17]">Planen Sie mit echten Reiseexperten</p><SparkleRight /></div>
          </div>
        </div>
        <div className="px-6 flex flex-col gap-5">
          {experts.stats.map((st, i) => { const Icon = statIcons[i]; return (
            <div key={st.h} className="flex items-center gap-4">
              <span className="w-11 h-11 rounded-full bg-[#F0EEE6] shrink-0 flex items-center justify-center text-[#1B1C17]"><Icon size={20} /></span>
              <div className="flex flex-col gap-1"><p className="eg-title-md text-[#1B1C17]">{st.h}</p><p className="eg-body-md text-[#1B1C17]">{st.t}</p></div>
            </div>
          ); })}
        </div>
      </div>
      <Trust />
    </div>
  );
}

function Glance() {
  const [open, setOpen] = useState(true);
  return (
    <section className="eg-container flex flex-col gap-8" data-testid="eg-detail-glance">
      <h2 className="eg-display-sm text-[#1B1C17]">{glance.h2}</h2>
      <div>
        <p className="eg-body-lg text-[#1B1C17]">{glance.intro}</p>
        <button type="button" onClick={() => setOpen((v) => !v)} className="flex items-center pt-2 pb-4 eg-body-lg font-semibold text-[#006D44]" data-testid="eg-glance-toggle">{open ? glance.less : glance.more}<ChevronDown size={24} className={open ? '' : 'rotate-180'} /></button>
        {open && (
          <div className="grid gap-6" data-testid="eg-glance-days">
            <p className="eg-body-lg text-[#1B1C17]">{glance.intro2}</p>
            {glance.days.map((d) => (
              <React.Fragment key={d.title}>
                <div className="flex flex-col gap-4" data-testid="eg-glance-day"><h3 className="eg-headline-md text-[#1B1C17]">{d.title}</h3><p className="eg-body-lg text-[#1B1C17]">{d.text}</p></div>
                <h4 className="eg-title-lg text-[#1B1C17]">{glance.accommodationHeading}</h4>
                <p className="eg-body-lg text-[#1B1C17]">{d.hotel}</p>
                <h4 className="eg-title-lg text-[#1B1C17]">{glance.highlightsHeading}</h4>
                <ul className="list-disc pl-4 mb-4 eg-body-lg text-[#1B1C17]">{d.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
              </React.Fragment>
            ))}
            <p className="eg-body-lg text-[#1B1C17]">{glance.outro}</p>
          </div>
        )}
      </div>
    </section>
  );
}

const Features = () => (
  <section className="eg-container flex flex-col gap-10" data-testid="eg-detail-features">
    <h2 className="eg-headline-md text-[#1B1C17] text-center">{brandFeatures.h2}</h2>
    <div className="grid gap-8 md:grid-cols-3">
      {brandFeatures.items.map((f) => (
        <div key={f.title} className="flex md:flex-col items-start md:items-center gap-4 text-left md:text-center">
          <img src={f.icon} alt="" className="w-[72px] h-[72px] md:w-[120px] md:h-[120px] shrink-0" />
          <div className="md:max-w-[270px] flex flex-col gap-2"><h3 className="eg-title-lg text-[#1B1C17]">{f.title}</h3><p className="eg-body-lg text-[#1B1C17]">{f.text}</p></div>
        </div>
      ))}
    </div>
  </section>
);

const Recommended = () => (
  <section className="eg-container flex flex-col gap-8" data-testid="eg-detail-recommended">
    <h2 className="eg-headline-md text-[#1B1C17] text-center">{recommended.h2}</h2>
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6" data-testid="eg-recommended-grid">
      {products.filter((p) => p.slug !== detail.slug).slice(0, 6).map((p, i) => <EgyptProductCard key={`${p.slug}-${i}`} p={p} />)}
    </div>
  </section>
);

const Steps = () => (
  <section className="eg-container flex flex-col gap-8" data-testid="eg-detail-steps">
    <h2 className="eg-headline-md text-[#1B1C17] text-center">{steps.h2}</h2>
    <div className="flex flex-col sm:flex-row gap-4">
      {steps.items.map((st) => (
        <div key={st.n} className="flex-1 bg-[#F0EEE6] rounded-xl px-4 py-6 flex flex-col items-center gap-3" data-testid="eg-step">
          <span className="w-10 h-10 rounded-full bg-[#D0E8D6] eg-title-lg text-black flex items-center justify-center">{st.n}</span>
          <div className="flex flex-col gap-2 text-center"><div className="eg-title-lg text-[#1B1C17]">{st.title}</div><p className="eg-body-lg font-medium text-[#404942]">{st.text}</p></div>
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
    <div className={`fixed bottom-0 inset-x-0 z-10 bg-white border-t border-[#C0C9C0] transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`} data-testid="eg-detail-sticky-bar">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:justify-end md:items-center md:py-3 md:px-10">
        <div className="hidden md:flex items-center gap-2 px-6 py-1 text-[#404942]">
          <span className="w-10 h-10 rounded-full overflow-hidden bg-[#006D44]"><img src={detail.expert.image} alt={detail.expert.name} className="w-full h-full object-cover" /></span>
          <span className="eg-label-lg">{price.team}</span>
        </div>
        <hr className="hidden md:block w-px h-[52px] border-0 bg-[#C0C9C0]" />
        <div className="px-3 py-3 md:py-0 md:px-0 md:pl-6 flex items-center justify-between md:justify-end gap-2">
          <div className="flex md:flex-col items-center md:items-start gap-1"><span className="eg-title-md text-[#1B1C17]">{price.from} {detail.price}</span><span className="eg-body-sm text-[#717972]">{price.pp}</span></div>
          <Cta className="w-auto" testId="eg-sticky-cta" />
        </div>
      </div>
    </div>
  );
}

export default function EgyptDetail() {
  const { slug } = useParams();
  if (slug !== detail.slug) return <Navigate to="/afrika/aegypten" replace />;
  return (
    <div className="eg" data-testid="egypt-detail-page">
      <Header />
      <main className="flex flex-col gap-8 pb-24 md:pb-[100px]">
        <Head />
        <Crumbs />
        <div className="eg-wide" id="map" data-testid="eg-detail-map">
          <div className="h-[328px] md:h-[400px] rounded-xl overflow-hidden bg-[#E4E3DB]">
            <iframe title="Karte" src="https://maps.google.com/maps?ll=26.2,32.5&z=6&t=m&output=embed" className="w-full h-full border-0" loading="lazy" />
          </div>
          <div className="md:hidden mt-4"><PriceCard /></div>
        </div>
        <div className="flex flex-col gap-[72px] mt-0 md:mt-0">
          <div className="eg-wide flex flex-col md:flex-row gap-8">
            <div className="flex-1 min-w-0 flex flex-col gap-8">
              <ExpertCard />
              <EgyptRoute />
            </div>
            <aside className="hidden md:flex w-[384px] shrink-0 flex-col gap-6" data-testid="eg-detail-sidebar">
              <PriceCard />
              <div className="sticky top-6"><ExpertsCard /></div>
            </aside>
          </div>
          <EgyptPlanner className="eg-wide" titleClass="eg-headline-lg" />
          <Glance />
          <Features />
          <EgyptReviews centered className="eg-container" />
          <Recommended />
          <Steps />
        </div>
      </main>
      <StickyBar />
      <ScrollTop className="bottom-[104px] right-10" />
      <Footer />
    </div>
  );
}
