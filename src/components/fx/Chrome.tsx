"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import BackToTop from "./BackToTop";
import Cursor from "./Cursor";
import Preloader from "./Preloader";
import ScrollProgress from "./ScrollProgress";

/** Global, page-level overlays (intro, cursor, progress, back-to-top). */
export default function Chrome() {
  const { t } = useLanguage();
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Cursor />
      <BackToTop label={t.footer.backToTop} />
    </>
  );
}
