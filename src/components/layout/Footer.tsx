"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";
import { personalInfo, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-white text-lg">
                Lakshay<span className="text-cyan-400">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Full-Stack Engineer & AI/ML Developer building intelligent systems at the intersection of web and AI.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </a>
              <div className="flex gap-3 mt-4">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400/40 hover:bg-blue-400/10 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-400/40 hover:bg-purple-400/10 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-mono">
            © {new Date().getFullYear()} Lakshay Manchanda. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400 fill-red-400 mx-0.5" /> using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
