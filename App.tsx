
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import type { Project } from './types';
import ProjectModal from './components/ProjectModal';

const App: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);

    const openProjectModal = (project: Project) => {
        setSelectedProject(project);
        setIsProjectModalOpen(true);
    };

    const closeProjectModal = () => {
        setIsProjectModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    useEffect(() => {
        if (isProjectModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isProjectModalOpen]);


    return (
        <div className="relative min-h-screen bg-navy">
            <SocialLinks />
            
            <main id="content" className="mx-auto max-w-4xl px-6 py-12 md:px-12 md:py-20">
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects onProjectClick={openProjectModal} />
                <Contact />
            </main>

            <Footer />

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    isOpen={isProjectModalOpen} 
                    onClose={closeProjectModal} 
                />
            )}
        </div>
    );
};

export default App;