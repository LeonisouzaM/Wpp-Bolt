import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import PricingCTA from './components/PricingCTA';
import Footer from './components/Footer';
import AuthManager from './components/AuthManager';

function App() {
  const [showAuth, setShowAuth] = useState(false);

  if (showAuth) {
    return <AuthManager onBack={() => setShowAuth(false)} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setShowAuth(true)} />
      <HeroSection onLoginClick={() => setShowAuth(true)} />
      <HowItWorks />
      <Benefits />
      <TargetAudience />
      <Testimonials />
      <Pricing />
      <Blog />
      <PricingCTA />
      <Footer />
    </div>
  );
}

export default App;