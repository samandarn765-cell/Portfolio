"use client";

import { useEffect, useRef, useState } from "react";
import { useFancyPointer } from "./useMediaQuery";

/**
 * Custom cursor: a small dot + a lagging ring with mix-blend-difference.
 * - Only on precise pointers (mouse / trackpad); touch devices keep native behaviour.
 * - Moves via a single rAF loop writing `transform` directly — no React re-renders per frame.
 * - Grows over links/buttons; shows a label over elements with [data-cursor="label"].
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const enabled = useFancyPointer();
  const [label, setLabel] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("has-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { ...target };
    let visible = false;
    let raf = 0;

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        ring.x = target.x;
        ring.y = target.y;
        dotRef.current?.style.setProperty("opacity", "1");
        ringRef.current?.style.setProperty("opacity", "1");
      }
    };

    const onOver = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("a, button, [data-cursor], input, textarea, label");
      setHovering(!!el);
      setLabel(el?.dataset.cursor ?? null);
    };

    const onLeave = () => {
      visible = false;
      dotRef.current?.style.setProperty("opacity", "0");
      ringRef.current?.style.setProperty("opacity", "0");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] opacity-0 mix-blend-difference transition-opacity duration-300"
      >
        <div
          className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white text-[11px] font-semibold uppercase tracking-widest text-black transition-[width,height,background-color] duration-300 ease-out ${
            label ? "h-24 w-24 bg-white" : hovering ? "h-14 w-14 bg-white" : "h-9 w-9"
          }`}
        >
          {label}
        </div>
      </div>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[101] opacity-0 mix-blend-difference"
      >
        <div className={`h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-transform duration-200 ${hovering ? "scale-0" : ""}`} />
      </div>
    </>
  );
}
