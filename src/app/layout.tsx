import type { Metadata } from "next";
// Fonts are self-hosted via @font-face in globals.css (files in /public/fonts).
// No build-time fetch to Google Fonts — builds reliably offline.
import "./globals.css";
import { profile } from "@/data/portfolio";

const description =
  "Backend & Web3 developer building production-grade automation tools, smart-contract dApps, and secure backends. Solidity, Motoko, Python, React.";

export const metadata: Metadata = {
  metadataBase: new URL("https://fawazoyebode.vercel.app"),
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
  authors: [{ name: profile.fullName }],
  openGraph: {
    title: `${profile.name} - Backend & Web3 Developer`,
    description,
    type: "website",
    url: "https://fawazoyebode.vercel.app",
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - Backend & Web3 Developer`,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="scanlines antialiased">
        {children}
      </body>
    </html>
  );
}
