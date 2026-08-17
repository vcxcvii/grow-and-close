import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { CONTACT_EMAIL, bookingHref } from "../site";

export const metadata: Metadata = {
  title: "Terms | Grow & Close",
  description:
    "Terms for using growandclose.com and for engagements with Grow & Close: scope, payment, revisions, intellectual property, confidentiality, and cancellation.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const contactHref = bookingHref("Question about the Grow & Close terms");

export default function TermsPage() {
  return (
    <main className="legal-page" data-brand-system="gc-logic-v1">
      <SiteHeader ctaHref={contactHref} ctaLabel="Ask a question" />

      <section className="legal-hero">
        <nav className="services-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span>Terms</span>
        </nav>
        <p className="eyebrow">TRUST / TERMS</p>
        <h1>How engagements <span>actually work.</span></h1>
        <p>
          These terms cover use of this site and the default shape of an engagement. A
          signed proposal or statement of work overrides anything here.
        </p>
        <small>LAST UPDATED / AUGUST 17, 2026</small>
      </section>

      <section className="legal-content">
        <aside aria-label="Terms sections">
          <p>ON THIS PAGE</p>
          <a href="#site">01 / Using this site</a>
          <a href="#scope">02 / Scope and finish lines</a>
          <a href="#payment">03 / Fees and payment</a>
          <a href="#revisions">04 / Revisions</a>
          <a href="#ip">05 / Intellectual property</a>
          <a href="#confidentiality">06 / Confidentiality</a>
          <a href="#ai">07 / AI-assisted delivery</a>
          <a href="#cancellation">08 / Pause and cancellation</a>
          <a href="#liability">09 / Liability</a>
        </aside>

        <div className="legal-sections">
          <article id="site">
            <span>01</span>
            <h2>Using this site</h2>
            <p>
              Content on growandclose.com is published for information. You may read,
              quote with attribution, and share it. You may not republish it as your own.
              Free skills and tools are provided as-is under their own licence in their
              repository.
            </p>
          </article>

          <article id="scope">
            <span>02</span>
            <h2>Scope and finish lines</h2>
            <p>
              Every engagement names its outcome, deliverables, finish line, and the
              metric lever it targets before work starts. Sprints are fixed scope for a
              fixed fee. Monthly plans run one or two active motions at a time, drawn from
              a backlog you prioritise. Work outside the agreed scope is quoted separately
              rather than absorbed silently.
            </p>
          </article>

          <article id="payment">
            <span>03</span>
            <h2>Fees and payment</h2>
            <p>
              Fees are quoted in USD and invoiced by bank transfer or Wise. Sprints are
              invoiced 50% at kickoff and 50% on delivery. Monthly plans are invoiced in
              advance for the coming month. Invoices are due within 7 days. Work may pause
              on overdue invoices.
            </p>
          </article>

          <article id="revisions">
            <span>04</span>
            <h2>Revisions</h2>
            <p>
              Revisions continue inside an active motion until the agreed finish line is
              met. A change of direction after the finish line is a new motion, not a
              revision, and is scoped as such.
            </p>
          </article>

          <article id="ip">
            <span>05</span>
            <h2>Intellectual property</h2>
            <p>
              You own the delivered work once the related invoice is paid: copy, pages,
              assets, and documentation created for you. Grow &amp; Close retains
              ownership of its own methods, templates, rubrics, skills, and tooling, and
              may reuse them. Published work may be referenced as a case study only with
              your written approval.
            </p>
          </article>

          <article id="confidentiality">
            <span>06</span>
            <h2>Confidentiality</h2>
            <p>
              Non-public information shared during an engagement stays confidential, and
              is never named in another client deliverable or in public content without
              permission. Your own NDA can replace this clause.
            </p>
          </article>

          <article id="ai">
            <span>07</span>
            <h2>AI-assisted delivery</h2>
            <p>
              Delivery uses AI systems for research, drafting, design, analysis, and
              operations. Nothing reaches your buyers without human review. Claims,
              statistics, and customer language are checked against sources before
              release, and accountability for the output stays human.
            </p>
          </article>

          <article id="cancellation">
            <span>08</span>
            <h2>Pause and cancellation</h2>
            <p>
              Monthly plans can be paused or cancelled before the next billing cycle, with
              no minimum term. Sprints can be cancelled before kickoff for a full refund
              of anything paid. Once a sprint is underway, the kickoff instalment covers
              work already done.
            </p>
          </article>

          <article id="liability">
            <span>09</span>
            <h2>Liability</h2>
            <p>
              Commercial results depend on factors outside our control, including product,
              market, pricing, budget, and your team execution. No particular revenue,
              pipeline, ranking, or conversion outcome is guaranteed. Liability is limited
              to the fees paid for the engagement in question. See the{" "}
              <Link href="/disclaimer">disclaimer</Link> for detail, and the{" "}
              <Link href="/privacy">privacy policy</Link> for data handling. Questions to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
