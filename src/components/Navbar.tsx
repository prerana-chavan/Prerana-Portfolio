import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "about", "skills", "projects", "education", "certifications", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top < 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen
          ? "bg-[#0f172a]/90 backdrop-blur-md border-b border-gray-800 py-4"
          : "bg-transparent py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer z-50"
              onClick={() => scrollToSection("home")}
            >
              <h1 className="text-2xl font-bold text-white tracking-wide transition-all duration-300 hover:scale-105 group flex items-center">
                <span className="group-hover:text-cyan-400 transition-colors duration-300">Prerana</span>
                <span className="text-cyan-400 group-hover:text-purple-500 transition-colors duration-300 leading-none">.</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-base font-semibold transition-colors duration-300 hover:text-cyan-400 ${activeSection === item.id ? "text-cyan-400" : "text-gray-300"
                        }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Separator */}
              <div className="h-6 w-px bg-gray-700"></div>

              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/prerana-chavan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/prerana-chavan-073330246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:preranac90@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50 flex items-center pr-1">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-cyan-400 transition flex items-center justify-center p-1 mr-1"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0f172a] z-40 md:hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-3xl font-bold transition-colors duration-300 ${activeSection === item.id ? "text-cyan-400" : "text-white hover:text-gray-300"
                }`}
            >
              {item.label}
            </button>
          ))}

          <div className="flex space-x-8 mt-8">
            <a
              href="https://github.com/prerana-chavan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/prerana-chavan-073330246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:preranac90@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-125"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
