'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Server, Cpu, Database, Cloud, GitBranch } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Category {
  name: string;
  icon: LucideIcon;
  description: string;
  primary: string[];
  secondary: string[];
}

const categories: Category[] = [
  {
    name: 'Frontend',
    icon: Monitor,
    description: 'Interfaces & Experience',
    primary: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter'],
    secondary: ['Vue.js', 'Angular', 'JavaScript', 'HTML/CSS', 'Swift', 'AJAX', 'XCode'],
  },
  {
    name: 'Backend',
    icon: Server,
    description: 'APIs & Server Systems',
    primary: ['Django', 'Node.js', 'GraphQL', 'Ruby', 'Go', 'FastAPI'],
    secondary: ['Express', 'Spring Boot', 'Flask', '.NET', 'PHP', 'Rust', 'C#', 'RESTful APIs'],
  },
  {
    name: 'Data & ML',
    icon: Cpu,
    description: 'Intelligence & Analytics',
    primary: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'LangChain', 'RAG'],
    secondary: ['Pandas', 'NumPy', 'Keras', 'NLP', 'Tableau', 'Power BI', 'R', 'Matplotlib'],
  },
  {
    name: 'Databases',
    icon: Database,
    description: 'Storage & Retrieval',
    primary: ['PostgreSQL', 'Redis', 'MongoDB', 'Supabase', 'Elasticsearch'],
    secondary: ['MySQL', 'SQLite', 'DynamoDB', 'Cassandra', 'Snowflake', 'SQL Server', 'Spark', 'Hadoop'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Infra & Deployment',
    primary: ['AWS', 'Docker', 'Kubernetes', 'GCP', 'CI/CD'],
    secondary: ['Azure', 'Terraform', 'Helm', 'Ansible', 'Airflow', 'Linux', 'Bash', 'GitHub', 'TCP/IP'],
  },
  {
    name: 'Practices',
    icon: GitBranch,
    description: 'Process & Collaboration',
    primary: ['Agile', 'Scrum', 'Jira', 'Kanban', 'TDD'],
    secondary: ['Sprint', 'XP', 'Confluence', 'Jenkins', 'Spinnaker', 'Bamboo', 'Code Review'],
  },
];

const stats = [
  { value: '75+', label: 'Technologies' },
  { value: '6',   label: 'Domains' },
  { value: '3+',  label: 'Years Active' },
];

function SkillCard({ cat, index }: { cat: Category; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const total = cat.primary.length + cat.secondary.length;
  const Icon = cat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
      className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-6 overflow-hidden
                 hover:border-red-900/50 hover:shadow-2xl hover:shadow-red-950/20 transition-all duration-300"
    >
      {/* Dot-grid background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Red top sweep on hover */}
      <span className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500 ease-out" />

      {/* Card header */}
      <div className="relative flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-600/10 border border-red-900/30 group-hover:bg-red-600/15 transition-colors duration-300">
            <Icon className="w-4 h-4 text-red-500" />
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold leading-tight">{cat.name}</h3>
            <p className="text-gray-600 text-xs mt-0.5">{cat.description}</p>
          </div>
        </div>
        <span className="text-[11px] text-gray-600 bg-gray-800 border border-gray-700/60 px-2 py-0.5 rounded-full tabular-nums">
          {total}
        </span>
      </div>

      {/* Primary skills — bright */}
      <div className="relative flex flex-wrap gap-1.5 mb-2">
        {cat.primary.map((skill) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.04 }}
            className="text-[11px] font-semibold text-white bg-gray-800 border border-gray-700 px-2.5 py-1 rounded-md"
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Secondary skills — muted */}
      <div className="relative flex flex-wrap gap-1.5">
        {cat.secondary.map((skill) => (
          <span
            key={skill}
            className="text-[11px] text-gray-500 bg-black/40 border border-gray-800 px-2.5 py-1 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
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
          className="text-center mb-12"
        >
          <p className="text-red-600 font-mono text-[10px] tracking-[0.35em] uppercase mb-3">Technical Stack</p>
          <h2 className="text-4xl font-bold text-white mb-3">
            Pit Crew <span className="text-red-600">Toolkit</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Every tool in the garage — from frontend to infrastructure.
          </p>
          <div className="mx-auto mt-5 w-20 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-10 mb-14"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-black text-red-500 tabular-nums leading-none">{s.value}</div>
              <div className="text-[10px] text-gray-600 uppercase tracking-widest mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <SkillCard key={cat.name} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
