"use client";

import { useState } from "react";
import {
  Code,
  Globe,
  Database,
  Wrench,
  Cpu,
  Check
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      id: "all",
      name: "All Skills",
      icon: <Cpu className="w-4 h-4" />,
    },
    {
      id: "languages",
      name: "Languages",
      icon: <Code className="w-4 h-4" />,
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      id: "backend",
      name: "Backend & DB",
      icon: <Database className="w-4 h-4" />,
    },
    {
      id: "tools",
      name: "Tools & Design",
      icon: <Wrench className="w-4 h-4" />,
    },
  ];

  const skillsData = [
    // Languages
    { name: "JavaScript (ES6+)", category: "languages", proficiency: "Advanced", type: "Core Language" },
    { name: "Python", category: "languages", proficiency: "Intermediate", type: "Scripting & DSA" },
    { name: "SQL", category: "languages", proficiency: "Intermediate", type: "Relational Queries" },
    { name: "HTML5", category: "languages", proficiency: "Advanced", type: "Semantic Markup" },
    { name: "CSS3", category: "languages", proficiency: "Advanced", type: "Responsive Styling" },

    // Frontend
    { name: "React.js", category: "frontend", proficiency: "Advanced", type: "Component Architecture" },
    { name: "Next.js", category: "frontend", proficiency: "Intermediate", type: "App Router & SSR" },
    { name: "Vite", category: "frontend", proficiency: "Advanced", type: "Build Tooling" },
    { name: "Tailwind CSS", category: "frontend", proficiency: "Advanced", type: "Utility Styling" },
    { name: "Responsive Web Design", category: "frontend", proficiency: "Advanced", type: "Mobile-First" },
    { name: "UI/UX Implementation", category: "frontend", proficiency: "Advanced", type: "Design to Code" },

    // Backend & Database
    { name: "Node.js", category: "backend", proficiency: "Advanced", type: "Runtime Environment" },
    { name: "Express.js", category: "backend", proficiency: "Advanced", type: "Backend Framework" },
    { name: "MongoDB", category: "backend", proficiency: "Advanced", type: "NoSQL Database" },
    { name: "RESTful APIs", category: "backend", proficiency: "Advanced", type: "API Architecture" },
    { name: "JWT Authentication", category: "backend", proficiency: "Advanced", type: "Token Security" },

    // Tools & Design
    { name: "Git", category: "tools", proficiency: "Advanced", type: "Version Control" },
    { name: "GitHub", category: "tools", proficiency: "Advanced", type: "Collaboration & CI/CD" },
    { name: "VS Code", category: "tools", proficiency: "Advanced", type: "Development IDE" },
    { name: "Figma", category: "tools", proficiency: "Intermediate", type: "UI/UX Prototyping" },
    { name: "Canva", category: "tools", proficiency: "Intermediate", type: "Visual Assets" },
    { name: "Jupyter Notebook", category: "tools", proficiency: "Intermediate", type: "Data Exploration" },

    // CS Fundamentals
    { name: "Data Structures & Algorithms", category: "languages", proficiency: "Core", type: "CS Fundamental" },
    { name: "Object-Oriented Programming (OOP)", category: "languages", proficiency: "Core", type: "CS Fundamental" },
    { name: "DBMS", category: "backend", proficiency: "Core", type: "CS Fundamental" },
    { name: "Operating Systems", category: "tools", proficiency: "Core", type: "CS Fundamental" },
    { name: "Computer Networks", category: "tools", proficiency: "Core", type: "CS Fundamental" },
    { name: "Agile / Scrum", category: "tools", proficiency: "Practitioner", type: "Methodology" },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 dark:text-teal-400 mb-2">
            Technical Proficiency
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Skills & Capabilities
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-3">
            Grounded in modern full-stack development and core computer science principles.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === cat.id
                  ? "bg-teal-600 text-white shadow-md shadow-teal-600/25"
                  : "bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:border-teal-500/40"
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-3.5 sm:p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-teal-500/40 transition-all hover:-translate-y-1 hover:shadow-md group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">
                    {skill.proficiency}
                  </span>
                  <Check className="w-3.5 h-3.5 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base mb-1 group-hover:text-teal-500 transition-colors">
                  {skill.name}
                </h3>
              </div>
              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-2 font-mono">
                {skill.type}
              </p>
            </div>
          ))}
        </div>

        {/* CS Fundamentals Callout */}
        <div className="mt-12 p-6 rounded-2xl border border-teal-500/20 bg-teal-500/5 dark:bg-teal-950/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-600 dark:text-teal-300">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                Strong CS Fundamentals & Engineering Rigor
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Data Structures, Algorithms, OOP, DBMS, OS, Computer Networks & Agile development practices.
              </p>
            </div>
          </div>
          <span className="shrink-0 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg border border-teal-500/30 text-teal-600 dark:text-teal-300">
            Lateral B.Tech CSE
          </span>
        </div>
      </div>
    </section>
  );
}
