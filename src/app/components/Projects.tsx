'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Online Shoppers Intention',
      description: 'ML model using XGBoost & SMOTE to predict online purchase behavior.',
      tags: ['Machine Learning', 'XGBoost', 'Python'],
      link: '#',
    },
    {
      title: 'Live News App',
      description: 'Flutter app fetching live news from APIs with category filters and bookmarks.',
      tags: ['Flutter', 'Dart', 'REST API'],
      link: '#',
    },
    {
      title: 'Gas Pump System',
      description: 'Modeled an EFSM system to handle dynamic fuel options and payment flow.',
      tags: ['OOP', 'Java', 'Strategy Pattern'],
      link: '#',
    },
    {
      title: 'Air Quality Prediction',
      description: 'Predicted PM2.5 using LSTM, ARIMA and Random Forest on real-world data.',
      tags: ['ML', 'LSTM', 'Pandas'],
      link: '#',
    },
  ];

  return (
    <div className="py-20 px-6 md:px-20 bg-gray-950 text-white">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-10">Project Race Grid</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
