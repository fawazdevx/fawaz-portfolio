"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { profile, certifications } from "@/data/portfolio";

const channels = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "github", value: `@${profile.githubUser}`, href: profile.socials.github },
  { label: "linkedin", value: "in/fawazoyebode", href: profile.socials.linkedin },
  { label: "x", value: `@${profile.twitterHandle}`, href: profile.socials.twitter },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyError(false);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
      setCopyError(true);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-28">
      <motion.div
        className="glass relative overflow-hidden p-8 sm:p-12"
      >
        <div className="grid-bg pointer-events-none absolute inset-0 -z-0 opacity-50" />
        <div className="relative">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              let&apos;s work together
            </h2>
          </div>

          <p className="mt-4 max-w-xl text-muted">
            I&apos;m open to{" "}
            <span className="text-purple-bright">full-time backend and Web3 developer roles</span>,
            and take on select freelance projects. The fastest way to reach me is email.
          </p>
          <p className="mt-3 font-mono text-xs text-cyan/70">
            usually replies within 1–2 business days
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
              ↳ {profile.location}
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
                <span className="font-mono text-xs text-cyan">
                  {c.label}
                </span>
                <span className="font-mono text-sm text-gray-300">{c.value} →</span>
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={copyEmail}
            className="mt-3 rounded-lg border border-cyan/25 bg-cyan/[0.04] px-4 py-3 font-mono text-xs text-cyan transition-colors hover:border-cyan/60 hover:bg-cyan/10"
          >
            {copied
              ? "email_copied ✓"
              : copyError
                ? "copy_failed — use the email link above"
                : "copy_email_address"}
          </button>

          <div className="mt-10">
            <h3 className="mb-3 font-mono text-xs text-muted">
              certifications & training
            </h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-purple/20 bg-purple/[0.06] px-3 py-1.5 font-mono text-xs text-gray-300"
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
