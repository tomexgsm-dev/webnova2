
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Smartphone, Monitor, Globe, ShoppingCart, Layout, Rocket, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ResultsScreen from './ResultsScreen';
import LeadForm from './LeadForm';

// --- DATA DEFINITIONS ---

const PROJECT_TYPES = [
  { id: 'wizytowka', name: 'Strona wizytówka', price: 800, icon: Globe },
  { id: 'firmowa', name: 'Strona firmowa', price: 2500, icon: Monitor },
  { id: 'landing', name: 'Landing Page', price: 1500, icon: Layout },
  { id: 'sklep', name: 'Sklep internetowy', price: 3500, icon: ShoppingCart },
  { id: 'app_simple', name: 'Aplikacja prosta', price: 5000, icon: Smartphone },
  { id: 'app_adv', name: 'Aplikacja zaawansowana', price: 15000, icon: Rocket },
  { id: 'uiux', name: 'Projekt UI/UX', price: 1000, icon: Palette },
];

const PAGE_COUNTS = [
  { id: 'small', name: '1-3 podstrony', multiplier: 1.0 },
  { id: 'medium', name: '4-7 podstron', multiplier: 1.2 },
  { id: 'large', name: '8-12 podstron', multiplier: 1.4 },
  { id: 'xl', name: '12+ podstron', multiplier: 1.6 },
];

const FEATURES = [
  { id: 'blog', name: 'Blog / Aktualności', price: 300 },
  { id: 'booking', name: 'Rezerwacje online', price: 500 },
  { id: 'payments', name: 'Płatności online', price: 500 },
  { id: 'panel', name: 'Panel klienta', price: 1000 },
  { id: 'api', name: 'Integracje API', price: 800 },
  { id: 'lang', name: 'Wielojęzyczność', price: 600 },
  { id: 'seo', name: 'SEO Premium', price: 400 },
];

const DESIGNS = [
  { id: 'template', name: 'Szablon Premium', price: 0 },
  { id: 'custom', name: 'Indywidualny UI/UX', price: 1500 },
  { id: 'vip', name: 'Design VIP + Animacje', price: 3000 },
];

const TIMELINES = [
  { id: 'standard', name: 'Standardowy', multiplier: 1.0 },
  { id: 'express', name: 'Ekspres (+25%)', multiplier: 1.25 },
];

