import React, { useEffect, useCallback } from 'react';
import { CONTACT_DETAILS } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/Socials';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const contactLinks = [
    {
        name: 'GitHub',
        href: CONTACT_DETAILS.github,
        icon: GithubIcon,
        handle: 'YeswanthTejaJakka'
    },
    {
        name: 'LinkedIn',
        href: CONTACT_DETAILS.linkedin,
        icon: LinkedinIcon,
        handle: 'Yeswanth-teja-Jakka'
    },
    {
        name: 'Email',
        href: `mailto:${CONTACT_DETAILS.email}`,
        icon: MailIcon,
        handle: CONTACT_DETAILS.email
    },
];

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
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
                className={`relative w-full max-w-md transform rounded-lg bg-light-navy shadow-2xl transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-8">
                    <h2 className="text-3xl font-bold text-lightest-slate mb-6 text-center">Contact Information</h2>
                    
                    <ul className="space-y-4">
                        {contactLinks.map(link => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    target={link.name === 'Email' || link.name === 'Phone' ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                    className="group flex items-center p-4 rounded-md bg-lightest-navy hover:bg-slate/20 transition-all duration-300"
                                >
                                    <link.icon className="h-8 w-8 text-slate group-hover:text-brand-green transition-colors duration-300" />
                                    <div className="ml-4">
                                        <p className="font-bold text-lightest-slate group-hover:text-brand-green transition-colors duration-300">{link.name}</p>
                                        <p className="text-sm text-slate">{link.handle}</p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-slate hover:text-brand-green transition-colors duration-300"
                    aria-label="Close contact details"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ContactModal;