
import React from 'react';

interface NavigationProps {
  scrolled: boolean;
  onRegisterClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ scrolled, onRegisterClick }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-[#1f1f1d] shadow-lg py-3 border-b border-brand-gold/10' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="https://lh3.googleusercontent.com/d/1gEvyf7EEmiwuASuINbRrXRszxYpkd078" 
            alt="Hephzibah" 
            className="w-10 h-10 object-contain brightness-0 invert"
          />
          <span className={`font-serif font-bold text-lg hidden sm:block text-white`}>
            Hephzibah
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={onRegisterClick}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 bg-brand-gold text-white hover:bg-[#b89140] shadow-lg`}
          >
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
};
