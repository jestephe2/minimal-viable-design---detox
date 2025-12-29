
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white text-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/id/64/800/1000" alt="Rachel Stephens" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-panel text-white p-8 rounded-2xl shadow-2xl max-w-xs border-emerald-500/20 bg-zinc-900">
              <div className="text-4xl font-serif italic mb-2">Rachel Stephens</div>
              <div className="text-emerald-400 text-sm font-bold uppercase tracking-widest">Functional Medicine Practitioner</div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">I built this because I needed it myself.</h2>
            <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
              <p>
                Ten years ago, I was "doing everything right"—eating salads, doing cardio, sleeping 8 hours—but I felt like a zombie. Conventional tests said I was "fine," but I knew I wasn't.
              </p>
              <p>
                It wasn't until I dove into functional medicine that I discovered the hidden toxic load slowing down my thyroid and gut. The Root Cause Reset is the distillation of my 15 years of clinical practice and my own healing journey.
              </p>
              <p>
                My mission is to help you stop managing symptoms and start living the vibrant life you were actually designed for.
              </p>
            </div>
            
            <div className="flex gap-12 pt-4">
              <div>
                <div className="text-4xl font-bold text-emerald-600">10k+</div>
                <div className="text-sm text-zinc-500 uppercase font-bold tracking-widest">Lives Impacted</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600">15yr</div>
                <div className="text-sm text-zinc-500 uppercase font-bold tracking-widest">Clinical Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
