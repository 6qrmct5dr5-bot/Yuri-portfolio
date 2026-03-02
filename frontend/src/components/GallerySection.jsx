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
            {/* Image caption */}
            <div className="mt-3 text-center space-y-1">
              <p className="text-xs text-white/60 italic">
                detalj slike 1/100
              </p>
              <p className="text-xs text-white/50">
                Ime slike član ovog ekskluzivnog kluba će dobiti u pismu.
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-4xl md:text-5xl font-['Playfair_Display'] text-white mb-4">
                {firstWork.title}
              </h3>
              <p className="text-lg text-white leading-relaxed mb-6">
                {firstWork.description}
              </p>
            </div>

            <div className="space-y-4 p-6 bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-lg">
              <div className="flex items-start space-x-3 pb-4 border-b border-[#d4af37]/20">
                <Calendar className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-white/60 mb-1">Stvoreno</p>
                  <p className="text-lg text-white">{firstWork.created}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pb-4 border-b border-[#d4af37]/20">
                <Palette className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-white/60 mb-1">Medij</p>
                  <p className="text-lg text-white">{firstWork.medium}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pb-4 border-b border-[#d4af37]/20">
                <Ruler className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-white/60 mb-1">Dimenzije</p>
                  <p className="text-lg text-white">{firstWork.dimensions}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-white/60 mb-1">Status</p>
                  <p className="text-lg text-[#d4af37]">{firstWork.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote section */}
        <div className="mt-20 p-12 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent border border-[#d4af37]/30 rounded-lg text-center">
          <p className="text-2xl md:text-3xl font-light italic text-white mb-6 font-['Playfair_Display']">
            "Svako djelo iz serije je portal —<br />
            vrata koja se otvaraju samo za Vas."
          </p>
          <p className="text-base text-white">
            99 darova skrivenih svijetova još čeka svoj trenutak. 99 svjetova još treba biti oslobođeno.
          </p>
        </div>

        {/* Exclusive viewing notice */}
        <div className="mt-12 p-8 bg-black/60 border border-[#d4af37]/40 rounded-lg backdrop-blur-sm">
          <div className="flex items-start space-x-4">
            <div className="text-[#d4af37] text-4xl">✦</div>
            <div>
              <h3 className="text-xl font-['Playfair_Display'] text-white mb-3">
                Neometana Kontemplacija Dijela uz Prezentaciju Stručne Osobe
              </h3>
              <p className="text-base text-white leading-relaxed">
                Slika se može vidjeti izložena samo po prethodnom dogovoru na lokaciji koju će umjetnik odabrati te će biti prezentirana individualno za odabranog kolekcionara.
              </p>
            </div>
          </div>
        </div>

        {/* Exclusive collection statement */}
        <div className="mt-12 p-10 bg-gradient-to-br from-[#d4af37]/10 via-black/80 to-black/60 border-2 border-[#d4af37]/50 rounded-lg backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] text-white mb-6 text-center">
            Ekskluzivitet Kolekcije
          </h3>
          <div className="space-y-6 text-base md:text-lg text-white leading-relaxed">
            <p className="flex items-start space-x-3">
              <span className="text-[#d4af37] text-2xl flex-shrink-0">✉</span>
              <span>Uz svako dijelo dobija se <strong>personalizirano pismo autora</strong> namjenjeno osobno kolekcionaru pisano rukom.</span>
            </p>
            <p className="flex items-start space-x-3">
              <span className="text-[#d4af37] text-2xl flex-shrink-0">◆</span>
              <span>Svaki kolekcionar koji postane vlasnik dijela biti će <strong>jedan od samo 100 ljudi na svijetu</strong> koji su u posjedu slike iz kolekcije.</span>
            </p>
            <p className="flex items-start space-x-3">
              <span className="text-[#d4af37] text-2xl flex-shrink-0">∞</span>
              <span>Nakon posljednje slike autor <strong>neće načiniti više niti jedno dijelo</strong> pod nikakvim uvijetima i ni po kojoj cijeni.</span>
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-[#d4af37]/30 text-center">
            <p className="text-lg italic text-white">
              Ovo nije investicija. Ovo je zauvijek.
            </p>
          </div>
        </div>

        {/* Series counter */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-black/40 border border-[#d4af37]/20 rounded-lg">
            <div className="text-4xl font-light text-[#d4af37] mb-2">1</div>
            <div className="text-sm text-white uppercase tracking-wider">Stvoreno</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/40 rounded-lg">
            <div className="text-4xl font-light text-[#d4af37] mb-2">99</div>
            <div className="text-sm text-white uppercase tracking-wider">Preostalo</div>
          </div>
          <div className="p-6 bg-black/40 border border-[#d4af37]/20 rounded-lg">
            <div className="text-4xl font-light text-[#d4af37] mb-2">100</div>
            <div className="text-sm text-white uppercase tracking-wider">Zavjet</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
