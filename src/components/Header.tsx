"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Header() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // Qorong'i rejimda oq logo (qora fonda ko'rinadi), yorug' rejimda qora logo
  const logoSrc = theme === "dark" ? "/assets/logos/logo_lide.png" : "/assets/logos/logo_direke.png";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "border-b border-ink/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 md:h-20 lg:px-10">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5" aria-label={t.header.goHome}>
          {/* Tema almashganda logotip silliq o'zgaradi */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={logoSrc}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src={logoSrc}
                alt={t.header.logoAlt}
                width={76}
                height={36}
                className="h-9 w-auto transition-transform duration-300 group-hover:rotate-6"
              />
            </motion.div>
          </AnimatePresence>
          <span className="text-lg font-bold tracking-tight text-ink">
            {t.header.logoText}
            <span className="text-neutral-400 dark:text-neutral-500">.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label={t.header.navigationLabel}>
          {t.header.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-neutral-600 transition-colors duration-300 hover:text-ink dark:text-neutral-300"
            >
              {link.label}
              {/* underline animation */}
              <span
                className="absolute -bottom-1.5 left-0 h-[2px] w-full origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        {/* Theme toggle + language switcher + CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher className="hidden lg:block" />
          <a
            href="#contact"
            className="hidden items-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(10,10,10,0.35)] lg:inline-flex"
          >
            {t.header.cta}
          </a>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.header.menuClose : t.header.menuOpen}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-paper lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  className="h-5 w-5"
                >
                  <path d="M6 6l12 12M18 6 6 18" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  className="h-5 w-5"
                >
                  <path d="M4 7h16M4 12h16M4 17h10" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-t border-ink/10 bg-paper lg:hidden"
            aria-label={t.header.navigationLabel}
          >
            <div className="flex flex-col gap-1 px-5 py-6">
              <div className="mb-3">
                <LanguageSwitcher />
              </div>
              {t.header.nav.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="rounded-lg px-3 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-ink hover:text-paper dark:text-neutral-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.3 }}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper"
              >
                {t.header.cta}
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
