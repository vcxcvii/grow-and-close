import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "./components/json-ld";
import { pricingPlans } from "./components/pricing-plans";
import { serviceOfferings } from "./components/service-offerings";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import LogicNode, { type LogicNodeKind } from "./logic-node";
import { bookingHref } from "./site";

export const metadata: Metadata = {
  title: "GTM Execution Studio for B2B SaaS | Grow & Close",
  description:
    "Senior-led GTM execution for B2B SaaS founders and marketing leaders. Positioning, landing pages, outbound, and campaigns shipped weekly on a monthly subscription.",
  alternates: { canonical: "/" },
};

const motionExamples = [
  {
    number: "01",
    glyph: "and",
    title: "Sharpen the story",
    copy: "Positioning, messaging, homepage narratives, launch angles, and sales stories that make the value obvious.",
  },
  {
    number: "02",
    glyph: "or",
    title: "Launch the motion",
    copy: "Landing pages, outbound sequences, campaign assets, founder content, and enablement, built together so they tell one story.",
  },
  {
    number: "03",
    glyph: "ship",
    title: "Learn and improve",
    copy: "A clear ship log, useful signals, and the next best iteration, so month two starts where month one finished rather than from zero.",
  },
];

const audienceGateKinds: LogicNodeKind[] = ["square", "and", "circle"];
const capabilityGateKinds: LogicNodeKind[] = [
  "square",
  "and",
  "diamond",
  "circle",
  "square",
  "and",
  "diamond",
  "circle",
  "square",
];

const audienceProblems = [
  {
    audience: "FOR FOUNDERS",
    title: "The story lives in your head, so everything waits on you.",
    copy: "You can pitch it perfectly on a call and nobody can write it down. Every page, sequence, and deck queues behind your calendar, and you cannot tell whether the problem is positioning or execution.",
  },
  {
    audience: "FOR CMOs",
    title: "The strategy is signed off. The quarter keeps eating it.",
    copy: "Launches, sales requests, and board reporting consume the team, and the agency you hired sells senior then staffs junior. You do not need another plan. You need one priority finished to the standard you would sign your name to.",
  },
  {
    audience: "FOR HEADS OF MARKETING",
    title: "You own the plan and you are also the assembly line.",
    copy: "One marketer, a founder with opinions, and a sales team filing requests. You spend the week stitching pages, briefs, and sequences together instead of deciding what actually moves pipeline.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Queue the priority",
    copy: "Drop priorities into one shared backlog. We sharpen the outcome, define the finish line, and order the work together.",
    meta: "UNLIMITED BACKLOG · ONE CLEAR ORDER",
  },
  {
    number: "02",
    title: "We ship the motion",
    copy: "One or two priorities stay active. We build the connected strategy, copy, page, campaign, and enablement needed to get them live.",
    meta: "WEEKLY OUTPUT · ASYNC VISIBILITY",
  },
  {
    number: "03",
    title: "Review, learn, repeat",
    copy: "You get a concise walkthrough and ship log. Feedback and real signals shape the next iteration, not a fresh round of agency theater.",
    meta: "FAST FEEDBACK · NO RESET",
  },
];

