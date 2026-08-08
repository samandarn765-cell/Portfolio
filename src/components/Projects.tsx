"use client";

import Image from "next/image";
import { PROJECT_META } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ArrowUpRightIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-ink-soft py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            dark
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-20 md:gap-28">
          {t.projects.items.map((project, i) => {
            const meta = PROJECT_META[i];
            const reversed = i % 2 === 1;
            return (
              <div key={meta.number} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                {/* ---------- Image ---------- */}
                <Reveal className={reversed ? "lg:order-2" : ""}>
                  <div className="group relative overflow-hidden border border-white/10">
                    {/* Loyiha rasmi: /public/assets/images/gardenia.webp, property.webp, restaurant.webp, cinema.webp */}
                    <Image
                      src={meta.image}
                      alt={project.imageAlt}
                      width={800}
                      height={500}
                      className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20"
                      aria-hidden="true"
                    />
                    {/* number badge */}
                    <span className="absolute left-4 top-4 bg-paper px-3 py-1.5 text-xs font-bold tracking-widest text-ink">
                      №{meta.number}
                    </span>
                  </div>
                </Reveal>

                {/* ---------- Text ---------- */}
                <Reveal delay={0.12} className={reversed ? "lg:order-1" : ""}>
                  <span className="text-outline-light text-7xl font-extrabold leading-none md:text-8xl" aria-hidden="true">
                    {meta.number}
                  </span>
                  <h3 className="mt-5 text-2xl font-bold md:text-3xl">{project.title}</h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-white/65">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/70 transition-colors duration-300 hover:border-white/50 hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={meta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
                  >
                    <span className="border-b-2 border-white pb-1 transition-colors duration-300 group-hover/link:border-transparent">
                      {t.projects.linkLabel}
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
