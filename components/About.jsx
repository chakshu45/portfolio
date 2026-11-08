"use client";

import { Award, Briefcase, GraduationCap, Layers, CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Briefcase className="w-5 h-5 text-teal-500" />,
      title: "6 Months Industry Experience",
      description: "Frontend & web internship at Solitaire Infosys collaborating with senior developers on production code.",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-500" />,
      title: "B.Tech CSE & Engineering Diploma",
      description: "Solid dual academic foundation in computer systems, data structures, and software engineering.",
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-500" />,
      title: "Full-Stack MERN Architecture",
      description: "Hands-on experience architecting full-stack systems from MongoDB schemas to modular React frontends.",
    },
    {
      icon: <Award className="w-5 h-5 text-teal-400" />,
      title: "UI/UX & Figma Translation",
      description: "Skilled in turning Figma UI/UX designs into pixel-perfect, responsive web interfaces.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 dark:text-teal-400 mb-2">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Natural First-Person Bio */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am a final-year Bachelor of Technology student in Computer Science and Engineering at Rayat Bahra University, Mohali, having stepped into software engineering through a Diploma in Computer Engineering from Government Polytechnic College, Kangra.
            </p>
            <p>
              With 6 months of industry internship experience at Solitaire Infosys, I specialize in building scalable web applications across the MERN stack—translating Figma mockups into modular, responsive interfaces while engineering secure RESTful backends with Node.js, Express, and MongoDB.
            </p>
            <p>
              My passion lies in bridging clean design with robust system architecture, whether that means crafting interactive video platforms like LearnWithSky or engineering fluid e-commerce experiences like SkyKart.
            </p>
            <p>
              I thrive in collaborative, Agile team environments where I can leverage Git workflows, participate in rigorous code reviews, and build software that delivers measurable value to real users.
            </p>

            {/* Quick bullets */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Lateral Entry B.Tech (Class of 2027)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Clean, Reusable Component Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>REST APIs & JWT Authentication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Agile / Scrum & Git Collaboration</span>
              </div>
            </div>
          </div>

          {/* Highlights Bento Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-teal-500/40 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
