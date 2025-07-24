import React from 'react';
import { Store, Wrench, Megaphone, User } from 'lucide-react';

const TargetAudience = () => {
  const audiences = [
    {
      icon: Store,
      title: 'Pequenas Empresas',
      description: 'Otimize o atendimento ao cliente e aumente as vendas sem contratar mais funcionários.',
    },
    {
      icon: Wrench,
      title: 'Prestadores de Serviço',
      description: 'Automatize agendamentos, confirmações e follow-ups de serviços.',
    },
    {
      icon: Megaphone,
      title: 'Agências de Marketing',
      description: 'Gerencie múltiplos clientes com automação personalizada para cada um.',
    },
    {
      icon: User,
      title: 'Autônomos',
      description: 'Profissionalize seu atendimento e tenha mais tempo para focar no core business.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Para quem é o Agentify?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nossa solução é perfeita para profissionais que querem escalar seus negócios
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all">
                <audience.icon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;