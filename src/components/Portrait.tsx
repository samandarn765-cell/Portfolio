"use client";

import Image from "next/image";
import { useState } from "react";

/* Shaxsiy rasm: shu faylni qo'ying → /public/assets/images/samandar.png
   Fayl topilmasa avtomatik ravishda eski illyustratsiya ko'rsatiladi. */
export const PORTRAIT_SRC = "/assets/images/samandar.png";
const FALLBACK_SRC = "/assets/images/hero-illustration.png";

export default function Portrait({
  alt,
  className,
  sizes,
  preload = false,
}: {
  alt: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  const [src, setSrc] = useState(PORTRAIT_SRC);
  const fallback = src === FALLBACK_SRC;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes ?? "(min-width: 1024px) 480px, 90vw"}
      preload={preload}
      onError={() => setSrc(FALLBACK_SRC)}
      className={`${fallback ? "object-contain p-6" : "object-cover object-top"} ${className ?? ""}`}
    />
  );
}
