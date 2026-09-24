import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown, ChevronLeft, ChevronRight } from '../components/egypt/EgyptIcons';
import { hero, about, mediaKit, backed, office, recognized, why, steps, cta, best, faq } from '../aboutData';

const Collage = ({ images, children }) => (
  <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-1" data-testid="about-hero">
    <div className="grid gap-1 grid-cols-2 md:grid-cols-[2fr_1fr] h-[186px] sm:h-[282px] lg:h-[328px] rounded-t-xl overflow-hidden">
      {images.map((img) => <div key={img.src} className="relative overflow-hidden bg-[#EAE8E0]"><img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" loading="eager" /></div>)}
    </div>
    <div className="mt-1 bg-[#F6F4EB] rounded-b-xl px-4 pt-5 pb-7 md:px-4 md:pt-7 md:pb-10">{children}</div>
  </section>
);

function MediaKit() {
  const [i, setI] = useState(0);
  const n = mediaKit.slides.length;
  useEffect(() => { const t = setInterval(() => setI((v) => (v + 1) % n), 4500); return () => clearInterval(t); }, [n]);
  const f = mediaKit.founder;
  return (
    <section className="eg-container flex flex-col gap-8" data-testid="about-media-kit">
      <h2 className="eg-display-sm text-[#002131]">{mediaKit.h2}</h2>
      <div className="grid md:grid-cols-[1fr_1.15fr] gap-6 md:gap-10 items-center">
        <div className="flex flex-col gap-5" data-testid="about-founder-quote">
          <span className="text-[64px] leading-none font-serif text-[#308BB6]">“</span>
          <p className="eg-quote !text-[22px] !leading-[34px] md:!text-[26px] md:!leading-[38px] text-[#002131] -mt-8">{mediaKit.quote}</p>
          <div className="flex items-center gap-3">
            <img src={f.image} alt={f.name} className="w-14 h-14 rounded-full object-cover shadow-sm" />
            <div><p className="eg-title-md text-[#002131]" data-testid="about-founder-name">{f.name}</p><p className="eg-body-md text-[#174358]">{f.role}</p></div>
          </div>
          <a href={mediaKit.ctaHref} onClick={(e) => e.preventDefault()} className="eg-btn-filled h-11 px-5 eg-label-lg self-start" data-testid="about-media-kit-cta">{mediaKit.cta}</a>
        </div>
        <div className="relative h-[240px] sm:h-[300px] md:h-[340px] rounded-xl overflow-hidden bg-[#EAE8E0]" data-testid="about-media-carousel">
          {mediaKit.slides.map((s, k) => <img key={s.src} src={s.src} alt={s.alt} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${k === i ? 'opacity-100' : 'opacity-0'}`} loading={k ? 'lazy' : 'eager'} />)}
          <div className="absolute inset-0 flex items-center justify-between p-3">
            <button type="button" onClick={() => setI((v) => (v - 1 + n) % n)} className="eg-arrow" aria-label="Previous" data-testid="about-media-prev"><ChevronLeft size={24} /></button>
            <button type="button" onClick={() => setI((v) => (v + 1) % n)} className="eg-arrow" aria-label="Next" data-testid="about-media-next"><ChevronRight size={24} /></button>
          </div>
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">{mediaKit.slides.map((_, k) => <span key={k} className={`h-1.5 rounded-full transition-all ${k === i ? 'w-4 bg-white' : 'w-1.5 bg-white/60'}`} />)}</div>
        </div>
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
  useEffect(() => { document.title = 'About us | Hi Tours'; window.scrollTo(0, 0); }, []);
  return (
    <div className="eg" data-testid="about-page">
      <Header />
      <Collage images={hero.images}>
        <h1 className="eg-display-lg text-[#002131] [text-wrap:balance]" data-testid="about-title">{hero.h1}</h1>
        <p className="mt-3 eg-body-lg text-[#002131]">{hero.sub}</p>
      </Collage>
      <main className="flex flex-col gap-14 md:gap-20 mt-12 md:mt-16 pb-16 md:pb-24">
        <section className="eg-container flex flex-col gap-6" data-testid="about-section">
          <h2 className="eg-display-sm text-[#002131]">{about.h2}</h2>
          {about.paragraphs.map((p) => <p key={p} className="eg-body-lg text-[#002131]">{p}</p>)}
          <p className="eg-body-lg text-[#002131]">{about.press} <a href={`mailto:${about.pressEmail}`} className="font-semibold text-[#174358] hover:underline" data-testid="about-press-email">{about.pressEmail}</a>.</p>
        </section>
        <MediaKit />
        <section className="eg-container grid md:grid-cols-2 gap-6 md:gap-10 items-center" data-testid="about-backed">
          <img src={backed.image.src} alt={backed.image.alt} className="w-full h-[240px] sm:h-[315px] rounded-xl object-cover" loading="lazy" />
          <div className="flex flex-col gap-4">
            <h4 className="eg-title-lg text-[#002131]">{backed.h4}</h4>
            <p className="eg-body-lg text-[#002131]">{backed.quote}</p>
            <p className="eg-body-lg text-[#174358]">{backed.by}</p>
          </div>
        </section>
        <section className="eg-container" data-testid="about-office"><img src={office.src} alt={office.alt} className="w-full h-[220px] sm:h-[320px] md:h-[426px] rounded-xl object-cover" loading="lazy" /></section>
        <section className="eg-container flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-10" data-testid="about-recognized">
          <span className="eg-title-md text-[#002131]">{recognized.label}</span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">{recognized.logos.map((l) => <img key={l.src} src={l.src} alt={l.alt} className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" loading="lazy" />)}</div>
        </section>
        <section className="eg-container flex flex-col gap-10" data-testid="about-why">
          <h3 className="eg-headline-lg text-[#002131]">{why.h3}</h3>
          {why.items.map((it, i) => (
            <div key={it.h4} className={`grid md:grid-cols-2 gap-6 md:gap-7 items-center`} data-testid="about-why-item">
              <img src={it.image} alt={it.alt} className={`w-full h-[220px] sm:h-[315px] rounded-xl object-cover ${i % 2 ? 'md:order-2' : ''}`} loading="lazy" />
              <div className="flex flex-col gap-3"><h4 className="eg-title-lg text-[#002131]">{it.h4}</h4><p className="eg-body-lg text-[#002131]">{it.text}</p></div>
            </div>
          ))}
        </section>
        <section className="eg-container flex flex-col gap-10" data-testid="about-steps">
          <h2 className="eg-display-sm text-[#002131]">{steps.h2}</h2>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-12">
            {steps.items.map((s) => (
              <div key={s.n} className="flex flex-col gap-3" data-testid="about-step">
                <span className="w-10 h-10 rounded-full bg-[#308BB6] eg-title-lg text-white flex items-center justify-center">{s.n}</span>
                <p className="eg-title-lg text-[#002131]">{s.title}</p>
                <p className="eg-body-lg text-[#002131]">{s.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full bg-[#F0EEE6] py-16 md:py-24" data-testid="about-cta">
          <div className="eg-container flex flex-col items-center gap-8 text-center">
            <h2 className="eg-display-sm text-[#002131]">{cta.h2}</h2>
            <Link to={cta.href} className="eg-btn-filled h-12 px-7 eg-title-md" data-testid="about-cta-button">{cta.button}</Link>
          </div>
        </section>
        <section className="eg-container flex flex-col gap-8" data-testid="about-best">
          <div className="flex flex-col gap-4"><h2 className="eg-display-sm text-[#002131]">{best.h2}</h2><p className="eg-body-lg text-[#002131]">{best.text}</p></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {best.items.map((d) => {
              const inner = <><div className="relative aspect-[262/287] rounded-xl overflow-hidden bg-[#EAE8E0]"><img src={d.src} alt={d.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></div><h3 className="mt-3 eg-title-md text-[#002131]">{d.name}</h3></>;
              return d.href.startsWith('/') ? <Link key={d.name} to={d.href} className="group block" data-testid="about-destination">{inner}</Link> : <a key={d.name} href="#" onClick={(e) => e.preventDefault()} className="group block" data-testid="about-destination">{inner}</a>;
            })}
          </div>
        </section>
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
