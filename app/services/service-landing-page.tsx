import Link from "next/link";

import { SiteHeader } from "../components/site-header";
import { ServiceCircuit } from "./service-circuit";
import type { ServicePageContent } from "./service-page-types";
import { ServiceScrollCircuit } from "./service-scroll-circuit";

interface ServiceLandingPageProps {
  service: ServicePageContent;
}

export function ServiceLandingPage({ service }: ServiceLandingPageProps) {
  return (
    <main className="system-service-page" data-service={service.slug}>
      <ServiceScrollCircuit variant={service.circuitVariant} />
      <SiteHeader
        activeService={service.slug}
        ctaHref={service.diagnosticHref}
        ctaLabel={service.ctaLabel}
      />

      <section className="hero system-service-hero" id="top">
        <div className="hero-copy">
          <Link className="service-back" href="/#capabilities">
            Service {service.number} / {service.name}
          </Link>
          <h1>{service.heroLead}<span>{service.heroAccent}</span></h1>
          <p className="hero-lede">{service.heroLede}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={service.diagnosticHref}>
              Get your {service.diagnosticName}
            </a>
            <a className="text-link" href="#system-loop">
              See the operating loop <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-note">SENIOR-LED · HUMAN-APPROVED · BUILT TO LEARN</p>
        </div>

        <div
          className="hero-system service-hero-system"
          data-variant={service.circuitVariant}
          data-service-circuit-start
          aria-label={`${service.systemName} operating card`}
        >
          <div className="system-topline">
            <span>{service.systemName.toUpperCase()} / {service.number}</span>
            <span className="live-dot">ACTIVE SYSTEM</span>
          </div>
          <p className="system-label">OPERATING UNIT</p>
          <h2>{service.stages[0].input}</h2>
          <div className="service-hero-path" aria-hidden="true">
            {service.stages.map((stage, index) => (
              <span key={stage.label} data-shape={index % 3}>{String(index + 1).padStart(2, "0")}</span>
            ))}
          </div>
          <div className="service-hero-stage-row">
            <span>{service.stages[0].label}</span>
            <i aria-hidden="true" />
            <b>{service.stages.at(-1)?.label}</b>
          </div>
          <div className="ship-ticket">
            <span>DURABLE RETURN</span>
            <strong>{service.stages.at(-1)?.output}</strong>
            <span>Loop / active</span>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label={`${service.name} outcomes`}>
        {service.outcomes.map((outcome, index) => (
          <p key={outcome}><strong>{String(index + 1).padStart(2, "0")}</strong> {outcome}</p>
        ))}
      </section>

      <ServiceCircuit service={service} />

      <section className="problem system-service-problem" id="problem">
        <div className="problem-heading">
          <p className="section-kicker">THE EXPENSIVE RECURRING PROBLEM</p>
          <h2>{service.problemHeading}</h2>
          <p>{service.problemLede}</p>
        </div>
        <div className="system-problem-grid">
          {service.problems.map((problem, index) => (
            <article className="problem-card" data-service-circuit-target key={problem.title}>
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
            <article className="workflow-step" data-service-circuit-target key={stage.label}>
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
            <article data-service-circuit-target key={asset.label}>
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
            <article data-service-circuit-target key={phase.period}>
              <div><span>{String(index + 1).padStart(2, "0")}</span><b>{phase.period}</b></div>
              <h3>{phase.title}</h3>
              <p>{phase.copy}</p>
              <small>{phase.deliverables}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="service-boundaries system-service-boundaries">
        <div className="boundary-card boundary-card-dark" data-service-circuit-target>
          <p>GROW &amp; CLOSE OWNS</p>
          <ul>{service.studioOwns.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="boundary-card" data-service-circuit-target>
          <p>YOU OWN</p>
          <ul>{service.customerOwns.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section
        className="first-ship system-service-diagnostic"
        data-service-circuit-target
        id="diagnostic"
      >
        <div className="first-ship-copy">
          <p className="section-kicker">START WITH THE {service.diagnosticName.toUpperCase()}</p>
          <h2>{service.diagnosticHeading}</h2>
          <p>{service.diagnosticCopy}</p>
          <a className="button button-primary" href={service.diagnosticHref}>
            Request your {service.diagnosticName}
          </a>
          <small>APPLICATION-GATED · B2B SAAS · ONE USEFUL DIAGNOSIS</small>
        </div>
        <div className="first-ship-options">
          <p>YOUR MAP INCLUDES</p>
          {service.diagnosticIncludes.map((item, index) => (
            <div key={item}><span>{index + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="faq-heading">
          <p className="section-kicker">QUESTIONS, ANSWERED</p>
          <h2>The useful boundaries.</h2>
        </div>
        <div className="faq-list">
          {service.faqs.map((faq, index) => (
            <details data-service-circuit-target key={faq.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<b aria-hidden="true">+</b></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="closing" data-service-circuit-target>
        <p className="section-kicker section-kicker-light">{service.closingKicker}</p>
        <h2>{service.closingHeading}</h2>
        <a className="button button-accent" href={service.diagnosticHref}>
          Get the {service.diagnosticName}
        </a>
      </section>

      <footer className="site-footer">
        <div className="footer-intro">
          <Link className="brand footer-brand" href="/" aria-label="Grow and Close home">
            <span className="brand-glyph" aria-hidden="true"><b>G</b><i /><b>C</b></span>
            <span className="brand-name"><b>GROW</b><b><i>&amp;</i> CLOSE</b></span>
          </Link>
          <p>Senior-led GTM execution for founders and lean B2B SaaS marketing teams.</p>
          <a className="footer-email" href="mailto:hello@growandclose.com">hello@growandclose.com</a>
        </div>
        <div className="footer-links">
          <div><p>THIS SYSTEM</p><a href="#problem">The problem</a><a href="#system-loop">The loop</a><a href="#package">First 30 days</a><a href="#diagnostic">Diagnostic</a></div>
          <div><p>GROW &amp; CLOSE</p><Link href="/">Home</Link><Link href="/#capabilities">All capabilities</Link><Link href="/#pricing">Monthly plans</Link><Link href="/#faq">Studio FAQ</Link></div>
          <div><p>CONTACT</p><a href={service.diagnosticHref}>{service.diagnosticName}</a><a href="mailto:hello@growandclose.com?subject=Grow%20%26%20Close%20fit">Start a conversation</a><a href="mailto:hello@growandclose.com?subject=Grow%20%26%20Close%20question">General questions</a></div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} Grow &amp; Close</p><p>BUILT FOR USEFUL MOMENTUM</p></div>
      </footer>
    </main>
  );
}
