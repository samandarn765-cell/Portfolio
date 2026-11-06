"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROJECT_META } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ArrowUpRightIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Project = { title: string; description: string; tags: string[]; imageAlt: string };

function ProjectRow({
  project,
  meta,
  reversed,
  linkLabel,
  viewLabel,
}: {
  project: Project;
  meta: (typeof PROJECT_META)[number];
  reversed: boolean;
  linkLabel: string;
  viewLabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  /* image drifts inside its frame while the row passes through the viewport */
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const numY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div ref={ref} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      {/* ---------- Image ---------- */}
      <Reveal className={reversed ? "lg:order-2" : ""}>
        <a
          href={meta.link}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor={viewLabel}
          aria-label={`${project.title} — ${linkLabel}`}
          className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 [clip-path:inset(0_round_1.5rem)]"
        >
          <motion.div style={{ y: imgY }} className="relative aspect-[16/10] scale-[1.18]">
            <Image
              src={meta.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, 92vw"
              className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
          </motion.div>
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />
          <span className="absolute left-4 top-4 rounded-full bg-paper px-3 py-1.5 text-xs font-bold tracking-widest text-ink">
            №{meta.number}
          </span>
          <span className="absolute bottom-4 right-4 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-accent text-accent-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRightIcon className="h-5 w-5" />
          </span>
        </a>
      </Reveal>

      {/* ---------- Text ---------- */}
      <Reveal delay={0.12} className={reversed ? "lg:order-1" : ""}>
        <motion.span
          style={{ y: numY }}
          className="text-outline-light inline-block text-7xl font-extrabold leading-none md:text-8xl"
          aria-hidden="true"
        >
          {meta.number}
        </motion.span>
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
          className="group/link mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 py-2 pl-5 pr-2 text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
        >
          {linkLabel}
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover/link:rotate-45 group-hover/link:bg-black group-hover/link:text-white">
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </a>
      </Reveal>
    </div>
  );
}

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

        <div className="mt-14 flex flex-col gap-20 md:gap-32">
          {t.projects.items.map((project, i) => (
            <ProjectRow
              key={PROJECT_META[i].number}
              project={project}
              meta={PROJECT_META[i]}
              reversed={i % 2 === 1}
              linkLabel={t.projects.linkLabel}
              viewLabel={t.projects.cursor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
