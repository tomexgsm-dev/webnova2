
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Wallet, PenTool, Layout, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResultsScreen = ({ data, onContact }) => {
  const { 
    projectType, 
    pageCount, 
    features, 
    design, 
    timeline, 
    finalPrice 
  } = data;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Price Card */}
        <div className="lg:col-span-2 bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          
          <h3 className="text-xl font-medium text-slate-300 mb-6 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-blue-400" />
            Szacunkowa inwestycja
          </h3>
          
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-5xl md:text-6xl font-bold text-white font-sora">
              {finalPrice.toLocaleString('pl-PL')}
            </span>
            <span className="text-2xl text-slate-400">PLN</span>
            <span className="text-sm text-slate-500 ml-2">(netto)</span>
          </div>

          <div className="space-y-4">
             <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-slate-400 flex items-center gap-2"><Box size={16} /> Typ projektu</span>
                <span className="text-white font-medium text-right">{projectType.name}</span>
             </div>
             <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-slate-400 flex items-center gap-2"><Layout size={16} /> Skala (Podstrony)</span>
                <span className="text-white font-medium text-right">{pageCount.name}</span>
             </div>
             <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-slate-400 flex items-center gap-2"><PenTool size={16} /> Design</span>
                <span className="text-white font-medium text-right">{design.name}</span>
             </div>
             <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-slate-400 flex items-center gap-2"><Clock size={16} /> Czas realizacji</span>
                <span className="text-white font-medium text-right">{timeline.name}</span>
             </div>
          </div>
        </div>

        {/* Features Summary */}
        <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 h-full">
          <h3 className="text-lg font-bold text-white mb-4">Wybrane dodatki</h3>
          {features.length > 0 ? (
            <ul className="space-y-3">
              {features.map(feature => (
                <li key={feature.id} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-500 text-sm italic">Brak dodatkowych funkcji</p>
          )}
          
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs text-slate-500 leading-relaxed">
              * Podana kwota jest szacunkiem automatycznym. Ostateczna wycena może się różnić w zależności od specyficznych wymagań, które omówimy podczas konsultacji.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button 
          onClick={onContact}
          className="px-12 py-8 text-xl bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
        >
          Odbierz dokładną wycenę
        </Button>
        <p className="mt-4 text-slate-400 text-sm">
          Przejdź do formularza, aby otrzymać ofertę na e-mail
        </p>
      </div>
    </motion.div>
  );
};

export default ResultsScreen;
