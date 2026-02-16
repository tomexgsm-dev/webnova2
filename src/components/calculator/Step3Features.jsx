import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const features = [
  {
    id: 'blog',
    name: 'Blog',
    description: 'System zarządzania wpisami',
    price: 250
  },
  {
    id: 'booking',
    name: 'Rezerwacje online',
    description: 'Kalendarz i system rezerwacji',
    price: 600
  },
  {
    id: 'payments',
    name: 'Płatności online',
    description: 'Integracja z bramką płatności',
    price: 400
  },
  {
    id: 'client-panel',
    name: 'Panel klienta',
    description: 'Strefa dla zalogowanych użytkowników',
    price: 750
  },
  {
    id: 'api',
    name: 'Integracje API',
    description: 'Połączenia z zewnętrznymi systemami',
    price: 1000
  },
  {
    id: 'multilingual',
    name: 'Wielojęzyczność',
    description: 'Wersje językowe strony',
    price: 500
  },
  {
    id: 'seo-premium',
    name: 'SEO premium',
    description: 'Zaawansowana optymalizacja SEO',
    price: 300
  }
];

const Step3Features = ({ selectedFeatures, onToggle }) => {
  const totalFeaturesPrice = selectedFeatures.reduce((sum, f) => sum + f.price, 0);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Jakie funkcje chcesz dodać?
        </h2>
        <p className="text-gray-600">
          Zaznacz wszystkie dodatkowe funkcjonalności (możesz wybrać kilka)
        </p>
      </motion.div>

      {selectedFeatures.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-gradient-to-r from-orange-50 to-purple-50 rounded-xl border border-orange-200"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium">
              Wybrane funkcje ({selectedFeatures.length})
            </span>
            <span className="text-xl font-bold text-purple-600">
              +{totalFeaturesPrice.toLocaleString('pl-PL')} PLN
            </span>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => {
          const isSelected = selectedFeatures.some(f => f.id === feature.id);
          
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onToggle(feature)}
              className={`relative p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                isSelected
                  ? 'border-orange-600 bg-orange-50 shadow-md shadow-orange-200'
                  : 'border-gray-200 bg-white hover:border-orange-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-start">
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center mr-3 mt-0.5 transition-all ${
                  isSelected
                    ? 'border-orange-600 bg-orange-600'
                    : 'border-gray-300 bg-white'
                }`}>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {feature.description}
                  </p>
                  <div className="text-lg font-bold text-orange-600">
                    +{feature.price.toLocaleString('pl-PL')} PLN
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Step3Features;