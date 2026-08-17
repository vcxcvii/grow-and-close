import Link from "next/link";

import { JsonLd } from "../components/json-ld";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { skillForService } from "../skills/skill-page-content";
import type { ServicePageContent } from "./service-page-types";
import { RelatedLinks } from "../components/related-links";

interface ServiceLandingPageProps {
  service: ServicePageContent;
}

export function ServiceLandingPage({ service }: ServiceLandingPageProps) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    url: `https://growandclose.com/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "Grow & Close",
      url: "https://growandclose.com",
    },
    serviceType: service.name,
    areaServed: "Worldwide",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="system-service-page" data-service={service.slug}>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <SiteHeader
        activeService={service.slug}
        ctaHref={service.diagnosticHref}
        ctaLabel="Book a call"
      />

      <section className="hero system-service-hero" id="top">
        <div className="hero-copy">
          <Link className="service-back" href="/services">
            Service {service.number} / {service.name}
          </Link>
          <h1>{service.heroLead}<span>{service.heroAccent}</span></h1>
          <p className="hero-lede">{service.heroLede}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={service.diagnosticHref}>
              Book a call with the founder
            </a>
            <a className="text-link" href="#diagnostic">
              See what ships in 10 days <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-note">$3,000 · 10 WORKING DAYS · ONE SENIOR OWNER</p>
        </div>

      </section>

      <section className="signal-strip" aria-label={`${service.name} outcomes`}>
        {service.outcomes.map((outcome, index) => (
          <p key={outcome}><strong>{String(index + 1).padStart(2, "0")}</strong> {outcome}</p>
        ))}
      </section>


      <section className="problem system-service-problem" id="problem">
        <div className="problem-heading">
          <p className="section-kicker">THE EXPENSIVE RECURRING PROBLEM</p>
          <h2>{service.problemHeading}</h2>
          <p>{service.problemLede}</p>
        </div>
        <div className="system-problem-grid">
          {service.problems.map((problem, index) => (
            <article className="problem-card" key={problem.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{problem.title}</h3>
              <p>{problem.copy}</p>
            </article>
          ))}
        </div>
        <p className="problem-diagnosis">
          <span>VISIBLE SYMPTOM</span> {service.symptom}
          <i aria-hidden="true">→</i>
          <span>ROOT CAUSE</span> {service.rootCause}
        </p>
      </section>

      <section className="workflow system-service-workflow" id="system-loop">
        <div className="workflow-heading">
          <p className="section-kicker section-kicker-light">THE {service.systemName.toUpperCase()}</p>
          <h2>Every action leaves state for the next one.</h2>
          <p>The loop defines its input, output, human checkpoint, and return path. Activity stops when the evidence says stop.</p>
        </div>
        <div className="workflow-list">
          {service.stages.map((stage, index) => (
            <article className="workflow-step" key={stage.label}>
              <span className="workflow-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{stage.title}</h3>
                <p>{stage.copy}</p>
                <small>{stage.input} · {stage.output}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities system-service-assets">
        <div className="capability-title">
          <p className="section-kicker">WHAT COMPOUNDS</p>
          <h2>{service.assetHeading}</h2>
        </div>
        <p className="system-service-section-lede">{service.assetLede}</p>
        <div className="system-asset-grid">
          {service.assets.map((asset, index) => (
            <article key={asset.label}>
              <div><span>{String(index + 1).padStart(2, "0")}</span><b>{asset.label}</b></div>
              <h3>{asset.title}</h3>
              <p>{asset.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="problem system-service-rollout" id="package">
        <div className="problem-heading">
          <p className="section-kicker">A TYPICAL FIRST 30 DAYS</p>
          <h2>{service.packageHeading}</h2>
          <p>{service.packageLede}</p>
        </div>
        <div className="system-phase-grid">
          {service.phases.map((phase, index) => (
            <article key={phase.period}>
              <div><span>{String(index + 1).padStart(2, "0")}</span><b>{phase.period}</b></div>
              <h3>{phase.title}</h3>
              <p>{phase.copy}</p>
              <small>{phase.deliverables}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="service-boundaries system-service-boundaries">
        <div className="boundary-card boundary-card-dark">
          <p>GROW &amp; CLOSE OWNS</p>
          <ul>{service.studioOwns.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="boundary-card">
          <p>YOU OWN</p>
          <ul>{service.customerOwns.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section
        className="first-ship system-service-diagnostic"
        id="diagnostic"
      >
        <div className="first-ship-copy">
          <p className="section-kicker">THE OFFER · $3,000 · 10 WORKING DAYS</p>
          <h2>{service.diagnosticHeading}</h2>
          <p>{service.diagnosticCopy}</p>
          <a className="button button-primary" href={service.diagnosticHref}>
            Book a call with the founder
          </a>
          <small>B2B SAAS ONLY · NO INVOICE IF THE FIRST DELIVERABLE MISSES THE RUBRIC</small>
        </div>
        <div className="first-ship-options">
          <p>WHAT SHIPS</p>
          {service.diagnosticIncludes.map((item, index) => (
            <div key={item}><span>{index + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      {skillForService[service.slug] ? (
        <section className="skill-related" id="free-skill">
          <p className="section-kicker">TRY THE METHOD FIRST — FREE</p>
          <h2>
            The {skillForService[service.slug].name} Claude skill uses the same methodology.
            Install it free.
          </h2>
          <Link
            className="button button-dark"
            href={`/skills/${skillForService[service.slug].slug}`}
          >
            Get the free {skillForService[service.slug].name} skill
          </Link>
        </section>
      ) : null}

      <section className="faq" id="faq">
        <div className="faq-heading">
          <p className="section-kicker">QUESTIONS, ANSWERED</p>
          <h2>The useful boundaries.</h2>
        </div>
        <div className="faq-list">
          {service.faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<b aria-hidden="true">+</b></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="closing">
        <p className="section-kicker section-kicker-light">{service.closingKicker}</p>
        <h2>{service.closingHeading}</h2>
        <a className="button button-accent" href={service.diagnosticHref}>
          Book a call with the founder
        </a>
      </section>

      <RelatedLinks
        currentSlug={service.slug}
        skill={skillForService[service.slug]}
      />

      <SiteFooter />
    </main>
  );
}
