import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import TourList from '../components/TourList';
import Breadcrumb from '../components/Breadcrumb';
import TrustLine from '../components/TrustLine';
import { egyptImages, listingCopy as c, places } from '../egyptData';

const crumbs = [{ label: 'Destinations', to: '/' }, { label: 'Africa', to: '/' }, { label: 'Egypt' }];

export default function EgyptListing() {
  return (
    <div className="bg-surface text-onsurface" data-testid="egypt-listing-page">
      <Header />
      <main>
        <section className="relative bg-surface-container overflow-hidden" data-testid="listing-hero">
          <div className="tl-wide grid md:grid-cols-2 items-center gap-8 pt-10 md:pt-14 pb-0 md:pb-14">
            <div className="flex flex-col items-start gap-6 md:pr-8">
              <h1 className="t-display-sm md:t-display-lg text-onsurface" data-testid="listing-title">{c.h1}</h1>
              <button className="btn-sunset" data-testid="listing-cta">{c.cta}</button>
              <p className="t-body-md text-onsurface-variant -mt-3">{c.sub}</p>
              <TrustLine compact className="!justify-start" />
            </div>
            <picture>
              <source media="(max-width: 904px)" srcSet={egyptImages.heroMobile} />
              <img src={egyptImages.hero} alt="Egypt" className="w-full h-auto object-contain md:max-h-[420px]" data-testid="listing-hero-image" />
            </picture>
          </div>
        </section>
        <Breadcrumb items={crumbs} />

        <section className="pt-8 md:pt-12" data-testid="expert-section">
          <div className="tl-container flex flex-col items-center gap-6 text-center">
            <h2 className="t-section">{c.expertHeading}</h2>
            <div className="flex items-center gap-4">
              <img src={egyptImages.expert} alt={c.expert.name} className="w-16 h-16 rounded-full object-cover" />
              <div className="text-left"><div className="t-title-md">{c.expert.name}</div><div className="t-body-md text-onsurface-variant">{c.expert.role}</div><div className="t-body-sm text-outline">{c.expert.updated}</div></div>
            </div>
          </div>
        </section>
        <Features />

        <section className="pt-16 md:pt-20" data-testid="activities-section">
          <div className="tl-container flex flex-col gap-8">
            <h2 className="t-section text-center">{c.activitiesHeading}</h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {c.activities.map((a) => (
                <a key={a.title} href="#" onClick={(e) => e.preventDefault()} className="group relative h-[240px] rounded-xl overflow-hidden" data-testid="activity-card">
                  <img src={a.image} alt={a.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,33,49,0.8)_0%,rgba(0,33,49,0)_52%)]" />
                  <div className="absolute left-4 bottom-4 text-white"><h3 className="t-headline-sm">{a.title}</h3><p className="t-body-md text-white/85">{a.text}</p></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <TourList heading={c.toursHeading} intro={c.toursIntro} />
        <Testimonials />

        <section className="pt-16 md:pt-20" data-testid="places-section">
          <div className="tl-container flex flex-col gap-8">
            <h2 className="t-section text-center">{c.placesHeading}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {places.map((p) => (
                <a key={p.name} href="#" onClick={(e) => e.preventDefault()} className="group block rounded-xl border border-outline-variant overflow-hidden bg-surface-lowest" data-testid="place-card">
                  <div className="h-[120px] overflow-hidden"><img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></div>
                  <div className="px-2 py-2 t-body-lg">{p.name}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-16 md:pt-20" data-testid="plan-section">
          <div className="tl-container flex flex-col gap-6">
            <h2 className="t-section text-center">{c.planHeading}</h2>
            <p className="t-body-lg text-onsurface-variant">{c.planIntro}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {c.plan.map(([h, t]) => (
                <div key={h} className="bg-surface-container rounded-xl p-6"><h4 className="t-title-lg mb-2">{h}</h4><p className="t-body-lg text-onsurface-variant">{t}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-16 md:pt-20 pb-4" data-testid="faq-section">
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
      </main>
      <Footer />
    </div>
  );
}
