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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{experience.title}</h3>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">{experience.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
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
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 dark:text-white">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
