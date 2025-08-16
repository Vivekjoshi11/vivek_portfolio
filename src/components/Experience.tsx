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
      description: 'Working on a full-stack Ethereum-based dApp using Hardhat, ERC-20 smart contracts, Next.js, and Node.js. Responsible for designing and writing smart contracts, integrating them into a scalable web application, and building robust backend systems using Node.js with PostgreSQL and MySQL. Implemented MetaMask wallet integration and authentication on the Next.js frontend to enable secure user onboarding and interactions.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Ensured secure contract interactions and efficient transaction flows',
        'Implemented seamless user experiences across the dApp'
      ]
    },
    {
      title: 'Full-stack & Blockchain Developer',
      company: 'Skytrade USA',
      location: 'USA (Remote)',
      period: 'September 2024 – May 2025',
      description: 'Worked as a full-stack developer on Solana dApps using Rust, Anchor, and Next.js, integrating secure smart contracts into web and mobile applications. Developed multi-wallet functionality supporting Phantom and Solflare using Solana Wallet Adapter in both Next.js and Flutter interfaces.',
      achievements: [
        'Led development of cross-platform drone signal verifier on Peaq Network',
        'Automated backend smart contract interactions using Node.js',
        'Enabled NFT minting with Metaplex metadata standards',
        'Implemented advanced Solana features like lamports, rent exemptions, and priority fees'
      ]
    },
    {
      title: 'Software Engineer (Freelancer)',
      company: 'DL SSR Infotech',
      location: 'Delhi, India (Remote)',
      period: 'April 2024 – September 2024',
      description: 'Collaborated effectively with diverse teams to achieve project objectives. Engineered and maintained highly interactive mobile applications using Flutter framework, including projects like a short video app similar to Likee. Developed dynamic and responsive front-end for web applications using Next.js and React.js.',
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
      description: 'Acquired expertise in machine learning algorithms and successfully applied them to practical, real-world projects. Developed and trained deep learning models on labeled datasets, achieving high accuracy in image recognition tasks.',
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
      location: 'Ahmedabad, India',
      period: 'June 2022 - January 2023',
      description: 'Collaborated effectively with diverse teams to achieve shared objectives. Engineered and maintained highly interactive and user-centric webpages using the Angular framework, with expertise in HTML, CSS, and TypeScript, resulting in seamless user experiences.',
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
