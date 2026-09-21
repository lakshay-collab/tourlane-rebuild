import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, MapPin, Bus, Check, X, BedDouble, Compass, BedSingle, Plane, Headphones, Ticket, Smartphone, Map, Signal, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Steps from '../components/Steps';
import Testimonials from '../components/Testimonials';
import TourList from '../components/TourList';
import Breadcrumb from '../components/Breadcrumb';
import TrustLine from '../components/TrustLine';
import { featured as t, egyptImages } from '../egyptData';

const crumbs = [{ label: 'Destinations', to: '/' }, { label: 'Africa', to: '/' }, { label: 'Egypt', to: '/afrika/aegypten' }, { label: t.title }];
const serviceIcons = { Accommodation: BedSingle, Transport: Bus, '24/7 support': Headphones, Activities: Ticket, 'Hi Tours App': Smartphone, Itinerary: Map, eSim: Signal, Flights: Plane };

function PriceCard({ testId }) {
  return (
    <div className="bg-surface-lowest border border-outline-variant rounded-2xl p-6 flex flex-col gap-4" data-testid={testId}>
      <TrustLine compact className="!justify-start" />
      <div><div className="t-body-md text-onsurface-variant">From</div><div className="t-display-sm">${t.price.toLocaleString()}</div><div className="t-body-md text-onsurface-variant">per person</div></div>
      <button className="btn-sunset w-full" data-testid="tour-cta">Plan for free</button>
      <p className="t-body-md text-onsurface-variant text-center -mt-1">Your itinerary – non-binding & tailor-made</p>
      <hr className="border-outline-variant" />
      <div><div className="t-title-md mb-3">Included in the price</div>
        <div className="grid grid-cols-2 gap-y-3 gap-x-2">
          {t.service.map((s) => { const I = serviceIcons[s]; return (<div key={s} className="flex items-center gap-2 t-body-md text-onsurface-variant"><I size={18} className="text-primary shrink-0" />{s}</div>); })}
        </div>
      </div>
    </div>
  );
}

