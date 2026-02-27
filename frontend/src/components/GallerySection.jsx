import React, { useEffect, useState, useRef } from 'react';
import { Calendar, Ruler, Palette, Sparkles } from 'lucide-react';
import { firstWork } from '../mock';

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="djela"
      ref={sectionRef}
      className="min-h-screen py-24 px-6 relative"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'radial-gradient(circle at 50% 50%, #d4af37 1px, transparent 1px)',
               backgroundSize: '80px 80px'
             }}>
        </div>
      </div>
      
      <div className={`relative z-10 max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="text-7xl md:text-9xl font-light text-[#d4af37] font-['Playfair_Display'] mb-2">
              1/100
            </div>
            <div className="h-px bg-[#d4af37] w-full"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-light tracking-widest text-white font-['Playfair_Display'] mb-6">
            DJELO KOJE OTVARA SERIJU
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Ovo je prvi korak u putovanje kroz 100 duša. Početak koji se nikada neće ponoviti.
          </p>
        </div>

        {/* Main artwork showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#d4af37]/20 to-transparent blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-lg border-2 border-[#d4af37]/30 group-hover:border-[#d4af37] transition-all duration-500">
              <img
                src={firstWork.image}
                alt={firstWork.title}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              {/* Edition badge */}
              <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm border border-[#d4af37] px-6 py-3 rounded-lg">
                <span className="text-3xl font-['Playfair_Display'] text-[#d4af37] font-bold">
                  {firstWork.edition}
                </span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#d4af37] mb-4">
                {firstWork.title}
              </h3>
              <p className="text-lg opacity-85 leading-relaxed mb-6">
                {firstWork.description}
              </p>
            </div>

            <div className="space-y-4 p-6 bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-lg">
              <div className="flex items-start space-x-3 pb-4 border-b border-[#d4af37]/20">
                <Calendar className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm opacity-60 mb-1">Stvoreno</p>
                  <p className="text-lg">{firstWork.created}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pb-4 border-b border-[#d4af37]/20">
                <Palette className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm opacity-60 mb-1">Medij</p>
                  <p className="text-lg">{firstWork.medium}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pb-4 border-b border-[#d4af37]/20">
                <Ruler className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm opacity-60 mb-1">Dimenzije</p>
                  <p className="text-lg">{firstWork.dimensions}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm opacity-60 mb-1">Status</p>
                  <p className="text-lg text-[#d4af37]">{firstWork.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote section */}
        <div className="mt-20 p-12 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent border border-[#d4af37]/30 rounded-lg text-center">
          <p className="text-2xl md:text-3xl font-light italic text-[#d4af37] mb-6 font-['Playfair_Display']">
            "Svako djelo iz serije je vrata.<br />
            Ovo je prvo koje se otvara."
          </p>
          <p className="text-base opacity-75">
            99 duša još čeka svoj trenutak. 99 svjetova još treba biti oslobođeno.
          </p>
        </div>

        {/* Series counter */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-black/40 border border-[#d4af37]/20 rounded-lg">
            <div className="text-4xl font-light text-[#d4af37] mb-2">1</div>
            <div className="text-sm opacity-60 uppercase tracking-wider">Stvoreno</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/40 rounded-lg">
            <div className="text-4xl font-light text-[#d4af37] mb-2">99</div>
            <div className="text-sm opacity-60 uppercase tracking-wider">Preostalo</div>
          </div>
          <div className="p-6 bg-black/40 border border-[#d4af37]/20 rounded-lg">
            <div className="text-4xl font-light text-[#d4af37] mb-2">100</div>
            <div className="text-sm opacity-60 uppercase tracking-wider">Zavjet</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
