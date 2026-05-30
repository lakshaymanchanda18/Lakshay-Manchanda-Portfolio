"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="06. Education"
          title="Academic Background"
          subtitle="Building strong foundations in computer science and AI."
        />

        <div className="max-w-3xl mx-auto space-y-5">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className={`glass-card rounded-2xl p-6 relative overflow-hidden ${
                i === 0 ? "gradient-border" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {i === 0 && (
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.04] to-blue-500/[0.03] pointer-events-none rounded-2xl" />
              )}

              <div className="flex flex-wrap items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    i === 0
                      ? "bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <GraduationCap
                    className={`w-6 h-6 ${i === 0 ? "text-cyan-400" : "text-slate-400"}`}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3
                      className={`font-display font-bold text-lg ${
                        i === 0 ? "text-white" : "text-slate-200"
                      }`}
                    >
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </div>
                  </div>

                  <p className={`text-sm mb-1 ${i === 0 ? "text-cyan-400" : "text-slate-400"}`}>
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </div>
                    <div
                      className={`flex items-center gap-1.5 text-xs font-mono font-semibold ${
                        i === 0 ? "text-cyan-400" : "text-slate-400"
                      }`}
                    >
                      <Award className="w-3.5 h-3.5" />
                      {edu.cgpa}
                    </div>
                  </div>

                  {edu.highlights.length > 0 && (
                    <ul className="mt-4 space-y-1.5">
                      {edu.highlights.map((hl, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="text-cyan-400 mt-0.5">›</span>
                          {hl}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
