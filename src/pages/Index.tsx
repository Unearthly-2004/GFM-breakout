
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/hero/Hero';
import Features from '@/components/features/Features';
import HowItWorks from '@/components/how-it-works/HowItWorks';
import ExampleApps from '@/components/examples/ExampleApps';
import CallToAction from '@/components/cta/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <ExampleApps />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
