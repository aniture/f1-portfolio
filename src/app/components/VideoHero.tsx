'use client';

import React from 'react';
import { motion, useScroll } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { InfiniteSlider } from '@/app/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/app/components/ui/progressive-blur';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronRight } from 'lucide-react';

const menuItems = [
  { name: 'About',      href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects',   href: 'projects' },
  { name: 'Skills',     href: 'skills' },
  { name: 'Contact',    href: 'contact' },
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
  { name: 'AWS',          src: "data:image/svg+xml,%3Csvg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='white'%3E%3Cpath d='M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z'/%3E%3C/svg%3E" },
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
