import React from 'react';
import { Smartphone, Settings, Zap, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: 'Conecte o WhatsApp',
      description: 'Integre seu WhatsApp Business em segundos com nossa API segura.',
    },
    {
      icon: Settings,
      title: 'Configure a IA',
      description: 'Personalize respostas automáticas e fluxos de conversação inteligentes.',
    },
    {
      icon: Zap,
      title: 'Automatize Tudo',
      description: 'Deixe a IA cuidar dos atendimentos, agendamentos e follow-ups.',
    },
    {
      icon: CheckCircle,
      title: 'Veja os Resultados',
      description: 'Acompanhe métricas, leads gerados e produtividade em tempo real.',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Em poucos passos, transforme seu WhatsApp em uma poderosa ferramenta de automação
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                <step.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-8">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;