'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Online Shoppers Intention',
      description: 'ML model using XGBoost & SMOTE to predict online purchase behavior.',
      tags: ['Machine Learning', 'XGBoost', 'Python', 'MLModels', 'SMOTE', 'K-Menas', 'DBScan'],
      link: 'https://github.com/aniture/Analysis-on-Online-Shoppers-Purchasing-Intention',
    },
    {
      title: 'Live News App',
      description: 'Flutter app fetching live news from APIs with category filters and bookmarks.',
      tags: ['Flutter', 'Dart', 'REST API', 'Git', 'OOP', 'Agile Methologies'],
      link: 'https://github.com/aniture/Live-News-Fetching-Application',
    },
    {
      title: 'Gas Pump System',
      description: 'Modeled an EFSM system to handle dynamic fuel options and payment flow.',
      tags: ['OOP', 'Java', 'Strategy Pattern'],
      link: 'https://github.com/aniture/MDA-EFSM-model-for-the-Gas-Pump',
    },
    {
      title: 'Air Quality Prediction',
      description: 'Predicted PM2.5 using LSTM, ARIMA and Random Forest on real-world data.',
      tags: ['ML', 'LSTM', 'Pandas','MLModels'],
      link: 'https://github.com/aniture/Air-Quality-Prediction',
    },
    {
      title: 'Blood and Organ Donation Android Application',
      description: 'Development of an Android application for blood and organ donation management, utilizing Android Studio, IntelliJ, Eclipse, and Kotlin.',
      tags: ['Android Studio', 'Kotlin', 'SQL'],
      link: 'https://github.com/aniture/Blood-And-OrganDonation-Application',
    },
  ];

  return (
    <div id="projects" className="py-20 px-6 md:px-20 bg-gray-950 text-white">
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
