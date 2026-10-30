import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/portfolio';

export default function Education() {
  return <section className="section" id="education"><div className="container">
    <SectionHeading eyebrow="MY JOURNEY" title="Education & learning." description="The academic foundation behind my interest in software and technology." />
    <div className="timeline">{education.map((item, i) => <motion.article className="timeline-item" key={item.degree} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}><div className="timeline-marker"><GraduationCap size={19} /></div><div className="timeline-content"><span className="timeline-period">{item.period}</span><h3>{item.degree}</h3><h4>{item.institute}</h4><p>{item.detail}</p></div></motion.article>)}</div>
  </div></section>;
}
