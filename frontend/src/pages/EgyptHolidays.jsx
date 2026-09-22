import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ScrollTop, scrollToId } from '../components/egypt/EgyptHero';
import EgyptProductCard from '../components/egypt/EgyptProductCard';
import EgyptFilterBar, { MobileToursBars } from '../components/egypt/EgyptFilterBar';
import EgyptPlanner from '../components/egypt/EgyptPlanner';
import EgyptCustomerReviews from '../components/egypt/EgyptCustomerReviews';
import { EgyptFaq } from '../components/egypt/EgyptSections';
import { ChevronRight } from '../components/egypt/EgyptIcons';
import { hero, tours, products, sorts, styles, styleBySlug, styleLanding, holidaysPath, holidaysCrumbs } from '../egyptListingData';

const Chip = ({ label, value, onClear, testId }) => (
  <span className="inline-flex items-center gap-1 rounded-lg border border-[#C4CBD0] bg-white pl-3 pr-1.5 py-1 eg-label-lg text-[#002131]" data-testid={testId}>
    <span className="text-[#174358] font-normal">{label}</span> {value}
    <button type="button" onClick={onClear} aria-label={`Clear ${label}`} className="ml-1 w-6 h-6 rounded-full flex items-center justify-center hover:bg-black/5" data-testid={`${testId}-clear`}><X size={16} /></button>
  </span>
);

const useIsMobile = () => {
  const [m, setM] = useState(() => window.matchMedia('(max-width: 904px)').matches);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 904px)');
    const fn = (e) => setM(e.matches);
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, []);
  return m;
};

const sortFns = {
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  'days-asc': (a, b) => a.days - b.days,
  'days-desc': (a, b) => b.days - a.days
};

const VideoHero = ({ video, title, count }) => (
  <div className="relative">
    <Header overlay />
    <section className="relative h-[520px] sm:h-[560px] md:h-[600px] lg:h-[640px] overflow-hidden bg-[#002131]" data-testid="eg-holidays-video">
      <img src={hero.image} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
      <iframe
        src={`https://player.vimeo.com/video/${video.vimeoId}?h=${video.h}&background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&playsinline=1&dnt=1`}
        title={video.label}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[177.78vh] min-w-full h-[56.25vw] min-h-full"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        data-testid="eg-holidays-video-iframe"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,33,49,0.55)_0%,rgba(0,33,49,0.2)_45%,rgba(0,33,49,0.6)_100%)] pointer-events-none" />
      <div className="absolute inset-0 pt-[112px] md:pt-[108px] flex flex-col items-center justify-center gap-4 md:gap-5 px-4 text-center" data-testid="eg-hero-copy">
        <h1 className="eg-display-lg text-white drop-shadow-[0_2px_12px_rgba(0,33,49,0.45)] [text-wrap:balance] eg-rise" data-testid="eg-hero-title">{title}</h1>
        <button type="button" onClick={() => scrollToId('tours')} className="eg-btn-filled h-12 px-6 eg-title-md eg-rise !bg-none !bg-white !text-[#002131] hover:!bg-[#FBEADB] transition-colors" style={{ animationDelay: '120ms' }} data-testid="eg-hero-cta">{count}</button>
      </div>
    </section>
  </div>
);

