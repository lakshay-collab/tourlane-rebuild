import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TagIcon, CalendarIcon, PinIcon, BedIcon, TicketIcon, CarIcon, ChevronLeft, ChevronRight } from './EgyptIcons';
import { formatInr } from '../../egyptListingData';

const Stat = ({ icon: Icon, value, label, testId }) => (
  <span className="flex flex-col items-start gap-1 text-[#174358]" data-testid={testId}>
    <Icon size={22} className="text-[#6F777C]" />
    <span className="eg-body-md leading-tight"><span className="font-medium text-[#002131]">{value}</span> {label}</span>
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
  const cities = p.cities != null ? `${p.cities} ${p.cities === 1 ? 'city' : 'cities'}` : p.stations;
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
        </div>
        {p.tag && (
          <div className="absolute left-0 top-0 p-2">
            <span className="inline-flex items-center gap-1 rounded-lg border border-[#C4CBD0] bg-white px-2 py-1.5 eg-label-lg text-[#174358]" data-testid="eg-product-tag">
              <TagIcon name={p.tag} size={20} />{p.tag}
            </span>
          </div>
        )}
      </div>

      <Wrap className="block p-4 flex-1" data-testid="eg-product-details-link">
        <div className="flex flex-col h-full gap-3">
          <h3 className="eg-title-md text-[#002131] line-clamp-2" data-testid="eg-product-title">{p.title}</h3>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-[#002131]">
            <span className="flex items-center gap-2"><CalendarIcon size={22} className="text-[#6F777C]" /><span className="eg-body-md font-medium" data-testid="eg-product-days">{days}</span></span>
            <span className="flex items-center gap-2"><PinIcon size={22} className="text-[#6F777C]" /><span className="eg-body-md font-medium" data-testid="eg-product-cities">{cities}</span></span>
          </div>
          {p.hotels != null && (
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#E4E3DB]" data-testid="eg-product-inclusions">
              <Stat icon={BedIcon} value={p.hotels} label={p.hotels === 1 ? 'hotel' : 'hotels'} testId="eg-product-hotels" />
              <Stat icon={TicketIcon} value={p.activities} label="activities" testId="eg-product-activities" />
              <Stat icon={CarIcon} value={p.transfers} label="transfers" testId="eg-product-transfers" />
            </div>
          )}
          <p className="mt-auto pt-1 eg-body-lg font-medium text-[#6F777C]" data-testid="eg-product-price">From <span className="text-[#002131]">{price}</span> per person</p>
        </div>
      </Wrap>
    </article>
  );
}
