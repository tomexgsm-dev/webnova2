
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingCalculator from '@/components/calculator/PricingCalculator';

const PricingCalculatorPage = () => {
  return (
    <>
      <Helmet>
        <title>Kalkulator Wyceny Projektu | WebNova</title>
        <meta 
          name="description" 
          content="Sprawdź szacunkowy koszt Twojej nowej strony internetowej, sklepu lub aplikacji w 60 sekund. Darmowa wycena online." 
        />
      </Helmet>

      <div className="min-h-screen text-slate-50 font-sans selection:bg-blue-500 selection:text-white bg-transparent flex flex-col">
        <Header />

        <main className="flex-grow pt-32 pb-20 relative">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Hero Section */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                  Wycena Online
                </span>
                <h1 className="text-4xl md:text-6xl font-bold font-sora text-white mb-6 leading-tight drop-shadow-2xl">
                  Sprawdź koszt w <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    60 sekund
                  </span>
                </h1>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Odpowiedz na kilka prostych pytań i otrzymaj wstępną wycenę Twojego projektu. 
                  Bez zobowiązań i ukrytych kosztów.
                </p>
              </motion.div>
            </div>

            {/* Calculator Component */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <PricingCalculator />
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PricingCalculatorPage;
