"use client";

import type { HTMLAttributes, PointerEvent } from "react";

/** A div whose ::before radial highlight follows the pointer (see .spotlight in globals.css). */
export default function Spotlight({ className, onPointerMove, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    onPointerMove?.(e);
  };
  return <div {...rest} onPointerMove={handleMove} className={`spotlight ${className ?? ""}`} />;
}
