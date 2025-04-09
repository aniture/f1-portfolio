'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function RaceLights() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 4000); // lights go out after 4s
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: start ? 0 : 1 }}
        transition={{ duration: 1 }}
        className={`fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50 transition-opacity duration-1000 ${
            start ? 'pointer-events-none hidden' : ''
        }`}
    >
      <div className="flex gap-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.5, duration: 0.4 }}
            className="w-8 h-8 md:w-12 md:h-12 bg-red-600 rounded-full shadow-lg"
          />
        ))}
      </div>
    </motion.div>
  );
}
export default RaceLights