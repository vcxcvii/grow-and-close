import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Disclaimer | Grow & Close",
  description:
    "Important information about Grow & Close services, AI-assisted work, results, client responsibilities, and external links.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: true, follow: true },
};

const contactHref =
  "mailto:hello@growandclose.com?subject=Question%20about%20the%20Grow%20%26%20Close%20disclaimer";

export default function DisclaimerPage() {
  return (
    <main className="legal-page" data-brand-system="gc-logic-v1">
      <SiteHeader ctaHref={contactHref} ctaLabel="Ask a question" />

      <section className="legal-hero">
        <nav className="services-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span>Disclaimer</span>
        </nav>
        <p className="eyebrow">TRUST / DISCLAIMER</p>
        <h1>The useful <span>fine print.</span></h1>
        <p>
          Clear expectations make better work. This page explains what the site is,
          how AI systems support the work, and where responsibility sits.
        </p>
        <small>LAST UPDATED / JULY 17, 2026</small>
      </section>

      <section className="legal-content">
        <aside aria-label="Disclaimer sections">
          <p>ON THIS PAGE</p>
          <a href="#general">01 / General information</a>
          <a href="#services">02 / Services and results</a>
          <a href="#ai">03 / AI-assisted work</a>
          <a href="#client">04 / Client responsibility</a>
          <a href="#external">05 / External services</a>
          <a href="#contact">06 / Questions</a>
        </aside>

        <div className="legal-sections">
          <article id="general">
            <span>01</span>
            <h2>General information</h2>
            <p>
              Content on growandclose.com is provided for general information about
              Grow &amp; Close and its services. It is not legal, financial, tax,
              investment, or other regulated professional advice. Obtain appropriate
              independent advice before making decisions that require it.
            </p>
          </article>

          <article id="services">
            <span>02</span>
            <h2>Services and results</h2>
            <p>
              Examples, systems, process descriptions, diagnostics, projections, and
              expected outcomes are illustrative. Commercial performance depends on
              factors including the offer, market, product, data quality, team execution,
              budget, timing, and platform conditions. Grow &amp; Close does not guarantee
              a particular revenue, pipeline, ranking, reach, response, or conversion result.
            </p>
          </article>

          <article id="ai">
            <span>03</span>
            <h2>AI-assisted work</h2>
            <p>
              AI agents and specialist systems may support research, synthesis, writing,
              design, analysis, implementation, quality assurance, and operations. AI
              output can be incomplete or wrong. Material claims, permissions, customer
              evidence, consequential actions, and production releases require the
              review appropriate to the engagement.
            </p>
          </article>

          <article id="client">
            <span>04</span>
            <h2>Client responsibility</h2>
            <p>
              Unless a written agreement says otherwise, clients remain responsible for
              the accuracy and lawful use of information they provide, rights and consent
              for supplied materials, access permissions, regulatory or legal review,
              platform compliance, media spend, and final publication or use of deliverables.
            </p>
          </article>

          <article id="external">
            <span>05</span>
            <h2>External services and links</h2>
            <p>
              This site may link to third-party websites, platforms, tools, or services.
              Grow &amp; Close does not control their content, availability, security,
              pricing, policies, or performance. A link does not imply endorsement unless
              that is stated explicitly.
            </p>
          </article>

          <article id="contact">
            <span>06</span>
            <h2>Questions</h2>
            <p>
              Need a boundary clarified before we work together? Ask directly. Specific
              engagement terms belong in the applicable proposal or written agreement.
            </p>
            <a className="button button-primary" href={contactHref}>Ask about the fine print</a>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
