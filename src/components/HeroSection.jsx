
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MousePointer2 } from 'lucide-react';
import { ButtonPrimary, ButtonSecondary } from '@/components/buttons';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://horizons-cdn.hostinger.com/c00abec9-6d45-4404-89bf-6c541ad7e487/a9d7d03ab720af9967793e32e0091b89.jpg" 
          alt="Abstract Digital Background"
          className="w-full h-full object-cover" 
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/60 to-slate-900/70" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Floating Elements (Decorative) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-purple-500/10 hover:border-purple-500/50 transition-colors cursor-default">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-slate-200 tracking-wide uppercase">Next-Gen Digital Solutions by WebNova</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-sora text-white mb-8 leading-tight tracking-tight"
          >
            Tworzę <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">technologię</span>,<br />
            która buduje <span className="relative inline-block">
              biznes
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            WebNova przekształca wizje w wydajne strony internetowe i aplikacje. 
            Łączymy strategię biznesową z designem klasy premium, abyś mógł wyprzedzić konkurencję.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <ButtonPrimary 
              className="w-full sm:w-auto min-w-[200px]"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Wyceń projekt <ArrowRight className="ml-2 w-5 h-5" />
            </ButtonPrimary>
            <ButtonSecondary 
              className="w-full sm:w-auto min-w-[200px]"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Zobacz realizacje
            </ButtonSecondary>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <MousePointer2 className="w-5 h-5" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
