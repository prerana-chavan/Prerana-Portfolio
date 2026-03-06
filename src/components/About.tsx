import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section ref={sectionRef} id="about" className="py-20 relative bg-[#0d1f35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-opacity duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent inline-block">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 transform ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg w-full h-full absolute -top-4 -left-4 opacity-50"></div>
              <img
                src="/assets/images/Prerana.jpg.jpeg"
                alt="Prerana Chavan"
                className="w-full h-full object-cover rounded-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center z-20 shadow-[0_0_25px_rgba(6,182,212,0.4)] border border-cyan-400/30 hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl drop-shadow-lg">Web Dev</span>
              </div>
            </div>
          </div>

          <div className={`text-gray-300 transition-all duration-1000 delay-600 transform text-justify ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-4">
              Full Stack <span className="text-cyan-400">Developer</span>
            </h3>
            <p className="mb-6">
              I am a Final Year Computer Engineering student with a strong interest in Full Stack Development and building scalable web applications.
            </p>
            <p className="mb-6">
              I have completed training in Java Full Stack Development and have hands-on experience with technologies such as Java, Spring Boot, JPA, REST APIs, MySQL, React, Node.js, and MongoDB.
            </p>
            <p className="mb-6">
              I enjoy developing end-to-end applications that combine efficient backend systems with responsive and user-friendly frontends.
            </p>
            <p className="mb-6">
              Along with Java Full Stack, I also work with the MERN stack (MongoDB, Express.js, React.js, Node.js) to build modern web applications. Through my projects, I have gained experience in API development, database integration, authentication systems, and responsive UI design.
            </p>
            <p className="mb-6">
              I enjoy learning new technologies, solving real-world problems through code, and continuously improving my development skills.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-cyan-400 font-semibold">Name:</p>
                <p className="text-white">Prerana Chavan</p>
              </div>
              <div>
                <p className="text-cyan-400 font-semibold">Email:</p>
                <p className="text-white">preranac90@gmail.com</p>
              </div>
              <div>
                <p className="text-cyan-400 font-semibold">Location:</p>
                <p className="text-white">Ahilyanagar, India</p>
              </div>

            </div>

            <button
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-full hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1cUbJ9t8zYmR2Q-Px6Z6pYjiFx5QWSUm2/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Download Resume
            </button>

          </div>
        </div>
      </div>
    </section >
  );
};

export default About;
