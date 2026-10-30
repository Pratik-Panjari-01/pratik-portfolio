import React from 'react';
import { motion } from 'motion/react';

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div className="section-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}
