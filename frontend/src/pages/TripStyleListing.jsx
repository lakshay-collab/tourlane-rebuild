import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import AdventureCTA from '../components/AdventureCTA';
import TeamIntro from '../components/TeamIntro';
import TripStyleHero from '../components/tripstyle/TripStyleHero';
import { usePageLead } from '../components/egypt/LeadModalProvider';
import { ScrollTop } from '../components/egypt/EgyptHero';
import EgyptProductCard from '../components/egypt/EgyptProductCard';
import EgyptTileRow from '../components/egypt/EgyptTileRow';
import { EgyptReviews } from '../components/egypt/EgyptSections';
import { ChevronDown } from '../components/egypt/EgyptIcons';
import { features } from '../egyptListingData';
import * as northernLights from '../northernLightsData';

const styles = { 'northern-lights': northernLights };

export default function TripStyleListing() {
  const { slug } = useParams();
  const data = styles[slug];
  const [allTours, setAllTours] = useState(false);
  usePageLead(data?.hero.h1 || '', data?.hero.images?.[0]?.src, data?.hero.images?.[0]?.alt);
  useEffect(() => { if (data) document.title = `${data.hero.h1} holidays | Hi Tours`; }, [data]);
  if (!data) return <Navigate to="/" replace />;
  const { hero, crumbs, team, tours, products, destinations, reviews } = data;

  return (
    <div className="eg" data-testid="trip-style-page">
      <main>
        <TripStyleHero hero={hero} crumbs={crumbs} />

        <TeamIntro h2={team.h2} members={team.members} />

        <section className="eg-container mt-12 md:mt-16 scroll-mt-20" id="tours" data-testid="ts-tours">
          <h2 className="eg-display-sm text-[#002131]">{tours.h2}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="ts-product-grid">
            {(allTours ? products : products.slice(0, 6)).map((p) => <EgyptProductCard key={p.title} p={p} />)}
          </div>
          <div className="mt-8 flex justify-center">
            <button type="button" onClick={() => setAllTours((v) => !v)} className="eg-btn-outlined eg-label-lg" data-testid="ts-tours-more">
              <ChevronDown size={18} className={allTours ? 'rotate-180' : ''} />{allTours ? tours.less : tours.more}
            </button>
          </div>
        </section>

        <section className="eg-container mt-12 md:mt-16" data-testid="ts-destinations">
          <h2 className="eg-display-sm text-[#002131]">{destinations.h2}</h2>
          <div className="mt-8"><EgyptTileRow items={destinations.items} testId="ts-destinations-row" /></div>
        </section>

        <section className="eg-container mt-12 md:mt-16 grid gap-6 md:grid-cols-3" data-testid="ts-features">
          {features.map((f) => (
            <div key={f.title} className="flex md:flex-col items-start md:items-center gap-4 text-left md:text-center" data-testid="ts-feature">
              <img src={f.icon} alt="" className="w-[72px] h-[72px] md:w-[120px] md:h-[120px] shrink-0" />
              <div className="md:max-w-[270px] flex flex-col gap-2">
                <h3 className="eg-title-lg text-[#002131]">{f.title}</h3>
                <p className="eg-body-lg text-[#002131]">{f.text}</p>
              </div>
            </div>
          ))}
        </section>

        <EgyptReviews h2={reviews.h2} items={reviews.items} row h2Class="eg-display-lg text-[#002131]" />

        <AdventureCTA />
      </main>
      <ScrollTop className="bottom-24 left-4 md:bottom-10 md:left-12" />
      <Footer />
    </div>
  );
}
