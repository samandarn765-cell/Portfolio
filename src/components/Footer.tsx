"use client";

import Image from "next/image";
import { SOCIALS } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ArrowUpRightIcon } from "./icons";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-soft py-14 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-9 px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5" aria-label={t.header.goHome}>
          {/* Footer qora fonda — oq logo ishlatiladi */}
          <Image
            src="/assets/logos/logo_lide.png"
            alt={t.header.logoAlt}
            width={84}
            height={40}
            className="h-10 w-auto transition-transform duration-300 group-hover:rotate-6"
          />
          <span className="text-xl font-bold tracking-tight">
            {t.footer.logoText}
            <span className="text-white/40">.</span>
          </span>
        </a>

        {/* Nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3" aria-label={t.header.navigationLabel}>
          {t.header.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-ink"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-center text-sm text-white/40">
            © {year} {t.footer.logoText}. {t.footer.copyright}
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
          >
            {t.footer.backToTop}
            <ArrowUpRightIcon className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
