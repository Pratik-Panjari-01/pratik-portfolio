import React from 'react';
import { motion } from 'motion/react';
import { Code2, Lightbulb, Rocket } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/portfolio';

const highlights = [
  { icon: Code2, title: 'Full-stack mindset', text: 'Comfortable learning and building across frontend and backend.' },
  { icon: Lightbulb, title: 'Curious by nature', text: 'I enjoy understanding how things work and finding better approaches.' },
  { icon: Rocket, title: 'Build to learn', text: 'I turn ideas into practical projects and improve through iteration.' },
];

export default function About() {
  return <section className="section section-soft" id="about"><div className="container">
    <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Turning ideas into digital experiences." description="A quick introduction to who I am and how I approach development." />
    <div className="about-grid">
      <motion.div className="about-copy" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <span className="large-quote">“</span><p>{profile.about}</p>
        <a className="text-link" href="#contact">Let's build something <span>↗</span></a>
      </motion.div>
      <div className="highlight-list">{highlights.map(({ icon: Icon, title, text }, i) => <motion.div className="highlight-card" key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}><div className="highlight-icon"><Icon size={21} /></div><div><h3>{title}</h3><p>{text}</p></div></motion.div>)}</div>
    </div>
  </div></section>;
}
