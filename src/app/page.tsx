'use client';

import VideoHero from './components/VideoHero';
import RaceLights from './components/RaceLights';
import Stats from './components/Stats';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Philosophy from './components/Philosophy';
import Availability from './components/Availability';
import Contact from './components/Contact';
import TrackDivider from './components/TrackDivider';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <RaceLights />
      <VideoHero />
      <Stats />
      <TrackDivider />
      <div id="about"><AboutMe /></div>
      <TrackDivider />
      <div id="experience"><Experience /></div>
      <TrackDivider />
      <div id="projects"><Projects /></div>
      <TrackDivider />
      <div id="skills"><Skills /></div>
      <TrackDivider />
      <div id="education"><Education /></div>
      <TrackDivider />
      <div id="certifications"><Certifications /></div>
      <TrackDivider />
      <Philosophy />
      <TrackDivider />
      <Availability />
      <TrackDivider />
      <div id="contact"><Contact /></div>
    </div>
  );
}
