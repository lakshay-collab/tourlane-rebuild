import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import EgyptHero, { ScrollTop } from '../components/egypt/EgyptHero';
import EgyptProductCard from '../components/egypt/EgyptProductCard';
import { MobileToursBars, SortPill, priceSortFns } from '../components/egypt/EgyptFilterBar';
import EgyptPlanner from '../components/egypt/EgyptPlanner';
import EgyptTileRow, { EgyptTile } from '../components/egypt/EgyptTileRow';
import { EgyptReviews, EgyptPlan, EgyptFaq } from '../components/egypt/EgyptSections';
import { ChevronDown } from '../components/egypt/EgyptIcons';

const MoreButton = ({ open, onClick, more, less, testId }) => (
  <div className="mt-8 flex justify-center">
    <button type="button" onClick={onClick} className="eg-btn-outlined eg-label-lg" data-testid={testId}>
      <ChevronDown size={18} className={open ? 'rotate-180' : ''} />{open ? less : more}
    </button>
  </div>
);

const ExpertQuote = ({ intro }) => {
  const [open, setOpen] = useState(false);
  const e = intro.expert;
  return (
    <figure className="mt-8 rounded-2xl bg-[#FBEADB]/60 px-5 py-6 md:px-8 md:py-8" data-testid="eg-expert-quote">
      <blockquote>
        <p className={`eg-quote !text-[18px] !leading-[29px] md:!text-[20px] md:!leading-[32px] text-[#002131] ${open ? '' : 'eg-clamp-3 md:eg-clamp-2'}`} data-testid="eg-expert-quote-text">
          “{intro.quote}{open ? ` ${intro.quoteMore}` : ''}”
        </p>
      </blockquote>
      <button type="button" onClick={() => setOpen((v) => !v)} className="mt-2 eg-body-lg font-semibold text-[#174358] hover:underline" data-testid="eg-expert-quote-toggle">{open ? intro.readLess : intro.readMore}</button>
      <figcaption className="mt-5 flex items-center gap-3">
        <img src={e.image} alt={`${e.name}, travel expert`} className="w-14 h-14 rounded-full object-cover" />
        <div>
          <p className="eg-title-md text-[#002131]">{e.name}</p>
          <p className="eg-body-md text-[#174358] mt-0.5">{e.role}</p>
        </div>
      </figcaption>
    </figure>
  );
};

// Shared destination landing template (Egypt is the master); `d` supplies all destination-specific data.
export default function DestinationListing({ d, testId = 'egypt-listing-page' }) {
  const { intro, tours, products, features, places, activities, themes, related, holidaysPath, hero, crumbs, plan, faq, planner, reviews } = d;
  const [allThemes, setAllThemes] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [aboutMore, setAboutMore] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const navigate = useNavigate();
  useEffect(() => { document.title = d.pageTitle; }, [d.pageTitle]);
  const [sort, setSort] = useState(null);
  const top = useMemo(() => (sort ? [...products].sort(priceSortFns[sort]) : products).slice(0, 6), [products, sort]);
  const viewAll = (e) => {
    e.preventDefault();
    setLeaving(true);
    window.setTimeout(() => navigate(holidaysPath), 320);
  };

  return (
    <div className={`eg ${leaving ? 'eg-page-leave' : ''}`} data-testid={testId}>
      <main>
        <EgyptHero data={{ hero, crumbs, places, themes }} />

        <section className="eg-container mt-12 scroll-mt-20" id="about" data-testid="eg-intro">
          <h2 className="eg-display-sm text-[#002131]">{intro.h2}</h2>
          <p className="mt-6 eg-body-lg text-[#002131]" data-testid="eg-intro-text">
            {intro.text}{aboutMore && intro.more}
            {' '}<button type="button" onClick={() => setAboutMore((v) => !v)} className="eg-body-lg font-semibold text-[#174358] hover:underline" data-testid="eg-intro-learnmore">{aboutMore ? intro.learnLess : intro.learnMore}</button>
          </p>
          <ExpertQuote intro={intro} />
        </section>

        <section className="eg-container mt-12 md:mt-16 scroll-mt-20" id="tours" data-testid="eg-tours">
          <h2 className="eg-display-sm text-[#002131]" data-testid="eg-tours-title">{tours.h2}</h2>
          <p className="mt-6 eg-body-lg text-[#002131]" data-testid="eg-tours-intro">
            {tours.short.map((x, i) => (Array.isArray(x) ? <b key={i} className="font-semibold">{x[0]}</b> : x))}
            {readMore && tours.intro.map((x, i) => (Array.isArray(x) ? <b key={`m${i}`} className="font-semibold">{x[0]}</b> : x))}
            {' '}<button type="button" onClick={() => setReadMore((v) => !v)} className="eg-body-lg font-semibold text-[#174358] hover:underline" data-testid="eg-tours-readmore">{readMore ? tours.readLess : tours.readMore}</button>
          </p>
          <div className="mt-8 flex justify-end" data-testid="eg-sort-row"><SortPill sort={sort} onSort={setSort} /></div>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="eg-product-grid">
            {top.map((p, i) => <div key={p.slug || p.title} className={i >= 4 ? 'hidden sm:block' : ''}><EgyptProductCard p={p} /></div>)}
          </div>
          <div className="mt-8 flex justify-center">
            <Link to={holidaysPath} onClick={viewAll} className="eg-btn-filled h-12 px-8 eg-title-md" data-testid="eg-view-all">{tours.viewAll}</Link>
          </div>
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

        <EgyptPlanner data={planner} source={d.plannerSource} />
        <EgyptReviews h2={reviews.h2} items={reviews.items} count={reviews.count} centered={Boolean(reviews.count)} />

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

        <EgyptPlan data={plan} />

        <section className="eg-container mt-12 md:mt-16 scroll-mt-20" id="themes" data-testid="eg-themes">
          <h2 className="eg-display-sm text-[#002131]">{themes.h2}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="eg-theme-grid">
            {(allThemes ? themes.items : themes.items.slice(0, 3)).map((t) => <EgyptTile key={t.title} item={t} imgClass="aspect-[1.59] h-auto" testId="eg-theme-card" />)}
          </div>
          <MoreButton open={allThemes} onClick={() => setAllThemes((v) => !v)} more={themes.more} less={themes.less} testId="eg-themes-more" />
        </section>

        <EgyptFaq data={faq} />

        <section className="eg-container mt-12 mb-16" data-testid="eg-africa">
          <h2 className="eg-display-sm text-[#002131]">{related.h2}</h2>
          <div className="mt-8"><EgyptTileRow items={related.items} testId="eg-africa-row" /></div>
        </section>
      </main>
      <ScrollTop className="bottom-28 left-4 md:bottom-10 md:left-12" />
      <MobileToursBars filters={false} cta={hero} />
      <Footer />
    </div>
  );
}
