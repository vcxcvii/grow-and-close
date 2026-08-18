import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "./components/json-ld";
import { pricingPlans } from "./components/pricing-plans";
import { serviceOfferings } from "./components/service-offerings";
import { SiteFooter } from "./components/site-footer";
import { FounderPortrait } from "./components/founder-portrait";
import { SiteHeader } from "./components/site-header";
import LogicNode, { type LogicNodeKind } from "./logic-node";
import { bookingHref } from "./site";

export const metadata: Metadata = {
  title: "Your GTM Backlog, Decided and Shipped | B2B SaaS GTM Studio",
  description:
    "B2B SaaS GTM studio for founder-led teams with no marketing bench. Positioning, landing pages, outbound, founder-led content, sales enablement and GTM dashboards: one motion a month, decided, built end to end, and measured against qualified pipeline created.",
  alternates: { canonical: "/" },
};

const motionExamples = [
  {
    number: "01",
    glyph: "and",
    title: "Narrow the field",
    copy: "Positioning, messaging, homepage narrative, launch angle. Not more options to weigh. One argument, decided, that the rest of the work has to serve.",
  },
  {
    number: "02",
    glyph: "or",
    title: "Ship the one that counts",
    copy: "Landing page, outbound sequence, campaign assets, founder content, enablement. Built together, because they are arguing the same case to the same buyer.",
  },
  {
    number: "03",
    glyph: "ship",
    title: "Prove it moved the number",
    copy: "A ship log, the signal it produced, and the next iteration. Month two starts where month one finished rather than from zero.",
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
    copy: "Launches, sales requests, and board reporting consume the team, and the partner you hired brings you options instead of a recommendation. You do not need another plan. You need one priority decided and finished to a standard you would sign your name to.",
  },
  {
    audience: "FOR HEADS OF MARKETING",
    title: "You own the plan and you are also the assembly line.",
    copy: "One marketer, a founder with opinions, and a sales team filing requests. You spend the week stitching pages, briefs, and sequences together instead of deciding what actually creates qualified pipeline.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Name every option",
    copy: "Put everything you could do into one shared list. We rank it against the number you are trying to move, then agree what dies this month.",
    meta: "EVERY OPTION NAMED · ONE CHOSEN",
  },
  {
    number: "02",
    title: "We ship the one that survives",
    copy: "One motion stays in flight, two on Pipeline Team. We build the strategy, copy, page, campaign, and enablement it needs to go live.",
    meta: "VISIBLE PROGRESS · ASYNC BY DEFAULT",
  },
  {
    number: "03",
    title: "Review, learn, repeat",
    copy: "You get a concise walkthrough and a ship log. Real signal shapes the next decision, not a fresh round of agency theater.",
    meta: "FAST FEEDBACK · NO RESET",
  },
];

