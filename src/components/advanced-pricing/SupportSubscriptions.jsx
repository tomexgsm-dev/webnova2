
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Activity, Server, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const subscriptions = [
  {
    id: 'start',
    name: 'START',
    price: '200',
    period: '/mc',
    icon: Activity,
    features: [
      'Aktualizacje CMS i wtyczek',
      'Kopia zapasowa (Backup) 1x/mc',
      'Monitoring dostępności 24/7',
      'Drobne poprawki: 1h / mc',
      'Wsparcie: Email',
      'Raport miesięczny'
    ],
    highlight: false
  },
  {
    id: 'biznes',
    name: 'BIZNES',
    price: '500',
    period: '/mc',
    icon: Server,
    features: [
      'Aktualizacje CMS i wtyczek',
      'Kopia zapasowa (Backup) 2x/mc',
      'Monitoring dostępności i bezpieczeństwa',
      'Prace programistyczne: 3h / mc',
      'Wsparcie: Email + WhatsApp',
      'Optymalizacja szybkości działania',
      'Priorytetowa reakcja na awarie'
    ],
    highlight: true
  },
  {
    id: 'vip',
    name: 'VIP',
    price: '1 000',
    period: '/mc',
    icon: ShieldCheck,
    features: [
      'Pełna opieka techniczna',
      'Kopia zapasowa (Backup) 1x/tydz.',
      'Monitoring 24/7 + Security Pro',
      'Prace programistyczne: 8h / mc',
      'Wsparcie: Email + WhatsApp + Tel',
      'Cykliczna optymalizacja i audyt',
      'Rozwój nowych funkcjonalności',
      'Dedykowany opiekun projektu'
    ],
    highlight: false
  }
];

const SupportSubscriptions = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-blue-900/5 -z-10" />
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold font-sora text-white mb-6">
          Opieka <span className="text-purple-500">Techniczna</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Zapewnij sobie spokój ducha i bezpieczeństwo. My dbamy o technologię, Ty zajmujesz się biznesem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {subscriptions.map((sub, index) => (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "p-6 rounded-2xl border flex flex-col h-full transition-all duration-300",
              sub.highlight 
                ? "bg-gradient-to-br from-slate-900 to-slate-800 border-blue-500 shadow-xl shadow-blue-900/20" 
                : "bg-slate-950/50 border-white/10 hover:bg-slate-900"
            )}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center",
                sub.highlight ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"
              )}>
                <sub.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-sora">{sub.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">{sub.price} zł</span>
                  <span className="text-sm text-slate-500">{sub.period}</span>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              {sub.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className={cn(
                    "w-4 h-4 mt-0.5 shrink-0",
                    sub.highlight ? "text-blue-400" : "text-slate-600"
                  )} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={sub.highlight ? "default" : "outline"}
              className={cn(
                "w-full",
                sub.highlight 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
              )}
              onClick={() => document.getElementById('advanced-calculator').scrollIntoView({ behavior: 'smooth' })}
            >
              Wybierz pakiet
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SupportSubscriptions;
