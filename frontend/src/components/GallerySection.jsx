import React, { useEffect, useState, useRef } from 'react';
import { Eye, Calendar, Ruler, Palette } from 'lucide-react';
import { galleryWorks } from '../mock';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Badge } from './ui/badge';

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);
  const [filter, setFilter] = useState('all');
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

  const filteredWorks = filter === 'all' 
    ? galleryWorks 
    : filter === 'available'
    ? galleryWorks.filter(w => w.available)
    : galleryWorks.filter(w => !w.available);

  return (
    <section
      id="djela"
      ref={sectionRef}
      className="min-h-screen py-24 px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-black opacity-60"></div>
      
      <div className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-widest text-[#d4af37] font-['Playfair_Display'] mb-6">
            DJELA
          </h2>
          <div className="h-px w-32 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-lg opacity-75 max-w-2xl mx-auto mb-8">
            Svako djelo je jedinstveno, stvoreno s namjerom da progovori onima koji su spremni slušati.
          </p>

          {/* Filter buttons */}
          <div className="flex justify-center space-x-4 flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-[#d4af37] border-[#d4af37] text-black'
                  : 'border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10'
              }`}
            >
              Sva Djela
            </button>
            <button
              onClick={() => setFilter('available')}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === 'available'
                  ? 'bg-[#d4af37] border-[#d4af37] text-black'
                  : 'border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10'
              }`}
            >
              Dostupno
            </button>
            <button
              onClick={() => setFilter('sold')}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === 'sold'
                  ? 'bg-[#d4af37] border-[#d4af37] text-black'
                  : 'border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10'
              }`}
            >
              Odabrano
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, index) => (
            <div
              key={work.id}
              className="group relative cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`,
                opacity: 0
              }}
              onClick={() => setSelectedWork(work)}
            >
              <div className="relative overflow-hidden rounded-lg bg-black/50 border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="w-full">
                    <h3 className="text-xl font-['Playfair_Display'] text-[#d4af37] mb-2">
                      {work.title}
                    </h3>
                    <p className="text-sm opacity-75 mb-3">{work.year}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs opacity-60">{work.edition}</span>
                      <Eye className="w-4 h-4 text-[#d4af37]" />
                    </div>
                  </div>
                </div>

                {/* Status badge */}
                {!work.available && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#d4af37] text-black border-none">
                      Odabrano
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dialog for work details */}
      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="max-w-4xl bg-black border border-[#d4af37]/30 text-white">
          {selectedWork && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-['Playfair_Display'] text-[#d4af37]">
                    {selectedWork.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-gray-300">
                    Dio kolekcije: {selectedWork.edition}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm opacity-60">Godina</p>
                      <p className="text-lg">{selectedWork.year}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Palette className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm opacity-60">Medij</p>
                      <p className="text-lg">{selectedWork.medium}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Ruler className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm opacity-60">Dimenzije</p>
                      <p className="text-lg">{selectedWork.dimensions}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#d4af37]/20">
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-60">Status:</span>
                      <Badge className={selectedWork.available 
                        ? "bg-green-600/20 text-green-400 border-green-400/30" 
                        : "bg-gray-600/20 text-gray-400 border-gray-400/30"
                      }>
                        {selectedWork.available ? 'Dostupno' : 'Odabrano'}
                      </Badge>
                    </div>
                  </div>

                  {selectedWork.available && (
                    <div className="pt-4">
                      <p className="text-sm italic opacity-75 text-center">
                        "Ovo djelo čeka svog vlasnika. Jeste li vi odabrani?"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