const PriceCalculator = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    projectType: null,
    pageCount: null,
    features: [],
    design: null,
    timeline: null,
  });
  const [currentPrice, setCurrentPrice] = useState(0);

  // Calculate price whenever selections change
  useEffect(() => {
    let price = 0;
    
    // Base Price
    if (selections.projectType) price += selections.projectType.price;
    
    // Page Multiplier applies to base? Or base accumulates?
    // Let's assume Page Count scales the "core work" (Base Price)
    if (selections.pageCount && selections.projectType) {
      // The logic: (Base * Multiplier)
      // Actually let's make it additive for clarity or use multiplier on base.
      // Current Logic: Base * Multiplier
      price = price * selections.pageCount.multiplier; 
    }

    // Add fixed costs
    if (selections.design) price += selections.design.price;
    
    selections.features.forEach(f => {
      price += f.price;
    });

    // Timeline Multiplier applies to EVERYTHING
    if (selections.timeline) {
      price = price * selections.timeline.multiplier;
    }

    setCurrentPrice(Math.round(price));
  }, [selections]);

  const updateSelection = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const toggleFeature = (feature) => {
    setSelections(prev => {
      const exists = prev.features.find(f => f.id === feature.id);
      if (exists) {
        return { ...prev, features: prev.features.filter(f => f.id !== feature.id) };
      }
      return { ...prev, features: [...prev.features, feature] };
    });
  };

  const canProceed = () => {
    if (step === 1) return !!selections.projectType;
    if (step === 2) return !!selections.pageCount;
    if (step === 3) return true; // Features optional
    if (step === 4) return !!selections.design;
    if (step === 5) return !!selections.timeline;
    return true;
  };

  const nextStep = () => {
    if (canProceed() && step < 7) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const StepIndicator = () => (
    <div className="flex justify-between mb-8 relative">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-10 -translate-y-1/2 rounded-full" />
      {[1, 2, 3, 4, 5].map(i => (
        <div 
          key={i}
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300",
            step >= i ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "bg-slate-800 text-slate-500"
          )}
        >
          {step > i ? <Check size={16} /> : i}
        </div>
      ))}
    </div>
  );

  return (
    <div id="advanced-calculator" className="max-w-4xl mx-auto">
      {step <= 5 && <StepIndicator />}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[400px]"
        >
          {/* STEP 1: PROJECT TYPE */}
          {step === 1 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Wybierz typ projektu</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PROJECT_TYPES.map(type => (
                  <button
                    key={type.id}
                    onClick={() => updateSelection('projectType', type)}
                    className={cn(
                      "p-6 rounded-xl border text-left transition-all hover:scale-[1.02]",
                      selections.projectType?.id === type.id 
                        ? "bg-blue-600/20 border-blue-500 ring-1 ring-blue-500" 
                        : "bg-slate-900/50 border-white/10 hover:border-white/20"
                    )}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-slate-800 rounded-lg text-blue-400">
                        <type.icon size={24} />
                      </div>
                      <span className="text-sm font-mono text-slate-400">{type.price} zł</span>
                    </div>
                    <div className="font-bold text-white text-lg">{type.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: PAGE COUNT */}
          {step === 2 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Szacowana liczba podstron</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PAGE_COUNTS.map(count => (
                  <button
                    key={count.id}
                    onClick={() => updateSelection('pageCount', count)}
                    className={cn(
                      "p-6 rounded-xl border text-left transition-all",
                      selections.pageCount?.id === count.id 
                        ? "bg-blue-600/20 border-blue-500" 
                        : "bg-slate-900/50 border-white/10"
                    )}
                  >
                    <div className="font-bold text-white text-xl mb-1">{count.name}</div>
                    <div className="text-slate-400 text-sm">Mnożnik ceny bazowej: x{count.multiplier}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: FEATURES */}
          {step === 3 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Dodatkowe funkcjonalności</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {FEATURES.map(feature => {
                  const isSelected = selections.features.some(f => f.id === feature.id);
                  return (
                    <button
                      key={feature.id}
                      onClick={() => toggleFeature(feature)}
                      className={cn(
                        "p-4 rounded-xl border text-left flex justify-between items-center transition-all",
                        isSelected
                          ? "bg-purple-600/20 border-purple-500" 
                          : "bg-slate-900/50 border-white/10"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-5 h-5 rounded border flex items-center justify-center",
                          isSelected ? "bg-purple-500 border-purple-500" : "border-slate-600"
                        )}>
                          {isSelected && <Check size={12} className="text-white" />}
                        </div>
                        <span className="text-white font-medium">{feature.name}</span>
                      </div>
                      <span className="text-sm text-purple-400">+{feature.price} zł</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: DESIGN */}
          {step === 4 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Poziom designu</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {DESIGNS.map(design => (
                  <button
                    key={design.id}
                    onClick={() => updateSelection('design', design)}
                    className={cn(
                      "p-6 rounded-xl border text-left transition-all h-full flex flex-col justify-between",
                      selections.design?.id === design.id 
                        ? "bg-blue-600/20 border-blue-500" 
                        : "bg-slate-900/50 border-white/10"
                    )}
                  >
                    <div>
                      <div className="font-bold text-white text-lg mb-2">{design.name}</div>
                      <p className="text-slate-400 text-sm mb-4">
                        {design.id === 'template' && "Estetyczny, gotowy szablon dostosowany do marki."}
                        {design.id === 'custom' && "Unikalny projekt graficzny tworzony od zera."}
                        {design.id === 'vip' && "Zaawansowane animacje, mikro-interakcje, efekt wow."}
                      </p>
                    </div>
                    <div className="text-blue-400 font-bold">
                      {design.price === 0 ? "W cenie" : `+${design.price} zł`}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: TIMELINE */}
          {step === 5 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Tryb realizacji</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {TIMELINES.map(timeline => (
                  <button
                    key={timeline.id}
                    onClick={() => updateSelection('timeline', timeline)}
                    className={cn(
                      "p-8 rounded-xl border text-center transition-all",
                      selections.timeline?.id === timeline.id 
                        ? "bg-blue-600/20 border-blue-500 scale-105" 
                        : "bg-slate-900/50 border-white/10"
                    )}
                  >
                    <div className="font-bold text-white text-xl mb-2">{timeline.name}</div>
                    <div className="text-slate-400">
                      {timeline.id === 'standard' ? "Standardowy czas oczekiwania" : "Priorytetowa realizacja"}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 6: RESULTS */}
          {step === 6 && (
             <ResultsScreen 
               data={{ ...selections, finalPrice: currentPrice }} 
               onContact={nextStep} 
             />
          )}

          {/* STEP 7: LEAD FORM */}
          {step === 7 && (
            <LeadForm quoteDetails={{ ...selections, finalPrice: currentPrice }} />
          )}

        </motion.div>
      </AnimatePresence>

      {/* NAVIGATION CONTROLS */}
      {step <= 5 && (
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/10">
          <Button
            variant="ghost"
            onClick={prevStep}
            disabled={step === 1}
            className="text-slate-400 hover:text-white"
          >
            <ChevronLeft className="w-4 h-4 mr-2" /> Wstecz
          </Button>

          <div className="text-center hidden sm:block">
            <span className="text-slate-500 text-sm uppercase tracking-wider">Szacowany koszt</span>
            <div className="text-2xl font-bold text-white">{currentPrice} PLN</div>
          </div>

          <Button
            onClick={nextStep}
            disabled={!canProceed()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            {step === 5 ? "Podsumowanie" : "Dalej"} <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PriceCalculator;
