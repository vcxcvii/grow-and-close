import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grow & Close — Your GTM backlog, shipped.",
  description:
    "Senior-led GTM execution for B2B SaaS. Strategy, campaigns, pages, content, and enablement—shipped one pipeline motion at a time.",
  metadataBase: new URL("https://growandclose.com"),
  openGraph: {
    title: "Grow & Close — Your GTM backlog, shipped.",
    description:
      "Senior-led GTM execution for B2B SaaS. One pipeline motion at a time.",
    type: "website",
    url: "https://growandclose.com",
    siteName: "Grow & Close",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Grow & Close — Your GTM backlog, shipped.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow & Close — Your GTM backlog, shipped.",
    description: "Senior-led GTM execution for B2B SaaS.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
