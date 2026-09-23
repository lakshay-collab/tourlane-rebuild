import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, MapPin, Sparkles, Percent, Info, Briefcase, Megaphone, Umbrella, Phone } from 'lucide-react';
import { destinationTabs, destinations } from '../destinationsData';
import { themeGroups } from '../themesData';
import ExpertAdvicePanel from './ExpertAdvicePanel';

const ICONS = { 'Destinations': MapPin, 'Themes': Sparkles, 'Deals': Percent, 'About us': Info, 'Work with us': Briefcase, 'Press': Megaphone, 'Hi Tours Care': Umbrella, 'Expert advice': Phone };

const REGION_HREF = { 'Asia': '/asien' };
const COUNTRY_HREF = { 'Egypt': '/afrika/aegypten', 'Sri Lanka': '/asien' };
const regions = destinationTabs.filter((t) => t !== 'Top 10').map((name) => ({
  name,
  href: REGION_HREF[name] || null,
  thumb: destinations[name][0].src.replace('w=520', 'w=80'),
  countries: destinations[name].map((d) => d.name)
}));

const SECTIONS = [
  [{ label: 'Destinations', sub: true }, { label: 'Themes', sub: true }],
  [{ label: 'Deals' }, { label: 'About us' }, { label: 'Work with us' }, { label: 'Press' }, { label: 'Hi Tours Care' }],
  [{ label: 'Expert advice', sub: true }]
];

const DropIcon = ({ up }) => (
  <svg viewBox="0 0 24 24" className={`w-6 h-6 shrink-0 transition-transform duration-300 ${up ? 'rotate-180' : ''}`} fill="currentColor" aria-hidden><path d="M7 10l5 5 5-5z" /></svg>
);

const rowCls = (active, thumb) =>
  `relative flex items-center justify-between w-full ${thumb ? 'py-2 pl-2 pr-4' : 'p-4'} gap-3 rounded-full t-label-lg transition-colors duration-200 select-none ${active ? 'bg-surface-highest text-onsurface' : 'text-onsurface-variant hover:bg-onsurface/[0.08] active:bg-secondary-container'}`;

function Row({ icon: Icon, thumb, label, arrow, drop, active, href, onClick, indent, testId }) {
  const inner = (
    <>
      <span className={`flex items-center ${thumb ? 'gap-4' : 'gap-3'} ${indent ? 'pl-12' : ''}`}>
        {Icon && <Icon size={24} strokeWidth={1.75} className="shrink-0" />}
        {thumb && <img src={thumb} alt="" className="w-10 h-10 rounded-full object-cover shrink-0 bg-surface-highest" loading="lazy" />}
        {label}
      </span>
      {arrow && <ArrowRight size={24} strokeWidth={1.75} className="shrink-0" />}
      {drop && <DropIcon up={active} />}
    </>
  );
  return href
    ? <a href={href} onClick={onClick} className={rowCls(active, thumb)} role="menuitem" data-testid={testId}>{inner}</a>
    : <button type="button" onClick={onClick} className={rowCls(active, thumb)} role="menuitem" data-testid={testId}>{inner}</button>;
}

const Divider = () => <hr className="border-outline-variant my-1 mx-4" />;
const tid = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

function RootLevel({ go, close }) {
  return (
    <ul role="menubar" className="w-full" data-testid="drawer-root">
      {SECTIONS.map((section, si) => (
        <React.Fragment key={si}>
          {si > 0 && <Divider />}
          {section.map(({ label, sub }) => (
            <li key={label} className="w-full">
              <Row icon={ICONS[label]} label={label} arrow={sub} onClick={sub ? () => go(label) : close} testId={`mobile-nav-${tid(label)}`} />
            </li>
          ))}
        </React.Fragment>
      ))}
    </ul>
  );
}

