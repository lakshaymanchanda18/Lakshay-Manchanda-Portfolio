"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="03. Experience"
          title="Work Experience"
          subtitle="Real-world engineering in fast-paced product teams."
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-blue-400/20 to-transparent hidden md:block" />

          {experience.map((job, i) => (
            <motion.div
              key={i}
              className="relative flex gap-6 md:gap-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="relative hidden md:flex flex-shrink-0 mt-1">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold font-mono border"
                  style={{
                    backgroundColor: `${job.color}15`,
                    borderColor: `${job.color}30`,
                    color: job.color,
                  }}
                >
                  {job.company[0]}
                </div>
                {/* Connector */}
                <div
                  className="absolute top-1/2 -right-2 w-2 h-px"
                  style={{ backgroundColor: job.color, opacity: 0.4 }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 glass-card rounded-2xl p-6 group hover:border-cyan-400/20 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">{job.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-cyan-400 font-medium text-sm">{job.company}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-400 text-sm">{job.project}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {job.period}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3 h-3" />
                      {job.type}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5 mb-5">
                  {job.highlights.map((hl, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                      <ChevronRight
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: job.color }}
                      />
                      {hl}
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg"
                      style={{
                        backgroundColor: `${job.color}10`,
                        border: `1px solid ${job.color}20`,
                        color: job.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Open to work CTA */}
          <motion.div
            className="relative flex gap-6 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="hidden md:flex flex-shrink-0 w-16 items-center justify-center">
              <div className="w-3 h-3 rounded-full border-2 border-dashed border-slate-600 relative">
                <div className="absolute inset-1 rounded-full bg-slate-600 animate-pulse" />
              </div>
            </div>
            <div className="flex-1 p-5 rounded-2xl border border-dashed border-white/[0.08] flex items-center justify-between gap-4">
              <div>
                <p className="text-white font-medium text-sm">Your Company?</p>
                <p className="text-slate-500 text-xs mt-0.5">
                  I&apos;m actively looking for internship and entry-level opportunities.
                </p>
              </div>
              <a
                href="mailto:lakshaymanchanda574@gmail.com"
                className="flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-white transition-colors whitespace-nowrap"
              >
                Reach out <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
