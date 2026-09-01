import Link from "next/link";

import { buildBreadcrumbJsonLd, JsonLd } from "../components/json-ld";
import { RelatedLinks } from "../components/related-links";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { bookingHref } from "../site";
import type { PersonaPageContent } from "./persona-content";

export function PersonaLandingPage({ persona }: { persona: PersonaPageContent }) {
  const href = bookingHref(persona.bookingTopic);
  const url = `https://growandclose.com/for/${persona.slug}`;

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", item: "https://growandclose.com/" },
    { name: persona.label, item: url },
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: persona.objections.map((objection) => ({
      "@type": "Question",
      name: objection.question,
      acceptedAnswer: { "@type": "Answer", text: objection.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `The GTM decision, made and shipped, for ${persona.role}`,
    description: persona.metaDescription,
    url,
    serviceType: "Go-to-market execution",
    audience: { "@type": "Audience", audienceType: persona.role },
    provider: {
      "@type": "Organization",
      name: "Grow & Close",
      url: "https://growandclose.com",
    },
    areaServed: "Worldwide",
  };

  return (
    <main className="persona-page legal-page" data-brand-system="gc-logic-v1" data-persona={persona.slug}>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <SiteHeader activePersona={persona.slug} ctaHref={href} ctaLabel="Book a call" />

      <section className="legal-hero">
        <nav className="services-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span>{persona.label}</span>
        </nav>
        <p className="eyebrow">{persona.eyebrow}</p>
        <h1>{persona.heroLead} <span>{persona.heroAccent}</span></h1>
        <p>{persona.heroLede}</p>
        <div className="persona-hero-actions">
          <a className="button button-accent" href={href}>Book a 30-minute call</a>
          <Link className="text-link" href="/rubric">
            Read the delivery rubric first <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <small>{persona.heroNote}</small>
      </section>

      <section className="persona-symptom">
        <div className="persona-section-heading">
          <p className="section-kicker">{persona.symptomKicker}</p>
          <h2>{persona.symptomHeading}</h2>
          <p>{persona.symptomCopy}</p>
        </div>
        <div className="persona-symptom-grid">
          {persona.symptoms.map((symptom, index) => (
            <article key={symptom.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{symptom.title}</h3>
              <p>{symptom.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="persona-tried">
        <div className="persona-section-heading">
          <p className="section-kicker section-kicker-light">THE OLD WAY: BUY MORE PRODUCTION</p>
          <h2>{persona.triedHeading}</h2>
          <p>
            Each of these buys throughput. Throughput is the part AI made abundant, which is
            why adding more of it did not clear the queue.
          </p>
        </div>
        <div className="persona-tried-grid">
          {persona.tried.map((item) => (
            <article key={item.label}>
              <p>{item.label}</p>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="persona-resolution">
        <div className="persona-section-heading">
          <p className="section-kicker">THE NEW WAY: BUY THE DECISION</p>
          <h2>{persona.resolutionHeading}</h2>
          <p>{persona.resolutionCopy}</p>
        </div>
        <ol className="persona-resolution-list">
          {persona.resolutionSteps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {persona.evidence.length > 0 ? (
        <section className="persona-evidence" aria-label="Third-party market evidence">
          <div className="persona-section-heading">
            <p className="section-kicker">WHY THIS IS TRUE NOW, NOT A PITCH</p>
            <h2>Published numbers, not our adjectives.</h2>
            <p>
              We have no client testimonials to show you yet, so here is third-party evidence
              for the argument instead, with sources you can check.
            </p>
          </div>
          <div className="persona-evidence-grid">
            {persona.evidence.map((item) => (
              <blockquote key={item.stat}>
                <p>{item.stat}</p>
                <cite>{item.source}</cite>
              </blockquote>
            ))}
          </div>
        </section>
      ) : null}

      <section className="faq" id="faq">
        <div className="faq-heading">
          <p className="section-kicker">THE OBJECTIONS, ANSWERED</p>
          <h2>What you are actually weighing.</h2>
        </div>
        <div className="faq-list">
          {persona.objections.map((objection, index) => (
            <details key={objection.question} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {objection.question}
                <b aria-hidden="true">+</b>
              </summary>
              <p>{objection.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="persona-plan">
        <p className="section-kicker">WHERE TO START</p>
        <p className="persona-plan-copy">{persona.planNudge}</p>
        <div className="persona-hero-actions">
          <Link className="button button-dark" href="/pricing">See plans and pricing</Link>
          <Link className="text-link" href="/services">
            All nine services <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="closing">
        <p className="section-kicker section-kicker-light">{persona.closingKicker}</p>
        <h2>{persona.closingHeading}</h2>
        <a className="button button-accent" href={href}>Book a 30-minute call</a>
      </section>

      <RelatedLinks />

      <SiteFooter />
    </main>
  );
}
