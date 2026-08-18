import type { Metadata } from "next";

import { personaPages } from "../persona-content";
import { PersonaLandingPage } from "../persona-landing-page";

const persona = personaPages.cmos;

export const metadata: Metadata = {
  title: persona.metaTitle,
  description: persona.metaDescription,
  alternates: { canonical: `/for/${persona.slug}` },
  openGraph: {
    title: `${persona.heroLead} ${persona.heroAccent}`,
    description: persona.metaDescription,
    url: `https://growandclose.com/for/${persona.slug}`,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: persona.metaTitle }],
  },
};

export default function ForCmosPage() {
  return <PersonaLandingPage persona={persona} />;
}
