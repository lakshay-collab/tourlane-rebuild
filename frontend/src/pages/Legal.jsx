import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { terms, privacy } from '../legalData';

function LegalLayout({ data, testId }) {
  useEffect(() => { document.title = data.pageTitle; window.scrollTo(0, 0); }, [data.pageTitle]);
  return (
    <div className="eg" data-testid={testId}>
      <Header />
      <main className="eg-container pt-10 md:pt-14 pb-16 md:pb-24 max-w-[860px]">
        <h1 className="eg-display-lg text-[#002131]" data-testid="legal-title">{data.h1}</h1>
        <p className="mt-3 eg-body-sm text-[#6F777C]" data-testid="legal-updated">{data.updated}</p>
        <p className="mt-6 eg-body-lg text-[#002131]">{data.intro}</p>
        <div className="mt-10 flex flex-col gap-8">
          {data.sections.map((s) => (
            <section key={s.h2} className="flex flex-col gap-3" data-testid="legal-section">
              <h2 className="eg-headline-lg !text-[20px] !leading-7 md:!text-[24px] md:!leading-8 text-[#002131]">{s.h2}</h2>
              {s.body.map((p, i) => <p key={i} className="eg-body-lg text-[#002131]">{p}</p>)}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function Terms() {
  return <LegalLayout data={terms} testId="terms-page" />;
}

export function Privacy() {
  return <LegalLayout data={privacy} testId="privacy-page" />;
}
