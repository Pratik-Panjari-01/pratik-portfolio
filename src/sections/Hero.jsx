import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';
import Scene3D from '../components/Scene3D';
import { profile } from '../data/portfolio';

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.div className="availability" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}><span className="status-dot" /> Open to opportunities</motion.div>
          <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>HELLO, I'M</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>Pratik<br /><span>Panjari.</span></motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>Full Stack Developer <Sparkles size={19} /></motion.h2>
          <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>{profile.intro}</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-secondary" href={profile.resume} target="_blank" rel="noreferrer">View resume</a>
          </motion.div>
          <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <span><MapPin size={15} /> {profile.location}</span>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.86 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.25 }}>
          <div className="visual-label label-top">CREATIVE DEVELOPMENT <span>✳</span></div>
          <Scene3D />
          <div className="floating-card card-code"><span className="code-dot" /> <code>const developer = true;</code></div>
          <div className="floating-card card-stack"><span>MY TOOLKIT</span><strong>React · Node · MongoDB</strong></div>
          <div className="visual-label label-bottom">DESIGN. BUILD. ITERATE.</div>
        </motion.div>
      </div>
      <a href="#about" className="scroll-cue"><ArrowDown size={16} /> Scroll to explore</a>
    </section>
  );
}
