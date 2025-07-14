import React from 'react';
import { motion } from 'framer-motion';
import { Asterisk, Frown } from 'lucide-react';
export const LandingPage: React.FC = () => {
  return <div className="min-h-screen bg-pink-50 relative overflow-hidden" data-magicpath-id="0" data-magicpath-path="LandingPage.tsx">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6" data-magicpath-id="1" data-magicpath-path="LandingPage.tsx">
        <nav className="flex items-center justify-between max-w-7xl mx-auto" style={{
        background: "#2f332a00"
      }} data-magicpath-id="2" data-magicpath-path="LandingPage.tsx">
          {/* Logo */}
          <motion.div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} style={{
          background: "#faf463"
        }} data-magicpath-id="3" data-magicpath-path="LandingPage.tsx">
            <Asterisk className="w-6 h-6 text-pink-50" style={{
            background: "#1f1f1f"
          }} data-magicpath-id="4" data-magicpath-path="LandingPage.tsx" />
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-3" data-magicpath-id="5" data-magicpath-path="LandingPage.tsx">
            {['About', 'Services', 'Blog', 'FAQ'].map(item => <motion.button key={item} className="px-6 py-3 bg-purple-900 text-pink-50 rounded-full font-medium hover:bg-purple-800 transition-colors" whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} style={{
            display: "none"
          }} data-magicpath-id="6" data-magicpath-path="LandingPage.tsx">
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
        }} data-magicpath-id="7" data-magicpath-path="LandingPage.tsx">Join Waitlist</motion.button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex items-center justify-center min-h-screen px-6" data-magicpath-id="8" data-magicpath-path="LandingPage.tsx">
        <div className="text-center max-w-4xl mx-auto" data-magicpath-id="9" data-magicpath-path="LandingPage.tsx">
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
          fontFamily: "Crimson Text",
          fontSize: "130px",
          color: "#1f1f1f",
          fontWeight: "400",
          fontStyle: "normal"
        }} data-magicpath-id="10" data-magicpath-path="LandingPage.tsx">Read between the lines</motion.h1>

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
          scale: 0.98
        }} style={{
          background: "#f9f363",
          color: "#1f1f1f",
          fontFamily: "Space Grotesk"
        }} data-magicpath-id="11" data-magicpath-path="LandingPage.tsx">
            <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mr-4" data-magicpath-id="12" data-magicpath-path="LandingPage.tsx">
              <Frown className="w-6 h-6 text-purple-900" data-magicpath-id="13" data-magicpath-path="LandingPage.tsx" />
            </div>Join Waitlist</motion.button>
        </div>
      </main>

      {/* Made in Framer Badge */}
      <div className="fixed bottom-6 right-6 z-50" data-magicpath-id="14" data-magicpath-path="LandingPage.tsx">
        <motion.div className="bg-white rounded-full px-4 py-2 shadow-md border border-gray-200" initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5,
        delay: 1
      }} data-magicpath-id="15" data-magicpath-path="LandingPage.tsx">
          <span className="text-sm font-medium text-gray-700 flex items-center" data-magicpath-id="16" data-magicpath-path="LandingPage.tsx">
            <span className="mr-2" data-magicpath-id="17" data-magicpath-path="LandingPage.tsx">🖼️</span>
            Made in Framer
          </span>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu (hidden by default, can be toggled) */}
      <div className="md:hidden fixed top-20 left-6 right-6 z-40" data-magicpath-id="18" data-magicpath-path="LandingPage.tsx">
        <div className="bg-white rounded-2xl shadow-lg p-4 space-y-2" data-magicpath-id="19" data-magicpath-path="LandingPage.tsx">
          {['About', 'Services', 'Blog', 'FAQ'].map(item => <button key={item} className="w-full px-4 py-3 text-purple-900 font-medium rounded-xl hover:bg-pink-50 transition-colors text-left" data-magicpath-id="20" data-magicpath-path="LandingPage.tsx">
              {item}
            </button>)}
        </div>
      </div>
    </div>;
};