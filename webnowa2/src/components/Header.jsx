
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonPrimary } from '@/components/buttons';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Strona główna', href: '/' },
    { name: 'Strony internetowe', href: '/websites' },
    { name: 'Sklepy internetowe', href: '/online-stores' },
    { name: 'Aplikacje webowe', href: '/web-applications' },
    { name: 'SEO i optymalizacja', href: '/seo-optimization' },
    { name: 'Oferta', href: '/services' },
    { name: 'Cennik', href: '/pricing' },
    { name: 'Kalkulator PRO', href: '/advanced-pricing' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Opinie', href: '/testimonials' },
    { name: 'Kontakt', href: '/contact' },
  ];

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    navigate('/contact');
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
            <Code2 size={24} />
          </div>
          <span className="text-xl font-bold font-sora text-white tracking-tight">
            Web<span className="text-blue-400">Nova</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/5 overflow-x-auto scrollbar-hide max-w-[calc(100vw-350px)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <ButtonPrimary 
            className="px-6 py-2.5 text-sm"
            onClick={handleContactClick}
          >
            Zamów wycenę
          </ButtonPrimary>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 overflow-hidden h-screen"
          >
            <div className="flex flex-col p-6 gap-4 overflow-y-auto max-h-[calc(100vh-80px)]">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-lg font-medium text-slate-300 hover:text-blue-400 py-2 border-b border-white/5 block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 pb-20"
              >
                <ButtonPrimary 
                  className="w-full"
                  onClick={handleContactClick}
                >
                  Zamów wycenę
                </ButtonPrimary>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
