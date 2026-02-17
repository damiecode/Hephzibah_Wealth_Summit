
import React, { useState } from 'react';
import { FormData } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    occupation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Tracking simulation: This is where you'd link to Google Sheets, Formspree, etc.
    console.log("Tracking data for registration:", formData);
    
    // Simulate API call to a backend or tracking service
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', phone: '', occupation: '' });
        onClose();
      }, 4000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#1f1f1d]/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className={`relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 scale-100 ${
        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-brand-gold transition-colors z-10"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSuccess ? (
          <div className="p-8 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-deep-dark mb-2">Join the Community</h2>
              <p className="text-gray-500 italic">Faith • Emotional Clarity • Wealth in Him</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/10 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email Address</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/10 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">WhatsApp / Phone</label>
                <input 
                  required
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/10 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Occupation (Optional)</label>
                <input 
                  type="text" 
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="What do you do?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/10 outline-none transition-all"
                />
              </div>

              <div className="pt-4">
                <button 
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2 ${
                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-gold hover:bg-[#b89140] active:scale-95 shadow-brand-gold/20'
                  }`}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : 'Confirm Registration'}
                </button>
              </div>
            </form>
            <p className="text-[10px] text-center text-gray-400 mt-6 uppercase tracking-[0.2em]">Hephzibah Community • 2026</p>
          </div>
        ) : (
          <div className="p-12 text-center flex flex-col items-center justify-center min-h-[450px]">
            <div className="w-24 h-24 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-8 animate-bounce">
              <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-serif font-bold text-deep-dark mb-4">You're In!</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
              Thank you, <span className="font-bold text-brand-gold">{formData.name}</span>! <br />
              Check your email or WhatsApp shortly for access details.
            </p>
            <p className="mt-12 text-xs text-gray-400 uppercase tracking-widest">A ministry for women of purpose</p>
          </div>
        )}
      </div>
    </div>
  );
};
