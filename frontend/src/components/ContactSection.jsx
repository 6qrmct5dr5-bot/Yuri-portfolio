import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission
    setTimeout(() => {
      toast({
        title: "Poruka poslana",
        description: "Vaša poruka je primljena. Odgovorit ćemo samo ako ste odabrani.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="kontakt"
      className="min-h-screen flex items-center justify-center py-24 px-6 relative"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'radial-gradient(circle at 30% 50%, #d4af37 2px, transparent 2px)',
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-widest text-white font-['Playfair_Display'] mb-6">
            KONTAKT
          </h2>
          <div className="h-px w-32 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Pošaljite svoju poruku. Ako ste odabrani, znat ćete.
          </p>
        </div>

        <div className="bg-gradient-to-br from-black/60 to-[#1a1a1a]/60 backdrop-blur-sm border border-[#d4af37]/30 rounded-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2 text-white">
                Ime
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-black/50 border-[#d4af37]/30 focus:border-[#d4af37] text-white placeholder:text-gray-500"
                placeholder="Vaše ime"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2 text-[#d4af37]">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-black/50 border-[#d4af37]/30 focus:border-[#d4af37] text-white placeholder:text-gray-500"
                placeholder="vaš@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2 text-[#d4af37]">
                Poruka
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="bg-black/50 border-[#d4af37]/30 focus:border-[#d4af37] text-white placeholder:text-gray-500 resize-none"
                placeholder="Zašto vjerujete da ste odabrani?"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#d4af37] hover:bg-[#c5a028] text-black font-medium uppercase tracking-wider py-6 transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? (
                'Šalje se...'
              ) : (
                <>
                  Pošalji poruku
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-[#d4af37]/20 text-center">
            <p className="text-sm italic text-white">
              "Samo oni koji čuju poziv će dobiti odgovor."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
