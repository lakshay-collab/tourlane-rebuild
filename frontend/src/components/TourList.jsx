import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { families } from '../egyptData';

function ProductCard({ p }) {
  const [i, setI] = useState(0);
  const n = p.images.length;
  const to = p.detail ? `/afrika/aegypten/${p.slug}` : '/afrika/aegypten';
  const go = (e, d) => { e.preventDefault(); setI((v) => (v + d + n) % n); };
  return (
    <li>
      <Link to={to} className="group block h-full" data-testid="tour-card">
        <span className="t-body-md text-onsurface-variant">{p.category}</span>
        <div className="relative h-[220px] mt-2 rounded-2xl overflow-hidden">
          <img src={p.images[i]} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
          <button aria-label="Previous image" onClick={(e) => go(e, -1)} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface/90 text-onsurface flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"><ChevronLeft size={18} /></button>
          <button aria-label="Next image" onClick={(e) => go(e, 1)} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface/90 text-onsurface flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"><ChevronRight size={18} /></button>
          <div className="absolute left-0 right-0 bottom-3 flex justify-center gap-1.5">
            {p.images.map((_, di) => <span key={di} className={`h-1.5 rounded-full transition-all ${di === i ? 'w-4 bg-white' : 'w-1.5 bg-white/60'}`} />)}
          </div>
        </div>
        <h3 className="t-headline-sm text-onsurface mt-4 group-hover:text-primary transition-colors">{p.title}</h3>
        <div className="flex flex-col gap-1 t-body-lg text-onsurface mt-3">
          <span>{p.days} days</span>
          <span>{p.stops} {p.stops === 1 ? 'stop' : 'stops'}</span>
          <span className="mt-1">From <span className="font-semibold">€{p.price.toLocaleString('en-US')}</span> p.p.</span>
        </div>
      </Link>
    </li>
  );
}

export default function TourList({ heading, intro, exclude }) {
  const list = families.filter((p) => p.slug !== exclude);
  return (
    <section className="pt-16 md:pt-20" data-testid="tour-list-section">
      <div className="tl-container flex flex-col gap-6">
        <h2 className="t-section text-center text-onsurface">{heading}</h2>
        {intro && <p className="t-body-lg text-onsurface-variant text-center max-w-[820px] mx-auto">{intro}</p>}
        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 mt-2" data-testid="tour-grid">
          {list.map((p) => <ProductCard key={p.slug} p={p} />)}
        </ul>
      </div>
    </section>
  );
}
