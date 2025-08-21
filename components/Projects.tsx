
import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
    onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <h2 className="text-2xl font-bold text-lightest-slate mb-8">Projects</h2>
            <div>
                 <ul className="group/list grid grid-cols-1 sm:grid-cols-1 gap-4">
                    {PROJECTS.map((project) => (
                       <li key={project.title} className="mb-12">
                           <ProjectCard project={project} onClick={() => onProjectClick(project)} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;