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
          "mx-auto flex h-[60px] w-max items-end gap-1.5 rounded-full border border-border bg-surface/70 px-3 pb-1.5 shadow-overlay backdrop-blur-md supports-[backdrop-filter]:bg-surface/60",
          className,
        )}
      >
        {children}
      </motion.div>
    </DockMouseContext.Provider>
  );
}
