import React from 'react';
import { Phone, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { footer } from '../destinationsData';

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-[1240px] mx-auto px-5 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[15px] font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <button className="text-[14px] text-cream/70 hover:text-cream transition-colors text-left">{l}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="text-[15px] font-semibold mb-4">{footer.contact.title}</h4>
            <a href={`tel:${footer.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-[16px] font-medium hover:text-forest-light transition-colors">
              <Phone size={18} className="text-forest-light" /> {footer.contact.phone}
            </a>
            <p className="mt-2 text-[13px] text-cream/60">{footer.contact.hours}</p>
            <div className="flex items-center gap-3 mt-5">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <button key={i} className="w-9 h-9 rounded-full border border-cream/25 flex items-center justify-center text-cream/80 hover:bg-forest hover:border-forest hover:text-white transition-colors">
                  <Icon size={17} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/15 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.legal.map((l) => (
              <button key={l} className="text-[13px] text-cream/60 hover:text-cream transition-colors">{l}</button>
            ))}
          </div>
          <p className="text-[13px] text-cream/50">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
