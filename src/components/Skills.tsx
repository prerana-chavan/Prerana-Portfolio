import React, { useRef } from 'react';
import { skills, getIconComponent } from '../data/skills';
import { useInView } from '../hooks/useInView';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const categories = [
    { id: 'languages', title: '💻 Programming Languages' },
    { id: 'backend', title: '🔗 Backend Technologies' },
    { id: 'frontend', title: '🌐 Frontend Technologies' },
    { id: 'databases', title: '🗄️ Databases' },
    { id: 'tools', title: '🛠️ Tools & IDEs' }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 relative bg-[#12082a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-opacity duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent inline-block">Skills & Technologies</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I've worked with to build modern web applications.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className={`transition-all duration-1000 delay-${categoryIndex * 200} transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <h3 className="text-2xl font-semibold text-white mb-8 border-l-4 border-cyan-500 pl-4">{category.title}</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills
                  .filter(skill => skill.category === category.id)
                  .map((skill, index) => {
                    const IconComponent = skill.icon ? getIconComponent(skill.icon) : null;

                    return (
                      <div
                        key={skill.id}
                        className={`glass rounded-xl p-6 hover:bg-white/5 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] flex items-center transition-all duration-300 delay-${index * 100} border border-white/10`}
                      >
                        {IconComponent && <IconComponent className="w-6 h-6 text-cyan-400 mr-3" />}
                        <span className="text-gray-200">{skill.name}</span>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;