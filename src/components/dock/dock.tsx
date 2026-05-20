"use client";

import { createContext, useContext, type ReactNode } from "react";
import { motion, useMotionValue, type MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

const DockMouseContext = createContext<MotionValue<number> | null>(null);

export function useDockMouseX(): MotionValue<number> | null {
  return useContext(DockMouseContext);
}

export function Dock({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue<number>(Infinity);

  return (
    <DockMouseContext.Provider value={mouseX}>
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "mx-auto flex h-12 w-max items-end gap-1 rounded-full border border-border bg-surface/70 px-2 pb-1 shadow-overlay backdrop-blur-md supports-[backdrop-filter]:bg-surface/60 sm:h-[60px] sm:gap-1.5 sm:px-3 sm:pb-1.5",
          className,
        )}
      >
        {children}
      </motion.div>
    </DockMouseContext.Provider>
  );
}
