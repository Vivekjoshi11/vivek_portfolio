/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Message to be sent to: joshivivekh1@gmail.com', formData);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setFormData({ name: '', email: '', topic: '', message: '' });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            className="bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-[0_0_30px_rgba(0,229,255,0.3)] max-w-md w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-blue-900/10"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            
            <div className="p-6 relative z-10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  <span className="text-cyan-400">MESSAGE_</span>
                  <span className="text-white">SYSTEM</span>
                </h2>
                <button
                  onClick={onClose}
                  className="text-cyan-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                    <Send size={24} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">TRANSMISSION COMPLETE</h3>
                  <p className="text-cyan-300">Message sent successfully. Awaiting response...</p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-cyan-400 mb-4">
                    Transmitting to: <strong className="text-white">joshivivekh1@gmail.com</strong>
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-cyan-300 mb-1">
                        USERNAME
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={20} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-3 py-2 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-cyan-400/50"
                          placeholder="Enter identifier"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-1">
                        EMAIL
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" size={20} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-3 py-2 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-cyan-400/50"
                          placeholder="user@domain.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="topic" className="block text-sm font-medium text-cyan-300 mb-1">
                        PROTOCOL
                      </label>
                      <select
                        id="topic"
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white"
                      >
                        <option value="">Select protocol</option>
                        <option value="project-inquiry">PROJECT_INQUIRY</option>
                        <option value="collaboration">COLLABORATION</option>
                        <option value="job-opportunity">JOB_OPPORTUNITY</option>
                        <option value="freelance-work">FREELANCE_WORK</option>
                        <option value="general">GENERAL_QUERY</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-cyan-300 mb-1">
                        PAYLOAD
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 text-cyan-400" size={20} />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full pl-10 pr-3 py-2 bg-black/50 border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white placeholder-cyan-400/50"
                          placeholder="Enter transmission data..."
                        />
                      </div>
                    </div>

                    {submitStatus === 'error' && (
                      <div className="text-red-400 text-sm bg-red-500/20 border border-red-500/30 p-2 rounded">
                        TRANSMISSION FAILED. Retrying...
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black py-2 px-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold"
                    >
                      {isSubmitting ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
