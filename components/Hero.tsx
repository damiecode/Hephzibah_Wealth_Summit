
import React from 'react';
import { SUMMIT_DATE, THEME, SUMMIT_TIME, VENUE, TAGLINE } from '../constants';

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-[#1f1f1d]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#1f1f1d]/60 to-[#1f1f1d] z-0"></div>
      
      {/* Decorative Texture */}
      <div className="absolute inset-0 opacity-10 z-[-1]">
        <img 
          src="https://www.transparenttextures.com/patterns/dark-matter.png" 
          alt="Texture" 
          className="w-full h-full object-repeat"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <div className="mb-6 flex justify-center animate-fade-in">
          {/* Logo at the Top */}
          <div className="bg-white/5 p-4 rounded-full backdrop-blur-sm border border-white/10">
            <img 
              src="https://i.imgur.com/rM7sX9i.png" 
              alt="Hephzibah Logo" 
              className="h-24 md:h-32 object-contain"
              style={{ filter: 'drop-shadow(0 0 10px rgba(201, 162, 77, 0.5))' }}
            />
          </div>
        </div>

        <div className="mb-6 inline-block">
          <span className="text-brand-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
            Wealth & Influence Summit 2026
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight max-w-5xl mx-auto drop-shadow-2xl">
          Identify. Clarity. <br />
          <span className="text-brand-gold">Influence.</span>
        </h1>

        <p className="text-lg md:text-xl font-light mb-4 text-white/80 max-w-2xl mx-auto">
          {TAGLINE}
        </p>
        
        <p className="text-sm md:text-base mb-10 text-brand-gold italic tracking-wide">
          "God's Way"
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12 text-sm md:text-lg">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-semibold">{SUMMIT_DATE}</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">{SUMMIT_TIME}</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-semibold">{VENUE}</span>
          </div>
        </div>

        <button 
          onClick={onRegisterClick}
          className="bg-brand-gold hover:bg-[#b89140] text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(201,162,77,0.3)] active:scale-95"
        >
          Secure Your Free Seat
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block opacity-50">
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold to-transparent mx-auto"></div>
      </div>
    </section>
  );
};
