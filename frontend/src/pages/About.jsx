import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdventureCTA from '../components/AdventureCTA';
import { ChevronDown, ChevronLeft, ChevronRight } from '../components/egypt/EgyptIcons';
import { hero, welcome, recognized, why, steps, cta, best, faq } from '../aboutData';

const Collage = ({ images, children }) => (
  <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-1" data-testid="about-hero">
    <div className="grid gap-1 grid-cols-2 md:grid-cols-[2fr_1fr] h-[186px] sm:h-[282px] lg:h-[328px] rounded-t-xl overflow-hidden">
      {images.map((img) => <div key={img.src} className="relative overflow-hidden bg-[#EAE8E0]"><img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" loading="eager" /></div>)}
    </div>
    <div className="mt-1 bg-[#F6F4EB] rounded-b-xl px-4 pt-5 pb-7 md:px-4 md:pt-7 md:pb-10">{children}</div>
  </section>
);

function Best() {
  const ref = useRef(null);
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * 280, behavior: 'smooth' });
  return (
    <section className="eg-container flex flex-col gap-6" data-testid="about-best">
      <h2 className="eg-display-sm text-[#002131]">{best.h2}</h2>
      <p className="eg-body-lg text-[#002131]">{best.text}</p>
      <div className="relative">
        <div ref={ref} className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" data-testid="about-best-track">
          {best.items.map((d) => (
            <Link key={d.name} to={d.href} className="shrink-0 snap-start w-[216px] sm:w-[264px] rounded-xl border border-[#C4CBD0] bg-white overflow-hidden hover:shadow-[0_8px_24px_rgba(0,33,49,0.12)] transition-shadow" data-testid="about-best-card">
              <div className="h-[230px] sm:h-[286px] overflow-hidden"><img src={d.src} alt={d.name} className="w-full h-full object-cover" loading="lazy" /></div>
              <p className="px-4 py-5 eg-title-md text-[#002131]">{d.name}</p>
            </Link>
          ))}
        </div>
        <button type="button" onClick={() => scroll(-1)} className="eg-arrow absolute left-[-20px] top-1/2 -translate-y-1/2 hidden md:flex" aria-label="Previous" data-testid="about-best-prev"><ChevronLeft size={24} /></button>
        <button type="button" onClick={() => scroll(1)} className="eg-arrow absolute right-[-20px] top-1/2 -translate-y-1/2 hidden md:flex" aria-label="Next" data-testid="about-best-next"><ChevronRight size={24} /></button>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="eg-container" data-testid="about-faq">
      <h2 className="eg-display-sm text-[#002131]">{faq.h2}</h2>
      <div className="mt-8 border-t border-[#C4CBD0]">
        {faq.items.map((it, i) => (
          <div key={it.q} className="border-b border-[#C4CBD0]" data-testid="about-faq-item">
            <button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="w-full flex items-center justify-between gap-2 py-4 text-left eg-title-md text-[#002131]" data-testid="about-faq-question">{it.q}<ChevronDown size={24} className={`shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} /></button>
            {open === i && <div className="pb-5 flex flex-col gap-4 eg-body-lg text-[#002131]" data-testid="about-faq-answer">{it.a.map((p) => <p key={p}>{p}</p>)}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function About() {
  useEffect(() => { document.title = 'About Us | Hi Tours'; window.scrollTo(0, 0); }, []);
  return (
    <div className="eg" data-testid="about-page">
      <Header />
      <Collage images={hero.images}>
        <h1 className="eg-display-lg text-[#002131] [text-wrap:balance]" data-testid="about-title">{hero.h1}</h1>
        <p className="mt-3 eg-body-lg text-[#002131]">{hero.sub}</p>
      </Collage>
      <main className="flex flex-col gap-14 md:gap-20 mt-12 md:mt-16 pb-16 md:pb-24">
        <section className="eg-container flex flex-col gap-6" data-testid="about-section">
          <h2 className="eg-display-sm text-[#002131]">{welcome.h2}</h2>
          {welcome.paragraphs.map((p) => <p key={p} className="eg-body-lg text-[#002131]">{p}</p>)}
        </section>
        <section className="eg-container" data-testid="about-recognized">
          <div className="bg-[#F0EEE6] rounded-xl px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-center gap-5 md:gap-6">
            <span className="eg-body-lg text-[#174358]">{recognized.label}</span>
            <div className="flex flex-wrap items-center gap-6">{recognized.press.map((l) => <img key={l.src} src={l.src} alt={l.alt} className="h-6 w-auto object-contain" loading="lazy" />)}</div>
            <div className="bg-[#174358] rounded-lg px-4 py-2 flex items-center gap-4 self-start md:self-auto">{recognized.badges.map((l) => <img key={l.src} src={l.src} alt={l.alt} className="h-8 w-auto object-contain" loading="lazy" />)}</div>
          </div>
        </section>
        <section className="eg-container flex flex-col gap-10" data-testid="about-why">
          <h3 className="eg-headline-lg text-[#002131]">{why.h3}</h3>
          {why.items.map((it) => (
            <div key={it.h4} className="grid md:grid-cols-2 gap-6 md:gap-7 items-center" data-testid="about-why-item">
              <img src={it.image} alt={it.alt} className="w-full h-[220px] sm:h-[315px] rounded-xl object-cover" loading="lazy" />
              <div className="flex flex-col gap-3 md:self-start">
                <h4 className="eg-title-lg text-[#002131]">{it.h4}</h4>
                <p className="eg-body-lg text-[#002131]">{it.text}{it.link && <a href={it.link.href} target="_blank" rel="noreferrer" className="font-semibold text-[#174358] underline">{it.link.label}</a>}{it.textAfter}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="eg-container flex flex-col gap-8" data-testid="about-steps">
          <h2 className="eg-display-sm text-[#002131]">{steps.h2}</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {steps.items.map((s) => (
              <div key={s.n} className="bg-[#F0EEE6] rounded-xl px-5 py-6 flex flex-col items-center text-center gap-3" data-testid="about-step">
                <span className="w-9 h-9 rounded-full bg-[#D6EDE3] eg-title-md text-[#002131] flex items-center justify-center">{s.n}</span>
                <p className="eg-title-lg text-[#002131]">{s.title}</p>
                <p className="eg-body-md text-[#002131]">{s.text}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="-mt-14 md:-mt-20" data-testid="about-cta"><AdventureCTA heading={cta.h2} /></div>
        <Best />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
