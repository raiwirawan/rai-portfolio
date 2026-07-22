/**
 * Root layout — loads JetBrains Mono, sets metadata, and wraps all pages.
 *
 * @file app/layout.tsx
 */

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

/** JetBrains Mono — closest open-source substitute for Berkeley Mono */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rai Wirawan — Full-Stack Software Engineer",
  description:
    "Personal portfolio of Rai Wirawan, a full-stack software engineer specialising in Next.js, TypeScript, and modern web applications. Available for freelance and full-time opportunities.",
  keywords: [
    "Rai Wirawan",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Rai Wirawan" }],
  openGraph: {
    title: "Rai Wirawan — Full-Stack Software Engineer",
    description:
      "Portfolio of Rai Wirawan: GitHub repos, live projects, and UI design showcase.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rai Wirawan — Full-Stack Software Engineer",
    description:
      "Portfolio of Rai Wirawan: GitHub repos, live projects, and UI design showcase.",
  },
};

import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageModal from "@/components/ui/LanguageModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-canvas text-ink antialiased">
        <LanguageProvider>
          {children}
          <LanguageModal />
        </LanguageProvider>
      </body>
    </html>
  );
}
