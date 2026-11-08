# Akash Patial — Full-Stack Developer Portfolio

A responsive personal portfolio website and web service for **Akash Patial** (Full Stack MERN Developer & B.Tech CSE Student, Class of 2027).

Built with **Next.js 14 (App Router)**, **React**, **Tailwind CSS**, and **Node.js Serverless API routes**.

---

## 🚀 Features

- **Hero Section**: Headline, active availability badge, direct CV/Resume download, and "View Projects" CTA.
- **About Me**: First-person narrative highlighting B.Tech journey, 6-month industry internship at Solitaire Infosys, and engineering values.
- **Categorized Skills**: Interactive tabbed skill matrix (Languages, Frontend, Backend & Database, Tools & Design, CS Fundamentals).
- **Experience Timeline**: Career history covering the 6-month Web Development internship at Solitaire Infosys with impact-driven metrics.
- **Projects Showcase**: Verified GitHub repositories (**LearnWithSky** full-stack learning platform, **SkyKart** mobile e-commerce platform, etc.) with filter tabs and code inspection links.
- **Education & Training**: B.Tech CSE (Lateral Entry) at Rayat Bahra University, Diploma in Computer Engineering at Govt. Polytechnic Kangra, and industry certificates.
- **Full-Stack Contact Engine**: Dedicated `/api/contact` server route with in-memory spam protection, field validation, and immediate feedback.
- **Modern Theme Toggle**: Smooth dark mode (Deep Navy `#090d16` & Teal `#14b8a6`) and light mode switch with `localStorage` persistence.
- **SEO & Social Optimization**: OpenGraph tags, Twitter cards, meta descriptions, and custom SVG favicon.

---

## 🛠️ Project Structure

```
akash-patial-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js       # Full-stack backend API route for contact messages
│   ├── globals.css            # Tailwind directives, theme variables & animations
│   ├── layout.js              # HTML root, SEO metadata & theme loader
│   └── page.js                # Single-page layout assembling all sections
├── components/
│   ├── Navbar.jsx             # Sticky glass header, navigation, & theme toggle
│   ├── Hero.jsx               # Headline, quick stats, resume CTA & socials
│   ├── About.jsx              # Personal story, core competencies & highlights
│   ├── Skills.jsx             # Filterable technical skill chips & badges
│   ├── Experience.jsx         # Timeline of Solitaire Infosys internship
│   ├── Projects.jsx           # Cards for LearnWithSky, SkyKart & architecture
│   ├── Education.jsx          # B.Tech, Polytechnic diploma & certifications
│   ├── Contact.jsx            # Interactive contact form & contact details
│   └── Footer.jsx             # Social links, back-to-top & copyright
├── public/
│   ├── Akash_Patial_Resume.pdf# Real downloadable resume PDF
│   ├── favicon.svg            # Custom modern AP monogram logo
│   └── favicon.ico
├── jsconfig.json              # Path aliases (@/*)
├── next.config.js             # Next.js production settings
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
└── tailwind.config.js         # Theme colors, dark mode, typography & glow tokens
```

---

## 💻 Local Development Setup

1. **Navigate into the project directory:**
   ```bash
   cd /Users/skypatial/.gemini/antigravity/scratch/akash-patial-portfolio
   ```

2. **Install dependencies (if not already installed):**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Visit [http://localhost:3000](http://localhost:3000).

5. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

---

## 🚢 Free Deployment Guide

### Option 1: Deploy on Vercel (Recommended for Full-Stack)

Since this project has an active backend API route (`/api/contact`), Vercel is the ideal zero-configuration deployment host:

1. Push this project to a new repository on your GitHub account (`github.com/chakshu45/portfolio`):
   ```bash
   cd /Users/skypatial/.gemini/antigravity/scratch/akash-patial-portfolio
   git init
   git add .
   git commit -m "feat: initial release of Akash Patial full-stack portfolio"
   git branch -M main
   git remote add origin https://github.com/chakshu45/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New"** > **"Project"**, then select `portfolio`.
4. Leave the default settings (Next.js is auto-detected) and click **Deploy**.
5. Your portfolio is live with a free SSL domain (e.g. `akashpatial.vercel.app`) and full serverless contact form support!

---

### Option 2: Deploy on GitHub Pages (Static Export)

If you prefer to host statically under `https://chakshu45.github.io`:

1. In `next.config.js`, add `output: 'export'`:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
   };
   ```
2. Run `npm run build`. This generates an `out/` folder containing pure HTML, CSS, and client JS.
3. In `components/Contact.jsx`, change form submission to trigger a direct `mailto:` link or connect to a free endpoint like [Formspree](https://formspree.io) / [Web3Forms](https://web3forms.com).
4. Push the `out/` directory to the `gh-pages` branch on GitHub:
   ```bash
   git add out/ -f && git commit -m "deploy: static build"
   git subtree push --prefix out origin gh-pages
   ```
5. In your GitHub repository **Settings** > **Pages**, set the source branch to `gh-pages`.
