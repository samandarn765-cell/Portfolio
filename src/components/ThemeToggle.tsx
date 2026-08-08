"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { MoonIcon, SunIcon } from "./icons";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const dark = theme === "dark";

  // The server always renders the light theme, so the icon must only
  // swap after mount to avoid a hydration mismatch for returning users.
  // This is a deliberate mount-detection effect, not derived state.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        dark
          ? "Yorug' rejimga o'tish / Switch to light mode / Включить светлую тему"
          : "Qorong'u rejimga o'tish / Switch to dark mode / Включить тёмную тему"
      }
      className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper ${className ?? ""}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={dark ? "sun" : "moon"}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="flex"
          >
            {dark ? <SunIcon className="h-4.5 w-4.5" /> : <MoonIcon className="h-4.5 w-4.5" />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
