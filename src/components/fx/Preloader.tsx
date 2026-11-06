"use client";

import { AnimatePresence, animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { markIntroDone } from "./introStore";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];
const SEEN_KEY = "intro-seen";

/**
 * Short (~1.3s) intro curtain, shown once per browser session.
 * Rendered on the server so content never flashes underneath; an inline
 * script in layout.tsx adds `intro-seen` to <html> on repeat visits and CSS
 * hides it instantly. A CSS fail-safe also hides it if JS never runs.
 */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (root.classList.contains(SEEN_KEY) || reduced) {
      markIntroDone();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const controls = animate(0, 100, {
      duration: 1.15,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => {
        if (countRef.current) countRef.current.textContent = String(Math.round(v)).padStart(3, "0");
        if (barRef.current) barRef.current.style.transform = `scaleX(${v / 100})`;
      },
      onComplete: () => {
        try {
          sessionStorage.setItem(SEEN_KEY, "1");
        } catch {
          /* storage may be blocked */
        }
        window.setTimeout(() => {
          setDone(true);
          // let the curtain start lifting, then fire the hero entrance underneath it
          window.setTimeout(markIntroDone, 250);
        }, 150);
      },
    });
    return () => {
      controls.stop();
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="preloader fixed inset-0 z-[200] flex flex-col justify-between bg-[#0a0a0a] p-6 text-white md:p-10"
          aria-hidden="true"
        >
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            <span>Portfolio</span>
            <span>©{new Date().getFullYear()}</span>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(2.6rem,9vw,8rem)] font-extrabold leading-[0.95] tracking-tight"
            >
              Samandar <span className="font-display font-normal text-white/70">Nosirov</span>
            </motion.p>
          </div>

          <div>
            <div className="flex items-end justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Fullstack &amp; AI</span>
              <span ref={countRef} className="text-5xl font-extrabold tabular-nums md:text-7xl">
                000
              </span>
            </div>
            <div className="mt-4 h-px w-full bg-white/15">
              <div ref={barRef} className="h-full origin-left scale-x-0 bg-accent" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
