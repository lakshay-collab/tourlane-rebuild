import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, MapPin, Bus, Check, X, BedDouble, Compass } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Steps from '../components/Steps';
import TourList from '../components/TourList';
import Breadcrumb from '../components/Breadcrumb';
import TrustLine from '../components/TrustLine';
import { featured as t, egyptImages } from '../egyptData';

const crumbs = [{ label: 'Destinations', to: '/' }, { label: 'Africa', to: '/' }, { label: 'Egypt', to: '/afrika/aegypten' }, { label: t.title }];

export default function TourDetail() {
  const { slug } = useParams();
  const [active, setActive] = useState(0);
  const [showIncluded, setShowIncluded] = useState(false);
  if (slug !== t.slug) return <Navigate to="/afrika/aegypten" replace />;
  const stop = t.stops[active];

  return (
    <div className="bg-surface text-onsurface" data-testid="tour-detail-page">
      <Header />
      <main>
        <section className="relative bg-surface-container" data-testid="tour-hero">
          <div className="tl-wide grid md:grid-cols-[1fr_520px] gap-8 items-center pt-8 md:pt-12 pb-8 md:pb-12">
            <div className="flex flex-col items-start gap-5">
              <TrustLine compact className="!justify-start" />
              <h1 className="t-display-sm md:t-display-md" data-testid="tour-title">{t.title}</h1>
              <div className="flex flex-wrap items-center gap-4 t-body-lg text-onsurface-variant">
                <span className="flex items-center gap-1.5"><Calendar size={18} className="text-primary" />{t.days}</span>
                <span className="flex items-center gap-1.5"><MapPin size={18} className="text-primary" />{t.stops.length} stops</span>
                <span className="flex items-center gap-1.5"><Bus size={18} className="text-primary" />{t.transport}</span>
              </div>
              <span className="h-8 px-3 rounded-full bg-surface-highest t-label-lg inline-flex items-center">{t.tag}</span>
              <div className="flex items-center gap-4"><button className="btn-sunset" data-testid="tour-cta">Plan for free</button><span className="t-title-md">From ${t.price.toLocaleString()} p.p.</span></div>
              <p className="t-body-md text-onsurface-variant -mt-2">Your itinerary – non-binding & tailor-made</p>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-1 h-[280px] md:h-[360px] rounded-xl overflow-hidden" data-testid="tour-gallery">
              <img src={egyptImages.giza} alt="Giza" className="col-span-2 row-span-2 w-full h-full object-cover" />
              <img src={egyptImages.aswan} alt="Aswan" className="w-full h-full object-cover" />
              <img src={egyptImages.hurghada} alt="Hurghada" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
        <Breadcrumb items={crumbs} />

        <section className="tl-container pt-6 flex flex-col gap-6" data-testid="tour-intro">
          <button onClick={() => setShowIncluded((v) => !v)} className="btn-outlined w-fit" data-testid="included-toggle"><Check size={18} className="text-primary" />Included in the price</button>
          {showIncluded && (
            <div className="grid md:grid-cols-2 gap-6 bg-surface-container rounded-xl p-6" data-testid="included-panel">
              <ul className="space-y-2">{t.included.map((i) => <li key={i} className="flex gap-3 t-body-md"><Check size={18} className="text-primary shrink-0 mt-0.5" />{i}</li>)}</ul>
              <ul className="space-y-2">{t.excluded.map((i) => <li key={i} className="flex gap-3 t-body-md text-onsurface-variant"><X size={18} className="shrink-0 mt-0.5" />{i}</li>)}</ul>
            </div>
          )}
          <div className="flex gap-4 items-start">
            <img src={egyptImages.expert} alt="Camille Mollon" className="w-14 h-14 rounded-full object-cover shrink-0" />
            <div><p className="t-body-lg">{t.quote}</p><p className="t-body-md text-onsurface-variant mt-2">Camille Mollon · Travel expert for Egypt</p></div>
          </div>
        </section>

        <section className="pt-16 md:pt-20" data-testid="route-section">
          <div className="tl-container flex flex-col gap-8">
            <h2 className="t-section text-center">Recommended route</h2>
            <div className="no-scrollbar flex gap-2 overflow-x-auto md:justify-center pb-1" role="tablist" data-testid="route-tabs">
              {t.stops.map((s, i) => (
                <button key={s.letter} role="tab" aria-selected={active === i} onClick={() => setActive(i)}
                  className={`h-9 pl-1 pr-3 rounded-full inline-flex items-center gap-2 t-label-lg whitespace-nowrap ${active === i ? 'bg-primary text-white' : 'border border-outline-variant hover:bg-onsurface/[0.06]'}`}
                  data-testid={`route-tab-${s.letter}`}>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center t-label-md ${active === i ? 'bg-white text-primary' : 'bg-surface-highest'}`}>{s.letter}</span>{s.name}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-[1fr_420px] gap-8 items-start" data-testid="route-stop">
              <div className="flex flex-col gap-6">
                <div><h3 className="t-headline-md" data-testid="route-stop-name">{stop.name}</h3><p className="t-body-md text-onsurface-variant mt-1">{stop.days} · {stop.nights}</p></div>
                <p className="t-body-lg">{stop.text}</p>
                <div><h4 className="t-title-md flex items-center gap-2 mb-2"><BedDouble size={18} className="text-primary" />Your accommodation</h4><p className="t-body-lg text-onsurface-variant">{stop.hotel}</p></div>
                <div><h4 className="t-title-md flex items-center gap-2 mb-2"><Compass size={18} className="text-primary" />Your programme</h4><ul className="space-y-1">{stop.program.map((p) => <li key={p} className="flex gap-2 t-body-lg text-onsurface-variant"><Check size={18} className="text-primary shrink-0 mt-1" />{p}</li>)}</ul></div>
              </div>
              <img src={stop.image} alt={stop.name} className="w-full h-[280px] md:h-[360px] object-cover rounded-xl" />
            </div>
          </div>
        </section>

        <section className="pt-16 md:pt-20" data-testid="stats-section">
          <div className="tl-container bg-deep-water text-white rounded-2xl p-8 md:p-12 flex flex-col gap-8">
            <h2 className="t-section text-center text-white">Why plan with our experts?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {t.stats.map(([n, l]) => <div key={n}><div className="t-headline-lg text-accent-amber">{n}</div><p className="t-body-md text-white/85 mt-1">{l}</p></div>)}
            </div>
          </div>
        </section>

        <section className="pt-16 md:pt-20" data-testid="glance-section">
          <div className="tl-container flex flex-col gap-8">
            <h2 className="t-section text-center">The route at a glance</h2>
            <ol className="relative border-l-2 border-accent-soft ml-3 space-y-6">
              {t.glance.map(([h, d]) => (
                <li key={h} className="pl-6 relative" data-testid="glance-item"><span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sunset-line" /><h3 className="t-title-lg">{h}</h3><p className="t-body-lg text-onsurface-variant">{d}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <Features />
        <TourList heading="Plan your Egypt trip now" exclude={t.slug} />
        <Steps />
      </main>
      <Footer />
    </div>
  );
}
