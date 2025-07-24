import React, { useState } from 'react';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

interface AuthManagerProps {
  onBack: () => void;
}

const AuthManager: React.FC<AuthManagerProps> = ({ onBack }) => {
  const [currentView, setCurrentView] = useState<'login' | 'register'>('login');

  const switchToLogin = () => setCurrentView('login');
  const switchToRegister = () => setCurrentView('register');

  if (currentView === 'login') {
    return (
      <LoginPage 
        onSwitchToRegister={switchToRegister}
        onBack={onBack}
      />
    );
  }

  return (
    <RegisterPage 
      onSwitchToLogin={switchToLogin}
      onBack={onBack}
    />
  );
};

export default AuthManager;