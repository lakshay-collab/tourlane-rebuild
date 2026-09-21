import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TagIcon, BedIcon, PinIcon, ChevronLeft, ChevronRight } from './EgyptIcons';

export default function EgyptProductCard({ p }) {
  const [i, setI] = useState(0);
  const n = p.images.length;
  const to = `/afrika/aegypten/${p.slug}`;
  const go = (d) => setI((v) => (v + d + n) % n);

  return (
    <article className="relative flex flex-col h-full eg-card" data-testid="eg-product-card">
      <div className="relative group">
        <div className="relative w-full aspect-[1.59] overflow-hidden bg-[#EAE8E0]">
          <Link to={to} data-testid="eg-product-image-link">
            <img src={p.images[i]} alt={p.alt} title={p.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          </Link>
          <div className="absolute inset-0 hidden md:flex items-center justify-between p-4 pointer-events-none md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
            <button type="button" onClick={() => go(-1)} className="eg-arrow pointer-events-auto" aria-label="Zurück" data-testid="eg-product-prev"><ChevronLeft size={24} /></button>
            <button type="button" onClick={() => go(1)} className="eg-arrow pointer-events-auto" aria-label="Weiter" data-testid="eg-product-next"><ChevronRight size={24} /></button>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 pb-4 pointer-events-none">
            {p.images.map((_, k) => <span key={k} className="w-2 h-2 rounded-full bg-white" style={{ opacity: k === i ? 1 : 0.65 }} />)}
          </div>
        </div>
        {p.tag && (
          <div className="absolute left-0 top-0 p-2">
            <span className="inline-flex items-center gap-1 rounded-lg border border-[#C0C9C0] bg-white px-2 py-1.5 eg-label-lg text-[#006D44]" data-testid="eg-product-tag">
              <TagIcon name={p.tag} size={20} />{p.tag}
            </span>
          </div>
        )}
      </div>

      <Link to={to} className="block p-4 flex-1 basis-[168px]" data-testid="eg-product-details-link">
        <div className="flex flex-col h-full gap-2">
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="eg-title-md text-[#1B1C17] line-clamp-2" data-testid="eg-product-title">{p.title}</h3>
            <div className="flex flex-wrap gap-2 text-[#717972]">
              <span className="flex items-center gap-2"><BedIcon size={24} /><span className="eg-body-md font-medium">{p.days}</span></span>
              <span className="flex items-center gap-2"><PinIcon size={24} /><span className="eg-body-md font-medium">{p.stations}</span></span>
            </div>
          </div>
          <p className="eg-body-lg font-medium text-[#717972]" data-testid="eg-product-price">Ab <span className="text-[#1B1C17]">{p.price}</span> p.P.</p>
        </div>
      </Link>
    </article>
  );
}
