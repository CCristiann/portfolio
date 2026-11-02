"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

const themes = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "system", icon: Monitor, label: "System" },
  { value: "dark", icon: Moon, label: "Dark" },
] as const;

const subscribe = () => () => {};

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  // Il tema è noto solo sul client: evita il mismatch di idratazione.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  return (
    <div className="flex items-center gap-0.5 rounded-lg bg-muted p-0.5">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={`Switch to ${label} theme`}
          className={cn(
            "flex items-center justify-center rounded-md p-1.5 transition-colors duration-150",
            "text-muted-foreground hover:text-foreground",
            mounted && theme === value &&"bg-background text-foreground shadow-sm"
          )}
        >
          <Icon size={15} strokeWidth={1.8} />
        </button>
      ))}
    </div>
  );
}
