'use client';

import { motion } from 'framer-motion';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import RaceLights from './components/RaceLights';
import TrackDivider from './components/TrackDivider';

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Race Light Intro */}
      <RaceLights />

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
            {/* See My Work Button */}
            <a
              href="#projects"
              className="relative group overflow-hidden bg-red-600 px-6 py-2 rounded text-white font-semibold shadow-md hover:bg-red-700 transition duration-300"
            >
              <span className="z-10 relative">See My Work</span>
              <span className="absolute left-0 top-0 h-full w-full bg-white opacity-10 scale-0 group-hover:scale-150 group-hover:opacity-20 transition-transform duration-500 rounded-full" />
            </a>

            {/* Download Resume Button */}
            <a
              href="/AdityaNiture_SoftwareDeveloper_Resume.pdf"
              download
              className="relative group overflow-hidden border border-gray-300 px-6 py-2 rounded text-white font-semibold text-center hover:bg-gray-800 transition duration-300"
            >
              <span className="z-10 relative">Download Resume</span>
              <span className="absolute left-0 top-0 h-full w-full bg-white opacity-10 scale-0 group-hover:scale-150 group-hover:opacity-20 transition-transform duration-500 rounded-full" />
            </a>
          </motion.div>
        </motion.div>

        {/* Race Car Animation */}
        <motion.img
          src="/f1-car.png"
          alt="Formula 1 Car"
          className="absolute bottom-10 left-[-300px] w-64 md:w-96 z-10 drop-shadow-xl"
          animate={{ x: ['-300px', '110vw'] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Sections with Dividers */}
      <AboutMe />
      <TrackDivider />

      <Projects />
      <TrackDivider />

      <Skills />
      <TrackDivider />

      <Contact />
    </div>
  );
}
