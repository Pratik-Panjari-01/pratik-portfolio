import React from 'react';
import { motion } from 'motion/react';
import { Award, Code2, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { achievements } from '../data/portfolio';

export default function Achievements() {
  return <section className="section section-soft" id="achievements"><div className="container">
    <SectionHeading eyebrow="MILESTONES" title="Achievements & certifications." description="A place to highlight milestones, learning credentials, awards and community contributions." />
    <div className="achievement-grid">{achievements.map((item, i) => { const Icon = item.icon === 'code' ? Code2 : Award; return <motion.article className="achievement-card" key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}><div className="achievement-top"><span className="achievement-icon"><Icon size={22} /></span><span>{item.year}</span></div><h3>{item.title}</h3><p>{item.detail}</p><span className="achievement-arrow"><ArrowUpRight size={18} /></span></motion.article>; })}</div>
    <p className="edit-note">Tip: Add your real certificates, award names, issuing organizations and credential links in <code>src/data/portfolio.js</code>.</p>
  </div></section>;
}
