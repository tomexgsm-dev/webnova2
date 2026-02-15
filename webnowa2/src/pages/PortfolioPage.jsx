
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioSection from '@/components/PortfolioSection';

const PortfolioPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
