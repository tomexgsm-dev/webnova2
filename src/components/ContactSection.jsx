
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, MessageCircle, Mail, Phone, CheckCircle2, AlertTriangle, ArrowLeft } from 'lucide-react';
import { ButtonPrimary, ButtonSecondary } from '@/components/buttons';
import { useToast } from '@/components/ui/use-toast';
import { fadeInUp, staggerContainer } from '@/utils/animations';
import { sendContactEmail } from '@/utils/sendEmails';
import { ADMIN_EMAIL } from '@/config/emailConfig';

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const validateForm = () => {
    if (!formData.name.trim()) return "Podaj imię lub nazwę firmy.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Podaj poprawny email.";
    if (!formData.message.trim() || formData.message.length < 5) return "Wpisz treść wiadomości.";
    return null;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const error = validateForm();
    if (error) {
      setErrorMsg(error);
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitted(true);
        toast({
          title: "Sukces!",
          description: "Wiadomość została wysłana.",
          className: "bg-green-50 border-green-200 text-green-900"
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Submit Error:', error);
      const msg = error.message || 'Nie udało się wysłać wiadomości.';
      setErrorMsg(msg);
      toast({
        variant: "destructive",
        title: "Błąd wysyłania",
        description: msg
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-start"
        >
          {/* Left Column - Info */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-sora text-white mb-6 drop-shadow-lg">
                Skontaktuj się <span className="text-blue-400">z WebNova</span>
              </h2>
              <p className="text-slate-200 text-lg leading-relaxed drop-shadow-md">
                Chcesz porozmawiać o nowym projekcie? Wypełnij formularz lub napisz do mnie bezpośrednio.
                Analiza i wstępna wycena są zawsze darmowe w WebNova.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href={`mailto:${ADMIN_EMAIL}`} 
                className="flex items-center gap-4 text-slate-200 group hover:text-blue-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-slate-900/80 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg border border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-wide">Email</p>
                  <p className="text-lg font-medium drop-shadow-sm">{ADMIN_EMAIL}</p>
                </div>
              </a>
              
              <a 
                href="tel:+48669582886" 
                className="flex items-center gap-4 text-slate-200 group hover:text-blue-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-slate-900/80 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg border border-white/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-wide">Telefon</p>
                  <p className="text-lg font-medium drop-shadow-sm">+48 669 582 886</p>
                </div>
              </a>
            </div>

            <div className="pt-8">
              <button 
                onClick={() => window.open('https://wa.me/48669582886', '_blank')}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300 flex items-center justify-center gap-3 border border-white/10"
              >
                <MessageCircle className="w-6 h-6" />
                Szybki kontakt przez WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            variants={fadeInUp}
            className="bg-slate-900/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl h-full"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center space-y-6 py-12 h-full"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-2">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold font-sora text-white">
                  Dziękujemy!
                </h3>
                <p className="text-slate-300 text-lg">
                  Wiadomość została wysłana. Dziękujemy za kontakt!
                </p>
                <ButtonSecondary 
                  onClick={() => setSubmitted(false)}
                  className="mt-6"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Wróć do formularza
                </ButtonSecondary>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMsg && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-900/20 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-200 text-sm"
                  >
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </motion.div>
                )}

                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Imię / Firma <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    disabled={loading}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Twoje imię lub nazwa firmy"
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    disabled={loading}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="adres@email.com"
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    disabled={loading}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Opcjonalnie"
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600 disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2">Jak WebNova może Ci pomóc? <span className="text-red-500">*</span></label>
                  <textarea
                    name="message"
                    rows={4}
                    disabled={loading}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Opisz krótko swój projekt..."
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none placeholder:text-slate-600 disabled:opacity-50"
                  />
                </div>
                
                <ButtonPrimary 
                  type="submit" 
                  disabled={loading}
                  className="w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin w-5 h-5" /> Wysyłanie...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" /> Wyślij wiadomość
                    </span>
                  )}
                </ButtonPrimary>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
