
import React, { useState, useMemo } from 'react';
import { SKILLS } from '../constants';
import { SkillCategory } from '../types';

const skillCategories = [SkillCategory.Frontend, SkillCategory.Backend, SkillCategory.Tools, SkillCategory.Languages];

const Skills: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All');

    const filteredSkills = useMemo(() => {
        if (activeCategory === 'All') return SKILLS;
        return SKILLS.filter(skill => skill.category === activeCategory);
    }, [activeCategory]);

    const buttonClasses = (category: SkillCategory | 'All') => 
        `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-opacity-50 ` +
        (activeCategory === category 
            ? 'bg-brand-green text-navy shadow-inner' 
            : 'bg-light-navy text-slate hover:bg-lightest-navy hover:text-lightest-slate');

    return (
        <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills and technologies">
            <h2 className="text-2xl font-bold text-lightest-slate mb-8">Skills</h2>
            <div>
                <div className="flex flex-wrap gap-2 mb-8">
                    <button onClick={() => setActiveCategory('All')} className={buttonClasses('All')}>
                        All
                    </button>
                    {skillCategories.map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)} className={buttonClasses(cat)}>
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap gap-3">
                    {filteredSkills.map(skill => (
                         <div key={skill.name} className="flex items-center justify-center rounded-md bg-brand-green-tint px-3 py-1.5">
                            <span className="text-sm font-medium text-brand-green">{skill.name}</span>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;