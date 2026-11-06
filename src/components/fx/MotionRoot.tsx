"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/** Global motion settings: honour the OS "reduce motion" preference everywhere. */
export default function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
