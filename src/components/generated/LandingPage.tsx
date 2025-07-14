import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Frown } from 'lucide-react';
import { WaitlistModal } from '../WaitlistModal';
// Logo Component using your custom image
const CustomLogo: React.FC = () => <img 
    src="/logo.png" 
    alt="Custom Logo" 
    className="w-full h-full object-contain"
  />;
export const LandingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <div className="min-h-screen bg-pink-50 relative overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6">
        <nav className="flex items-center justify-between max-w-7xl mx-auto" style={{
        background: "#2f332a00",
        paddingTop: "",
        marginTop: "10px"
      }}>
          {/* Logo */}
          <motion.div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} style={{
          background: "#faf463",
          color: "#1f1f1f"
        }}>
            <CustomLogo />
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-3">
            {['About', 'Services', 'Blog', 'FAQ'].map(item => <motion.button key={item} className="px-6 py-3 bg-purple-900 text-pink-50 rounded-full font-medium hover:bg-purple-800 transition-colors" whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={{
            display: "none"
          }}>
                {item}
              </motion.button>)}
          </div>

          {/* Get Support Button */}
          <motion.button className="px-6 py-3 bg-purple-900 text-pink-50 rounded-full font-medium hover:bg-purple-800 transition-colors" whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} style={{
          background: "#f9f363",
          color: "#1f1f1f",
          fontFamily: "Space Grotesk",
          textAlign: "center",
          justifyContent: "center"
        }} onClick={() => setIsModalOpen(true)}>Sign Up</motion.button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-purple-900 leading-tight mb-12" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} style={{
          color: "#1f1f1f",
          fontWeight: "400",
          fontStyle: "normal",
          marginTop: "60px",
          fontFamily: "Crimson Text",
          fontSize: "90px"
        }}>Read between the <em>lines</em>.</motion.h1>

          <motion.button className="inline-flex items-center px-12 py-6 bg-purple-900 text-pink-50 rounded-full text-2xl font-semibold hover:bg-purple-800 transition-colors shadow-lg" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut"
        }} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.92,
          transition: {
            duration: 0.1,
            ease: "easeInOut"
          }
        }} style={{
          background: "#f9f363",
          color: "#1f1f1f",
          height: "100px",
          fontWeight: "400",
          fontStyle: "normal",
          fontFamily: "Space Grotesk",
          fontSize: "27px",
          paddingTop: "40px",
          paddingBottom: "40px",
          paddingLeft: "60px",
          paddingRight: "60px",
          marginTop: "90px"
        }} onClick={() => setIsModalOpen(true)}>
            <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mr-4" style={{
            display: "none"
          }}>
              <Frown className="w-6 h-6 text-purple-900" />
            </div>Join Waitlist</motion.button>
        </div>
      </main>

      {/* Made in Framer Badge */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.div className="bg-white rounded-full px-4 py-2 shadow-md border border-gray-200" initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5,
        delay: 1
      }} style={{
        display: "none"
      }}>
          <span className="text-sm font-medium text-gray-700 flex items-center">
            <span className="mr-2">🖼️</span>
            Made in Framer
          </span>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu (hidden by default, can be toggled) */}
      <div className="md:hidden fixed top-20 left-6 right-6 z-40">
        <div className="bg-white rounded-2xl shadow-lg p-4 space-y-2" style={{
        display: "none"
      }}>
          {['About', 'Services', 'Blog', 'FAQ'].map(item => <button key={item} className="w-full px-4 py-3 text-purple-900 font-medium rounded-xl hover:bg-pink-50 transition-colors text-left" style={{
          display: "none"
        }}>
              {item}
            </button>)}
        </div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>;
};