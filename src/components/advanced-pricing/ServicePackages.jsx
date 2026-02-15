
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const packages = [
  {
    id: 'basic',
    name: 'BASIC',
    price: '1 500',
    description: 'Idealny start dla małych firm i freelancerów.',
    icon: Shield,
    features: [
      'Strona wizytówka (do 5 podstron)',
      'Responsywność (RWD)',
      'System CMS (edycja treści)',
      'Podstawowa optymalizacja SEO',
      'Formularz kontaktowy',
      'Wsparcie techniczne: 7 dni',
      'Czas realizacji: 3-7 dni'
    ],
    highlight: false,
    color: 'blue'
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: '3 500',
    description: 'Kompleksowe rozwiązanie dla rozwijających się firm.',
    icon: Star,
    features: [
      'Strona firmowa (do 10 podstron)',
      'Indywidualny projekt graficzny',
      'System CMS + Blog/Aktualności',
      'SEO Premium + Szybkość ładowania',
      'Integracje (Social Media, Mapy)',
      'Opcja: Prosty sklep (do 10 produktów)',
      'Wsparcie techniczne: 30 dni',
      'Czas realizacji: 7-21 dni'
    ],
    highlight: true,
    color: 'purple'
  },
  {
    id: 'vip',
    name: 'VIP',
    price: '8 000',
    description: 'Bezkompromisowa jakość i dedykowane funkcje.',
    icon: Zap,
    features: [
      'Nielimitowana liczba podstron',
      'Design VIP + Zaawansowane animacje',
      'CMS + Sklep + Automatyzacje',
      'SEO Premium + Audyt konkurencji',
      'Integracje API i CRM',
      'Aplikacja webowa (PWA)',
      'Wsparcie techniczne: 90 dni',
      'Czas realizacji: 21-60 dni'
    ],
    highlight: false,
    color: 'amber'
  }
];

const ServicePackages = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-sora text-white mb-6">
          Pakiety <span className="text-blue-500">Usług</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Wybierz gotowy pakiet dopasowany do Twoich potrzeb lub skorzystaj z kalkulatora, aby stworzyć ofertę szytą na miarę.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "relative rounded-2xl p-8 border backdrop-blur-md flex flex-col h-full transition-all duration-300",
              pkg.highlight 
                ? "bg-slate-900/80 border-purple-500/50 shadow-2xl shadow-purple-900/20 transform md:-translate-y-4" 
                : "bg-slate-900/40 border-white/10 hover:border-white/20 hover:bg-slate-900/60"
            )}
          >
            {pkg.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                Polecany
              </div>
            )}

            <div className={cn(
              "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
              pkg.color === 'blue' && "bg-blue-500/10 text-blue-400",
              pkg.color === 'purple' && "bg-purple-500/10 text-purple-400",
              pkg.color === 'amber' && "bg-amber-500/10 text-amber-400"
            )}>
              <pkg.icon size={28} />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 font-sora">{pkg.name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-sm text-slate-400">od</span>
              <span className="text-4xl font-bold text-white">{pkg.price}</span>
              <span className="text-lg text-slate-400">zł</span>
            </div>
            <p className="text-slate-400 text-sm mb-8 pb-8 border-b border-white/10">
              {pkg.description}
            </p>

            <ul className="space-y-4 mb-8 flex-grow">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <CheckCircle2 className={cn(
                    "w-5 h-5 mt-0.5 shrink-0",
                    pkg.highlight ? "text-purple-400" : "text-blue-500"
                  )} />
                  <span className="text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              className={cn(
                "w-full py-6 text-lg font-medium",
                pkg.highlight 
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-900/30" 
                  : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
              )}
              onClick={() => document.getElementById('advanced-calculator').scrollIntoView({ behavior: 'smooth' })}
            >
              Poproś o wycenę
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicePackages;
