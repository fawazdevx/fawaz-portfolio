import type { Metadata, Viewport } from "next";
// Fonts are self-hosted via @font-face in globals.css (files in /public/fonts).
// No build-time fetch to Google Fonts — builds reliably offline.
import "./globals.css";
import { profile } from "@/data/portfolio";

const description =
  "Backend & Web3 developer building production-grade automation tools, smart-contract dApps, and secure backends. Solidity, Motoko, Python, React.";

export const metadata: Metadata = {
  metadataBase: new URL("https://fawazoyebode.tech"),
  title: `${profile.name} - Backend & Web3 Developer`,
  description,
  keywords: [
    "Fawaz Oyebode",
    "Backend Developer",
    "Web3 Developer",
    "Solidity",
    "Motoko",
    "Smart Contracts",
    "Software Engineer",
    "Python",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: profile.fullName }],
  openGraph: {
    title: `${profile.name} - Backend & Web3 Developer`,
    description,
    type: "website",
    url: "https://fawazoyebode.tech",
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - Backend & Web3 Developer`,
    description,
  },
};

export const viewport: Viewport = { themeColor: "#0a0a0f" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  url: "https://fawazoyebode.tech",
  jobTitle: "Backend & Web3 Developer",
  sameAs: [profile.socials.github, profile.socials.linkedin, profile.socials.twitter],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-purple focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
