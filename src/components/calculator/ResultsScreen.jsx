import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Edit, FileText, Palette, Zap, Clock, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const ResultsScreen = ({ 
  projectType, 
  pageCount, 
  features, 
  design, 
  timeline, 
  finalPrice,
  onModify,
  onContact
}) => {
  // Helper to safely format currency
  const formatPrice = (price) => price ? `${price.toLocaleString('pl-PL')} PLN` : '0 PLN';

  // Calculate timeline cost specifically for display
  const basePriceBeforeTimeline = finalPrice / (timeline?.multiplier || 1);
  const timelineCost = finalPrice - basePriceBeforeTimeline;

  return (
    <div className="w-full max-w-4xl mx-auto pb-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 shadow-sm">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3 font-sora">
            Wycena gotowa!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oto szczegółowe podsumowanie Twojego projektu.
          </p>
        </motion.div>

        {/* Total Price Card */}
        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-br from-purple-700 to-blue-700 rounded-3xl p-8 md:p-10 text-center shadow-2xl text-white relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[80px] group-hover:bg-white/20 transition-all duration-700" />
          
          <div className="relative z-10">
            <div className="text-lg md:text-xl font-medium mb-4 text-blue-100">
              Szacunkowy koszt projektu (Netto)
            </div>
            <div className="text-5xl md:text-7xl font-bold mb-4 tracking-tight font-sora">
              {formatPrice(finalPrice)}
            </div>
            <div className="inline-block bg-white/20 backdrop-blur-md rounded-full px-4 py-1 text-sm text-blue-50 border border-white/20">
              + VAT 23%
            </div>
          </div>
        </motion.div>

        {/* Detailed Breakdown */}
        <motion.div variants={fadeInUp} className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-100 bg-gray-50/50">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-purple-600" />
              Szczegóły wyceny
            </h3>
          </div>

          <div className="divide-y divide-gray-100">
            {/* Project Type */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
                <Zap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Typ projektu</div>
                <div className="text-xl font-semibold text-gray-900">{projectType?.name}</div>
                <div className="text-gray-600 mt-1">{projectType?.description}</div>
              </div>
              <div className="text-xl font-bold text-gray-900 whitespace-nowrap">
                {formatPrice(projectType?.basePrice)}
              </div>
            </div>

            {/* Page Count */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0 text-indigo-600">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Liczba podstron</div>
                <div className="text-xl font-semibold text-gray-900">{pageCount?.name}</div>
                <div className="text-gray-600 mt-1">{pageCount?.description}</div>
              </div>
              <div className="text-xl font-bold text-gray-900 whitespace-nowrap">
                {pageCount?.price > 0 ? `+ ${formatPrice(pageCount.price)}` : 'W cenie'}
              </div>
            </div>

            {/* Features */}
            {features && features.length > 0 && (
              <div className="p-6 md:p-8 hover:bg-gray-50 transition-colors">
                 <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 text-orange-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Dodatkowe funkcje</div>
                        <div className="text-xl font-semibold text-gray-900">{features.length} wybrano</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      {features.map(feature => (
                        <div key={feature.id} className="flex justify-between items-center text-sm">
                          <span className="text-gray-700 font-medium flex items-center">
                            <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                            {feature.name}
                          </span>
                          <span className="text-gray-900 font-bold">+{feature.price} PLN</span>
                        </div>
                      ))}
                      <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between items-center font-bold">
                        <span>Razem za funkcje</span>
                        <span className="text-orange-600">
                          + {formatPrice(features.reduce((sum, f) => sum + f.price, 0))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Design */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 text-purple-600">
                <Palette className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Poziom Designu</div>
                <div className="text-xl font-semibold text-gray-900">{design?.name}</div>
                <div className="text-gray-600 mt-1">{design?.description}</div>
              </div>
              <div className="text-xl font-bold text-gray-900 whitespace-nowrap">
                {design?.price > 0 ? `+ ${formatPrice(design.price)}` : 'W cenie'}
              </div>
            </div>

            {/* Timeline */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 text-teal-600">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Czas realizacji</div>
                <div className="text-xl font-semibold text-gray-900">{timeline?.name}</div>
                <div className="text-gray-600 mt-1">Szacowany czas: {timeline?.estimatedTime}</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900 whitespace-nowrap">
                  {timelineCost > 0 ? `+ ${formatPrice(Math.round(timelineCost))}` : 'Standard'}
                </div>
                {timeline?.multiplier > 1 && (
                  <div className="text-xs text-orange-600 font-medium">
                    (Mnożnik x{timeline.multiplier})
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center pt-8">
          <Button
            onClick={onModify}
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 text-lg px-8 py-6 rounded-xl w-full md:w-auto"
          >
            <Edit className="w-5 h-5 mr-2" />
            Edytuj wybór
          </Button>
          
          <Button
            onClick={onContact}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 rounded-xl shadow-xl shadow-blue-200 w-full md:w-auto"
          >
            Dalej: Dane kontaktowe
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
        
        <p className="text-center text-gray-500 text-sm mt-6">
          Powyższa wycena ma charakter orientacyjny i nie stanowi oferty handlowej w rozumieniu Kodeksu Cywilnego.
        </p>
      </motion.div>
    </div>
  );
};

export default ResultsScreen;