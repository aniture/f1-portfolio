'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group relative h-full bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col gap-4 overflow-hidden
                 hover:border-red-900 hover:shadow-xl hover:shadow-red-950/30 transition-all duration-300"
    >
      {/* Top accent line on hover */}
      <span className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500 ease-out" />

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors duration-200 leading-snug">
          {title}
        </h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 mt-0.5 text-gray-600 hover:text-red-400 transition-colors duration-200"
            aria-label={`Open ${title}`}
          >
            <FaExternalLinkAlt size={12} />
          </a>
        )}
      </div>

      {/* Description — grows to fill card height */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>

      {/* Tags — pinned to bottom */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-gray-800 border border-gray-700 px-2.5 py-1 rounded-md text-gray-300 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
