
import React from 'react';
import { SUMMIT_DATE, SUMMIT_TIME, VENUE } from '../constants';

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1f1f1d] py-20">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1f1f1d]/40 to-[#1f1f1d] z-0"></div>
      
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
          <div className="p-2">
            <img 
              src="https://lh3.googleusercontent.com/d/1gEvyf7EEmiwuASuINbRrXRszxYpkd078" 
              alt="Hephzibah Logo" 
              className="h-20 md:h-24 object-contain brightness-0 invert"
              style={{ filter: 'drop-shadow(0 0 10px rgba(201, 162, 77, 0.4))' }}
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold mb-6 leading-tight max-w-5xl mx-auto drop-shadow-2xl">
          Hephzibah Wealth & Influence Summit 2026
        </h1>

        <div className="mb-6">
          <h2 className="text-brand-gold font-serif italic text-2xl md:text-3xl lg:text-4xl tracking-wide">
            Identity. Clarity. Influence. God’s Way.
          </h2>
        </div>

        <p className="text-base md:text-xl font-light mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed">
          A virtual summit designed to empower young professional women to embrace their God-given identity, 
          gain clarity in money and purpose, and learn how to wield influence to build true wealth.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12 text-sm md:text-base border-y border-white/10 py-8 max-w-4xl mx-auto bg-white/5 rounded-2xl backdrop-blur-sm px-8">
          <div className="flex items-center gap-4">
            <div className="bg-brand-gold/20 p-2 rounded-lg">
              <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Date</p>
              <p className="font-semibold">{SUMMIT_DATE}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-brand-gold/20 p-2 rounded-lg">
              <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Time</p>
              <p className="font-semibold">{SUMMIT_TIME}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-brand-gold/20 p-2 rounded-lg">
              <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Venue</p>
              <p className="font-semibold">{VENUE}</p>
            </div>
          </div>
        </div>

        <button 
          onClick={onRegisterClick}
          className="bg-brand-gold hover:bg-[#b89140] text-white font-bold py-5 px-14 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-[0_10px_40px_rgba(201,162,77,0.4)] active:scale-95 border-2 border-white/20 uppercase tracking-widest"
        >
          Register Now
        </button>
      </div>
    </section>
  );
};
