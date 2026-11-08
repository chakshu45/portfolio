"use client";

import { useState } from "react";
import { ExternalLink, Github, FolderGit2, Star, Check } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "learnwithsky",
      title: "LearnWithSky – Full-Stack E-Learning Platform",
      category: "fullstack",
      description:
        "A scalable learning platform where students discover, enroll in, and complete courses. Features dynamic video playback with curriculum navigation, student progress dashboard, role-based instructor console, and automated database seed scripts.",
      highlights: [
        "JWT-secured authentication with role-based admin & instructor permissions",
        "Video player with interactive course curriculum and playback tracking",
        "RESTful API architecture built on Express.js with optimized MongoDB indexing",
        "Modular React frontend built with Vite for optimal bundling and fast load times",
      ],
      tech: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com/chakshu45/E-learning",
      demoUrl: "https://github.com/chakshu45/E-learning",
      featured: true,
      badge: "Flagship Full-Stack",
    },
    {
      id: "skykart",
      title: "SkyKart – Mobile & Electronics E-Commerce Web Application",
      category: "ecommerce",
      description:
        "A responsive mobile-first e-commerce web platform engineered with Next.js and Tailwind CSS. Provides smartphone and accessories catalog browsing, cart and checkout flows, and user authentication with password recovery.",
      highlights: [
        "Server-rendered catalog pages using Next.js for high SEO and performance",
        "Mobile-first responsive interface styled with Tailwind CSS utility framework",
        "Interactive customer workflows including cart management and checkout UI",
        "Authentication views including login, account registration, and password reset",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "JavaScript", "REST APIs"],
      githubUrl: "https://github.com/chakshu45/SkyKart-web-application",
      demoUrl: "https://github.com/chakshu45/SkyKart-web-application",
      featured: true,
      badge: "Featured Next.js App",
    },
    {
      id: "portfolio",
      title: "Full-Stack Developer Portfolio & API Service",
      category: "fullstack",
      description:
        "Modern developer portfolio website with an integrated full-stack serverless contact API, dark/light theme switching, OpenGraph SEO tags, and responsive design across all viewports.",
      highlights: [
        "Full-stack Next.js App Router architecture with custom /api/contact endpoint",
        "Dark / Light theme state management with zero-flash client persistence",
        "Custom SVG branding, accessible markup, and smooth navigation animations",
        "Direct PDF resume delivery and interactive technical showcase filters",
      ],
      tech: ["Next.js", "React", "Tailwind CSS", "Node.js API", "SEO"],
      githubUrl: "https://github.com/chakshu45",
      demoUrl: "#",
      featured: false,
      badge: "Full-Stack Web",
    },
    {
      id: "mern-auth",
      title: "Secure RESTful Authentication & RBAC Engine",
      category: "backend",
      description:
        "Modular backend authentication and role-based access control engine built with Express and MongoDB. Manages user sessions with JWTs, token expiration, password encryption, and middleware role guards.",
      highlights: [
        "Stateless JWT token signing, verification, and bearer authorization headers",
        "Bcrypt salted hashing algorithms for secure credential storage",
        "Configurable role hierarchy (Student, Instructor, Superadmin) middleware",
        "Comprehensive input sanitization and standardized JSON error handling",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "REST APIs"],
      githubUrl: "https://github.com/chakshu45/E-learning",
      demoUrl: "https://github.com/chakshu45/E-learning",
      featured: false,
      badge: "Backend Engine",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 dark:text-teal-400 mb-2">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-3">
            Real software systems and web applications built from scratch and hosted on my GitHub.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "fullstack", label: "Full Stack" },
            { id: "ecommerce", label: "E-Commerce" },
            { id: "backend", label: "Backend & APIs" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === tab.id
                  ? "bg-teal-600 text-white shadow-md shadow-teal-600/25"
                  : "bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-teal-500/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 sm:p-7 shadow-sm hover:border-teal-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header row with badges and links */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400">
                      <FolderGit2 className="w-5 h-5" />
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {project.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="p-2 rounded-lg text-slate-500 hover:text-teal-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live link`}
                        className="p-2 rounded-lg text-slate-500 hover:text-teal-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Impact Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills & CTA */}
              <div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-teal-700 dark:text-teal-300 border border-slate-200 dark:border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    <span>Inspect Code on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Callout */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/chakshu45"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-teal-500 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all hover:scale-105 shadow-sm"
          >
            <Github className="w-4 h-4 text-teal-500" />
            <span>Explore all repositories on GitHub (@chakshu45)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
