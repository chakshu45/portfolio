"use client";

import { Briefcase, Calendar, MapPin, CheckCircle, Code2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Solitaire Infosys",
      duration: "6-Month Industry Internship",
      location: "Mohali, Punjab, India",
      type: "Internship",
      description:
        "Contributed to client-facing web development initiatives, working closely with senior software engineers to translate designs into scalable frontend architectures.",
      bullets: [
        "Developed and maintained responsive web pages and reusable UI components, improving cross-browser compatibility and page-load performance.",
        "Translated Figma design mockups into functional, user-friendly web interfaces following UI/UX best practices.",
        "Implemented front-end features in collaboration with senior developers, participating in daily standups and regular code reviews that reduced bug turnaround time.",
        "Delivered production-ready work in an Agile team setting utilizing Git-based version control and collaborative pull-request workflows.",
      ],
      skills: ["React.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Figma to Code", "Git / GitHub", "Agile / Scrum"],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 dark:text-teal-400 mb-2">
            Career Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-teal-500 border-4 border-white dark:border-slate-950 flex items-center justify-center shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-teal-500/40 hover:shadow-lg transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-teal-500/10 text-teal-600 dark:text-teal-400 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-teal-600 dark:text-teal-400">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs sm:text-sm text-slate-500 dark:text-slate-400 space-y-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-teal-500" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-teal-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Impact Bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 mr-2 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5" /> Technologies:
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
