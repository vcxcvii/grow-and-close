import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
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
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plexSans.variable} ${plexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
