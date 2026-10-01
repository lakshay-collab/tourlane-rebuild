import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { destinationTabs, destinations } from '../destinationsData';
import { themeGroups } from '../themesData';

const COUNTRY_HREF = { 'Egypt': '/afrika/aegypten', 'Sri Lanka': '/asien/sri-lanka', 'Thailand': '/asien/siam-splendour-thailand', 'Vietnam': '/asien/vietnam', 'Malaysia': '/asien/malaysia', 'Singapore': '/asien/singapore', 'Kazakhstan': '/asien/kazakhstan', 'Bhutan': '/asien/bhutan' };
const REGION_HREF = { 'Asia': '/asien' };
const REGION_TAGLINE = {
  'Top 10': 'Our most-loved destinations right now', 'Africa': 'Pyramids, safaris and Indian Ocean islands', 'Asia': 'Temples, tea hills and turquoise bays',
  'Europe': 'Fjords, piazzas and fairy-tale castles', 'Central America': 'Rainforest, reefs and volcanoes', 'North America': 'Road trips, national parks and big cities',
  'Oceania': 'Reefs, red deserts and glow-worm caves', 'South America': 'Andes, Amazon and tango nights', 'South Seas': 'Overwater villas and coral lagoons', 'Middle East': 'Deserts, souks and skyline luxury'
};

const isInternal = (href) => href && href.startsWith('/');
const Go = ({ href, onNavigate, className, children, testId }) => isInternal(href)
  ? <Link to={href} onClick={onNavigate} className={className} data-testid={testId}>{children}</Link>
  : <a href="#" onClick={(e) => e.preventDefault()} className={className} data-testid={testId}>{children}</a>;

export function DestinationsMenu({ onNavigate }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(destinationTabs[0]);
  const list = destinations[active] || [];
  const feature = list.find((d) => COUNTRY_HREF[d.name]) || list[0];
  return (
    <div className="tl-wide py-7" data-testid="menu-destinations">
      <div className="flex gap-8">
        <ul className="w-[200px] shrink-0 flex flex-col gap-0.5 border-r border-outline-variant pr-5" data-testid="menu-destinations-regions">
          {destinationTabs.map((t) => (
            <li key={t}>
              <button type="button" onMouseEnter={() => setActive(t)} onFocus={() => setActive(t)} onClick={() => { if (REGION_HREF[t]) { navigate(REGION_HREF[t]); onNavigate?.(); } else setActive(t); }}
                className={`flex items-center justify-between w-full text-left px-3 py-2 rounded-lg t-label-lg transition-colors ${active === t ? 'bg-surface-highest text-onsurface' : 'text-onsurface-variant hover:bg-onsurface/[0.06]'}`}
                data-testid={`menu-region-${t.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                {t}<ArrowRight size={16} strokeWidth={2} className={`transition-opacity ${active === t ? 'opacity-100' : 'opacity-0'}`} />
              </button>
            </li>
          ))}
        </ul>
        <div className="flex-1 min-w-0 flex flex-col gap-4">
          <div className="flex items-end justify-between gap-4">
            <div><h3 className="t-title-lg text-onsurface">{active}</h3><p className="t-body-sm text-onsurface-variant">{REGION_TAGLINE[active]}</p></div>
            {REGION_HREF[active] && <Link to={REGION_HREF[active]} onClick={onNavigate} className="t-label-lg text-primary hover:underline flex items-center gap-1 whitespace-nowrap" data-testid="menu-region-all">View all {active} holidays <ArrowRight size={16} strokeWidth={2} /></Link>}
          </div>
          <div className="grid grid-cols-4 xl:grid-cols-5 gap-3" data-testid="menu-destinations-grid">
            {list.map((d) => (
              <Go key={d.name} href={COUNTRY_HREF[d.name] || '#'} onNavigate={onNavigate} className="group relative block aspect-[4/3] rounded-xl overflow-hidden bg-surface-highest" testId="menu-country">
                <img src={d.src} alt={d.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <span className="absolute inset-0 bg-gradient-to-t from-onsurface/70 via-onsurface/10 to-transparent" />
                <span className="absolute left-3 bottom-2.5 t-label-lg text-white drop-shadow">{d.name}</span>
              </Go>
            ))}
          </div>
        </div>
        {feature && (
          <Go href={REGION_HREF[active] || COUNTRY_HREF[feature.name] || '#'} onNavigate={onNavigate} className="hidden xl:block w-[260px] shrink-0 relative rounded-2xl overflow-hidden group" testId="menu-destinations-feature">
            <img src={feature.src} alt={feature.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <span className="absolute inset-0 bg-gradient-to-t from-onsurface/85 via-onsurface/20 to-transparent" />
            <span className="relative h-full min-h-[320px] flex flex-col justify-end p-5 text-white">
              <span className="t-label-md opacity-90">Featured in {active}</span>
              <span className="t-title-lg mt-1">{feature.name}</span>
              <span className="t-label-lg mt-3 flex items-center gap-1">Explore <ArrowRight size={16} strokeWidth={2} /></span>
            </span>
          </Go>
        )}
      </div>
    </div>
  );
}

export function ThemesMenu({ onNavigate }) {
  return (
    <div className="tl-wide py-7" data-testid="menu-themes">
      <div className="grid grid-cols-4 gap-8">
        {themeGroups.map((g) => (
          <div key={g.key} className="flex flex-col gap-3" data-testid={`menu-theme-group-${g.key}`}>
            <h3 className="t-title-md text-onsurface">{g.title}</h3>
            <ul className="flex flex-col gap-1.5">
              {g.items.map((it) => (
                <li key={it.label}>
                  <Go href={it.href} onNavigate={onNavigate} className="group flex items-center gap-3 rounded-xl p-1.5 -ml-1.5 hover:bg-onsurface/[0.05] transition-colors" testId="menu-theme-item">
                    <img src={it.image.replace('w=520', 'w=160')} alt="" className="w-14 h-11 rounded-lg object-cover shrink-0 bg-surface-highest transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                    <span className="t-body-md text-onsurface-variant group-hover:text-onsurface transition-colors">{it.label}</span>
                  </Go>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
