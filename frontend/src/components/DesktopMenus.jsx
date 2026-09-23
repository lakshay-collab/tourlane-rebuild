import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { destinationTabs, destinations } from '../destinationsData';
import { themeGroups, themesFeatured } from '../themesData';

const COUNTRY_HREF = { 'Egypt': '/afrika/aegypten', 'Sri Lanka': '/asien' };
const REGION_HREF = { 'Asia': '/asien' };

const isInternal = (href) => href && href.startsWith('/');

const Item = ({ href, children, testId, onNavigate, className = '' }) => {
  const cls = `block t-body-md text-onsurface-variant hover:text-onsurface transition-colors ${className}`;
  if (isInternal(href)) return <Link to={href} onClick={onNavigate} className={cls} data-testid={testId}>{children}</Link>;
  return <a href={href || '#'} onClick={(e) => { if (!href || href === '#') e.preventDefault(); }} className={cls} data-testid={testId}>{children}</a>;
};

export function DestinationsMenu({ onNavigate }) {
  const tabs = destinationTabs;
  const [active, setActive] = useState(tabs[0]);
  const list = destinations[active] || [];
  return (
    <div className="tl-wide py-8" data-testid="menu-destinations">
      <div className="flex gap-8">
        <div className="w-[220px] shrink-0 border-r border-outline-variant pr-6" data-testid="menu-destinations-regions">
          <ul className="flex flex-col gap-0.5">
            {tabs.map((t) => (
              <li key={t}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(t)}
                  onFocus={() => setActive(t)}
                  onClick={() => setActive(t)}
                  className={`flex items-center justify-between w-full text-left px-3 py-2.5 rounded-lg t-label-lg transition-colors ${active === t ? 'bg-surface-highest text-onsurface' : 'text-onsurface-variant hover:bg-onsurface/[0.06]'}`}
                  data-testid={`menu-region-${t.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                >
                  {t}
                  <ArrowRight size={16} strokeWidth={2} className={`transition-opacity ${active === t ? 'opacity-100' : 'opacity-0'}`} />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="t-title-md text-onsurface">{active}</h3>
            {REGION_HREF[active] && (
              <Link to={REGION_HREF[active]} onClick={onNavigate} className="t-label-lg text-primary hover:underline flex items-center gap-1" data-testid="menu-region-all">
                View all <ArrowRight size={16} strokeWidth={2} />
              </Link>
            )}
          </div>
          <div className="grid grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-4" data-testid="menu-destinations-grid">
            {list.map((d) => {
              const href = COUNTRY_HREF[d.name] || '#';
              const inner = (
                <>
                  <img src={d.src.replace('w=520', 'w=120')} alt={d.name} className="w-11 h-11 rounded-full object-cover shrink-0 bg-surface-highest" loading="lazy" />
                  <span className="t-body-md text-onsurface-variant group-hover:text-onsurface transition-colors">{d.name}</span>
                </>
              );
              return isInternal(href) ? (
                <Link key={d.name} to={href} onClick={onNavigate} className="group flex items-center gap-3" data-testid="menu-country">{inner}</Link>
              ) : (
                <a key={d.name} href="#" onClick={(e) => e.preventDefault()} className="group flex items-center gap-3" data-testid="menu-country">{inner}</a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ThemesMenu({ onNavigate }) {
  return (
    <div className="tl-wide py-8" data-testid="menu-themes">
      <div className="flex gap-8">
        <div className="flex-1 grid grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-8">
          {themeGroups.map((g) => (
            <div key={g.key} data-testid={`menu-theme-group-${g.key}`}>
              <h3 className="t-title-md text-onsurface mb-1">{g.title}</h3>
              <p className="t-body-sm text-onsurface-variant/80 mb-3">{g.blurb}</p>
              <ul className="flex flex-col gap-2.5">
                {g.items.map((it) => (
                  <li key={it.label}>
                    <Item href={it.href} onNavigate={onNavigate} testId="menu-theme-item" className="w-fit">{it.label}</Item>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link
          to={themesFeatured.href}
          onClick={onNavigate}
          className="hidden xl:block w-[300px] shrink-0 rounded-2xl overflow-hidden relative group"
          data-testid="menu-theme-featured"
        >
          <img src={themesFeatured.image} alt={themesFeatured.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-onsurface/80 via-onsurface/20 to-transparent" />
          <div className="relative h-full min-h-[280px] flex flex-col justify-end p-5 text-white">
            <span className="t-label-md uppercase tracking-wide opacity-90">{themesFeatured.eyebrow}</span>
            <span className="t-title-lg mt-1">{themesFeatured.title}</span>
            <span className="t-body-sm opacity-90 mt-1">{themesFeatured.text}</span>
            <span className="t-label-lg mt-3 flex items-center gap-1">{themesFeatured.cta} <ArrowRight size={16} strokeWidth={2} /></span>
          </div>
        </Link>
      </div>
    </div>
  );
}
