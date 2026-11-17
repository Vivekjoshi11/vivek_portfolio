'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-cyan-400">VIVEK</span>
              {/* <span className="text-gray-400 text-lg ml-2">v2.0</span> */}
            </h3>
            <p className="text-cyan-300">
              Full-stack and blockchain developer creating immersive digital experiences.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 180 }}
                href="https://github.com/Vivekjoshi11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-white transition-all"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -180 }}
                href="https://www.linkedin.com/in/vivek-joshi-360317203"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 90 }}
                href="mailto:joshivivekh1@gmail.com"
                className="text-red-400 hover:text-white transition-all"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-cyan-400">QUICK LINKS</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-cyan-300 hover:text-white transition-colors">About</a>
              <a href="#projects" className="block text-cyan-300 hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="block text-cyan-300 hover:text-white transition-colors">Experience</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-cyan-400">SYSTEM STATUS</h3>
            <div className="bg-black/50 border border-cyan-500/30 rounded p-3 font-mono text-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-400">SYSTEM ONLINE</span>
              </div>
              <div className="text-cyan-400 space-y-1">
                <p>CPU: 98% available</p>
                <p>MEMORY: 85% used</p>
                <p>NETWORK: Stable</p>
                <p>LAST UPDATE: {currentYear}</p>
              </div>
              <div className="text-cyan-500 mt-2">
                <span className="tech-cursor"></span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-cyan-500/30 mt-8 pt-8 text-center"
        >
          <p className="text-cyan-400 flex items-center justify-center">
            Made with <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mx-1 text-red-500"
            ><Heart size={16} /></motion.span> by VIVEK © {currentYear}
          </p>
          <p className="text-cyan-600 text-xs mt-2">
            Designed with Iron Man aesthetic • Built with Next.js & Tailwind
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
