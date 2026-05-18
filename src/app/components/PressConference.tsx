'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';

const VIDEO_ID = 'Yj4e8yZWQTE';
const VIDEO_TITLE = 'From Theoretical Learning to Real-World Client Work';
const SECTION_LABEL = 'Press Conference';
const SECTION_HEADING_LEAD = 'Interview with';
const SECTION_HEADING_ACCENT = 'the Benmore CEO';
const SECTION_BLURB =
  'On-camera conversation about my first month as a Forward Deployed Engineer at Benmore Technologies.';
const CAPTION =
  '"From Theoretical Learning to Real-World Client Work" — Benmore Technologies';

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const [posterSrc, setPosterSrc] = useState(
    `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`
  );

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
        title={VIDEO_TITLE}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="Play interview video"
      className="group absolute inset-0 w-full h-full cursor-pointer"
    >
      <img
        src={posterSrc}
        alt={VIDEO_TITLE}
        onError={() =>
          setPosterSrc(`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`)
        }
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-200" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-600 group-hover:bg-red-500 group-hover:scale-110 shadow-2xl shadow-red-950/50 transition-all duration-200">
          <Play className="w-8 h-8 text-white fill-white ml-1" />
        </div>
      </div>
    </button>
  );
}

export default function PressConference() {
  const { ref: headRef, inView: headInView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const { ref: playerRef, inView: playerInView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  return (
    <section className="py-20 px-6 md:px-20 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 18 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-red-600 font-mono text-[10px] tracking-[0.35em] uppercase mb-3">
            {SECTION_LABEL}
          </p>
          <h2 className="text-4xl font-bold text-white mb-3">
            {SECTION_HEADING_LEAD}{' '}
            <span className="text-red-600">{SECTION_HEADING_ACCENT}</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            {SECTION_BLURB}
          </p>
          <div className="mx-auto mt-5 w-20 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        </motion.div>

        {/* Player */}
        <motion.div
          ref={playerRef}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={playerInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.15 }}
          className="relative aspect-video w-full rounded-xl overflow-hidden border border-gray-800 hover:border-red-900/50 hover:shadow-2xl hover:shadow-red-950/30 transition-all duration-300"
        >
          <VideoPlayer />
        </motion.div>

        {/* Caption */}
        <p className="mt-5 text-center text-xs text-gray-500 italic">
          {CAPTION}
        </p>
      </div>
    </section>
  );
}
