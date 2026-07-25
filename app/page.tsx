'use client';

import LoadingScreen from '@/components/layout/LoadingScreen';
import ScrollProgress from '@/components/layout/ScrollProgress';
import AnimatedCursor from '@/components/layout/AnimatedCursor';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Certifications from '@/components/sections/Certifications';
import GitHubSection from '@/components/sections/GitHub';
import Blog from '@/components/sections/Blog';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      {/* Global overlays */}
      <LoadingScreen />
      <ScrollProgress />
      <AnimatedCursor />

      {/* Layout */}
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <GitHubSection />
        <Blog />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
