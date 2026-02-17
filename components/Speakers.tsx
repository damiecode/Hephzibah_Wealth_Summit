
import React from 'react';
import { SPEAKERS } from '../constants';

export const Speakers: React.FC = () => {
  return (
    <section className="py-24 bg-[#faf9f6]" id="speakers">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 block">Session Leaders</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-dark mb-4">Our Speakers</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPEAKERS.map((speaker) => (
            <div key={speaker.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1d]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="bg-brand-gold/20 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                    <p className="text-white text-xs font-medium uppercase tracking-tighter">Session Format</p>
                    <p className="text-white text-sm font-serif italic">
                      {speaker.id === 1 ? 'Keynote Address' : speaker.id === 4 ? 'Influence Panel' : 'Clarity Workshop'}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-deep-dark mb-1">{speaker.name}</h3>
                <p className="text-brand-gold font-medium text-xs uppercase tracking-widest mb-4">{speaker.title}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">"{speaker.topic}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
