import React from 'react';
import { motion } from 'framer-motion';
import { CertificateIcon } from './icons';

interface Achievement {
  title: string;
  issuer: string;
  description: string;
  year: number;
}

const achievementsData: Achievement[] = [
  {
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    description: 'Learned principles of Model Client-Server managing and interaction protocols.',
    year: 2025,
  },
  {
    title: 'Data Analytics & Science',
    issuer: 'HP Life',
    description: 'Acquired practical, real-world knowledge on Data Science & Analytics methodologies.',
    year: 2025,
  },
  {
    title: 'Advitiya x JPD Hub Hackathon',
    issuer: 'Hackathon Participation',
    description: 'Collaborated in a team to devise and present innovative solutions to real-world problems.',
    year: 2025,
  },
];

const AchievementCard: React.FC<{ achievement: Achievement, index: number }> = ({ achievement, index }) => {
  return (
    <motion.div
      className="relative p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 flex items-start gap-6 shadow-md dark:shadow-none"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="flex-shrink-0 text-accent-cyan bg-accent-cyan/10 p-3 rounded-full">
        <CertificateIcon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{achievement.title} <span className="text-gray-500 dark:text-gray-400 font-normal text-sm ml-2">({achievement.year})</span></h3>
        <p className="text-gray-700 dark:text-gray-300 font-semibold">{achievement.issuer}</p>
        <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">{achievement.description}</p>
      </div>
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Achievements & Certifications</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">My notable accomplishments and learning milestones.</p>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8">
          {achievementsData.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