const faqs = [
  {
    question: "What counts as one motion?",
    answer:
      "A bounded initiative with an agreed outcome, deliverables, an owner, and a finish line, such as launching a dormant-lead reactivation campaign or rebuilding the story for a new segment. Not an open-ended category such as ‘fix marketing.’",
  },
  {
    question: "Is this an agency, consultancy, or AI service?",
    answer:
      "None of the three. An agency sells you production capacity and a consultancy sells you a recommendation you still have to execute. You are buying the decision and the finished work behind it from one person, backed by AI workflows we build ourselves for research, drafting, design, analysis, and operations. The tools make the production fast; the judgment stays human and named.",
  },
  {
    question: "Can I add as many priorities as I want?",
    answer:
      "Yes, and we will refuse to work on most of them at once. Add anything to the list. We keep exactly one motion in flight, two on Pipeline Team, because the limit is the point: work in progress is what turns a decision back into a queue. Revisions stay inside the live motion until its agreed finish line.",
  },
  {
    question: "What is not included?",
    answer:
      "Ad spend, media buying, custom software development, CRM administration, and sales execution. We can shape the plan and build the assets, but your team owns budget, systems of record, and live selling.",
  },
  {
    question: "Can I pause or cancel?",
    answer:
      "Month-to-month, built to earn renewal every cycle. Pause when the list is light, or cancel before the next billing cycle if it is not working.",
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
  "The GTM decision I keep postponing, and the pipeline it should create",
);

export default function Home() {
  return (
    <main data-brand-system="gc-logic-v1">
      <JsonLd data={faqJsonLd} />
      <SiteHeader ctaHref={heroBookingHref} ctaLabel="Book a call" homeHref="/#top" />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">B2B SaaS GTM studio</p>
          <h1>
            Your GTM backlog,
            <span>decided and shipped.</span>
          </h1>
          <p className="hero-lede">
            For founder-led B2B SaaS teams with no marketing bench. Positioning,
            landing pages, outbound, founder-led content, sales enablement, GTM
            dashboards: we take the one that matters this month, make the call, build it
            end to end, and measure it against one number, qualified pipeline created.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={heroBookingHref}>
              Book a 30-minute call
            </a>
            <a className="text-link" href="#pricing">
              See plans and pricing <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-note">
            One motion at a time. One number to move. Cancel whenever.
          </p>
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
        <p><strong>01</strong> One decider</p>
        <p><strong>02</strong> One number</p>
        <p><strong>03</strong> One price, no hours</p>
        <p><strong>04</strong> Pause anytime</p>
      </section>

      <section className="problem" id="problem">
        <div className="problem-heading">
          <p className="section-kicker">THE REAL BOTTLENECK</p>
          <h2>The shortage is not capacity. It is that nothing gets ruled out.</h2>
          <p>
            Two years ago the constraint was hands. Now anyone can produce ten variants of
            anything in an afternoon, which means the list of things you could be doing
            grows faster than the week. Another plan will not clear it, and five
            freelancers will hand you five disconnected assets to integrate yourself. What
            is missing is somebody who kills nine of the ten options and is accountable
            for the one that ships.
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
          <span>THE OLD WAY: BUY MORE PRODUCTION</span> Another agency, another
          freelancer, another agent.
          <i aria-hidden="true">→</i>
          <span>THE NEW WAY: BUY THE DECISION</span> One person narrows, chooses, and
          closes, against qualified pipeline created.
        </p>
      </section>

      <section className="motions" id="motions">
        <div className="section-intro">
          <p className="section-kicker">WHAT WE OWN</p>
          <h2>One motion. End to end.</h2>
          <p>
            Not a vending machine for disconnected assets. Each engagement starts with the
            pipeline problem, ships the pieces together, and closes with what it taught
            you.
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
            One list. A hard limit on what is in flight. Direct feedback. The operating
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
          Pipeline One and Pipeline Team reach the same nine entry points. You choose how
          much runs in parallel, not a restricted service menu.
        </p>
      </section>

      <section className="operating-model" id="studio">
        <div className="operator-copy">
          <p className="section-kicker section-kicker-light">HOW THE STUDIO RUNS</p>
          <h2>One person makes the call. A decade of B2B SaaS behind it.</h2>
          <p>
            Founders, CMOs, and Heads of Marketing work directly with Varun Choraria,
            former marketing leader at GTM Buddy. Every motion is decided by experienced
            B2B SaaS judgment and sped up by AI workflows we build and run ourselves for
            research, writing, design, analysis, and operations.
          </p>
          <p>
            Judge the bar before you pay for it: the{" "}
            <Link href="/skills">free Claude skills</Link> we publish, the{" "}
            <Link href="/rubric">rubric this work is scored against</Link>, and this site
            are the work. All three were built the way we&apos;d build yours.
          </p>
        </div>
        <div className="operator-diagram" aria-label="One decision maker coordinating specialist systems">
          <div className="operator-core">
            <FounderPortrait size={104} />
            <span>WHO DECIDES</span>
            <strong>VARUN CHORARIA</strong>
            <small>Judgment · taste · accountability</small>
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
          <p>Same decider. Same nine entry points. Different parallel capacity.</p>
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
          <h2>Bring the decision you keep postponing.</h2>
          <p>
            Thirty minutes, no deck. You leave with the motion scoped, the qualified
            pipeline it should create, and a straight answer on whether we are the right
            people to ship it. If we are not, we will say so.
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
        <p className="section-kicker section-kicker-light">READY WHEN THE LIST IS</p>
        <h2>Stop carrying the same undecided priority into next quarter.</h2>
        <a className="button button-accent" href="#first-ship">Book a call with the founder</a>
      </section>

      <SiteFooter id="contact" pageEndId="page-end" />
    </main>
  );
}
