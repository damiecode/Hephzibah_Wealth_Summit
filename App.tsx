
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Speakers } from './components/Speakers';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { Navigation } from './components/Navigation';

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
    <div className="min-h-screen bg-white text-gray-900 scroll-smooth">
      <Navigation scrolled={scrolled} onRegisterClick={openModal} />
      
      <main>
        <Hero onRegisterClick={openModal} />
        <About />
        <Speakers />
      </main>

      <Footer onRegisterClick={openModal} />

      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
