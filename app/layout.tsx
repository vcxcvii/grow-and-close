import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { JsonLd } from "./components/json-ld";
import { GITHUB_URL, LINKEDIN_URL } from "./site";

// Measurement IDs are public; the env var only exists to disable GA in forks.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-1873J5508N";

/**
 * One @graph rather than three sibling <script> blocks. Google merges separate
 * blocks and resolves @id across them, so the old shape was not broken, but a
 * single graph is the reliable form when nodes cross-reference each other
 * (Organization.founder -> Person) and it is what non-Google parsers expect.
 */
const siteGraphJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://growandclose.com/#founder",
      name: "Varun Choraria",
      jobTitle: "Founder",
      url: "https://varunchoraria.com",
      image: "https://growandclose.com/brand/varun-choraria.jpg",
      sameAs: [LINKEDIN_URL, GITHUB_URL, "https://varunchoraria.com"],
      worksFor: { "@id": "https://growandclose.com/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://growandclose.com/#organization",
      name: "Grow & Close",
      url: "https://growandclose.com",
      logo: "https://growandclose.com/og.png",
      description:
        "Decision studio for B2B SaaS. AI made production abundant, so the scarce thing is deciding what to ship. Strategy, campaigns, pages, content, and enablement, one motion at a time against qualified pipeline created.",
      founder: { "@id": "https://growandclose.com/#founder" },
      email: "hello@growandclose.com",
      sameAs: [GITHUB_URL, LINKEDIN_URL],
    },
    {
      "@type": "WebSite",
      "@id": "https://growandclose.com/#website",
      name: "Grow & Close",
      url: "https://growandclose.com",
      publisher: { "@id": "https://growandclose.com/#organization" },
    },
  ],
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
  title: "Grow & Close | Production got cheap. Deciding did not.",
  description:
    "Decision studio for B2B SaaS. Strategy, campaigns, pages, content, and enablement, one motion at a time against qualified pipeline created.",
  metadataBase: new URL("https://growandclose.com"),
  openGraph: {
    title: "Grow & Close | Production got cheap. Deciding did not.",
    description:
      "Decision studio for B2B SaaS. One motion at a time, against qualified pipeline created.",
    type: "website",
    url: "https://growandclose.com",
    siteName: "Grow & Close",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Grow & Close | Production got cheap. Deciding did not.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow & Close | Production got cheap. Deciding did not.",
    description: "Decision studio for B2B SaaS.",
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
        <JsonLd data={siteGraphJsonLd} />
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
