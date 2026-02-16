import React from 'react';

const FuturisticBackground = () => {
  // Updated vibrant futuristic image
  const bgImage = "https://horizons-cdn.hostinger.com/c00abec9-6d45-4404-89bf-6c541ad7e487/a86350a0a54ee3eb16eef98b8643956e.jpg";

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-slate-950">
      {/* 
        1. Base Background Image 
        - Fixed position for parallax feel
        - Covers full viewport
      */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
        aria-hidden="true"
      />

      {/* 
        2. Dark Overlay
        - Lighter overlay (30%) to maintain vibrancy of the new image
        - Ensures text readability without hiding the background details
      */}
      <div 
        className="absolute inset-0 bg-black/30"
      />
      
      {/* 
        3. Gradient Overlay
        - Subtle gradient to reinforce the theme at the edges but kept light
      */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/40 pointer-events-none"
      />
    </div>
  );
};

export default FuturisticBackground;