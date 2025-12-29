
import React, { useEffect, useState } from 'react';

interface ExitIntentProps {
  onAccept: () => void;
}

const ExitIntent: React.FC<ExitIntentProps> = ({ onAccept }) => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [dismissed]);

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
        
        <h2 className="text-3xl font-bold text-white">Wait! Before you go...</h2>
        <p className="text-lg text-zinc-400">
          Get my <strong>Free 3-Day Gut Reset Guide</strong> and a special $50 coupon code for the full program.
        </p>
        
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full px-6 py-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:ring-2 focus:ring-emerald-500 outline-none" 
          />
          <button 
            onClick={() => { onAccept(); setShow(false); }}
            className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-500 transition-all shadow-xl"
          >
            Claim My Gift & Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntent;
