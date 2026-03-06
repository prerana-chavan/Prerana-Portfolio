import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'StudyStore – Stationery E-Commerce',
    description: 'A full-stack e-commerce platform built with Java Spring Boot and JSP, featuring secure JWT-based user authentication, product catalog management, shopping cart, and order workflows. Implements role-based access control with separate user and admin modules, backed by MySQL with Spring Data JPA.',
    date: '2026',
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'HTML/CSS', 'JSP'],
    imageUrl: '/assets/images/studystore.png',
    githubUrl: 'https://github.com/prerana-chavan/StudyStore_Website',
  },
  {
    id: 2,
    title: 'Food Order Website – MERN Stack',
    description: 'A full-stack food ordering platform built with the MERN stack during internship at ScaleFull Technologies. Features a real-time admin dashboard with complete CRUD operations for menu management, structured REST API architecture, MongoDB database integration, and a responsive UI for seamless ordering experience.',
    date: '2025',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    imageUrl: '/assets/images/food_order.jpg',
    githubUrl: 'https://github.com/prerana-chavan/final-food-project',
  },
  {
    id: 3,
    title: 'Virtual Art Gallery – PHP & MySQL',
    description: 'An interactive virtual art gallery platform built with PHP and MySQL, enabling artists to upload, edit, and showcase artworks through a dedicated admin panel. Features secure user authentication, artwork categorization, and a clean responsive gallery interface for browsing and discovering art.',
    date: '2025',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    imageUrl: '/assets/images/Art.jpeg',
    githubUrl: 'https://github.com/prerana-chavan/virtual-art-gallery',
  }
];