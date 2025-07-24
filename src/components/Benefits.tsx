import React from 'react';
import { MessageCircle, TrendingUp, Users, Calendar } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: MessageCircle,
      title: 'Respostas Automáticas com IA',
      description: 'Atenda seus clientes 24/7 com respostas inteligentes e contextualizadas.',
    },
    {
      icon: TrendingUp,
      title: 'Aumento da Produtividade',
      description: 'Economize até 80% do tempo gasto em atendimentos repetitivos.',
    },
    {
      icon: Users,
      title: 'Geração de Leads',
      description: 'Qualifique leads automaticamente e aumente suas conversões.',
    },
    {
      icon: Calendar,
      title: 'Agendamentos Inteligentes',
      description: 'Agende consultas e reuniões sem intervenção manual.',
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher o Agentify?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra como nossa inteligência artificial pode revolucionar seu atendimento
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group">
              <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <benefit.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;