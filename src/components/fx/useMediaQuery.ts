"use client";

import { useSyncExternalStore } from "react";

/** SSR-safe media query hook (false on the server, live on the client). */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** True when the device has a precise pointer and the user allows motion. */
export function useFancyPointer(): boolean {
  return useMediaQuery("(pointer: fine) and (prefers-reduced-motion: no-preference)");
}
