
import type { Skill, Project, ExperienceItem } from './types';
import { SkillCategory } from './types';

export const CONTACT_DETAILS = {
  email: '2024aib1008@iitrpr.ac.in',
  github: 'https://github.com/YeswanthTejaJakka',
  linkedin: 'https://linkedin.com/in/Yeswanth-teja-Jakka',
};

export const SKILLS: Skill[] = [
    { name: 'C', category: SkillCategory.Languages },
    { name: 'C++', category: SkillCategory.Languages },
    { name: 'Python', category: SkillCategory.Languages },
    { name: 'TypeScript', category: SkillCategory.Languages },
    { name: 'JavaScript', category: SkillCategory.Languages },
    { name: 'HTML', category: SkillCategory.Frontend },
    { name: 'CSS', category: SkillCategory.Frontend },
    { name: 'Supabase', category: SkillCategory.Backend },
    { name: 'Canva', category: SkillCategory.Tools },
    { name: 'Anthropic Studio', category: SkillCategory.Tools },
    { name: 'Google AI Studio', category: SkillCategory.Tools },
    { name: 'TinkerCAD', category: SkillCategory.Tools },
    { name: 'Android', category: SkillCategory.Tools },
    { name: 'Vertex AI', category: SkillCategory.Tools },
    { name: 'Windows Tools', category: SkillCategory.Tools },
];

export const PROJECTS: Project[] = [
    {
        title: 'FluxR - Buy and Sell Platform',
        description: 'A full stack web application for IIT Ropar students to seamlessly buy/sell items, share ride requests, and manage lost & found within campus.',
        longDescription: 'Built a full stack web application enabling IIT Ropar students to seamlessly buy/sell items, share ride requests, and manage lost found within campus. Designed with a focus on collaboration, the platform created a centralized hub that simplified student interactions and reduced fragmentation across informal groups. Leveraged TypeScript for a responsive frontend and Supabase for authentication, real time database, and storage, ensuring scalability and secure access. Designed modular workflows for item listings and requests, making it easy to extend the platform for future use-cases such as event announcements and study group formation.',
        tags: ['TypeScript', 'HTML', 'CSS', 'Supabase'],
        imageUrl: 'https://i.postimg.cc/BQdDW4nS/image.png',
        githubUrl: 'https://github.com',
    },
    {
        title: 'QrGo - Event Ticketing Platform',
        description: 'A web-based event ticketing and QR check-in system used by the Telugu Cultural Association, IIT Ropar.',
        longDescription: 'Built and deployed a web-based event ticketing and QR check-in system used by the Telugu Cultural Association, IIT Ropar, managing 240+ live registrations and confirmations. Designed booking dashboards, integrated Supabase with SQL queries for secure storage, and implemented organizer tools to streamline event management.',
        tags: ['TypeScript', 'HTML', 'CSS', 'Supabase'],
        imageUrl: 'https://i.postimg.cc/jqMQFpf2/Whats-App-Image-2025-08-21-at-22-02-47-215a13a5.jpg',
        githubUrl: 'https://github.com',
        liveUrl: '#',
    },
    {
        title: 'Whatsapp Web Lock Extension',
        description: 'A JavaScript-based browser extension to enable password protection for WhatsApp Web.',
        longDescription: "Developed a JavaScript-based browser extension to enable password protection for WhatsApp Web without storing the user's password. Designed a reset process where passwords can be reset securely without needing the previous password, improving data privacy and security.",
        tags: ['JavaScript'],
        imageUrl: 'https://i.postimg.cc/2663bKS9/image.png',
        githubUrl: '#',
    },
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        role: 'Participant',
        company: 'Advitiya x JPD Hub Hackathon',
        duration: '2025',
        description: [
            'Participated in a hackathon to solve real-world problems.',
        ]
    },
    {
        role: 'Learner',
        company: 'HP Life',
        duration: '2025',
        description: [
            'Completed a course on Data Analytics & Science, acquiring practical knowledge in the field.',
        ]
    },
    {
        role: 'Learner',
        company: 'Anthropic',
        duration: '2025',
        description: [
            'Completed "Introduction to Model Context Protocol" to learn about model client-server management.',
        ]
    },
    {
        role: 'Volunteer',
        company: 'Aarohan Fest, IIT Ropar',
        duration: 'Feb 2024 - Apr 2024',
        description: [
            'Assisted in organizing and managing events for the annual technical festival.',
        ]
    }
];