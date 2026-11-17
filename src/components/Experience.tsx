'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-stack & Blockchain Developer',
      company: 'The-Ally',
      location: 'Bangalore, India (Remote)',
      period: 'May 2025 – Present',
      description: 'Developing a full-stack Ethereum-based dApp using Solidity, Hardhat, Next.js, Django and Node.js. Designing and deploying ERC-20 smart contracts with secure blockchain transaction workflows. Working on a CBDC token platform with smart contract-based token management and secure financial workflows.',
      achievements: [
        'Optimizing smart contract interactions for scalability, gas efficiency, and security best practices',
        'Developing production-grade full-stack applications using Next.js, Django and MySQL',
        'Designing and integrating REST APIs for frontend-backend communication and third-party service integrations',
        'Managing backend infrastructure, database operations, and application performance optimization',
        'Building scalable backend APIs and managing database architecture using Django and MySQL'
      ]
    },
    {
      title: 'Full-stack & Blockchain Developer',
      company: 'Skytrade',
      location: 'USA (Remote)',
      period: 'September 2024 – May 2025',
      description: 'Built Solana dApps using Rust, Anchor and Next.js with secure smart contract integrations. Implemented multi-wallet support including Phantom, Solflare and Backpack wallets. Developed a drone signal verifier on Peaq Network using Flutter, Node.js and Next.js.',
      achievements: [
        'Worked with NFT minting, compute units, rent exemptions, and priority fees'
      ]
    },
    {
      title: 'Software Engineer (Freelancer)',
      company: 'DL SSR Infotech',
      location: 'Delhi, India (Remote)',
      period: 'April 2024 – September 2024',
      description: 'Developed responsive web and mobile applications using Flutter, Next.js and React.js. Optimized performance, resolved bugs, and collaborated with UI/UX teams using Figma.',
      achievements: [
        'Built 10+ responsive web applications',
        'Created short video app similar to Likee using Flutter',
        'Applied advanced debugging techniques to enhance performance',
        'Leveraged Figma for designing intuitive user interfaces'
      ]
    },
    {
      title: 'ML - AI Intern',
      company: 'Edunet Foundation',
      location: 'Ahmedabad, India',
      period: 'January 2024 – March 2024',
      description: 'Developed and trained deep learning models for image recognition tasks. Built deepfake image detection models using Python and TensorFlow. Improved model accuracy through dataset analysis and feature engineering.',
      achievements: [
        'Increased image recognition accuracy by 15% in deepfake detection project',
        'Conducted in-depth analysis of complex datasets',
        'Constructed predictive models for recommendation systems',
        'Extracted critical features from datasets for model improvement'
      ]
    },
    {
      title: 'Front-end Developer (Angular)',
      company: 'Ximple Solutions',
      location: 'Ahmedabad, India (Remote)',
      period: 'June 2022 - January 2023',
      description: 'Developed ERP web interfaces using Angular, TypeScript, HTML and CSS with focus on performance optimization.',
      achievements: [
        'Maintained highly interactive ERP web application',
        'Applied advanced debugging techniques to resolve critical bugs',
        'Enhanced performance and ensured optimal functionality',
        'Created seamless user experiences across all products'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 tech-grid"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-red-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="holo-text">EXPERIENCE</span>
            </h2>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl text-cyan-400 max-w-3xl mx-auto">
            Professional journey across <span className="text-white font-semibold">Web3, Full-Stack, and AI</span> domains
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-cyan-500/30"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.title}-${experience.company}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 group`}
            >
              <div className="absolute -left-1/2 top-4 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.8)] z-10">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              
              <div className={`flex items-start gap-8 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`flex-1 bg-black/40 border border-cyan-500/30 p-6 rounded-lg shadow-xl holo-border hover:border-cyan-500/60 transition-all group-hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] relative z-0`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                      <p className="text-cyan-400 font-semibold">{experience.company}</p>
                    </div>
                    <div className="text-sm text-cyan-400 mt-2 sm:mt-0">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {experience.period}
                        </span>
                        <span className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {experience.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-cyan-300 mb-4">{experience.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white mb-2">KEY ACHIEVEMENTS:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-cyan-300 flex items-start">
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="absolute -right-1/2 top-4 w-1 h-full bg-cyan-500/30 hidden sm:block"></div>
                <div className="absolute -left-1/2 top-4 w-1 h-full bg-cyan-500/30 hidden sm:block"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
