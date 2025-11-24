import React from 'react';
import type { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './icons';
import { motion } from 'framer-motion';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'FluxR - Buy and Sell Platform',
    description: 'A full-stack web app for IIT Ropar students to buy/sell items, share rides, and manage lost & found. Designed for collaboration, it features a responsive frontend and uses Supabase for authentication, real-time database, and storage.',
    imageUrl: 'https://i.postimg.cc/x8jCtgB2/logoforbuyandsell.jpg',
    tags: ['TypeScript', 'HTML', 'CSS', 'Supabase'],
    liveUrl: 'https://fluxr.vercel.app/',
    repoUrl: 'https://github.com/YeswanthTejaJakka',
  },
  {
    id: 2,
    title: 'QrGo - Event Ticketing Platform',
    description: 'A web-based event ticketing and QR check-in system for the Telugu Cultural Association, IIT Ropar. Managed 240+ live registrations with dashboards, using Supabase and SQL queries for secure storage.',
    imageUrl: 'https://i.postimg.cc/rpSwTvLZ/Whats-App-Image-2025-08-21-at-22-02-47-215a13a5.jpg',
    tags: ['TypeScript', 'HTML', 'CSS', 'Supabase', 'SQL'],
    liveUrl: 'http://qrgo-weld.vercel.app/',
    repoUrl: 'https://github.com/YeswanthTejaJakka',
  },
  {
    id: 3,
    title: 'WhatsApp Web Lock Extension',
    description: 'A privacy-focused browser extension to password-protect WhatsApp Web without storing user data. Features a secure, passwordless reset mechanism, built with vanilla JavaScript for performance and security.',
    imageUrl: 'https://i.postimg.cc/W1L8zkZ4/image.png',
    tags: ['JavaScript', 'Browser Extension', 'Security'],
    repoUrl: 'https://github.com/YeswanthTejaJakka',
  },
  {
    id: 4,
    title: 'RISC-V Assembler',
    description: 'A robust system tool that converts RISC-V assembly code into machine code. Supports varied instruction formats and label resolution, demonstrating a deep understanding of computer architecture and low-level programming.',
    imageUrl: 'https://i.postimg.cc/NGk2dqgC/Gemini-Generated-Image-1ty7ey1ty7ey1ty7.png',
    tags: ['C++', 'Assembly', 'Computer Architecture', 'Systems'],
    repoUrl: 'https://github.com/YeswanthTejaJakka',
  },
  {
    id: 5,
    title: 'AI Crop Suggestion System',
    description: 'An intelligent agriculture system recommending optimal crops based on environmental data like weather, soil pH, humidity, and rainfall. Leverages machine learning algorithms to assist farmers in maximizing yield.',
    imageUrl: 'https://i.postimg.cc/G27wpmF5/Gemini-Generated-Image-qg8l1wqg8l1wqg8l.png',
    tags: ['Python', 'Machine Learning', 'Data Science', 'Scikit-learn'],
    repoUrl: 'https://github.com/YeswanthTejaJakka',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <motion.div 
      className="relative electric-border flex-shrink-0 w-80 md:w-96 h-[450px] p-6 rounded-3xl
                 bg-white/80 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 shadow-xl
                 group transition-all duration-500"
      whileHover={{ y: -10 }}
    >
        <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-2xl overflow-hidden bg-gray-200 dark:bg-gray-800">
            {!isLoaded && (
                <div className="absolute inset-0 animate-pulse bg-gray-300 dark:bg-white/5 z-10" />
            )}
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} 
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-secondary/80 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-end h-full">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 h-24 overflow-hidden">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs bg-blue-500/10 text-blue-600 dark:bg-accent-cyan/10 dark:text-accent-cyan rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" data-interactive>
                        <GithubIcon className="w-6 h-6" />
                    </a>
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" data-interactive>
                            <ExternalLinkIcon className="w-6 h-6" />
                        </a>
                    )}
                </div>
            </div>
        </div>
        <div className="absolute -bottom-1/2 -right-1/2 w-48 h-48 bg-accent-purple/5 dark:bg-accent-purple/10 rounded-full blur-3xl group-hover:w-64 group-hover:h-64 transition-all duration-700"></div>
        <div className="absolute -top-1/2 -left-1/2 w-48 h-48 bg-accent-cyan/5 dark:bg-accent-cyan/10 rounded-full blur-3xl group-hover:w-64 group-hover:h-64 transition-all duration-700"></div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const duplicatedProjects = [...projectsData, ...projectsData, ...projectsData];

  return (
    <section className="py-20 sm:py-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">A selection of my recent work.</p>
      </div>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_5%,_black_95%,transparent_100%)]">
        <div className="flex items-center justify-start animate-scroll hover:[animation-play-state:paused] gap-8 py-4">
          {duplicatedProjects.map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;