export default function TourDetail() {
  const { slug } = useParams();
  const [active, setActive] = useState(0);
  if (slug !== t.slug) return <Navigate to="/afrika/aegypten" replace />;
  const stop = t.stops[active];

  return (
    <div className="bg-surface text-onsurface" data-testid="tour-detail-page">
      <Header />
      <main className="pb-24 md:pb-0">
        {/* Gallery */}
        <section className="tl-wide pt-4 md:pt-6" data-testid="tour-gallery">
          <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[300px] md:h-[440px] rounded-2xl overflow-hidden">
            <img src={t.gallery[0]} alt={t.title} className="col-span-4 md:col-span-2 row-span-2 w-full h-full object-cover" />
            {t.gallery.slice(1, 5).map((src, i) => <img key={i} src={src} alt="" className="hidden md:block w-full h-full object-cover" />)}
          </div>
        </section>

        {/* Title + price */}
        <section className="tl-wide pt-8" data-testid="tour-hero">
          <div className="grid md:grid-cols-[1fr_360px] gap-8 items-start">
            <div className="flex flex-col items-start gap-5">
              <h1 className="t-display-sm md:t-display-md" data-testid="tour-title">{t.title}</h1>
              <div className="flex flex-wrap items-center gap-4 t-body-lg text-onsurface-variant">
                <span className="flex items-center gap-1.5"><Calendar size={18} className="text-primary" />{t.days}</span>
                <span className="flex items-center gap-1.5"><MapPin size={18} className="text-primary" />{t.stops.length} stops</span>
                <span className="flex items-center gap-1.5"><Bus size={18} className="text-primary" />{t.transport}</span>
              </div>
              <span className="h-8 px-3 rounded-full bg-surface-highest t-label-lg inline-flex items-center">{t.tag}</span>
              {/* Expert */}
              <div className="flex gap-4 items-start bg-surface-container rounded-2xl p-5 mt-2" data-testid="tour-expert">
                <img src={egyptImages.expert} alt={t.expertName} className="w-14 h-14 rounded-full object-cover shrink-0" />
                <div><p className="t-body-md text-onsurface-variant">Trip created by <span className="t-title-sm text-onsurface">{t.expertName}</span> · from our expert team</p><p className="t-body-lg mt-2">{t.quote}</p></div>
              </div>
            </div>
            <div className="md:sticky md:top-4"><PriceCard testId="price-card" /></div>
          </div>
        </section>

        <Breadcrumb items={crumbs} />

        {/* Recommended route */}
        <section className="pt-16 md:pt-20" data-testid="route-section">
          <div className="tl-container flex flex-col gap-3">
            <h2 className="t-section text-center">Recommended route</h2>
            <p className="t-body-md text-onsurface-variant text-center">Adjustable with an expert at any time</p>
            <div className="no-scrollbar flex gap-2 overflow-x-auto md:justify-center pb-1 mt-4" role="tablist" data-testid="route-tabs">
              {t.stops.map((s, i) => (
                <button key={s.letter} role="tab" aria-selected={active === i} onClick={() => setActive(i)}
                  className={`h-9 pl-1 pr-3 rounded-full inline-flex items-center gap-2 t-label-lg whitespace-nowrap ${active === i ? 'bg-primary text-white' : 'border border-outline-variant hover:bg-onsurface/[0.06]'}`}
                  data-testid={`route-tab-${s.letter}`}>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center t-label-md ${active === i ? 'bg-white text-primary' : 'bg-surface-highest'}`}>{s.letter}</span>{s.name}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-[1fr_420px] gap-8 items-start mt-4" data-testid="route-stop">
              <div className="flex flex-col gap-6">
                <div><h3 className="t-headline-md" data-testid="route-stop-name">{stop.name}</h3><p className="t-body-md text-onsurface-variant mt-1">{stop.days} · {stop.nights}</p></div>
                <p className="t-body-lg">{stop.text}</p>
                <div><h4 className="t-title-md flex items-center gap-2 mb-2"><BedDouble size={18} className="text-primary" />Your accommodation</h4><p className="t-body-lg text-onsurface-variant">{stop.hotel}</p></div>
                <div><h4 className="t-title-md flex items-center gap-2 mb-2"><Compass size={18} className="text-primary" />Your programme</h4><ul className="space-y-1">{stop.program.map((p) => <li key={p} className="flex gap-2 t-body-lg text-onsurface-variant"><Check size={18} className="text-primary shrink-0 mt-1" />{p}</li>)}</ul></div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {(stop.images || [stop.image]).map((src, i) => <img key={i} src={src} alt={stop.name} className={`w-full object-cover rounded-xl ${i === 0 ? 'col-span-2 h-[220px] md:h-[240px]' : 'h-[120px]'}`} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Why plan with experts */}
        <section className="pt-16 md:pt-20" data-testid="stats-section">
          <div className="tl-container bg-deep-water text-white rounded-2xl p-8 md:p-12 flex flex-col gap-8">
            <h2 className="t-section text-center text-white">Why plan with our experts?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {t.stats.map(([n, l]) => <div key={n}><div className="t-headline-lg text-accent-amber">{n}</div><p className="t-body-md text-white/85 mt-1">{l}</p></div>)}
            </div>
          </div>
        </section>

        {/* Route at a glance */}
        <section className="pt-16 md:pt-20" data-testid="glance-section">
          <div className="tl-container flex flex-col gap-6">
            <h2 className="t-section text-center">The route at a glance</h2>
            <p className="t-body-lg text-onsurface-variant max-w-[820px] mx-auto text-center">{t.glanceIntro}</p>
            <ol className="relative border-l-2 border-accent-soft ml-3 space-y-8 mt-4">
              {t.glance.map(([h, d, hotel, hi]) => (
                <li key={h} className="pl-6 relative" data-testid="glance-item">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sunset-line" />
                  <h3 className="t-title-lg">{h}</h3>
                  <p className="t-body-lg text-onsurface-variant mt-1">{d}</p>
                  <p className="t-body-md text-onsurface mt-2"><span className="text-onsurface-variant">Accommodation:</span> {hotel}</p>
                  <ul className="mt-1 flex flex-col gap-0.5">{hi.map((x) => <li key={x} className="flex gap-2 t-body-md text-onsurface-variant"><Check size={16} className="text-primary shrink-0 mt-1" />{x}</li>)}</ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Features />
        <Testimonials />
        <TourList heading="Plan your Egypt trip now" exclude={t.slug} />
        <Steps />
      </main>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-surface border-t border-outline-variant px-4 py-3 flex items-center justify-between gap-3" data-testid="sticky-cta">
        <div><div className="t-body-sm text-onsurface-variant">From</div><div className="t-title-lg">${t.price.toLocaleString()} p.p.</div></div>
        <button className="btn-sunset flex-1 max-w-[220px]">Plan for free<ChevronRight size={18} /></button>
      </div>

      <Footer />
    </div>
  );
}
