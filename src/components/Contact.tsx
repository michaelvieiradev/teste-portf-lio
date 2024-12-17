import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Precisa de um projeto?
          </h2>
          <p className="text-gray-300 mb-8">
            Agende uma conversa com nossa equipe. Estamos dispostos a entender sobre sua marca para oferecer uma solução eficiente e criativa.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors">
            Agendar Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;