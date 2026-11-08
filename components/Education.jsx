"use client";

import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from "lucide-react";

export default function Education() {
  const educationList = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science & Engineering (Lateral Entry)",
      institution: "Rayat Bahra University (Sunstone)",
      location: "Mohali, Punjab, India",
      duration: "2024 – 2027 (Expected)",
      score: "CGPA: 6.5 / 10",
      details: [
        "Specialized in Full-Stack Web Development, Data Structures & Algorithms, and Distributed Systems.",
        "Active member in technical software engineering workshops and hackathons.",
        "Focus on Database Management Systems (DBMS), Operating Systems, and Computer Networks.",
      ],
    },
    {
      degree: "Diploma in Computer Engineering",
      specialization: "Computer Science & Technical Computing",
      institution: "Government Polytechnic College",
      location: "Kangra, Himachal Pradesh, India",
      duration: "2020 – 2023",
      score: "Percentage: 70%",
      details: [
        "Earned First Class Distinction with a strong grounding in core computer science.",
        "Hands-on laboratory training in OOP (C++, Java, Python), Web Development, and Computer Hardware.",
        "Provided the foundational engineering discipline for lateral entry into B.Tech CSE.",
      ],
    },
  ];

  const certifications = [
    {
      title: "Solitaire Infosys Industry Internship Certification",
      issuer: "Solitaire Infosys",
      type: "Professional Industry Training",
      description: "6 months practical training in responsive web development, reusable UI components, and Git Agile development.",
    },
    {
      title: "Full Stack Web Development & MERN Specialization",
      issuer: "Sunstone Eduversity / Rayat Bahra University",
      type: "Academic & Career Training",
      description: "Comprehensive hands-on training covering React, Node.js, Express, MongoDB, and RESTful API deployment.",
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 dark:text-teal-400 mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Education & Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Cards */}
        <div className="space-y-8 mb-16">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-teal-500" />
            <span>Academic Degrees</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationList.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-teal-500/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-teal-500/10 text-teal-600 dark:text-teal-400">
                      {item.score}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {item.degree}
                  </h4>
                  <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mb-2">
                    {item.specialization}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium flex items-center gap-1.5 mb-4">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                    {item.institution}, {item.location}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Industry Recognition */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-teal-500" />
            <span>Certifications & Industry Training</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-teal-500/40 transition-all flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-teal-500/10 text-teal-500 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-teal-600 dark:text-teal-400 font-bold">
                    {cert.type}
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    Issued by {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
