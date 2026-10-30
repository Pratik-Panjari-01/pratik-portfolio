import React from 'react';
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { profile } from '../data/portfolio';

const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Education', '#education'], ['Contact', '#contact']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">P.</span><span>Pratik<span className="brand-muted">.dev</span></span></a>
        <div className="desktop-links">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={16} /></a>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && <motion.div className="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
