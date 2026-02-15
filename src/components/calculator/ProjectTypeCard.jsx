
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const ProjectTypeCard = ({ icon: Icon, title, description, price, isSelected, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col h-full",
        isSelected 
          ? "bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/20" 
          : "bg-slate-900/60 border-white/10 hover:border-white/20 hover:bg-slate-800/60"
      )}
    >
      {/* Selection Indicator */}
      <div className={cn(
        "absolute top-4 right-4 w-6 h-6 rounded-full border flex items-center justify-center transition-colors",
        isSelected
          ? "bg-blue-500 border-blue-500 text-white"
          : "border-slate-600 bg-transparent text-transparent"
      )}>
        <CheckCircle2 size={14} />
      </div>

      <div className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors",
        isSelected ? "bg-blue-500 text-white" : "bg-slate-800 text-blue-400"
      )}>
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-bold text-white mb-2 font-sora">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
        {description}
      </p>

      <div className={cn(
        "mt-auto pt-4 border-t border-dashed transition-colors",
        isSelected ? "border-blue-500/30" : "border-white/10"
      )}>
        <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">
          Szacowany koszt
        </span>
        <span className={cn(
          "text-2xl font-bold font-sora",
          isSelected ? "text-blue-300" : "text-white"
        )}>
          {price}
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectTypeCard;
