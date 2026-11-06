"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Counts up to the numeric part of `value` ("10+", "100%") when scrolled into view.
 * Writes textContent directly, so there are no per-frame React renders.
 */
export default function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const match = value.match(/^(\D*)(\d+)(.*)$/);

  useEffect(() => {
    if (!inView || !match || reduced || !ref.current) return;
    const [, pre, num, post] = match;
    const el = ref.current;
    const controls = animate(0, Number(num), {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = `${pre}${Math.round(v)}${post}`;
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduced]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {value}
    </span>
  );
}
