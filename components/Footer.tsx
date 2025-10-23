import React from 'react';
import { GithubIcon, LinkedinIcon } from './icons';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 sm:mb-0">
          &copy; {year} Yeswanth Teja. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a href="https://github.com/YeswanthTejaJakka" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" data-interactive><GithubIcon className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/yeswanth-teja/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" data-interactive><LinkedinIcon className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
