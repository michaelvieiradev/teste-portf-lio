import React from 'react';
import { Instagram, Linkedin, Bookmark } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-medium">Kimura. © 2023 | Estúdio Kimura</p>
            <a href="mailto:ola@estudiokimura.com.br" className="text-gray-600 hover:text-gray-900">
              ola@estudiokimura.com.br
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Bookmark className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;