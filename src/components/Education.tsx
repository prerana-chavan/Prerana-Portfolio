import React, { useRef } from 'react';
import { educations } from '../data/education';
import { useInView } from '../hooks/useInView';
import { BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} id="education" className="py-20 relative bg-[#12082a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-opacity duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent inline-block">Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped my knowledge and skills.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-indigo-500 pl-4">Education</h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-600 rounded-full opacity-30"></div>

            {educations.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative mb-12 md:mb-24 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-cyan-500 border-4 border-[#020617] z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-left' : 'md:pl-12 md:text-left'}`}>
                    <div className="glass p-6 rounded-xl hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 transform hover:scale-105 border border-white/10">
                      <div className="flex items-center mb-2 gap-2 justify-start">
                        <BookOpen className="text-cyan-400" />
                        <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      </div>
                      <p className="text-purple-400 font-semibold mb-1">{edu.institution}</p>
                      <p className="text-gray-400 text-sm mb-2">{edu.date}</p>
                      {edu.score && (
                        <div className="inline-block bg-cyan-900/30 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/20">
                          {edu.score}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;