
import emailjs from 'emailjs-com';

// ==========================================
// Email Configuration & Documentation
// ==========================================

// 1. EmailJS Configuration
export const EMAILJS_SERVICE_ID = "service_5veylcb";
export const EMAILJS_TEMPLATE_ID = "template_voltq86";   // ← TEN jest poprawny
export const EMAILJS_PUBLIC_KEY = "7BzoVVvnlH0HM_y7J";

// 2. Admin Email Configuration
export const ADMIN_EMAIL = "tomasz.szymanski@webnovaapp.com";
export const CONTACT_EMAIL = ADMIN_EMAIL; // Alias for backward compatibility

// Initialize EmailJS
export const initEmailJS = () => {
  if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'public_key_placeholder') {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log('✅ EmailJS Initialized');
    } catch (e) {
      console.error('❌ Failed to initialize EmailJS:', e);
    }
  } else {
    console.warn('⚠️ EmailJS Public Key is missing or invalid.');
  }
};

initEmailJS();

// Validation Utility
export const validateEmailConfig = () => {
  return {
    service: !!EMAILJS_SERVICE_ID,
    template: !!EMAILJS_TEMPLATE_ID,
    publicKey: !!EMAILJS_PUBLIC_KEY
  };
};

export default emailjs;
