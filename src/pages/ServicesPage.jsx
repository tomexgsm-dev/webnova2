
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Layers, Headphones, TrendingUp, Zap, Shield, Clock, Target, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ButtonPrimary } from '@/components/buttons';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const services = [
  {
    icon: Globe,
    title: 'Strony Internetowe',
    description: 'Profesjonalne strony wizytówkowe i korporacyjne, które skutecznie prezentują Twoją markę w internecie.',
    features: [
      'Responsywny design dostosowany do wszystkich urządzeń',
      'Optymalizacja SEO dla lepszej widoczności w Google',
      'Integracja z systemem CMS dla łatwej edycji treści',
      'Błyskawiczne czasy ładowania (Core Web Vitals)',
      'Indywidualny, nowoczesny design dopasowany do marki',
      'Integracja z Google Analytics i narzędziami marketingowymi'
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ShoppingCart,
    title: 'Sklepy Internetowe',
    description: 'Zaawansowane platformy e-commerce stworzone z myślą o maksymalizacji sprzedaży i konwersji.',
    features: [
      'Integracja z popularnymi bramkami płatności (PayU, Przelewy24, Stripe)',
      'Zaawansowany system zarządzania produktami i magazynem',
      'Panel klienta z historią zamówień i obsługą konta',
      'Szczegółowa analityka sprzedaży i zachowań użytkowników',
      'Automatyczna integracja z firmami kurierskimi',
      'System rabatów, kuponów i promocji'
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Layers,
    title: 'Aplikacje Webowe',
    description: 'Dedykowane systemy i aplikacje SaaS rozwiązujące konkretne problemy biznesowe Twojej firmy.',
    features: [
      'Spersonalizowane dashboardy i panele administracyjne',
      'Integracje API z zewnętrznymi systemami i usługami',
      'Aktualizacje danych w czasie rzeczywistym',
      'Zaawansowane zarządzanie użytkownikami i uprawnieniami',
      'Skalowalna architektura gotowa na rozwój',
      'Automatyzacja procesów biznesowych'
    ],
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    icon: Headphones,
    title: 'Opieka Techniczna',
    description: 'Kompleksowe wsparcie techniczne zapewniające nieprzerwane działanie Twojej strony lub aplikacji.',
    features: [
      'Wsparcie techniczne dostępne 24/7',
      'Regularne aktualizacje bezpieczeństwa i funkcjonalności',
      'Ciągły monitoring wydajności i bezpieczeństwa',
      'Optymalizacja szybkości i wydajności strony',
      'Automatyczne systemy backupu i odzyskiwania danych',
      'Proaktywne rozwiązywanie problemów przed ich wystąpieniem'
    ],
    gradient: 'from-teal-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'SEO i Optymalizacja',
    description: 'Kompleksowe działania SEO zwiększające widoczność Twojej strony w wynikach wyszukiwania.',
    features: [
      'Szczegółowa analiza słów kluczowych i konkurencji',
      'Optymalizacja on-page (treść, meta tagi, struktura)',
      'Techniczna optymalizacja SEO (szybkość, mobile-first)',
      'Optymalizacja Core Web Vitals i PageSpeed',
      'Konfiguracja Google Analytics i Search Console',
      'Regularne raporty i monitoring pozycji'
    ],
    gradient: 'from-indigo-500 to-blue-500'
  }
];

const whyWebNova = [
  {
    icon: Award,
    title: 'Doświadczenie i Ekspertyza',
    description: 'Wieloletnie doświadczenie w tworzeniu rozwiązań webowych dla różnorodnych branż. Każdy projekt realizowany z najwyższą starannością i dbałością o detale.'
  },
  {
    icon: Target,
    title: 'Indywidualne Podejście',
    description: 'Każdy projekt jest unikalny. Dokładnie analizujemy Twoje potrzeby biznesowe i tworzymy rozwiązania idealnie dopasowane do Twoich celów.'
  },
  {
    icon: Zap,
    title: 'Nowoczesne Technologie',
    description: 'Wykorzystujemy najnowsze, sprawdzone technologie i frameworki, które gwarantują szybkość, bezpieczeństwo i skalowalność Twojego projektu.'
  },
  {
    icon: Clock,
    title: 'Transparentność i Komunikacja',
    description: 'Stały kontakt i pełna transparentność na każdym etapie realizacji. Zawsze wiesz, na jakim etapie jest Twój projekt i jakie są następne kroki.'
  },
  {
    icon: Shield,
    title: 'Wsparcie Posprzedażowe',
    description: 'Nie kończymy współpracy po wdrożeniu. Oferujemy kompleksowe wsparcie techniczne, szkolenia i pomoc w rozwoju Twojego projektu.'
  }
];

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Profesjonalne Strony WWW, Sklepy Internetowe i Aplikacje Webowe | WebNova</title>
        <meta 
          name="description" 
          content="WebNova - kompleksowe usługi tworzenia stron internetowych, sklepów online, aplikacji webowych. Nowoczesny design, SEO, wsparcie techniczne. Sprawdź naszą ofertę!" 
        />
      </Helmet>

      <div className="bg-transparent min-h-screen text-slate-50 font-sans">
        <Header />

        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none" />
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-block px-4 py-2 bg-blue-500/10 backdrop-blur-sm text-blue-400 border border-blue-500/20 rounded-full text-sm font-semibold mb-6 shadow-glow">
                Kompleksowa Oferta WebNova
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-sora text-white mb-6 drop-shadow-2xl leading-tight">
                Profesjonalne Strony WWW, Sklepy Internetowe i{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Aplikacje Webowe
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
                WebNova to więcej niż agencja webowa. To partner, który pomaga firmom rozwijać się w świecie cyfrowym dzięki nowoczesnym, skutecznym rozwiązaniom technologicznym.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl max-w-5xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-sora text-white mb-6 text-center">
                Nasza Misja
              </h2>
              <p className="text-slate-200 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                W WebNova wierzymy, że każda firma zasługuje na profesjonalną obecność w internecie. 
                Tworzymy rozwiązania, które łączą najnowsze technologie z intuicyjnym designem, 
                pomagając naszym klientom osiągać realne cele biznesowe. Nie tworzymy tylko stron – 
                budujemy narzędzia do rozwoju Twojego biznesu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-sora text-white mb-6 drop-shadow-lg">
                Nasze <span className="text-blue-400">Usługi</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-200 text-lg max-w-2xl mx-auto">
                Kompleksowe rozwiązania webowe dostosowane do potrzeb Twojego biznesu
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="group bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold font-sora text-white mb-4 drop-shadow-sm">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-slate-300 group-hover:text-slate-200 transition-colors">
                          <CheckCircle2 className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why WebNova Section */}
        <section className="py-20 relative">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-sora text-white mb-6 drop-shadow-lg">
                Dlaczego <span className="text-blue-400">WebNova?</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-200 text-lg max-w-2xl mx-auto">
                Poznaj powody, dla których setki firm wybrały WebNova jako swojego partnera technologicznego
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyWebNova.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-sora text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-12 md:p-16 text-center border border-white/10 shadow-2xl max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-sora text-white mb-6 drop-shadow-lg">
                Gotowy na nowy <span className="text-blue-400">projekt?</span>
              </h2>
              <p className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Skorzystaj z formularza kontaktowego, aby otrzymać darmową wycenę i konsultację Twojego projektu.
              </p>
              <ButtonPrimary 
                className="px-8 py-4 text-lg group"
                onClick={() => navigate('/contact')}
              >
                Zamów stronę internetową
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </ButtonPrimary>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
