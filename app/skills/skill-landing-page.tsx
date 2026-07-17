import Link from "next/link";

import { JsonLd } from "../components/json-ld";
import { SiteHeader } from "../components/site-header";
import { SkillDownloadForm } from "./skill-download-form";
import type { SkillPageContent } from "./skill-page-types";

interface SkillLandingPageProps {
  skill: SkillPageContent;
}

export function SkillLandingPage({ skill }: SkillLandingPageProps) {
  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${skill.name} — Claude Skill`,
    description: skill.metaDescription,
    url: `https://growandclose.com/skills/${skill.slug}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any (Claude, Claude Code)",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: {
      "@type": "Organization",
      name: "Grow & Close",
      url: "https://growandclose.com",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: skill.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="skill-page" data-skill={skill.slug}>
      <JsonLd data={softwareJsonLd} />
      <JsonLd data={faqJsonLd} />
      <SiteHeader ctaHref="#download" ctaLabel="Get the free skill" />

      <section className="hero skill-hero" id="top">
        <div className="hero-copy">
          <Link className="service-back" href="/skills">
            Free Claude skill / {skill.name}
          </Link>
          <h1>
            {skill.heroLead} <span>{skill.heroAccent}</span>
          </h1>
          <p className="hero-lede">{skill.heroLede}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#download">
              Get the free skill
            </a>
            <a className="text-link" href="#what-it-does">
              See what it does <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-note">FREE · BUILT BY GROW &amp; CLOSE · WORKS IN CLAUDE + CLAUDE CODE</p>
        </div>
        <div className="hero-system skill-hero-sample" aria-label={`${skill.name} sample output`}>
          <div className="system-topline">
            <span>{skill.name.toUpperCase()} / SAMPLE OUTPUT</span>
            <span className="live-dot">SKILL ACTIVE</span>
          </div>
          <p className="system-label">INPUT</p>
          <p className="skill-sample-input">{skill.inputExample}</p>
          <p className="system-label">OUTPUT</p>
          <p className="skill-sample-output">{skill.outputExample}</p>
        </div>
      </section>

      <section className="skill-what" id="what-it-does">
        <p className="section-kicker">WHAT THE SKILL DOES</p>
        <h2>Method, not magic.</h2>
        <ul className="skill-what-list">
          {skill.whatItDoes.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="skill-who">
          <strong>Who it&rsquo;s for:</strong> {skill.whoFor}
        </p>
      </section>

      <section className="skill-steps">
        <p className="section-kicker">HOW IT WORKS</p>
        <h2>Three steps to a working skill.</h2>
        <div className="skill-steps-grid">
          {skill.steps.map((step, index) => (
            <div className="skill-step" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="skill-download" id="download">
        <div className="skill-download-copy">
          <p className="section-kicker">GET THE SKILL</p>
          <h2>Free. Yours. Installed in two minutes.</h2>
          <p>
            Enter your email and we&rsquo;ll send the {skill.name} .skill file plus the install
            steps. One email, no drip campaign ambush.
          </p>
        </div>
        <SkillDownloadForm skillSlug={skill.slug} skillName={skill.name} />
      </section>

      <section className="faq skill-faq" id="faq">
        <div className="faq-heading">
          <p className="section-kicker">QUESTIONS, ANSWERED</p>
          <h2>Before you install.</h2>
        </div>
        <div className="faq-list">
          {skill.faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {faq.question}
                <b aria-hidden="true">+</b>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="skill-related">
        <p className="section-kicker">WHEN THE SKILL ISN&rsquo;T ENOUGH</p>
        <h2>{skill.relatedService.pitch}</h2>
        <Link className="button button-dark" href={`/services/${skill.relatedService.slug}`}>
          See the {skill.relatedService.name} service
        </Link>
      </section>
    </main>
  );
}
