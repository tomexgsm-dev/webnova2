import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const projectTypes = [
  {
    id: 'business-card',
    name: 'Strona wizytówka',
    description: 'Prosta strona prezentująca ofertę',
    basePrice: 1000
  },
  {
    id: 'corporate',
    name: 'Strona firmowa',
    description: 'Rozbudowana strona z portfolio',
    basePrice: 2250
  },
  {
    id: 'ecommerce',
    name: 'Sklep internetowy',
    description: 'Pełna platforma sprzedażowa',
    basePrice: 3500
  },
  {
    id: 'web-app',
    name: 'Aplikacja webowa',
    description: 'Zaawansowana aplikacja na zamówienie',
    basePrice: 6000
  }
];

const Step1ProjectType = ({ selectedType, onSelect }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Jaki typ projektu planujesz?
        </h2>
        <p className="text-gray-600">
          Wybierz rodzaj strony lub aplikacji, która najlepiej pasuje do Twoich potrzeb
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectTypes.map((type, index) => (
          <motion.div
            key={type.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(type)}
            className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
              selectedType?.id === type.id
                ? 'border-purple-600 bg-purple-50 shadow-lg shadow-purple-200'
                : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
            }`}
          >
            {selectedType?.id === type.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-4 right-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center"
              >
                <Check className="w-5 h-5 text-white" />
              </motion.div>
            )}

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {type.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {type.description}
            </p>
            <div className="text-2xl font-bold text-purple-600">
              {type.basePrice.toLocaleString('pl-PL')} PLN
            </div>
            <div className="text-xs text-gray-500 mt-1">
              cena bazowa netto
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Step1ProjectType;