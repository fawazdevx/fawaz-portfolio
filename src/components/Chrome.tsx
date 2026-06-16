"use client";

import { useState } from "react";
import Nav from "./Nav";
import Terminal from "./Terminal";
import ParticleField from "./ParticleField";

export default function Chrome() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <>
      <ParticleField />
      <Nav onTerminal={() => setTerminalOpen(true)} />
      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />

      <button
        onClick={() => setTerminalOpen(true)}
        className="glow-border fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-purple/40 bg-base/80 font-mono text-lg text-purple-bright backdrop-blur transition-transform hover:scale-110 hover:text-cyan"
        aria-label="Open terminal"
        title="Open terminal (or press the terminal button in nav)"
      >
        ▸_
      </button>
    </>
  );
}
