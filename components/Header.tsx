
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-panel py-4 px-6 md:px-12 flex items-center justify-between border-b border-[#707756]/10">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#707756] text-white rounded-full flex items-center justify-center">
          <span className="font-bold text-xs tracking-tighter">RW</span>
        </div>
        <span className="text-lg font-bold tracking-tight text-[#707756] hidden sm:inline uppercase">Rooted Wellness</span>
      </div>
      
      <div className="flex items-center gap-4 md:gap-10">
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.15em] uppercase text-[#707756]/60">
          <a href="#method" className="hover:text-[#707756] transition-colors">The Protocol</a>
          <a href="#proof" className="hover:text-[#707756] transition-colors">Client Results</a>
          <a href="#faq" className="hover:text-[#707756] transition-colors">Help</a>
        </nav>
        <a 
          href="#join"
          className="bg-[#707756] text-white px-6 py-2.5 rounded-full hover:bg-[#606746] transition-all text-[10px] font-bold uppercase tracking-[0.2em]"
        >
          Get Started — $497
        </a>
      </div>
    </header>
  );
};

export default Header;
