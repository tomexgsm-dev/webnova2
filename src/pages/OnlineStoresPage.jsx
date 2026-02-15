
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  CreditCard, 
  Truck, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ButtonPrimary, ButtonSecondary } from '@/components/buttons';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const OnlineStoresPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: ShoppingBag,
      title: "Co zawiera sklep?",
      items: [
        "System produktów i kategorii",
        "Koszyk zakupowy",
        "Proces zamówienia",
        "Panel administracyjny",
        "Zarządzanie stanami magazynowymi",
        "Kupony rabatowe",
        "Warianty produktów"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: CreditCard,
      title: "Integracje płatności",
      items: [
        "BLIK",
        "Przelewy24",
        "Stripe",
        "PayPal",
        "Karty płatnicze"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Truck,
      title: "Integracje dostaw",
      items: [
        "Kurierzy",
        "Paczkomaty",
        "Odbiór osobisty",
        "Automatyczne wyliczanie kosztów"
      ],
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Optymalizacja sprzedaży",
      items: [
        "UX ścieżki zakupowej",
        "Szybkie płatności",
        "One-page checkout",
        "Cross-sell / up-sell",
        "Porzucone koszyki"
      ],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: ShieldCheck,
      title: "Bezpieczeństwo",
      items: [
        "Certyfikat SSL",
        "Zabezpieczenia płatności",
        "Kopie zapasowe",
        "Aktualizacje systemu"
      ],
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: Layers,
      title: "Możliwości rozbudowy",
      items: [
        "Aplikacja mobilna",
        "Integracje hurtowni",
        "System abonamentowy",
        "Marketplace",
        "Automatyzacje sprzedaży"
      ],
      gradient: "from-rose-500 to-red-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sklepy Internetowe e-Commerce | WebNova</title>
        <meta 
          name="description" 
          content="Nowoczesne sklepy internetowe nastawione na sprzedaż. Integracje płatności, dostaw i optymalizacja konwersji. Zacznij sprzedawać w sieci z WebNova." 
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
              <motion.div variants={fadeInUp} className="inline-block px-4 py-2 bg-purple-500/10 backdrop-blur-sm text-purple-400 border border-purple-500/20 rounded-full text-sm font-semibold mb-6 shadow-glow">
                Profesjonalne wdrożenia e-Commerce
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold font-sora text-white mb-6 drop-shadow-2xl leading-tight"
              >
                Sklepy internetowe <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  nastawione na sprzedaż
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-slate-300 leading-relaxed drop-shadow-md max-w-3xl mx-auto mb-10"
              >
                Tworzę nowoczesne sklepy e-commerce zaprojektowane pod maksymalizację konwersji i wygodę użytkownika. 
                Łączę design sprzedażowy z technologią, aby Twoi klienci kupowali szybko i bez problemów.
              </motion.p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="container mx-auto px-4 relative z-10 mb-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-slate-900/60 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold font-sora text-white mb-6 drop-shadow-sm">
                      {feature.title}
                    </h3>
                    
                    <ul className="space-y-3">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-300 text-sm">
                          <CheckCircle2 className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Section */}
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px]" />

              <h2 className="text-3xl md:text-4xl font-bold font-sora text-white mb-6">
                Rozpocznij sprzedaż online
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                Zbudujmy sklep, który będzie pracował na Twój sukces 24/7. Skontaktuj się, aby omówić szczegóły.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <ButtonPrimary 
                  className="w-full sm:w-auto px-8 py-4 shadow-lg shadow-purple-500/20 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
                  onClick={() => navigate('/contact')}
                >
                  Załóż sklep internetowy <ArrowRight className="ml-2 w-5 h-5" />
                </ButtonPrimary>
                
                <ButtonSecondary 
                  className="w-full sm:w-auto px-8 py-4"
                  onClick={() => navigate('/contact')}
                >
                  Sprawdź wycenę sklepu
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

export default OnlineStoresPage;
