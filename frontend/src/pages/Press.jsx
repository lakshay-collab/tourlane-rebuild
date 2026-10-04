import React, { useEffect } from 'react';
import { Newspaper, Mail, Phone, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { press } from '../pressData';

export default function Press() {
  useEffect(() => { document.title = press.pageTitle; window.scrollTo(0, 0); }, []);
  return (
    <div className="eg" data-testid="press-page">
      <Header />
      <main className="eg-container pt-10 md:pt-14 pb-16 md:pb-24">
        <div className="max-w-[820px]">
          <span className="inline-flex items-center gap-2 eg-label-lg text-[#308BB6]"><Newspaper size={18} /> Press &amp; Media</span>
          <h1 className="mt-3 eg-display-lg text-[#002131]" data-testid="press-title">{press.h1}</h1>
          <p className="mt-5 eg-body-lg text-[#002131]">{press.intro}</p>
        </div>

        <section className="mt-12" data-testid="press-stats">
          <h2 className="eg-headline-lg !text-[20px] md:!text-[24px] text-[#002131]">{press.statsHeading}</h2>
          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {press.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-[#F6F4EB] p-6 flex flex-col gap-1" data-testid="press-stat">
                <span className="eg-display-sm text-[#002131]">{s.value}</span>
                <span className="eg-body-md text-[#174358]">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14" data-testid="press-featured">
          <h2 className="eg-headline-lg !text-[20px] md:!text-[24px] text-[#002131]">{press.featuredHeading}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {press.featured.map((f) => (
              <span key={f} className="inline-flex items-center h-11 px-5 rounded-full border border-[#C4CBD0] bg-white eg-title-md text-[#002131]" data-testid="press-outlet">{f}</span>
            ))}
          </div>
        </section>

        <section className="mt-14" data-testid="press-releases">
          <h2 className="eg-headline-lg !text-[20px] md:!text-[24px] text-[#002131]">{press.releasesHeading}</h2>
          <div className="mt-6 flex flex-col gap-4">
            {press.releases.map((r) => (
              <article key={r.title} className="rounded-2xl border border-[#C4CBD0] bg-white p-6 md:p-7 flex flex-col gap-3" data-testid="press-release">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex h-7 px-3 items-center rounded-full bg-[#E0F7FF] eg-label-md text-[#174358]">{r.tag}</span>
                  <span className="eg-body-sm text-[#6F777C]">{r.date}</span>
                </div>
                <h3 className="eg-title-lg text-[#002131]">{r.title}</h3>
                <p className="eg-body-lg text-[#002131]">{r.excerpt}</p>
                <button className="inline-flex items-center gap-2 eg-label-lg text-[#308BB6] self-start hover:underline" data-testid="press-release-link">Read more <ArrowRight size={16} /></button>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14" data-testid="press-contact">
          <div className="rounded-2xl bg-[#002131] text-white p-6 md:p-10 flex flex-col gap-4 max-w-[820px]">
            <h2 className="eg-headline-lg !text-[22px] md:!text-[28px]">{press.contactHeading}</h2>
            <p className="eg-body-lg text-white/85">{press.contactText}</p>
            <p className="eg-title-md">{press.contactName}</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <a href={`mailto:${press.contactEmail}`} className="inline-flex items-center gap-2 eg-body-lg text-[#9ACDE5] hover:underline" data-testid="press-email"><Mail size={18} />{press.contactEmail}</a>
              <a href={`tel:${press.contactPhone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 eg-body-lg text-[#9ACDE5] hover:underline" data-testid="press-phone"><Phone size={18} />{press.contactPhone}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
