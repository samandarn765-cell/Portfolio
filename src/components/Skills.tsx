"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { SKILL_ICONS, type SkillIcon } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function SkillGlyph({ icon, name }: { icon: SkillIcon; name: string }) {
  if (typeof icon === "object") {
    return (
      <Image
        src={icon.image}
        alt={name}
        width={48}
        height={48}
        className="h-10 w-10 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 md:h-12 md:w-12"
      />
    );
  }
  const Icon = icon;
  return (
    <Icon className="h-10 w-10 text-ink transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:text-paper md:h-12 md:w-12" />
  );
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const gridContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 44 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.description}
          />
        </Reveal>

        {/* 2 rows x 4 cards (2 cols on mobile) */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5"
        >
          {SKILL_ICONS.map((icon, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              className="group flex aspect-square flex-col items-center justify-center gap-5 border border-ink bg-paper transition-colors duration-300 hover:bg-ink"
            >
              <SkillGlyph icon={icon} name={t.skills.cards[i]} />
              <span className="px-2 text-center text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-paper md:text-base">
                {t.skills.cards[i]}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
