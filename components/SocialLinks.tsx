
import React from 'react';
import { GithubIcon, LinkedinIcon } from './icons/Socials';
import { CONTACT_DETAILS } from '../constants';

const socialLinks = [
    { href: CONTACT_DETAILS.github, icon: GithubIcon, name: 'GitHub' },
    { href: CONTACT_DETAILS.linkedin, icon: LinkedinIcon, name: 'LinkedIn' },
];

const SocialLinks: React.FC = () => {
    return (
        <div className="hidden lg:block fixed bottom-0 left-12 z-10">
            <ul className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate after:mx-auto after:mt-6">
                {socialLinks.map((link) => (
                    <li key={link.name}>
                        <a 
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className="block p-2 text-slate hover:text-brand-green hover:-translate-y-1 transition-all duration-300"
                        >
                            <link.icon className="h-6 w-6" />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;