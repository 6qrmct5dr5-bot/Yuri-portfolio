import React, { useEffect, useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const AboutSection = () => {
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
      id="o-njemu"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-24 px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-black to-[#0a0a0a] opacity-50"></div>
      
      <div className={`relative z-10 max-w-5xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light tracking-widest text-[#d4af37] font-['Playfair_Display'] mb-6">
            O NJEMU
          </h2>
          <div className="h-px w-32 bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-lg md:text-xl opacity-90">
            <p className="leading-relaxed">
              Boje miješa s <span className="text-[#d4af37] italic">prahom i zlatom</span> donesenim 
              s mjesta koje ne poznaje geografija.
            </p>
            <p className="leading-relaxed">
              U tom zlatnom prahu leži svjetlost koja ne blijedi.
            </p>
            <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm border border-[#d4af37]/20 rounded-lg">
              <Sparkles className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-['Playfair_Display'] text-[#d4af37] mb-3">
                  Živa Platna
                </h3>
                <p className="text-base opacity-85 leading-relaxed">
                  Njegove površine dišu. Pod svjetlom mijenjaju ton, reagiraju na pogled. 
                  Oni koji ih dovoljno dugo promatraju teško se odmiču — postaju dio slike.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="pt-4 border-t border-[#d4af37]/20">
              <div className="space-y-3 text-sm opacity-75">
                <div className="flex justify-between items-center border-b border-[#d4af37]/20 pb-2">
                  <span>Stvoreno:</span>
                  <span className="text-[#d4af37]">1 djelo</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#d4af37]/20 pb-2">
                  <span>Preostalo:</span>
                  <span className="text-[#d4af37]">99 duša</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Status:</span>
                  <span className="text-[#d4af37]">Početak putovanja</span>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-black/40 border border-[#d4af37]/20 rounded-lg backdrop-blur-sm">
              <p className="text-2xl md:text-3xl font-light italic text-[#d4af37] mb-2">
                "Kad te izabere,"
              </p>
              <p className="text-xl opacity-90">
                pogled više nikada nije isti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
