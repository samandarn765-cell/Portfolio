"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { t } = useLanguage();
  const listRef = useRef<HTMLDivElement>(null);

  /* The timeline line "draws" itself as you scroll through the list */
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <section id="experience" className="relative overflow-hidden bg-ink-soft py-20 text-white md:py-28">
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[28rem] w-[28rem] rounded-full bg-white/[0.03] blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            dark
            eyebrow={t.experience.eyebrow}
            title={t.experience.title}
            description={t.experience.description}
          />
        </Reveal>

        <div ref={listRef} className="relative mt-14 pl-8 md:pl-14">
          {/* track + animated progress line */}
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-white/10 md:left-[11px]" aria-hidden="true" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-accent via-white to-white/30 md:left-[11px]"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6">
            {t.experience.items.map((item, i) => (
              <Reveal key={`${item.role}-${i}`} delay={i * 0.08} className="relative">
                {/* node */}
                <span
                  className="absolute -left-8 top-8 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-white/30 bg-ink-soft md:-left-14 md:h-[23px] md:w-[23px]"
                  aria-hidden="true"
                >
                  <span className={`h-1.5 w-1.5 rounded-full md:h-2 md:w-2 ${i === 0 ? "bg-accent" : "bg-white/60"}`} />
                </span>

                <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05] md:p-8">
                  <span
                    className="pointer-events-none absolute -right-2 -top-6 select-none text-[7rem] font-extrabold leading-none text-white/[0.03] transition-colors duration-500 group-hover:text-white/[0.06]"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-bold transition-transform duration-500 group-hover:translate-x-1 md:text-2xl">
                      {item.role}
                    </h3>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                        i === 0
                          ? "border-accent/40 bg-accent/10 text-accent"
                          : "border-white/15 text-white/60"
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>
                  <p className="relative mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                    {item.company}
                  </p>
                  <p className="relative mt-4 max-w-3xl leading-relaxed text-white/70">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
