import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Award, ExternalLink, Calendar, Hash, CheckCircle2 } from 'lucide-react';

const Certifications: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { threshold: 0.1 });

    const technologies = ['Java', 'J2EE', 'Spring Boot', 'JPA', 'REST APIs', 'React.js', 'MySQL'];

    return (
        <section ref={sectionRef} id="certifications" className="py-20 relative bg-[#0d1f35] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent inline-block">
                        Certifications
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                        Professional certifications and training programs I have completed.
                    </p>
                </div>

                {/* Certificate Card */}
                <div className={`max-w-3xl mx-auto transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(6,182,212,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)] hover:border-cyan-400/40">

                        {/* Gold accent top bar */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"></div>

                        {/* Background */}
                        <div className="bg-gradient-to-br from-gray-900 via-gray-800/90 to-gray-900 p-6 md:p-10">

                            {/* Top row: icon + issuer */}
                            <div className="flex items-start justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/20">
                                        <Award className="text-cyan-400 w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-1">Certificate of Completion</p>
                                        <h3 className="text-2xl font-bold text-white">Java Full Stack Development</h3>
                                    </div>
                                </div>
                                <span className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold">
                                    <CheckCircle2 size={13} />
                                    Verified
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-white/10 mb-8"></div>

                            {/* Meta row */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Issued by</p>
                                    <p className="text-white font-semibold">The Kiran Academy</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1"><Calendar size={11} /> Duration</p>
                                    <p className="text-white font-semibold">Aug 2025 – Feb 2026</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 flex items-center gap-1"><Hash size={11} /> Credential ID</p>
                                    <p className="text-white font-mono font-semibold">435992152</p>
                                </div>
                            </div>

                            {/* Technologies */}
                            <div className="mb-8">
                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Technologies Covered</p>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 text-sm bg-cyan-900/30 text-cyan-300 rounded-full border border-cyan-500/20 font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Verify Button */}
                            <a
                                href="https://thekiranacademy.com/verify"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 transition-all duration-300"
                            >
                                <ExternalLink size={15} />
                                Verify Certificate
                            </a>

                        </div>

                        {/* Gold accent bottom bar */}
                        <div className="h-1.5 w-full bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Certifications;
