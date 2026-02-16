import React from 'react';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="
        group
        relative z-50
        bg-cyan-400 hover:bg-cyan-300
        text-white font-bold text-lg
        px-8 py-4 
        rounded-lg
        shadow-[0_0_20px_rgba(0,217,255,0.8)] 
        hover:shadow-[0_0_35px_rgba(0,217,255,1)]
        transition-all duration-300 
        transform hover:scale-105 active:scale-95
        animate-pulse hover:animate-none
        flex items-center justify-center gap-3
        mx-auto
        border-2 border-white/20
        min-h-[50px]
      "
      aria-label="Wróć na górę strony"
    >
      <span className="text-xl font-black group-hover:-translate-x-1 transition-transform duration-300">←</span>
      <span className="tracking-wide text-shadow-sm">Wróć na górę</span>
    </button>
  );
};

export default BackToTopButton;