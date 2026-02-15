import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Paintbrush, Search, Headphones, Clock } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const reasons = [
  { icon: UserCheck, title: 'Indywidualne podejście', desc: 'Słucham i rozumiem Twoje potrzeby.' },
  { icon: Paintbrush, title: 'Design premium', desc: 'Estetyka, która przyciąga wzrok.' },
  { icon: Search, title: 'Optymalizacja SEO', desc: 'Widoczność w wynikach wyszukiwania.' },
  { icon: Headphones, title: 'Wsparcie po wdrożeniu', desc: 'Nie zostawiam Cię samego po starcie.' },
  { icon: Clock, title: 'Terminowa realizacja', desc: 'Szanuję Twój czas i dotrzymuję słowa.' },
];

const WhyMeSection = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-sora text-white mb-6 drop-shadow-lg">
            Dlaczego <span className="text-blue-400">warto?</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900/60 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center transition-all hover:bg-slate-800/70 hover:border-blue-500/30 group shadow-lg"
            >
              <div className="w-16 h-16 bg-slate-800/80 rounded-full flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg border border-white/5">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold font-sora text-white mb-2 drop-shadow-sm">{item.title}</h3>
              <p className="text-sm text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMeSection;