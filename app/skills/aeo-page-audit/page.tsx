import type { Metadata } from "next";

import { SkillLandingPage } from "../skill-landing-page";
import { aeoPageAudit as skill } from "../skill-page-content";

export const metadata: Metadata = {
  title: skill.metaTitle,
  description: skill.metaDescription,
  alternates: { canonical: `/skills/${skill.slug}` },
  openGraph: { title: `${skill.heroLead} ${skill.heroAccent}`, description: skill.metaDescription, url: `https://growandclose.com/skills/${skill.slug}`, type: "website" },
};

export default function AeoPageAuditPage() {
  return <SkillLandingPage skill={skill} />;
}
