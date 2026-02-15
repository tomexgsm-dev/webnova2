
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, ChevronLeft } from 'lucide-react';
import { ButtonSecondary } from '@/components/buttons';
import { fadeInUp, staggerContainer } from '@/utils/animations';

const projects = [
  {
    id: 'gusto',
    title: 'Gusto Restaurant',
    category: 'Web Design & Branding',
    description: 'Ekskluzywna strona internetowa dla restauracji premium z systemem rezerwacji. Design podkreślający luksusowy charakter marki.',
    image: 'https://horizons-cdn.hostinger.com/c00abec9-6d45-4404-89bf-6c541ad7e487/e99a2b30afdd96e69daf1236ebe20c50.jpg',
    tags: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
    url: 'https://feast-folio-shop.lovable.app/'
  },
  {
    id: 'shop-pro',
    title: 'Sklep Internetowy Pro',
    category: 'E-commerce Platform',
    description: 'Zaawansowana platforma sprzedażowa z integracją płatności Stripe i zarządzaniem magazynem w czasie rzeczywistym.',
    image: 'https://horizons-cdn.hostinger.com/c00abec9-6d45-4404-89bf-6c541ad7e487/a696033a09a47307df3c8df316995eb6.jpg',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    url: 'https://commerce-integrator-hub.lovable.app/'
  },
  {
    id: 'ananas',
    title: 'Ananas na Dźwigu',
    category: 'Product Landing Page',
    description: 'Nowoczesna witryna produktowa z bogatymi animacjami i interaktywnym storytellingiem. High-end experience.',
    image: 'https://horizons-cdn.hostinger.com/c00abec9-6d45-4404-89bf-6c541ad7e487/56340028b772994b662405519342f853.jpg',
    tags: ['Framer Motion', 'React', 'Tailwind'],
    url: 'https://pineapple-crane-showcase.lovable.app/'
  },
  {
    id: 'optifood',
    title: 'OptiFoodUltraPro',
    category: 'Industrial Dashboard',
    description: 'Platforma SaaS do optymalizacji procesów w przemyśle spożywczym z wizualizacją danych w czasie rzeczywistym.',
    image: 'https://horizons-cdn.hostinger.com/c00abec9-6d45-4404-89bf-6c541ad7e487/b0788ad1776c8fa0be0dbfa94b9d112f.jpg',
    tags: ['React', 'D3.js', 'IoT', 'Dashboard'],
    url: 'https://build-your-happy-pages.lovable.app/'
  },
  {
    id: 'web-app-auto',
    title: 'Aplikacja webowa',
    category: 'Web Application',
    description: 'Nowoczesna aplikacja webowa z intuicyjnym interfejsem, zaprojektowana do automatyzacji procesów biznesowych i zarządzania danymi online.',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b',
    tags: ['Web Application', 'React', 'Automation', 'Dashboard'],
    url: 'https://dodgerblue-armadillo-651497.hostingersite.com/'
  }
];

const PortfolioSection = () => {
  return (
    // Updated background to transparent for global background visibility
    <section id="portfolio" className="py-24 bg-transparent relative border-t border-white/5">
      <div className="container mx-auto px-4">
        
        {/* Top Back Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-16 pt-4 relative z-50"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Wróć
          </button>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-sora text-white mb-6 drop-shadow-lg">
              Realizacje <span className="text-blue-400">WebNova</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-200 text-lg drop-shadow-md">
              Przykłady projektów, które pomogły moim klientom osiągnąć ich cele biznesowe.
            </motion.p>
          </div>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-3/5 group relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 cursor-pointer block ring-1 ring-white/10"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10 duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
                {/* Floating Action Button on Image */}
                <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </a>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 space-y-6">
                <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm drop-shadow-sm">
                  {project.category}
                </span>
                <h3 className="text-4xl font-bold font-sora text-white drop-shadow-md">
                  {project.title}
                </h3>
                <p className="text-slate-200 text-lg leading-relaxed drop-shadow-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-900/60 backdrop-blur-sm text-slate-300 text-sm rounded-full border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <ButtonSecondary 
                    className="px-6 rounded-full bg-slate-900/60 backdrop-blur-sm border-white/20 hover:bg-slate-800/80"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    Zobacz live <ExternalLink className="ml-2 w-4 h-4" />
                  </ButtonSecondary>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
