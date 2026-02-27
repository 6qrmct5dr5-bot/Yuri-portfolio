import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('o-njemu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a]">
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: 'radial-gradient(circle at 50% 50%, #d4af37 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-widest mb-12 font-['Playfair_Display'] text-[#d4af37]">
          TAJANSTVENI<br />UMJETNIK
        </h1>
        
        <div className="space-y-8 text-lg md:text-2xl opacity-90">
          <p className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            O njemu se zna samo ono što naslutimo.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Njegova djela nadilaze tehniku —
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            u njima je prisutnost prostora između misli, između svjetova.
          </p>
        </div>

        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <button
            onClick={scrollToAbout}
            className="group inline-flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300"
          >
            <span className="text-sm tracking-widest uppercase text-[#d4af37]">
              Otkrij Više
            </span>
            <ChevronDown 
              className="w-6 h-6 text-[#d4af37] animate-bounce" 
            />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 1s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
