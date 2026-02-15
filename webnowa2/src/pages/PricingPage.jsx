
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';

const PricingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
