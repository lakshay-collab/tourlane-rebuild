import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Features from '../components/Features';
import Ambassadors from '../components/Ambassadors';
import ComparisonTable from '../components/ComparisonTable';
import Moments from '../components/Moments';
import Steps from '../components/Steps';
import TripShowcase from '../components/TripShowcase';
import AdventureCTA from '../components/AdventureCTA';
import Experts from '../components/Experts';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-surface text-onsurface" data-testid="home-page">
      <main>
        <div className="relative">
          <Header overlay />
          <Hero />
        </div>
        <TrustBar />
        <Features />
        <Ambassadors />
        <ComparisonTable />
        <Moments />
        <Steps />
        <TripShowcase />
        <AdventureCTA />
        <Experts />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