export default function EgyptHolidays() {
  const navigate = useNavigate();
  const { style: styleSlug } = useParams();
  const [params] = useSearchParams();
  const style = styleSlug ? (styleBySlug(styleSlug) || {}).key || null : null;
  const sort = sorts.some((s) => s.key === params.get('sort')) ? params.get('sort') : null;
  const go = (styleKey, sortKey) => {
    const st = styles.find((s) => s.key === styleKey);
    const q = sortKey ? `?sort=${sortKey}` : '';
    navigate(`${st ? styleLanding(st.slug) : holidaysPath}${q}`);
  };
  const setStyle = (k) => go(k, sort);
  const setSort = (k) => go(style, k);
  const title = style ? tours.styleH2(style) : tours.allH2;

  useEffect(() => {
    if (styleSlug && !styleBySlug(styleSlug)) navigate(holidaysPath, { replace: true });
  }, [styleSlug, navigate]);
  useEffect(() => { document.title = `${title} | Hi Tours`; }, [title]);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const list = useMemo(() => {
    const f = style ? products.filter((p) => p.styles.includes(style)) : products;
    return sort ? [...f].sort(sortFns[sort]) : f;
  }, [style, sort]);
  const mobile = useIsMobile();
  const page = mobile ? 3 : 6;
  const [count, setCount] = useState(page);
  const [loading, setLoading] = useState(false);
  const sentinel = useRef(null);
  useEffect(() => { setCount(page); }, [style, sort, page]);
  useEffect(() => {
    if (!sentinel.current || count >= list.length) return undefined;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || loading) return;
      setLoading(true);
      setTimeout(() => { setCount((c) => Math.min(c + page, list.length)); setLoading(false); }, 450);
    }, { rootMargin: '200px 0px' });
    io.observe(sentinel.current);
    return () => io.disconnect();
  }, [count, list.length, loading, page]);
  const shown = list.slice(0, count);
  const sortLabel = sort && sorts.find((s) => s.key === sort).label;
  const crumbs = style ? [...holidaysCrumbs.slice(0, 2), { label: holidaysCrumbs[2].label, to: holidaysPath }, { label: style }] : holidaysCrumbs;

  return (
    <div className="eg" data-testid="egypt-holidays-page">
      <main>
        <VideoHero video={hero.video} title={style ? hero.styleH1(style) : hero.holidaysH1} count={tours.browse(list.length)} />
        <div className="eg-container mt-6 md:mt-8">
          <nav className="hidden sm:flex items-center gap-1 eg-body-md text-[#174358]" aria-label="Breadcrumb" data-testid="eg-breadcrumb">
            {crumbs.map((c, i) => (
              <React.Fragment key={c.label}>
                {i > 0 && <ChevronRight size={20} className="text-[#174358]" />}
                {c.to ? <Link to={c.to} className="hover:underline">{c.label}</Link> : <span className="eg-label-lg text-[#002131]">{c.label}</span>}
              </React.Fragment>
            ))}
          </nav>
        </div>

        <section className="eg-container mt-2 md:mt-4 scroll-mt-20" id="tours" data-testid="eg-tours">
          <div className="eg-rise" style={{ animationDelay: '160ms' }}>
            <EgyptFilterBar title={title} style={style} sort={sort} onStyle={setStyle} onSort={setSort} />
          </div>
          {(style || sort) && (
            <div className="mt-4 md:mt-2 flex flex-wrap items-center gap-2" data-testid="eg-active-filters">
              {style && <Chip label={tours.filterLabel} value={style} onClear={() => setStyle(null)} testId="eg-filter-chip-style" />}
              {sort && <Chip label={tours.sortLabel} value={sortLabel} onClear={() => setSort(null)} testId="eg-filter-chip-sort" />}
            </div>
          )}
          {list.length ? (
            <div className="mt-6 md:mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="eg-product-grid">
              {shown.map((p, i) => <div key={p.slug} className={i < page ? 'eg-rise' : ''} style={i < page ? { animationDelay: `${200 + i * 60}ms` } : undefined}><EgyptProductCard p={p} /></div>)}
            </div>
          ) : (
            <p className="mt-8 eg-body-lg text-[#174358]" data-testid="eg-empty">{tours.empty}</p>
          )}
          {count < list.length && (
            <div ref={sentinel} className="mt-6 flex justify-center h-10" data-testid="eg-lazy-sentinel">
              {loading && <span className="w-8 h-8 rounded-full border-[3px] border-[#E4E3DB] border-t-[#174358] animate-spin" data-testid="eg-lazy-spinner" aria-label="Loading more holidays" />}
            </div>
          )}
        </section>

        <div id="planner" className="scroll-mt-20"><EgyptPlanner source="egypt-holidays" /></div>
        <EgyptCustomerReviews />
        <EgyptFaq centered className="eg-container mt-12 md:mt-16 mb-16" />
      </main>
      <ScrollTop className="bottom-40 right-4 md:bottom-10 md:right-12" />
      <MobileToursBars title={title} style={style} sort={sort} onStyle={setStyle} onSort={setSort} />
      <Footer />
    </div>
  );
}
