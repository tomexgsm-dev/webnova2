
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  BarChart, 
  Settings, 
  Zap, 
  FileText, 
  LineChart, 
  ArrowRight,
  Target,
  CheckCircle,
  Globe,
  Database,
  TrendingUp
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ButtonPrimary, ButtonSecondary } from '@/components/buttons';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const SEOOptimizationPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Search,
      title: "Audyt SEO – pełna analiza Twojej strony",
      desc: "Sprawdzamy strukturę, treści, linkowanie, szybkość ładowania, błędy techniczne i zgodność z wytycznymi wyszukiwarek. Identyfikujemy obszary wymagające poprawy, aby Twoja witryna mogła osiągnąć swój pełny potencjał.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Optymalizacja techniczna",
      desc: "Dbamy o poprawne nagłówki, meta tagi, linkowanie wewnętrzne, indeksację i dane strukturalne. Naprawiamy błędy 404, przekierowania i problemy z mapą witryny, ułatwiając robotom Google zrozumienie Twojej strony.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Optymalizacja treści",
      desc: "Tworzymy i optymalizujemy treści tak, aby odpowiadały na intencje użytkowników i zawierały odpowiednie słowa kluczowe, zachowując przy tym naturalność, czytelność i logiczną strukturę.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Poprawa szybkości działania strony",
      desc: "Optymalizujemy obrazy, skrypty, pamięć podręczną (cache) i konfigurację serwera. Usuwamy elementy blokujące renderowanie, co bezpośrednio przekłada się na lepsze wyniki w Google PageSpeed Insights i zadowolenie użytkowników.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: LineChart,
      title: "Stałe monitorowanie i raportowanie",
      desc: "SEO to proces ciągły. Regularnie analizujemy wyniki, wprowadzamy usprawnienia i reagujemy na zmiany w algorytmach Google, dostarczając Ci przejrzyste raporty z postępów.",
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Indywidualna strategia dopasowana do Twojej branży",
      desc: "Analizujemy Twoją konkurencję i specyfikę rynku."
    },
    {
      icon: CheckCircle,
      title: "Działania zgodne z wytycznymi Google",
      desc: "Stosujemy tylko bezpieczne i skuteczne metody (White Hat SEO)."
    },
    {
      icon: Database,
      title: "Połączenie SEO technicznego i contentowego",
      desc: "Kompleksowe podejście dla maksymalnych efektów."
    },
    {
      icon: TrendingUp,
      title: "Realny wzrost widoczności i ruchu",
      desc: "Koncentrujemy się na wynikach, które przekładają się na biznes."
    },
    {
      icon: BarChart,
      title: "Przejrzyste raporty i jasna komunikacja",
      desc: "Wiesz, za co płacisz i jakie efekty osiągamy."
    }
  ];

  return (
    <>
      <Helmet>
        <title>SEO i Optymalizacja Stron WWW | WebNova</title>
        <meta 
          name="description" 
          content="Skuteczne pozycjonowanie i optymalizacja SEO. Audyty, optymalizacja techniczna, content marketing i przyspieszanie stron. Bądź widoczny w Google!" 
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
              <motion.div variants={fadeInUp} className="inline-block px-4 py-2 bg-indigo-500/10 backdrop-blur-sm text-indigo-400 border border-indigo-500/20 rounded-full text-sm font-semibold mb-6 shadow-glow">
                Widoczność i Pozycjonowanie
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold font-sora text-white mb-6 drop-shadow-2xl leading-tight"
              >
                SEO i optymalizacja <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
                  Skuteczne działania, które podnoszą pozycje Twojej strony
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-300 leading-relaxed drop-shadow-md max-w-3xl mx-auto mb-10"
              >
                Twoja strona może wyglądać świetnie, ale dopiero odpowiednia optymalizacja SEO sprawia, że zaczyna być widoczna dla klientów w Google. 
                W WebNova dbamy o to, aby Twoja witryna była szybka, poprawnie zbudowana i zoptymalizowana pod słowa kluczowe, dzięki czemu zdobywa wyższe pozycje i generuje więcej ruchu.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <ButtonPrimary 
                  className="w-full sm:w-auto px-8 py-4 shadow-lg shadow-indigo-500/20 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500"
                  onClick={() => navigate('/contact')}
                >
                  Sprawdź naszą strategię SEO <ArrowRight className="ml-2 w-5 h-5" />
                </ButtonPrimary>
                <ButtonSecondary 
                  className="w-full sm:w-auto px-8 py-4"
                  onClick={() => navigate('/contact')}
                >
                  Poproś o audyt SEO
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
                  Co obejmuje <span className="text-indigo-500">SEO i optymalizacja?</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Kompleksowe działania zwiększające widoczność Twojej witryny.</p>
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
                    className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 shadow-lg relative overflow-hidden group"
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
            <div className="absolute inset-0 bg-indigo-900/10 backdrop-blur-sm -z-10" />
            <div className="container mx-auto px-4 text-center relative z-10">
               <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
               >
                 <Globe className="w-20 h-20 text-indigo-400 mx-auto mb-6 opacity-80" />
                 <h2 className="text-3xl md:text-4xl font-bold font-sora text-white mb-6">
                   Z nami Twoja strona nie tylko wygląda dobrze — <br className="hidden md:block" />
                   <span className="text-indigo-400">jest widoczna tam, gdzie szukają Cię klienci.</span>
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
                Dlaczego warto wybrać <span className="text-blue-500">SEO w WebNova?</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-indigo-500/40 hover:bg-slate-800/60 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
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
              className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900/90 to-indigo-900/40 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

              <h2 className="text-3xl md:text-4xl font-bold font-sora text-white mb-6">
                Chcesz być wyżej w Google?
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                Skontaktuj się z nami — przeprowadzimy audyt Twojej strony i przygotujemy plan działania.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <ButtonPrimary 
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-indigo-500/20"
                  onClick={() => navigate('/contact')}
                >
                  Poproś o audyt SEO <ArrowRight className="ml-2 w-5 h-5" />
                </ButtonPrimary>
                
                <ButtonSecondary 
                  className="w-full sm:w-auto px-8 py-4"
                  onClick={() => navigate('/contact')}
                >
                  Sprawdź naszą strategię
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

export default SEOOptimizationPage;
