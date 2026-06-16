"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { buildLog } from "@/data/portfolio";

export default function BuildLog({ children }: { children?: React.ReactNode }) {
  return (
    <Section id="log" index="04" title="build_log">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ol className="relative border-l border-purple/25 pl-6">
            {buildLog.map((entry, i) => (
              <motion.li
                key={entry.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="mb-8 last:mb-0"
              >
                <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-base bg-purple glow-border" />
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-cyan">{entry.date}</span>
                  <span className="pill px-2 py-0.5 font-mono text-[10px] text-purple-bright">
                    {entry.tag}
                  </span>
                </div>
                <h3 className="mt-1.5 font-semibold text-white">{entry.title}</h3>
                <p className="mt-1 text-sm text-muted">{entry.detail}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-2">{children}</div>
      </div>
    </Section>
  );
}
