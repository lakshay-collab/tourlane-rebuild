import React, { useState } from 'react';
import { Star, Ticket, MapPinned } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AsiaHero from '../components/asia/AsiaHero';
import { ScrollTop } from '../components/egypt/EgyptHero';
import EgyptProductCard from '../components/egypt/EgyptProductCard';
import EgyptTileRow from '../components/egypt/EgyptTileRow';
import { ChevronDown, ChevronRight } from '../components/egypt/EgyptIcons';
import { intro, tours, products, countries, wohin, continents, usps } from '../asiaListingData';

const uspIcon = { star: Star, ticket: Ticket, map: MapPinned };

export default function AsiaListing() {
  const [allTours, setAllTours] = useState(false);
  const [moreWohin, setMoreWohin] = useState(false);
  return (
    <div className="eg" data-testid="asia-listing-page">
      <Header />
      <main>
        <AsiaHero />

        <section className="eg-container mt-12" data-testid="as-intro">
          <h2 className="eg-display-sm text-[#002131]">{intro.h2}</h2>
          <p className="mt-6 eg-body-lg text-[#002131]">
            {intro.text.map((x, i) => (Array.isArray(x) ? <b key={i} className="font-semibold">{x[0]}</b> : x))}
          </p>
        </section>

        <section className="eg-container mt-16" id="tours" data-testid="as-tours">
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

        <section className="eg-container mt-16" data-testid="as-countries">
          <h2 className="eg-display-sm text-[#002131]">{countries.h2}</h2>
          <div className="mt-8"><EgyptTileRow items={countries.items} testId="as-countries-row" /></div>
        </section>

        <section className="eg-container mt-16" data-testid="as-wohin">
          <h2 className="eg-display-sm text-[#002131]">{wohin.h2}</h2>
          {wohin.items.map((it, idx) => (
            (idx === 0 || moreWohin) && (
              <div key={it.n} className="mt-8" data-testid="as-wohin-item">
                <h3 className="eg-title-lg text-[#002131]">{it.n}. {it.title}</h3>
                <p className="mt-4 eg-body-lg text-[#002131]">{it.text}</p>
              </div>
            )
          ))}
          <div className="pt-4">
            <button type="button" onClick={() => setMoreWohin((v) => !v)} className="flex items-center gap-1 eg-body-lg font-semibold text-[#174358]" data-testid="as-wohin-toggle">
              {moreWohin ? wohin.less : wohin.more}<ChevronRight size={24} className={moreWohin ? 'rotate-90' : ''} />
            </button>
          </div>
        </section>

        <section className="eg-container mt-16" data-testid="as-continents">
          <h2 className="eg-display-sm text-[#002131]">{continents.h2}</h2>
          <div className="mt-8"><EgyptTileRow items={continents.items} testId="as-continents-row" /></div>
        </section>

        <section className="eg-container mt-16 mb-16 grid gap-10 md:grid-cols-3" data-testid="as-usps">
          {usps.map((u) => {
            const Icon = uspIcon[u.icon];
            return (
              <div key={u.title} className="flex flex-col items-center text-center gap-3" data-testid="as-usp">
                <Icon size={48} strokeWidth={1.5} className="text-[#174358]" />
                <h3 className="eg-title-lg text-[#002131]">{u.title}</h3>
                <p className="eg-body-lg text-[#002131] max-w-[300px]">{u.text}</p>
              </div>
            );
          })}
        </section>
      </main>
      <ScrollTop />
      <Footer />
    </div>
  );
}
