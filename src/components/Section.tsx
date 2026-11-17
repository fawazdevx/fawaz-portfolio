"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  index?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:py-28">
      <motion.div
        className="mb-12 flex items-center gap-4"
      >
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-purple/40 to-transparent" />
      </motion.div>
      {children}
    </section>
  );
}
