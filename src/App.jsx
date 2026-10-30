import React from 'react';
import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  useEffect(() => { document.documentElement.style.scrollBehavior = 'smooth'; }, []);
  return <>
    <motion.div className="scroll-progress" style={{ scaleX }} />
    <Navbar />
    <main><Hero /><About /><Skills /><Projects /><Education /><Achievements /><Contact /></main>
    <Footer />
  </>;
}
