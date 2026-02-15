import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const ButtonSecondary = ({ children, className, onClick, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600",
        "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default ButtonSecondary;