
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Eye, 
  Database, 
  Wrench, 
  TrendingUp, 
  Clock, 
  Lock, 
  Headphones, 
  RefreshCw, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ButtonPrimary, ButtonSecondary } from '@/components/buttons';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const TechnicalSupportPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: RefreshCw,
      title: "Regularne aktualizacje silnika i wtyczek",
      desc: "Zapewniamy bezpieczeństwo i stabilność poprzez systematyczne aktualizacje oprogramowania, eliminując luki bezpieczeństwa.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Eye,
      title: "Monitoring dostępności strony 24/7",
      desc: "Czuwamy nad Twoją witryną całą dobę. W razie jakichkolwiek problemów reagujemy natychmiast, minimalizując przestoje.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Cykliczne kopie zapasowe",
      desc: "Tworzymy regularne backupy Twoich danych. W krytycznej sytuacji przywrócimy Twoją stronę do działania w mgnieniu oka.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Wrench,
      title: "Szybka naprawa ewentualnych usterek",
      desc: "Napotkałeś błąd? Nasz zespół techniczny szybko zdiagnozuje i rozwiąże problem, aby Twoi klienci nie odczuli niedogodności.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Rozwój funkcjonalności w miarę wzrostu biznesu",
      desc: "Twoja firma rośnie? Pomożemy Ci rozbudować stronę o nowe funkcje, moduły i integracje, dostosowane do nowych potrzeb.",
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Szybka reakcja na zgłoszenia",
      desc: "Priorytetowe traktowanie Twoich problemów technicznych."
    },
    {
      icon: Lock,
      title: "Pełne bezpieczeństwo i stabilność strony",
      desc: "Ochrona przed atakami i awariami."
    },
    {
      icon: Headphones,
      title: "Profesjonalne wsparcie techniczne",
      desc: "Dostęp do ekspertów, którzy znają Twój system."
    },
    {
      icon: RefreshCw,
      title: "Regularne aktualizacje i monitoring",
      desc: "Strona zawsze aktualna i pod kontrolą."
    },
    {
      icon: TrendingUp,
      title: "Możliwość rozwoju i rozbudowy witryny",
      desc: "Elastyczne podejście do zmian w projekcie."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Opieka Techniczna i Wsparcie Stron WWW | WebNova</title>
        <meta 
          name="description" 
          content="Zapewniamy kompleksową opiekę techniczną stron www. Monitoring 24/7, aktualizacje, kopie zapasowe i szybkie wsparcie. Zadbaj o bezpieczeństwo swojego biznesu." 
        />
      </Helmet>

      <div className="min-h-screen text-slate-50 font-sans selection:bg-blue-500 selection:text-white bg-transparent flex flex-col">
        <Header />

        <main className="flex-grow pt-32 pb-20 relative">
          
          {/* Hero Section */}
          <div className="container mx-auto px-4 relative z-10 mb-20 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="inline-block px-4 py-2 bg-emerald-500/10 backdrop-blur-sm text-emerald-400 border border-emerald-500/20 rounded-full text-sm font-semibold mb-6 shadow-glow">
                Bezpieczeństwo i Stabilność
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold font-sora text-white mb-6 drop-shadow-2xl leading-tight"
              >
                Opieka Techniczna <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                  Spokój ducha Twojego biznesu
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-300 leading-relaxed drop-shadow-md max-w-3xl mx-auto mb-10"
              >
                Twoja strona internetowa powinna działać szybko, bezpiecznie i niezawodnie każdego dnia. 
                Dlatego oferujemy kompleksową opiekę techniczną, która zapewnia stabilność, aktualność i pełną ochronę Twojej witryny. 
                Dbamy o wszystkie techniczne aspekty, abyś Ty mógł skupić się na prowadzeniu biznesu.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <ButtonPrimary 
                  className="w-full sm:w-auto px-8 py-4 shadow-lg shadow-emerald-500/20 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500"
                  onClick={() => navigate('/contact')}
                >
                  Skontaktuj się z nami <ArrowRight className="ml-2 w-5 h-5" />
                </ButtonPrimary>
                <ButtonSecondary 
                  className="w-full sm:w-auto px-8 py-4"
                  onClick={() => navigate('/contact')}
                >
                  Dowiedz się więcej
                </ButtonSecondary>
              </motion.div>
            </motion.div>
          </div>

          {/* Services Grid */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4 relative z-10">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-5xl font-bold font-sora text-white mb-4">
                  Co obejmuje nasza <span className="text-emerald-500">opieka techniczna?</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Kompleksowe wsparcie dla Twojej strony internetowej.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 shadow-lg relative overflow-hidden group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold font-sora text-white mb-4 drop-shadow-sm">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="py-20 relative my-10">
            <div className="absolute inset-0 bg-emerald-900/10 backdrop-blur-sm -z-10" />
            <div className="container mx-auto px-4 text-center relative z-10">
               <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
               >
                 <ShieldCheck className="w-20 h-20 text-emerald-400 mx-auto mb-6 opacity-80" />
                 <h2 className="text-3xl md:text-4xl font-bold font-sora text-white mb-6">
                   Z nami Twoja strona działa <br className="hidden md:block" />
                   <span className="text-emerald-400">bez przerw, bez stresu i bez niespodzianek.</span>
                 </h2>
               </motion.div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4 relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold font-sora text-center text-white mb-16"
              >
                Dlaczego warto wybrać <span className="text-blue-500">WebNova?</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-emerald-500/40 hover:bg-slate-800/60 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                        <benefit.icon size={24} />
                      </div>
                      <h3 className="font-bold text-white text-lg leading-tight">{benefit.title}</h3>
                    </div>
                    <p className="text-slate-400 pl-16 text-sm">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="container mx-auto px-4 relative z-10 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900/90 to-emerald-900/40 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

              <h2 className="text-3xl md:text-4xl font-bold font-sora text-white mb-6">
                Chcesz zapewnić swojej stronie pełną ochronę?
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                Skontaktuj się z nami — przygotujemy pakiet opieki dopasowany do Twoich potrzeb i budżetu.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <ButtonPrimary 
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-emerald-500/20"
                  onClick={() => navigate('/contact')}
                >
                  Skontaktuj się z nami <ArrowRight className="ml-2 w-5 h-5" />
                </ButtonPrimary>
                
                <ButtonSecondary 
                  className="w-full sm:w-auto px-8 py-4"
                  onClick={() => navigate('/contact')}
                >
                  Dowiedz się więcej
                </ButtonSecondary>
              </div>
            </motion.div>
          </div>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default TechnicalSupportPage;
