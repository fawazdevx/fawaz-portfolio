"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const architecture = [
  {
    label: "01",
    title: "Request",
    detail: "A user, agent, game, or SaaS client requests a paid resource.",
    accent: "text-purple-bright",
  },
  {
    label: "02",
    title: "Policy",
    detail: "Limits, allowlists, approvals, and replay checks decide what can proceed.",
    accent: "text-cyan",
  },
  {
    label: "03",
    title: "Settlement",
    detail: "Circle wallets and USDC settle the payment across supported networks.",
    accent: "text-purple-bright",
  },
  {
    label: "04",
    title: "Evidence",
    detail: "Receipts, notifications, and reconciliation make the result auditable.",
    accent: "text-cyan",
  },
];

const useCases = [
  ["SaaS & paid APIs", "Protect reports, analysis, subscriptions, and premium endpoints with HTTP 402."],
  ["Games & digital goods", "Handle season passes, unlocks, creator rooms, and other USDC entitlements."],
  ["Agent commerce", "Give autonomous agents a controlled path to discover and pay for services."],
  ["USDC applications", "Add settlement, receipts, escrow, and treasury routing without rebuilding the payment layer."],
];

export default function NexoraCaseStudy() {
  return (
    <Section id="nexora-case-study" index="03" title="nexora.system">
      <div className="mb-10 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">
          Arc-first payment infrastructure
        </p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          A control layer for paid software and autonomous commerce.
        </h3>
        <p className="mt-4 leading-relaxed text-muted">
          Nexora combines managed wallets, spending policies, x402 middleware,
          USDC settlement, receipts, and reconciliation. The
          <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-cyan">
            @nexorafi/x402
          </code>
          SDK lets Express and Next.js applications charge for services while
          keeping product entitlements and accounting in the application layer.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass overflow-hidden p-5 sm:p-7"
      >
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-bright">
            payment lifecycle
          </span>
          <span className="font-mono text-xs text-muted">x402 v1/v2 · USDC · Arc-first</span>
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          {architecture.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="h-full rounded-lg border border-white/10 bg-black/20 p-4">
                <div className={`font-mono text-xs ${step.accent}`}>{step.label}</div>
                <h4 className="mt-3 font-mono font-semibold text-white">{step.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.detail}</p>
              </div>
              {i < architecture.length - 1 && (
                <span className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 font-mono text-cyan md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="mt-5 glass p-5 sm:p-7">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-bright">
            x402 request flow
          </span>
          <span className="font-mono text-xs text-muted">paid API · game · SaaS resource</span>
        </div>
        <div className="grid gap-3 md:grid-cols-5 md:items-stretch">
          {[
            ["client", "Requests a protected resource"],
            ["API", "Returns HTTP 402 + requirements"],
            ["wallet", "Signs the USDC authorization"],
            ["Nexora", "Verifies, settles, and records"],
            ["resource", "Returns the paid result + receipt"],
          ].map(([label, detail], i) => (
            <div key={label} className="relative">
              <div className="h-full rounded-lg border border-cyan/20 bg-cyan/[0.04] p-4">
                <div className="font-mono text-xs uppercase tracking-wider text-cyan">
                  {label}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{detail}</p>
              </div>
              {i < 4 && (
                <span className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 font-mono text-cyan md:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {useCases.map(([title, detail], i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass glass-hover p-5"
          >
            <h4 className="font-mono font-semibold text-purple-bright">{title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted">{detail}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs">
        <a
          href="https://nexorafi.app/docs/api"
          target="_blank"
          rel="noopener noreferrer"
          className="pill px-3 py-2 text-cyan transition-colors hover:text-white"
        >
          API docs →
        </a>
        <a
          href="https://www.npmjs.com/package/@nexorafi/x402"
          target="_blank"
          rel="noopener noreferrer"
          className="pill px-3 py-2 text-cyan transition-colors hover:text-white"
        >
          npm package →
        </a>
        <a
          href="https://github.com/fawazdevx/Nexora/tree/master/sdk/x402"
          target="_blank"
          rel="noopener noreferrer"
          className="pill px-3 py-2 text-cyan transition-colors hover:text-white"
        >
          SDK source →
        </a>
      </div>
    </Section>
  );
}
