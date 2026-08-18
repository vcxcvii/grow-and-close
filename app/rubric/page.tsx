import type { Metadata } from "next";
import Link from "next/link";

import { buildBreadcrumbJsonLd, JsonLd } from "../components/json-ld";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { bookingHref } from "../site";
import {
  BLOCKING_CRITERIA,
  QUALITY_CRITERIA,
  RUBRIC_FAQS,
} from "./rubric-content";

export const metadata: Metadata = {
  title: "The Published Rubric | Grow & Close",
  description:
    "The eight criteria the first GTM Reset deliverable is scored against, published before you buy. Five are blocking: if any one fails, there is no invoice.",
  alternates: { canonical: "/rubric" },
  openGraph: {
    title: "The Published Rubric | Grow & Close",
    description:
      "Eight criteria, five of them blocking. If a blocking criterion fails, there is no invoice.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "The Grow & Close delivery rubric" }],
  },
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", item: "https://growandclose.com/" },
  { name: "The rubric", item: "https://growandclose.com/rubric" },
]);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: RUBRIC_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const sprintHref = bookingHref("GTM Reset sprint: the priority I want shipped in 10 days");

export default function RubricPage() {
  return (
    <main className="rubric-page legal-page" data-brand-system="gc-logic-v1">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />
      <SiteHeader ctaHref={sprintHref} ctaLabel="Book a call" />

      <section className="legal-hero">
        <nav className="services-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span>The rubric</span>
        </nav>
        <p className="eyebrow">THE PUBLISHED RUBRIC</p>
        <h1>The standard, <span>before you pay for it.</span></h1>
        <p>
          The first deliverable of a GTM Reset sprint is scored against the eight criteria
          below. Five of them are blocking: if any one of those five fails, there is no
          invoice and you keep the work. This page is the whole standard, published so you
          can judge it before buying rather than after.
        </p>
        <small>SCORED AT HANDOFF · BEFORE ANY INVOICE · EVIDENCE WRITTEN INTO THE SHIP LOG</small>
      </section>

      <section className="rubric-section" id="blocking">
        <div className="rubric-section-heading">
          <p className="section-kicker">FIVE BLOCKING CRITERIA</p>
          <h2>Fail any one of these and there is no invoice.</h2>
          <p>
            Each one is written to be checked rather than argued: a named competitor set, a
            dated baseline, a falsifier present in the document at handoff.
          </p>
        </div>
        <ol className="rubric-list">
          {BLOCKING_CRITERIA.map((criterion) => (
            <li className="rubric-item rubric-item-blocking" key={criterion.number}>
              <div className="rubric-item-topline">
                <span className="rubric-number">{criterion.number}</span>
                <span className="rubric-tag">BLOCKING</span>
              </div>
              <h3>{criterion.title}</h3>
              <p className="rubric-standard">{criterion.standard}</p>
              <dl>
                <dt>How it is checked</dt>
                <dd>{criterion.check}</dd>
                <dt>Why this is the bar</dt>
                <dd>{criterion.because}</dd>
              </dl>
            </li>
          ))}
        </ol>
      </section>

      <section className="rubric-section rubric-section-quality" id="quality">
        <div className="rubric-section-heading">
          <p className="section-kicker">THREE QUALITY CRITERIA</p>
          <h2>Scored and reported. Not tied to the guarantee.</h2>
          <p>
            These change how well the work performs, but they involve judgement. Tying a
            refund to a judgement call would turn the guarantee into an argument.
          </p>
        </div>
        <ol className="rubric-list">
          {QUALITY_CRITERIA.map((criterion) => (
            <li className="rubric-item" key={criterion.number}>
              <div className="rubric-item-topline">
                <span className="rubric-number">{criterion.number}</span>
                <span className="rubric-tag rubric-tag-quality">SCORED</span>
              </div>
              <h3>{criterion.title}</h3>
              <p className="rubric-standard">{criterion.standard}</p>
              <dl>
                <dt>How it is checked</dt>
                <dd>{criterion.check}</dd>
                <dt>Why this is the bar</dt>
                <dd>{criterion.because}</dd>
              </dl>
            </li>
          ))}
        </ol>
      </section>

      <section className="faq" id="faq">
        <div className="faq-heading">
          <p className="section-kicker">HOW THE SCORING WORKS</p>
          <h2>The mechanics.</h2>
        </div>
        <div className="faq-list">
          {RUBRIC_FAQS.map((faq, index) => (
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

      <section className="closing">
        <p className="section-kicker section-kicker-light">JUDGE THE STANDARD FIRST</p>
        <h2>Read the bar. Then bring the priority.</h2>
        <a className="button button-accent" href={sprintHref}>Book a 30-minute call</a>
      </section>

      <SiteFooter />
    </main>
  );
}
