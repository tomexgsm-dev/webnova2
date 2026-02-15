
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PriceCalculator from '@/components/advanced-pricing/PriceCalculator';
import ServicePackages from '@/components/advanced-pricing/ServicePackages';
import SupportSubscriptions from '@/components/advanced-pricing/SupportSubscriptions';

const AdvancedPricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Cennik i Kalkulator Wyceny | WebNova</title>
        <meta 
          name="description" 
          content="Sprawdź ceny stron internetowych i sklepów. Skorzystaj z zaawansowanego kalkulatora lub wybierz gotowy pakiet usług." 
        />
      </Helmet>

      <div className="min-h-screen text-slate-50 font-sans selection:bg-blue-500 selection:text-white bg-transparent flex flex-col">
        <Header />

        <main className="flex-grow pt-32 pb-20 relative">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="container mx-auto px-4 relative z-10">
            
            {/* HERO SECTION */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                  Transparentne Ceny
                </span>
                <h1 className="text-4xl md:text-6xl font-bold font-sora text-white mb-6 leading-tight drop-shadow-2xl">
                  Wycena Projektu <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Szyta na Miarę
                  </span>
                </h1>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Skorzystaj z naszego konfiguratora, aby otrzymać precyzyjną wycenę, lub wybierz jeden ze sprawdzonych pakietów wdrożeniowych.
                </p>
              </motion.div>
            </div>

            {/* CALCULATOR SECTION */}
            <section className="mb-32">
              <div className="bg-slate-900/40 backdrop-blur-xl rounded-3xl border border-white/10 p-6 md:p-10 shadow-2xl">
                <PriceCalculator />
              </div>
            </section>

            {/* PACKAGES SECTION */}
            <ServicePackages />

            {/* SUPPORT SECTION */}
            <SupportSubscriptions />
            
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AdvancedPricingPage;
