"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* ---------- Left: illustration ---------- */}
        <Reveal>
          <div className="relative">
            {/* offset frame */}
            <div className="absolute -left-4 -top-4 h-full w-full border border-ink/15" aria-hidden="true" />
            <div className="relative overflow-hidden border border-ink">
              {/* Illyustratsiya: /public/assets/images/about-illustration.png */}
              <Image
                src="/assets/images/about-illustration.png"
                alt={t.about.imageAlt}
                width={530}
                height={572}
                className="h-auto w-full"
              />
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-6 right-4 bg-ink px-5 py-4 text-paper shadow-[0_16px_40px_rgba(10,10,10,0.25)]">
              <p className="text-3xl font-extrabold leading-none">1+</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                {t.about.badgeLabel}
              </p>
            </div>
          </div>
        </Reveal>

        {/* ---------- Right: text ---------- */}
        <Reveal delay={0.15}>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
          <div className="mt-6 space-y-5 leading-relaxed text-neutral-600 dark:text-neutral-300 md:text-lg">
            {t.about.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* stats */}
          <div className="mt-10 grid grid-cols-2 gap-px border border-ink/15 bg-ink/15 sm:grid-cols-4">
            {t.about.stats.map((stat) => (
              <div key={stat.label} className="bg-paper p-4 text-center transition-colors duration-300 hover:bg-mist">
                <p className="text-2xl font-extrabold text-ink md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
