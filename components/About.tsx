
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white text-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#707756]">
            The Science Behind <span className="italic font-serif text-[#afa790]">Clear Change®</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            Discover how Metagenics' research-backed Clear Change program supports your body's natural detoxification process.
          </p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-[#707756]/10">
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/sddMI0UlbZo?si=-GWSQjh1yHTVoFMX"
              title="Metagenics Clear Change Process"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
