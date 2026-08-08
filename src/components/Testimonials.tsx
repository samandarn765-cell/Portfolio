"use client";

import Image from "next/image";
import { TESTIMONIAL_AVATARS } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { StarIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow={t.testimonials.eyebrow}
            title={t.testimonials.title}
            description={t.testimonials.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.testimonials.items.map((item, i) => {
            const featured = i === 1;
            return (
              <Reveal key={item.name} delay={i * 0.12} className="h-full">
                <figure
                  className={`relative flex h-full flex-col gap-6 border p-7 transition-all duration-300 ${
                    featured
                      ? "border-ink bg-ink-soft text-white shadow-[0_24px_60px_rgba(10,10,10,0.25)] lg:-translate-y-4"
                      : "border-ink/15 bg-paper text-ink hover:-translate-y-1.5 hover:border-ink/40 hover:shadow-[0_18px_45px_rgba(10,10,10,0.08)]"
                  }`}
                >
                  {/* big quote mark */}
                  <span
                    className={`pointer-events-none absolute right-5 top-2 text-8xl font-extrabold leading-none ${
                      featured ? "text-white/10" : "text-ink/[0.06]"
                    }`}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>

                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarIcon key={s} className="h-4 w-4" />
                    ))}
                  </div>

                  <blockquote className="flex-1 leading-relaxed text-sm md:text-[15px]">
                    {item.quote}
                  </blockquote>

                  <figcaption className="flex items-center gap-3.5 border-t pt-5">
                    {/* Avatar: /public/assets/images/avatar-1.png, avatar-2.jpg, avatar-3.png */}
                    <Image
                      src={TESTIMONIAL_AVATARS[i]}
                      alt={`${item.name} — ${item.role}`}
                      width={48}
                      height={48}
                      className={`h-12 w-12 rounded-full object-cover ${featured ? "ring-2 ring-white/40" : "ring-2 ring-ink/10"}`}
                    />
                    <div>
                      <p className="text-sm font-bold">{item.name}</p>
                      <p className={`text-xs ${featured ? "text-white/50" : "text-neutral-500 dark:text-neutral-400"}`}>{item.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
