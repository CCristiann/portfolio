"use client";

import { type ReactNode, useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export function SectionShell({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotion();

  return (
    <section
      ref={ref}
      id={id}
      className="scroll-mt-24 py-8 last:border-b-0"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      >
        <h2 className="mb-5 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
}
