import type { FC, SVGProps } from 'react';

export enum SkillCategory {
    Frontend = 'Frontend',
    Backend = 'Backend',
    Tools = 'Tools',
    Languages = 'Languages'
}

export interface Skill {
    name: string;
    category: SkillCategory;
}

export interface Project {
    title: string;
    description: string;
    longDescription: string;
    tags: string[];
    imageUrl: string;
    githubUrl: string;
    liveUrl?: string;
}

export interface ExperienceItem {
    role: string;
    company: string;
    companyLogo?: FC<SVGProps<SVGSVGElement>>;
    duration: string;
    description: string[];
}