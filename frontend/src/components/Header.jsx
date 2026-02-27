import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div
          onClick={() => scrollToSection('hero')}
          className="cursor-pointer"
        >
          <h1 className="text-2xl md:text-3xl font-light tracking-widest text-[#d4af37] font-['Playfair_Display']">
            TAJANSTVENI UMJETNIK
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('o-njemu')}
            className="text-sm tracking-wider uppercase hover:text-[#d4af37] transition-colors duration-300"
          >
            O Njemu
          </button>
          <button
            onClick={() => scrollToSection('djela')}
            className="text-sm tracking-wider uppercase hover:text-[#d4af37] transition-colors duration-300"
          >
            Djela
          </button>
          <button
            onClick={() => scrollToSection('izlozbe')}
            className="text-sm tracking-wider uppercase hover:text-[#d4af37] transition-colors duration-300"
          >
            Izložbe
          </button>
          <button
            onClick={() => scrollToSection('kontakt')}
            className="text-sm tracking-wider uppercase hover:text-[#d4af37] transition-colors duration-300"
          >
            Kontakt
          </button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#d4af37]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md mt-4">
          <nav className="flex flex-col items-center space-y-6 py-8">
            <button
              onClick={() => scrollToSection('o-njemu')}
              className="text-sm tracking-wider uppercase hover:text-[#d4af37] transition-colors duration-300"
            >
              O Njemu
            </button>
            <button
              onClick={() => scrollToSection('djela')}
              className="text-sm tracking-wider uppercase hover:text-[#d4af37] transition-colors duration-300"
            >
              Djela
            </button>
            <button
              onClick={() => scrollToSection('izlozbe')}
              className="text-sm tracking-wider uppercase hover:text-[#d4af37] transition-colors duration-300"
            >
              Izložbe
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-sm tracking-wider uppercase hover:text-[#d4af37] transition-colors duration-300"
            >
              Kontakt
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
