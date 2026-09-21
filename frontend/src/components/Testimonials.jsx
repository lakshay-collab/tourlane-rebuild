import React from 'react';
import { testimonials } from '../mock';
import TrustLine, { TrustpilotStars } from './TrustLine';
import Carousel from './Carousel';

const Avatar = ({ t }) =>
  t.avatar ? (
    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
  ) : (
    <span className="w-10 h-10 rounded-full bg-secondary-container text-onsurface t-title-md flex items-center justify-center">{t.name[0]}</span>
  );

export default function Testimonials() {
  return (
    <section className="pt-16 md:pt-20" data-testid="testimonials-section">
      <div className="tl-container flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-center gap-6">
          <h2 className="t-section text-center text-onsurface">{testimonials.heading}</h2>
          <TrustLine compact />
        </div>

        <Carousel step={384} arrowTop="110px" trackClassName="gap-4 md:gap-6 -mx-4 px-4 sm:-mx-8 sm:px-8 md:mx-0 md:px-0" testId="testimonials-carousel">
          {testimonials.items.map((t) => (
            <article key={t.name} className="shrink-0 snap-start w-[300px] md:w-[calc((100%-48px)/3)]" data-testid="testimonial-card">
              <div className="relative h-[220px] rounded-xl overflow-hidden">
                <img src={t.image} alt={t.trip} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#002131]/45 to-transparent" />
                <span className="absolute left-4 bottom-4 t-title-md text-white">{t.trip}</span>
              </div>
              <div className="px-4 mt-4">
                <div className="flex items-center gap-3">
                  <Avatar t={t} />
                  <div>
                    <h3 className="t-title-md text-onsurface">{t.name}</h3>
                    <TrustpilotStars rating={t.stars} size={16} className="mt-0.5" />
                  </div>
                </div>
                <p className="t-body-md text-onsurface mt-4">{t.text}</p>
                <p className="t-body-md text-onsurface-variant mt-4">{t.date}</p>
              </div>
            </article>
          ))}
        </Carousel>

        <div className="flex justify-center">
          <button className="btn-filled" data-testid="testimonials-cta">{testimonials.cta}</button>
        </div>
      </div>
    </section>
  );
}
