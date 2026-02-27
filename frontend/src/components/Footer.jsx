import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-3xl font-light tracking-widest text-[#d4af37] font-['Playfair_Display'] mb-2">
              YURI
            </h3>
            <p className="text-sm opacity-60">Serija od 100 duša</p>
          </div>

          <div className="h-px w-32 bg-[#d4af37]/30 mx-auto"></div>

          <div className="space-y-2 text-sm opacity-75">
            <p>1/100 - Početak</p>
            <p>99 duša preostalo</p>
          </div>

          <div className="pt-6">
            <p className="text-xs opacity-50">
              © {new Date().getFullYear()} Yuri. Sva prava zadržana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
