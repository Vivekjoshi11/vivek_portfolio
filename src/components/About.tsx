'use client';

import { motion } from 'framer-motion';
import { Code, Database, Palette, Wrench } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Blockchain & Smart Contracts', icon: Code, items: ['Solidity', 'Rust', 'Hardhat', 'Anchor', 'ERC-20', 'ERC-721', 'Ethereum', 'Solana'] },
    { name: 'Frontend', icon: Palette, items: ['React.js', 'Next.js', 'Angular', 'Flutter', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: Database, items: ['Node.js', 'Django', 'Express.js', 'PostgreSQL', 'MongoDB', 'MySQL'] },
    { name: 'Tools & Platforms', icon: Wrench, items: ['Git', 'GitHub', 'Jira', 'Postman', 'Figma', 'VS Code'] },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 tech-grid"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-red-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="holo-text">ABOUT ME</span>
            </h2>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
            Full-stack & blockchain developer creating <span className="text-white font-semibold">immersive digital experiences</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">WHO I AM</h3>
            <p className="text-cyan-300 mb-4">
              Full-Stack Blockchain Engineer with 3+ years of experience building scalable Web3 and full-stack applications using Solidity, Ethereum, Next.js, React.js, Django, Node.js, and Rust. Experienced in smart contracts, wallet integrations, backend APIs, ERC-20 token development, and decentralized application architecture across Ethereum and Solana ecosystems.
            </p>
            <p className="text-cyan-300">
              Outside of coding, I love exploring new frameworks, contributing to open-source projects, and sharing knowledge with the developer community. I&rsquo;m always eager to learn and grow, building impactful solutions at the intersection of web and decentralized technologies.
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
                className="relative bg-black/50 border border-cyan-500/30 p-6 rounded-lg holo-border group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 left-0 w-1 h-1 bg-cyan-400"></div>
                <div className="absolute bottom-0 right-0 w-1 h-1 bg-cyan-400"></div>
                
                <div className="flex items-center mb-3 relative z-10">
                  <skill.icon className="w-6 h-6 text-cyan-400 mr-3" />
                  <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                </div>
                <ul className="text-sm text-cyan-300 relative z-10">
                  {skill.items.map((item) => (
                    <li key={item} className="mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                      {item}
                    </li>
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
