
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { WhatYouGain } from './components/WhatYouGain.tsx';
import { Speakers } from './components/Speakers.tsx';
import { Footer } from './components/Footer.tsx';
import { RegistrationModal } from './components/RegistrationModal.tsx';
import { Navigation } from './components/Navigation.tsx';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#1f1f1d] text-white scroll-smooth">
      <Navigation scrolled={scrolled} onRegisterClick={openModal} />
      
      <main>
        <Hero onRegisterClick={openModal} />
        <About />
        <WhatYouGain />
        <Speakers />
      </main>

      <Footer onRegisterClick={openModal} />

      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
