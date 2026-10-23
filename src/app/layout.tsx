import type { Metadata, Viewport } from "next";
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

const siteUrl = "https://samandar-nosirov.uz";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Samandar Nosirov — Fullstack & AI Developer",
    template: "%s | Samandar Nosirov",
  },
  description:
    "Samandar Nosirov — O'zbekistonlik Fullstack & AI Dasturchi. React, Next.js, Node.js, server tizimlari va sun'iy intellekt (AI) integratsiyasi bilan zamonaviy veb-ilovalar yarataman.",
  keywords: [
    "Samandar Nosirov",
    "Samandar",
    "Nosirov",
    "Fullstack Developer",
    "AI Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Web Dasturchi",
    "O'zbekiston dasturchi",
    "Toshkent dasturchi",
    "Portfolio",
    "Veb sayt yaratish",
    "AI integratsiya",
  ],
  authors: [{ name: "Samandar Nosirov", url: siteUrl }],
  creator: "Samandar Nosirov",
  publisher: "Samandar Nosirov",
  alternates: {
    canonical: siteUrl,
    languages: {
      uz: `${siteUrl}?lang=uz`,
      en: `${siteUrl}?lang=en`,
      ru: `${siteUrl}?lang=ru`,
    },
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    alternateLocale: ["en_US", "ru_RU"],
    url: siteUrl,
    title: "Samandar Nosirov — Fullstack & AI Developer",
    description:
      "Zamonaviy, tezkor va sun'iy intellekt (AI) bilan boyitilgan veb-ilovalar ishlab chiquvchi Fullstack dasturchi portfoliosi.",
    siteName: "Samandar Nosirov Portfolio",
    images: [
      {
        url: "/assets/images/about-illustration.png",
        width: 1200,
        height: 630,
        alt: "Samandar Nosirov — Fullstack & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samandar Nosirov — Fullstack & AI Developer",
    description:
      "Fullstack & AI Developer from Uzbekistan. Building modern web apps with React, Next.js, Node.js & AI.",
    images: ["/assets/images/about-illustration.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/logos/logo_direke.png",
    apple: "/assets/logos/logo_direke.png",
  },
  verification: {
    google: "I5YL37GqEZZzTx2gIOQGHUBao6gBBJPF7BLFzPx9IUQ",
  },
  other: {
    "geo.region": "UZ",
    "geo.placename": "Tashkent, Uzbekistan",
    "geo.position": "41.2995;69.2401",
    ICBM: "41.2995, 69.2401",
  },
};

/**
 * Runs before hydration to apply the saved/system theme to <html>
 * and avoid a flash of the wrong theme (FOUC).
 */
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(t!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");}}catch(e){}})();`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Samandar Nosirov",
      url: siteUrl,
      jobTitle: "Fullstack & AI Developer",
      description:
        "Fullstack & AI Developer specializing in Next.js, React, Node.js, and Artificial Intelligence integrations.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "UZ",
        addressLocality: "Tashkent",
      },
      sameAs: [
        "https://github.com/samandarn765-cell",
        "https://t.me/Saha_SDR_09",
        "https://instagram.com/",
        "https://linkedin.com/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Samandar Nosirov Portfolio",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: ["uz-UZ", "en-US", "ru-RU"],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning className={`${poppins.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}

