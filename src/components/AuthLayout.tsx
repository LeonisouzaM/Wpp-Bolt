import React from 'react';
import { Bot, ArrowLeft } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children, 
  title, 
  subtitle, 
  showBackButton = false, 
  onBack 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          {showBackButton && (
            <button
              onClick={onBack}
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar</span>
            </button>
          )}
          
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Bot className="h-10 w-10 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Agentify</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          <p className="text-gray-600">
            {subtitle}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {children}
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>
            Ao continuar, você concorda com nossos{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Termos de Uso
            </a>{' '}
            e{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;