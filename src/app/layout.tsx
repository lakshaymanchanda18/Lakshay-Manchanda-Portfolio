import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lakshaymanchanda.dev"),
  title: "Lakshay Manchanda - Full-Stack Engineer & AI/ML Developer",
  description:
    "Portfolio of Lakshay Manchanda - a Computer Science (AI & ML) student at UPES building production-grade web, mobile, and AI-powered applications.",
  keywords: [
    "Lakshay Manchanda",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "AI ML Developer",
    "UPES",
    "Portfolio",
    "React Native",
    "TypeScript",
  ],
  authors: [{ name: "Lakshay Manchanda" }],
  creator: "Lakshay Manchanda",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lakshaymanchanda.dev",
    title: "Lakshay Manchanda - Full-Stack Engineer & AI/ML Developer",
    description:
      "Building intelligent systems at the intersection of web and AI. React, Next.js, React Native, TypeScript, Google Gemini.",
    siteName: "Lakshay Manchanda Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lakshay Manchanda Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshay Manchanda - Full-Stack Engineer & AI/ML Developer",
    description:
      "Building intelligent systems at the intersection of web and AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="noise">{children}</body>
    </html>
  );
}
