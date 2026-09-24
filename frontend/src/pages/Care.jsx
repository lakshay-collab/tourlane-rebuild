import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { hero, intro, graphic, assure, flex, iso, cta } from '../careData';

const Bullet = ({ children }) => <li className="flex items-start gap-3 eg-body-lg text-[#002131]"><span className="mt-1 w-5 h-5 rounded-full bg-[#308BB6] text-white flex items-center justify-center shrink-0"><Check size={12} strokeWidth={3} /></span>{children}</li>;

function Graphic() {
  const [a, f] = graphic.rows;
  return (
    <div className="rounded-2xl border border-[#C4CBD0] bg-white overflow-hidden" data-testid="care-graphic">
      <div className="px-5 py-4 border-b border-[#E4E3DB] flex items-center justify-between gap-4 flex-wrap">
        <p className="eg-title-lg text-[#002131]">{graphic.title}</p>
        <div className="flex items-center gap-5 eg-label-md text-[#174358]"><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#308BB6]" />{graphic.legend[0]}</span><span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#FBEADB] border border-[#E75E26]" />{graphic.legend[1]}</span></div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse">
          <thead><tr className="bg-[#F6F4EB] text-left">
            <th className="px-5 py-3 eg-label-md text-[#6F777C] font-semibold w-[200px]">Your departure</th>
            {graphic.columns.map((c) => <th key={c} className="px-3 py-3 eg-label-md text-[#002131] font-semibold text-center">{c}</th>)}
          </tr></thead>
          <tbody>
            <tr className="border-t border-[#E4E3DB]" data-testid="care-graphic-assure">
              <td className="px-5 py-5"><p className="eg-title-md text-[#002131]">{a.name}</p><span className="inline-flex mt-1 h-6 px-2 rounded-full bg-[#E0F7FF] eg-label-md text-[#174358]">{a.tag}</span></td>
              {a.cells.map((c) => <td key={c} className="px-2 py-5"><div className="h-12 rounded-lg bg-[#FBEADB] border border-[#E75E26]/40 flex items-center justify-center eg-label-md text-[#002131] text-center px-2">{c}</div></td>)}
            </tr>
            <tr className="border-t border-[#E4E3DB]"><td className="px-5 pb-4 eg-body-sm text-[#6F777C]" colSpan={6}>{a.note}</td></tr>
            <tr className="border-t border-[#E4E3DB]" data-testid="care-graphic-flex">
              <td className="px-5 py-5"><p className="eg-title-md text-[#002131]">{f.name}</p><span className="inline-flex mt-1 h-6 px-2 rounded-full bg-[#174358] eg-label-md text-white">{f.tag}</span></td>
              <td className="px-2 py-5" colSpan={f.free}><div className="h-12 rounded-lg bg-[#308BB6] flex items-center justify-center gap-2 eg-label-lg text-white text-center px-3"><Check size={16} strokeWidth={3} />{f.freeLabel}</div></td>
              {f.cells.map((c) => <td key={c} className="px-2 py-5"><div className="h-12 rounded-lg bg-[#FBEADB] border border-[#E75E26]/40 flex items-center justify-center eg-label-md text-[#002131] text-center px-2">{c}</div></td>)}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const Tier = ({ data, testId }) => (
  <section className="eg-container flex flex-col gap-6" data-testid={testId}>
    <h2 className="eg-display-sm text-[#002131]">{data.h2}</h2>
    <p className="eg-body-lg text-[#002131]">{data.lead}</p>
    {data.blocks.map((b) => (
      <div key={b.label} className="flex flex-col gap-3">
        <p className={`eg-body-lg text-[#002131] ${b.italic ? 'italic' : ''}`}><strong className="eg-label-lg font-bold uppercase tracking-wide mr-2">{b.label}</strong>{b.text}</p>
        {b.list && <ul className="flex flex-col gap-2 pl-1">{b.list.map((l) => <Bullet key={l}>{l}</Bullet>)}</ul>}
      </div>
    ))}
  </section>
);

export default function Care() {
  useEffect(() => { document.title = 'Hi Tours Care – flexible rebooking & cancellation | Hi Tours'; window.scrollTo(0, 0); }, []);
  return (
    <div className="eg" data-testid="care-page">
      <Header />
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-10 pt-1" data-testid="care-hero">
        <div className="grid gap-1 grid-cols-2 md:grid-cols-[2fr_1fr] h-[186px] sm:h-[282px] lg:h-[328px] rounded-t-xl overflow-hidden">
          {hero.images.map((img) => <div key={img.src} className="relative overflow-hidden bg-[#EAE8E0]"><img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" loading="eager" /></div>)}
        </div>
        <div className="mt-1 bg-[#F6F4EB] rounded-b-xl px-4 pt-5 pb-7 md:px-4 md:pr-16 md:pt-7 md:pb-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
          <div className="flex-1 flex flex-col gap-3"><h1 className="eg-display-lg text-[#002131]" data-testid="care-title">{hero.h1}</h1><p className="eg-body-lg text-[#002131]">{hero.sub}</p></div>
          <div className="flex flex-col items-center gap-2 md:shrink-0"><Link to={hero.ctaHref} className="eg-btn-filled h-12 px-6 eg-title-md w-full md:w-auto" data-testid="care-hero-cta">{hero.cta}</Link><p className="eg-body-sm text-[#174358] text-center">{hero.note}</p></div>
        </div>
      </section>
      <main className="flex flex-col gap-14 md:gap-20 mt-12 md:mt-16 pb-16 md:pb-24">
        <section className="eg-container flex flex-col gap-6" data-testid="care-intro">
          <h2 className="eg-display-sm text-[#002131]">{intro.h2}</h2>
          <p className="eg-body-lg text-[#002131]">{intro.p1}</p>
          <ul className="flex flex-col gap-3">{intro.bullets.map((b) => <Bullet key={b}>{b}</Bullet>)}</ul>
          <p className="eg-body-lg text-[#002131]">{intro.p2}</p>
          <p className="eg-body-lg text-[#002131]">{intro.p3}</p>
          <Graphic />
        </section>
        <Tier data={assure} testId="care-assure" />
        <Tier data={flex} testId="care-flex" />
        <section className="eg-container" data-testid="care-iso">
          <div className="rounded-2xl bg-[#002131] text-white p-6 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="flex flex-col gap-4">
              <span className="eg-label-lg text-[#9ACDE5] flex items-center gap-2"><ShieldCheck size={18} />{iso.eyebrow}</span>
              <h2 className="eg-headline-lg !text-[26px] !leading-8 md:!text-[32px] md:!leading-10">{iso.h2}</h2>
              <p className="eg-body-lg text-white/85">{iso.text}</p>
              <ul className="flex flex-col gap-2">{iso.points.map((p) => <li key={p} className="flex items-start gap-3 eg-body-lg"><Check size={18} className="mt-1 text-[#9ACDE5] shrink-0" />{p}</li>)}</ul>
            </div>
            <div className="bg-white rounded-xl p-5 flex items-center justify-center md:w-[220px]"><img src={iso.badge} alt="ISO 45001 certified" className="h-28 w-auto object-contain" loading="lazy" /></div>
          </div>
        </section>
        <section className="eg-container" data-testid="care-cta">
          <div className="rounded-2xl bg-[#F0EEE6] px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div><p className="eg-title-lg text-[#002131]">{cta.title}</p><p className="mt-1 eg-body-md text-[#174358]">{cta.text}</p></div>
            <Link to={cta.href} className="eg-btn-filled h-12 px-7 eg-title-md" data-testid="care-cta-button">{cta.button}</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
