'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Github, Linkedin, Twitter, Instagram, ExternalLink, Copy } from 'lucide-react';
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
      color: 'text-gray-700 dark:text-gray-300'
    },
    {
      name: 'LinkedIn',
      value: 'Vivek Joshi',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/vivek-joshi-360317203',
      color: 'text-blue-500'
    },
    {
      name: 'Twitter',
      value: '@VivekJoshi11',
      icon: Twitter,
      url: 'https://x.com/vivekjo48947929?t=S1hDCyCAVR_kZYb6JJqQ_w&s=08',
      color: 'text-blue-400'
    },
    {
      name: 'Instagram',
      value: '@vivek_joshi11',
      icon: Instagram,
      url: 'https://instagram.com/vivek_joshi11',
      color: 'text-pink-500'
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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Connect With Me</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
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
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-5 h-5 ${link.color}`} />
                        <div>
                          <p className="font-medium text-gray-800 dark:text-white">{link.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{link.value}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <motion.a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="p-2 text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => handleCopy(link.value, link.name)}
                          className="p-2 text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                          title="Copy to clipboard"
                        >
                          {copied === link.name ? (
                            <span className="text-green-500 text-xs">Copied!</span>
                          ) : (
                            <Copy size={20} />
                          )}
                        </motion.button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Quick Connect</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Feel free to reach out through any of these channels. I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConnectModal;
