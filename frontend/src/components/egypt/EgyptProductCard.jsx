import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TagIcon, CalendarIcon, PinIcon, HotelIcon, CityIcon, TicketIcon, TransfersIcon, ChevronLeft, ChevronRight } from './EgyptIcons';
import { formatInr } from '../../egyptListingData';

const Stat = ({ icon: Icon, value, label, testId }) => (
  <span className="flex items-center gap-1.5 text-[#404942]" data-testid={testId}>
    <Icon size={20} className="text-[#717972]" /><span className="eg-body-md">{value} {label}</span>
  </span>
);

export default function EgyptProductCard({ p }) {
  const [i, setI] = useState(0);
  const n = p.images.length;
  const to = p.slug ? `/afrika/aegypten/${p.slug}` : null;
  const go = (d) => setI((v) => (v + d + n) % n);
  const Wrap = ({ children, ...rest }) => (to
    ? <Link to={to} {...rest}>{children}</Link>
    : <a href="#" onClick={(e) => e.preventDefault()} {...rest}>{children}</a>);
  const days = typeof p.days === 'number' ? `${p.days} days` : p.days;
  const stops = typeof p.stops === 'number' ? `${p.stops} ${p.stops === 1 ? 'stop' : 'stops'}` : p.stations;
  const price = typeof p.price === 'number' ? formatInr(p.price) : p.price;

  return (
    <article className="relative flex flex-col h-full eg-card" data-testid="eg-product-card">
      <div className="relative group">
        <div className="relative w-full aspect-[1.59] overflow-hidden bg-[#EAE8E0]">
          <Wrap data-testid="eg-product-image-link">
            <img src={p.images[i]} alt={p.alt} title={p.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          </Wrap>
          <div className="absolute inset-0 hidden md:flex items-center justify-between p-4 pointer-events-none md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
            <button type="button" onClick={() => go(-1)} className="eg-arrow pointer-events-auto" aria-label="Previous image" data-testid="eg-product-prev"><ChevronLeft size={24} /></button>
            <button type="button" onClick={() => go(1)} className="eg-arrow pointer-events-auto" aria-label="Next image" data-testid="eg-product-next"><ChevronRight size={24} /></button>
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

      <Wrap className="block p-4 flex-1" data-testid="eg-product-details-link">
        <div className="flex flex-col h-full gap-3">
          <h3 className="eg-title-md text-[#1B1C17] line-clamp-2" data-testid="eg-product-title">{p.title}</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[#717972]">
            <span className="flex items-center gap-2"><CalendarIcon size={22} /><span className="eg-body-md font-medium" data-testid="eg-product-days">{days}</span></span>
            <span className="flex items-center gap-2"><PinIcon size={22} /><span className="eg-body-md font-medium" data-testid="eg-product-stops">{stops}</span></span>
          </div>
          {p.hotels != null && (
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 pt-3 border-t border-[#E4E3DB]" data-testid="eg-product-inclusions">
              <Stat icon={HotelIcon} value={p.hotels} label={p.hotels === 1 ? 'hotel' : 'hotels'} testId="eg-product-hotels" />
              <Stat icon={CityIcon} value={p.cities} label={p.cities === 1 ? 'city' : 'cities'} testId="eg-product-cities" />
              <Stat icon={TicketIcon} value={p.activities} label="activities" testId="eg-product-activities" />
              <Stat icon={TransfersIcon} value={p.transfers} label="transfers" testId="eg-product-transfers" />
            </div>
          )}
          <p className="mt-auto pt-1 eg-body-lg font-medium text-[#717972]" data-testid="eg-product-price">From <span className="text-[#1B1C17]">{price}</span> p.p.</p>
        </div>
      </Wrap>
    </article>
  );
}
