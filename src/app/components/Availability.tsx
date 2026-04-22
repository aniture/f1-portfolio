'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';

const openTo = [
  'Forward Deployed Engineer',
  'Staff / Senior SWE',
  'Full-Stack Lead',
  'AI-Augmented Engineering',
];

const locations = ['Chicago, IL', 'Remote', 'Open to Relocate'];

export default function Availability() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-16 px-6 md:px-20 bg-black">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative rounded-3xl overflow-hidden border border-red-900/40 bg-gray-900">
          {/* Gradient backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-gray-900 to-gray-900 pointer-events-none" />
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-600/80 via-red-400/40 to-transparent" />

          <div className="relative px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

            {/* Left */}
            <div className="flex-1">
              {/* Live pulse */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-green-400 text-xs font-semibold tracking-wide uppercase">
                  Available · Open to New Opportunities
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight">
                Ready to race at your company.
              </h2>
              <p className="text-gray-400 text-sm max-w-lg leading-relaxed mb-6">
                Bringing 3+ years of production-grade full-stack engineering, AI-augmented delivery, and client-facing technical leadership to your next high-impact product.
              </p>

              {/* Role tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest mb-1 w-full">
                  <Briefcase className="w-3 h-3" /> Targeting
                </div>
                {openTo.map((r) => (
                  <span key={r} className="text-xs text-white bg-red-900/30 border border-red-900/50 px-3 py-1 rounded-full font-medium">
                    {r}
                  </span>
                ))}
              </div>

              {/* Location tags */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest mb-1 w-full">
                  <MapPin className="w-3 h-3" /> Location
                </div>
                {locations.map((l) => (
                  <span key={l} className="text-xs text-gray-400 bg-gray-800 border border-gray-700 px-3 py-1 rounded-full">
                    {l}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — CTA */}
            <div className="flex flex-col gap-3 md:items-end w-full md:w-auto flex-shrink-0">
              <a
                href="mailto:adityaniture07@gmail.com"
                className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-red-900/40 transition-all duration-200 whitespace-nowrap"
              >
                Let&apos;s Build Together
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="/AdityaNiture_ForwardDeployedSoftwareEngineer_Resume.pdf"
                download
                className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 px-6 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
