import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 text-center">
        <motion.div 
            className="relative p-8 sm:p-12 rounded-3xl overflow-hidden bg-white/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.15),_transparent_40%)] dark:bg-[radial-gradient(circle_at_50%_0%,_rgba(0,245,255,0.15),_transparent_40%)]"></div>
            <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Let's Build Something Amazing</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                    Have a project in mind or just want to connect? Feel free to reach out. I'm always open to discussing new ideas and opportunities.
                </p>
                <a href="mailto:2024aib1008@iitrpr.ac.in"
                className="inline-block px-8 py-4 bg-accent-cyan text-primary rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-accent-cyan/20" data-interactive>
                    Say Hello
                </a>
            </div>
      </motion.div>
    </section>
  );
};

export default Contact;
