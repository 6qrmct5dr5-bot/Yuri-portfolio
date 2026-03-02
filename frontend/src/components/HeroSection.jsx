import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToGallery = () => {
    const element = document.getElementById('djela');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6"
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

      <div className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-widest mb-16 font-['Playfair_Display'] text-white">
          YURI
        </h1>
        
        <div className="space-y-8 text-lg md:text-2xl text-white max-w-4xl mx-auto mb-16">
          <p className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Yuri predstavlja rijetkog stvaratelja čiji rad nadilazi konvencionalne okvire suvremene umjetnosti. Njegova djela karakterizira jedinstvena sinteza klasičnih tehnika i inovativnog pristupa materijalima, stvarajući radove koji provociraju duboku kontemplaciju i emocionalni angažman.
          </p>
          <p className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            U radu koristi <span className="text-white italic">zlato ručno obrađeno po starim renesansnim tehnikama</span>, onako kako su ga pripremali majstori prošlih stoljeća. Spoj ovog plemenitog zlata i autorskog tajnog materijala kojeg Yuri miješa u boju stvara nešto nalik na <strong>PRIMA MATERIJU</strong> — kompoziciju čija vizualna i energetska dimenzija transcendira uobičajene granice medija i uspostavlja jedinstvenu vezu s prostorom za koji je djelo namijenjeno.
          </p>
        </div>

        {/* Expanded content */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-lg text-left">
            <div>
              <h3 className="text-2xl font-['Playfair_Display'] text-white mb-3">
                Magični Aparatus u Obliku Slike - Alkemija Pretočena u Kompoziciju
              </h3>
              <p className="text-base text-white leading-relaxed">
                Njegove površine dišu. Pod svjetlom mijenjaju ton, reagiraju na pogled. 
                Oni koji ih dovoljno dugo promatraju teško se odmiču — postaju dio slike.
              </p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/30 rounded-lg text-left">
            <h3 className="text-2xl font-light text-white font-['Playfair_Display'] mb-4">
              Samo 100 Djela
            </h3>
            <p className="text-base text-white leading-relaxed mb-4">
              To nije broj, to je zavjet. Svako nosi impuls nečeg što bira svog vlasnika.
            </p>
            <div className="space-y-2 text-sm text-white">
              <div className="flex justify-between items-center border-b border-[#d4af37]/20 pb-2">
                <span>Trenutno ekskluzivno dostupno:</span>
                <span className="text-[#d4af37]">1, prvo djelo</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#d4af37]/20 pb-2">
                <span>Preostalo:</span>
                <span className="text-[#d4af37]">99 darova skrivenih svijetova</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Status:</span>
                <span className="text-[#d4af37]">Početak putovanja</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final questions */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <p className="text-xl md:text-2xl text-white italic">
            Kad te izabere, pogled više nikada nije isti.
          </p>
          <p className="text-2xl md:text-4xl text-white font-light tracking-wider font-['Playfair_Display']">
            Jesi li odabran?
          </p>
          
          <button
            onClick={scrollToGallery}
            className="group inline-flex flex-col items-center space-y-2 hover:scale-110 transition-transform duration-300 mt-12"
          >
            <span className="text-sm tracking-widest uppercase text-white">
              Pogledaj Djelo 1/100
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
