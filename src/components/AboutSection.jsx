import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Zap, ShieldCheck } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const features = [
  {
    icon: Code2,
    title: 'Clean Code Architecture',
    description: 'Skalowalny i łatwy w utrzymaniu kod, pisany zgodnie z najnowszymi standardami branżowymi (SOLID, DRY).',
    color: 'text-blue-400'
  },
  {
    icon: BrainCircuit,
    title: 'Strategic UX/UI Design',
    description: 'Interfejsy projektowane w oparciu o psychologię użytkownika, nastawione na maksymalizację konwersji.',
    color: 'text-purple-400'
  },
  {
    icon: Zap,
    title: 'Extreme Performance',
    description: 'Optymalizacja Core Web Vitals. Twoja strona będzie ładować się błyskawicznie na każdym urządzeniu.',
    color: 'text-amber-400'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'Wdrożenie zaawansowanych zabezpieczeń i ochrona danych zgodnie z wytycznymi RODO i OWASP.',
    color: 'text-teal-400'
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-sora text-white mb-6 drop-shadow-lg">
            Więcej niż tylko <span className="text-blue-400">kodowanie</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-200 text-lg leading-relaxed drop-shadow-md">
            Jako Full-stack Developer w WebNova łączę kompetencje techniczne z myśleniem biznesowym. 
            Nie dostarczam tylko kodu – dostarczam rozwiązania, które realnie wpływają na wzrost Twojej firmy. 
            Każdy projekt traktuję jak własny, dbając o najmniejsze detale.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-slate-800/70 transition-all duration-300 group shadow-lg"
            >
              <div className={`w-14 h-14 bg-slate-950/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-inner`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold font-sora text-white mb-3 group-hover:text-blue-400 transition-colors drop-shadow-sm">
                {feature.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;