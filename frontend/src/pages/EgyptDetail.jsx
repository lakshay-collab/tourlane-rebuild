import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EgyptRoute, { RouteLine, Lightbox } from '../components/egypt/EgyptRoute';
import EgyptPlanner from '../components/egypt/EgyptPlanner';
import EgyptProductCard from '../components/egypt/EgyptProductCard';
import { ScrollTop } from '../components/egypt/EgyptHero';
import { EgyptReviews } from '../components/egypt/EgyptSections';
import { GoogleLogo, TripAdvisorLogo } from '../components/Rating';
import { CalendarIcon, PinIcon, ChevronRight, ChevronDown, ServiceIcon, CheckBadge, UserIcon, SparklesIcon, WalletIcon, SparkleLeft, SparkleRight, GalleryIcon } from '../components/egypt/EgyptIcons';
import { detail as detail0, route as route0, glance as glance0, crumbs as crumbs0, experts, brandFeatures, recommended, steps, trust, price, planner, reviewsHeading } from '../egyptDetailData';
import { detail as detail1, route as route1, glance as glance1, crumbs as crumbs1 } from '../moroccoEgyptData';
import { detail as detail2, route as route2, glance as glance2, crumbs as crumbs2 } from '../srilankaData';
import { detail as detail3, route as route3, glance as glance3, crumbs as crumbs3 } from '../thailandData';
import { detail as detailGF, route as routeGF, glance as glanceGF, crumbs as crumbsGF } from '../tours/egyptGrandFestivalData';
import { detail as detailMM, route as routeMM, glance as glanceMM, crumbs as crumbsMM } from '../tours/misrMayaData';
import { detail as detailMKJ, route as routeMKJ, glance as glanceMKJ, crumbs as crumbsMKJ } from '../tours/misrKaJaaduData';
import { detail as detailNP, route as routeNP, glance as glanceNP, crumbs as crumbsNP } from '../tours/nilePharaohsData';
import { detail as detailPF, route as routePF, glance as glancePF, crumbs as crumbsPF } from '../tours/pharaohsFeluccasData';
import { detail as detailND, route as routeND, glance as glanceND, crumbs as crumbsND } from '../tours/nileDarshanData';
import { detail as detailNN, route as routeNN, glance as glanceNN, crumbs as crumbsNN } from '../tours/nileNoorData';
import ReelGallery from '../components/egypt/ReelGallery';
import { vietnamBySlug } from '../tours/vietnamToursData';
import DesignEscapeModal from '../components/egypt/DesignEscapeModal';
import { usePageLead } from '../components/egypt/LeadModalProvider';
import { products as vietnamProducts, planner as vietnamPlanner, reviews as vietnamReviews } from '../vietnamListingData';
import { planner as srilankaPlanner, reviews as srilankaReviews, products as srilankaProducts } from '../srilankaListingData';
import { srilankaBySlug } from '../tours/srilankaToursData';
import { planner as malaysiaPlanner, reviews as malaysiaReviews } from '../malaysiaListingData';
import { malaysiaBySlug } from '../tours/malaysiaToursData';
import { planner as singaporePlanner, reviews as singaporeReviews } from '../singaporeListingData';
import { singaporeBySlug } from '../tours/singaporeToursData';
import { planner as kazakhstanPlanner, reviews as kazakhstanReviews } from '../kazakhstanListingData';
import { kazakhstanBySlug } from '../tours/kazakhstanToursData';
import { planner as bhutanPlanner, reviews as bhutanReviews } from '../bhutanListingData';
import { bhutanBySlug } from '../tours/bhutanToursData';
import { thailandBySlug } from '../tours/thailandToursData';

