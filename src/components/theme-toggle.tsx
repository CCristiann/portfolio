"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { DockIcon } from "./dock/dock-icon";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <DockIcon
      label={isDark ? "Switch to light" : "Switch to dark"}
      ariaLabel="Toggle color theme"
      onPress={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-full" strokeWidth={1.6} />
        ) : (
          <Moon className="size-full" strokeWidth={1.6} />
        )
      ) : (
        <Sun className="size-full opacity-0" strokeWidth={1.6} />
      )}
    </DockIcon>
  );
}
