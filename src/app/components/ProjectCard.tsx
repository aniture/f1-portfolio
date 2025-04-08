'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-red-700 transition-shadow duration-300 cursor-pointer flex flex-col gap-4"
    >
      <h3 className="text-2xl font-bold text-red-500">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, i) => (
          <span key={i} className="text-xs bg-red-800 px-2 py-1 rounded text-white font-medium">
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}