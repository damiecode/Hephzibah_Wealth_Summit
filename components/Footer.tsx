
import React from 'react';
import { MISSION, TAGLINE } from '../constants';

interface FooterProps {
  onRegisterClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRegisterClick }) => {
  return (
    <footer className="bg-[#1f1f1d] text-white py-24 border-t border-brand-gold/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 border-b border-white/5 pb-16">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                <img 
                  src="https://i.imgur.com/rM7sX9i.png" 
                  alt="Hephzibah Logo" 
                  className="h-10 object-contain"
                />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight">Hephzibah</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              {MISSION}
            </p>
            <div className="pt-4">
               <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-gold mb-2">Our Tagline</p>
               <p className="text-gray-300 italic text-sm">"{TAGLINE}"</p>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">Resources</h4>
            <ul className="space-y-5 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-brand-gold transition-colors flex items-center gap-2">About the Community</a></li>
              <li><a href="#speakers" className="hover:text-brand-gold transition-colors flex items-center gap-2">Meet the Speakers</a></li>
              <li><button onClick={onRegisterClick} className="hover:text-brand-gold transition-colors text-left">Event Registration</button></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy & Stewardship</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-brand-gold font-bold uppercase tracking-[0.2em] text-xs">Stay Connected</h4>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'LinkedIn', 'WhatsApp'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-500 group"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-1.5 h-1.5 bg-brand-gold group-hover:bg-white rounded-full"></div>
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Contact us: <br />
              <a href="mailto:info@hephzibahcommunity.org" className="text-white hover:text-brand-gold transition-colors underline decoration-brand-gold underline-offset-4">info@hephzibahcommunity.org</a>
            </p>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-xs tracking-widest uppercase">
            © 2026 Hephzibah | Faith • Clarity • Wealth
          </p>
          <div className="flex items-center gap-4 text-xs font-serif italic text-brand-gold">
            <span>Identity. Clarity. Influence. God’s Way.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
