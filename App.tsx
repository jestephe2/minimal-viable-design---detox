
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
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import MedicalDisclaimer from './components/MedicalDisclaimer';
import { Step, UserSession } from './types';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('landing');
  const [session, setSession] = useState<UserSession | null>(null);
  const [currentPage, setCurrentPage] = useState<string>('');

  // Handle URL routing for legal pages
  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPage(path);
  }, []);

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
      let sessionEmail = '';
      let sessionName = '';

      if (existingSession) {
        const parsedSession = JSON.parse(existingSession);
        purchasedItems = parsedSession.purchasedItems || [];
        totalValue = parsedSession.totalValue || 0;
        sessionEmail = parsedSession.email || '';
        sessionName = parsedSession.name || '';
      }

      // Get Stripe session ID from URL
      const sessionId = urlParams.get('session_id') || '';

      // Add the new purchase
      if (product === 'main') {
        purchasedItems.push('Root Cause Reset - 28 Day Detox');
        totalValue += 497;

        // Fetch customer details from Stripe session and send webhook
        (async () => {
          try {
            let customerData = {
              email: sessionEmail,
              name: sessionName,
              address: {
                line1: '',
                line2: '',
                city: '',
                state: '',
                postal_code: '',
                country: '',
              },
              shipping_address: {
                line1: '',
                line2: '',
                city: '',
                state: '',
                postal_code: '',
                country: '',
              },
              phone: '',
            };

            // If we have a session ID, fetch full customer details from Stripe
            if (sessionId) {
              try {
                const apiUrl = process.env.NODE_ENV === 'production'
                  ? 'https://rootcausereset.vercel.app/api/get-session-details'
                  : 'http://localhost:3001/api/get-session-details';

                const response = await fetch(apiUrl, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ sessionId }),
                });

                if (response.ok) {
                  customerData = await response.json();
                  // Update session variables for later use
                  sessionEmail = customerData.email;
                  sessionName = customerData.name;
                }
              } catch (err) {
                console.error('Error fetching customer details:', err);
              }
            }

            // Send webhook for main product purchase completion
            const webhookUrl = 'https://services.leadconnectorhq.com/hooks/qQCPEPJKTOnlTBv5wJd9/webhook-trigger/b1391965-86d5-486f-a093-6ec9d91f1c0e';

            await fetch(webhookUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: customerData.email,
                name: customerData.name,
                phone: customerData.phone,
                address_line1: customerData.address.line1,
                address_line2: customerData.address.line2,
                city: customerData.address.city,
                state: customerData.address.state,
                postal_code: customerData.address.postal_code,
                country: customerData.address.country,
                shipping_address_line1: customerData.shipping_address.line1,
                shipping_address_line2: customerData.shipping_address.line2,
                shipping_city: customerData.shipping_address.city,
                shipping_state: customerData.shipping_address.state,
                shipping_postal_code: customerData.shipping_address.postal_code,
                shipping_country: customerData.shipping_address.country,
                source: 'purchase_completed',
                product: 'Root Cause Reset - 28 Day Detox',
                price: '$497',
                product_type: 'main',
                stripe_session_id: sessionId,
                timestamp: new Date().toISOString(),
              }),
            }).catch(err => console.error('Main product webhook error:', err));
          } catch (error) {
            console.error('Main product webhook error:', error);
          }
        })();
      } else if (product === 'upsell1') {
        purchasedItems.push('Premium Supplement Bundle');
        totalValue += 157;

        // Fetch customer details from Stripe session and send webhook
        (async () => {
          try {
            let customerData = {
              email: sessionEmail,
              name: sessionName,
              address: {
                line1: '',
                line2: '',
                city: '',
                state: '',
                postal_code: '',
                country: '',
              },
              shipping_address: {
                line1: '',
                line2: '',
                city: '',
                state: '',
                postal_code: '',
                country: '',
              },
              phone: '',
            };

            // If we have a session ID, fetch full customer details from Stripe
            if (sessionId) {
              try {
                const apiUrl = process.env.NODE_ENV === 'production'
                  ? 'https://rootcausereset.vercel.app/api/get-session-details'
                  : 'http://localhost:3001/api/get-session-details';

                const response = await fetch(apiUrl, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ sessionId }),
                });

                if (response.ok) {
                  customerData = await response.json();
                  // Update session variables for later use
                  sessionEmail = customerData.email;
                  sessionName = customerData.name;
                }
              } catch (err) {
                console.error('Error fetching customer details:', err);
              }
            }

            // Send webhook for Premium Supplement Bundle purchase completion
            const webhookUrl = 'https://services.leadconnectorhq.com/hooks/qQCPEPJKTOnlTBv5wJd9/webhook-trigger/c273da17-0e36-4fa6-8bf7-b99ba57d98b7';

            await fetch(webhookUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: customerData.email,
                name: customerData.name,
                phone: customerData.phone,
                address_line1: customerData.address.line1,
                address_line2: customerData.address.line2,
                city: customerData.address.city,
                state: customerData.address.state,
                postal_code: customerData.address.postal_code,
                country: customerData.address.country,
                shipping_address_line1: customerData.shipping_address.line1,
                shipping_address_line2: customerData.shipping_address.line2,
                shipping_city: customerData.shipping_address.city,
                shipping_state: customerData.shipping_address.state,
                shipping_postal_code: customerData.shipping_address.postal_code,
                shipping_country: customerData.shipping_address.country,
                source: 'purchase_completed',
                product: 'Premium Supplement Bundle',
                price: '$157',
                product_type: 'upsell1',
                stripe_session_id: sessionId,
                timestamp: new Date().toISOString(),
              }),
            }).catch(err => console.error('Upsell1 webhook error:', err));
          } catch (error) {
            console.error('Upsell1 webhook error:', error);
          }
        })();
      } else if (product === 'upsell2a') {
        purchasedItems.push('Root Cause Coaching Call');
        totalValue += 97;

        // Fetch customer details from Stripe session and send webhook
        (async () => {
          try {
            let customerData = {
              email: sessionEmail,
              name: sessionName,
              address: {
                line1: '',
                line2: '',
                city: '',
                state: '',
                postal_code: '',
                country: '',
              },
              phone: '',
            };

            // If we have a session ID, fetch full customer details from Stripe
            if (sessionId) {
              try {
                const apiUrl = process.env.NODE_ENV === 'production'
                  ? 'https://rootcausereset.vercel.app/api/get-session-details'
                  : 'http://localhost:3001/api/get-session-details';

                const response = await fetch(apiUrl, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ sessionId }),
                });

                if (response.ok) {
                  customerData = await response.json();
                  // Update session variables for later use
                  sessionEmail = customerData.email;
                  sessionName = customerData.name;
                }
              } catch (err) {
                console.error('Error fetching customer details:', err);
              }
            }

            // Send webhook for Root Cause Coaching Call purchase completion
            const webhookUrl = 'https://services.leadconnectorhq.com/hooks/qQCPEPJKTOnlTBv5wJd9/webhook-trigger/633081c2-e389-4aa4-b8c1-6de78427b485';

            await fetch(webhookUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: customerData.email,
                name: customerData.name,
                phone: customerData.phone,
                address_line1: customerData.address.line1,
                address_line2: customerData.address.line2,
                city: customerData.address.city,
                state: customerData.address.state,
                postal_code: customerData.address.postal_code,
                country: customerData.address.country,
                source: 'purchase_completed',
                product: 'Root Cause Coaching Call',
                price: '$97',
                product_type: 'upsell2a',
                stripe_session_id: sessionId,
                timestamp: new Date().toISOString(),
              }),
            }).catch(err => console.error('Upsell2a webhook error:', err));
          } catch (error) {
            console.error('Upsell2a webhook error:', error);
          }
        })();
      } else if (product === 'upsell2b') {
        purchasedItems.push('Optimal Health Credit');
        totalValue += 250;

        // Fetch customer details from Stripe session and send webhook
        (async () => {
          try {
            let customerData = {
              email: sessionEmail,
              name: sessionName,
              address: {
                line1: '',
                line2: '',
                city: '',
                state: '',
                postal_code: '',
                country: '',
              },
              phone: '',
            };

            // If we have a session ID, fetch full customer details from Stripe
            if (sessionId) {
              try {
                const apiUrl = process.env.NODE_ENV === 'production'
                  ? 'https://rootcausereset.vercel.app/api/get-session-details'
                  : 'http://localhost:3001/api/get-session-details';

                const response = await fetch(apiUrl, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ sessionId }),
                });

                if (response.ok) {
                  customerData = await response.json();
                  // Update session variables for later use
                  sessionEmail = customerData.email;
                  sessionName = customerData.name;
                }
              } catch (err) {
                console.error('Error fetching customer details:', err);
              }
            }

            // Send webhook for Optimal Health Credit purchase completion
            const webhookUrl = 'https://services.leadconnectorhq.com/hooks/qQCPEPJKTOnlTBv5wJd9/webhook-trigger/d83ceda2-4854-4ae0-8a83-809bc079e444';

            await fetch(webhookUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: customerData.email,
                name: customerData.name,
                phone: customerData.phone,
                address_line1: customerData.address.line1,
                address_line2: customerData.address.line2,
                city: customerData.address.city,
                state: customerData.address.state,
                postal_code: customerData.address.postal_code,
                country: customerData.address.country,
                source: 'purchase_completed',
                product: 'Optimal Health Credit',
                price: '$250',
                product_type: 'upsell2b',
                stripe_session_id: sessionId,
                timestamp: new Date().toISOString(),
              }),
            }).catch(err => console.error('Upsell2b webhook error:', err));
          } catch (error) {
            console.error('Upsell2b webhook error:', error);
          }
        })();
      }

      // Update session state
      const updatedSession: UserSession = {
        name: sessionName,
        email: sessionEmail,
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

  // Render legal pages if path matches
  if (currentPage === '/privacy-policy') {
    return <PrivacyPolicy />;
  }
  if (currentPage === '/terms') {
    return <Terms />;
  }
  if (currentPage === '/medical-disclaimer') {
    return <MedicalDisclaimer />;
  }

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
