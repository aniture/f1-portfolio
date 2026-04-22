'use client';

import React from 'react';
import { motion, useScroll } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { InfiniteSlider } from '@/app/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/app/components/ui/progressive-blur';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronRight } from 'lucide-react';

const menuItems = [
  { name: 'About',    href: 'about' },
  { name: 'Projects', href: 'projects' },
  { name: 'Skills',   href: 'skills' },
  { name: 'Contact',  href: 'contact' },
];

const techStack = [
  { name: 'Django',       src: 'https://cdn.simpleicons.org/django/ffffff' },
  { name: 'React',        src: 'https://cdn.simpleicons.org/react/ffffff' },
  { name: 'Next.js',      src: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
  { name: 'PostgreSQL',   src: 'https://cdn.simpleicons.org/postgresql/ffffff' },
  { name: 'Redis',        src: 'https://cdn.simpleicons.org/redis/ffffff' },
  { name: 'Docker',       src: 'https://cdn.simpleicons.org/docker/ffffff' },
  { name: 'Python',       src: 'https://cdn.simpleicons.org/python/ffffff' },
  { name: 'TypeScript',   src: 'https://cdn.simpleicons.org/typescript/ffffff' },
  { name: 'AWS',          src: 'https://cdn.simpleicons.org/amazonaws/ffffff' },
  { name: 'Stripe',       src: 'https://cdn.simpleicons.org/stripe/ffffff' },
  { name: 'GraphQL',      src: 'https://cdn.simpleicons.org/graphql/ffffff' },
  { name: 'Tailwind CSS', src: 'https://cdn.simpleicons.org/tailwindcss/ffffff' },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function HeroHeader() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => setScrolled(v > 0.04));
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        data-state={menuOpen ? 'active' : undefined}
        className="group fixed z-50 w-full pt-2"
      >
        <div className={cn(
          'mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12',
          scrolled && 'bg-black/85 backdrop-blur-2xl shadow-lg shadow-red-950/10'
        )}>
          <motion.div
            className={cn(
              'relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6',
              scrolled && 'lg:py-4'
            )}
          >
            {/* Logo + mobile toggle */}
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="home"
                className="text-white"
              >
                <span className="font-semibold text-sm text-white tracking-wide">Aditya Niture</span>
              </button>

              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden text-white"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              {/* Desktop nav links */}
              <ul className="hidden lg:flex gap-8 text-sm">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-150 cursor-pointer"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA buttons + mobile dropdown */}
            <div className="bg-black/95 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-gray-800 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <button
                        onClick={() => { scrollToSection(item.href); setMenuOpen(false); }}
                        className="text-gray-400 hover:text-white transition-colors duration-150 block cursor-pointer"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild variant="outline" size="sm"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
                >
                  <a href="https://github.com/aniture" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
                <Button
                  asChild size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white border-0"
                >
                  <a href="/AdityaNiture_ForwardDeployedSoftwareEngineer_Resume.pdf" download>Resume</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  );
}

export default function VideoHero() {
  return (
    <>
      <HeroHeader />

      <div className="overflow-x-hidden bg-black">
        {/* ── Full-screen video hero ── */}
        <section className="relative min-h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/track-bg.jpg"
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/racing-bg.mp4"
          />

          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black" />

          {/* Hero text */}
          <div className="relative z-20 min-h-screen flex items-center">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 pt-28 pb-20">
              <motion.p
                className="text-red-500 font-mono tracking-[0.3em] text-[11px] uppercase mb-4"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Forward Deployed Software Engineer
              </motion.p>

              <motion.h1
                className="max-w-2xl text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Aditya{' '}
                <span className="text-red-500">Niture</span>
              </motion.h1>

              <motion.p
                className="mt-6 max-w-xl text-lg text-gray-300 leading-relaxed text-balance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.8 }}
              >
                Architecting and shipping production-grade applications at race-pace,
                across healthcare, fintech, aviation, and real estate.
              </motion.p>

              <motion.div
                className="mt-10 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="h-12 rounded-full pl-5 pr-3 text-base bg-red-600 hover:bg-red-700 text-white border-0 shadow-lg shadow-red-900/40 cursor-pointer"
                >
                  <span className="text-nowrap">View My Work</span>
                  <ChevronRight className="ml-1" />
                </Button>
                <Button
                  asChild size="lg" variant="ghost"
                  className="h-12 rounded-full px-5 text-base text-gray-300 hover:bg-white/10 hover:text-white border border-gray-600"
                >
                  <a href="/AdityaNiture_ForwardDeployedSoftwareEngineer_Resume.pdf" download>
                    <span className="text-nowrap">Download Resume</span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Tech stack slider ── */}
        <section className="bg-black pb-2 border-t border-gray-900">
          <div className="group relative m-auto max-w-7xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:border-gray-800 md:pr-6">
                <p className="text-end text-sm text-gray-500">Technologies in my stack</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider duration={40} durationOnHover={80} gap={80}>
                  {techStack.map((tech) => (
                    <div key={tech.name} className="flex items-center">
                      <img
                        className="h-6 w-auto opacity-50 hover:opacity-90 transition-opacity duration-200"
                        src={tech.src}
                        alt={`${tech.name} logo`}
                        height="24"
                        width="auto"
                      />
                    </div>
                  ))}
                </InfiniteSlider>
                <ProgressiveBlur className="pointer-events-none absolute left-0 top-0 h-full w-20" direction="left"  blurIntensity={1} />
                <ProgressiveBlur className="pointer-events-none absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
