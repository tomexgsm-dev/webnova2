
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Layout, 
  ShoppingBag, 
  AppWindow, 
  PenTool, 
  HelpCircle, 
  MoreHorizontal,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ButtonSecondary } from '@/components/buttons';
import { cn } from '@/lib/utils';
import { ADMIN_EMAIL } from '@/config/emailConfig';

const projectTypes = [
  { id: 'wizytowka', label: 'Strona wizytówka', icon: Layout },
  { id: 'firmowa', label: 'Strona firmowa', icon: Monitor },
  { id: 'landing', label: 'Landing Page', icon: AppWindow },
  { id: 'sklep', label: 'Sklep internetowy', icon: ShoppingBag },
  { id: 'app', label: 'Aplikacja webowa', icon: AppWindow },
  { id: 'uiux', label: 'Projekt UI/UX', icon: PenTool },
  { id: 'inne', label: 'Inne / Nie wiem', icon: HelpCircle },
];

const ContactPage = () => {
  const [selectedType, setSelectedType] = useState('firmowa');

  return (
    <>
      <Helmet>
        <title>Kontakt i Wycena | WebNova</title>
        <meta 
          name="description" 
          content="Skontaktuj się z WebNova. Wybierz rodzaj projektu i otrzymaj darmową wycenę strony internetowej lub sklepu." 
        />
      </Helmet>

      <div className="min-h-screen text-slate-50 font-sans selection:bg-blue-500 selection:text-white bg-transparent flex flex-col">
        <Header />

        <main className="flex-grow pt-32 pb-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            
            {/* Page Header */}
            <div className="text-center max-w-4xl mx-auto mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold font-sora text-white mb-6 drop-shadow-xl"
              >
                Zapytaj o szczegóły i <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  wybierz pakiet
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-300 max-w-2xl mx-auto"
              >
                Masz pomysł na projekt? Pomożemy Ci go zrealizować. 
                Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24h.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
              
              {/* LEFT COLUMN: Selection & Info */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-5 flex flex-col gap-8"
              >
                {/* Project Selection */}
                <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Wybierz rodzaj projektu</h3>
                  <p className="text-sm text-slate-400 mb-6">Zaznacz opcję, która najlepiej opisuje Twoje potrzeby:</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.label)}
                        className={cn(
                          "flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 group relative overflow-hidden",
                          selectedType === type.label 
                            ? "bg-blue-600 border-blue-500 shadow-lg shadow-blue-900/50" 
                            : "bg-slate-800/50 border-white/5 hover:bg-slate-800 hover:border-white/20"
                        )}
                      >
                        <type.icon className={cn(
                          "w-5 h-5 transition-colors",
                          selectedType === type.label ? "text-white" : "text-slate-400 group-hover:text-blue-400"
                        )} />
                        <span className={cn(
                          "font-medium text-sm",
                          selectedType === type.label ? "text-white" : "text-slate-300 group-hover:text-white"
                        )}>{type.label}</span>
                        
                        {selectedType === type.label && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 pointer-events-none" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Direct Contact Info */}
                <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-white/10 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-4">Bezpośredni kontakt</h3>
                    <div className="space-y-4">
                      <a href={`mailto:${ADMIN_EMAIL}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group p-3 rounded-xl hover:bg-white/5">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                          <Mail className="w-5 h-5" />
                        </div>
                        <span className="font-medium break-all">{ADMIN_EMAIL}</span>
                      </a>
                      <div className="flex items-center gap-4 text-slate-300 p-3 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <span className="font-medium">Poznań / Cała Polska</span>
                      </div>
                    </div>
                  </div>

                  <hr className="border-white/10" />

                  <div className="flex flex-col gap-3">
                    <WhatsAppButton className="w-full justify-center py-3" />
                    
                    <ButtonSecondary 
                      className="w-full justify-center py-3"
                      onClick={() => window.location.href = '/advanced-pricing'}
                    >
                      Darmowa wycena online <ArrowRight className="w-4 h-4 ml-2" />
                    </ButtonSecondary>
                  </div>
                </div>

              </motion.div>

              {/* RIGHT COLUMN: Form */}
              <div className="lg:col-span-7">
                <ContactForm selectedProjectType={selectedType} />
              </div>
              
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
