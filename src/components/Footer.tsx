"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { SOCIALS } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import Magnetic from "./fx/Magnetic";
import { ArrowUpRightIcon } from "./icons";
import Reveal from "./Reveal";

/* Live Tashkent clock — updates its own text node, no re-renders */
function TashkentClock() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Tashkent",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const tick = () => {
      if (ref.current) ref.current.textContent = fmt.format(new Date());
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span ref={ref} className="tabular-nums" suppressHydrationWarning>
      --:--:--
    </span>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const email = t.contact.info.find((i) => i.key === "email");

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-soft pt-20 text-white md:pt-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* ---------- Big CTA ---------- */}
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            <span className="h-px w-9 bg-white/40" aria-hidden="true" />
            {t.footer.ctaEyebrow}
          </p>
          <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="text-[clamp(2.6rem,8vw,6.5rem)] font-extrabold leading-[0.98] tracking-tight">
              {t.footer.ctaTitle} <br />
              <span className="font-display font-normal text-white/70">{t.footer.ctaAccent}</span>
            </h2>
            <Magnetic strength={0.45}>
              <a
                href="#contact"
                className="group relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-accent text-center text-sm font-bold uppercase tracking-wider text-accent-ink md:h-44 md:w-44"
              >
                <span className="absolute inset-0 scale-0 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100" aria-hidden="true" />
                <span className="relative flex flex-col items-center gap-1.5 px-4">
                  {t.header.cta}
                  <ArrowUpRightIcon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
                </span>
              </a>
            </Magnetic>
          </div>
          {email && (
            <a
              href={email.href}
              className="group mt-10 inline-flex items-center gap-2 text-lg font-medium text-white/80 transition-colors hover:text-white md:text-2xl"
            >
              <span className="relative">
                {email.value}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-100 bg-white/40 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-0" aria-hidden="true" />
              </span>
              <ArrowUpRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </Reveal>

        {/* ---------- Info row ---------- */}
        <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <a href="#home" className="group flex items-center gap-2.5 self-start" aria-label={t.header.goHome}>
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

          <nav aria-label={t.header.navigationLabel}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">{t.footer.menu}</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {t.header.nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">{t.footer.localTime}</p>
            <p className="mt-4 flex items-center gap-2.5 text-2xl font-bold">
              <span className="relative flex h-2 w-2">
                <span className="pulse-ring absolute inset-0 rounded-full bg-emerald-400" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <TashkentClock />
            </p>
            <p className="mt-1 text-xs text-white/40">GMT+5 · Tashkent</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">{t.contact.socialsLabel}</p>
            <div className="mt-4 flex gap-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Bottom row ---------- */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 text-sm text-white/40 sm:flex-row">
          <p>
            © {year} {t.footer.logoText}. {t.footer.copyright}
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>

      {/* giant signature */}
      <p
        className="pointer-events-none select-none whitespace-nowrap text-center text-[18vw] font-extrabold leading-[0.8] tracking-tighter text-white/[0.04]"
        aria-hidden="true"
      >
        SAMANDAR
      </p>
    </footer>
  );
}
