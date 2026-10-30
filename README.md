# Pratik Panjari — Developer Portfolio

A responsive single-page developer portfolio built with React, Vite, Motion for React, Three.js, React Three Fiber, Drei and Lucide React.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code or a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (usually http://localhost:5173).

Create a production build with `npm run build`; preview it with `npm run preview`.

## Personalize before publishing

Edit `src/data/portfolio.js`:

- Replace `your.email@example.com` with your real email address.
- Replace GitHub and LinkedIn placeholder URLs.
- Add your actual education dates and correct degree/program wording.
- Add verified awards, certificates, hackathons and credential URLs.
- Update project repository URLs and add live demo URLs where available.
- Review the skills list and remove anything you do not want to claim.

Add your resume as `public/resume.pdf`. The hero's View resume link points there.

## Deploy

Run `npm run build` and deploy the generated `dist` folder to Vercel, Netlify or another static hosting provider. For Vercel, import the Git repository and keep the default Vite settings (`npm run build`, output directory `dist`).

## Project structure

```text
src/
  components/  Reusable navbar, footer, section heading and 3D scene
  data/        Editable portfolio content
  sections/    Hero, About, Skills, Projects, Education, Achievements, Contact
  App.jsx      Single-page composition and scroll progress
  index.css    Responsive styling and theme
  main.jsx     React entry point
public/        Static assets and resume.pdf
```
