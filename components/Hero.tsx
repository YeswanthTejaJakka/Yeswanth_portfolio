import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DownloadIcon } from './icons';

const InteractiveProfileImage: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div 
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500/50 dark:border-accent-cyan/50 shadow-2xl shadow-blue-500/20 dark:shadow-accent-cyan/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-interactive
        >
            <svg className="absolute w-0 h-0">
                <filter id="blur-effect">
                    <feGaussianBlur stdDeviation="8" />
                </filter>
            </svg>
            <motion.img 
                src="https://i.postimg.cc/pXx7c40n/Whats-App-Image-2025-10-23-at-15-59-34-a5071f0c.jpg" 
                alt="Yeswanth Teja" 
                className="w-full h-full object-cover"
                animate={{ filter: isHovered ? 'url(#blur-effect)' : 'none' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-50/50 dark:from-primary/50 to-transparent"></div>
        </div>
    );
};

interface HeroProps {
  sections: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
}

const Hero: React.FC<HeroProps> = ({ sections }) => {
  const scrollToContact = () => {
    sections.contact?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left pt-24 pb-12">
      <div className="md:w-1/2 space-y-4">
        <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          <span className="block text-gray-700 dark:text-gray-300">I'm Yeswanth Teja</span>
          <span className="animate-power-light">AI & Data Engineer</span>
        </motion.h1>
        <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
         Still a student — always a learner.
        </motion.p>
        <motion.div
             className="mt-6 flex flex-wrap justify-center md:justify-start items-center gap-4"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
        >
            <a 
                href="https://drive.google.com/file/d/1sAGKQ9VFun3tAhj0GYmX292cSMzR-XSu/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent-cyan text-primary rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-accent-cyan/20" 
                data-interactive
            >
                <DownloadIcon className="w-5 h-5" />
                Hire Me
            </a>
            <button 
                onClick={scrollToContact} 
                className="px-8 py-3 bg-transparent text-accent-cyan border-2 border-accent-cyan rounded-full font-semibold hover:bg-accent-cyan/20 transition-all duration-300" 
                data-interactive
            >
                Get In Touch
            </button>
        </motion.div>
      </div>
      <motion.div 
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <InteractiveProfileImage />
      </motion.div>
    </section>
  );
};

export default Hero;
