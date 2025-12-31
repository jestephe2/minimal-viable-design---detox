
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 md:px-12 bg-[#edede4] border-t border-[#707756]/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#707756] rounded-full flex items-center justify-center">
            <span className="font-bold text-xs text-white">RW</span>
          </div>
          <span className="font-bold text-[#707756] tracking-tight uppercase">Rooted Wellness</span>
        </div>

        <div className="flex flex-wrap justify-center gap-10 text-xs font-bold uppercase tracking-[0.25em] text-[#707756]/60">
          <a href="/privacy-policy" className="hover:text-[#707756] transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-[#707756] transition-colors">Terms</a>
          <a href="/medical-disclaimer" className="hover:text-[#707756] transition-colors">Medical Disclaimer</a>
          <a href="mailto:info@rachelstephenswellness.com" className="hover:text-[#707756] transition-colors">Contact</a>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-24 text-center space-y-8">
        <p className="text-xs text-zinc-400 leading-relaxed uppercase tracking-wider font-medium max-w-2xl mx-auto">
          * These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Metabolic detoxification is a biological process; individual results may vary.
        </p>
        <div className="pt-8 border-t border-[#707756]/5">
          <p className="text-xs text-zinc-400 font-bold tracking-[0.1em]">
            &copy; {new Date().getFullYear()} RACHEL STEPHENS WELLNESS LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
