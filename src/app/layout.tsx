import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Samandar Nosirov — Fullstack & AI Developer",
  description:
    "Samandar Nosirov — O'zbekistonlik Fullstack & AI Dasturchi. React, Next.js, Node.js, server tizimlari va sun'iy intellekt (AI) integratsiyasi bilan zamonaviy veb-ilovalar yarataman.",
  icons: { icon: "/assets/logos/logo_direke.png" },
};

/**
 * Runs before hydration to apply the saved/system theme to <html>
 * and avoid a flash of the wrong theme (FOUC).
 */
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");}}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
