
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Cpu, 
  Settings, 
  Globe, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Calendar, 
  LayoutDashboard, 
  Briefcase, 
  GraduationCap, 
  Cloud, 
  BarChart, 
  Webhook,
  Database,
  Server,
  Layers,
  ArrowRight,
  Code2,
  Box,
  Truck
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ButtonPrimary, ButtonSecondary } from '@/components/buttons';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const WebApplicationsPage = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Cpu,
      title: "Automatyzacja pracy",
      desc: "Zastąp ręczne procesy i arkusze Excel automatycznym systemem, który oszczędza setki godzin pracy rocznie.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Dedykowane funkcjonalności",
      desc: "Rozwiązanie w 100% dopasowane do specyfiki Twojej firmy, bez zbędnych funkcji gotowych systemów pudełkowych.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Dostęp online 24/7",
      desc: "Zarządzaj firmą z dowolnego miejsca na świecie i z dowolnego urządzenia z dostępem do internetu.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: ShieldCheck,
      title: "Bezpieczeństwo danych",
      desc: "Zaawansowane szyfrowanie, regularne kopie zapasowe i ochrona przed nieautoryzowanym dostępem.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Skalowalność",
      desc: "System rośnie razem z Twoją firmą. Łatwa rozbudowa o nowe moduły w miarę rozwoju biznesu.",
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  const examples = [
    { icon: Users, title: "Systemy CRM", desc: "Zarządzanie relacjami z klientami" },
    { icon: Calendar, title: "Platformy rezerwacji", desc: "Automatyzacja wizyt i spotkań" },
    { icon: LayoutDashboard, title: "Panele administracyjne", desc: "Zarządzanie danymi i zasobami" },
    { icon: Briefcase, title: "Systemy zamówień B2B", desc: "Platformy hurtowe dla kontrahentów" },
    { icon: GraduationCap, title: "Platformy edukacyjne", desc: "Systemy LMS i kursy online" },
    { icon: Cloud, title: "Aplikacje SaaS", desc: "Oprogramowanie jako usługa" },
    { icon: BarChart, title: "Systemy raportowania", desc: "Analityka i wizualizacja danych" },
    { icon: Webhook, title: "Integracje API", desc: "Łączenie zewnętrznych systemów" }
  ];

  const technologies = [
    { icon: Code2, title: "Frontend", desc: "React, Next.js, TailwindCSS" },
    { icon: Server, title: "Backend", desc: "Node.js, Supabase, Python" },
    { icon: Database, title: "Bazy danych", desc: "PostgreSQL, MongoDB, Redis" },
    { icon: Webhook, title: "Integracje", desc: "Stripe, Google API, OpenAI" },
    { icon: Layers, title: "Subskrypcje", desc: "Płatności cykliczne i fakturowanie" },
    { icon: Cloud, title: "Hosting", desc: "Vercel, AWS, chmura obliczeniowa" }
  ];

  const industries = [
    { icon: Briefcase, title: "Firmy usługowe", desc: "Zarządzanie zleceniami" },
    { icon: Settings, title: "Startupy", desc: "Budowa MVP i skalowanie" },
    { icon: Box, title: "E-commerce", desc: "Dedykowane rozwiązania" },
    { icon: GraduationCap, title: "Branża szkoleniowa", desc: "Platformy kursowe" },
    { icon: Calendar, title: "Rezerwacje", desc: "Salony, gabinety, hotele" },
    { icon: Truck, title: "Logistyka", desc: "Zarządzanie flotą i dostawami" }
  ];

  return (
    <>
      <Helmet>
        <title>Aplikacje Webowe i Systemy Dedykowane | WebNova</title>
        <meta 
          name="description" 
          content="Tworzymy dedykowane aplikacje webowe, systemy CRM/ERP i platformy SaaS. Automatyzacja procesów i rozwiązania szyte na miarę dla Twojego biznesu." 
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
              <motion.div variants={fadeInUp} className="inline-block px-4 py-2 bg-blue-500/10 backdrop-blur-sm text-blue-400 border border-blue-500/20 rounded-full text-sm font-semibold mb-6 shadow-glow">
                Web Development Premium
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold font-sora text-white mb-6 drop-shadow-2xl leading-tight"
              >
                Aplikacje webowe <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  szyte na miarę
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-300 leading-relaxed drop-shadow-md max-w-3xl mx-auto mb-10"
              >
                Tworzę nowoczesne aplikacje webowe, które automatyzują procesy, oszczędzają czas i rozwijają Twój biznes online. 
                Projektuję rozwiązania dopasowane do konkretnych potrzeb firmy — od prostych paneli zarządzania po rozbudowane platformy SaaS.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <ButtonPrimary 
                  className="w-full sm:w-auto px-8 py-4 shadow-lg shadow-blue-500/20"
                  onClick={() => navigate('/contact')}
                >
                  Zamów aplikację webową <ArrowRight className="ml-2 w-5 h-5" />
                </ButtonPrimary>
                <ButtonSecondary 
                  className="w-full sm:w-auto px-8 py-4"
                  onClick={() => navigate('/contact')}
                >
                  Poproś o wycenę
                </ButtonSecondary>
              </motion.div>
            </motion.div>
          </div>

          {/* Benefits Section */}
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
                  Co zyskujesz dzięki <span className="text-blue-500">aplikacji webowej?</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Inwestycja, która zwraca się w oszczędności czasu i efektywności.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-sora text-white mb-3">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4 relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold font-sora text-center text-white mb-12"
              >
                Przykłady aplikacji, które <span className="text-purple-400">tworzę</span>
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {examples.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:bg-slate-800/60 hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-colors">
                        <item.icon size={20} />
                      </div>
                      <h3 className="font-bold text-white text-sm">{item.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400 pl-14">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-sora text-white mb-4">Technologie i możliwości</h2>
                  <p className="text-slate-400">Korzystamy z najnowocześniejszych rozwiązań na rynku.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/50 border border-white/5"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                        <tech.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{tech.title}</h4>
                        <p className="text-sm text-slate-400">{tech.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Target Audience */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-3xl font-bold font-sora text-center text-white mb-12">
                Dla kogo są <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">aplikacje webowe?</span>
              </h2>
              
              <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                {industries.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-gradient-to-b from-slate-900/80 to-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 text-center group"
                  >
                    <div className="w-12 h-12 mx-auto bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors shadow-lg">
                      <item.icon className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="container mx-auto px-4 relative z-10 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-sora text-white mb-6">
                Zautomatyzuj swój biznes już dziś
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                Skontaktuj się z nami i opowiedz o swoim pomyśle. Przygotujemy analizę i wycenę wdrożenia dedykowanej aplikacji.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <ButtonPrimary 
                  className="w-full sm:w-auto px-8 py-4"
                  onClick={() => navigate('/contact')}
                >
                  Zamów aplikację webową
                </ButtonPrimary>
                
                <ButtonSecondary 
                  className="w-full sm:w-auto px-8 py-4"
                  onClick={() => navigate('/contact')}
                >
                  Poproś o wycenę
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

export default WebApplicationsPage;
