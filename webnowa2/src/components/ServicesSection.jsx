import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Layers, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const services = [
  {
    icon: Globe,
    title: 'Strony Wizytówki Premium',
    description: 'Zaprezentuj swoją markę z klasą dzięki WebNova. Nowoczesne, responsywne strony One-Page lub Multi-Page, które budują autorytet.',
    features: ['Responsive Design', 'SEO Optimization', 'CMS Integration'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: ShoppingCart,
    title: 'Platformy E-commerce',
    description: 'Skalowalne sklepy internetowe nastawione na sprzedaż. WebNova wdraża pełną automatyzację procesów i płatności.',
    features: ['Płatności Online', 'Zarządzanie Magazynem', 'Analityka Sprzedaży'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Layers,
    title: 'Aplikacje Webowe (SaaS)',
    description: 'Dedykowane systemy od WebNova rozwiązujące konkretne problemy biznesowe. Panele klienta, CRM, ERP.',
    features: ['Dashboardy', 'API Integrations', 'Real-time Data'],
    gradient: 'from-amber-500 to-orange-500'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-sora text-white mb-6 drop-shadow-lg">
            Kompleksowe <span className="text-blue-400">rozwiązania WebNova</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-200 text-lg max-w-2xl mx-auto drop-shadow-md">
            Od prostej wizytówki po skomplikowane systemy. Dobieram technologię idealnie dopasowaną do Twoich potrzeb i budżetu.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors shadow-lg"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold font-sora text-white mb-4 drop-shadow-sm">{service.title}</h3>
              <p className="text-slate-300 mb-8 leading-relaxed h-24">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-2`} />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="flex items-center text-white font-medium group-hover:translate-x-2 transition-transform cursor-pointer">
                Dowiedz się więcej <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;