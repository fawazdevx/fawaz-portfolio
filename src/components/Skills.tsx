"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" index="03" title="skills_matrix">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const accent = cat.accent === "cyan" ? "text-cyan" : "text-purple-bright";
          const dot = cat.accent === "cyan" ? "bg-cyan" : "bg-purple";
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass glass-hover p-5"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${dot}`} />
                <h3 className={`font-mono text-sm font-semibold uppercase tracking-wider ${accent}`}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-gray-300 transition-colors hover:border-purple/40 hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
