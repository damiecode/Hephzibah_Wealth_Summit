
import React from 'react';
import { SUMMIT_DATE, THEME, SUMMIT_TIME, VENUE, TAGLINE } from '../constants';

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#1f1f1d]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#1f1f1d]/40 to-[#1f1f1d] z-0"></div>
      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-[-1] pointer-events-none">
        <img 
          src="https://www.transparenttextures.com/patterns/black-paper.png" 
          alt="Texture" 
          className="w-full h-full object-repeat"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <div className="mb-8 flex justify-center animate-fade-in">
          <div className="p-2 border-b border-brand-gold/30">
            <img 
              src="https://lh3.googleusercontent.com/d/1gEvyf7EEmiwuASuINbRrXRszxYpkd078" 
              alt="Hephzibah Logo" 
              className="h-28 md:h-36 object-contain brightness-0 invert"
              style={{ filter: 'drop-shadow(0 0 15px rgba(201, 162, 77, 0.4))' }}
            />
          </div>
        </div>

        <div className="mb-4">
          <span className="text-brand-gold font-bold tracking-[0.4em] uppercase text-xs md:text-sm">
            Wealth & Influence Summit 2026
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-semibold mb-8 leading-tight max-w-6xl mx-auto drop-shadow-2xl">
          Identify. Clarity. <br />
          <span className="text-brand-gold italic">Influence.</span>
        </h1>

        <p className="text-lg md:text-2xl font-light mb-4 text-white/90 max-w-3xl mx-auto font-serif italic">
          {TAGLINE}
        </p>
        
        <p className="text-sm md:text-base mb-12 text-brand-gold tracking-[0.2em] font-medium uppercase">
          God's Way
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-12 text-sm md:text-lg border-y border-white/10 py-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium tracking-wide">{SUMMIT_DATE}</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium tracking-wide">{SUMMIT_TIME}</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-medium tracking-wide">{VENUE}</span>
          </div>
        </div>

        <button 
          onClick={onRegisterClick}
          className="bg-brand-gold hover:bg-[#b89140] text-white font-bold py-5 px-14 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-[0_10px_40px_rgba(201,162,77,0.4)] active:scale-95 border-2 border-white/20"
        >
          Secure Your Free Seat
        </button>
      </div>
    </section>
  );
};
