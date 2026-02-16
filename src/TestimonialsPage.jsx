
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';

const TestimonialsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
