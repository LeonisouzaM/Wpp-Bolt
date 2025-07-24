import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const features = [
    'Respostas automáticas com IA',
    'Agendamentos inteligentes',
    'Integração com WhatsApp Business',
    'Dashboard com métricas',
    'Suporte técnico incluído',
    'Backup automático de conversas',
    'Relatórios detalhados',
    'API para integrações',
  ];

  return (
    <section id="planos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha seu plano
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Planos simples e transparentes para automatizar seu WhatsApp
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Mensal
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Anual
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">
                Economize 40%
              </span>
            )}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Plano Mensal */}
          <div className={`bg-white rounded-2xl border-2 p-8 relative ${!isAnnual ? 'border-blue-600 shadow-lg' : 'border-gray-200'}`}>
            {!isAnnual && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Mais Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Mensal</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">R$ 24,90</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <p className="text-gray-600">Perfeito para começar</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center space-x-2 group">
              <span className="font-semibold">Começar Agora</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Plano Anual */}
          <div className={`bg-white rounded-2xl border-2 p-8 relative ${isAnnual ? 'border-blue-600 shadow-lg' : 'border-gray-200'}`}>
            {isAnnual && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Mais Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Anual</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900">R$ 14,90</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <div className="mb-4">
                <span className="text-sm text-gray-500 line-through">R$ 298,80/ano</span>
                <span className="text-lg font-semibold text-green-600 ml-2">R$ 178,80/ano</span>
              </div>
              <p className="text-gray-600">Melhor custo-benefício</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center space-x-2 group">
              <span className="font-semibold">Começar Agora</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Todos os planos incluem suporte técnico e atualizações gratuitas
          </p>
          <p className="text-sm text-gray-500">
            Cancele a qualquer momento, sem taxas ou multas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;