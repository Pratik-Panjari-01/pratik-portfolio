import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolio';

export default function Projects() {
  return <section className="section section-soft" id="projects"><div className="container">
    <SectionHeading eyebrow="SELECTED WORK" title="Projects I've been building." description="A selection of practical applications that demonstrate my approach to frontend and full-stack development." />
    <div className="projects-list">{projects.map((project, i) => <motion.article className={`project-card project-${project.accent}`} key={project.number} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: i * 0.12 }}>
      <div className="project-art"><div className="browser-frame"><div className="browser-bar"><i /><i /><i /><span>project-preview.app</span></div><div className="mock-ui"><div className="mock-sidebar"><b /><b /><b /><b /></div><div className="mock-content"><div className="mock-title" /><div className="mock-row"><i /><i /><i /></div><div className="mock-panel"><span /><span /><span /></div><div className="mock-bottom"><i /><i /></div></div></div></div><span className="project-number">{project.number}</span></div>
      <div className="project-info"><span className="eyebrow">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer"><Github size={17} /> Source code <ArrowUpRight size={14} /></a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo</a>}</div></div>
    </motion.article>)}</div>
  </div></section>;
}
