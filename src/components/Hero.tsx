"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 35 : 75;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 pt-24 text-center"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />

      <motion.div
        variants={fade}
        initial="hidden"
        animate="show"
        custom={0}
        className="pill mb-6 px-4 py-1.5 font-mono text-xs text-cyan"
      >
        <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-cyan align-middle" />
        available for internships & collaborations
      </motion.div>

      <motion.h1
        variants={fade}
        initial="hidden"
        animate="show"
        custom={1}
        className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
      >
        <span className="text-white">Fawaz </span>
        <span className="gradient-text glow-purple">Oyebode</span>
      </motion.h1>

      <motion.div
        variants={fade}
        initial="hidden"
        animate="show"
        custom={2}
        className="mt-6 h-8 font-mono text-lg text-purple-bright sm:text-2xl"
      >
        <span className="text-muted">&gt; </span>
        {role}
        <span className="caret">█</span>
      </motion.div>

      <motion.p
        variants={fade}
        initial="hidden"
        animate="show"
        custom={3}
        className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        variants={fade}
        initial="hidden"
        animate="show"
        custom={4}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="glow-border rounded-lg bg-purple px-6 py-3 font-mono text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
        >
          ▸ view_projects
        </a>
        <a
          href={profile.resumeUrl}
          download
          className="rounded-lg border border-purple/40 px-6 py-3 font-mono text-sm font-semibold text-purple-bright transition-colors hover:border-cyan hover:text-cyan"
        >
          ↓ download_resume
        </a>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/10 px-6 py-3 font-mono text-sm text-muted transition-colors hover:text-white"
        >
          ⌥ github
        </a>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 font-mono text-xs text-muted"
        aria-label="Scroll down"
      >
        <span className="block animate-bounce">↓ scroll</span>
      </motion.a>
    </section>
  );
}
