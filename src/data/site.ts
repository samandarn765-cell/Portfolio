import type { ComponentType, SVGProps } from "react";
import {
  AiIcon,
  CssIcon,
  DeviceIcon,
  FigmaIcon,
  GitIcon,
  GitHubIcon,
  HtmlIcon,
  InstagramIcon,
  JavaScriptIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  NextJsIcon,
  NodeJsIcon,
  PhoneIcon,
  ReactIcon,
  ServerIcon,
  TailwindIcon,
  TelegramIcon,
} from "@/components/icons";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

/* ============================================================
   Saytning barcha matnlari 3 tilda:
   src/i18n/translations.ts faylida saqlanadi.
   Bu yerda faqat struktura — ikonkalar, rasmlar va havolalar.
============================================================ */

/* ---------- Social links ---------- */
export const SOCIALS: { name: string; href: string; icon: IconType }[] = [
  { name: "GitHub", href: "https://github.com/samandarn765-cell", icon: GitHubIcon },
  { name: "LinkedIn", href: "https://linkedin.com/", icon: LinkedInIcon },
  { name: "Instagram", href: "https://instagram.com/", icon: InstagramIcon },
  { name: "Telegram", href: "https://t.me/Saha_SDR_09", icon: TelegramIcon },
];

/* ---------- Skills — 12 ta ikonka (nomlar translations.skills.cards) ----------
   Har bir element SVG ikonka yoki rasm yo'li ({ image: ... }). */
export type SkillIcon = IconType | { image: string };

export const SKILL_ICONS: SkillIcon[] = [
  ReactIcon,
  NextJsIcon,
  NodeJsIcon,
  AiIcon,
  ServerIcon,
  JavaScriptIcon,
  TailwindIcon,
  GitIcon,
  HtmlIcon,
  CssIcon,
  FigmaIcon,
  DeviceIcon,
];

/* ---------- Projects — raqam, rasm va havola (matn translations.projects.items) ---------- */
export const PROJECT_META: { number: string; image: string; link: string }[] = [
  { number: "01", image: "/assets/images/gardenia.webp", link: "https://gardenia-livid.vercel.app/" },
  { number: "02", image: "/assets/images/property.webp", link: "https://home-eta-vert.vercel.app/" },
  { number: "03", image: "/assets/images/restaurant.webp", link: "https://restaurant-chi-teal.vercel.app/" },
  { number: "04", image: "/assets/images/cinema.webp", link: "https://cinema-samandarn765-7615-samandar-s-projects6.vercel.app/" },
];

/* ---------- Testimonials — avatar (matn translations.testimonials.items) ---------- */
export const TESTIMONIAL_AVATARS: string[] = [
  "/assets/images/avatar-1.png",
  "/assets/images/avatar-2.jpg",
  "/assets/images/avatar-3.png",
];

/* ---------- Contact info — ikonkalar (matn translations.contact.info) ---------- */
export const CONTACT_ICONS: Record<"email" | "phone" | "location", IconType> = {
  email: MailIcon,
  phone: PhoneIcon,
  location: MapPinIcon,
};
