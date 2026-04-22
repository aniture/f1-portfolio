'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, CalendarDays } from 'lucide-react';

interface Metric { value: string; label: string; }
interface Exp {
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  metrics: Metric[];
  highlights: string[];
  tags: string[];
}

const experiences: Exp[] = [
  {
    role: 'Forward Deployed Software Engineer',
    company: 'Benmore Technologies',
    location: 'Chicago, IL',
    period: 'Jan 2026 — Present',
    current: true,
    metrics: [
      { value: '8', label: 'Live Products' },
      { value: '99.8%', label: 'Uptime' },
      { value: '40%', label: 'Faster Delivery' },
      { value: '12+', label: 'Clients' },
    ],
    highlights: [
      'Orchestrated 8 concurrent production Django & Next.js apps across healthcare, aviation, real estate & fintech — sustaining 99.8% uptime',
      'Integrated Redis caching across PostgreSQL backends, cutting page load by 28%, server costs by 18%, with headroom for 15× traffic spikes',
      'Pioneered Claude AI + custom Model Context Protocol servers, compressing feature delivery cycles by 40% across enterprise apps',
      'Achieved 96% test coverage via automated CI/CD pipelines, eradicating 85% of production defects through preventative quality gates',
    ],
    tags: ['Django', 'Next.js', 'PostgreSQL', 'Redis', 'Docker', 'Claude AI', 'MCP', 'CI/CD'],
  },
  {
    role: 'Software Engineer',
    company: 'Ping Cares',
    location: 'Chicago, IL',
    period: 'Jan 2025 — Jan 2026',
    current: false,
    metrics: [
      { value: '25%', label: 'Engagement Lift' },
      { value: '15%', label: 'Faster APIs' },
      { value: '20%', label: 'Prediction Boost' },
      { value: '98%+', label: 'Crash-Free' },
    ],
    highlights: [
      'Spearheaded Flutter & React Native mobile enhancements improving accessibility and boosting user engagement by 25% across iOS & Android',
      'Revamped backend services with Ruby & Node.js, cutting API response times by 15% and improving scalability under production load',
      'Designed ML pipelines on wearable sensor data, enhancing predictive insights by 20% with real-time event detection integration',
      'Maintained 98%+ crash-free reliability through CI/CD workflows, automated testing, and systematic technical debt reduction',
    ],
    tags: ['Flutter', 'React Native', 'Ruby', 'Node.js', 'Python', 'PyTorch', 'ML'],
  },
  {
    role: 'Backend / ML Engineer',
    company: 'Unilife',
    location: 'Pune, India',
    period: 'Aug 2021 — Jun 2023',
    current: false,
    metrics: [
      { value: '50K+', label: 'Users Served' },
      { value: '40%', label: 'Faster Deploys' },
      { value: '99.9%', label: 'Uptime' },
      { value: '25%', label: 'Load Reduced' },
    ],
    highlights: [
      'Built and deployed microservices with Node.js & TypeScript, improving API performance by 20% powering SaaS workflows for 50,000+ users',
      'Containerized services on GCP with automated CI/CD pipelines — cut deployment time by 40% with zero-downtime rollback safety',
      'Implemented REST & GraphQL APIs with caching layers, reducing server load by 25% across React Native client applications',
      'Reduced defect leakage by 30% through disciplined cross-team code reviews and standardized API architecture patterns',
    ],
    tags: ['Node.js', 'TypeScript', 'GraphQL', 'GCP', 'Docker', 'Kubernetes', 'React Native'],
  },
];

function MetricCard({ value, label, inView, delay }: Metric & { inView: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      className="bg-black/40 border border-gray-700/60 rounded-xl p-3 text-center"
    >
      <div className="text-xl font-black text-red-400 leading-none mb-1 tabular-nums">{value}</div>
      <div className="text-[10px] text-gray-500 uppercase tracking-widest leading-tight">{label}</div>
    </motion.div>
  );
}

function ExperienceCard({ exp, index }: { exp: Exp; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });

  return (
    <div ref={ref} className="relative flex gap-5 md:gap-8">
      {/* Timeline node */}
      <div className="relative z-10 flex-shrink-0 flex flex-col items-center" style={{ width: 16 }}>
        <div
          className={`mt-[22px] w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 ${
            exp.current
              ? 'bg-red-600 border-red-400 shadow-lg shadow-red-600/40'
              : 'bg-gray-800 border-gray-600'
          }`}
        >
          {exp.current && (
            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-50" />
          )}
        </div>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 48 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
        className="flex-1 pb-14"
      >
        <div
          className={`relative rounded-2xl overflow-hidden transition-all duration-300
            ${exp.current
              ? 'bg-gray-900 border border-red-900/40 shadow-2xl shadow-red-950/30'
              : 'bg-gray-900 border border-gray-800 hover:border-gray-700 hover:shadow-xl hover:shadow-red-950/10'
            }`}
        >
          {/* Top accent line */}
          <div
            className={`h-0.5 w-full ${
              exp.current
                ? 'bg-gradient-to-r from-red-600 via-red-400 to-transparent'
                : 'bg-gradient-to-r from-gray-700 to-transparent'
            }`}
          />

          <div className="p-6 md:p-7">
            {/* Header row */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <h3 className="text-lg md:text-xl font-bold text-white">{exp.company}</h3>
                  {exp.current && (
                    <span className="text-[9px] font-bold tracking-[0.15em] uppercase bg-red-600/15 text-red-400 border border-red-800/60 px-2.5 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-red-500 text-[11px] font-mono tracking-[0.18em] uppercase mb-2.5">
                  {exp.role}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-700" />
                    {exp.location}
                  </span>
                  <span className="text-gray-700">·</span>
                  <span className="flex items-center gap-1">
                    <CalendarDays className="w-3 h-3 text-gray-700" />
                    {exp.period}
                  </span>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
              {exp.metrics.map((m, i) => (
                <MetricCard
                  key={m.label}
                  {...m}
                  inView={inView}
                  delay={0.15 + i * 0.07}
                />
              ))}
            </div>

            {/* Highlights */}
            <ul className="space-y-2.5 mb-5">
              {exp.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                  className="flex gap-2.5 text-sm text-gray-400 leading-relaxed"
                >
                  <span className="text-red-600 flex-shrink-0 mt-[3px] text-xs">▸</span>
                  <span>{h}</span>
                </motion.li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] bg-gray-800 border border-gray-700/80 px-2.5 py-1 rounded-md text-gray-400 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const { ref: headRef, inView: headInView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section className="py-20 px-6 md:px-20 bg-black text-white">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 18 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-red-600 font-mono text-[10px] tracking-[0.35em] uppercase mb-3">Work History</p>
          <h2 className="text-4xl font-bold text-white mb-3">
            Career <span className="text-red-600">Circuit</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Three high-velocity engineering roles across startups and product companies.
          </p>
          <div className="mx-auto mt-5 w-20 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.4 }}
            style={{ left: 7, originY: 0 }}
            className="absolute top-[22px] bottom-[56px] w-px bg-gradient-to-b from-red-600 via-red-900/30 to-transparent"
          />

          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
