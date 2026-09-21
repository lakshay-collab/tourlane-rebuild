import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { X } from 'lucide-react';
import Footer from '../components/Footer';
import EgyptHero, { ScrollTop, MobileStickyCta, scrollToId } from '../components/egypt/EgyptHero';
import EgyptProductCard from '../components/egypt/EgyptProductCard';
import EgyptFilterBar from '../components/egypt/EgyptFilterBar';
import EgyptPlanner from '../components/egypt/EgyptPlanner';
import EgyptTileRow, { EgyptTile } from '../components/egypt/EgyptTileRow';
import { EgyptReviews, EgyptPlan, EgyptFaq } from '../components/egypt/EgyptSections';
import { ChevronDown } from '../components/egypt/EgyptIcons';
import { intro, tours, products, features, places, activities, themes, africa, sorts, styles, styleBySlug, styleLanding } from '../egyptListingData';

const MoreButton = ({ open, onClick, more, less, testId }) => (
  <div className="mt-8 flex justify-center">
    <button type="button" onClick={onClick} className="eg-btn-outlined eg-label-lg" data-testid={testId}>
      <ChevronDown size={18} className={open ? 'rotate-180' : ''} />{open ? less : more}
    </button>
  </div>
);

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

export default function EgyptListing() {
  const [allTours, setAllTours] = useState(false);
  const [allThemes, setAllThemes] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const navigate = useNavigate();
  const { style: styleSlug } = useParams();
  const [params] = useSearchParams();
  const style = styleSlug ? (styleBySlug(styleSlug) || {}).key || null : null;
  const sort = sorts.some((s) => s.key === params.get('sort')) ? params.get('sort') : null;
  const go = (styleKey, sortKey) => {
    const st = styles.find((s) => s.key === styleKey);
    const q = sortKey ? `?sort=${sortKey}` : '';
    navigate(`${st ? styleLanding(st.slug) : '/afrika/aegypten'}${q}`, { replace: false });
  };
  const setStyle = (k) => go(k, sort);
  const setSort = (k) => go(style, k);

  useEffect(() => {
    if (styleSlug && !styleBySlug(styleSlug)) navigate('/afrika/aegypten', { replace: true });
  }, [styleSlug, navigate]);
  useEffect(() => {
    document.title = style ? `Egypt ${style} holidays | Hi Tours` : 'Egypt Honeymoons and holidays | Hi Tours';
  }, [style]);

  const list = useMemo(() => {
    const f = style ? products.filter((p) => p.styles.includes(style)) : products;
    return sort ? [...f].sort(sortFns[sort]) : f;
  }, [style, sort]);
  const mobile = useIsMobile();
  const [mobileCount, setMobileCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const sentinel = useRef(null);
  useEffect(() => { setMobileCount(3); }, [style, sort]);
  useEffect(() => {
    if (!mobile || !sentinel.current || mobileCount >= list.length) return undefined;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || loading) return;
      setLoading(true);
      setTimeout(() => { setMobileCount((c) => Math.min(c + 3, list.length)); setLoading(false); }, 450);
    }, { rootMargin: '200px 0px' });
    io.observe(sentinel.current);
    return () => io.disconnect();
  }, [mobile, mobileCount, list.length, loading]);
  const shown = mobile ? list.slice(0, mobileCount) : (allTours || style || sort ? list : list.slice(0, 6));
  const sortLabel = sort && sorts.find((s) => s.key === sort).label;

  return (
    <div className="eg" data-testid="egypt-listing-page">
      <main>
        <EgyptHero style={style} />

        <section className="eg-container mt-12 scroll-mt-20" id="about" data-testid="eg-intro">
          <h2 className="eg-display-sm text-[#002131]">{intro.h2}</h2>
          <p className="mt-6 eg-body-lg text-[#002131]">{intro.text}</p>
          <div className="mt-6 flex items-center gap-3 h-[72px]">
            <img src={intro.expert.image} alt={`${intro.expert.name}, travel expert`} className="w-14 h-14 rounded-full object-cover" />
            <div>
              <p className="eg-title-md text-black">{intro.expert.name}</p>
              <p className="eg-body-md text-[#002131] mt-1">{intro.expert.role}</p>
            </div>
          </div>
        </section>

        <section className="eg-container mt-12 md:mt-16 scroll-mt-20" id="tours" data-testid="eg-tours">
          <h2 className="eg-display-sm text-[#002131]" data-testid="eg-tours-title">{style ? tours.styleH2(style) : tours.h2}</h2>
          <p className="mt-6 eg-body-lg text-[#002131]" data-testid="eg-tours-intro">
            {tours.short.map((x, i) => (Array.isArray(x) ? <b key={i} className="font-semibold">{x[0]}</b> : x))}
            {readMore && tours.intro.map((x, i) => (Array.isArray(x) ? <b key={`m${i}`} className="font-semibold">{x[0]}</b> : x))}
            {' '}<button type="button" onClick={() => setReadMore((v) => !v)} className="eg-body-lg font-semibold text-[#174358] hover:underline" data-testid="eg-tours-readmore">{readMore ? tours.readLess : tours.readMore}</button>
          </p>
          <EgyptFilterBar title={tours.h2} count={`${list.length} ${list.length === 1 ? 'holiday' : 'holidays'}`} style={style} sort={sort} onStyle={setStyle} onSort={setSort} />
          {(style || sort) && (
            <div className="mt-2 flex flex-wrap items-center gap-2" data-testid="eg-active-filters">
              {style && <Chip label={tours.filterLabel} value={style} onClear={() => setStyle(null)} testId="eg-filter-chip-style" />}
              {sort && <Chip label={tours.sortLabel} value={sortLabel} onClear={() => setSort(null)} testId="eg-filter-chip-sort" />}
            </div>
          )}
          {list.length ? (
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="eg-product-grid">
              {shown.map((p) => <EgyptProductCard key={p.slug} p={p} />)}
            </div>
          ) : (
            <p className="mt-8 eg-body-lg text-[#174358]" data-testid="eg-empty">{tours.empty}</p>
          )}
          {mobile && mobileCount < list.length && (
            <div ref={sentinel} className="mt-6 flex justify-center h-10" data-testid="eg-lazy-sentinel">
              {loading && <span className="w-8 h-8 rounded-full border-[3px] border-[#FADDD1] border-t-[#E75E26] animate-spin" data-testid="eg-lazy-spinner" aria-label="Loading more holidays" />}
            </div>
          )}
          {!mobile && !style && !sort && list.length > 6 && (
            <MoreButton open={allTours} onClick={() => { setAllTours((v) => !v); if (allTours) scrollToId('tours'); }} more={tours.more} less={tours.less} testId="eg-tours-more" />
          )}
        </section>

        <section className="eg-container mt-12 md:mt-16 grid gap-6 md:grid-cols-3" data-testid="eg-features">
          {features.map((f) => (
            <div key={f.title} className="flex md:flex-col items-start md:items-center gap-4 text-left md:text-center">
              <img src={f.icon} alt="" className="w-[72px] h-[72px] md:w-[120px] md:h-[120px] shrink-0" />
              <div className="md:max-w-[270px] flex flex-col gap-2">
                <h3 className="eg-title-lg text-[#002131]">{f.title}</h3>
                <p className="eg-body-lg text-[#002131]">{f.text}</p>
              </div>
            </div>
          ))}
        </section>

        <EgyptPlanner />
        <EgyptReviews />

        <section className="eg-container mt-12 md:mt-16 scroll-mt-20" id="places" data-testid="eg-places">
          <h2 className="eg-display-sm text-[#002131]">{places.h2}</h2>
          <div className="mt-8"><EgyptTileRow items={places.items} testId="eg-places-row" /></div>
        </section>

        <section className="eg-container mt-12 md:mt-16" data-testid="eg-activities">
          <h2 className="eg-display-sm text-[#002131]">{activities.h2}</h2>
          <div className="mt-8 flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0 md:flex-wrap">
            {activities.items.map((a) => <div key={a.title} className="w-[240px] md:w-[264px] shrink-0 snap-start"><EgyptTile item={a} imgClass="h-[240px] md:h-[287px]" testId="eg-activity-card" /></div>)}
          </div>
        </section>

        <EgyptPlan />

        <section className="eg-container mt-12 md:mt-16 scroll-mt-20" id="themes" data-testid="eg-themes">
          <h2 className="eg-display-sm text-[#002131]">{themes.h2}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="eg-theme-grid">
            {(allThemes ? themes.items : themes.items.slice(0, 3)).map((t) => <EgyptTile key={t.title} item={t} imgClass="aspect-[1.59] h-auto" testId="eg-theme-card" />)}
          </div>
          <MoreButton open={allThemes} onClick={() => setAllThemes((v) => !v)} more={themes.more} less={themes.less} testId="eg-themes-more" />
        </section>

        <EgyptFaq />

        <section className="eg-container mt-12 mb-16" data-testid="eg-africa">
          <h2 className="eg-display-sm text-[#002131]">{africa.h2}</h2>
          <div className="mt-8"><EgyptTileRow items={africa.items} testId="eg-africa-row" /></div>
        </section>
      </main>
      <ScrollTop className="bottom-24 right-4 lg:bottom-10 lg:right-12" />
      <MobileStickyCta />
      <Footer />
    </div>
  );
}
