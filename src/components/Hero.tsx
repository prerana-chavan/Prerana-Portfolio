import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = textRef.current;
    if (text) {
      text.classList.add('animate-slide-up-fade');
    }
  }, []);

  const scrollToProject = () => {
    const section = document.getElementById('projects');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContacts = () => {
    const section = document.getElementById('contact');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-futuristic z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 space-y-8 max-w-4xl mx-auto">


        {/* Headings */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight animate-fade-in delay-100">
            Hi, I'm
          </h2>
          <h1
            ref={textRef}
            className="text-5xl md:text-7xl font-extrabold pb-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent transform transition-all duration-700 hover:scale-105"
          >
            Prerana Chavan
          </h1>
        </div>

        {/* Subtitle */}
        <div className="space-y-4 animate-fade-in delay-200">
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mx-auto">
            Full Stack Developer specializing in <span className="text-cyan-400">Java</span>, <span className="text-blue-400">Spring Boot</span> and <span className="text-purple-400">MERN Stack</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-500 font-medium tracking-tight">
            <span>Java</span>
            <span className="text-cyan-500/50">•</span>
            <span>Spring Boot</span>
            <span className="text-cyan-500/50">•</span>
            <span>React</span>
            <span className="text-cyan-500/50">•</span>
            <span>Node.js</span>
            <span className="text-cyan-500/50">•</span>
            <span>MongoDB</span>
            <span className="text-cyan-500/50">•</span>
            <span>MySQL</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-8 animate-fade-in delay-300">
          <button
            onClick={scrollToProject}
            className="group relative px-8 py-3 rounded-full bg-transparent border border-cyan-500/50 text-cyan-300 font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:border-cyan-400"
          >
            <div className="absolute inset-0 bg-cyan-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative flex items-center gap-2">
              View Projects
            </span>
          </button>

          <button
            onClick={scrollToContacts}
            className="group relative px-8 py-3 rounded-full bg-transparent border border-purple-500/50 text-purple-300 font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:border-purple-400"
          >
            <div className="absolute inset-0 bg-purple-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative">Contact Me</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
