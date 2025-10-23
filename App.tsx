import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Background from './components/Background';

const App: React.FC = () => {
  const sections = {
    home: React.useRef<HTMLDivElement>(null),
    about: React.useRef<HTMLDivElement>(null),
    skills: React.useRef<HTMLDivElement>(null),
    projects: React.useRef<HTMLDivElement>(null),
    achievements: React.useRef<HTMLDivElement>(null),
    contact: React.useRef<HTMLDivElement>(null),
  };

  return (
    <>
      <CustomCursor />
      <Background />
      <div className="relative z-10 font-sans bg-transparent min-h-screen antialiased">
        <Header sections={sections} />
        <main className="px-4 sm:px-8 md:px-12 lg:px-24">
          <div ref={sections.home}>
            <Hero sections={sections} />
          </div>
          <div ref={sections.about}>
            <About />
          </div>
          <div ref={sections.skills}>
            <Skills />
          </div>
          <div ref={sections.projects}>
            <Projects />
          </div>
          <div ref={sections.achievements}>
            <Achievements />
          </div>
          <div ref={sections.contact}>
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;