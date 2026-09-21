import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Features from '../components/Features';
import ComparisonTable from '../components/ComparisonTable';
import Steps from '../components/Steps';
import TripShowcase from '../components/TripShowcase';
import AdventureCTA from '../components/AdventureCTA';
import Testimonials from '../components/Testimonials';
import Destinations from '../components/Destinations';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-cream">
      <Header />
      <Hero />
      <TrustBar />
      <Features />
      <ComparisonTable />
      <Steps />
      <TripShowcase />
      <AdventureCTA />
      <Testimonials />
      <Destinations />
      <Newsletter />
      <Footer />
    </div>
  );
}
