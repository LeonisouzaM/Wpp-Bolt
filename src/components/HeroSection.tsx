import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onLoginClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onLoginClick }) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforme seu WhatsApp em um{' '}
                <span className="text-blue-600">assistente virtual</span> com IA
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Automatize tarefas, ganhe produtividade e atenda seus clientes 24h por dia com inteligência artificial.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onLoginClick}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center space-x-2 group"
              >
                <span className="text-lg font-semibold">Entrar</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all">
                Ver Demonstração
              </button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Planos a partir de R$ 14,90/mês</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Agentify Bot</div>
                  <div className="text-xs text-green-500">online</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-xl p-3 text-sm">
                  Olá! Gostaria de agendar um horário para segunda-feira?
                </div>
                <div className="bg-blue-600 text-white rounded-xl p-3 text-sm ml-8">
                  Sim, que horários tem disponível?
                </div>
                <div className="bg-gray-100 rounded-xl p-3 text-sm">
                  Tenho disponível:<br/>
                  • 09:00 - 10:00<br/>
                  • 14:00 - 15:00<br/>
                  • 16:30 - 17:30<br/><br/>
                  Qual prefere?
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;