const faqs = [
  {
    question: "What counts as one active pipeline motion?",
    answer:
      "A bounded initiative with an agreed outcome, deliverables, owner, and finish line, such as launching a dormant-lead reactivation campaign or rebuilding the story for a new segment. Not an endless category such as ‘fix marketing.’",
  },
  {
    question: "Is this an agency, consultancy, or AI service?",
    answer:
      "A senior-led GTM execution studio. You get strategic judgment and direct collaboration, backed by AI workflows we build ourselves for research, drafting, design, analysis, and operations. The tools make us faster; accountability stays human.",
  },
  {
    question: "What does unlimited backlog mean?",
    answer:
      "Add as many priorities as you like. We keep them ordered together, then work through one or two active motions depending on your plan. Revisions remain inside the active motion until its agreed finish line is reached.",
  },
  {
    question: "What is not included?",
    answer:
      "Ad spend, media buying, custom software development, CRM administration, and sales execution. We can shape the plan and build the assets, but your team owns budget, systems of record, and live selling.",
  },
  {
    question: "Can I pause or cancel?",
    answer:
      "Month-to-month, built to earn renewal every cycle. Pause when the backlog is light, or cancel before the next billing cycle if it is not working.",
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

const heroBookingHref = bookingHref(
  "GTM priority I need shipped, and the number it should move",
);

export default function Home() {
  return (
    <main data-brand-system="gc-logic-v1">
      <JsonLd data={faqJsonLd} />
      <SiteHeader ctaHref={heroBookingHref} ctaLabel="Book a call" homeHref="/#top" />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">GTM execution studio for B2B SaaS</p>
          <h1>
            Your GTM plan, shipped.
            <span>One priority at a time.</span>
          </h1>
          <p className="hero-lede">
            For founder-led B2B SaaS teams with no marketing bench. We take one GTM
            priority, ship it end to end, and tie it to one pipeline number: the page,
            the outbound, the content, and the reporting that make it move.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={heroBookingHref}>
              Book a 30-minute call
            </a>
            <a className="text-link" href="#pricing">
              See plans and pricing <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-note">One senior owner. Shipped weekly. Built to renew.</p>
        </div>

        <div className="hero-levers" aria-label="The four levers we work on">
          <p className="hero-levers-label">EVERY MOTION MOVES ONE LEVER</p>
          <ol>
            <li><span>REACH</span><b>Do the right people find you?</b></li>
            <li><span>CAPTURE</span><b>Do they turn into conversations?</b></li>
            <li><span>CONVERT</span><b>Do conversations turn into revenue?</b></li>
            <li><span>COMPOUND</span><b>Do you know what worked, and repeat it?</b></li>
          </ol>
        </div>
      </section>

      <section className="signal-strip" aria-label="Service highlights">
        <p><strong>01</strong> One senior owner</p>
        <p><strong>02</strong> Weekly shipping</p>
        <p><strong>03</strong> Flat monthly fee</p>
        <p><strong>04</strong> Pause anytime</p>
      </section>

      <section className="problem" id="problem">
        <div className="problem-heading">
          <p className="section-kicker">THE REAL BOTTLENECK</p>
          <h2>The gap is not strategy. It is the execution queue with no owner.</h2>
          <p>
            Another plan will not clear it, and five freelancers will produce five
            disconnected assets you then have to integrate yourself. What is missing is
            one senior person who takes a priority from decision to live.
          </p>
        </div>
        <div className="problem-grid" id="problem-logic">
          {audienceProblems.map((problem, index) => (
            <article className="problem-card" key={problem.audience}>
              <span className="problem-audience">{problem.audience}</span>
              <LogicNode kind={audienceGateKinds[index]} />
              <h3>{problem.title}</h3>
              <p>{problem.copy}</p>
            </article>
          ))}
        </div>
        <p className="problem-diagnosis">
          <span>THE VISIBLE SYMPTOM</span> A growing GTM backlog.
          <i aria-hidden="true">→</i>
          <span>THE ACTUAL PROBLEM</span> No owner from strategy through ship.
        </p>
      </section>

      <section className="motions" id="motions">
        <div className="section-intro">
          <p className="section-kicker">WHAT WE OWN</p>
          <h2>One motion. End to end.</h2>
          <p>
            Not a vending machine for disconnected assets. Each engagement starts with
            the pipeline problem, ships the pieces together, and closes with learning.
          </p>
        </div>
        <div className="motion-list">
          {motionExamples.map((motion) => (
            <article className="motion-card" key={motion.number}>
              <span className="motion-number">{motion.number}</span>
              <div>
                <h3>{motion.title}</h3>
                <p>{motion.copy}</p>
              </div>
              <Image
                className="motion-glyph"
                src={`/brand/logic-${motion.glyph}.svg`}
                alt=""
                aria-hidden="true"
                width="180"
                height="96"
                unoptimized
              />
            </article>
          ))}
        </div>
      </section>

      <section className="workflow" id="workflow">
        <div className="workflow-heading">
          <p className="section-kicker section-kicker-light">HOW WE WORK</p>
          <h2>Simple enough to run. Serious enough to keep what it learns.</h2>
          <p>
            One backlog. A fixed amount of active work. Direct feedback. The operating
            model stays deliberately light so more energy reaches the market.
          </p>
        </div>
        <div className="workflow-list">
          {workflow.map((step) => (
            <article className="workflow-step" key={step.number}>
              <span className="workflow-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <small>{step.meta}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="capability-title">
          <p className="section-kicker">START FROM WHAT IS STUCK</p>
          <h2>Find your problem. That is the entry point.</h2>
        </div>
        <div className="capability-grid" id="capability-logic">
          {serviceOfferings.map((capability, index) => (
            <a
              aria-label={`${capability.title} service page`}
              className="capability-item"
              href={capability.href}
              id={`capability-${capability.slug}`}
              key={capability.slug}
            >
              <span className="capability-number">{capability.lever}</span>
              <LogicNode
                kind={capabilityGateKinds[index]}
                order={index < 5 ? index + 1 : 13 - index}
              />
              <p>{capability.problem}</p>
              <small>{capability.title}. {capability.description}</small>
            </a>
          ))}
        </div>
        <p className="capability-note">
          Both plans access the same capabilities. You choose capacity, not a restricted
          service menu.
        </p>
      </section>

      <section className="operating-model" id="studio">
        <div className="operator-copy">
          <p className="section-kicker section-kicker-light">HOW THE STUDIO RUNS</p>
          <h2>One senior owner. A decade of B2B SaaS behind every call.</h2>
          <p>
            Founders, CMOs, and Heads of Marketing work directly with Varun Choraria,
            former marketing leader at GTM Buddy. Every motion is guided by experienced
            B2B SaaS judgment and sped up by AI workflows we build and run ourselves for
            research, writing, design, analysis, and operations.
          </p>
          <p>
            Judge the bar before you pay for it: the{" "}
            <Link href="/skills">free Claude skills</Link> we publish and this site are
            the work. Both were built the way we&apos;d build yours.
          </p>
        </div>
        <div className="operator-diagram" aria-label="Senior operator coordinating specialist systems">
          <div className="operator-core">
            <span>YOUR SENIOR OWNER</span>
            <strong>VARUN</strong>
            <small>Strategy · taste · accountability</small>
          </div>
          <div className="agent-grid">
            <span>RESEARCH</span>
            <span>WRITING</span>
            <span>DESIGN</span>
            <span>ANALYSIS</span>
            <span>OPERATIONS</span>
            <span>QA</span>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="pricing-heading">
          <p className="section-kicker">SIMPLE MONTHLY CAPACITY</p>
          <h2>Pick your shipping speed.</h2>
          <p>Same senior owner. Same nine services. Different parallel capacity.</p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <article
              className={plan.featured ? "price-card price-card-featured" : "price-card"}
              key={plan.id}
            >
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
              <a
                className={plan.featured ? "button button-accent" : "button button-dark"}
                href={bookingHref(plan.ctaTopic)}
              >
                Book a call about {plan.label}
              </a>
            </article>
          ))}
        </div>
        <p className="pricing-footnote">
          Need a fixed starting point? Ask about the two-week positioning and messaging sprint.
        </p>
      </section>

      <section className="first-ship" id="first-ship">
        <div className="first-ship-copy">
          <p className="section-kicker">LOW-RISK START</p>
          <h2>Bring one priority. We will scope it on the call.</h2>
          <p>
            Thirty minutes, no deck. You leave with the priority scoped, the metric it
            should move, and a straight answer on whether we are the right people to
            ship it. If we are not, we will say so.
          </p>
          <a className="button button-primary" href={bookingHref("One GTM priority shipped free: our biggest bottleneck")}>
            Book a call with the founder
          </a>
          <small>B2B SaaS only · $3,000 fixed-scope sprint · month-to-month after</small>
        </div>
        <div className="first-ship-options">
          <p>MOST CALLS START HERE</p>
          <a href={bookingHref("Free GTM priority: homepage story")}>
            <span>A</span><strong>Homepage story</strong><small>Rewrite one decisive section.</small><i aria-hidden="true">↗</i>
          </a>
          <a href={bookingHref("Free GTM priority: outbound sequence")}>
            <span>B</span><strong>Outbound sequence</strong><small>Build one focused sequence.</small><i aria-hidden="true">↗</i>
          </a>
          <a href={bookingHref("Free GTM priority: campaign activation")}>
            <span>C</span><strong>Campaign activation</strong><small>Turn one brief into a live-ready plan.</small><i aria-hidden="true">↗</i>
          </a>
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

      <section className="closing" id="closing">
        <p className="section-kicker section-kicker-light">READY WHEN THE BACKLOG IS</p>
        <h2>Stop carrying the same priority into next quarter.</h2>
        <a className="button button-accent" href="#first-ship">Book a call with the founder</a>
      </section>

      <SiteFooter id="contact" pageEndId="page-end" />
    </main>
  );
}
