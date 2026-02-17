
import React from 'react';
import { MISSION } from '../constants';

export const About: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-gold/10 rounded-full z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
              alt="Women in Purpose" 
              className="rounded-2xl shadow-2xl relative z-10 w-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute -bottom-10 -right-10 bg-[#1f1f1d] text-white p-8 rounded-2xl shadow-xl z-20 hidden md:block max-w-xs border-r-4 border-brand-gold">
              <p className="text-xl font-serif italic">"Faith. Emotional Clarity. Wealth in Him."</p>
            </div>
          </div>

          <div>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">About the Ministry</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-dark mb-8 leading-tight">
              A Ministry for <span className="text-brand-gold">Women of Purpose</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p className="font-medium text-deep-dark">
                {MISSION}
              </p>
              <p>
                Hephzibah is a community dedicated to alignment. We believe that true wealth and influence are the natural outcomes of a soul that has found its identity in God and clarity in its mission.
              </p>
              <ul className="space-y-4">
                {[
                  "Finding Identity: Understanding your divine worth.",
                  "Emotional Clarity: Peace that transcends market volatility.",
                  "Alignment with God: Financial strategies rooted in stewardship.",
                  "Kingdom Community: Supporting sisters in their global growth."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
