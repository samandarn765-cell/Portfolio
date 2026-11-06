"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { SOCIALS } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useIntroDone } from "./fx/introStore";
import Magnetic from "./fx/Magnetic";
import { useFancyPointer } from "./fx/useMediaQuery";
import { ArrowUpRightIcon } from "./icons";
import Portrait from "./Portrait";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const lineContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const wordItem: Variants = {
  hidden: { y: "110%", rotate: 4 },
  show: { y: 0, rotate: 0, transition: { duration: 0.8, ease: EASE } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (d: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: EASE } }),
};

const socialContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.95 } },
};

const socialItem: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 320, damping: 17 } },
};

function AnimatedLine({
  words,
  className,
  accentIndexes,
}: {
  words: string[];
  className?: string;
  accentIndexes?: number[];
}) {
  return (
    <span className={`block ${className ?? ""}`}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="mr-[0.24em] inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            variants={wordItem}
            className={`inline-block origin-bottom-left ${accentIndexes?.includes(i) ? "font-display font-normal" : ""}`}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Circular rotating text badge */
function RotatingBadge({ text }: { text: string }) {
  return (
    <a
      href="#contact"
      aria-label={text}
      className="group absolute -left-6 bottom-10 z-30 flex h-28 w-28 items-center justify-center rounded-full bg-ink text-paper shadow-[0_20px_50px_rgba(0,0,0,0.3)] md:-left-10 md:h-32 md:w-32"
    >
      <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-current text-[9.5px] font-semibold uppercase" letterSpacing="2.6">
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-ink transition-transform duration-500 group-hover:rotate-45">
        <ArrowUpRightIcon className="h-5 w-5" />
      </span>
    </a>
  );
}

const CHIPS = [
  { label: "Next.js", className: "-right-3 top-10 md:-right-8", delay: 0 },
  { label: "AI · LLM", className: "-right-2 top-1/2 md:-right-12", delay: 1.2 },
  { label: "Node.js", className: "left-6 -top-4 md:left-10", delay: 2.1 },
];

export default function Hero() {
  const { t } = useLanguage();
  const ready = useIntroDone();
  const fancy = useFancyPointer();
  const sectionRef = useRef<HTMLElement>(null);
  const state = ready ? "show" : "hidden";

  /* Scroll parallax for the giant background word + portrait */
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  /* Pointer tilt on the portrait card */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 150, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 });
  const imgX = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 150, damping: 20 });
  const imgY = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), { stiffness: 150, damping: 20 });

  const onTilt = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!fancy) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const resetTilt = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden bg-paper pb-20 pt-10 md:pb-28 md:pt-16 lg:min-h-[calc(100svh-5rem)] lg:pb-24"
    >
      {/* giant outlined word drifting with scroll */}
      <motion.div
        style={{ x: bgX }}
        className="text-outline-thin pointer-events-none absolute bottom-0 left-0 select-none whitespace-nowrap text-[22vw] font-extrabold leading-none opacity-[0.07]"
        aria-hidden="true"
      >
        SAMANDAR NOSIROV
      </motion.div>
      <div
        className="bg-dots pointer-events-none absolute right-0 top-0 h-80 w-80 text-neutral-300 opacity-60 [mask-image:radial-gradient(circle_at_top_right,black,transparent_70%)] dark:text-neutral-700"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:px-10">
        {/* ---------- Left: text ---------- */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={state}
            custom={0}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper/70 py-1.5 pl-2.5 pr-4 text-xs font-semibold text-ink backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-ring absolute inset-0 rounded-full bg-emerald-500" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            {t.hero.available}
          </motion.div>

          <motion.h1
            variants={lineContainer}
            initial="hidden"
            animate={state}
            className="text-[clamp(2.7rem,6.6vw,5.6rem)] font-extrabold leading-[1.02] tracking-tight text-ink"
          >
            <AnimatedLine words={t.hero.hello} className="text-[0.4em] font-semibold text-neutral-500 dark:text-neutral-400" />
            <AnimatedLine words={t.hero.name} accentIndexes={[1]} />
            <span className="block">
              <span className="mr-[0.24em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span variants={wordItem} className="inline-block">
                  {t.hero.role[0]}
                </motion.span>
              </span>
              <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span variants={wordItem} className="text-outline inline-block">
                  {t.hero.role[1]}
                </motion.span>
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={state}
            custom={0.55}
            className="mt-7 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={state}
            custom={0.7}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ink px-7 py-4 text-sm font-semibold text-paper"
              >
                <span className="absolute inset-0 translate-y-full rounded-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" aria-hidden="true" />
                <span className="relative transition-colors duration-500 group-hover:text-accent-ink">{t.hero.ctaPrimary}</span>
                <ArrowUpRightIcon className="relative h-4 w-4 transition-all duration-500 group-hover:rotate-45 group-hover:text-accent-ink" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-4 text-sm font-semibold text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
              >
                {t.hero.ctaSecondary}
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            variants={socialContainer}
            initial="hidden"
            animate={state}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            {SOCIALS.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                variants={socialItem}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.92 }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-paper"
              >
                <social.icon className="h-4.5 w-4.5" />
              </motion.a>
            ))}
            <motion.span variants={socialItem} className="ml-1 text-sm font-medium text-neutral-400 dark:text-neutral-500">
              {t.hero.based.join(" ")}
            </motion.span>
          </motion.div>
        </div>

        {/* ---------- Right: portrait ---------- */}
        <motion.div
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1, delay: 0.25, ease: EASE }}
          className="relative mx-auto w-full max-w-[380px] [perspective:1200px] sm:max-w-[420px] lg:mr-0"
        >
          <motion.div
            onPointerMove={onTilt}
            onPointerLeave={resetTilt}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
            data-cursor="Hi!"
          >
            {/* offset frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-ink/20" aria-hidden="true" />

            <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-mist">
              <motion.div style={{ x: imgX, y: imgY, scale: 1.12 }} className="absolute inset-0">
                <Portrait
                  alt={t.hero.illustrationAlt}
                  preload
                  className="grayscale-[0.35] transition-[filter] duration-700 group-hover:grayscale-0"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" aria-hidden="true" />

              {/* name plate */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-md">
                <div>
                  <p className="text-sm font-bold leading-tight">Samandar Nosirov</p>
                  <p className="text-[11px] font-medium text-white/70">{t.hero.plate}</p>
                </div>
                <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-ink">
                  {t.hero.open}
                </span>
              </div>
            </div>

            {/* floating tech chips */}
            {CHIPS.map((chip) => (
              <motion.span
                key={chip.label}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: chip.delay }}
                style={{ translateZ: 40 }}
                className={`absolute z-20 rounded-full border border-ink/10 bg-paper px-4 py-2 text-xs font-bold text-ink shadow-[0_10px_30px_rgba(0,0,0,0.12)] ${chip.className}`}
              >
                {chip.label}
              </motion.span>
            ))}
          </motion.div>

          <RotatingBadge text={t.hero.badge} />
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400 lg:flex"
      >
        {t.hero.scroll}
        <span className="flex h-9 w-5 justify-center rounded-full border border-neutral-300 pt-1.5 dark:border-neutral-600">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-neutral-400"
          />
        </span>
      </motion.a>
    </section>
  );
}
