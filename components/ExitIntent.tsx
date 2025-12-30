
import React, { useEffect, useState } from 'react';

interface ExitIntentProps {
  onAccept: () => void;
}

const ExitIntent: React.FC<ExitIntentProps> = ({ onAccept }) => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    // Delay popup availability - only allow after 15 seconds on page
    const timer = setTimeout(() => {
      setCanShow(true);
    }, 15000); // 15 seconds delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed && canShow && !submitted) {
        setShow(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [dismissed, canShow, submitted]);

  const handleSubmit = async () => {
    if (!formData.firstName.trim()) {
      alert('Please enter your first name');
      return;
    }
    if (!formData.lastName.trim()) {
      alert('Please enter your last name');
      return;
    }
    if (!formData.email || !formData.email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      // Send to GoHighLevel webhook
      const webhookUrl = 'https://services.leadconnectorhq.com/hooks/qQCPEPJKTOnlTBv5wJd9/webhook-trigger/9686cc72-e318-44e0-9737-c51652de3ad3';

      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          fullName: `${formData.firstName} ${formData.lastName}`,
          source: 'exit_intent_popup',
          offer: 'Free Hormone Harmony Handbook',
          timestamp: new Date().toISOString(),
        }),
      });

      // Success - show thank you message instead of redirecting
      setSubmitted(true);
    } catch (error) {
      console.error('Webhook error:', error);
      // Show success message even if webhook fails
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6">
      <div className="max-w-xl w-full glass-panel bg-zinc-900 p-10 rounded-3xl border-emerald-500/30 text-center space-y-6 relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => { setShow(false); setDismissed(true); }}
          className="absolute top-6 right-6 text-zinc-500 hover:text-white"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
        
        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
          <i className="fas fa-gift text-white text-3xl"></i>
        </div>
        
        <h2 className="text-3xl font-bold text-white">My free gift to you</h2>
        <p className="text-lg text-zinc-400">
          Get my <strong>Free Hormone Harmony Handbook</strong> to start balancing your hormones naturally today.
        </p>

        {!submitted ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                placeholder="First Name"
                className="w-full px-6 py-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                disabled={loading}
              />
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                placeholder="Last Name"
                className="w-full px-6 py-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
                disabled={loading}
              />
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Email Address"
              className="w-full px-6 py-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none"
              disabled={loading}
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-500 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner animate-spin"></i>
                  Sending...
                </>
              ) : (
                'Get My Free Handbook'
              )}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <i className="fas fa-check text-white text-2xl"></i>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Thank You!</h3>
              <p className="text-zinc-400">
                Check your email for your <strong>Free Hormone Harmony Handbook</strong>.
              </p>
              <p className="text-sm text-zinc-500">
                (Be sure to check your spam folder if you don't see it in a few minutes)
              </p>
            </div>
            <button
              onClick={() => { setShow(false); setDismissed(true); }}
              className="w-full bg-zinc-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-zinc-600 transition-all"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExitIntent;
