import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { X } from 'lucide-react';
import Footer from '../components/Footer';
import EgyptHero, { ScrollTop } from '../components/egypt/EgyptHero';
import EgyptProductCard from '../components/egypt/EgyptProductCard';
import EgyptFilterBar, { MobileToursBars } from '../components/egypt/EgyptFilterBar';
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
        <EgyptHero title={style ? hero.styleH1(style) : hero.holidaysH1} showTabs={false} crumbs={crumbs} />

        <section className="eg-container mt-8 md:mt-12 scroll-mt-20 mb-16" id="tours" data-testid="eg-tours">
          <h2 className="eg-display-sm text-[#002131]" data-testid="eg-tours-title">{title}</h2>
          <EgyptFilterBar title={title} style={style} sort={sort} onStyle={setStyle} onSort={setSort} />
          {(style || sort) && (
            <div className="mt-4 md:mt-2 flex flex-wrap items-center gap-2" data-testid="eg-active-filters">
              {style && <Chip label={tours.filterLabel} value={style} onClear={() => setStyle(null)} testId="eg-filter-chip-style" />}
              {sort && <Chip label={tours.sortLabel} value={sortLabel} onClear={() => setSort(null)} testId="eg-filter-chip-sort" />}
            </div>
          )}
          {list.length ? (
            <div className="mt-6 md:mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="eg-product-grid">
              {shown.map((p) => <EgyptProductCard key={p.slug} p={p} />)}
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
      </main>
      <ScrollTop className="bottom-40 right-4 md:bottom-10 md:right-12" />
      <MobileToursBars title={title} style={style} sort={sort} onStyle={setStyle} onSort={setSort} />
      <Footer />
    </div>
  );
}
