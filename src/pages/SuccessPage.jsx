
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Home, ArrowRight } from 'lucide-react';
import { ButtonPrimary, ButtonSecondary } from '@/components/buttons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Wiadomość Wysłana | WebNova</title>
        <meta name="description" content="Twoje zgłoszenie zostało wysłane pomyślnie." />
      </Helmet>

      <div className="min-h-screen flex flex-col font-sans text-slate-50 selection:bg-blue-500 selection:text-white bg-transparent">
        <Header />

        <main className="flex-grow flex items-center justify-center relative py-20 px-4">
          {/* Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl w-full bg-slate-900/60 backdrop-blur-xl border border-green-500/30 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-500" />

            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              <CheckCircle2 className="w-12 h-12 text-green-400" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold font-sora text-white mb-4">
              Dziękujemy!
            </h1>
            
            <p className="text-xl text-green-400 font-medium mb-6">
              Twoja wiadomość została wysłana pomyślnie.
            </p>

            <p className="text-slate-300 mb-10 leading-relaxed">
              Potwierdzamy otrzymanie Twojego zgłoszenia. Nasz zespół przeanalizuje je i skontaktuje się z Tobą najszybciej jak to możliwe (zazwyczaj w ciągu 24 godzin).
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonPrimary 
                onClick={() => navigate('/')}
                className="w-full sm:w-auto justify-center"
              >
                <Home className="w-4 h-4 mr-2" /> Wróć do strony głównej
              </ButtonPrimary>
              
              <ButtonSecondary 
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto justify-center"
              >
                Wyślij kolejną wiadomość <ArrowRight className="w-4 h-4 ml-2" />
              </ButtonSecondary>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SuccessPage;
