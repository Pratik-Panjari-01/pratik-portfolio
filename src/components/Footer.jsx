import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/portfolio';
export default function Footer() {
  return <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span className="brand-mark">P.</span><span>Pratik<span className="brand-muted">.dev</span></span></a><p>Designed & built with care by {profile.name}.</p><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="#home" aria-label="Back to top"><ArrowUp size={17} /></a></div></div></footer>;
}
