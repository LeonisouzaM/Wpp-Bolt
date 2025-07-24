import React from 'react';
import { Bot } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Agentify</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#como-funciona" className="text-gray-600 hover:text-blue-600 transition-colors">Como Funciona</a>
            <a href="#beneficios" className="text-gray-600 hover:text-blue-600 transition-colors">Benefícios</a>
            <a href="#planos" className="text-gray-600 hover:text-blue-600 transition-colors">Planos</a>
            <a href="#blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</a>
          </nav>
          <button 
            onClick={onLoginClick}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Entrar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;