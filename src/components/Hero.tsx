'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Download, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import ContactModal from './ContactModal';
import ConnectModal from './ConnectModal';

const Hero = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [particles, setParticles] = useState<{ left: number; top: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <>
      <section id="hero" className="min-h-screen flex items-center justify-center pt-18 pb-18 relative overflow-hidden bg-black">
        <div className="absolute inset-0 tech-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-red-900/30"></div>

        {/* Animated background particles */}
        <div className="absolute inset-0">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="arc-reactor"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holo-text">
                HI, I&apos;M VIVEK
              </span>
            </h1>
            
            <div className="text-2xl md:text-3xl mb-8 text-cyan-400">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Blockchain Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                  'Tech Innovator',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I create <span className="text-cyan-400 font-semibold">beautiful</span> and <span className="text-red-400 font-semibold">functional</span> digital experiences across web, blockchain, and graphic design. With a full-stack skillset, I develop applications that solve real-world problems, blending clean code, modern user interfaces, and secure decentralized technologies. Passionate about user experience, visual design, and continuous learning, I bring creative solutions to life—whether it&apos;s building robust web apps or designing innovative blockchain projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                className="relative px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-semibold hover:shadow-[0_0_30px_rgba(229,9,20,0.8)] transition-all group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative z-10">Get In Touch</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsConnectModalOpen(true)}
                className="relative px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_30px_rgba(0,229,255,0.8)] transition-all"
              >
                <User size={20} className="inline mr-2" />
                Connect
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="/VivekResume.pdf"
                download
                className="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-black hover:shadow-[0_0_30px_rgba(0,102,255,0.8)] transition-all"
              >
                <Download size={20} className="inline mr-2" />
                Download Resume
              </motion.a>
            </div>
            
            <div className="flex justify-center gap-6 mt-8">
              <motion.a
                whileHover={{ scale: 1.3, y: -3 }}
                href="https://github.com/Vivekjoshi11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.3, y: -3 }}
                href="https://www.linkedin.com/in/vivek-joshi-360317203"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.3, y: -3 }}
                href="mailto:joshivivekh1@gmail.com"
                className="text-red-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyan-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      
      <ConnectModal 
        isOpen={isConnectModalOpen} 
        onClose={() => setIsConnectModalOpen(false)} 
      />
    </>
  );
};

export default Hero;
