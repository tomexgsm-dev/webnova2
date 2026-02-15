import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Step1ProjectType from './Step1ProjectType';
import Step2PageCount from './Step2PageCount';
import Step3Features from './Step3Features';
import Step4Design from './Step4Design';
import Step5Timeline from './Step5Timeline';
import ResultsScreen from './ResultsScreen';
import LeadForm from './LeadForm';

const PriceCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [projectType, setProjectType] = useState(null);
  const [pageCount, setPageCount] = useState(null);
  const [features, setFeatures] = useState([]);
  const [design, setDesign] = useState(null);
  const [timeline, setTimeline] = useState(null);

  // Steps 1 to 5 are input steps. Step 6 is Results. Step 7 is Lead Form.
  const totalInputSteps = 5;

  // Calculate progress percentage based on input steps
  const progress = Math.min(((currentStep - 1) / totalInputSteps) * 100, 100);

  // Calculate current price
  const calculatePrice = () => {
    let price = 0;
    
    if (projectType) price += projectType.basePrice;
    if (pageCount) price += pageCount.price;
    if (features.length > 0) {
      price += features.reduce((sum, f) => sum + f.price, 0);
    }
    if (design) price += design.price;
    
    // Apply timeline multiplier if selected
    // Note: This logic assumes timeline multiplier applies to the total base price so far
    if (timeline) {
      price = price * timeline.multiplier;
    }
    
    return Math.round(price);
  };

  const currentPrice = calculatePrice();

  // Validation for each step
  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return projectType !== null;
      case 2:
        return pageCount !== null;
      case 3:
        return true; // Features are optional
      case 4:
        return design !== null;
      case 5:
        return timeline !== null;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (canProceed()) {
      // Allow proceeding if we are within input steps or transitioning to results (step 6)
      if (currentStep <= totalInputSteps) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFeatureToggle = (feature) => {
    setFeatures(prev => {
      const exists = prev.find(f => f.id === feature.id);
      if (exists) {
        return prev.filter(f => f.id !== feature.id);
      } else {
        return [...prev, feature];
      }
    });
  };

  const handleModify = () => {
    // Go back to the first step to edit, or could go back to step 5
    setCurrentStep(1);
  };

  const projectDetails = {
    projectType,
    pageCount,
    features,
    design,
    timeline,
    finalPrice: currentPrice
  };

  return (
    <div className="w-full">
      {/* Top Back Button (only show if not on first step) */}
      {currentStep > 1 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-start mb-8"
        >
          <button
            onClick={() => {
               // If on results (6) or lead form (7), go back to editing (5) or previous step
               if (currentStep > totalInputSteps) {
                 setCurrentStep(totalInputSteps);
               } else {
                 handlePrevious();
               }
            }}
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100 h-10 rounded-md px-4"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            {currentStep > totalInputSteps ? 'Wróć do edycji' : 'Wróć'}
          </button>
        </motion.div>
      )}

      {/* Progress Bar - Only show during input steps */}
      {currentStep <= totalInputSteps && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">
              Krok {currentStep} z {totalInputSteps}
            </span>
            <span className="text-sm font-medium text-purple-600">
              {Math.round(progress)}% ukończone
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}

      {/* Steps Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          {currentStep === 1 && (
            <Step1ProjectType
              selectedType={projectType}
              onSelect={setProjectType}
            />
          )}
          {currentStep === 2 && (
            <Step2PageCount
              selectedTier={pageCount}
              onSelect={setPageCount}
            />
          )}
          {currentStep === 3 && (
            <Step3Features
              selectedFeatures={features}
              onToggle={handleFeatureToggle}
            />
          )}
          {currentStep === 4 && (
            <Step4Design
              selectedDesign={design}
              onSelect={setDesign}
            />
          )}
          {currentStep === 5 && (
            <Step5Timeline
              selectedTimeline={timeline}
              onSelect={setTimeline}
              currentPrice={currentPrice}
            />
          )}
          {currentStep === 6 && (
            <ResultsScreen
              projectType={projectType}
              pageCount={pageCount}
              features={features}
              design={design}
              timeline={timeline}
              finalPrice={currentPrice}
              onModify={handleModify}
              onContact={() => setCurrentStep(7)}
            />
          )}
          {currentStep === 7 && (
            <LeadForm projectDetails={projectDetails} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons for Input Steps */}
      {currentStep <= totalInputSteps && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between gap-4"
        >
          <Button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Wstecz
          </Button>

          <div className="flex-1 text-center hidden md:block">
            {currentPrice > 0 && currentStep > 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block px-6 py-2 bg-purple-100 rounded-full"
              >
                <span className="text-sm text-gray-600 mr-2">Szacowany koszt:</span>
                <span className="text-xl font-bold text-purple-600">
                  {currentPrice.toLocaleString('pl-PL')} PLN
                </span>
              </motion.div>
            )}
          </div>

          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-200"
          >
            {currentStep === totalInputSteps ? 'Zobacz wyniki' : 'Dalej'}
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default PriceCalculator;