export const profile = {
  name: 'Pratik Panjari',
  role: 'Full Stack Developer',
  location: 'Gujarat, India',
  email: 'pratikpanjari@gmail.com', // Replace with your real email
  intro: 'I build thoughtful digital experiences and full-stack applications that solve real problems.',
  about: "I'm a developer interested in building useful, reliable products. I enjoy working across the stack—from crafting responsive interfaces to designing APIs and working with databases. I'm continuously learning and looking for opportunities to grow with a collaborative engineering team.",
  resume: '/resume.pdf', // Add your resume to the public folder
  github: 'https://github.com/pratik-panjari-01',
  linkedin: 'https://www.linkedin.com/in/pratik-panjari/',
};

export const skills = [
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Vite'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Clerk'] },
  { category: 'Database & Tools', items: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'Postman', 'VS Code'] },
  { category: 'Programming', items: ['JavaScript', 'Java', 'Python', 'C'] },
];

export const projects = [
  {
    number: '01', title: 'Social Media Application', category: 'Full-Stack Web Application',
    description: 'A social platform with user authentication, posts, likes, comments, follow connections, stories and real-time messaging.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Clerk', 'ImageKit'],
    github: 'https://github.com/Pratik-Panjari-01/Social-Media', demo: 'https://social-media-pratikpanjari.vercel.app/', accent: 'blue',
  },
  {
    number: '02', title: 'E-commerce Website', category: 'Online Shopping Experience',
    description: 'A responsive shopping experience with product discovery, cart management, order flow and payment integration.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Stripe / Razorpay'],
    github: 'https://github.com/Pratik-Panjari-01/codealpha_tasks/tree/master/ecommerce-app', demo: 'https://e-commerce-pratikpanjari.vercel.app/', accent: 'violet',
  },
  
    {
  number: '03',
  title: 'AI-Resume-Builder',
  category: 'AI-Powered Resume Builder Web Application',
  description: 'An AI-powered resume builder that helps users create professional, ATS-friendly resumes with intelligent content suggestions, customizable templates, and PDF export functionality.',
  stack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Open-AI'],
  github: 'https://github.com/Pratik-Panjari-01/resume-builder',
  demo: 'https://resume-builder-pratikpanjari.vercel.app/',
  accent: 'violet'
}  
];

export const education = [
  { degree: 'Master of Computer Applications', institute: 'Parul University', detail: 'AI-focused postgraduate program', period: 'Update dates' },
  { degree: 'Bachelor of Computer Applications', institute: 'Indus University', detail: 'Computer applications', period: 'Update dates' },
];

export const achievements = [
  // Add verified achievements, certifications, awards or hackathons here.
  { title: 'Certifications', detail: 'Add your completed courses and certificate links.', year: 'Add year', icon: 'award' },
  { title: 'Projects built', detail: 'Developed full-stack applications while learning modern web technologies.', year: 'Ongoing', icon: 'code' },
];
