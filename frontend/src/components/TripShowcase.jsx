import React, { useState } from 'react';
import { BedDouble, Car, CalendarDays, Ticket } from 'lucide-react';
import { showcase } from '../mock';

const Tile = ({ img, className = '' }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <img src={img.src} alt={img.tag} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    <span className="absolute left-4 bottom-4 t-label-lg text-white drop-shadow">#{img.tag}</span>
  </div>
);

export default function TripShowcase() {
  const [active, setActive] = useState(0);
  const trip = showcase.trips[active];
  const [a, b, c, d, e] = trip.images;
  const Tabs = ({ mobile = false }) => (
    <div className="flex justify-start md:justify-center border-b-2 border-surface-highest w-max min-w-full md:w-auto md:min-w-0 mx-auto" role="tablist" data-testid={mobile ? 'showcase-tabs-m' : 'showcase-tabs'}>
      {showcase.trips.map((t, i) => (
        <button key={t.tab} role="tab" aria-selected={active === i} onClick={() => setActive(i)}
          className={`relative px-5 md:px-6 py-3 t-label-lg transition-colors ${active === i ? 'text-primary' : 'text-onsurface hover:text-primary'}`}
          data-testid={`showcase-tab-${t.tab.toLowerCase().replace(/\s/g, '-')}${mobile ? '-m' : ''}`}>
          {t.tab}
          {active === i && <span className="absolute left-0 right-0 -bottom-[2px] h-[3px] rounded-full bg-sunset-line" />}
        </button>
      ))}
    </div>
  );

  return (
    <section className="pt-16 md:pt-20 flex flex-col" data-testid="showcase-section">
      <div className="tl-container flex flex-col items-center gap-8">
        <h2 className="t-section text-center text-onsurface">{showcase.heading}</h2>
        <div className="no-scrollbar w-full overflow-x-auto hidden md:block">
          <Tabs />
        </div>
      </div>

      <div className="tl-wide mt-8 md:mt-10">
        <div className="flex flex-col md:flex-row rounded-xl overflow-hidden md:h-[560px]" data-testid="showcase-card">
          <div className="bg-surface-container md:w-[340px] lg:w-[432px] shrink-0 p-6 md:p-8 flex flex-col">
            <h3 className="t-headline-md md:t-headline-lg text-onsurface" data-testid="showcase-title">{trip.title}</h3>
            <div className="grid grid-cols-2 gap-2 mt-5" data-testid="showcase-stats">
              {[[CalendarDays, trip.duration], [BedDouble, `${trip.hotels} hotels`], [Ticket, `${trip.activities} activities`], [Car, `${trip.transfers} transfers`]].map(([Icon, label]) => (
                <span key={label} className="flex items-center gap-2.5 rounded-lg bg-[#FBEADB] px-3 h-11 t-label-lg text-onsurface whitespace-nowrap">
                  <Icon size={20} strokeWidth={1.75} className="text-primary shrink-0" />{label}
                </span>
              ))}
            </div>
            <blockquote className="mt-6 t-quote text-onsurface" data-testid="showcase-quote">“{trip.quote}”</blockquote>
            <div className="flex items-center gap-4 mt-6 md:mt-auto">
              <img src={trip.avatar} alt={trip.customer} className="w-14 h-14 rounded-full object-cover shrink-0" />
              <p className="t-body-md text-onsurface" data-testid="showcase-customer">{showcase.createdFor} <span className="font-semibold">{trip.customer}</span></p>
            </div>
          </div>

          <div className="md:flex-1 flex gap-1 h-[420px] md:h-auto" data-testid="showcase-mosaic">
            <div className="w-1/3 flex flex-col gap-1">
              <Tile img={a} className="h-[55%]" />
              <Tile img={b} className="flex-1" />
            </div>
            <div className="w-2/3 flex flex-col gap-1">
              <Tile img={c} className="h-[44%]" />
              <div className="flex-1 flex gap-1">
                <Tile img={d} className="flex-1" />
                <Tile img={e} className="flex-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tl-container mt-6 md:hidden no-scrollbar w-full overflow-x-auto" data-testid="showcase-tabs-mobile"><Tabs mobile /></div>
      <div className="flex justify-center mt-8 md:mt-10">
        <button className="btn-filled" data-testid="showcase-cta">{trip.cta}</button>
      </div>
    </section>
  );
}
