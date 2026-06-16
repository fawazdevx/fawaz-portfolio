"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { about } from "@/data/portfolio";

export default function About() {
  return (
    <Section id="about" index="01" title="about">
      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <p className="text-lg leading-relaxed text-gray-300">{about.summary}</p>

          <div className="glass mt-8 p-5">
            <div className="mb-2 font-mono text-xs uppercase tracking-widest text-cyan">
              ● currently building
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              {about.currentlyBuilding}
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {about.focus.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass glass-hover p-5"
            >
              <h3 className="font-mono text-lg font-semibold text-purple-bright">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.detail}</p>
              <div className="mt-4 inline-block pill px-3 py-1 font-mono text-xs text-cyan">
                {f.proof}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
