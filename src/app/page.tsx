'use client';

import VideoHero from './components/VideoHero';
import RaceLights from './components/RaceLights';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import TrackDivider from './components/TrackDivider';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <RaceLights />
      <VideoHero />
      <div id="about"><AboutMe /></div>
      <TrackDivider />
      <div id="projects"><Projects /></div>
      <TrackDivider />
      <div id="skills"><Skills /></div>
      <TrackDivider />
      <div id="contact"><Contact /></div>
    </div>
  );
}
