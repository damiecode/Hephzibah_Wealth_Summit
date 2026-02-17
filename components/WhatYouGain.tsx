
import React from 'react';

const GAINS = [
  {
    title: "Identity",
    description: "Understand who you are in God and how that shapes your purpose and financial growth.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Clarity",
    description: "Gain practical insights on money, mindset, and lifestyle choices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75V19a2 2 0 11-4 0v-.25c0-1.035-.32-2.04-.913-2.873l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Influence",
    description: "Learn how to use your voice, gifts, and platform to create impact and wealth beyond money.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    )
  },
  {
    title: "Action Plan",
    description: "Leave with a simple, personal action plan you can begin applying immediately.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  }
];

export const WhatYouGain: React.FC = () => {
  return (
    <section className="py-24 bg-[#1f1f1d] relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Takeaway</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">What You Will Gain</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {GAINS.map((gain, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-gold/50 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08]"
            >
              <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                {gain.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">{gain.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {gain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
