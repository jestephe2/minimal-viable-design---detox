
import React, { useState } from 'react';

interface StripeSimulationProps {
  onSuccess: (data: { name: string; email: string }) => void;
  onCancel: () => void;
}

const StripeSimulation: React.FC<StripeSimulationProps> = ({ onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({ name: '', email: '', card: '4242 4242 4242 4242', expiry: '12/26', cvc: '123' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onSuccess({ name: formData.name, email: formData.email });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="flex justify-between items-center">
            <button onClick={onCancel} className="text-zinc-400 hover:text-zinc-600">
              <i className="fas fa-arrow-left"></i>
            </button>
            <div className="flex items-center gap-1">
              <i className="fab fa-stripe text-4xl text-[#635bff]"></i>
            </div>
          </div>
          
          <div className="text-center">
            <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Checkout</span>
            <h2 className="text-2xl font-bold text-zinc-900 mt-1">Root Cause Reset</h2>
            <p className="text-zinc-500">$497.00 USD</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-600 uppercase">Email Address</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none" 
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-600 uppercase">Full Name</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none" 
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-zinc-600 uppercase">Card Information</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={formData.card}
                  readOnly
                  className="w-full pl-10 pr-4 py-3 rounded-t-lg border border-zinc-200 bg-zinc-50 outline-none" 
                />
                <i className="fas fa-credit-card absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"></i>
              </div>
              <div className="flex">
                <input 
                  type="text" 
                  value={formData.expiry}
                  readOnly
                  placeholder="MM/YY"
                  className="w-1/2 px-4 py-3 rounded-bl-lg border border-zinc-200 border-t-0 bg-zinc-50 outline-none" 
                />
                <input 
                  type="text" 
                  value={formData.cvc}
                  readOnly
                  placeholder="CVC"
                  className="w-1/2 px-4 py-3 rounded-br-lg border border-zinc-200 border-t-0 border-l-0 bg-zinc-50 outline-none" 
                />
              </div>
            </div>

            <button 
              disabled={loading}
              className="w-full bg-[#635bff] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#5349e0] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner animate-spin"></i>
                  Processing...
                </>
              ) : (
                `Pay $497.00`
              )}
            </button>
          </form>
          
          <p className="text-[10px] text-center text-zinc-400">
            Powered by Stripe. Your data is encrypted and secure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StripeSimulation;
