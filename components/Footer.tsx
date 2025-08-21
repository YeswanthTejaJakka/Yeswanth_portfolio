
import React from 'react';
import { GithubIcon, LinkedinIcon } from './icons/Socials';
import { CONTACT_DETAILS } from '../constants';

const socialLinks = [
    { href: CONTACT_DETAILS.github, icon: GithubIcon, name: 'GitHub' },
    { href: CONTACT_DETAILS.linkedin, icon: LinkedinIcon, name: 'LinkedIn' },
];

const Footer: React.FC = () => {
    return (
        <footer className="text-center py-6 text-sm text-slate">
            <div className="lg:hidden flex justify-center space-x-6 mb-4">
                 {socialLinks.map((link) => (
                    <a 
                        key={link.name}
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="block p-2 text-slate hover:text-brand-green transition-colors duration-300"
                    >
                        <link.icon className="h-6 w-6" />
                    </a>
                ))}
            </div>
            <p>Designed & Built by Jakka Yeswanth Teja</p>
            <p>Inspired by modern web design trends.</p>
        </footer>
    );
};

export default Footer;