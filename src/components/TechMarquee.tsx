"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import Marquee from "./fx/Marquee";

const Star = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-accent md:h-7 md:w-7" fill="currentColor" aria-hidden="true">
    <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z" />
  </svg>
);

/** Two counter-scrolling tilted ribbons between the hero and skills. */
export default function TechMarquee() {
  const { t } = useLanguage();
  return (
    <section aria-label={t.marquee.label} className="relative overflow-hidden bg-paper py-10 md:py-14">
      <div className="-rotate-2 scale-105 bg-ink py-4 text-paper md:py-5">
        <Marquee
          items={t.marquee.services.map((s) => (
            <span key={s} className="text-2xl font-extrabold uppercase tracking-tight md:text-4xl">{s}</span>
          ))}
          separator={<Star />}
          duration={38}
        />
      </div>
      <div className="mt-[-6px] rotate-1 scale-105 border-y border-ink/15 bg-paper py-3 text-ink md:py-4">
        <Marquee
          reverse
          duration={45}
          items={["React", "Next.js", "TypeScript", "Node.js", "OpenAI · Claude API", "Tailwind CSS", "PostgreSQL", "Framer Motion", "REST · WebSocket", "Vercel"].map((s) => (
            <span key={s} className="font-display text-xl text-neutral-500 md:text-3xl dark:text-neutral-400">{s}</span>
          ))}
          separator={<span className="h-1.5 w-1.5 rounded-full bg-ink/30" aria-hidden="true" />}
        />
      </div>
    </section>
  );
}
