
import React from 'react';
import { EXPERIENCE } from '../constants';
import type { ExperienceItem } from '../types';

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-2xl font-bold text-lightest-slate mb-8">{title}</h2>
);


const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2" aria-label={item.duration}>{item.duration}</header>
        <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-slate">
                <div className="flex items-center gap-2">
                     {item.companyLogo && <item.companyLogo className="h-5 w-5 shrink-0" />}
                    <span className="text-lightest-slate group-hover:text-brand-green transition-colors duration-300">{item.role} · {item.company}</span>
                </div>
            </h3>
            <ul className="mt-2 list-disc list-inside text-sm">
                {item.description.map((point, index) => (
                    <li key={index} className="mb-2">{point}</li>
                ))}
            </ul>
        </div>
    </div>
);


const Experience: React.FC = () => {
    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <SectionTitle title="Experience" />
            <div className="group/list">
                {EXPERIENCE.map((item, index) => (
                    <div key={index} className="mb-12">
                         <ExperienceCard item={item} />
                    </div>
                ))}
            </div>
            <div className="mt-12">
                 <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-medium leading-tight text-lightest-slate group">
                     <span>
                         <span className="border-b border-transparent pb-px transition group-hover:border-brand-green motion-reduce:transition-none">View Full </span>
                         <span className="whitespace-nowrap">
                             <span className="border-b border-transparent pb-px transition group-hover:border-brand-green motion-reduce:transition-none">Resume</span>
                         </span>
                     </span>
                 </a>
            </div>
        </section>
    );
};

export default Experience;