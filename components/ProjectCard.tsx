
import React from 'react';
import type { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './icons/Actions';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer"
        >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                    <span className="inline-block text-lg font-medium text-lightest-slate group-hover:text-brand-green">{project.title}</span>
                </h3>
                <p className="mt-2 text-sm leading-normal">{project.description}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.tags.map((tag) => (
                        <li key={tag} className="mr-1.5 mt-2">
                             <div className="flex items-center rounded-full bg-brand-green-tint px-3 py-1 text-xs font-medium leading-5 text-brand-green ">{tag}</div>
                        </li>
                    ))}
                </ul>
            </div>
            <img 
                alt={project.title} 
                loading="lazy" 
                width="200" 
                height="48" 
                decoding="async" 
                className="rounded border-2 border-slate/10 transition group-hover:border-slate/30 sm:order-1 sm:col-span-2 sm:translate-y-1" 
                style={{ color: 'transparent' }} 
                src={project.imageUrl} 
            />
        </div>
    );
};

export default ProjectCard;
