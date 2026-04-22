'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, CalendarDays, BookOpen } from 'lucide-react';

const degrees = [
  {
    degree: 'Master of Science',
    field: 'Computer Science',
    school: 'Illinois Institute of Technology',
    location: 'Chicago, IL, USA',
    period: 'May 2025',
    flag: '🇺🇸',
    coursework: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Preparation & Analysis',
      'Advanced Database Organization',
      'Design & Analysis of Algorithms',
      'Big Data Technology',
    ],
  },
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science',
    school: 'M.S. Bidve College of Engineering',
    location: 'Latur, MH, India',
    period: 'May 2022',
    flag: '🇮🇳',
    coursework: [
      'Operating Systems',
      'Computer Networks',
      'Object-Oriented Programming',
      'Computer Architecture',
      'Data Structures & Algorithms',
      'Compiler Design',
    ],
  },
];

export default function Education() {
  const { ref: headRef, inView: headInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 18 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-red-600 font-mono text-[10px] tracking-[0.35em] uppercase mb-3">Academic Background</p>
          <h2 className="text-4xl font-bold text-white mb-3">
            Race <span className="text-red-600">School</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            The engineering foundation behind the engineering execution.
          </p>
          <div className="mx-auto mt-5 w-20 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        </motion.div>

        {/* Degree cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {degrees.map((d, i) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
            return (
              <motion.div
                key={d.school}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden
                           hover:border-red-900/50 hover:shadow-xl hover:shadow-red-950/20 transition-all duration-300"
              >
                {/* Top accent */}
                <div className="h-0.5 bg-gradient-to-r from-red-600 via-red-400/60 to-transparent" />

                <div className="p-6 md:p-7">
                  {/* Icon + degree header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-600/10 border border-red-900/30 flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-base leading-snug">{d.school}</h3>
                      <p className="text-red-500 text-[11px] font-mono tracking-[0.15em] uppercase mt-0.5">
                        {d.degree}
                      </p>
                      <p className="text-gray-300 text-sm font-medium mt-0.5">{d.field}</p>
                    </div>
                    <span className="text-xl">{d.flag}</span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 text-xs text-gray-600 mb-5 pb-5 border-b border-gray-800">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-gray-700" />
                      {d.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="w-3 h-3 text-gray-700" />
                      Graduated {d.period}
                    </span>
                  </div>

                  {/* Coursework */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-3">
                      <BookOpen className="w-3 h-3 text-gray-600" />
                      <span className="text-[10px] text-gray-600 uppercase tracking-widest">Relevant Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {d.coursework.map((c) => (
                        <span
                          key={c}
                          className="text-[11px] text-gray-400 bg-gray-800/70 border border-gray-700/60 px-2.5 py-1 rounded-md"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
