"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "focus-ring flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border px-3 py-2 text-sm font-semibold shadow-[0_8px_24px_rgba(10,10,10,0.07)] backdrop-blur-xl transition duration-300",
        dark
          ? "border-white/20 bg-white/10 text-white hover:bg-white/20"
          : "border-ink/10 bg-white/90 text-ink hover:border-brand/35 hover:text-brand"
      )}
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="ml-1.5 hidden sm:inline">{dark ? "Light" : "Dark"}</span>
    </button>
  );
}