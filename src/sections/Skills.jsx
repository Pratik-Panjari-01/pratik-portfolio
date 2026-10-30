import React from 'react';
import { motion } from 'motion/react';
import { Braces, Database, Layers3, Terminal } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { skills } from '../data/portfolio';

const icons = [Layers3, Braces, Database, Terminal];
export default function Skills() {
  return <section className="section" id="skills"><div className="container">
    <SectionHeading eyebrow="MY TOOLKIT" title="Technologies I work with." description="Tools and technologies I've used while learning and building projects. This list will grow as I do." />
    <div className="skills-grid">{skills.map((group, i) => { const Icon = icons[i] || Braces; return <motion.article className="skill-card" key={group.category} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><div className="skill-card-head"><span className="skill-icon"><Icon size={21} /></span><h3>{group.category}</h3></div><div className="skill-tags">{group.items.map(item => <span className="skill-tag" key={item}>{item}</span>)}</div></motion.article>; })}</div>
  </div></section>;
}
