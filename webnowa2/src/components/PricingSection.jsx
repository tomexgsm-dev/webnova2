
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { ButtonPrimary, ButtonSecondary } from '@/components/buttons';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const packages = [
  {
    name: 'START',
    price: '1 250',
    description: 'Idealny start dla małych firm i freelancerów od WebNova.',
    features: [
      'Strona One-Page', 
      'RWD (Mobile Ready)', 
      'Podstawowe SEO', 
      'Formularz kontaktowy',
      'Hosting na rok gratis'
    ],
    missing: ['Panel CMS', 'Blog', 'Sklep'],
    popular: false,
    delay: 0
  },
  {
    name: 'BUSINESS',
    price: '2 750',
    description: 'Kompletna strona firmowa z możliwością edycji treści.',
    features: [
      'Do 7 podstron', 
      'System CMS (WordPress/Custom)', 
      'Zaawansowane SEO', 
      'Blog firmowy',
      'Integracja Social Media',
      'Certyfikat SSL',
      'Optymalizacja szybkości'
    ],
    missing: [],
    popular: true,
    delay: 0.1
  },
  {
    name: 'PREMIUM',
    price: '6 000+',
    description: 'Dedykowane rozwiązania WebNova dla wymagających klientów.',
    features: [
      'Indywidualny projekt graficzny', 
      'Sklep / Aplikacja Webowa', 
      'Integracje API / CRM', 
      'Panel klienta B2B/B2C', 
      'Pełna analityka i raporty',
      'Wsparcie priorytetowe 24/7'
    ],
    missing: [],
    popular: false,
    delay: 0.2
  }
];

const PricingSection = () => {
  return (
    // Updated background to transparent to let global background show through
    <section id="pricing" className="py-24 bg-transparent relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-sora text-white mb-6 drop-shadow-lg">
            Przejrzysty <span className="text-blue-400">cennik WebNova</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-200 text-lg drop-shadow-md">
            Inwestycja, która zwraca się szybciej niż myślisz. Bez ukrytych kosztów.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: pkg.delay, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-slate-800/80 backdrop-blur-xl border-blue-500 shadow-2xl shadow-blue-900/40 z-10 scale-105' 
                  : 'bg-slate-900/60 backdrop-blur-md border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
                  Najczęściej wybierany
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-slate-300 text-sm mb-6 h-10">{pkg.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white tracking-tight drop-shadow-sm">{pkg.price}</span>
                  <span className="text-slate-400 ml-2 font-medium">PLN</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start text-sm text-slate-200">
                    <Check className="w-5 h-5 text-blue-400 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
                 {pkg.missing.map((feature, idx) => (
                  <div key={idx} className="flex items-start text-sm text-slate-500">
                    <X className="w-5 h-5 text-slate-600 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {pkg.popular ? (
                <ButtonPrimary className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Wybieram ten pakiet
                </ButtonPrimary>
              ) : (
                <ButtonSecondary className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Zapytaj o szczegóły
                </ButtonSecondary>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
