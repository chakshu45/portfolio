"use client";

import { ArrowRight, FileDown, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-gradient-to-tr from-cyan-500/15 via-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-teal-500 -ml-4" />
          <span>Available for Full-Time & Internship Opportunities</span>
        </div>

        {/* Name & Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
          Hi, I&apos;m{" "}
          <span className="gradient-text drop-shadow-sm">Akash Patial</span>
        </h1>

        <p className="text-lg sm:text-2xl font-medium text-slate-700 dark:text-slate-200 max-w-3xl mx-auto mb-4 leading-relaxed">
          Full Stack Developer (MERN) specializing in high-performance web applications, scalable REST APIs, and responsive user experiences.
        </p>

        {/* Short context metadata */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-9">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-teal-500" />
            B.Tech CSE, Class of 2027
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-teal-500" />
            Mohali, Punjab, India
          </span>
          <span>•</span>
          <span>6 Months Industry Web Internship</span>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-teal-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/Akash_Patial_Resume.pdf"
            download="Akash_Patial_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm"
          >
            <FileDown className="w-4 h-4 text-teal-500" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Social Link Quick Access */}
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/chakshu45"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 hover:text-teal-500 hover:border-teal-500/50 hover:scale-110 transition-all shadow-sm"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-patial-aa0031247/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 hover:text-teal-500 hover:border-teal-500/50 hover:scale-110 transition-all shadow-sm"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:chaskhupatial@gmail.com"
            aria-label="Send Email"
            className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 hover:text-teal-500 hover:border-teal-500/50 hover:scale-110 transition-all shadow-sm"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Featured Tech Stack Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/70 dark:border-slate-800/80">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-4">
            Core Technologies & Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
            {["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "JavaScript (ES6+)", "Tailwind CSS", "JWT Auth", "REST APIs"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 hover:border-teal-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