function DestinationsLevel({ close }) {
  const [openRegion, setOpenRegion] = useState(null);
  return (
    <ul role="menu" className="w-full" data-testid="drawer-destinations">
      <li><Row icon={MapPin} label="Destinations" href="#" onClick={(e) => e.preventDefault()} testId="drawer-destinations-heading" /></li>
      {regions.map((r) => {
        const isOpen = openRegion === r.name;
        return (
          <li key={r.name}>
            <Row thumb={r.thumb} label={r.name} drop active={isOpen} onClick={() => setOpenRegion(isOpen ? null : r.name)} testId={`drawer-region-${tid(r.name)}`} />
            <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-[1200px]' : 'max-h-0'}`}>
              <ul>
                {[r.name, ...r.countries].map((c, i) => {
                  const href = i === 0 ? r.href : COUNTRY_HREF[c];
                  return (
                    <li key={c}>
                      <Row indent label={c} href={href || '#'} onClick={(e) => { if (!href) e.preventDefault(); else close(); }} testId="drawer-country" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function ThemesLevel({ close }) {
  const [openGroup, setOpenGroup] = useState(themeGroups[0].key);
  return (
    <ul role="menu" className="w-full" data-testid="drawer-themes">
      <li><Row icon={Sparkles} label="Themes" href="#" onClick={(e) => e.preventDefault()} testId="drawer-themes-heading" /></li>
      {themeGroups.map((g) => {
        const isOpen = openGroup === g.key;
        return (
          <li key={g.key}>
            <Row label={g.title} drop active={isOpen} onClick={() => setOpenGroup(isOpen ? null : g.key)} testId={`drawer-theme-group-${g.key}`} />
            <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
              <ul>
                {g.items.map((it) => (
                  <li key={it.label}>
                    <Row indent label={it.label} href={it.href || '#'} onClick={(e) => { if (!it.href || it.href === '#') e.preventDefault(); else close(); }} testId="drawer-theme-item" />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function MobileDrawer({ open, onClose }) {
  const [level, setLevel] = useState(null);

  useEffect(() => { if (!open) setLevel(null); }, [open]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="lg:hidden" data-testid="mobile-menu">
      <div className="fixed inset-0 z-[99] bg-onsurface/50 animate-[hi-overlay-in_300ms_ease-in-out]" onClick={onClose} data-testid="mobile-menu-overlay" />
      <div role="dialog" aria-modal="true" className="fixed inset-y-0 right-0 z-[100] max-w-[100dvw] animate-[hi-drawer-in_300ms_ease-in-out]" data-testid="mobile-drawer">
        <nav className="flex flex-col items-center h-dvh w-[320px] sm:w-[360px] bg-surface-low rounded-l-2xl shadow-[0_8px_24px_rgba(0,33,49,0.18)] px-3 py-3 overflow-hidden">
          <div className={`flex items-center w-full py-2 px-4 ${level ? 'justify-between' : 'justify-end'}`}>
            {level && (
              <button type="button" onClick={() => setLevel(null)} aria-label="Back" className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-onsurface-variant hover:bg-onsurface/[0.08] transition-colors" data-testid="mobile-menu-back">
                <ArrowLeft size={24} strokeWidth={1.75} />
              </button>
            )}
            <button type="button" onClick={onClose} aria-label="Close menu" className="w-10 h-10 -mr-2 rounded-full flex items-center justify-center text-onsurface-variant hover:bg-onsurface/[0.08] transition-colors" data-testid="mobile-menu-close">
              <X size={24} strokeWidth={1.75} />
            </button>
          </div>
          <div key={level || 'root'} className="w-full flex-1 overflow-y-auto animate-[hi-fade-in_200ms_ease-out]">
            {!level && <RootLevel go={setLevel} close={onClose} />}
            {level === 'Destinations' && <DestinationsLevel close={onClose} />}
            {level === 'Themes' && <ThemesLevel close={onClose} />}
            {level === 'Expert advice' && <ExpertAdvicePanel />}
          </div>
        </nav>
      </div>
    </div>
  );
}
