'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, BrainCircuit, Layers, Users } from 'lucide-react';

const principles = [
  {
    icon: Layers,
    title: 'Full-Stack Ownership',
    tag: 'Zero Hand-offs',
    body: 'From PostgreSQL schema to React animations — I own the entire stack. No silos, no bottlenecks. One engineer who speaks frontend, backend, and infra fluently means decisions that stick and timelines that compress.',
  },
  {
    icon: Zap,
    title: 'Ship in Laps, Not Sprints',
    tag: 'Race Pace Delivery',
    body: "Production-grade quality doesn't require a bloated release cycle. Eight concurrent live products proves it. Each lap is a deployable, tested, monitored increment — never a prototype masquerading as a product.",
  },
  {
    icon: BrainCircuit,
    title: 'AI as the Pit Crew',
    tag: 'Anthropic MCP',
    body: "Claude Code and custom Model Context Protocol servers handle scaffolding, documentation, and context retrieval while I focus on architecture and business logic. The result: 40% faster cycles with no quality trade-off.",
  },
  {
    icon: Users,
    title: 'Engineer × PM × BA',
    tag: 'Triple Role',
    body: 'The best software comes from engineers who understand the business. I run stakeholder consultations, synthesize requirements, write architecture specs, and then build — compressing a three-person workflow into one velocity.',
  },
];

export default function Philosophy() {
  const { ref: headRef, inView: headInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 18 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-red-600 font-mono text-[10px] tracking-[0.35em] uppercase mb-3">Engineering Principles</p>
          <h2 className="text-4xl font-bold text-white mb-3">
            Race <span className="text-red-600">Philosophy</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            The principles behind every line of code and every client engagement.
          </p>
          <div className="mx-auto mt-5 w-20 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {principles.map((p, i) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                ref={ref}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-7 overflow-hidden
                           hover:border-red-900/50 hover:shadow-xl hover:shadow-red-950/20 transition-all duration-300"
              >
                {/* Dot-grid texture */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.025]"
                  style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                />
                {/* Hover top sweep */}
                <span className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500 ease-out" />

                {/* Icon row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-600/10 border border-red-900/30 group-hover:bg-red-600/15 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-gray-600 bg-gray-800 border border-gray-700 px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base mb-2.5 group-hover:text-red-100 transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
