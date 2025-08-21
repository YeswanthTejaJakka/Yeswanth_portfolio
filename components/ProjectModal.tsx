
import React, { useEffect, useCallback } from 'react';
import type { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './icons/Actions';

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div className="fixed inset-0 bg-navy bg-opacity-80 backdrop-blur-sm"></div>
            
            <div 
                className={`relative w-full max-w-2xl transform rounded-lg bg-light-navy shadow-2xl transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />
                
                <div className="p-6">
                    <h2 className="text-3xl font-bold text-lightest-slate mb-2">{project.title}</h2>
                    
                    <div className="flex flex-wrap gap-2 my-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="bg-brand-green-tint text-brand-green text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>

                    <p className="text-light-slate mb-6">{project.longDescription}</p>

                    <div className="flex items-center space-x-4">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate hover:text-brand-green transition-colors duration-300">
                            <GithubIcon className="w-6 h-6" />
                            <span>Source Code</span>
                        </a>
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-slate hover:text-brand-green transition-colors duration-300">
                                <ExternalLinkIcon className="w-6 h-6" />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>

                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-slate hover:text-brand-green transition-colors duration-300"
                    aria-label="Close project details"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProjectModal;