"use client";

import { motion, type Variants } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageProvider";
import Spotlight from "./fx/Spotlight";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const grid: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const ICONS = [
  // discover
  <path key="a" d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm10 17-4.35-4.35" />,
  // design
  <path key="b" d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586M11 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />,
  // build
  <path key="c" d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
  // launch
  <path key="d" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />,
];

/** "How I work" — four-step process. Shows clients there is a method, not just code. */
export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow={t.process.eyebrow}
            title={
              <>
                {t.process.title.pre} <span className="font-display font-normal">{t.process.title.accent}</span>
              </>
            }
            description={t.process.description}
          />
        </Reveal>

        <motion.ol
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.process.steps.map((step, i) => (
            <motion.li key={step.title} variants={card}>
              <Spotlight className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/15 bg-paper p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink/50 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-paper transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                      {ICONS[i]}
                    </svg>
                  </span>
                  <span className="text-outline-thin text-4xl font-extrabold leading-none">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{step.text}</p>
                <span className="mt-6 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-700 group-hover:scale-x-100" aria-hidden="true" />
              </Spotlight>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
