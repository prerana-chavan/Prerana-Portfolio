import { Skill } from '../types';
import { Code2, Server, Database, Wrench, Link, Layers, Layout, Globe } from 'lucide-react';

export const skills: Skill[] = [
  // 💻 Programming Languages
  { id: 1, name: 'Java', category: 'languages', icon: 'Code2' },
  { id: 2, name: 'JavaScript', category: 'languages', icon: 'Code2' },
  { id: 3, name: 'PHP', category: 'languages', icon: 'Code2' },
  { id: 4, name: 'SQL', category: 'languages', icon: 'Database' },

  // 🔗 Backend Technologies
  { id: 5, name: 'JDBC', category: 'backend', icon: 'Database' },
  { id: 6, name: 'Hibernate', category: 'backend', icon: 'Layers' },
  { id: 7, name: 'Spring', category: 'backend', icon: 'Layers' },
  { id: 8, name: 'RESTful APIs', category: 'backend', icon: 'Link' },
  { id: 9, name: 'Node.js', category: 'backend', icon: 'Server' },
  { id: 10, name: 'Express.js', category: 'backend', icon: 'Server' },

  // 🎨 Frontend Technologies
  { id: 11, name: 'React', category: 'frontend', icon: 'Code2' },
  { id: 12, name: 'Bootstrap', category: 'frontend', icon: 'Layout' },
  { id: 13, name: 'HTML', category: 'frontend', icon: 'Globe' },
  { id: 14, name: 'CSS', category: 'frontend', icon: 'Layout' },

  // 🗄️ Databases
  { id: 15, name: 'MySQL', category: 'databases', icon: 'Database' },
  { id: 16, name: 'MongoDB', category: 'databases', icon: 'Database' },

  // 🛠️ Tools & IDEs
  { id: 17, name: 'Git & GitHub', category: 'tools', icon: 'Wrench' },
  { id: 18, name: 'VS Code', category: 'tools', icon: 'Wrench' },
  { id: 19, name: 'MySQL Workbench', category: 'tools', icon: 'Wrench' },
  { id: 20, name: 'Spring Tool Suite (STS)', category: 'tools', icon: 'Wrench' },
  { id: 21, name: 'Eclipse IDE', category: 'tools', icon: 'Wrench' },
  { id: 22, name: 'Postman', category: 'tools', icon: 'Wrench' },
];

export const getIconComponent = (iconName: string | undefined) => {
  if (!iconName) return null;

  switch (iconName) {
    case 'Code2':
      return Code2;
    case 'Server':
      return Server;
    case 'Database':
      return Database;
    case 'Wrench':
      return Wrench;
    case 'Link':
      return Link;
    case 'Layers':
      return Layers;
    case 'Layout':
      return Layout;
    case 'Globe':
      return Globe;
    default:
      return null;
  }
};
