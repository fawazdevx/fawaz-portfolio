"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const services = [
  {
    title: "Paid APIs & SaaS",
    detail:
      "Payment-gated reports, subscriptions, and premium endpoints with x402, USDC settlement, and reliable receipt handling.",
    proof: "Nexora x402 SDK",
    accent: "text-cyan",
  },
  {
    title: "Web3 backends",
    detail:
      "Wallet authentication, REST APIs, validation, and smart-contract integrations that keep product logic secure and maintainable.",
    proof: "Nexora · Fundarc",
    accent: "text-purple-bright",
  },
  {
    title: "Agent payment systems",
    detail:
      "Spending policies, approvals, payment intents, settlement evidence, and reconciliation for autonomous workflows.",
    proof: "Nexora",
    accent: "text-cyan",
  },
  {
    title: "Game & creator tooling",
    detail:
      "Onchain game features, digital goods, live match experiences, leaderboards, and creator tools that are built for real users.",
    proof: "Arc UE Plugin · MatchPulse",
    accent: "text-purple-bright",
  },
];

export default function Services() {
  return (
    <Section id="services" index="04" title="what_i_can_build">
      <div className="mb-8 max-w-2xl">
        <p className="text-lg leading-relaxed text-gray-300">
          Need a backend, payment flow, or Web3 product shipped? I build the
          systems behind the interface: APIs, wallet flows, settlement logic,
          and automation that can survive production use.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service, i) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="glass glass-hover p-6"
          >
            <h3 className={`font-mono text-lg font-semibold ${service.accent}`}>
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{service.detail}</p>
            <div className="mt-5 inline-block pill px-3 py-1 font-mono text-xs text-cyan">
              {service.proof}
            </div>
          </motion.article>
        ))}
      </div>

      <a
        href="#contact"
        className="mt-8 inline-flex rounded-lg border border-cyan/40 bg-cyan/10 px-5 py-3 font-mono text-sm text-cyan transition-colors hover:border-cyan hover:bg-cyan/20 hover:text-white"
      >
        Start a project →
      </a>
    </Section>
  );
}
