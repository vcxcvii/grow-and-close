import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { JsonLd } from "./components/json-ld";

// Measurement IDs are public; the env var only exists to disable GA in forks.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-1873J5508N";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grow & Close",
  url: "https://growandclose.com",
  logo: "https://growandclose.com/og.png",
  description:
    "Senior-led GTM execution studio for B2B SaaS. Strategy, campaigns, pages, content, and enablement, shipped one pipeline motion at a time.",
  founder: { "@type": "Person", name: "Varun Choraria" },
  email: "hello@growandclose.com",
  sameAs: ["https://github.com/vcxcvii"],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Grow & Close",
  url: "https://growandclose.com",
};

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
  title: "Grow & Close | Your GTM backlog, shipped.",
  description:
    "Senior-led GTM execution for B2B SaaS. Strategy, campaigns, pages, content, and enablement, shipped one pipeline motion at a time.",
  metadataBase: new URL("https://growandclose.com"),
  openGraph: {
    title: "Grow & Close | Your GTM backlog, shipped.",
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
        alt: "Grow & Close | Your GTM backlog, shipped.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow & Close | Your GTM backlog, shipped.",
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
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={webSiteJsonLd} />
        {children}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
