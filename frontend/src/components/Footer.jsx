import React from 'react';
import { Facebook, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { footer, trust } from '../mock';
import { TrustpilotStars, TrustpilotLogo } from './TrustLine';

const Kununu = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor"><path d="M16 15.163a3.4 3.4 0 00-.948-2.468 3.37 3.37 0 00.921-2.436v-.62c-.033-.143-.157-.254-.31-.254h-1.17a.318.318 0 00-.31.29v.582c0 .87-.712 1.575-1.588 1.575h-.62v-6.52A.315.315 0 0011.664 5H10.42a.318.318 0 00-.313.313v11.86h-.62a1.58 1.58 0 01-1.59-1.575v-.58a.318.318 0 00-.31-.29H6.42a.318.318 0 00-.311.254v.62c0 1.87 1.526 3.385 3.407 3.385h1.243v-2.74h.62c.877 0 1.589.706 1.589 1.575v.58c0 .16.126.29.31.29h1.17c.153 0 .277-.11.31-.254v-.62c0-.03 0-.06-.002-.09H16v-.565z"/></svg>
);

const Badges = ({ className = '' }) => (
  <div className={`flex flex-wrap items-start gap-6 ${className}`} data-testid="footer-badges">
    <div className="flex flex-col gap-2">
      <TrustpilotStars size={20} />
      <span className="t-body-md text-onsurface">{trust.score} {trust.outOf}</span>
      <span className="t-body-md text-onsurface">{trust.count} {trust.reviews}</span>
      <TrustpilotLogo className="h-5" />
    </div>
    <img src="/TopCustomer.svg" alt="Top Kundendienst" className="h-[118px] w-auto" />
    <img src="/ServicePreis.svg" alt="Deutscher Service-Preis 2026" className="h-[110px] w-auto" />
    <div className="basis-full"><img src="/FGTV.svg" alt="FGTV Kundengeldabsicherung" className="h-[90px] w-auto" /></div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-surface" data-testid="site-footer">
      <div className="tl-wide pt-12 pb-10 flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="lg:w-[460px] shrink-0">
          <div className="flex items-center justify-between">
            <a href="/" aria-label="Tourlane" className="text-primary"><Logo className="h-6 w-auto" /></a>
            <div className="flex items-center gap-4 lg:hidden"><Socials /></div>
          </div>
          <p className="hidden lg:block t-body-md text-onsurface mt-8">{footer.description}</p>
          <div className="hidden lg:flex items-center gap-4 mt-6"><Socials /></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 flex-1">
          {footer.columns.map((col) => (
            <div key={col.title} className="sm:w-[220px]">
              <h4 className="t-title-md text-onsurface">{col.title}</h4>
              <ul className="mt-5 space-y-2">
                {col.links.map((l) => (
                  <li key={l}><button className="t-body-md text-onsurface hover:underline text-left" data-testid="footer-link">{l}</button></li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex-1">
            <h4 className="t-title-md text-onsurface">{footer.care.title}</h4>
            <ul className="mt-5 space-y-2">
              {footer.care.lines.map((l) => <li key={l} className="t-body-md text-onsurface">{l}</li>)}
              <li><button className="t-label-lg text-primary hover:underline" data-testid="footer-care-cta">{footer.care.cta}</button></li>
            </ul>
            <Badges className="mt-8" />
          </div>
        </div>
      </div>

      <div className="border-t border-outline-variant">
        <div className="tl-wide py-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0">
          <button className="flex items-center gap-2 t-body-md text-onsurface" data-testid="footer-country">
            <span className="inline-block w-6 h-4 rounded-[2px] overflow-hidden" aria-hidden>
              <span className="block h-1/3 bg-black" /><span className="block h-1/3 bg-[#DD0000]" /><span className="block h-1/3 bg-[#FFCC00]" />
            </span>
            {footer.country}
            <ChevronDown size={16} />
          </button>
          <span className="hidden sm:block h-6 w-px bg-outline-variant mx-6" />
          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6">
            {footer.legal.map((l) => (
              <li key={l}><button className="t-body-md text-onsurface hover:underline" data-testid="footer-legal-link">{l}</button></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function Socials() {
  return [Facebook, Instagram, Linkedin, Kununu].map((Icon, i) => (
    <button key={i} className="w-6 h-6 rounded-full border border-onsurface flex items-center justify-center text-onsurface hover:bg-onsurface hover:text-surface transition-colors" aria-label="Social" data-testid="footer-social">
      <Icon size={12} strokeWidth={2} />
    </button>
  ));
}
