"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-card border border-border hover:bg-card-secondary transition-all duration-300 group"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun
          className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
            theme === "light"
              ? "rotate-0 scale-100 text-foreground"
              : "rotate-90 scale-0 text-muted-foreground"
          }`}
        />
        {/* Moon Icon */}
        <Moon
          className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
            theme === "dark"
              ? "rotate-0 scale-100 text-foreground"
              : "-rotate-90 scale-0 text-muted-foreground"
          }`}
        />
      </div>
    </button>
  );
}
