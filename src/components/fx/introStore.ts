"use client";

import { useSyncExternalStore } from "react";

/* Tiny global flag: has the intro curtain finished? Hero waits for it. */
let done = false;
const listeners = new Set<() => void>();

export function markIntroDone() {
  if (done) return;
  done = true;
  listeners.forEach((l) => l());
}

export function useIntroDone(): boolean {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => done,
    () => false,
  );
}
