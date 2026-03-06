import React, { useRef } from 'react';
import { projects } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative bg-[#0d1f35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-opacity duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent inline-block">Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project has been an opportunity to learn new technologies and solve interesting problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_50px_rgba(6,182,212,0.3)] border border-white/5 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-3 flex flex-col ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.imageUrl || 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg'}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                      {project.title.split(' – ')[0]}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base font-medium">
                      {project.title.split(' – ')[1] || ''}
                    </p>
                    <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold text-cyan-400 mt-2">
                      {project.date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <p className="text-gray-300 mb-6 text-justify">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gray-700 text-indigo-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 mt-auto">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-cyan-500 transition-all duration-300 transform hover:scale-105"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
