"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Rocket, Zap } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const interests = [
  {
    icon: Globe,
    title: "Full-Stack Engineering",
    description: "Building end-to-end systems — from pixel-perfect UIs to scalable backend architectures.",
    color: "#00D4FF",
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    description: "Integrating LLMs and vector search to build intelligent, context-aware applications.",
    color: "#8B5CF6",
  },
  {
    icon: Rocket,
    title: "Startups & Products",
    description: "Turning ideas into shipped products. From hackathon sprints to production deployments.",
    color: "#0066FF",
  },
  {
    icon: Zap,
    title: "Performance & DX",
    description: "Obsessed with smooth UIs, fast APIs, and developer tooling that accelerates delivery.",
    color: "#10B981",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="01. About Me"
          title="Who I Am"
          subtitle="A developer who writes production-grade code and ships products that matter."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              I&apos;m{" "}
              <span className="text-white font-semibold">Lakshay Manchanda</span>, a
              Computer Science (AI & ML) student at the University of Petroleum and
              Energy Studies, Dehradun — with a CGPA of{" "}
              <span className="text-cyan-400 font-mono font-semibold">8.46/10</span>.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My journey started with C++ algorithms and has expanded into full-stack web,
              cross-platform mobile (React Native), and AI-augmented applications. I
              believe the best software is both technically sound and genuinely useful —
              which is why I care as much about clean architecture as I do about great UX.
            </p>
            <p className="text-slate-400 leading-relaxed">
              At Frintt Studio, I shipped 20+ reusable components for a fitness app used
              on Android and iOS, while simultaneously contributing to the production web
              platform — all remotely, all in TypeScript. I thrive in fast-paced
              environments where quality and speed are both non-negotiable.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Beyond code, I led a 6-member team at the Smart India Hackathon 2025, building
              a multilingual healthcare chatbot that competed at the national level. I believe
              technology should be accessible — and I build with that mission in mind.
            </p>

            {/* Goal */}
            <motion.div
              className="mt-6 p-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 relative overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl" />
              <p className="text-sm font-mono text-cyan-400 mb-1 tracking-wide">→ Current Goal</p>
              <p className="text-white font-medium leading-relaxed">
                Securing a high-impact engineering internship or role where I can contribute
                to large-scale systems, deepen my AI/ML expertise, and grow alongside a
                world-class team.
              </p>
            </motion.div>
          </motion.div>

          {/* Interests grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {interests.map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-card p-5 rounded-2xl group cursor-default transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
              </motion.div>
            ))}

            {/* Fun fact */}
            <motion.div
              className="sm:col-span-2 p-5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(0,102,255,0.08), rgba(139,92,246,0.08))",
                border: "1px solid rgba(0,102,255,0.15)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xs font-mono text-slate-500 mb-2">→ fun_fact.json</p>
              <p className="font-mono text-sm text-slate-300 leading-relaxed">
                <span className="text-blue-400">{"{"}</span>
                <br />
                &nbsp;&nbsp;<span className="text-cyan-400">&quot;location&quot;</span>:{" "}
                <span className="text-green-400">&quot;Dehradun, India&quot;</span>,
                <br />
                &nbsp;&nbsp;<span className="text-cyan-400">&quot;role&quot;</span>:{" "}
                <span className="text-green-400">&quot;Student → Intern → Builder&quot;</span>,
                <br />
                &nbsp;&nbsp;<span className="text-cyan-400">&quot;stack&quot;</span>:{" "}
                <span className="text-green-400">&quot;TS everywhere&quot;</span>
                <br />
                <span className="text-blue-400">{"}"}</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
