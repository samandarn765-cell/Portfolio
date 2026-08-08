"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { SOCIALS } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Word-by-word staggered text reveal */
const lineContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const wordItem: Variants = {
  hidden: { opacity: 0, y: "0.85em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/* Social icons pop in one after another */
const socialContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 1.15 } },
};

const socialItem: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 320, damping: 17 } },
};

function AnimatedLine({
  words,
  className,
  outlineIndexes,
}: {
  words: string[];
  className?: string;
  outlineIndexes?: number[];
}) {
  return (
    <span className={`block overflow-hidden ${className ?? ""}`}>
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={wordItem}
          className={`mr-[0.26em] inline-block ${outlineIndexes?.includes(i) ? "text-outline" : ""}`}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden bg-paper py-16 md:py-24 lg:py-28">
      {/* faint decorative dot grid */}
      <div
        className="bg-dots text-neutral-200 dark:text-neutral-700 pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-70"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10 lg:px-10">
        {/* ---------- Left: text ---------- */}
        <div>
          <motion.h1
            variants={lineContainer}
            initial="hidden"
            animate="show"
            className="text-[clamp(2.8rem,7vw,5.4rem)] font-extrabold leading-[1.04] tracking-tight text-ink"
          >
            <AnimatedLine words={t.hero.hello} className="text-[0.42em] font-semibold text-neutral-500 dark:text-neutral-400" />
            <AnimatedLine words={t.hero.name} />
            {/* Izoh: role har doim 2 so'zdan iborat bo'lsin ([Frontend, Developer]) —
                outlineIndexes [1] shunga bog'liq */}
            <AnimatedLine words={t.hero.role} outlineIndexes={[1]} />
            <AnimatedLine words={t.hero.based} className="text-[0.5em] font-semibold" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7, ease: EASE }}
            className="mt-8 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg"
          >
            {t.hero.description}
          </motion.p>

          {/* Social icons — pop in sequentially */}
          <motion.div
            variants={socialContainer}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {SOCIALS.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                variants={socialItem}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                className="flex h-12 w-12 items-center justify-center border border-ink text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
            <motion.span
              variants={socialItem}
              className="hidden text-sm font-medium text-neutral-400 dark:text-neutral-500 sm:inline-block"
            >
              {t.hero.socialsHint}
            </motion.span>
          </motion.div>
        </div>

        {/* ---------- Right: illustration ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          {/* decorative rings */}
          <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full border border-neutral-200 dark:border-neutral-700" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full border border-neutral-200 dark:border-neutral-700" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-16 left-4 h-2.5 w-2.5 rounded-full bg-ink" aria-hidden="true" />

          {/* gentle float */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Illyustratsiya: /public/assets/images/hero-illustration.png */}
            <Image
              src="/assets/images/hero-illustration.png"
              alt={t.hero.illustrationAlt}
              width={800}
              height={600}
              priority
              className="relative z-10 h-auto w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
