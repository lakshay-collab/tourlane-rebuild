import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products, categories, featured } from '../egyptData';

export default function TourList({ heading, intro, exclude }) {
  const [cat, setCat] = useState(categories[0]);
  const list = products.filter((p) => p.category === cat && p.slug !== exclude);
  return (
    <section className="pt-16 md:pt-20" data-testid="tour-list-section">
      <div className="tl-container flex flex-col gap-6">
        <h2 className="t-section text-center text-onsurface">{heading}</h2>
        {intro && <p className="t-body-lg text-onsurface-variant text-center max-w-[760px] mx-auto">{intro}</p>}
        <div className="no-scrollbar flex gap-2 overflow-x-auto md:justify-center pb-1" role="tablist" data-testid="tour-category-tabs">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={`h-8 px-3 rounded-lg t-label-lg whitespace-nowrap ${cat === c ? 'bg-surface-variant text-onsurface' : 'border border-outline-variant text-onsurface hover:bg-onsurface/[0.06]'}`}
              data-testid={`tour-tab-${c.toLowerCase().replace(/[^a-z]+/g, '-')}`}>{c}</button>
          ))}
        </div>
        <ul className="grid gap-4 md:grid-cols-3" data-testid="tour-grid">
          {list.map((p) => (
            <li key={p.slug}>
              <Link to={p.slug === featured.slug ? `/afrika/aegypten/${p.slug}` : '/afrika/aegypten'} className="group block h-full rounded-xl border border-outline-variant bg-surface-lowest overflow-hidden hover:shadow-[0_2px_10px_rgba(0,33,49,0.12)] transition-shadow" data-testid="tour-card">
                <div className="h-[180px] overflow-hidden"><img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></div>
                <div className="p-4 flex flex-col gap-3">
                  <span className="t-label-md text-accent uppercase">{p.edition} · {p.stars}</span>
                  <h3 className="t-title-md text-onsurface">{p.title.split(' — ')[0]}</h3>
                  <div className="flex items-center gap-3 t-body-md text-onsurface-variant"><span>{p.days} days</span><span className="h-3 w-px bg-outline-variant" /><span>{p.stops} {p.stops === 1 ? 'stop' : 'stops'}</span></div>
                  <div className="flex items-center justify-between mt-1"><span className="t-title-md text-onsurface">From ${p.price.toLocaleString()} p.p.</span><ArrowRight size={18} className="text-primary" /></div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
