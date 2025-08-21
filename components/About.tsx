
import React from 'react';

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <h2 className="text-2xl font-bold text-lightest-slate mb-8">{title}</h2>
);

const About: React.FC = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <SectionTitle title="About" />
            <div>
                <p className="mb-4">
                    I am a passionate and driven student pursuing a Bachelor of Technology in Artificial Intelligence & Data Engineering at the prestigious Indian Institute of Technology, Ropar. My journey into technology is fueled by a curiosity for solving real-world problems through code and data.
                </p>
                <p className="mb-4">
                    I have hands-on experience in developing full-stack applications, from ideation to deployment. I enjoy working with modern technologies like TypeScript, React, and Supabase to build efficient and user-friendly solutions. My projects reflect my ability to tackle diverse challenges, whether it's creating a campus marketplace or an event ticketing system.
                </p>
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-light-slate mb-2">Education</h3>
                    <ul className="space-y-2">
                        <li>
                            <p className="font-medium text-lightest-slate">Bachelor of Technology, AI & Data Engineering</p>
                            <p className="text-sm">Indian Institute of Technology, Ropar (2024-2028)</p>
                            <p className="text-sm text-brand-green">CGPA: 8.53 (Till 3rd Sem)</p>
                        </li>
                        <li>
                            <p className="font-medium text-lightest-slate">Senior Secondary</p>
                            <p className="text-sm">Board of Intermediate Education Andhra Pradesh (2024)</p>
                             <p className="text-sm text-brand-green">Percentage: 97.8%</p>
                        </li>
                        <li>
                            <p className="font-medium text-lightest-slate">Secondary</p>
                            <p className="text-sm">Board of Secondary Education Andhra Pradesh (2022)</p>
                            <p className="text-sm text-brand-green">Percentage: 95.83%</p>
                        </li>
                    </ul>
                </div>
                 <p>
                    I am a quick learner with strong problem-solving skills, adaptable and communicative. I am always eager to learn new technologies and take on challenging projects.
                </p>
            </div>
        </section>
    );
};

export default About;