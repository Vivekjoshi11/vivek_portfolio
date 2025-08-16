/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'TokenVault',
      description: 'This is a dApp built with Next.js and Ethers.js, connected to a custom ERC-20 token smart contract. It simulates a banking system where users and bank entities can interact — users can view and manage multiple bank accounts in one place, and all actions are powered by blockchain transactions using the custom token.',
      image: '/images/TokenVault.png',
      technologies: ['Next.js','Solidity', 'HardHat', 'Node.js', 'PostgressSql', 'Stripe', 'Tailwind CSS','Vercel', 'Metamask', 'Ethers.js', 'Github'],
      github: 'https://github.com/Vivekjoshi11/erc20-client-frontend',
      live: 'https://mini-github-explorer-gnw9.vercel.app/',
      date: '2025'
    },
    {
      title: 'DeepFake Image Detection',
      description: 'Deepfake image detection is a critical endeavor aimed at combating the proliferation of manipulated visual content. Leveraging advancements in machine learning, our proposed approach offers a robust solution for identifying deepfake images. By employing convolutional neural networks (CNNs), trained on a diverse dataset encompassing both authentic and manipulated images, our method effectively discerns subtle discrepancies indicative of deepfakes. Unlike traditional methods reliant on manual feature extraction, our CNN-based approach autonomously learns discriminative features, resulting in superior accuracy and efficiency. Moreover, its versatility enables application across a broad spectrum of deepfake variations. With heightened precision and adaptability, our approach represents a promising advancement in the ongoing fight against deceptive visual media. By safeguarding against the pernicious impact of deepfake images, it contributes to fostering a more trustworthy digital landscape.',
      image: '/images/deepfake.png',
      technologies: ['Python','TensorFlow','Pandas', 'Jyupiter Notebook', 'CNN','Github', 'Deep Learning', 'Image Processing', 'Deepfake Detection', 'Image Classification'],
      github: 'https://github.com/Vivekjoshi11/Deepfake_Image_Detection',
      // live: 'https://example.com',
      date: '2024'
    },
    
    {
      title: 'Property Mass Adoption',
      description: 'Property Mass Adoption Blockchain This application is designed to automate the bulk upload and minting of address data onto the Solana blockchain. It significantly enhances efficiency by eliminating the need to manually input each address individually. Key Features: Bulk CSV Upload: Users can upload a .csv file containing multiple addresses, emails, or user details in one go. Automated Geocoding: Once the data is uploaded, the app automatically fetches the geographic coordinates for each address using a geocoding API. Database Integration: The address data along with coordinates is stored in a structured database for further use and reference. Solana Blockchain Minting: After successful validation and storage, the app batches and mints all addresses onto the Solana chain, ensuring secure and verifiable storage on the blockchain. Benefits: Saves time by automating the manual task of submitting addresses. Reduces errors by processing addresses programmatically. Ensures data immutability and traceability by leveraging Solana’s decentralized infrastructure.',
      image: '/images/Propertymassadoption.png',
      technologies: ['Next.js', 'Node.js', 'Solana', 'Tailwind CSS', 'Vercel', 'Solana Wallet Adapter', 'Phantom Wallet', 'Github'],
      github: 'https://github.com/Vivekjoshi11/propertymassadoption',
      date: '2024'
    },
    {
      title: 'Github Explorer',
      description: 'This is github explorer app you see anyone\'s github profile and it\'s public repositories also you can sort them by stars and also you can search reposatories of that profile and also can go to that github profile.',
      image: '/images/GithubEx.png',
      technologies: ['TypeScript', 'React.js', 'Github', 'Tailwind CSS', 'Prisma', 'Vercel'],
      github: 'https://github.com/Vivekjoshi11/mini-github-explorer',
      live: 'https://mini-github-explorer-489n.vercel.app/',
      date: '2025'
    },
    {
      title: 'Multiple Wallet Connect',
      description: 'here is the project userflow - loged In using Web3auth SFA 1️ Integrated Web3Auth’s built-in wallet for Solana and EVM from which can sign transactions using Web3auth. 2️ Added support for native wallets like Phantom & MetaMask using an adapter, since Phantom doesn’t expose the private key directly. 3️ Ensured users can connect their existing wallets without generating new ones—their wallet address in the app remains the same as seen in MetaMask/Phantom. 4️ Enabled native wallet integration to perform transactions—users can sign and send transactions that are mined. Can Web3Auth support native wallets like MetaMask & Phantom? → Yes, I’ve enabled it using an adapter. Does Web3Auth generate a new wallet when connecting a native wallet? → No, the app retrieves and displays the user’s actual wallet address from MM/Phantom, ensuring native wallets are used directly. Can Web3Auth be used to sign transactions from native wallets? → Yes, transactions can be executed and mined using the connected wallet.',
      image: '/images/MWC.png',
      technologies: ['Next.js','TypeScript','Github', 'Metamask', 'Phantom', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/Vivekjoshi11/multi_wallet_connect',
      // live: 'https://example.com',
      date: '2024'
    },
    
    {
      title: 'Drone Signal Verification System',
      description: '🛡️ Drone Signal Verification System — Ensuring Safe and Secure Drone Communications This application is built to verify the authenticity of signals received from delivery drones in real time. Its core goal is to protect the drone infrastructure from malicious interference and ensure that only legitimate signals are processed. Key Objectives: ✅ Signal Authentication: The system determines whether an incoming signal is genuinely from a registered drone or potentially spoofed by a malicious source. ✅ Threat Prevention: By filtering out unauthorized or suspicious signals, it prevents external attacks that could disrupt or hijack delivery drones, ensuring the security of both the system and the goods being transported. ✅ Peaq Network Integration: Leveraging Peaqs decentralized identity verification, the app uses blockchain-based techniques to validate the origin of the drone signal, ensuring it comes from a trusted source. ✅ Airborne Status Monitoring: The app also monitors and verifies whether the drone is currently airborne. This adds an extra layer of context and control, preventing operations or signal processing when the drone is grounded or inactive. Why It Matters: With the rise of autonomous drone deliveries, signal spoofing and unauthorized interference pose real threats to logistics systems. This app mitigates those risks by verifying trust and integrity at every signal exchange, powered by secure Web3 technology. I have developed it for both Webapp and Mobile app( Next.js for web app and Flutter for mobile app',
      image: '/images/drone.png',
      technologies: ['Next.js','TypeScript','Github', 'Metamask', 'Peaq', 'Phantom', 'Tailwind CSS', 'Vercel', 'Web3auth'],
      github: 'https://github.com/Vivekjoshi11/multi_wallet_connect',
      // live: 'https://example.com',
      date: '2024'
    },
    
     {
      title: 'Follow the Path Game',
      description: 'In this game the character follow the box and touch the box which indicates path and at the end that will reach to the next level. Unity game Engine, C#',
      image: '/images/FTP.png',
      technologies: ['Unity 3D','C#','Github', 'Unity Engine'],
      github: 'https://github.com/Vivekjoshi11/Follow-the-path-gane',
      // live: 'https://example.com',
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing my latest work and innovative solutions
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {project.date}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {shouldTruncate && !isExpanded 
                      ? truncateText(project.description, 150)
                      : project.description
                    }
                    {shouldTruncate && (
                      <button
                        onClick={() => toggleDescription(actualIndex)}
                        className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 ml-1 text-sm font-medium"
                      >
                        {isExpanded ? 'Show less' : 'Show more'}
                      </button>
                    )}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full"
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
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
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
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
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
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow flex items-center gap-2 mx-auto"
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
