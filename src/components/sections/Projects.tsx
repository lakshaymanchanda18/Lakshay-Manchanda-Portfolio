"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

type Category = "all" | "fullstack" | "mobile" | "gamedev";

const FILTERS: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Mobile", value: "mobile" },
  { label: "Game Dev", value: "gamedev" },
];

export function Projects() {
  const [active, setActive] = useState<Category>("all");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/[0.025] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="04. Projects"
          title="Things I've Built"
          subtitle="Production deployments, hackathon winners, and side experiments — all TypeScript, all shipped."
        />

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                active === f.value
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-glow-cyan"
                  : "text-slate-400 border border-white/[0.08] hover:text-white hover:border-white/20"
              )}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={cn(
                  "glass-card rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300",
                  project.featured && "lg:col-span-2 lg:grid lg:grid-cols-2"
                )}
                onClick={() => setExpanded(expanded === project.id ? null : project.id)}
              >
                {/* Visual header */}
                <div
                  className={cn(
                    "relative h-48 overflow-hidden",
                    project.featured && "lg:h-full"
                  )}
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}15, ${project.accentColor}05)`,
                  }}
                >
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  {/* Project number */}
                  <div className="absolute top-4 left-4 font-mono text-xs text-slate-600">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {/* Featured badge */}
                  {project.featured && (
                    <div
                      className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono"
                      style={{
                        backgroundColor: `${project.accentColor}20`,
                        border: `1px solid ${project.accentColor}30`,
                        color: project.accentColor,
                      }}
                    >
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  )}
                  {/* Abstract shape */}
                  <div
                    className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-30"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-7xl font-black opacity-[0.04] select-none pointer-events-none"
                    style={{ color: project.accentColor }}
                  >
                    {project.title.split(" ")[0]}
                  </div>
                  {/* Category pill */}
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="font-mono text-xs px-2.5 py-1 rounded-md"
                      style={{
                        backgroundColor: `${project.accentColor}15`,
                        border: `1px solid ${project.accentColor}25`,
                        color: project.accentColor,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display font-bold text-white text-xl leading-tight group-hover:text-cyan-50 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all duration-200"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="Live demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {expanded === project.id ? project.longDescription : project.description}
                  </p>

                  {/* Read more */}
                  <button
                    className="flex items-center gap-1 text-xs text-slate-500 hover:text-cyan-400 transition-colors mb-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpanded(expanded === project.id ? null : project.id);
                    }}
                  >
                    <ChevronRight
                      className={cn(
                        "w-3.5 h-3.5 transition-transform",
                        expanded === project.id && "rotate-90"
                      )}
                    />
                    {expanded === project.id ? "Show less" : "Read more"}
                  </button>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/lakshaymanchanda18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/20 px-5 py-2.5 rounded-full transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            View all projects on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
