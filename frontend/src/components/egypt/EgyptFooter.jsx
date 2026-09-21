import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { footer, trust } from '../../egyptDetailData';
import { Kununu } from '../Footer';
import { TourlaneLogo, TpStars, ChevronDown } from './EgyptIcons';

const stop = (e) => e.preventDefault();
const icons = [Facebook, Instagram, Linkedin, Kununu];

export default function EgyptFooter() {
  return (
    <footer className="border-t border-[#C0C9C0]" data-testid="eg-footer">
      <div className="eg-wide py-10 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-[526px] shrink-0 flex flex-col gap-6" data-testid="eg-footer-brand">
          <a href="/" onClick={stop} aria-label="Tourlane" className="w-[141px]"><TourlaneLogo className="h-6 w-[141px]" /></a>
          <p className="eg-body-md text-[#1B1C17] max-w-[460px]">{footer.description}</p>
          <div className="flex items-center gap-4">
            {footer.socials.map((s, i) => { const Icon = icons[i]; return (
              <a key={s.name} href={s.href} onClick={stop} aria-label={s.name} className="w-6 h-6 rounded-full border border-[#1B1C17] flex items-center justify-center text-[#1B1C17]" data-testid={`eg-footer-social-${s.name.toLowerCase()}`}><Icon size={12} strokeWidth={2} /></a>
            ); })}
          </div>
        </div>
        {footer.columns.map((col) => (
          <div key={col.title} className="lg:w-[197px] shrink-0 flex flex-col gap-6">
            <p className="eg-label-lg text-[#1B1C17]">{col.title}</p>
            <div className="flex flex-col gap-2">
              {col.links.map(([label, href]) => <a key={label} href={href} onClick={stop} className="eg-body-md text-[#1B1C17] hover:underline w-fit" data-testid="eg-footer-link">{label}</a>)}
            </div>
          </div>
        ))}
        <div className="lg:w-[368px] flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <p className="eg-label-lg text-[#1B1C17]">{footer.care.title}</p>
            <div className="flex flex-col gap-2">
              <p className="eg-label-lg text-[#1B1C17]">{footer.care.strong}</p>
              <p className="eg-body-md text-[#1B1C17]">{footer.care.text}</p>
              <a href={footer.care.href} onClick={stop} className="eg-label-lg text-[#006D44] hover:underline w-fit" data-testid="eg-footer-care-cta">{footer.care.cta}</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-5" data-testid="eg-footer-badges">
            <div className="flex items-start gap-5">
              <div className="w-[128px] flex flex-col gap-2 pt-2">
                <TpStars rating={trust.rating} size={20} />
                <span className="eg-body-md text-[#1B1C17] whitespace-nowrap">{trust.score}</span>
                <span className="eg-body-md text-[#1B1C17] whitespace-nowrap">{trust.count}</span>
                <img src="/trustpilot.svg" alt="Trustpilot" className="h-5 w-auto self-start" />
              </div>
              <div className="flex items-center h-[118px]">
                <img src="/TopCustomer.svg" alt="Top Kundendienst" className="h-[118px] w-auto" />
                <img src="/ServicePreis.svg" alt="Deutscher Service-Preis 2026" className="h-[110px] w-auto ml-2" />
              </div>
            </div>
            <img src="/FGTV.svg" alt="FGTV Kundengeldabsicherung" className="w-[200px] h-[102px]" />
          </div>
        </div>
      </div>
      <div className="border-t border-[#C0C9C0] py-8">
        <div className="eg-wide flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0">
          <button type="button" className="flex items-center gap-2 py-1.5 eg-label-lg text-[#404942]" data-testid="eg-footer-country">
            <span className="inline-block w-[22px] h-[17px] rounded overflow-hidden" aria-hidden><span className="block h-1/3 bg-black" /><span className="block h-1/3 bg-[#DD0000]" /><span className="block h-1/3 bg-[#FFCC00]" /></span>
            {footer.country}<ChevronDown size={16} className="text-[#1B1C17]" />
          </button>
          <hr className="hidden sm:block w-px h-6 border-0 bg-[#C0C9C0] mx-7" />
          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6">
            {footer.legal.map(([label, href]) => <li key={label}><a href={href} onClick={stop} className="eg-body-md text-[#1B1C17] hover:underline" data-testid="eg-footer-legal-link">{label}</a></li>)}
          </ul>
        </div>
      </div>
    </footer>
  );
}
