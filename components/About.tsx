import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I am Jakka Yeswanth Teja, a dedicated and passionate student pursuing a Bachelor of Technology in <strong>Artificial Intelligence & Data Engineering</strong> at the prestigious <strong>Indian Institute of Technology, Ropar</strong> (2024-2028).
            With a current CGPA of <strong>8.53</strong>, I am driven by a curiosity for creating intelligent systems and crafting seamless, intuitive user experiences. I thrive on tackling complex challenges and am always eager to learn and grow in the ever-evolving world of technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
