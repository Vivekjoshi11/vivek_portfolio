'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';
import ConnectModal from './ConnectModal';
// import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  const navItems = ['About', 'Projects', 'Experience'];

  const handleScroll = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="fixed top-0 w-full bg-black/40 dark:bg-black/60 backdrop-blur-xl z-50 border-b border-cyan-500/20 dark:border-cyan-500/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-300"></div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent relative">
                VIVEK
                {/* <span className="text-xs text-cyan-400 block -mt-1">v2.0</span> */}
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  onClick={() => handleScroll(item)}
                  whileHover={{ scale: 1.1 }}
                  className="text-cyan-400 hover:text-white transition-all relative group"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                </motion.button>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsConnectModalOpen(true)}
                  className="relative px-6 py-2 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500 hover:text-black transition-all duration-300 group overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  <User size={18} className="inline mr-2 relative z-10" />
                  <span className="relative z-10">Connect</span>
                </motion.button>
              </motion.div>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsConnectModalOpen(true)}
                className="border border-cyan-500 text-cyan-400 px-2 py-1 rounded-full text-xs font-semibold"
              >
                <User size={16} />
              </motion.button>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="text-cyan-400 hover:text-white relative"
                whileHover={{ scale: 1.1 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-black/50 backdrop-blur-xl border-t border-cyan-500/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 * idx }}
                    onClick={() => handleScroll(item)}
                    className="block w-full text-left px-3 py-3 text-cyan-400 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      <ConnectModal 
        isOpen={isConnectModalOpen} 
        onClose={() => setIsConnectModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
