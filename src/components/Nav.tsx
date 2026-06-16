"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#log", label: "build_log" },
  { href: "#contact", label: "contact" },
];

export default function Nav({ onTerminal }: { onTerminal: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-purple/20 bg-base/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm">
          <span className="text-cyan">~/</span>
          <span className="font-semibold tracking-tight text-white">
            {profile.name.toLowerCase().replace(" ", "_")}
          </span>
          <span className="caret text-purple">_</span>
        </a>

        <ul className="hidden items-center gap-7 font-mono text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors hover:text-cyan"
              >
                <span className="text-purple/70">#</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={onTerminal}
            className="pill px-3 py-1.5 font-mono text-xs text-purple-bright transition-colors hover:bg-purple/20"
            aria-label="Open terminal"
          >
            ▸ terminal
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="font-mono text-xl text-purple md:hidden"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-purple/15 bg-base/95 px-5 py-3 font-mono text-sm md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-muted hover:text-cyan"
              >
                <span className="text-purple/70">#</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
