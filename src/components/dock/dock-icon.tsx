"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { Tooltip } from "@heroui/react";
import { useDockMouseX } from "./dock";
import { cn } from "@/lib/utils";

const SIZE = 44;
const MAGNIFICATION = 64;
const DISTANCE = 140;

export type DockIconProps = {
  label: string;
  isActive?: boolean;
  onPress?: () => void;
  href?: string;
  external?: boolean;
  ariaLabel?: string;
  children: ReactNode;
};

export function DockIcon({
  label,
  isActive,
  onPress,
  href,
  external,
  ariaLabel,
  children,
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const dockMouseX = useDockMouseX();
  const fallbackMouseX = useMotionValue(Infinity);

  const distance = useTransform(dockMouseX ?? fallbackMouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(
    distance,
    [-DISTANCE, 0, DISTANCE],
    [SIZE, MAGNIFICATION, SIZE],
  );

  const size = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const inner = (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className={cn(
        "relative flex aspect-square items-center justify-center rounded-full border border-border bg-default/70 text-foreground/80 transition-colors hover:bg-default hover:text-foreground",
        isActive &&
          "border-accent/30 bg-accent/15 text-accent hover:bg-accent/25 hover:text-accent",
      )}
    >
      <div className="flex size-1/2 items-center justify-center">{children}</div>
    </motion.div>
  );

  const interactive = href ? (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel ?? label}
      className="block cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible:ring-focus"
    >
      {inner}
    </a>
  ) : (
    <button
      type="button"
      onClick={onPress}
      aria-label={ariaLabel ?? label}
      aria-current={isActive ? "true" : undefined}
      className="block cursor-pointer rounded-full bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-focus"
    >
      {inner}
    </button>
  );

  return (
    <Tooltip delay={0} closeDelay={50}>
      <Tooltip.Trigger>{interactive}</Tooltip.Trigger>
      <Tooltip.Content>{label}</Tooltip.Content>
    </Tooltip>
  );
}
