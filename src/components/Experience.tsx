"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="bg-ink-soft py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            dark
            eyebrow={t.experience.eyebrow}
            title={t.experience.title}
            description={t.experience.description}
          />
        </Reveal>

        <div className="mt-12 flex flex-col gap-5">
          {t.experience.items.map((item, i) => (
            <Reveal key={`${item.role}-${i}`} delay={i * 0.1}>
              <article className="group relative border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] md:p-8">
                {/* soft glow on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ boxShadow: "inset 0 0 60px rgba(255,255,255,0.05)" }}
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-bold transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                    {item.role}
                  </h3>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/60 transition-colors duration-300 group-hover:border-white/40 group-hover:text-white">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                  {item.company}
                </p>
                <p className="mt-4 max-w-3xl leading-relaxed text-white/70">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
