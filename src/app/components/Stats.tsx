'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '3+',    suffix: '',  label: 'Years Engineering' },
  { value: '8',     suffix: '',  label: 'Live Products' },
  { value: '50K+',  suffix: '',  label: 'Users Served' },
  { value: '12+',   suffix: '',  label: 'Client Engagements' },
  { value: '99.8',  suffix: '%', label: 'Uptime Achieved' },
  { value: '40',    suffix: '%', label: 'Faster Delivery via AI' },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-gray-950 border-b border-gray-900">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-800/30">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="bg-gray-950 px-6 py-8 flex flex-col items-center text-center gap-1.5 group hover:bg-gray-900 transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-black tabular-nums leading-none">
                <span className="text-red-500">{s.value}</span>
                {s.suffix && <span className="text-red-400 text-2xl">{s.suffix}</span>}
              </div>
              <div className="text-[10px] text-gray-600 uppercase tracking-[0.18em] leading-tight group-hover:text-gray-500 transition-colors duration-300">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
