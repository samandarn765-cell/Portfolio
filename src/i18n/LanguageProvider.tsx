"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translation } from "./translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

const isLang = (value: string | null): value is Lang =>
  value === "uz" || value === "en" || value === "ru";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): Lang {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return isLang(saved) ? saved : "uz";
}

/* SSR/prerender paytida har doim default til qaytadi — hydration mismatch bo'lmaydi */
function getServerSnapshot(): Lang {
  return "uz";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((next: Lang) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    // Same-tab listeners'ni ham xabardor qilamiz
    window.dispatchEvent(new Event("storage"));
  }, []);

  // Keep <html lang="..."> in sync for accessibility
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage faqat LanguageProvider ichida ishlatilishi mumkin");
  return ctx;
}
