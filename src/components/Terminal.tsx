"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile, projects, skillCategories } from "@/data/portfolio";

type Line = { cmd?: string; out: string[] };

const banner = [
  "  ███████╗ █████╗ ██╗    ██╗ █████╗ ███████╗",
  "  ██╔════╝██╔══██╗██║    ██║██╔══██╗╚══███╔╝",
  "  █████╗  ███████║██║ █╗ ██║███████║  ███╔╝ ",
  "  ██╔══╝  ██╔══██║██║███╗██║██╔══██║ ███╔╝  ",
  "  ██║     ██║  ██║╚███╔███╔╝██║  ██║███████╗",
  "  ╚═╝     ╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝",
  "",
  "  type 'help' to list commands. 'exit' to close.",
];

function run(input: string): { out: string[]; close?: boolean; clear?: boolean } {
  const cmd = input.trim().toLowerCase();
  switch (cmd) {
    case "":
      return { out: [] };
    case "help":
      return {
        out: [
          "available commands:",
          "  whoami      → who is Fawaz",
          "  projects    → list shipped projects",
          "  skills      → tech stack",
          "  contact     → reach me",
          "  resume      → download CV",
          "  socials     → links",
          "  clear       → clear screen",
          "  exit        → close terminal",
        ],
      };
    case "whoami":
      return {
        out: [
          `${profile.fullName}`,
          `${profile.roles[0]} · ${profile.location}`,
          "",
          profile.tagline,
        ],
      };
    case "projects":
      return {
        out: projects.map(
          (p) => `  ◈ ${p.name.padEnd(20)} ${p.tags.join(", ")}`
        ),
      };
    case "skills":
      return {
        out: skillCategories.flatMap((c) => [
          `  ${c.title}:`,
          `    ${c.skills.join(", ")}`,
        ]),
      };
    case "contact":
      return {
        out: [
          `  email    ${profile.email}`,
          `  phone    ${profile.phone}`,
          `  github   ${profile.socials.github}`,
          `  linkedin ${profile.socials.linkedin}`,
        ],
      };
    case "socials":
      return {
        out: Object.entries(profile.socials).map(
          ([k, v]) => `  ${k.padEnd(10)} ${v}`
        ),
      };
    case "resume":
      if (typeof window !== "undefined") window.open(profile.resumeUrl, "_blank");
      return { out: ["↓ opening resume..."] };
    case "clear":
      return { out: [], clear: true };
    case "exit":
      return { out: ["closing..."], close: true };
    default:
      return { out: [`command not found: ${cmd}. type 'help'.`] };
  }
}

export default function Terminal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [history, setHistory] = useState<Line[]>([{ out: banner }]);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [history]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = run(value);
    if (res.clear) {
      setHistory([]);
    } else {
      setHistory((h) => [...h, { cmd: value, out: res.out }]);
    }
    setValue("");
    if (res.close) setTimeout(onClose, 300);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 24, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="glow-border w-full max-w-2xl overflow-hidden rounded-xl border border-purple/30 bg-[#0b0b12]/95 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-xs text-muted">fawaz@portfolio — zsh</span>
              <button
                onClick={onClose}
                className="font-mono text-xs text-muted hover:text-white"
              >
                ✕
              </button>
            </div>

            <div
              ref={bodyRef}
              className="h-[60vh] overflow-y-auto p-4 font-mono text-[13px] leading-relaxed"
            >
              {history.map((line, i) => (
                <div key={i}>
                  {line.cmd !== undefined && (
                    <div className="text-gray-300">
                      <span className="text-cyan">➜</span>{" "}
                      <span className="text-purple-bright">~</span>{" "}
                      {line.cmd}
                    </div>
                  )}
                  {line.out.map((o, j) => (
                    <div key={j} className="whitespace-pre text-gray-400">
                      {o}
                    </div>
                  ))}
                </div>
              ))}

              <form onSubmit={submit} className="mt-1 flex items-center gap-2">
                <span className="text-cyan">➜</span>
                <span className="text-purple-bright">~</span>
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  spellCheck={false}
                  autoComplete="off"
                  className="flex-1 bg-transparent text-gray-200 caret-cyan outline-none"
                  aria-label="Terminal input"
                />
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
