'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    {
      title: 'Desktop Scheduler App',
      description: 'Windows Forms app using .NET and Entity Framework for task scheduling with CRUD operations.',
      tags: ['.NET', 'C#', 'Entity Framework', 'Windows Forms', 'SQL Server'],
      link: 'https://github.com/aniture/desktop-scheduler-app',
    },
    {
      title: 'Online Shoppers Intention',
      description: 'ML model using XGBoost & SMOTE to predict online purchase behavior.',
      tags: ['Machine Learning', 'XGBoost', 'Python', 'MLModels', 'SMOTE', 'K-Menas', 'DBScan'],
      link: 'https://github.com/aniture/Analysis-on-Online-Shoppers-Purchasing-Intention',
    },
    {
      title: 'FancyQuoteApp',
      description: 'Fun quote-generating web app with animation and UI effects, built using ASP.NET.',
      tags: ['ASP.NET', 'C#', 'Web App', 'Animations', 'UI/UX'],
      link: 'https://github.com/aniture/FancyQuoteApp',
    },
    {
      title: 'Vending Machine System',
      description: 'Modeled an EFSM system to handle dynamic bevarage options and payment flow.',
      tags: ['OOP', 'Java', 'Strategy Pattern'],
      link: 'https://github.com/aniture/MDA-EFSM-Model-for-Vending-Machine',
    },
    {
      title: 'Live News App',
      description: 'Flutter app fetching live news from APIs with category filters and bookmarks.',
      tags: ['Flutter', 'Dart', 'REST API', 'Git', 'OOP', 'Agile Methologies'],
      link: 'https://github.com/aniture/Live-News-Fetching-Application',
    },
    {
      title: 'Air Quality Prediction',
      description: 'Predicted PM2.5 using LSTM, ARIMA and Random Forest on real-world data.',
      tags: ['ML', 'LSTM', 'Pandas','MLModels'],
      link: 'https://github.com/aniture/Air-Quality-Prediction',
    },
    {
      title: 'Gas Pump System',
      description: 'Modeled an EFSM system to handle dynamic fuel options and payment flow.',
      tags: ['OOP', 'Java', 'Strategy Pattern'],
      link: 'https://github.com/aniture/MDA-EFSM-model-for-the-Gas-Pump',
    },
    {
      title: 'Blood and Organ Donation Android Application',
      description: 'Development of an Android application for blood and organ donation management, utilizing Android Studio, IntelliJ, Eclipse, and Kotlin.',
      tags: ['Android Studio', 'Kotlin', 'SQL'],
      link: 'https://github.com/aniture/Blood-And-OrganDonation-Application',
    },
    {
      title: 'Battleship Android Game',
      description: 'Multiplayer Battleship game with custom game logic and UI animations built in Flutter.',
      tags: ['Flutter', 'Dart', 'Game Development', 'Multiplayer', 'Mobile App'],
      link: 'https://github.com/aniture/Battleship-Android-Game',
    },
    
    {
      title: 'Flashcard Android Game',
      description: 'Educational flashcard game built with Flutter for interactive learning through quizzes.',
      tags: ['Flutter', 'Dart', 'Education', 'Game App', 'Mobile Learning'],
      link: 'https://github.com/aniture/Flashcard-Android-Game',
    },
    
    {
      title: 'Yatzee Android Game',
      description: 'A digital version of the classic Yatzee dice game built in Flutter with turn-based logic.',
      tags: ['Flutter', 'Dart', 'Game Development', 'Dice Game', 'Mobile App'],
      link: 'https://github.com/aniture/Yatzee-Android-Game',
    }
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