// Resolve the itinerary's destination (name, planner, reviews) so shared sections adapt automatically.
const DESTINATIONS = [
  ['Vietnam', (d) => ({ planner: vietnamPlanner, reviews: vietnamReviews })],
  ['Sri Lanka', (d) => ({ planner: srilankaPlanner, reviews: srilankaReviews })],
  ['Malaysia', (d) => ({ planner: malaysiaPlanner, reviews: malaysiaReviews })],
  ['Singapore', (d) => ({ planner: singaporePlanner, reviews: singaporeReviews })],
  ['Kazakhstan', (d) => ({ planner: kazakhstanPlanner, reviews: kazakhstanReviews })],
  ['Bhutan', (d) => ({ planner: bhutanPlanner, reviews: bhutanReviews })],
  ['Thailand', (d) => ({ planner: { ...planner, h3: 'Plan your Thailand trip', bg: d.gallery?.[0] } })],
  ['Morocco', (d) => ({ planner: { ...planner, h3: 'Plan your Morocco trip', bg: d.gallery?.[0] } })]
];
const destinationFor = (d) => {
  const hay = d.slug in vietnamBySlug ? 'vietnam' : `${d.title} ${d.slug} ${(d.routeCities || []).join(' ')}`.toLowerCase();
  const hit = DESTINATIONS.find(([name]) => hay.includes(name.toLowerCase()));
  const name = hit ? hit[0] : 'Egypt';
  const extra = hit ? hit[1](d) : {};
  return {
    name,
    planner: extra.planner || planner,
    reviewsH2: reviewsHeading.replace('Egypt', name),
    reviewsCount: trust.count.replace('Egypt', name),
    reviewItems: extra.reviews?.items || (name === 'Egypt' ? egyptReviewItems : undefined)
  };
};
import { products, formatInr, styles, egyptReviewItems as egyptReviewItems0 } from '../egyptListingData';
const EGYPT_REVIEW_IMAGES = ['/egypt/reviews/camel.webp', '/egypt/reviews/couple-pyramid.webp', '/egypt/reviews/karnak-temple.webp'];
const egyptReviewItems = egyptReviewItems0.map((r, i) => ({ ...r, image: EGYPT_REVIEW_IMAGES[i] || r.image }));
import { products as asiaProducts } from '../asiaListingData';
import { NavIcon } from '../components/egypt/EgyptNavIcons';

const tagIcon = Object.fromEntries(styles.map((s) => [s.key, s.icon]));
import { ratings as trustBar } from '../mock';

const BY_SLUG = {
  [detail0.slug]: { detail: detail0, route: route0, glance: glance0, crumbs: crumbs0 },
  [detail1.slug]: { detail: detail1, route: route1, glance: glance1, crumbs: crumbs1 },
  [detail2.slug]: { detail: detail2, route: route2, glance: glance2, crumbs: crumbs2 },
  [detail3.slug]: { detail: detail3, route: route3, glance: glance3, crumbs: crumbs3 },
  [detailGF.slug]: { detail: detailGF, route: routeGF, glance: glanceGF, crumbs: crumbsGF },
  [detailMM.slug]: { detail: detailMM, route: routeMM, glance: glanceMM, crumbs: crumbsMM },
  [detailMKJ.slug]: { detail: detailMKJ, route: routeMKJ, glance: glanceMKJ, crumbs: crumbsMKJ },
  [detailNP.slug]: { detail: detailNP, route: routeNP, glance: glanceNP, crumbs: crumbsNP },
  [detailPF.slug]: { detail: detailPF, route: routePF, glance: glancePF, crumbs: crumbsPF },
  [detailND.slug]: { detail: detailND, route: routeND, glance: glanceND, crumbs: crumbsND },
  [detailNN.slug]: { detail: detailNN, route: routeNN, glance: glanceNN, crumbs: crumbsNN },
  ...vietnamBySlug,
  ...srilankaBySlug,
  ...malaysiaBySlug,
  ...singaporeBySlug,
  ...kazakhstanBySlug,
  ...bhutanBySlug,
  ...thailandBySlug
};

const stop = (e) => e.preventDefault();

