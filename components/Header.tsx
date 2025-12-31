
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
      
      <div className="flex items-center gap-4 md:gap-6">
        <a
          href="#join"
          className="bg-gradient-to-r from-[#707756] to-[#606746] text-white px-8 py-4 rounded-full hover:scale-105 transition-all text-sm md:text-xs font-bold uppercase tracking-[0.15em] shadow-lg"
        >
          Join the 28-Day Reset
        </a>
      </div>
    </header>
  );
};

export default Header;
