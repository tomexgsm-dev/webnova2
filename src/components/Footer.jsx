
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { ADMIN_EMAIL } from '@/config/emailConfig';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Grid: 5 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                <Code2 size={20} />
              </div>
              <span className="text-xl font-bold font-sora text-white">
                Web<span className="text-blue-500">Nova</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              WebNova - Tworzymy nowoczesne strony internetowe, sklepy online i aplikacje webowe dla firm z Poznania i całej Polski.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-sora">Nawigacja</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                  Oferta
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-sora">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${ADMIN_EMAIL}`} className="group flex items-start gap-3 text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-blue-500 group-hover:text-blue-400 mt-0.5" />
                  <span className="text-sm break-all">{ADMIN_EMAIL}</span>
                </a>
              </li>
              <li>
                <a href="tel:+48669582886" className="group flex items-start gap-3 text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-purple-500 group-hover:text-purple-400 mt-0.5" />
                  <span className="text-sm">+48 669 582 886</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-emerald-500 mt-0.5" />
                  <span className="text-sm">Poznań / Tarnowo Podgórne</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-sora">Social Media</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-blue-500 transition-colors group">
                <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Facebook size={16} />
                </div>
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-pink-500 transition-colors group">
                <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-all">
                  <Instagram size={16} />
                </div>
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group">
                <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center group-hover:bg-blue-400 group-hover:text-white transition-all">
                  <Linkedin size={16} />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Column 5: Legal */}
          <div className="hidden lg:block"> 
             <h4 className="text-lg font-bold text-white mb-6 font-sora">Dokumenty</h4>
             <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm">Polityka Prywatności</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 text-sm">Regulamin</a></li>
             </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm text-center md:text-left">
            © 2026 WebNova. Wszelkie prawa zastrzeżone.
          </p>
          
          {/* Mobile Legal Links */}
          <div className="lg:hidden flex gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Polityka Prywatności</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
