import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    age: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await addDoc(collection(db, 'waitlist'), {
        ...formData,
        timestamp: serverTimestamp(),
        createdAt: new Date().toISOString()
      });
      
      setSuccess(true);
      setFormData({ name: '', email: '', country: '', age: '' });
      
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error('Error adding to waitlist:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 
    'Japan', 'Australia', 'Brazil', 'India', 'China', 'Mexico', 
    'Italy', 'Spain', 'Netherlands', 'Switzerland', 'Sweden', 
    'Norway', 'Denmark', 'Finland', 'Belgium', 'Austria', 'Other'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-pink-50 rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-pink-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
              
              {success ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "Space Grotesk" }}>
                    You're on the list!
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: "Space Grotesk" }}>
                    We'll notify you when we launch.
                  </p>
                </div>
              ) : (
                <>
                  <h2 
                    className="text-4xl font-bold mb-2 text-center"
                    style={{
                      color: "#1f1f1f",
                      fontFamily: "Space Grotesk",
                      fontWeight: "400"
                    }}
                  >
                    Join Waitlist
                  </h2>
                  
                  <p 
                    className="text-center mb-8 text-gray-600"
                    style={{
                      fontFamily: "Space Grotesk",
                      fontSize: "16px"
                    }}
                  >
                    Be the first to know when we launch
                  </p>
                </>
              )}
              
              {!success && (
                <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block mb-2 text-sm font-medium"
                    style={{
                      color: "#1f1f1f",
                      fontFamily: "Space Grotesk"
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:outline-none transition-colors"
                    style={{
                      backgroundColor: "#ffffff",
                      fontFamily: "Space Grotesk"
                    }}
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block mb-2 text-sm font-medium"
                    style={{
                      color: "#1f1f1f",
                      fontFamily: "Space Grotesk"
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:outline-none transition-colors"
                    style={{
                      backgroundColor: "#ffffff",
                      fontFamily: "Space Grotesk"
                    }}
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="age" 
                    className="block mb-2 text-sm font-medium"
                    style={{
                      color: "#1f1f1f",
                      fontFamily: "Space Grotesk"
                    }}
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    required
                    min="13"
                    max="120"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:outline-none transition-colors"
                    style={{
                      backgroundColor: "#ffffff",
                      fontFamily: "Space Grotesk"
                    }}
                    placeholder="Your age"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="country" 
                    className="block mb-2 text-sm font-medium"
                    style={{
                      color: "#1f1f1f",
                      fontFamily: "Space Grotesk"
                    }}
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-transparent focus:border-yellow-400 focus:outline-none transition-colors appearance-none"
                    style={{
                      backgroundColor: "#ffffff",
                      fontFamily: "Space Grotesk"
                    }}
                  >
                    <option value="">Select your country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                
                {error && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200">
                    <p className="text-red-600 text-sm text-center" style={{ fontFamily: "Space Grotesk" }}>
                      {error}
                    </p>
                  </div>
                )}
                
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded-2xl font-medium text-lg transition-colors flex items-center justify-center"
                  style={{
                    background: isLoading ? "#e0e0e0" : "#f9f363",
                    color: "#1f1f1f",
                    fontFamily: "Space Grotesk"
                  }}
                  whileHover={!isLoading ? { scale: 1.02 } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    'Take Control'
                  )}
                </motion.button>
              </form>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};