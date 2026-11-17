'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Github, Linkedin, Copy } from 'lucide-react';
import { useState } from 'react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectModal = ({ isOpen, onClose }: ConnectModalProps) => {
  const [copied, setCopied] = useState<string | null>(null);

  const socialLinks = [
    {
      name: 'Email',
      value: 'joshivivekh1@gmail.com',
      icon: Mail,
      url: 'mailto:joshivivekh1@gmail.com',
      color: 'text-red-500'
    },
    {
      name: 'Phone',
      value: '+91-9265852327',
      icon: Phone,
      url: 'tel:+919265852327',
      color: 'text-green-500'
    },
    {
      name: 'GitHub',
      value: '@Vivekjoshi11',
      icon: Github,
      url: 'https://github.com/Vivekjoshi11',
      color: 'text-cyan-500 dark:text-cyan-400'
    },
    {
      name: 'LinkedIn',
      value: 'Vivek Joshi',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/vivek-joshi-360317203',
      color: 'text-blue-500'
    }
  ];

  const handleCopy = (text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-[0_0_30px_rgba(0,229,255,0.3)] max-w-lg w-full relative overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-blue-900/10"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            
            <div className="p-6 relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  <span className="text-cyan-400">CONNECT_</span>
                  <span className="text-white">TO_SYSTEM</span>
                </h2>
                <button
                  onClick={onClose}
                  className="text-cyan-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.name}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center justify-between p-4 border border-cyan-500/20 rounded-lg hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all group"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-5 h-5 ${link.color}`} />
                        <div>
                          <p className="font-medium text-white">{link.name}</p>
                          <p className="text-sm text-cyan-300">{link.value}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <motion.a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="p-2 text-cyan-400 hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.105 23.761c-3.977 0-7.192-3.215-7.192-7.192 0-3.977 3.215-7.192 7.192-7.192 3.977 0 7.192 3.215 7.192 7.192 0 3.977-3.215 7.192-7.192 7.192zm-7.192-15.264c-5.39 0-9.712 4.322-9.712 9.712s4.322 9.712 9.712 9.712 9.712-4.322 9.712-9.712-4.322-9.712-9.712-9.712zM20.685 10.316c0 .404-.364.732-.812.732H11.44c-.448 0-.812-.328-.812-.732v-2.05c0-.404.364-.732.812-.732h8.433c.448 0 .812.328.812.732v2.05zm-1.025 5.405H11.44c-.448 0-.812-.328-.812-.732v-2.05c0-.404.364-.732.812-.732h7.108c.448 0 .812.328.812.732v2.05c0 .405-.364.732-.812.732z"/>
                          </svg>
                        </motion.a>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => handleCopy(link.value, link.name)}
                          className="p-2 text-cyan-400 hover:text-white transition-colors"
                          title="Copy to clipboard"
                        >
                          {copied === link.name ? (
                            <span className="text-green-500 text-xs">COPIED</span>
                          ) : (
                            <Copy size={20} />
                          )}
                        </motion.button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-cyan-900/20 border border-cyan-500/20 rounded-lg">
                <h3 className="font-semibold text-white mb-2">SYSTEM STATUS</h3>
                <p className="text-sm text-cyan-300">
                  Ready to connect and build the future. All channels are open for collaboration and opportunities!
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-green-500 text-xs">ONLINE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConnectModal;