const CTA_LABEL = 'Design Your Escape';
const Cta = ({ detail, className = '', testId, onClick }) => <a href={detail.ctaHref} onClick={(e) => { stop(e); onClick?.(); }} title={CTA_LABEL} className={`eg-btn-filled h-12 px-7 eg-title-md ${className}`} data-testid={testId}>{CTA_LABEL}</a>;

const Ratings = ({ className = '' }) => (
  <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 ${className}`} data-testid="eg-ratings-row">
    <span className="flex items-center gap-2 eg-label-lg text-[#002131]"><GoogleLogo size={18} />Rated {trustBar.google.score} on Google</span>
    <span className="flex items-center gap-2 eg-label-lg text-[#002131]"><TripAdvisorLogo size={20} />Rated {trustBar.tripadvisor.score} on TripAdvisor</span>
  </div>
);

function Gallery({ detail }) {
  const g = detail.gallery;
  const video = detail.video;
  const [lb, setLb] = useState(null);
  const [gi, setGi] = useState(0);
  const scrollTimer = useRef(null);
  const onScroll = (e) => {
    const el = e.currentTarget;
    clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => setGi(Math.min(g.length - 1, Math.round(el.scrollLeft / el.clientWidth))), 80);
  };
  const VideoFrame = ({ className }) => (
    <iframe
      src={`https://player.vimeo.com/video/${video.vimeoId}?h=${video.h}&background=1&autoplay=1&loop=1&muted=1&autopause=0`}
      className={`pointer-events-none ${className}`}
      title={video.label || detail.title}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      data-testid="eg-gallery-video"
    />
  );
  return (
    <div className="relative" data-testid="eg-detail-gallery">
      {lb !== null && <Lightbox images={g} name={detail.title} start={lb} onClose={() => setLb(null)} />}
      <div onScroll={onScroll} className="md:hidden flex overflow-x-auto no-scrollbar snap-x snap-mandatory h-[240px] rounded-t-2xl" data-testid="eg-gallery-mobile">
        {video && <div className="w-full h-full shrink-0 snap-center bg-black overflow-hidden" data-testid="eg-gallery-video-mobile"><VideoFrame className="w-full h-full scale-[1.35]" /></div>}
        {g.map((src, i) => <img key={i} src={src} alt={`${detail.alt} - Image ${i + 1}`} className="w-full h-full object-cover shrink-0 snap-center" loading={i ? 'lazy' : 'eager'} />)}
      </div>
      <div className="hidden md:grid grid-cols-2 gap-1 h-[328px] rounded-t-2xl overflow-hidden" data-testid="eg-gallery-desktop">
        {video
          ? <div className="relative bg-black overflow-hidden" data-testid="eg-gallery-video-desktop"><VideoFrame className="absolute inset-0 w-full h-full scale-[1.35]" /></div>
          : <button type="button" onClick={() => setLb(0)} className="relative cursor-pointer" aria-label="Open photo 1" data-testid="eg-gallery-image-0"><img src={g[0]} alt={`${detail.alt} - main image`} className="absolute inset-0 w-full h-full object-cover" loading="eager" /></button>}
        <div className="grid grid-cols-2 grid-rows-2 gap-1">
          {g.slice(1, 5).map((src, i) => <button type="button" key={i} onClick={() => setLb(i + 1)} className="relative cursor-pointer" aria-label={`Open photo ${i + 2}`} data-testid={`eg-gallery-image-${i + 1}`}><img src={src} alt={`${detail.alt} - Image ${i + 1}`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" /></button>)}
        </div>
      </div>
      <button type="button" onClick={() => setLb(0)} className="hidden md:inline-flex absolute bottom-3 right-3 z-[2] h-11 w-11 items-center justify-center rounded-full bg-white/90 hover:bg-white text-[#174358] shadow-sm transition-colors" aria-label={`View all ${g.length} photos`} data-testid="eg-gallery-button"><GalleryIcon size={20} /></button>
      <div className="md:hidden absolute inset-x-0 bottom-3 z-[2] flex justify-center gap-1.5 pointer-events-none" data-testid="eg-gallery-dots">
        {g.map((_, i) => <span key={i} className={`h-1.5 rounded-full transition-all ${i === gi ? 'w-4 bg-white' : 'w-1.5 bg-white/60'}`} data-testid={i === gi ? 'eg-gallery-dot-active' : 'eg-gallery-dot'} />)}
      </div>
    </div>
  );
}

function Head({ detail }) {
  return (
    <div className="eg-wide" data-testid="eg-detail-head">
      {detail.media === 'portrait' ? <ReelGallery detail={detail} /> : <Gallery detail={detail} />}
      <div className="bg-[#F0EEE6] rounded-b-2xl p-4 md:p-6">
        <div className="flex flex-col gap-4">
            <h1 className="eg-card-title !text-[22px] !leading-[28px] sm:!text-[26px] sm:!leading-8 md:!text-[30px] md:!leading-9 text-[#002131]" data-testid="eg-detail-title">{detail.title}</h1>
            <div className="flex flex-wrap items-center gap-2" data-testid="eg-detail-facts">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#C4CBD0] px-3 py-1.5 eg-label-lg text-[#002131]" data-testid="eg-detail-days"><CalendarIcon size={18} className="text-[#308BB6]" />{detail.stats.days} days</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#C4CBD0] px-3 py-1.5 eg-label-lg text-[#002131]" data-testid="eg-detail-cities"><PinIcon size={18} className="text-[#308BB6]" />{detail.stats.cities} cities</span>
            </div>
            <div className="pt-2 border-t border-[#E4E3DB] flex flex-col gap-2" data-testid="eg-detail-route-block">
              <span className="eg-label-lg text-[#002131]">{detail.routeLabel}</span>
              <RouteLine cities={detail.routeCities} testId="eg-detail-route-line" />
            </div>
        </div>
      </div>
    </div>
  );
}

const Crumbs = ({ crumbs }) => (
  <nav className="eg-wide hidden md:block" aria-label="Breadcrumb" data-testid="eg-breadcrumb">
    <ol className="md:px-5 flex flex-wrap items-center gap-1">
      {crumbs.map((c, i) => (
        <li key={c.label} className="flex items-center gap-1 min-w-0">
          {i > 0 && <ChevronRight size={18} className="text-[#6F777C] shrink-0" />}
          {c.href
            ? (c.href.startsWith('/afrika/aegypten')
                ? <Link to="/afrika/aegypten" className="eg-body-md text-[#174358] hover:underline">{c.label}</Link>
                : (c.href === '/asien' || c.href === '/asien/vietnam' || c.href === '/asien/sri-lanka')
                  ? <Link to={c.href} className="eg-body-md text-[#174358] hover:underline">{c.label}</Link>
                  : <a href={c.href} onClick={stop} className="eg-body-md text-[#174358] hover:underline">{c.label}</a>)
            : <span className="eg-label-lg text-[#002131] truncate max-w-[220px] sm:max-w-none">{c.label}</span>}
        </li>
      ))}
    </ol>
  </nav>
);

const PriceCard = ({ detail, inr, onCta }) => (
  <div className="bg-white rounded-2xl border border-[#C4CBD0] p-5 md:p-6 flex flex-col gap-4" data-testid="eg-detail-price">
    <div className="flex flex-col gap-4">
      <div className="flex flex-col shrink-0">
        <span className="eg-body-md text-[#6F777C]">{price.from}</span>
        <span className="eg-price text-[#174358]" data-testid="eg-detail-price-value">{inr}</span>
        <span className="eg-body-md text-[#6F777C]">{price.perPerson}</span>
      </div>
      <Cta detail={detail} className="w-full !h-16 !text-[18px]" testId="eg-detail-price-cta" onClick={onCta} />
    </div>
    <hr className="border-[#E4E3DB]" />
    <div className="flex flex-col gap-3">
      <p className="eg-title-md text-[#002131]" data-testid="eg-price-included-title">{price.included}</p>
      <ul className="grid grid-cols-2 gap-2" data-testid="eg-price-services">
        {detail.services.map(([label, icon, long]) => <li key={label} className="flex items-center gap-2.5 rounded-lg bg-[#FBEADB] px-3 min-h-[44px] py-1.5 eg-label-lg text-[#002131]"><ServiceIcon name={icon} size={20} className="text-[#174358] shrink-0" /><span className="leading-tight"><span className={long ? 'md:hidden' : ''}>{label}</span>{long && <span className="hidden md:inline">{long}</span>}</span></li>)}
      </ul>
    </div>
    <hr className="border-[#E4E3DB]" />
    <Ratings />
  </div>
);

const ExpertCard = ({ detail }) => {
  const e = detail.expert;
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-start gap-3" data-testid="eg-detail-expert">
      <img src={e.image} alt={e.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
      <div className="flex flex-col gap-2 min-w-0">
        <p className="eg-title-md text-[#002131]" data-testid="eg-expert-title">{e.createdBy} {e.name}, {e.role} <CheckBadge size={18} className="inline text-[#174358] -mt-0.5" /></p>
        <p className="eg-quote !text-[18px] !leading-[29px] md:!text-[20px] md:!leading-[32px] text-[#002131]" data-testid="eg-expert-quote">“{e.quote}{open ? ` ${e.quoteMore}` : ''}”</p>
        <button type="button" onClick={() => setOpen((v) => !v)} className="self-start inline-flex items-center gap-1 eg-label-lg text-[#174358] underline" data-testid="eg-expert-quote-toggle">{open ? e.less : e.more}<ChevronDown size={16} className={open ? 'rotate-180' : ''} /></button>
      </div>
    </div>
  );
};

const statIcons = [UserIcon, SparklesIcon, WalletIcon];
const ExpertsCard = ({ testId = 'eg-detail-experts' }) => (
  <div className="flex flex-col gap-4" data-testid={testId}>
    <div className="rounded-2xl border border-[#C4CBD0] bg-[#FBF9F1] py-6 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="eg-headline-md text-[#002131] text-center px-6">{experts.h2}</h2>
        <div className="px-5 flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <hr className="flex-1 border-[#C4CBD0]" />
            <div className="flex items-center">
              {experts.avatars.map((a, i) => <img key={a} src={a} alt="Hi Tours travel expert" className={`w-10 h-10 rounded-full border-2 border-white object-cover ${i ? '-ml-2.5' : ''}`} loading="lazy" />)}
            </div>
            <hr className="flex-1 border-[#C4CBD0]" />
          </div>
          <div className="flex items-center justify-center gap-2 h-12 text-[#002131]"><SparkleLeft /><p className="eg-title-md">Plan with our travel experts</p><SparkleRight /></div>
        </div>
      </div>
      <div className="px-6 flex flex-col gap-5">
        {experts.stats.map((st, i) => { const Icon = statIcons[i]; return (
          <div key={st.h} className="flex items-center gap-4">
            <span className="w-11 h-11 rounded-full bg-[#E0F7FF] shrink-0 flex items-center justify-center text-[#174358]"><Icon size={20} /></span>
            <div className="flex flex-col gap-1"><p className="eg-title-md text-[#002131]">{st.h}</p><p className="eg-body-md text-[#174358]">{st.t}</p></div>
          </div>
        ); })}
      </div>
    </div>
  </div>
);

function Glance({ open, setOpen, glance, stops }) {
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
                  <img src={stops[Math.min(i, stops.length - 1)].images[0]} alt={stops[Math.min(i, stops.length - 1)].name} className="w-20 h-20 rounded-xl object-cover shrink-0" loading="lazy" data-testid="eg-glance-photo" />
                  <div className="min-w-0">
                    <span className="inline-flex items-center h-6 px-2 rounded-full bg-[#308BB6] eg-label-md text-white">{d.title.split(': ')[0]}</span>
                    <h3 className="mt-1 eg-title-md text-[#002131]">{d.title.split(': ')[1] || d.title}</h3>
                    <p className="mt-1 eg-body-md text-[#002131]">{d.text}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pl-3 border-l-2 border-[#9ACDE5]">
                  <div><p className="eg-label-md text-[#6F777C]">{glance.accommodationHeading}</p><p className="mt-1 eg-body-md text-[#174358]">{d.hotel}</p></div>
                  <div><p className="eg-label-md text-[#6F777C]">{glance.highlightsHeading}</p><ul className="mt-1 eg-body-md text-[#174358] list-disc pl-4">{d.highlights.map((h) => <li key={h}>{h}</li>)}</ul></div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden md:table w-full border-collapse" data-testid="eg-glance-table">
            <thead>
              <tr className="text-left eg-label-md text-[#6F777C] border-b border-[#C4CBD0]">
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
                    <td className="py-5 pr-4"><span className="inline-flex items-center justify-center min-w-[64px] h-8 px-2 rounded-full bg-[#308BB6] eg-label-lg text-white whitespace-nowrap">{day.replace('Day ', '')}</span></td>
                    <td className="py-5 pr-6">
                      <div className="flex gap-4">
                        <img src={stops[Math.min(i, stops.length - 1)].images[0]} alt={stops[Math.min(i, stops.length - 1)].name} className="w-20 h-20 rounded-xl object-cover shrink-0" loading="lazy" data-testid="eg-glance-photo" />
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

const Recommended = ({ detail }) => {
  const isVn = detail.slug in vietnamBySlug;
  const isSl = detail.slug in srilankaBySlug || detail.slug === 'emerald-isle-explorer-sri-lanka';
  const pool = isVn ? vietnamProducts : isSl ? srilankaProducts : detail.region === 'asia' ? asiaProducts : products;
  const title = isVn ? 'Other Vietnam holidays you may like' : isSl ? 'Other Sri Lanka holidays you may like' : detail.region === 'asia' ? 'Other Asia holidays you may like' : recommended.h2;
  return (
    <section className="eg-container flex flex-col gap-8" data-testid="eg-detail-recommended">
      <h2 className="eg-display-sm text-[#002131]">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6" data-testid="eg-recommended-grid">
        {pool.filter((p) => p.slug !== detail.slug).slice(0, 6).map((p, i) => <EgyptProductCard key={`${p.slug || p.title}-${i}`} p={p} />)}
      </div>
    </section>
  );
};

const Steps = () => (
  <section className="eg-container flex flex-col gap-8" data-testid="eg-detail-steps">
    <h2 className="eg-display-sm text-[#002131] text-center">{steps.h2}</h2>
    <div className="flex flex-col sm:flex-row gap-4">
      {steps.items.map((st) => (
        <div key={st.n} className="flex-1 bg-[#F0EEE6] rounded-xl px-4 py-6 flex flex-col items-center gap-3" data-testid="eg-step">
          <span className="w-10 h-10 rounded-full bg-[#308BB6] eg-title-lg text-white flex items-center justify-center">{st.n}</span>
          <div className="flex flex-col gap-2 text-center"><div className="eg-title-lg text-[#002131]">{st.title}</div><p className="eg-body-lg text-[#174358]">{st.text}</p></div>
        </div>
      ))}
    </div>
  </section>
);

function StickyBar({ detail, inr, onCta }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('wa-lift', show);
    return () => document.documentElement.classList.remove('wa-lift');
  }, [show]);
  useEffect(() => {
    document.documentElement.dataset.waPackage = detail.title;
    return () => { delete document.documentElement.dataset.waPackage; };
  }, [detail.title]);
  return (
    <div className={`fixed bottom-0 inset-x-0 z-30 bg-[#FBF9F1]/95 backdrop-blur border-t border-[#E4E3DB] transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`} data-testid="eg-detail-sticky-bar">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:justify-end md:items-center md:py-3 md:px-10">
        <div className="px-4 py-3 md:py-0 md:px-0 md:pl-6 flex items-center justify-between md:justify-end gap-3">
          <div className="flex flex-col"><span className="eg-body-sm text-[#6F777C]">{price.from}</span><span className="eg-price !text-[20px] !leading-6 md:!text-[22px] text-[#174358]">{inr}</span><span className="eg-body-sm text-[#6F777C]">{price.perPerson}</span></div>
          <Cta detail={detail} className="w-auto !h-14 !px-8 eg-title-lg" testId="eg-sticky-cta" onClick={onCta} />
        </div>
      </div>
    </div>
  );
}

export default function EgyptDetail() {
  const { slug } = useParams();
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const openLead = useCallback(() => setLeadOpen(true), []);
  const closeLead = useCallback(() => setLeadOpen(false), []);
  const showSummary = () => {
    setSummaryOpen(true);
    requestAnimationFrame(() => { const el = document.getElementById('summary'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 16, behavior: 'smooth' }); });
  };
  const data = BY_SLUG[slug];
  const dest = data ? destinationFor(data.detail) : null;
  usePageLead(dest?.name || '', data?.detail.gallery?.[0], data?.detail.alt);
  if (!data) return <Navigate to="/afrika/aegypten" replace />;
  const { detail, route, glance, crumbs } = data;
  const inr = formatInr(detail.price);
  return (
    <div className="eg" data-testid="egypt-detail-page">
      <Header />
      <main className="flex flex-col gap-8 pb-28 md:pb-[100px]">
        <Head detail={detail} />
        <Crumbs crumbs={crumbs} />
        <div className="eg-wide md:hidden" data-testid="eg-detail-mobile-price"><PriceCard detail={detail} inr={inr} onCta={openLead} /></div>
        <div className="flex flex-col gap-14 md:gap-[72px]">
          <div className="eg-wide flex flex-col md:flex-row gap-8">
            <div className="flex-1 min-w-0 flex flex-col gap-8">
              <ExpertCard detail={detail} />
              <EgyptRoute onSummary={showSummary} stops={route.stops} />
              <div className="md:hidden"><ExpertsCard testId="eg-detail-experts-mobile" /></div>
            </div>
            <aside className="hidden md:flex w-[384px] shrink-0 flex-col gap-6 self-start sticky top-6 max-h-[calc(100vh-24px)] overflow-y-auto no-scrollbar" data-testid="eg-detail-sidebar">
              <PriceCard detail={detail} inr={inr} onCta={openLead} />
              <ExpertsCard />
            </aside>
          </div>
          <Glance open={summaryOpen} setOpen={setSummaryOpen} glance={glance} stops={route.stops} />
          <EgyptPlanner className="eg-wide" titleClass="eg-headline-lg" data={dest.planner} tripTitle={detail.title} source="egypt-detail" />
          <Features />
          <EgyptReviews centered className="eg-container" h2={dest.reviewsH2} count={dest.reviewsCount} items={dest.reviewItems} cta={detail.cta} />
          <Recommended detail={detail} />
          <Steps />
        </div>
      </main>
      <StickyBar detail={detail} inr={inr} onCta={openLead} />
      <DesignEscapeModal open={leadOpen} onClose={closeLead} destination={dest.name} tripTitle={detail.title} image={detail.gallery?.[0]} imageAlt={detail.alt} />
      <ScrollTop className="bottom-24 left-4 md:bottom-[104px] md:left-10" />
      <Footer />
    </div>
  );
}
