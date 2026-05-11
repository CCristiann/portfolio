"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";
import { profile } from "@/lib/content";

export function Intro() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  return (
    <section
      ref={ref}
      id="intro"
      className="scroll-mt-24 pb-8 pt-12 sm:pt-20"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="flex items-center gap-6 sm:gap-8"
      >
        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {profile.name}
          </h1>
          <p className="text-base text-muted sm:text-lg">{profile.role}</p>
        </div>

        <div className="flex shrink-0 justify-end">
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            width={128}
            height={128}
            priority
            className="size-28 rounded-full border-5 border-border object-cover sm:size-36"
          />
        </div>
      </motion.div>
    </section>
  );
}
