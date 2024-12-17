import React from 'react';

const Hero = () => {
  return (
    <section className="pt-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Design<br />
              fala quando<br />
              palavras não<br />
              são suficientes.
            </h1>
            <p className="text-gray-600 mb-8 max-w-md">
              As marcas que mais crescem são aquelas que investem em design, especialmente na identidade visual.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Como trabalhamos?
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 transform rotate-45 bg-yellow-400 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1635405074683-96d6921a2a68?auto=format&fit=crop&q=80&w=1000"
              alt="Blue box on golden star"
              className="relative z-10 w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;