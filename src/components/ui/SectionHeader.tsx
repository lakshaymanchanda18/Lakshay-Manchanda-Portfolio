"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.span
        className="inline-block font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase mb-4 px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {label}
      </motion.span>
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <motion.div
        className="mt-6 flex items-center justify-center gap-2"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400/60" />
        <div className="h-1 w-1 rounded-full bg-cyan-400" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400/60" />
      </motion.div>
    </motion.div>
  );
}
