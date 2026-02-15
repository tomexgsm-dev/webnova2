import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const ButtonPrimary = ({ children, className, onClick, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 rounded-full group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500",
        "shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default ButtonPrimary;