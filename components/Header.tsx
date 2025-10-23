import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';

interface HeaderProps {
  sections: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);

    let currentSection = 'home';
    // FIX: Use `Object.keys` to iterate over sections. This resolves a TypeScript issue where `Object.entries` incorrectly infers the ref's type as `unknown`.
    Object.keys(sections).forEach((id) => {
      const ref = sections[id];
      if (ref.current && window.scrollY >= ref.current.offsetTop - 150) {
        currentSection = id;
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    sections[id]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 relative">
        <div className="flex justify-center items-center backdrop-blur-md bg-gray-200/50 dark:bg-white/5 border border-gray-300/50 dark:border-white/10 rounded-full px-6 py-2 shadow-lg dark:shadow-black/10">
          <nav>
            <ul className="flex items-center space-x-4 sm:space-x-8">
              {navItems.map((item) => (
                <li key={item.id} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm sm:text-base font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
                    data-interactive
                  >
                    {item.label}
                  </button>
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-[-8px] left-0 right-0 h-0.5 bg-accent-cyan"
                      layoutId="underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="absolute top-1/2 right-4 sm:right-8 md:right-12 lg:right-24 -translate-y-1/2">
            <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
