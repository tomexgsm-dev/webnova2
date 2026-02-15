import React from 'react';
import { motion } from 'framer-motion';
import { ButtonPrimary } from '@/components/buttons';

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-sora text-white mb-6 leading-tight">
            Zrealizujmy Twój pomysł z WebNova
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Masz wizję? Ja mam narzędzia, by ją urzeczywistnić. 
            Nie czekaj na "idealny moment" - stwórzmy go teraz razem.
          </p>
          
          <ButtonPrimary 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-10 py-5 bg-white text-blue-900 hover:text-white hover:bg-blue-600 shadow-xl shadow-blue-900/50"
          >
            Rozpocznij współpracę
          </ButtonPrimary>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;