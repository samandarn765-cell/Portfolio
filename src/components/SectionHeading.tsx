import type { ReactNode } from "react";

/**
 * Consistent section heading: small uppercase eyebrow with a line,
 * a big bold title and an optional description.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <p
        className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] ${
          dark ? "text-white/50" : "text-neutral-500 dark:text-neutral-400"
        }`}
      >
        <span className={`h-px w-9 ${dark ? "bg-white/40" : "bg-ink"}`} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-4xl font-extrabold tracking-tight md:text-5xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${
            dark ? "text-white/60" : "text-neutral-600 dark:text-neutral-300"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
