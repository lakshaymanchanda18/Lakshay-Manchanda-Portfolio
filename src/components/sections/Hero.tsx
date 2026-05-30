"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/lib/data";

const TITLES = [
  "Full-Stack Engineer",
  "AI/ML Developer",
  "React Native Dev",
  "Problem Solver",
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((i) => (i + 1) % TITLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Scanline effect */}
      <div className="scanline" />

      {/* Background radial glow */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-xs font-mono text-cyan-400 tracking-wide">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Lakshay
              <br />
              <span className="gradient-text text-glow-cyan">Manchanda</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              className="h-10 mb-6 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="font-mono text-xl sm:text-2xl text-slate-300">
                {displayText}
                <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-0.5 animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              CS (AI & ML) student at{" "}
              <span className="text-white font-medium">UPES Dehradun</span>{" "}
              building production-grade web, mobile, and AI-powered systems.
              From civic-tech platforms to cross-platform fitness apps — I
              engineer solutions that{" "}
              <span className="text-cyan-400 font-medium">scale</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl btn-glow text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </motion.a>
              <motion.a
                href={personalInfo.resumeUrl}
                download
                className="flex items-center gap-2 px-6 py-3 border border-white/15 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-200 text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-white/10 text-slate-300 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all duration-200 text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-white/10 text-slate-300 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all duration-200 text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              {[
                { value: "4+", label: "Projects Shipped" },
                { value: "8.46", label: "CGPA / 10" },
                { value: "500+", label: "Gov Schemes Indexed" },
                { value: "20+", label: "UI Components Built" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Avatar */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-400/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
              </motion.div>
              <motion.div
                className="absolute inset-6 rounded-full border border-blue-400/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(0,102,255,0.8)]" />
              </motion.div>

              {/* Avatar circle */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-cyan-400/20 shadow-glow-cyan">
                <Image
                  src="/profile.png"
                  alt="Lakshay Manchanda"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -right-4 top-8 glass-card px-3 py-2 rounded-xl flex items-center gap-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-mono text-white whitespace-nowrap">AI / ML</span>
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-16 glass-card px-3 py-2 rounded-xl flex items-center gap-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-white whitespace-nowrap">React Native</span>
              </motion.div>

              <motion.div
                className="absolute -right-2 bottom-8 glass-card px-3 py-2 rounded-xl"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <span className="text-xs font-mono text-cyan-400 whitespace-nowrap">Next.js 15</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-xs font-mono text-slate-600 tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
