'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BadgeCheck, CalendarDays, ExternalLink } from 'lucide-react';

const certs = [
  {
    title: 'AI Engineering with Anthropic',
    subtitle: 'MCP, Agent Skills, Claude Code & API',
    issuer: 'Anthropic',
    date: 'March 2026',
    icon: '🤖',
    accent: 'from-red-600 to-orange-500',
    highlight: true,
  },
  {
    title: 'AWS Solutions Architect',
    subtitle: 'Advanced Certificate',
    issuer: 'Amazon Web Services',
    date: 'May 2025',
    icon: '☁️',
    accent: 'from-orange-500 to-amber-500',
    highlight: false,
  },
  {
    title: 'IBM Data Science Professional',
    subtitle: 'Professional Certificate',
    issuer: 'IBM',
    date: 'July 2024',
    icon: '📊',
    accent: 'from-blue-600 to-blue-400',
    highlight: false,
  },
  {
    title: 'Java Full Stack Developer',
    subtitle: 'Full Stack Development',
    issuer: 'SEED Infotech, Pune',
    date: 'July 2023',
    icon: '☕',
    accent: 'from-gray-500 to-gray-400',
    highlight: false,
  },
];

export default function Certifications() {
  const { ref: headRef, inView: headInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-20 px-6 md:px-20 bg-black text-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 18 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-red-600 font-mono text-[10px] tracking-[0.35em] uppercase mb-3">Credentials</p>
          <h2 className="text-4xl font-bold text-white mb-3">
            Trophy <span className="text-red-600">Cabinet</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            Industry certifications earned across AI, cloud, and data engineering.
          </p>
          <div className="mx-auto mt-5 w-20 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        </motion.div>

        {/* Cert grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certs.map((cert, i) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
            return (
              <motion.div
                key={cert.title}
                ref={ref}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.09, ease: 'easeOut' }}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300
                  ${cert.highlight
                    ? 'bg-gray-900 border border-red-900/50 shadow-lg shadow-red-950/20 hover:shadow-xl hover:shadow-red-950/30'
                    : 'bg-gray-900 border border-gray-800 hover:border-gray-700 hover:shadow-xl hover:shadow-red-950/10'
                  }`}
              >
                {/* Gradient top bar */}
                <div className={`h-0.5 w-full bg-gradient-to-r ${cert.accent}`} />

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800 border border-gray-700 flex-shrink-0 text-2xl">
                      {cert.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-white font-semibold text-sm leading-snug">{cert.title}</h3>
                          <p className="text-gray-500 text-xs mt-0.5">{cert.subtitle}</p>
                        </div>
                        {cert.highlight && (
                          <BadgeCheck className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 mt-3">
                        <span className="text-[11px] font-medium text-gray-400 bg-gray-800 border border-gray-700 px-2.5 py-1 rounded-md">
                          {cert.issuer}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-gray-600">
                          <CalendarDays className="w-3 h-3" />
                          {cert.date}
                        </span>
                      </div>
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
