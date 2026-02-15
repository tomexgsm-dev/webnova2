
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '@/data/TestimonialsData';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const TestimonialCard = ({ testimonial, index }) => {
  const initials = testimonial.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg flex flex-col h-full relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300"
    >
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8 transition-opacity duration-300 opacity-50 group-hover:opacity-100" />

      {/* Header */}
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-inner ring-2 ring-slate-900/80">
            {testimonial.avatar ? testimonial.avatar : initials}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white text-lg leading-tight font-sora drop-shadow-sm">
            {testimonial.name}
          </h4>
          <span className="text-sm text-blue-400 font-medium">
            {testimonial.service}
          </span>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`} 
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-slate-200 text-base italic leading-relaxed mb-6 flex-grow relative z-10 drop-shadow-sm">
        "{testimonial.text}"
      </p>

      {/* Footer */}
      <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
        <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
          {testimonial.date}
        </span>
        <Quote className="w-6 h-6 text-slate-600 group-hover:text-blue-500/50 transition-colors" />
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    // Updated background to transparent
    <section id="testimonials" className="py-24 bg-transparent relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-sora text-white mb-6 drop-shadow-lg">
            Opinie Klientów <span className="text-blue-400">WebNova</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-200 text-lg max-w-2xl mx-auto drop-shadow-md">
            Zaufanie buduje się latami. Oto co mówią osoby, z którymi miałem przyjemność współpracować w ramach WebNova.
          </motion.p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
