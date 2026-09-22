import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import AsiaHero from '../components/asia/AsiaHero';
import { ScrollTop } from '../components/egypt/EgyptHero';
import EgyptProductCard from '../components/egypt/EgyptProductCard';
import EgyptTileRow from '../components/egypt/EgyptTileRow';
import { EgyptReviews } from '../components/egypt/EgyptSections';
import { ChevronDown, ChevronRight } from '../components/egypt/EgyptIcons';
import TeamIntro from '../components/TeamIntro';
import { features } from '../egyptListingData';
import { team, tours, products, countries, whereTo, continents, reviews } from '../asiaListingData';

export default function AsiaListing() {
  const [allTours, setAllTours] = useState(false);
  const [moreWhereTo, setMoreWhereTo] = useState(false);
  useEffect(() => { document.title = 'Asia holidays | Hi Tours'; }, []);
  return (
    <div className="eg" data-testid="asia-listing-page">
      <main>
        <AsiaHero />

        <TeamIntro h2={team.h2} members={team.members} />

        <section className="eg-container mt-12 md:mt-16 scroll-mt-20" id="tours" data-testid="as-tours">
          <h2 className="eg-display-sm text-[#002131]">{tours.h2}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="as-product-grid">
            {(allTours ? products : products.slice(0, 6)).map((p) => <EgyptProductCard key={p.title} p={p} />)}
          </div>
          <div className="mt-8 flex justify-center">
            <button type="button" onClick={() => setAllTours((v) => !v)} className="eg-btn-outlined eg-label-lg" data-testid="as-tours-more">
              <ChevronDown size={18} className={allTours ? 'rotate-180' : ''} />{allTours ? tours.less : tours.more}
            </button>
          </div>
        </section>

        <section className="eg-container mt-12 md:mt-16 grid gap-6 md:grid-cols-3" data-testid="as-features">
          {features.map((f) => (
            <div key={f.title} className="flex md:flex-col items-start md:items-center gap-4 text-left md:text-center" data-testid="as-feature">
              <img src={f.icon} alt="" className="w-[72px] h-[72px] md:w-[120px] md:h-[120px] shrink-0" />
              <div className="md:max-w-[270px] flex flex-col gap-2">
                <h3 className="eg-title-lg text-[#002131]">{f.title}</h3>
                <p className="eg-body-lg text-[#002131]">{f.text}</p>
              </div>
            </div>
          ))}
        </section>

        <EgyptReviews h2={reviews.h2} items={reviews.items} />

        <section className="eg-container mt-12 md:mt-16" data-testid="as-countries">
          <h2 className="eg-display-sm text-[#002131]">{countries.h2}</h2>
          <div className="mt-8"><EgyptTileRow items={countries.items} testId="as-countries-row" /></div>
        </section>

        <section className="eg-container mt-12 md:mt-16" data-testid="as-where-to">
          <h2 className="eg-display-sm text-[#002131]">{whereTo.h2}</h2>
          {whereTo.items.map((it, idx) => (
            (idx === 0 || moreWhereTo) && (
              <div key={it.n} className="mt-8" data-testid="as-where-to-item">
                <h3 className="eg-title-lg text-[#002131]">{it.n}. {it.title}</h3>
                <p className="mt-4 eg-body-lg text-[#002131]">{it.text}</p>
              </div>
            )
          ))}
          <div className="pt-4">
            <button type="button" onClick={() => setMoreWhereTo((v) => !v)} className="flex items-center gap-1 eg-body-lg font-semibold text-[#174358]" data-testid="as-where-to-toggle">
              {moreWhereTo ? whereTo.less : whereTo.more}<ChevronRight size={24} className={moreWhereTo ? 'rotate-90' : ''} />
            </button>
          </div>
        </section>

        <section className="eg-container mt-12 md:mt-16 mb-16" data-testid="as-continents">
          <h2 className="eg-display-sm text-[#002131]">{continents.h2}</h2>
          <div className="mt-8"><EgyptTileRow items={continents.items} testId="as-continents-row" /></div>
        </section>
      </main>
      <ScrollTop className="bottom-24 right-4 md:bottom-10 md:right-12" />
      <Footer />
    </div>
  );
}
