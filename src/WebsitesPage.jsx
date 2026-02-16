
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Smartphone, 
  Search, 
  Globe, 
  Lock, 
  Zap, 
  PenTool, 
  Share2, 
  MapPin, 
  Layout, 
  Calendar, 
  CreditCard, 
  Languages, 
  Database,
  Briefcase,
  Users,
  UserCircle,
  Building2,
  Rocket,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ButtonPrimary, ButtonSecondary } from '@/components/buttons';

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const WebsitesPage = () => {
  const packageFeatures = [
    { icon: PenTool, text: "Indywidualny projekt graficzny UI/UX" },
    { icon: Layout, text: "Strona główna + podstrony" },
    { icon: Smartphone, text: "Pełna responsywność (RWD)" },
    { icon: Globe, text: "Formularze kontaktowe" },
    { icon: Share2, text: "Integracje social media" },
    { icon: MapPin, text: "Google Maps" },
    { icon: Lock, text: "Certyfikat SSL (Bezpieczeństwo)" },
    { icon: Zap, text: "Optymalizacja szybkości" }
  ];

  const additionalFeatures = [
    { icon: Layout, text: "Blog / Aktualności" },
    { icon: Briefcase, text: "Portfolio realizacji" },
    { icon: Calendar, text: "System rezerwacji" },
    { icon: CreditCard, text: "Płatności online" },
    { icon: Languages, text: "Wersje językowe" },
    { icon: Database, text: "Integracje API" }
  ];

  const seoFeatures = [
    { icon: Search, text: "Optymalizacja nagłówków (H1-H6)" },
    { icon: Layout, text: "Struktura SEO Friendly" },
    { icon: Zap, text: "Szybkość ładowania (Core Web Vitals)" },
    { icon: Smartphone, text: "Optymalizacja Mobile First" },
    { icon: Globe, text: "Przygotowanie pod Google Ads" }
  ];

  const targetAudience = [
    { icon: MapPin, text: "Firmy Lokalne", desc: "Zdobądź klientów w swojej okolicy" },
    { icon: Building2, text: "Usługi B2B", desc: "Buduj profesjonalny wizerunek partnera" },
    { icon: UserCircle, text: "Freelancerzy", desc: "Pokaż swoje portfolio światu" },
    { icon: Users, text: "Marki Osobiste", desc: "Wyróżnij się jako ekspert" },
    { icon: Rocket, text: "Startupy", desc: "Szybki start z MVP lub landing page" }
  ];

  return (
    <>
      <Helmet>
        <title>Profesjonalne Strony Internetowe | WebNova</title>
        <meta 
          name="description" 
          content="Tworzymy profesjonalne strony internetowe, które sprzedają. Indywidualny projekt, responsywność, SEO i szybkość działania. Sprawdź naszą ofertę!" 
        />
      </Helmet>

      <div className="min-h-screen text-slate-50 font-sans selection:bg-blue-500 selection:text-white bg-transparent flex flex-col">
        <Header />

        <main className="flex-grow pt-32 pb-20 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <div className="container mx-auto px-4 relative z-10">
            
            {/* 1. HERO SECTION */}
            <div className="text-center max-w-5xl mx-auto mb-24">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                  Web Development
                </motion.span>
                <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold font-sora text-white mb-8 leading-tight drop-shadow-2xl">
                  Profesjonalne strony internetowe,<br/>
                  które <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">rozwijają Twój biznes</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Nie tworzymy tylko "stron wizytówek". Projektujemy skuteczne narzędzia marketingowe, 
                  które budują zaufanie, przyciągają klientów i pracują na Twój sukces 24/7.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <ButtonPrimary 
                    className="px-8 py-4 text-lg w-full sm:w-auto"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }) || (window.location.href = '/#contact')}
                  >
                    Zamów stronę internetową <ArrowRight className="ml-2 w-5 h-5" />
                  </ButtonPrimary>
                  <ButtonSecondary 
                    className="px-8 py-4 text-lg w-full sm:w-auto"
                    onClick={() => window.location.href = '/pricing-calculator'}
                  >
                    Poproś o wycenę
                  </ButtonSecondary>
                </motion.div>
              </motion.div>
            </div>

            {/* 2. PACKAGE CONTENTS */}
            <section className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-sora text-white mb-4">Co otrzymujesz w pakiecie?</h2>
                <p className="text-slate-400">Kompleksowe wdrożenie bez ukrytych kosztów.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {packageFeatures.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-900/40 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center mb-4 text-blue-400">
                      <item.icon size={24} />
                    </div>
                    <span className="font-medium text-slate-200">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 3. ADDITIONAL FEATURES */}
            <section className="mb-24">
              <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 to-transparent pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-sora text-white mb-6">
                      Funkcje <span className="text-purple-400">Dodatkowe</span>
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                      Twoja firma rośnie? Twoja strona rośnie razem z nią. 
                      Możemy rozbudować projekt o zaawansowane moduły, które usprawnią Twoją pracę.
                    </p>
                    <ButtonSecondary onClick={() => window.location.href = '/advanced-pricing'}>
                      Zobacz pełny cennik funkcji
                    </ButtonSecondary>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {additionalFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-950/50 p-4 rounded-xl border border-white/5 flex items-center gap-3 hover:bg-slate-800/50 transition-colors"
                      >
                        <feature.icon className="text-purple-400 w-5 h-5 shrink-0" />
                        <span className="text-sm font-medium text-white">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. SEO SECTION */}
            <section className="mb-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="grid gap-4">
                    {seoFeatures.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/30 border border-white/10 hover:border-emerald-500/30 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                          <CheckCircle2 size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm md:text-base">{item.text}</h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 text-left">
                  <span className="text-emerald-400 font-semibold tracking-wider text-sm mb-2 block uppercase">Widoczność w sieci</span>
                  <h2 className="text-3xl md:text-5xl font-bold font-sora text-white mb-6">
                    SEO i widoczność <br/>
                    <span className="text-emerald-400">w Google</span>
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    Piękna strona to za mało - musi być widoczna. Nasze projekty są zoptymalizowane pod kątem wyszukiwarek od pierwszej linijki kodu.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Dbamy o techniczne aspekty SEO, szybkość ładowania i poprawną strukturę danych, aby Google pokochało Twoją nową witrynę tak samo jak Twoi klienci.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. TARGET AUDIENCE */}
            <section className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-sora text-white mb-4">Dla kogo tworzymy?</h2>
                <p className="text-slate-400">Rozwiązania dopasowane do skali Twojego biznesu.</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6">
                {targetAudience.map((target, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)] bg-gradient-to-b from-slate-900/60 to-slate-900/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center group"
                  >
                    <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors shadow-lg">
                      <target.icon className="text-white w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{target.text}</h3>
                    <p className="text-sm text-slate-400 leading-snug">{target.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WebsitesPage;
