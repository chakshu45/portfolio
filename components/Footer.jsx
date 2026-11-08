"use client";

import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center gap-2 group font-mono font-bold text-lg mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-teal-500 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-slate-900 dark:text-slate-100">
                Akash<span className="text-teal-500">.patial</span>()
              </span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Full Stack Developer (MERN) • B.Tech CSE Class of 2027 • Mohali, India
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/chakshu45"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-teal-500 hover:border-teal-500 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/akash-patial-aa0031247/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-teal-500 hover:border-teal-500 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:chaskhupatial@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-teal-500 hover:border-teal-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-lg border border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400 hover:bg-teal-500 hover:text-white transition-all ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} Akash Patial. Designed & Developed with Next.js, Tailwind CSS & Node.js.
          </p>
          <p className="flex items-center gap-1">
            Built with dedication in Mohali, Punjab <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
