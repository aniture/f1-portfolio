'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard, { type ProjectCardProps } from './ProjectCard';


const allProjects: ProjectCardProps[] = [
  // ── Benmore Production Projects ──────────────────────────────────────────
  {
    title: 'BizSalt',
    description:
      'White-label business formation platform automating LLC, S-Corp, and corporation filings across all 50 U.S. states via CorpNet API. Features Stripe payment processing, Celery background jobs, automated document management, and 89% test coverage across 881 passing tests.',
    tags: ['Django', 'PostgreSQL', 'Stripe', 'Celery', 'Redis', 'REST API', 'Heroku', 'Pytest'],
    link: 'https://portal.bizsult.co/',
  },
  {
    title: 'Gladys: Skincare Recommendation Engine',
    description:
      'Guardrail-driven skincare platform with a 7-step questionnaire engine generating personalized AM/PM routines using 10 deterministic guardrails and 6 recommendation pathways. Privacy-first design with Phase 2 roadmap for selfie-based skin analysis via open-source SDKs.',
    tags: ['Django', 'React', 'Vite', 'PostgreSQL', 'Framer Motion', 'Mailjet', 'Tailwind'],
    link: 'https://github.com/Benmore-Studio/Gladys',
  },
  {
    title: 'Trade Vacations',
    description:
      'Two-sided marketplace where skilled tradespeople exchange labor for vacation rental stays. Property owners post maintenance work; tradespeople apply, complete jobs, then enjoy the stay. Features worker verification, geographic search, and Stripe subscription billing.',
    tags: ['Django', 'Next.js', 'PostgreSQL', 'Celery', 'Redis', 'Stripe', 'Cloudinary'],
    link: 'https://github.com/Benmore-Studio/TradeVacations',
  },
  {
    title: 'AeroServe',
    description:
      'SMS-first airport food delivery platform enabling travelers to order food to their gate, no app required. Features prepaid Aerobucks credits, Twilio SMS ordering, Stripe Payment Links, runner logistics, and real-time order monitoring. Piloting at Atlanta Hartsfield-Jackson.',
    tags: ['Django', 'Next.js', 'Twilio', 'Stripe', 'PostgreSQL', 'DigitalOcean', 'Cloudinary'],
  },
  {
    title: 'Sentinel Lift™',
    description:
      'Vendor-agnostic AI platform predicting ESP failures in oil wells up to 60 days in advance, preventing failures costing $100K–$300K each. Aggregates data from any ESP/SCADA system, applies proprietary analytics formulas, and delivers role-based dashboards with risk indicators.',
    tags: ['Python', 'React', 'PostgreSQL', 'AWS', 'REST API', 'ML', 'Real-time Data', 'RBAC'],
  },

  // ── Side Projects ─────────────────────────────────────────────────────────
  {
    title: 'AI-Generation Studio UI',
    description:
      'Full-stack AI generation platform integrating Stable Diffusion APIs to create images and 3D models. Features real-time prompt handling, error recovery, reusable UI components, and a secure Express + PostgreSQL backend.',
    tags: ['React', 'Node.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'AI', 'Stable Diffusion'],
    link: 'https://github.com/aniture/ai-generation-studio-ui',
  },
  {
    title: 'AI Financial News Summarizer',
    description:
      'React + FastAPI app that summarizes financial news, detects market sentiment, and extracts stock tickers using AI. Surfaces live headlines via NewsAPI with a real-time dashboard.',
    tags: ['React', 'FastAPI', 'Python', 'NLP', 'NewsAPI', 'Sentiment Analysis'],
    link: 'https://github.com/aniture/ai-financial-news-summarizer',
  },
  {
    title: '3D Geometry Manipulation Simulation',
    description:
      'Interactive simulation for visualizing and manipulating 3D geometric structures. Users apply transformations, rotations, and scaling in real time via a Three.js + React interface.',
    tags: ['React', 'Three.js', 'JavaScript', 'WebGL', '3D Visualization'],
    link: 'https://github.com/aniture/3d-geometry-manipulation-simulation',
  },
  {
    title: 'Hunt for Artifacts',
    description:
      'Progressive web app for interactive treasure hunts where users scan QR codes to unlock artifact details. Supports offline caching, local progress tracking, and an admin panel for generating QR codes.',
    tags: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'PWA', 'QR Code'],
    link: 'https://github.com/aniture/Hunt-For-Artifacts',
  },
  {
    title: 'Air Quality Prediction',
    description:
      'Predicted PM2.5 levels using LSTM, ARIMA, and Random Forest models on real-world sensor data, with comparative analysis of model accuracy across different forecasting horizons.',
    tags: ['Python', 'ML', 'LSTM', 'ARIMA', 'Random Forest', 'Pandas', 'Scikit-Learn'],
    link: 'https://github.com/aniture/Air-Quality-Prediction',
  },
  {
    title: 'Online Shoppers Intention',
    description:
      'ML model using XGBoost and SMOTE to predict online purchase behavior from clickstream data. Applied K-Means and DBSCAN for customer segmentation.',
    tags: ['Python', 'XGBoost', 'SMOTE', 'K-Means', 'DBSCAN', 'Scikit-Learn'],
    link: 'https://github.com/aniture/Analysis-on-Online-Shoppers-Purchasing-Intention',
  },
  {
    title: 'Live News App',
    description:
      'Flutter app fetching live news from APIs with category filters, bookmarks, and clean Material Design UI built with Dart.',
    tags: ['Flutter', 'Dart', 'REST API', 'Mobile'],
    link: 'https://github.com/aniture/Live-News-Fetching-Application',
  },
  {
    title: 'Blood & Organ Donation App',
    description:
      'Android application for blood and organ donation management built in Kotlin with a SQLite backend for donor registry and request tracking.',
    tags: ['Kotlin', 'Android Studio', 'SQLite', 'Mobile'],
    link: 'https://github.com/aniture/Blood-And-OrganDonation-Application',
  },
  {
    title: 'Battleship Android Game',
    description:
      'Multiplayer Battleship game with custom game logic, ship placement, and UI animations built in Flutter with turn-based state management.',
    tags: ['Flutter', 'Dart', 'Game Development', 'Multiplayer'],
    link: 'https://github.com/aniture/Battleship-Android-Game',
  },
  {
    title: 'Desktop Scheduler App',
    description:
      'Windows Forms app using .NET and Entity Framework for task scheduling with full CRUD operations and SQL Server persistence.',
    tags: ['.NET', 'C#', 'Entity Framework', 'Windows Forms', 'SQL Server'],
    link: 'https://github.com/aniture/desktop-scheduler-app',
  },
  {
    title: 'Vending Machine System',
    description:
      'Extended Finite State Machine model for a vending machine handling dynamic beverage options and payment flows, implemented with the Strategy Pattern in Java.',
    tags: ['Java', 'OOP', 'EFSM', 'Strategy Pattern'],
    link: 'https://github.com/aniture/MDA-EFSM-Model-for-Vending-Machine',
  },
  {
    title: 'Gas Pump System',
    description:
      'EFSM model for a gas pump system handling fuel selection, payment, and dispensing flows using OOP principles and Strategy Pattern in Java.',
    tags: ['Java', 'OOP', 'EFSM', 'Strategy Pattern'],
    link: 'https://github.com/aniture/MDA-EFSM-model-for-the-Gas-Pump',
  },
  {
    title: 'FancyQuoteApp',
    description:
      'Fun quote-generating web app with animations and UI effects built with ASP.NET and C#.',
    tags: ['ASP.NET', 'C#', 'Animations', 'Web App'],
    link: 'https://github.com/aniture/FancyQuoteApp',
  },
  {
    title: 'Flashcard Android Game',
    description:
      'Educational flashcard game in Flutter for interactive learning through quizzes and spaced repetition.',
    tags: ['Flutter', 'Dart', 'Education', 'Mobile'],
    link: 'https://github.com/aniture/Flashcard-Android-Game',
  },
  {
    title: 'Yatzee Android Game',
    description:
      'Digital version of the classic Yatzee dice game in Flutter with turn-based logic, score tracking, and animated dice rolls.',
    tags: ['Flutter', 'Dart', 'Game Development', 'Mobile'],
    link: 'https://github.com/aniture/Yatzee-Android-Game',
  },
];

const DEFAULT_VISIBLE = 6;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? allProjects : allProjects.slice(0, DEFAULT_VISIBLE);

  return (
    <div className="py-20 px-6 md:px-20 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-3">Project Race Grid</h2>
        <p className="text-gray-400 text-center text-sm mb-12">
          Production applications and projects shipped across multiple verticals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence initial={false}>
            {visible.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: showAll && i >= DEFAULT_VISIBLE ? (i - DEFAULT_VISIBLE) * 0.06 : 0 }}
                className="h-full"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="group flex items-center gap-2 border border-gray-700 hover:border-red-600 text-gray-400 hover:text-red-400 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
          >
            {showAll
              ? 'Show Less'
              : <>Show More <span className="text-gray-600 group-hover:text-red-600 transition-colors">({allProjects.length - DEFAULT_VISIBLE} more)</span></>
            }
          </button>
        </div>
      </div>
    </div>
  );
}
