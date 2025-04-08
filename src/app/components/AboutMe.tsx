'use client';

import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="bg-black text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Meet the Driver</h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Photo (add your image later) */}
          <img
            src="/myimage.jpg"
            alt="Aditya Niture"
            className="w-40 h-40 rounded-full object-cover border-4 border-red-600 shadow-md"
            />


          {/* Bio */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-2">Aditya Niture</h3>
            <p className="text-gray-300 leading-relaxed">
              I’m a passionate Full Stack Developer & Data Engineer, building digital experiences
              with speed and precision, just like a pit stop crew. With a background in
              AI/ML, full-stack apps, and real-time systems, I thrive on innovation and performance.
            </p>

            <ul className="mt-4 text-sm text-gray-400 space-y-1">
              <li>🏁 Current Lap: MS in CS @ IIT Chicago</li>
              <li>🛠️ Tech Garage: React, Python, Java, ML, Flutter</li>
              <li>🏎️ Fastest Pit Stop: Ping Cares, Swaraj Infotech</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
