
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
import StripeCheckout from './components/StripeCheckout';
import UpsellSequence from './components/UpsellSequence';
import ThankYouPage from './components/ThankYouPage';
import ExitIntent from './components/ExitIntent';
import { Step, UserSession } from './types';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('landing');
  const [session, setSession] = useState<UserSession | null>(null);

  // Handle return from Stripe payment
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const stripeSuccess = urlParams.get('stripe_success');
    const stripeCancel = urlParams.get('stripe_cancel');
    const step = urlParams.get('step');
    const product = urlParams.get('product');

    if (stripeSuccess === 'true' && product) {
      // Determine what was purchased and update session
      let purchasedItems: string[] = [];
      let totalValue = 0;

      // Retrieve existing session or create new one
      const existingSession = localStorage.getItem('user_session');
      if (existingSession) {
        const parsedSession = JSON.parse(existingSession);
        purchasedItems = parsedSession.purchasedItems || [];
        totalValue = parsedSession.totalValue || 0;
      }

      // Add the new purchase
      if (product === 'main') {
        purchasedItems.push('Root Cause Reset - 28 Day Detox');
        totalValue += 497;
      } else if (product === 'upsell1') {
        purchasedItems.push('Premium Supplement Bundle');
        totalValue += 157;
      } else if (product === 'upsell2a') {
        purchasedItems.push('Root Cause Coaching Call');
        totalValue += 97;
      } else if (product === 'upsell2b') {
        purchasedItems.push('Optimal Health Credit');
        totalValue += 250;
      }

      // Update session state
      const updatedSession: UserSession = {
        name: '',
        email: '',
        purchasedItems,
        totalValue
      };

      setSession(updatedSession);
      localStorage.setItem('user_session', JSON.stringify(updatedSession));

      // Navigate to the next step
      if (step) {
        setCurrentStep(step as Step);
      }

      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    } else if (stripeCancel === 'true') {
      // User cancelled payment, return to landing
      setCurrentStep('landing');

      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

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
        purchasedItems: [...session.purchasedItems, 'Premium Supplement Bundle'],
        totalValue: session.totalValue + 157
      });
    }
    setCurrentStep('upsell2');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpsell2Decision = (accepted: boolean) => {
    if (accepted && session) {
      setSession({
        ...session,
        purchasedItems: [...session.purchasedItems, 'Root Cause Coaching Call'],
        totalValue: session.totalValue + 97
      });
    }
    setCurrentStep('upsell3');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpsell3Decision = (accepted: boolean) => {
    if (accepted && session) {
      setSession({
        ...session,
        purchasedItems: [...session.purchasedItems, 'Optimal Health Credit'],
        totalValue: session.totalValue + 250
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
        <StripeCheckout
          onSuccess={handleCheckoutComplete}
          onCancel={() => setCurrentStep('landing')}
          product="main"
        />
      )}

      {(currentStep === 'upsell1' || currentStep === 'upsell2' || currentStep === 'upsell3') && session && (
        <UpsellSequence
          step={currentStep}
          onDecision={
            currentStep === 'upsell1' ? handleUpsell1Decision :
            currentStep === 'upsell2' ? handleUpsell2Decision :
            handleUpsell3Decision
          }
          hasUpsell1={session.purchasedItems.includes('Premium Supplement Bundle')}
        />
      )}

      {currentStep === 'thankyou' && session && (
        <ThankYouPage session={session} />
      )}
    </div>
  );
};

export default App;
