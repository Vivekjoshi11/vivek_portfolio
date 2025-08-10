'use client';

import { motion } from 'framer-motion';
import { Code, Database, Palette, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: Code, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: Database, items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { name: 'Design', icon: Palette, items: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design'] },
    { name: 'Mobile', icon: Smartphone, items: ['React Native', 'Flutter', 'iOS', 'Android'] },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in creating beautiful, functional web experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I&apos;m a passionate full-stack developer with 5+ years of experience creating web applications
              that solve real-world problems. I specialize in React, Next.js, and modern web technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-3">
                  <skill.icon className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h4>
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-300">
                  {skill.items.map((item) => (
                    <li key={item} className="mb-1">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
