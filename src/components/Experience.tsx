import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { threshold: 0.1 });

    const experiences = [
        {
            id: 1,
            role: 'MERN Stack Intern',
            company: 'ScaleFull Technologies, Ahilyanagar',
            date: 'Dec 2024 – Jan 2025',
            description: [
                'Worked with React.js, Node.js, Express.js, and MongoDB to build web features.',
                'Applied CRUD operations and API integration while managing data effectively.',
                'Enhanced user experience by improving responsive UI and smooth client-server communication.'
            ]
        }
    ];

    return (
        <section ref={sectionRef} id="experience" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 transition-opacity duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`bg-gray-800 rounded-xl p-8 mb-8 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-indigo-600/20 rounded-lg">
                                        <Briefcase className="text-indigo-500 w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-indigo-400 font-medium">{exp.company}</p>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="px-4 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                                        {exp.date}
                                    </span>
                                </div>
                            </div>

                            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mt-6">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
