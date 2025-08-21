
import React from 'react';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
    return (
        <header className="hidden lg:flex fixed top-0 z-30 w-full p-4 backdrop-blur-sm bg-navy/80">
            <nav className="w-full">
                <ul className="flex items-center justify-end space-x-8">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a 
                                href={item.href}
                                className="text-sm font-medium text-slate hover:text-brand-green transition-colors duration-300"
                            >
                               <span className="text-brand-green">0{index + 1}.</span> {item.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a 
                            href="/resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm font-mono text-brand-green border border-brand-green rounded-md px-4 py-2 hover:bg-brand-green-tint transition-all duration-300"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
