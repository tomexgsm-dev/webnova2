
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  Palette, 
  Code2, 
  Rocket, 
  Headphones,
  Smartphone,
  CheckCircle2,
  Search,
  Zap,
  Lock,
  Monitor,
  ShoppingBag,
  Database,
  ShieldCheck,
  PenTool
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ButtonPrimary } from '@/components/buttons';
import PricingSection from '@/components/PricingSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';

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

const HomePage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Monitor,
      title: "Strony Internetowe",
      description: "Profesjonalne wizytówki online, które sprzedają Twoje usługi 24/7.",
      points: [
        "Budowanie zaufania i wizerunku profesjonalisty",
        "Szczegółowa prezentacja oferty i portfolio",
        "Szybkość ładowania i bezpieczeństwo (SSL)",
        "Pełna responsywność (RWD) – wyglądają świetnie na każdym ekranie"
      ],
      gradient: "from-blue-500 to-cyan-500",
      link: "/websites"
    },
    {
      icon: ShoppingBag,
      title: "Sklepy Internetowe",
      description: "Skuteczne platformy e-commerce zaprojektowane do generowania sprzedaży.",
      points: [
        "Wdrożenia oparte o WooCommerce lub rozwiązania dedykowane",
        "Intuicyjny panel zarządzania produktami i zamówieniami",
        "Integracje z płatnościami (BLIK, karty) i kurierami",
        "Optymalizacja ścieżki zakupowej pod kątem konwersji"
      ],
      gradient: "from-purple-500 to-pink-500",
      link: "/online-stores"
    },
    {
      icon: Database,
      title: "Aplikacje Webowe",
      description: "Zaawansowane systemy dedykowane usprawniające procesy w firmie.",
      points: [
        "Systemy rezerwacji wizyt i usług online",
        "Interaktywne panele klienta i strefy użytkownika",
        "Systemy CRM/ERP dedykowane dla Twojej branży",
        "Automatyzacja powtarzalnych procesów",
        "Integracje API z zewnętrznymi narzędziami"
      ],
      gradient: "from-amber-500 to-orange-500",
      link: "/oferta"
    },
    {
      icon: ShieldCheck,
      title: "Opieka Techniczna",
      description: "Spokój ducha dzięki stałemu wsparciu i monitoringowi Twojej strony.",
      points: [
        "Regularne aktualizacje silnika i wtyczek",
        "Monitoring dostępności strony 24/7",
        "Cykliczne kopie zapasowe (backupy)",
        "Szybka naprawa ewentualnych usterek",
        "Rozwój funkcjonalności w miarę wzrostu biznesu"
      ],
      gradient: "from-emerald-500 to-teal-500",
      link: "/advanced-pricing"
    },
    {
      icon: Search,
      title: "SEO i Optymalizacja",
      description: "Daj się znaleźć klientom w wyszukiwarce Google.",
      points: [
        "Techniczne SEO i audyt struktury strony",
        "Optymalizacja szybkości ładowania (Google PageSpeed)",
        "Dobór słów kluczowych i strategia treści",
        "Optymalizacja treści i meta opisów",
        "Wdrożenie danych strukturalnych (Schema.org)"
      ],
      gradient: "from-indigo-500 to-blue-600",
      link: "/oferta"
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Konsultacja",
      desc: "Analizujemy Twoje potrzeby, cele biznesowe i konkurencję.",
      icon: MessageSquare
    },
    {
      step: "02",
      title: "Projekt",
      desc: "Tworzymy makiety i nowoczesny design dopasowany do marki.",
      icon: PenTool
    },
    {
      step: "03",
      title: "Realizacja",
      desc: "Programujemy rozwiązanie z użyciem najnowszych technologii.",
      icon: Code2
    },
    {
      step: "04",
      title: "Optymalizacja",
      desc: "Testujemy wydajność, responsywność i zabezpieczenia.",
      icon: Rocket
    },
    {
      step: "05",
      title: "Wsparcie",
      desc: "Wdrażamy projekt i zapewniamy opiekę techniczną.",
      icon: Headphones
    }
  ];

  const whyChoose = [
    {
      icon: Palette,
      title: "Nowoczesny Design & UX",
      desc: "Tworzymy estetyczne i intuicyjne interfejsy, które zatrzymują użytkowników na dłużej."
    },
    {
      icon: Search,
      title: "SEO Ready",
      desc: "Nasze realizacje są zoptymalizowane pod wyszukiwarki od pierwszej linijki kodu."
    },
    {
      icon: Zap,
      title: "Szybkość i Responsywność",
      desc: "Błyskawiczne czasy ładowania i perfekcyjne działanie na telefonach i tabletach."
    },
    {
      icon: Lock,
      title: "Bezpieczeństwo",
      desc: "Wdrażamy certyfikaty SSL i zabezpieczenia chroniące przed atakami."
    },
    {
      icon: MessageSquare,
      title: "Jasna Komunikacja",
      desc: "Mówimy zrozumiałym językiem, bez technicznego żargonu. Jesteśmy partnerem."
    }
  ];

  return (
    <>
      <Helmet>
        <title>WebNova - Nowoczesne Strony WWW i Sklepy Internetowe | Poznań</title>
        <meta 
          name="description" 
          content="WebNova tworzy profesjonalne strony www, sklepy internetowe i aplikacje webowe dla firm. Nowoczesny design, skuteczne SEO, wsparcie techniczne." 
        />
      </Helmet>

      <div className="min-h-screen text-slate-50 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden bg-transparent">
        <Header />

        {/* 1. HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 bg-center" />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-500/20 mb-8 shadow-glow">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-sm font-semibold text-blue-300 tracking-wide uppercase">Partner Technologiczny Twojej Firmy</span>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl lg:text-7xl font-bold font-sora text-white mb-8 leading-tight drop-shadow-2xl"
              >
                Tworzymy Nowoczesne <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Strony WWW
                </span> i <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
                  Sklepy Internetowe
                </span> <br className="hidden md:block" />
                dla Firm z Poznania i Całej Polski
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
              >
                WebNova to agencja interaktywna, która łączy innowacyjny design z zaawansowaną technologią. 
                Pomagamy firmom budować silną obecność w internecie, zwiększać sprzedaż i automatyzować procesy biznesowe.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <ButtonPrimary 
                  className="w-full sm:w-auto px-8 py-4 text-lg shadow-blue-500/25"
                  onClick={() => navigate('/contact')}
                >
                  Zamów wycenę <ArrowRight className="ml-2 w-5 h-5" />
                </ButtonPrimary>
                <Link
                  to="/online-stores" 
                  className="w-full sm:w-auto px-8 py-4 text-lg text-slate-300 hover:text-white font-medium transition-colors border border-white/10 hover:border-white/30 rounded-full hover:bg-white/5 backdrop-blur-sm flex items-center justify-center"
                >
                  DOWIEDZ SIĘ WIĘCEJ
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. WHY CHOOSE WEBNOVA */}
        <section id="why-us" className="py-24 relative border-t border-white/5">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-sora mb-6 text-white">
                Dlaczego warto wybrać <span className="text-blue-500">WebNova?</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-400 max-w-2xl mx-auto text-lg">
                Nie jesteśmy kolejną zwykłą agencją. Jesteśmy partnerem, który dba o Twój sukces w sieci, dostarczając rozwiązania klasy premium.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {whyChoose.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-xl group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-inner">
                    <item.icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-sora">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. OUR SERVICES */}
        <section id="offer" className="py-24 relative overflow-hidden border-t border-white/5">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-sora text-white mb-6">
                Nasze <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Usługi</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-400 max-w-2xl mx-auto text-lg">
                Kompleksowe wsparcie dla Twojego biznesu. Od prostych stron, przez sklepy e-commerce, aż po zaawansowane aplikacje.
              </motion.p>
            </motion.div>

            <div className="space-y-12 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 group shadow-2xl"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className={`lg:w-2/5 p-10 flex flex-col justify-center bg-gradient-to-br ${service.gradient} bg-opacity-10 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-slate-950/50" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`} />
                      
                      <div className="relative z-10">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold font-sora text-white mb-4">{service.title}</h3>
                        <p className="text-white/80 text-lg leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    <div className="lg:w-3/5 p-10 bg-slate-900/20 flex flex-col justify-center">
                      <ul className="space-y-4">
                        {service.points.map((point, i) => (
                          <li key={i} className="flex items-start text-slate-300">
                            <CheckCircle2 className={`w-5 h-5 mr-3 mt-1 flex-shrink-0 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-end">
                        <Link to={service.link} className="flex items-center group/link">
                          <span className="text-sm font-medium text-slate-500 mr-4 group-hover/link:text-white transition-colors">Dowiedz się więcej</span>
                          <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/link:bg-white group-hover/link:text-black transition-all duration-300`}>
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW WE WORK */}
        <section className="py-24 relative border-t border-white/5">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-sora mb-6 text-white">
                Jak <span className="text-blue-500">Działamy?</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-400 max-w-2xl mx-auto text-lg">
                Prosty i przejrzysty proces współpracy. Prowadzimy Cię za rękę od pierwszego pomysłu do gotowego produktu.
              </motion.p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-1/2" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {workflow.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative z-10"
                  >
                    <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col items-center shadow-lg group">
                      <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-blue-500/20 group-hover:border-blue-500/50 transition-colors shadow-lg shadow-blue-900/20 relative">
                        <item.icon className="w-5 h-5 text-blue-400" />
                        <span className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-slate-900">
                          {item.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. PORTFOLIO, PRICING & TESTIMONIALS */}
        <div id="portfolio">
          <PortfolioSection />
        </div>
        
        <div id="pricing">
          <PricingSection />
        </div>

        <div id="testimonials">
          <TestimonialsSection />
        </div>

        {/* 6. CTA SECTION */}
        <section className="py-24 relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/20" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-center" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-[2.5rem] p-12 md:p-16 text-center border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />

              <h2 className="text-4xl md:text-5xl font-bold font-sora text-white mb-6 drop-shadow-xl">
                Zacznijmy Twój <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projekt</span>
              </h2>
              
              <div className="flex flex-col gap-2 mb-8 text-lg text-slate-300">
                <p>Potrzebujesz nowoczesnej strony www?</p>
                <p>Chcesz otworzyć dochodowy sklep internetowy?</p>
                <p>A może szukasz dedykowanej aplikacji dla firmy?</p>
              </div>

              <p className="text-xl font-medium text-white mb-10 tracking-wide">
                WebNova – Tworzymy internet dla Twojego biznesu.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <ButtonPrimary 
                  className="px-10 py-4 text-lg w-full sm:w-auto shadow-lg shadow-blue-500/20"
                  onClick={() => navigate('/contact')}
                >
                  Poproś o wycenę <ArrowRight className="ml-2 w-5 h-5" />
                </ButtonPrimary>
                <a 
                  href="tel:+48669582886"
                  className="flex items-center gap-3 px-8 py-4 text-lg font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <Smartphone className="w-5 h-5" />
                  +48 669 582 886
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
