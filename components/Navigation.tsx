
import React from 'react';

interface NavigationProps {
  scrolled: boolean;
  onRegisterClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ scrolled, onRegisterClick }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/logo.png" 
            alt="Hephzibah" 
            className={`w-12 h-12 object-contain transition-all ${scrolled ? 'brightness-50' : 'brightness-100'}`}
            onError={(e) => {
               // Fallback if logo URL provided in prompt is strictly local
               (e.target as any).style.display = 'none';
            }}
          />
          <span className={`font-serif font-bold text-lg hidden sm:block ${
            scrolled ? 'text-deep-dark' : 'text-white'
          }`}>
            Hephzibah
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={onRegisterClick}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              scrolled 
                ? 'bg-brand-gold text-white hover:bg-[#b89140]' 
                : 'bg-brand-gold text-white hover:bg-[#b89140] shadow-lg'
            }`}
          >
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
};
