'use client';

import { motion } from 'framer-motion';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Landing Section */}
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900 flex items-center justify-center relative overflow-hidden">
        
        {/* Background Track Effect */}
        <div className="absolute inset-0 opacity-10 bg-[url('/track-bg.jpg')] bg-cover bg-center z-0" />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-center px-6"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Aditya Niture
          </motion.h1>

          <motion.p
            className="text-xl mt-4 md:mt-6 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Full Stack Developer | Speed. Precision. Code.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold">
              See My Work
            </button>
            <a
              href="/AdityaNiture_SoftwareDeveloper_Resume.pdf"
              download
              className="border border-gray-300 hover:bg-gray-800 px-6 py-2 rounded text-white font-semibold text-center"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Race Car Animation */}
        <motion.img
          src="/f1-car.png"
          alt="Formula 1 Car"
          className="absolute bottom-0 left-[-200px] w-64 md:w-96 z-0"
          animate={{ x: [0, 500, -200] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* About Me Section */}
      <AboutMe />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
