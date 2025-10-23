import React from 'react';
import LogoLoop from './LogoLoop';

const languages = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', alt: 'C' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', alt: 'C++' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
];

const tools = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', alt: 'Supabase' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', alt: 'Vertex AI' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg', alt: 'Android' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', alt: 'Git' },
];


const Skills: React.FC = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">My Tech Stack</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Languages, tools, and platforms I love to work with.</p>
        </div>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-300">Programming Languages</h3>
            <div className="relative">
              <LogoLoop logos={languages} speed={50} logoHeight={40} />
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-300">Tools & Platforms</h3>
            <div className="relative">
              <LogoLoop logos={tools} speed={60} direction="right" logoHeight={40} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
