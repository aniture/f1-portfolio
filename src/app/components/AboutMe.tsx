'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutMe() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-black text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-12">Meet the Driver</h2>

        <h3 className="text-2xl font-semibold mb-1">Aditya Niture</h3>
        <p className="text-red-500 text-sm font-mono tracking-widest uppercase mb-6">
          Forward Deployed Software Engineer
        </p>
        <p className="text-gray-300 leading-relaxed">
          I architect and deliver production-grade applications across healthcare, fintech, aviation,
          and real estate, simultaneously operating as developer, business analyst, and project
          manager. With expertise in Django, Next.js, PostgreSQL, and AI-augmented development,
          I compress timelines and generate measurable outcomes for clients. Currently shipping
          eight concurrent full-stack products at Benmore Technologies.
        </p>

        <ul className="mt-8 text-sm text-gray-400 space-y-3 inline-block text-left">
          <li>
            <span className="text-red-500 mr-2">🏁</span>
            <span className="text-gray-300 font-medium">Recent Lap:</span> M.S. Computer Science @ Illinois Institute of Technology
          </li>
          <li>
            <span className="text-red-500 mr-2">🛠️</span>
            <span className="text-gray-300 font-medium">Tech Garage:</span> Django, Next.js, React, PostgreSQL, Redis, Docker, GraphQL + more
          </li>
          <li>
            <span className="text-red-500 mr-2">🏎️</span>
            <span className="text-gray-300 font-medium">Current Pit Stop:</span> Benmore Technologies, Chicago
          </li>
          <li>
            <span className="text-red-500 mr-2">📍</span>
            <span className="text-gray-300 font-medium">Location:</span> Chicago, IL, Open to relocate
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:adityaniture07@gmail.com"
            className="text-sm text-red-400 hover:text-red-300 underline underline-offset-4 transition-colors"
          >
            adityaniture07@gmail.com
          </a>
          <span className="text-gray-600">·</span>
          <a
            href="https://linkedin.com/in/aditya-niture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-gray-600">·</span>
          <a
            href="https://github.com/aniture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
