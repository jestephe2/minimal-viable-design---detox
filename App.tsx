
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ProgramDetails from './components/ProgramDetails';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StripeSimulation from './components/StripeSimulation';
import UpsellSequence from './components/UpsellSequence';
import ThankYouPage from './components/ThankYouPage';
import ExitIntent from './components/ExitIntent';
import { Step, UserSession } from './types';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('landing');
  const [session, setSession] = useState<UserSession | null>(null);

  const startCheckout = () => {
    setCurrentStep('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCheckoutComplete = (data: { name: string; email: string }) => {
    setSession({
      name: data.name,
      email: data.email,
      purchasedItems: ['Root Cause Reset - 28 Day Detox'],
      totalValue: 497
    });
    setCurrentStep('upsell1');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpsell1Decision = (accepted: boolean) => {
    if (accepted && session) {
      setSession({
        ...session,
        purchasedItems: [...session.purchasedItems, 'Premium Add-On Bundle'],
        totalValue: session.totalValue + 147
      });
    }
    setCurrentStep('upsell2');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpsell2Decision = (accepted: boolean) => {
    if (accepted && session) {
      const price = session.purchasedItems.includes('Premium Add-On Bundle') ? 1497 : 97;
      const itemName = session.purchasedItems.includes('Premium Add-On Bundle') ? 'Optimal Health Program' : 'Maintenance Plan';
      setSession({
        ...session,
        purchasedItems: [...session.purchasedItems, itemName],
        totalValue: session.totalValue + price
      });
    }
    setCurrentStep('thankyou');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {currentStep === 'landing' && (
        <>
          <Header />
          <Hero onStart={startCheckout} />
          <ProblemSection />
          <SolutionSection />
          <ProgramDetails />
          <Testimonials />
          <About />
          <FAQ />
          <FinalCTA onStart={startCheckout} />
          <Footer />
          <ExitIntent onAccept={startCheckout} />
        </>
      )}

      {currentStep === 'checkout' && (
        <StripeSimulation 
          onSuccess={handleCheckoutComplete} 
          onCancel={() => setCurrentStep('landing')} 
        />
      )}

      {(currentStep === 'upsell1' || currentStep === 'upsell2') && session && (
        <UpsellSequence 
          step={currentStep} 
          onDecision={currentStep === 'upsell1' ? handleUpsell1Decision : handleUpsell2Decision}
          hasUpsell1={session.purchasedItems.includes('Premium Add-On Bundle')}
        />
      )}

      {currentStep === 'thankyou' && session && (
        <ThankYouPage session={session} />
      )}
    </div>
  );
};

export default App;
