import type { Metadata } from "next";
import Link from "next/link";

import { buildBreadcrumbJsonLd, JsonLd } from "../components/json-ld";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { skillPages } from "./skill-page-content";
import { RelatedLinks } from "../components/related-links";

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", item: "https://growandclose.com/" },
  { name: "Skills", item: "https://growandclose.com/skills" },
]);

export const metadata: Metadata = {
  title: "Free Claude Skills for B2B SaaS Marketing & GTM | Grow & Close",
  description:
    "Free Claude skills for B2B SaaS GTM: ICP definition, landing page teardowns, cold outbound sequences, GTM dashboards, and AEO audits. Built by Grow & Close.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Free Claude Skills for B2B SaaS GTM",
    description:
      "Expert marketing workflows packaged as installable Claude skills. Free, built by Grow & Close.",
    url: "https://growandclose.com/skills",
    type: "website",
  },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Claude Skills for B2B SaaS GTM",
  url: "https://growandclose.com/skills",
  hasPart: Object.values(skillPages).map((skill) => ({
    "@type": "SoftwareApplication",
    name: `${skill.name} — Claude Skill`,
    url: `https://growandclose.com/skills/${skill.slug}`,
    applicationCategory: "BusinessApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  })),
};

export default function SkillsHubPage() {
  return (
    <main className="skills-hub-page">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={collectionJsonLd} />
      <SiteHeader ctaHref="/#pricing" ctaLabel="See the plans" />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">FREE CLAUDE SKILLS / GTM LIBRARY</p>
          <h1>
            Our GTM playbooks, <span>installed in your Claude.</span>
          </h1>
          <p className="hero-lede">
            The workflows we run inside client engagements, packaged as free Claude skills:
            ICP definition, landing page teardowns, outbound sequences, dashboard specs, and
            AEO audits. Install one, get the methodology, keep the output.
          </p>
          <p className="hero-note">FREE · WORKS IN CLAUDE AND CLAUDE CODE · NO GATE</p>
        </div>
        <div className="skills-sample" aria-label="Example skill input and output">
          <p className="skills-sample-label">SAMPLE OUTPUT</p>
          <div className="skills-sample-io">
            <div>
              <span>YOU GIVE IT</span>
              <p>{Object.values(skillPages)[0].inputExample}</p>
            </div>
            <div>
              <span>IT RETURNS</span>
              <p>{Object.values(skillPages)[0].outputExample}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="skills-hub-grid">
        {Object.values(skillPages).map((skill, index) => (
          <Link className="skills-hub-card" href={`/skills/${skill.slug}`} key={skill.slug}>
            <p className="section-kicker">SKILL {String(index + 1).padStart(2, "0")}</p>
            <h2>{skill.name}</h2>
            <p>{skill.cardSummary}</p>
            <span className="text-link">
              Get the skill <span aria-hidden="true">↗</span>
            </span>
          </Link>
        ))}
      </div>

      <RelatedLinks />

      <SiteFooter />
    </main>
  );
}
