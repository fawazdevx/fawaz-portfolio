"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import Section from "./Section";
import { projects, type Project } from "@/data/portfolio";

const ALL = "all";
const tags = [ALL, "Web3", "AI", "Backend", "Mobile", "Security", "Game Dev"] as const;

const tagColor: Record<string, string> = {
  Web3: "text-purple-bright border-purple/40 bg-purple/10",
  AI: "text-cyan border-cyan/40 bg-cyan/10",
  Backend: "text-emerald-300 border-emerald-400/30 bg-emerald-400/10",
  Mobile: "text-sky-300 border-sky-400/30 bg-sky-400/10",
  Security: "text-rose-300 border-rose-400/30 bg-rose-400/10",
  "Game Dev": "text-amber-300 border-amber-400/30 bg-amber-400/10",
};

function Card({ p }: { p: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="glass glass-hover group relative flex flex-col p-6"
    >
      {p.featured && (
        <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-widest text-cyan/70">
          ★ featured
        </span>
      )}
      <div className="mb-1 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${tagColor[t]}`}
          >
            {t}
          </span>
        ))}
      </div>

      <h3 className="mt-2 font-mono text-xl font-bold text-white transition-colors group-hover:text-purple-bright">
        {p.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{p.blurb}</p>

      <div className="mt-4 rounded-lg border border-cyan/15 bg-cyan/[0.04] px-3 py-2">
        <span className="font-mono text-xs text-cyan">▸ {p.impact}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-gray-400"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-3 border-t border-white/5 pt-4">
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted transition-colors hover:text-white"
          >
            ⌥ source →
          </a>
        )}
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-purple-bright transition-colors hover:text-cyan"
          >
            ◈ live demo →
          </a>
        )}
        {!p.github && !p.live && (
          <span className="font-mono text-xs text-muted/50">◷ in development</span>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<string>(ALL);

  const filtered = useMemo(
    () =>
      filter === ALL
        ? projects
        : projects.filter((p) => p.tags.includes(filter as Project["tags"][number])),
    [filter]
  );

  return (
    <Section id="projects" index="02" title="projects.lab">
      <div className="mb-8 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`rounded-lg border px-4 py-1.5 font-mono text-xs transition-all ${
              filter === t
                ? "border-purple bg-purple/20 text-white glow-border"
                : "border-white/10 text-muted hover:border-purple/40 hover:text-white"
            }`}
          >
            {t === ALL ? "all_systems" : t.toLowerCase().replace(" ", "_")}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
