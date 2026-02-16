import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Zap } from 'lucide-react';

const timelineOptions = [
  {
    id: 'standard',
    name: 'Standardowy',
    description: 'Terminowa realizacja w normalnym trybie',
    estimatedTime: '4–8 tygodni',
    multiplier: 1.0,
    icon: Clock
  },
  {
    id: 'express',
    name: 'Ekspres',
    description: 'Priorytetowa realizacja w przyspieszonym trybie',
    estimatedTime: '2–4 tygodnie',
    multiplier: 1.2,
    priceIncrease: '+20%',
    icon: Zap
  }
];

const Step5Timeline = ({ selectedTimeline, onSelect, currentPrice }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Kiedy potrzebujesz gotowy projekt?
        </h2>
        <p className="text-gray-600">
          Wybierz termin realizacji dostosowany do Twoich potrzeb
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {timelineOptions.map((timeline, index) => {
          const Icon = timeline.icon;
          // Calculate what the price would be if this timeline is selected
          const projectedPrice = Math.round(currentPrice * timeline.multiplier);
          
          return (
            <motion.div
              key={timeline.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(timeline)}
              className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                selectedTimeline?.id === timeline.id
                  ? 'border-blue-600 bg-blue-50 shadow-lg shadow-blue-200'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
              }`}
            >
              {selectedTimeline?.id === timeline.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                >
                  <Check className="w-5 h-5 text-white" />
                </motion.div>
              )}

              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {timeline.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {timeline.description}
              </p>

              <div className="flex items-center mb-4 text-gray-700">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">{timeline.estimatedTime}</span>
              </div>

              {timeline.priceIncrease ? (
                <div className="space-y-1">
                  <div className="text-lg font-bold text-orange-600">
                    {timeline.priceIncrease} do ceny
                  </div>
                  {/* We display projected price only if a base price exists */}
                  {currentPrice > 0 && (
                     <div className="text-xs text-gray-500">
                       Wpływ na cenę: ~{Math.round(currentPrice * (timeline.multiplier - 1)).toLocaleString('pl-PL')} PLN
                     </div>
                  )}
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="text-lg font-medium text-green-600">
                    Bez dodatkowych kosztów
                  </div>
                   <div className="text-xs text-gray-500">
                     Standardowa stawka
                   </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Step5Timeline;