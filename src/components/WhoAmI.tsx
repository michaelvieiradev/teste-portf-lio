import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhoAmI = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/seu-numero-aqui', '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Quem sou?</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Designer Apaixonado por Inovação</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Com mais de uma década de experiência em design, minha paixão é transformar ideias em experiências visuais memoráveis. Especializado em identidade visual e design estratégico, trabalho para criar soluções que não apenas parecem extraordinárias, mas também impulsionam resultados tangíveis para as marcas.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Cada projeto é uma oportunidade de contar uma história única, combinando criatividade com estratégia para desenvolver designs que se destacam e conectam com o público-alvo.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Vamos conversar
            </button>
          </div>
          
          <div className="relative">
            <div className="aspect-w-1 aspect-h-1 relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
                alt="Designer trabalhando"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-50 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;