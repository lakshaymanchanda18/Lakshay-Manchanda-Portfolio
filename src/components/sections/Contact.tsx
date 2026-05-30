"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personalInfo } from "@/lib/data";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission (replace with your actual endpoint)
    await new Promise((r) => setTimeout(r, 1200));

    // Open email client as fallback
    const subject = encodeURIComponent(`Portfolio Contact: ${form.name}`);
    const body = encodeURIComponent(`Hi Lakshay,\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setStatus("success");
    setTimeout(() => setStatus("idle"), 4000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#00D4FF",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "lakshaymanchanda18",
      href: personalInfo.github,
      color: "#8B5CF6",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Lakshay Manchanda",
      href: personalInfo.linkedin,
      color: "#0066FF",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dehradun, India",
      href: null,
      color: "#10B981",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="07. Contact"
          title="Let's Work Together"
          subtitle="Whether it's an internship, full-time role, or an exciting project — I'm always open to a conversation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Let&apos;s build something great.
              </h3>
              <p className="text-slate-400 leading-relaxed">
                I&apos;m actively looking for engineering internships and entry-level roles
                where I can contribute, learn fast, and build production-grade products.
                Drop me a message — I usually respond within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map((link) => (
                <motion.div
                  key={link.label}
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105"
                    style={{
                      backgroundColor: `${link.color}12`,
                      border: `1px solid ${link.color}25`,
                    }}
                  >
                    <link.icon className="w-4 h-4" style={{ color: link.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{link.label}</p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-slate-300 hover:text-white transition-colors"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-300">{link.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability */}
            <div className="p-4 rounded-xl border border-green-400/20 bg-green-400/5 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <p className="text-sm text-green-400 font-medium">
                Available for internships & full-time roles
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-500 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-500 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-500 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about the role, project, or opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all duration-200 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl btn-glow text-sm disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {status === "loading" ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Opening email client...
                </>
              ) : status === "error" ? (
                <>
                  <AlertCircle className="w-4 h-4" />
                  Try Again
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>

            <p className="text-xs text-slate-600 text-center">
              This will open your email client with a pre-filled message.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
