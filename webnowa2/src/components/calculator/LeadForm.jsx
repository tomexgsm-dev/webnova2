
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Send, Loader2, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { sendQuoteEmails } from '@/utils/sendEmails';

const LeadForm = ({ projectDetails }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState(null);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    // Basic phone validation: check if contains digits and has min length
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length >= 9;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Imię / Firma jest wymagane';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Nieprawidłowy format email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon jest wymagany';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Nieprawidłowy numer (min. 9 cyfr)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Błąd walidacji",
        description: "Sprawdź poprawność wypełnionych pól",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setApiError(null);

    try {
      // 1. Send emails via EmailJS
      const emailResult = await sendQuoteEmails({
        ...formData,
        primaryContactEmail: 'Tomexgsm@gmail.com'
      }, projectDetails);

      if (emailResult.success) {
        // 2. Store in localStorage (backup/legacy behavior)
        const leadData = {
          ...formData,
          projectDetails,
          timestamp: new Date().toISOString()
        };
        const existingLeads = JSON.parse(localStorage.getItem('priceCalculatorLeads') || '[]');
        existingLeads.push(leadData);
        localStorage.setItem('priceCalculatorLeads', JSON.stringify(existingLeads));

        toast({
          title: "Sukces!",
          description: "Przekierowuję do potwierdzenia...",
          className: "bg-green-50 border-green-200 text-green-900"
        });
        
        // Reset form
        setFormData({ name: '', email: '', phone: '', description: '' });
        
        // Redirect to Success Page
        setTimeout(() => navigate('/success'), 500);
      } else {
        throw new Error(emailResult.message);
      }
    } catch (error) {
      console.error('Lead form error:', error);
      setApiError(error.message || "Wystąpił nieoczekiwany błąd");
      toast({
        title: "Błąd wysyłania",
        description: error.message || "Nie udało się wysłać wiadomości.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    if (apiError) setApiError(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-3">
          Odbierz szczegółową wycenę
        </h3>
        <p className="text-gray-600">
          Wypełnij formularz, aby otrzymać wycenę na email.
        </p>
      </div>

      {apiError && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm"
        >
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <span>{apiError}</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Imię / Firma <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading}
            className={`w-full px-4 py-3 bg-white text-gray-900 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all ${
              errors.name ? 'border-red-500' : 'border-gray-200'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder="Jan Kowalski"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            className={`w-full px-4 py-3 bg-white text-gray-900 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all ${
              errors.email ? 'border-red-500' : 'border-gray-200'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder="jan@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Telefon / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isLoading}
            className={`w-full px-4 py-3 bg-white text-gray-900 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all ${
              errors.phone ? 'border-red-500' : 'border-gray-200'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder="+48 669 582 886"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Opis projektu (opcjonalnie)
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            disabled={isLoading}
            rows={4}
            className={`w-full px-4 py-3 bg-white text-gray-900 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all resize-none ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder="Opowiedz nam więcej o swoim projekcie..."
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-6 text-lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Wysyłanie wyceny...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Odbierz dokładną wycenę
            </>
          )}
        </Button>

        <p className="text-xs text-center text-gray-500">
          * Pola wymagane. Twoje dane są bezpieczne.
        </p>
      </form>
    </motion.div>
  );
};

export default LeadForm;
