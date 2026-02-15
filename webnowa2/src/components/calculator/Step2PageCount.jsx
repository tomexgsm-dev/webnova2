import React from 'react';
import { motion } from 'framer-motion';
import { Check, FileText } from 'lucide-react';

const pageTiers = [
  {
    id: 'tier-1',
    name: '1–3 strony',
    description: 'Idealne na start',
    price: 0,
    pages: '1-3'
  },
  {
    id: 'tier-2',
    name: '4–7 stron',
    description: 'Strona rozbudowana',
    price: 750,
    pages: '4-7'
  },
  {
    id: 'tier-3',
    name: '8–12 stron',
    description: 'Duża witryna',
    price: 1500,
    pages: '8-12'
  },
  {
    id: 'tier-4',
    name: '12+ stron',
    description: 'Rozbudowany portal',
    price: 2500,
    pages: '12+'
  }
];

const Step2PageCount = ({ selectedTier, onSelect }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Ile podstron potrzebujesz?
        </h2>
        <p className="text-gray-600">
          Wybierz zakres odpowiadający rozmiarowi Twojej strony
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pageTiers.map((tier, index) => (
          <motion.div
            key={tier.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(tier)}
            className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
              selectedTier?.id === tier.id
                ? 'border-blue-600 bg-blue-50 shadow-lg shadow-blue-200'
                : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
            }`}
          >
            {selectedTier?.id === tier.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-4 right-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
              >
                <Check className="w-5 h-5 text-white" />
              </motion.div>
            )}

            <div className="flex items-start mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {tier.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tier.description}
                </p>
              </div>
            </div>

            <div className="flex items-baseline">
              <div className="text-2xl font-bold text-blue-600">
                {tier.price > 0 ? `+${tier.price.toLocaleString('pl-PL')}` : 'W cenie'} 
              </div>
              {tier.price > 0 && (
                <span className="ml-2 text-sm text-gray-500">PLN</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Step2PageCount;