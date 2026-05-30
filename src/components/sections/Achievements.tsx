"use client";

import { motion } from "framer-motion";
import { Trophy, GraduationCap, Users, Mic2, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { achievements } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  GraduationCap,
  Users,
  Mic2,
  Rocket,
};

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-600/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="05. Achievements"
          title="Highlights & Recognition"
          subtitle="Hackathons, academic milestones, and community contributions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 0% 100%, ${item.color}12, transparent 60%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${item.color}15`,
                    border: `1px solid ${item.color}25`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-white text-sm mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${item.color}10`,
                        border: `1px solid ${item.color}20`,
                        color: item.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Index number */}
                <div
                  className="absolute top-4 right-4 font-mono text-4xl font-black opacity-[0.04]"
                  style={{ color: item.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
