import React, { useEffect, useState, useRef } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { exhibitions } from '../mock';

const ExhibitionsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      id="izlozbe"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-24 px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a] opacity-50"></div>
      
      <div className={`relative z-10 max-w-5xl mx-auto w-full transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-widest text-[#d4af37] font-['Playfair_Display'] mb-6">
            IZLOŽBE
          </h2>
          <div className="h-px w-32 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Ekskluzivni susreti s djelima koja biraju svoju publiku.
          </p>
        </div>

        <div className="space-y-8">
          {exhibitions.map((exhibition, index) => (
            <div
              key={exhibition.id}
              className="group relative"
              style={{
                animation: `fadeInLeft 0.8s ease forwards ${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-black/80 to-[#1a1a1a]/80 border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 p-8 backdrop-blur-sm">
                {/* Year indicator */}
                <div className="absolute -left-4 top-8 bg-[#d4af37] text-black px-6 py-2 font-bold text-sm tracking-wider">
                  {exhibition.year}
                </div>

                <div className="ml-12">
                  <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] text-[#d4af37] mb-4 group-hover:text-[#c5a028] transition-colors">
                    {exhibition.title}
                  </h3>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-3 md:space-y-0 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-white">
                      <MapPin className="w-4 h-4 text-[#d4af37]" />
                      <span>{exhibition.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white">
                      <Calendar className="w-4 h-4 text-[#d4af37]" />
                      <span>{exhibition.year}</span>
                    </div>
                  </div>

                  <p className="text-base text-white leading-relaxed italic">
                    {exhibition.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#d4af37]/10 group-hover:border-[#d4af37]/30 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-transparent via-[#d4af37]/5 to-transparent border-y border-[#d4af37]/20">
          <p className="text-xl md:text-2xl font-light italic text-[#d4af37]">
            "Njegovi susreti s umjetnošću nisu otvoreni za sve.<br />
            Samo oni koji osjete poziv mogu ući."
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ExhibitionsSection;
