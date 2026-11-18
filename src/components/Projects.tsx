/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Sports Tournament Management SaaS',
      description: 'A SaaS-based tournament tracker and management application where tournament admins can create tournaments, assign officials, and manage various aspects like weight and age categories, brackets, points tables, and results. Admins can download tournament results for reporting and analysis.',
      image: '/images/sports.png',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Vercel', 'SaaS', 'Tournament Management'],
      github: 'https://github.com/Vivekjoshi11/Sports_software/tree/master/sportstacker',
      live: 'https://sports-software-vjzh.vercel.app/',
      date: '2025'
    },
    {
      title: 'TokenVault',
      description: 'This is a dApp built with Next.js and Ethers.js, connected to a custom ERC-20 token smart contract. It simulates a banking system where users and bank entities can interact — users can view and manage multiple bank accounts in one place, and all actions are powered by blockchain transactions using the custom token.',
      image: '/images/TokenVault.png',
      technologies: ['Next.js', 'Solidity', 'HardHat', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Vercel', 'Metamask', 'Ethers.js', 'Github'],
      github: 'https://github.com/Vivekjoshi11/erc20-client-frontend',
      live: 'https://mini-github-explorer-gnw9.vercel.app/',
      date: '2025'
    },
    {
      title: 'DeepFake Image Detection',
      description: 'Deepfake image detection is a critical endeavor aimed at combating the proliferation of manipulated visual content. Leveraging advancements in machine learning, our proposed approach offers a robust solution for identifying deepfake images.',
      image: '/images/deepfake.png',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Jupyter Notebook', 'CNN', 'Github', 'Deep Learning', 'Image Processing', 'Deepfake Detection', 'Image Classification'],
      github: 'https://github.com/Vivekjoshi11/Deepfake_Image_Detection',
      date: '2024'
    },
    {
      title: 'Property Mass Adoption',
      description: 'Property Mass Adoption Blockchain application designed to automate bulk upload and minting of address data onto Solana blockchain. Key Features: Bulk CSV Upload, Automated Geocoding, Database Integration, Solana Blockchain Minting.',
      image: '/images/Propertymassadoption.png',
      technologies: ['Next.js', 'Node.js', 'Solana', 'Tailwind CSS', 'Vercel', 'Solana Wallet Adapter', 'Phantom Wallet', 'Github'],
      github: 'https://github.com/Vivekjoshi11/propertymassadoption',
      date: '2024'
    },
    {
      title: 'Github Explorer',
      description: 'Github explorer app to see anyone\'s github profile and public repositories, sort by stars, and search repositories.',
      image: '/images/GithubEx.png',
      technologies: ['TypeScript', 'React.js', 'Github', 'Tailwind CSS', 'Prisma', 'Vercel'],
      github: 'https://github.com/Vivekjoshi11/mini-github-explorer',
      live: 'https://mini-github-explorer-489n.vercel.app/',
      date: '2025'
    },
    {
      title: 'Multiple Wallet Connect',
      description: 'Multiple wallet connect app using Web3Auth SFA for Solana and EVM, with support for native wallets like Phantom & MetaMask.',
      image: '/images/MWC.png',
      technologies: ['Next.js', 'TypeScript', 'Github', 'Metamask', 'Phantom', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/Vivekjoshi11/multi_wallet_connect',
      date: '2024'
    },
    {
      title: 'Drone Signal Verification System',
      description: 'Drone Signal Verification System for authenticating drone signals using Peaq Network blockchain-based decentralized identity verification.',
      image: '/images/drone.png',
      technologies: ['Next.js', 'TypeScript', 'Github', 'Metamask', 'Peaq', 'Phantom', 'Tailwind CSS', 'Vercel', 'Web3auth'],
      github: 'https://github.com/Vivekjoshi11/drone-research',
      date: '2024'
    },
    {
      title: 'Follow the Path Game',
      description: 'Unity game where character follows path boxes to reach next levels.',
      image: '/images/FTP.png',
      technologies: ['Unity 3D', 'C#', 'Github', 'Unity Engine'],
      github: 'https://github.com/Vivekjoshi11/Follow-the-path-gane',
      date: '2023'
    }
  ];

  const [showAllProjects, setShowAllProjects] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(new Set());

  const toggleDescription = (index: number) => {
    const newExpanded = new Set(expandedDescriptions);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedDescriptions(newExpanded);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 circuit-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-transparent to-blue-900/20"></div>

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
              <span className="holo-text">PROJECTS</span>
            </h2>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
            Showcasing <span className="text-white font-semibold">3D holographic</span> innovations and breakthrough solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => {
            const actualIndex = showAllProjects ? index : index;
            const isExpanded = expandedDescriptions.has(actualIndex);
            const shouldTruncate = project.description.length > 150;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20, rotateY: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group perspective-3d"
              >
                <div className="relative bg-black/50 border border-cyan-500/30 rounded-lg overflow-hidden shadow-2xl holo-border group">
                  <div className="pointer-events-none absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/30 transition-all duration-300 rounded-lg overflow-hidden hidden group-hover:block">
                    <div className="scan-effect"></div>
                  </div>

                  <div className="aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                      <span className="text-sm text-cyan-400 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {project.date}
                      </span>
                    </div>

                    <p className="text-cyan-300 mb-4">
                      {shouldTruncate && !isExpanded
                        ? truncateText(project.description, 150)
                        : project.description}
                      {shouldTruncate && (
                        <button
                          onClick={() => toggleDescription(actualIndex)}
                          className="text-cyan-400 hover:text-white ml-1 text-sm font-medium underline"
                        >
                          {isExpanded ? 'Show less' : 'Show more'}
                        </button>
                      )}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <Github size={18} />
                        Code
                      </motion.a>
                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {projects.length > 4 && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(0,229,255,0.8)] transition-all flex items-center gap-2 mx-auto"
            >
              {showAllProjects ? 'Show Less' : 'Show More Projects'}
              <ChevronDown
                size={20}
                className={`transition-transform ${showAllProjects ? 'rotate-180' : ''}`}
              />
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
