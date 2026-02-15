
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ButtonSecondary } from '@/components/buttons';

const WhatsAppButton = ({ className }) => {
  const phoneNumber = '48669582886';
  const message = 'Cześć! Jestem zainteresowany współpracą z WebNova.';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <ButtonSecondary 
      onClick={handleClick}
      className={`bg-[#25D366]/10 text-[#25D366] border-[#25D366]/20 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] flex items-center gap-2 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      Napisz na WhatsApp
    </ButtonSecondary>
  );
};

export default WhatsAppButton;
