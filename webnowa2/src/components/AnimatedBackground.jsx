
import React from 'react';
import './TechBackground.css';

const AnimatedBackground = () => {
  return (
    <div 
      className="absolute inset-0 w-full h-full -z-50"
      style={{
        backgroundImage: "url('https://horizons-cdn.hostinger.com/c00abec9-6d45-4404-89bf-6c541ad7e487/827d26ce17143a3ab9e8860b7c77d189.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
};

export default AnimatedBackground;
