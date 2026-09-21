import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Features from '../components/Features';
import TourList from '../components/TourList';
import Breadcrumb from '../components/Breadcrumb';
import TrustLine, { TrustpilotStars } from '../components/TrustLine';
import { egyptImages, listingCopy as c, places, themes, reviewCards } from '../egyptData';

const crumbs = [{ label: 'Destinations', to: '/' }, { label: 'Africa', to: '/' }, { label: 'Egypt' }];

export default function EgyptListing() {
  const [planOpen, setPlanOpen] = useState(false);
  return (
    <div className="bg-surface text-onsurface" data-testid="egypt-listing-page">
      <Header />
      <main>
        {/* Hero: centered title + CTA, full-width image band, trust bar */}
        <section className="bg-surface" data-testid="listing-hero">
          <div className="tl-wide pt-10 md:pt-14 flex flex-col items-center text-center gap-5">
            <h1 className="t-display-sm md:t-display-lg text-onsurface" data-testid="listing-title">{c.h1}</h1>
            <button className="btn-sunset" data-testid="listing-cta">{c.cta}</button>
            <p className="t-body-md text-onsurface-variant -mt-2">{c.sub}</p>
          </div>
          <div className="mt-6 md:mt-8">
            <img src={egyptImages.hero} alt="Egypt" className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-contain" data-testid="listing-hero-image" />
          </div>
        </section>

        <div className="bg-secondary-container py-3" data-testid="trust-bar">
          <div className="tl-wide"><TrustLine compact /></div>
        </div>

        <div className="sticky top-0 z-30 bg-surface/95 backdrop-blur border-b border-outline-variant" data-testid="listing-subnav">
          <nav className="tl-wide flex gap-8 overflow-x-auto no-scrollbar py-3 t-label-lg text-onsurface">
            {c.subnav.map((s, i) => (
              <a key={s} href="#tours" onClick={(e) => e.preventDefault()} className={`whitespace-nowrap pb-1 border-b-2 ${i === 0 ? 'border-primary text-primary' : 'border-transparent hover:text-primary'}`}>{s}</a>
            ))}
          </nav>
        </div>

        <Breadcrumb items={crumbs} />

        {/* Expert intro */}
        <section className="pt-6 md:pt-10" data-testid="expert-section">
          <div className="tl-container flex flex-col gap-6">
            <h2 className="t-section">{c.expertHeading}</h2>
            <p className="t-body-lg text-onsurface-variant max-w-[860px]">{c.expertIntro}</p>
            <div className="flex items-center gap-4">
              <img src={egyptImages.expert} alt={c.expert.name} className="w-16 h-16 rounded-full object-cover" />
              <div><div className="t-title-md">{c.expert.name}</div><div className="t-body-md text-onsurface-variant">{c.expert.role}</div><div className="t-body-sm text-outline">{c.expert.updated}</div></div>
            </div>
          </div>
        </section>

        {/* Products */}
        <div id="tours"><TourList heading={c.toursHeading} intro={c.toursIntro} /></div>

        <Features />

        {/* Reviews */}
        <section className="pt-16 md:pt-20" data-testid="reviews-section">
          <div className="tl-container flex flex-col gap-8">
            <div className="flex flex-col items-center gap-4">
              <h2 className="t-section text-center">{c.reviewsHeading}</h2>
              <TrustLine compact />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {reviewCards.map((r) => (
                <article key={r.name} className="flex flex-col" data-testid="review-card">
                  <div className="relative h-[200px] rounded-2xl overflow-hidden">
                    <img src={r.image} alt={r.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#002131]/70 to-transparent" />
                    <span className="absolute left-4 bottom-4 t-title-md text-white">{r.title}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-secondary-container text-onsurface t-title-md flex items-center justify-center">{r.initial}</span>
                    <div><h3 className="t-title-md">{r.name}</h3><TrustpilotStars rating={5} size={15} className="mt-0.5" /></div>
                  </div>
                  <p className="t-body-md text-onsurface mt-4">{r.text}</p>
                  <p className="t-body-md text-onsurface-variant mt-3">{r.date}</p>
                </article>
              ))}
            </div>
            <div className="flex justify-center"><button className="btn-sunset" data-testid="reviews-cta">Plan now for free</button></div>
          </div>
        </section>

        {/* Places */}
        <section className="pt-16 md:pt-20" data-testid="places-section">
          <div className="tl-container flex flex-col gap-8">
            <h2 className="t-section text-center">{c.placesHeading}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {places.map((p) => (
                <a key={p.name} href="#" onClick={(e) => e.preventDefault()} className="group relative block h-[160px] rounded-2xl overflow-hidden" data-testid="place-card">
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,33,49,0.75)_0%,rgba(0,33,49,0)_55%)]" />
                  <span className="absolute left-3 bottom-3 t-title-md text-white">{p.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="pt-16 md:pt-20" data-testid="activities-section">
          <div className="tl-container flex flex-col gap-8">
            <h2 className="t-section text-center">{c.activitiesHeading}</h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {c.activities.map((a) => (
                <a key={a.title} href="#" onClick={(e) => e.preventDefault()} className="group relative h-[260px] rounded-2xl overflow-hidden" data-testid="activity-card">
                  <img src={a.image} alt={a.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,33,49,0.82)_0%,rgba(0,33,49,0)_55%)]" />
                  <div className="absolute left-5 bottom-5 text-white"><span className="t-label-md uppercase text-white/80">{a.tag}</span><h3 className="t-headline-sm mt-1">{a.title}</h3></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* How to plan (collapsible) */}
        <section className="pt-16 md:pt-20" data-testid="plan-section">
          <div className="tl-container flex flex-col gap-6">
            <h2 className="t-section text-center">{c.planHeading}</h2>
            <p className="t-body-lg text-onsurface-variant max-w-[860px] mx-auto text-center">{c.planIntro}</p>
            {planOpen && (
              <div className="flex flex-col gap-6 mt-2">
                {c.plan.map(([h, t, links]) => (
                  <div key={h}>
                    <h4 className="t-title-lg mb-2">{h}</h4>
                    <p className="t-body-lg text-onsurface-variant">{t}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">{links.map((l) => <a key={l} href="#" onClick={(e) => e.preventDefault()} className="btn-text">→ {l}</a>)}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center"><button onClick={() => setPlanOpen((v) => !v)} className="btn-outlined" data-testid="plan-toggle">{planOpen ? 'Show fewer details' : 'Show more details'}</button></div>
          </div>
        </section>

        {/* Travel themes */}
        <section className="pt-16 md:pt-20" data-testid="themes-section">
          <div className="tl-container flex flex-col gap-8">
            <h2 className="t-section text-center">{c.themesHeading}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {themes.map((t) => (
                <a key={t.title} href="#" onClick={(e) => e.preventDefault()} className="group block rounded-2xl overflow-hidden bg-surface-lowest border border-outline-variant" data-testid="theme-card">
                  <div className="h-[150px] overflow-hidden"><img src={t.image} alt={t.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></div>
                  <div className="p-4"><span className="t-label-md uppercase text-accent">{t.tag}</span><h3 className="t-title-md mt-1">{t.title}</h3></div>
                </a>
              ))}
            </div>
            <div className="flex justify-center"><button className="btn-outlined">Learn more</button></div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pt-16 md:pt-20" data-testid="faq-section">
          <div className="tl-container flex flex-col gap-6">
            <h2 className="t-section text-center">{c.faqHeading}</h2>
            <div className="divide-y divide-outline-variant border-y border-outline-variant">
              {c.faq.map(([q, a]) => (
                <details key={q} className="group py-4" data-testid="faq-item">
                  <summary className="flex items-center justify-between cursor-pointer list-none t-title-md">{q}<span className="text-primary transition-transform group-open:rotate-45 text-2xl leading-none">+</span></summary>
                  <p className="t-body-lg text-onsurface-variant mt-3">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* More Africa */}
        <section className="pt-16 md:pt-20 pb-4" data-testid="africa-section">
          <div className="tl-container flex flex-col gap-8">
            <h2 className="t-section text-center">{c.africaHeading}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {c.africa.map((p) => (
                <a key={p.name} href="#" onClick={(e) => e.preventDefault()} className="group relative block h-[150px] rounded-2xl overflow-hidden" data-testid="africa-card">
                  <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,33,49,0.75)_0%,rgba(0,33,49,0)_55%)]" />
                  <span className="absolute left-3 bottom-3 t-title-md text-white flex items-center gap-1">{p.name}<ChevronRight size={16} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
