import React from 'react';
import { ArrowRight } from 'lucide-react';

const PricingCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pronto para automatizar seu WhatsApp?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio e comece a economizar tempo hoje mesmo
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="text-5xl font-bold text-blue-600 mb-2">R$ 14,90</div>
            <div className="text-lg text-gray-600">por mês no plano anual</div>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Automatize seu atendimento, gere mais leads e economize até 80% do tempo gasto com tarefas repetitivas.
            </p>
          </div>
          
          <div className="space-y-4">
            <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg flex items-center justify-center space-x-2 group text-lg font-semibold">
              <span>Ver Planos</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-sm text-gray-500">
              Cancele quando quiser, sem taxas ou multas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;