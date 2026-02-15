
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Layers, Code2, ArrowRight } from 'lucide-react';
import ProjectTypeCard from './ProjectTypeCard';
import { ButtonPrimary } from '@/components/buttons';

const projectTypes = [
  {
    id: 'landing',
    title: 'Wizytówka',
    description: 'Prosta strona One-Page dla małej firmy lub freelancera. Idealna na start.',
    price: 'od 1 200 PLN',
    icon: Globe
  },
  {
    id: 'company',
    title: 'Strona Firmowa',
    description: 'Rozbudowana strona z wieloma podstronami, blogiem i systemem CMS.',
    price: 'od 2 800 PLN',
    icon: Layers
  },
  {
    id: 'ecommerce',
    title: 'Sklep Internetowy',
    description: 'Kompletna platforma sprzedażowa z płatnościami i integracjami kurierskimi.',
    price: 'od 5 500 PLN',
    icon: ShoppingCart
  },
  {
    id: 'app',
    title: 'Aplikacja Webowa',
    description: 'Dedykowane rozwiązanie SaaS lub narzędzie wewnętrzne szyte na miarę.',
    price: 'od 12 000 PLN',
    icon: Code2
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const PricingCalculator = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleSelect = (id) => {
    setSelectedType(id === selectedType ? null : id);
  };

  const selectedProject = projectTypes.find(p => p.id === selectedType);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Wybierz rodzaj projektu</h2>
        <p className="text-slate-400">Zaznacz opcję, która najlepiej opisuje Twoje potrzeby.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        {projectTypes.map((type) => (
          <motion.div key={type.id} variants={itemVariants} className="h-full">
            <ProjectTypeCard
              {...type}
              isSelected={selectedType === type.id}
              onClick={() => handleSelect(type.id)}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: selectedType ? 1 : 0,
          height: selectedType ? 'auto' : 0
        }}
        className="overflow-hidden"
      >
        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Wybrano: <span className="text-blue-400">{selectedProject?.title}</span>
              </h3>
              <p className="text-slate-300 max-w-xl">
                To świetny wybór! Kliknij poniżej, aby umówić się na bezpłatną konsultację i doprecyzować szczegóły wyceny dla Twojego projektu.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
               <div className="text-right hidden md:block mb-2">
                  <span className="text-sm text-slate-400 block">Szacunkowy budżet</span>
                  <span className="text-3xl font-bold text-white">{selectedProject?.price}</span>
               </div>
               <ButtonPrimary 
                 className="px-8 py-3 text-lg whitespace-nowrap"
                 onClick={() => window.location.href = '/#contact'} // Fallback if no contact page, or use anchor
               >
                 Umów konsultację <ArrowRight className="ml-2 w-5 h-5" />
               </ButtonPrimary>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingCalculator;
