
import React from 'react';
import { CONTACT_DETAILS } from '../constants';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="flex flex-col justify-center min-h-[60vh] animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h1 className="font-mono text-lg text-brand-green mb-4">Hi,This is</h1>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-lightest-slate">Jakka Yeswanth Teja.</h2>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate mt-2">I build things for the web.</h3>
            <p className="mt-6 max-w-xl text-lg">
                I’m a student of Artificial Intelligence & Data Engineering at IIT Ropar, specializing in building (and occasionally designing)
                exceptional digital experiences. I am passionate about creating robust and scalable web applications.
            </p>
            <div className="mt-8">
                <a 
                    href={`mailto:${CONTACT_DETAILS.email}`}
                    className="inline-block text-lg font-mono text-brand-green border border-brand-green rounded-md px-8 py-4 hover:bg-brand-green-tint transition-all duration-300"
                >
                    Get In Touch
                </a>
            </div>
        </section>
    );
};

export default Hero;