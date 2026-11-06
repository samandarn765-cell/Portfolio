"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

/** Floating back-to-top button with a circular scroll-progress ring. */
export default function BackToTop({ label }: { label: string }) {
  const { scrollY, scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 700));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#home"
          aria-label={label}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="fixed bottom-5 right-5 z-[65] flex h-13 w-13 items-center justify-center rounded-full bg-ink text-paper shadow-[0_12px_30px_rgba(0,0,0,0.25)] md:bottom-8 md:right-8"
        >
          <svg viewBox="0 0 52 52" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
            <motion.circle
              cx="26"
              cy="26"
              r="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4.5 w-4.5" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
