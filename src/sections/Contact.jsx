import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Github, Linkedin, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profile } from '../data/portfolio';

export default function Contact() {
  return <section className="section contact-section" id="contact"><div className="container">
    <SectionHeading eyebrow="GET IN TOUCH" title="Have a project in mind?" description="I'm open to discussing development opportunities, collaborations and interesting ideas." />
    <motion.div className="contact-panel" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div><span className="contact-small">LET'S CONNECT</span><h3>Let's make<br /><span>something meaningful.</span></h3><a className="button button-primary" href={`mailto:${profile.email}?subject=Let's%20connect`}>Send me an email <ArrowUpRight size={17} /></a></div>
      <div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={18} /><span>{profile.email}</span><ArrowUpRight size={15} /></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /><span>GitHub</span><ArrowUpRight size={15} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /><span>LinkedIn</span><ArrowUpRight size={15} /></a><div className="contact-location"><MapPin size={18} /><span>{profile.location}</span></div></div>
    </motion.div>
  </div></section>;
}
