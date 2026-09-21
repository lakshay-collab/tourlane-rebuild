import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EgyptHero, { ScrollTop } from '../components/egypt/EgyptHero';
import EgyptProductCard from '../components/egypt/EgyptProductCard';
import EgyptPlanner from '../components/egypt/EgyptPlanner';
import EgyptTileRow, { EgyptTile } from '../components/egypt/EgyptTileRow';
import { EgyptReviews, EgyptPlan, EgyptFaq } from '../components/egypt/EgyptSections';
import { ChevronDown } from '../components/egypt/EgyptIcons';
import { intro, tours, products, features, places, activities, themes, africa } from '../egyptListingData';

const MoreButton = ({ open, onClick, more, less, testId }) => (
  <div className="mt-8 flex justify-center">
    <button type="button" onClick={onClick} className="eg-btn-outlined eg-label-lg" data-testid={testId}>
      <ChevronDown size={18} className={open ? 'rotate-180' : ''} />{open ? less : more}
    </button>
  </div>
);

export default function EgyptListing() {
  const [allTours, setAllTours] = useState(false);
  const [allThemes, setAllThemes] = useState(false);
  return (
    <div className="eg" data-testid="egypt-listing-page">
      <Header />
      <main>
        <EgyptHero />

        <section className="eg-container mt-12" data-testid="eg-intro">
          <h2 className="eg-display-sm text-[#1B1C17]">{intro.h2}</h2>
          <p className="mt-6 eg-body-lg text-[#1B1C17]">{intro.text}</p>
          <div className="mt-6 flex items-center gap-3 h-[72px]">
            <img src={intro.expert.image} alt={`${intro.expert.name}, Reiseexpertin`} className="w-14 h-14 rounded-full object-cover" />
            <div>
              <p className="eg-title-md text-black">{intro.expert.name}</p>
              <p className="eg-body-md text-[#1B1C17] mt-1">{intro.expert.role}</p>
              <p className="eg-body-md text-[#1B1C17] mt-1">{intro.expert.updated}</p>
            </div>
          </div>
        </section>

        <section className="eg-container mt-16" id="tours" data-testid="eg-tours">
          <h2 className="eg-display-sm text-[#1B1C17] whitespace-pre-wrap">{tours.h2}</h2>
          <p className="mt-6 eg-body-lg text-[#1B1C17]">{tours.intro.map((x, i) => (Array.isArray(x) ? <b key={i} className="font-semibold">{x[0]}</b> : x))}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="eg-product-grid">
            {(allTours ? products : products.slice(0, 6)).map((p) => <EgyptProductCard key={p.title} p={p} />)}
          </div>
          <MoreButton open={allTours} onClick={() => setAllTours((v) => !v)} more={tours.more} less={tours.less} testId="eg-tours-more" />
        </section>

        <section className="eg-container mt-16 grid gap-6 md:grid-cols-3" data-testid="eg-features">
          {features.map((f) => (
            <div key={f.title} className="flex md:flex-col items-start md:items-center gap-4 text-left md:text-center">
              <img src={f.icon} alt="" className="w-[72px] h-[72px] md:w-[120px] md:h-[120px] shrink-0" />
              <div className="md:max-w-[270px] flex flex-col gap-2">
                <h3 className="eg-title-lg text-[#1B1C17]">{f.title}</h3>
                <p className="eg-body-lg text-[#1B1C17]">{f.text}</p>
              </div>
            </div>
          ))}
        </section>

        <EgyptPlanner />
        <EgyptReviews />

        <section className="eg-container mt-16" data-testid="eg-places">
          <h2 className="eg-display-sm text-[#1B1C17]">{places.h2}</h2>
          <div className="mt-8"><EgyptTileRow items={places.items} testId="eg-places-row" /></div>
        </section>

        <section className="eg-container mt-16" data-testid="eg-activities">
          <h2 className="eg-display-sm text-[#1B1C17]">{activities.h2}</h2>
          <div className="mt-8 -mx-3 flex flex-wrap">
            {activities.items.map((a) => <div key={a.title} className="w-[288px] px-3"><EgyptTile item={a} testId="eg-activity-card" /></div>)}
          </div>
        </section>

        <EgyptPlan />

        <section className="eg-container mt-16" data-testid="eg-themes">
          <h2 className="eg-display-sm text-[#1B1C17]">{themes.h2}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="eg-theme-grid">
            {(allThemes ? themes.items : themes.items.slice(0, 3)).map((t) => <EgyptTile key={t.title} item={t} imgClass="aspect-[1.59] h-auto" testId="eg-theme-card" />)}
          </div>
          <MoreButton open={allThemes} onClick={() => setAllThemes((v) => !v)} more={themes.more} less={themes.less} testId="eg-themes-more" />
        </section>

        <EgyptFaq />

        <section className="eg-container mt-12 mb-16" data-testid="eg-africa">
          <h2 className="eg-display-sm text-[#1B1C17]">{africa.h2}</h2>
          <div className="mt-8"><EgyptTileRow items={africa.items} testId="eg-africa-row" /></div>
        </section>
      </main>
      <ScrollTop />
      <Footer />
    </div>
  );
}
