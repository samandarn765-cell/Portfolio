import type { ReactNode } from "react";

/** Infinite horizontal ticker. Content is duplicated so the -50% loop is seamless. */
export default function Marquee({
  items,
  reverse = false,
  duration = 32,
  className,
  separator,
}: {
  items: ReactNode[];
  reverse?: boolean;
  duration?: number;
  className?: string;
  separator?: ReactNode;
}) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={i} className="flex items-center">
          <span className="px-6 md:px-10">{item}</span>
          {separator}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`marquee overflow-hidden ${reverse ? "marquee-reverse" : ""} ${className ?? ""}`}
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
    >
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
