import React from 'react';
import { Bot, Mail, FileText, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Agentify</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforme seu WhatsApp em um assistente virtual inteligente e revolucione seu atendimento ao cliente.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="h-4 w-4" />
              <span>contato@agentify.com.br</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Produto</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Demonstração</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Termos de Uso</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Política de Privacidade</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Contato</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Agentify. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;