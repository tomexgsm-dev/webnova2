import React from 'react';
import { motion } from 'framer-motion';
import { Check, Palette, Sparkles, Crown } from 'lucide-react';

const designOptions = [
  {
    id: 'template',
    name: 'Szablon premium',
    description: 'Gotowy szablon dopasowany do branży',
    details: 'Profesjonalny wygląd, szybkie wdrożenie',
    price: 0,
    icon: Palette
  },
  {
    id: 'custom',
    name: 'Indywidualny projekt UI/UX',
    description: 'Unikalny design stworzony od zera',
    details: 'Makiety, wireframes, prototypy',
    price: 1500,
    icon: Sparkles
  },
  {
    id: 'vip',
    name: 'Design VIP + animacje',
    description: 'Premium design z zaawansowanymi animacjami',
    details: 'Interaktywne elementy, motion design',
    price: 3000,
    icon: Crown
  }
];

const Step4Design = ({ selectedDesign, onSelect }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Jaki poziom designu wybierasz?
        </h2>
        <p className="text-gray-600">
          Określ, jak bardzo wyjątkowy ma być wygląd Twojej strony
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {designOptions.map((design, index) => {
          const Icon = design.icon;
          
          return (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(design)}
              className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                selectedDesign?.id === design.id
                  ? 'border-purple-600 bg-purple-50 shadow-lg shadow-purple-200'
                  : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
              }`}
            >
              {selectedDesign?.id === design.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center"
                >
                  <Check className="w-5 h-5 text-white" />
                </motion.div>
              )}

              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-purple-600" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {design.name}
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                {design.description}
              </p>
              <p className="text-gray-500 text-xs mb-4">
                {design.details}
              </p>

              <div className="text-2xl font-bold text-purple-600">
                {design.price > 0 ? `+${design.price.toLocaleString('pl-PL')}` : 'W cenie'}
              </div>
              {design.price > 0 && (
                <div className="text-xs text-gray-500 mt-1">PLN netto</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Step4Design;