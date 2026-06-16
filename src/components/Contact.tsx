"use client";

import { motion } from "framer-motion";
import { profile, certifications } from "@/data/portfolio";

const channels = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "github", value: `@${profile.githubUser}`, href: profile.socials.github },
  { label: "linkedin", value: "in/fawazoyebode", href: profile.socials.linkedin },
  { label: "x", value: `@${profile.githubUser}`, href: profile.socials.twitter },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass relative overflow-hidden p-8 sm:p-12"
      >
        <div className="grid-bg pointer-events-none absolute inset-0 -z-0 opacity-50" />
        <div className="relative">
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-cyan">05</span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              let&apos;s build something
            </h2>
          </div>

          <p className="mt-4 max-w-xl text-muted">
            Open to <span className="text-purple-bright">Software Development internships</span>,
            Web3 collaborations, and freelance builds. The fastest way to reach me is email.
          </p>

          {/* terminal-style block */}
          <div className="glow-border mt-8 max-w-xl rounded-lg bg-black/40 p-4 font-mono text-sm">
            <div className="mb-2 flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-400/70" />
              <span className="h-3 w-3 rounded-full bg-amber-400/70" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
            </div>
            <p className="text-gray-400">
              <span className="text-cyan">fawaz@portfolio</span>
              <span className="text-muted">:~$</span> contact --reach-out
            </p>
            <p className="mt-1 text-purple-bright">
              ↳ {profile.location} · {profile.phone}
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass-hover flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 transition-colors"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-cyan">
                  {c.label}
                </span>
                <span className="font-mono text-sm text-gray-300">{c.value} →</span>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
              certifications & training
            </h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-purple/20 bg-purple/[0.06] px-3 py-1.5 font-mono text-[11px] text-gray-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <footer className="mt-12 flex flex-col items-center gap-2 border-t border-white/5 pt-8 text-center font-mono text-xs text-muted">
        <p>
          built with next.js · typescript · tailwind · framer motion
        </p>
        <p className="text-muted/60">
          © {profile.fullName} — designed & shipped, not just claimed.
        </p>
      </footer>
    </section>
  );
}
