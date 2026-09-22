import React, { useState } from 'react';
import { nav, detail } from '../../egyptDetailData';
import { HiToursLogo, PhoneIcon, UserIcon, MenuIcon } from './EgyptIcons';

const stop = (e) => e.preventDefault();
const Sep = () => <hr className="hidden lg:block w-px h-6 border-0 bg-[#C0C9C0]" />;

export default function EgyptNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative z-[2] bg-[#1B1C17] text-white px-3 py-2 text-center eg-label-lg font-medium" data-testid="eg-detail-banner">
        <p>{detail.banner}</p>
      </div>
      <nav className="relative z-40" data-testid="eg-nav">
        <div className="eg-wide h-[72px] flex items-center justify-between">
          <a href="/" onClick={stop} aria-label="Hi Tours" className="flex items-center h-full" data-testid="eg-nav-logo-link"><HiToursLogo className="h-6 w-[139px]" data-testid="eg-nav-logo" /></a>
          <div className="hidden lg:flex items-center gap-4 h-full">
            <div className="flex items-center h-full -ml-2">
              {nav.links.map((l) => (
                <button key={l} type="button" className="h-full px-4 eg-label-lg text-[#404942] hover:text-[#1B1C17]" data-testid={`eg-nav-${l.toLowerCase()}`}>{l}</button>
              ))}
            </div>
            {nav.secondary.map((s) => (
              <React.Fragment key={s.label}>
                <Sep />
                <a href={s.href} onClick={stop} className="h-full flex items-center" data-testid={`eg-nav-${s.label.toLowerCase().replace(/\s/g, '-')}`}><p className="px-4 py-3.5 eg-label-lg text-[#404942]">{s.label}</p></a>
              </React.Fragment>
            ))}
            <Sep />
            <div className="flex items-center gap-4 h-full">
              <button type="button" className="flex items-center gap-2 px-4 h-full eg-label-lg text-[#404942]" data-testid="eg-nav-phone"><PhoneIcon size={20} className="text-[#1B1C17]" />{nav.phone}</button>
              <a href={nav.loginHref} onClick={stop} className="eg-btn-outlined eg-label-lg !px-4" data-testid="eg-nav-login"><UserIcon size={18} />{nav.login}</a>
            </div>
          </div>
          <button type="button" className="lg:hidden p-2 text-[#1B1C17]" onClick={() => setOpen((v) => !v)} aria-label="Menü" data-testid="eg-nav-menu"><MenuIcon size={24} /></button>
        </div>
        {open && (
          <div className="lg:hidden absolute inset-x-0 top-[72px] bg-[#FBF9F1] border-t border-[#C0C9C0] px-4 py-2 flex flex-col z-50" data-testid="eg-nav-mobile">
            {[...nav.links, ...nav.secondary.map((s) => s.label), nav.phone, nav.login].map((l) => <button key={l} type="button" className="py-4 text-left eg-body-lg text-[#1B1C17] border-b border-[#E4E3DB] last:border-0">{l}</button>)}
          </div>
        )}
      </nav>
    </>
  );
}
