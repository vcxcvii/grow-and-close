import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "../components/json-ld";
import { pricingPlans } from "../components/pricing-plans";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { bookingHref } from "../site";
import { RelatedLinks } from "../components/related-links";

export const metadata: Metadata = {
  title: "Pricing | GTM Execution for B2B SaaS | Grow & Close",
  description:
    "Grow & Close pricing: a fixed-scope GTM Reset sprint at $3,000, and monthly execution from $3,500. One senior owner, weekly shipping, month-to-month.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing | Grow & Close",
    description:
      "A $3,000 fixed-scope GTM sprint, or monthly execution from $3,500. Month-to-month, built to renew.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Grow & Close pricing" }],
  },
};

const sprintHref = bookingHref("GTM Reset sprint: the priority I want shipped in 10 days");

const faqs = [
  {
    question: "What is one active motion?",
    answer:
      "A bounded initiative with an agreed outcome, deliverables, owner, finish line, and one metric lever. Rebuilding the homepage story for a new segment is a motion. Fixing marketing is not.",
  },
  {
    question: "Why start with a sprint instead of a subscription?",
    answer:
      "A sprint is a smaller decision with a dated finish line. You see the standard of work on your own problem, on one priority, before committing to anything monthly.",
  },
  {
    question: "What happens if the first deliverable is weak?",
    answer:
      "The first deliverable is scored against eight published criteria at growandclose.com/rubric, which you can read before you buy. Five of the eight are blocking: if any one of those fails, there is no invoice and you keep the work.",
  },
  {
    question: "Is there a contract or a minimum term?",
    answer:
      "No minimum term on the subscription. Pause when the backlog is light, or cancel before the next billing cycle.",
  },
  {
    question: "What is not included at any price?",
    answer:
      "Ad spend and media buying, custom software development, CRM administration, and live selling. We shape the plan and build the assets. Your team owns budget, systems of record, and the sales conversation.",
  },
  {
    question: "How do payments work?",
    answer:
      "Invoiced in USD, payable by bank transfer or Wise. Sprints are invoiced 50% at kickoff and 50% at delivery. Subscriptions are invoiced monthly in advance.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://growandclose.com/" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://growandclose.com/pricing" },
  ],
};

export default function PricingPage() {
  return (
    <main className="pricing-page" data-brand-system="gc-logic-v1">
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <SiteHeader ctaHref={sprintHref} ctaLabel="Book a call" />

      <section className="legal-hero">
        <nav className="services-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span>Pricing</span>
        </nav>
        <p className="eyebrow">PRICING</p>
        <h1>Start with one <span>shipped priority.</span></h1>
        <p>
          Two ways to work together. A fixed-scope sprint when you have one thing that
          needs to move, and a monthly engagement when the queue never empties. Same
          senior owner either way.
        </p>
        <small>PRICES IN USD · MONTH-TO-MONTH · PAUSE ANY MONTH</small>
      </section>

      <section className="pricing" id="plans">
        <div className="pricing-grid pricing-grid-three">
          <article className="price-card price-card-featured">
            <div className="popular-tag">START HERE</div>
            <div className="price-topline">
              <span>GTM RESET</span>
              <span>10 WORKING DAYS</span>
            </div>
            <h3>$3,000<span>/sprint</span></h3>
            <p className="price-description">
              One GTM priority, scoped on the call, shipped to a dated finish line and
              tied to one metric lever.
            </p>
            <ul>
              <li>Positioning and message audit</li>
              <li>One rebuilt asset: homepage story, landing page, or outbound sequence</li>
              <li>The measurement plan for the lever it moves</li>
              <li>Ship log and the execution circuit that produced it</li>
              <li>90 minutes of your time in total</li>
              <li>
                No invoice if the first deliverable misses the{" "}
                <Link href="/rubric">published rubric</Link>
              </li>
            </ul>
            <a className="button button-accent" href={sprintHref}>Book a call about the sprint</a>
          </article>

          {pricingPlans.map((plan) => (
            <article className="price-card" key={plan.id}>
              {plan.badge ? <div className="popular-tag">{plan.badge}</div> : null}
              <div className="price-topline">
                <span>{plan.name}</span>
                <span>{plan.topline}</span>
              </div>
              <h3>{`$${plan.price.toLocaleString("en-US")}`}<span>/month</span></h3>
              <p className="price-description">{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className="button button-dark" href={bookingHref(plan.ctaTopic)}>
                Book a call about {plan.label}
              </a>
            </article>
          ))}
        </div>
        <p className="pricing-footnote">
          Pipeline One and Pipeline Team both access all nine Grow &amp; Close services. You
          are choosing how many priorities move at once, not a restricted menu. See{" "}
          <Link href="/services">what each service covers</Link>.
        </p>
      </section>

      <section className="problem" id="how-to-choose">
        <div className="problem-heading">
          <p className="section-kicker">HOW TO CHOOSE</p>
          <h2>Pick by how full the queue is.</h2>
          <p>
            The GTM Reset sprint answers one question well. A Pipeline subscription keeps
            answering them as they arrive. Nobody needs to start at the top.
          </p>
        </div>
        <div className="problem-grid">
          <article className="problem-card">
            <span className="problem-audience">ONE THING IS STUCK</span>
            <h3>Take the sprint.</h3>
            <p>
              Your homepage does not land, or one outbound motion is not converting. Ten
              days, one artifact, one number to watch afterwards.
            </p>
          </article>
          <article className="problem-card">
            <span className="problem-audience">THE QUEUE NEVER EMPTIES</span>
            <h3>Take Pipeline One.</h3>
            <p>
              There is always a next priority and no one senior to own it end to end.
              One motion ships every week, in order.
            </p>
          </article>
          <article className="problem-card">
            <span className="problem-audience">TWO FRONTS AT ONCE</span>
            <h3>Take Pipeline Team.</h3>
            <p>
              A launch and a demand motion have to run in parallel, and you do not want
              to manage two vendors to do it.
            </p>
          </article>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="faq-heading">
          <p className="section-kicker">QUESTIONS, ANSWERED</p>
          <h2>The useful fine print.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
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
        <p className="section-kicker section-kicker-light">NO PITCH DECK, ONE CALL</p>
        <h2>Bring the priority. We will scope it live.</h2>
        <a className="button button-accent" href={sprintHref}>Book a 30-minute call</a>
      </section>

      <RelatedLinks />

      <SiteFooter />
    </main>
  );
}
