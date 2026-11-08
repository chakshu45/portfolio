"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to deliver message.");
      }

      setStatus("success");
      setSuccessMessage(data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err.message || "Failed to send message. Please email directly at chaskhupatial@gmail.com."
      );
    }
  };

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-teal-500" />,
      label: "Email",
      value: "chaskhupatial@gmail.com",
      href: "mailto:chaskhupatial@gmail.com",
      subtext: "Best way to reach me directly",
    },
    {
      icon: <Phone className="w-5 h-5 text-teal-500" />,
      label: "Phone",
      value: "+91 8627848199",
      href: "tel:+918627848199",
      subtext: "Available Mon - Sat",
    },
    {
      icon: <MapPin className="w-5 h-5 text-teal-500" />,
      label: "Location",
      value: "Mohali, Punjab, India",
      href: "https://maps.google.com/?q=Mohali,Punjab,India",
      subtext: "Open to remote & on-site roles",
    },
  ];

  return (
    <section id="contact" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-bold text-teal-600 dark:text-teal-400 mb-2">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto mt-3">
            Interested in hiring me for a full-time role, internship, or discussing a project? Drop a message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactDetails.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex items-start gap-4 hover:border-teal-500/50 hover:shadow-md transition-all group block"
                >
                  <div className="p-3 rounded-lg bg-teal-500/10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500">
                      {item.label}
                    </span>
                    <p className="text-slate-900 dark:text-white font-semibold text-base group-hover:text-teal-500 transition-colors">
                      {item.value}
                    </p>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {item.subtext}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Buttons */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                Connect on Social Networks
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/chakshu45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-500 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-teal-500 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/akash-patial-aa0031247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-500 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-teal-500 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Full-Stack Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Connected directly to the Next.js API backend with instant dispatch.
              </p>

              {/* Status alerts */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold">Thank you for your message!</p>
                    <p>{successMessage}</p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold">Unable to send message</p>
                    <p>{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-teal-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-teal-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Full Stack Developer Opportunity / Project Inquiry"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                    Message <span className="text-teal-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Akash, I came across your portfolio and would love to discuss..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 disabled:bg-slate-400 text-white font-semibold text-sm shadow-lg shadow-teal-600/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Akash</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
