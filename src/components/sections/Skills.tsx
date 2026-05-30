"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Brain,
  Wrench,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Monitor,
  Server,
  Database,
  Brain,
  Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="02. Skills"
          title="Technical Arsenal"
          subtitle="Technologies I work with to build fast, scalable, and intelligent products."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const Icon = iconMap[group.icon];
            return (
              <motion.div
                key={group.category}
                className="glass-card rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${group.color}10, transparent 70%)`,
                  }}
                />

                {/* Icon + category */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${group.color}15`,
                      border: `1px solid ${group.color}30`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: group.color }} />
                  </div>
                  <h3 className="font-semibold text-white text-sm">{group.category}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, j) => (
                    <motion.span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-200"
                      style={{
                        backgroundColor: `${group.color}08`,
                        borderColor: `${group.color}20`,
                        color: group.color,
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + j * 0.03 }}
                      whileHover={{
                        backgroundColor: `${group.color}15`,
                        borderColor: `${group.color}40`,
                        scale: 1.05,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Also learning row */}
        <motion.div
          className="mt-8 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xs font-mono text-slate-500 mb-3 tracking-wider">
            → ALSO EXPLORING
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Docker", "Redis", "GraphQL", "LangChain", "Rust", "WebGL"].map((item) => (
              <span
                key={item}
                className="text-xs font-mono px-3 py-1.5 rounded-lg border border-white/[0.08] text-slate-500 hover:text-slate-300 hover:border-white/20 transition-all duration-200 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
