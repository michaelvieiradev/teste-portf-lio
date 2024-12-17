import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold tracking-tighter">
              Kimura.
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-gray-900 transition-all">
              Home
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-gray-900 transition-all">
              Sobre
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium border-b-2 border-transparent hover:border-gray-900 transition-all">
              Contato
            </a>
          </nav>
          <div className="md:hidden">
            <button className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;