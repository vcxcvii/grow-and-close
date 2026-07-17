import type { Metadata } from "next";
import Image from "next/image";
import { serviceOfferings } from "./components/service-offerings";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import LogicNode, { type LogicNodeKind } from "./logic-node";
import MotionDemo from "./motion-demo";
import ScrollCircuit from "./scroll-circuit";

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
    copy: "Landing pages, outbound sequences, campaign assets, founder content, and enablement built as one connected system.",
  },
  {
    number: "03",
    glyph: "ship",
    title: "Learn and improve",
    copy: "A clear ship log, useful signals, and the next best iteration, so execution compounds instead of resetting every month.",
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
    title: "Marketing still lives in your head.",
    copy: "Every campaign waits for you to brief it, review it, and connect the pieces. The business needs founder context without making you the production layer.",
  },
  {
    audience: "FOR CMOs",
    title: "The strategy is clear. Capacity is not.",
    copy: "Your roadmap keeps losing to launches, sales requests, and quarter-end fire drills. The problem is not another plan. It is senior execution that can absorb a priority end to end.",
  },
  {
    audience: "FOR HEADS OF MARKETING",
    title: "You own the plan and the assembly line.",
    copy: "You are too senior to spend the week stitching pages, sequences, and briefs together, but too under-resourced to hand the whole motion to one accountable owner.",
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
    copy: "You get a concise walkthrough and ship log. Feedback and real signals shape the next iteration, not a fresh round of agency theatre.",
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
      "A senior-led GTM execution studio. You get strategic judgment and direct collaboration, backed by specialist AI systems for research, drafting, design, analysis, and operations. The systems increase velocity; accountability stays human.",
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
      "Yes. No long contract. Pause when the backlog is light or cancel before the next billing cycle. The model should earn renewal through useful work, not lock-in.",
  },
];

export default function Home() {
  return (
    <main data-brand-system="gc-logic-v1">
      <ScrollCircuit />
      <SiteHeader ctaHref="/#first-ship" ctaLabel="Ship one free" homeHref="/#top" />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">GTM execution studio for B2B SaaS</p>
          <h1>
            Your GTM backlog,
            <span>shipped.</span>
          </h1>
          <p className="hero-lede">
            A senior execution pod for founders, CMOs, and Heads of Marketing who know
            what needs to move, but lack the capacity to turn it into one coherent, live
            pipeline motion.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#first-ship">
              Get one GTM priority shipped free
            </a>
            <a className="text-link" href="#pricing">
              See monthly plans <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-note">Senior-led. AI-accelerated. No long contract.</p>
        </div>

        <MotionDemo />
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
          <h2>The work between the plan and the pipeline has no clear owner.</h2>
          <p>
            More ideas will not fix it. More disconnected freelancers will not fix it.
            The missing layer is senior, cross-functional execution with one finish line.
          </p>
        </div>
        <div className="problem-grid" id="problem-logic">
          {audienceProblems.map((problem, index) => (
            <article className="problem-card" data-circuit-target key={problem.audience}>
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
            <article className="motion-card" data-circuit-target key={motion.number}>
              <span className="motion-number">{motion.number}</span>
              <div>
                <h3>{motion.title}</h3>
                <p>{motion.copy}</p>
              </div>
              <Image
                className="motion-glyph"
                data-circuit-anchor
                data-circuit-kind={motion.glyph === "or" ? "diamond" : motion.glyph === "ship" ? "circle" : "square"}
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
          <h2>Simple enough to run. Serious enough to compound.</h2>
          <p>
            One backlog. A fixed amount of active work. Direct feedback. The operating
            model stays deliberately light so more energy reaches the market.
          </p>
        </div>
        <div className="workflow-list">
          {workflow.map((step, index) => (
            <article className="workflow-step" data-circuit-target key={step.number}>
              <span
                className="workflow-number"
                data-circuit-anchor
                data-circuit-kind={index === 1 ? "diamond" : index === 2 ? "circle" : "square"}
              >
                {step.number}
              </span>
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
          <p className="section-kicker">THE CAPABILITY LAYER</p>
          <h2>Everything needed to move one priority forward.</h2>
        </div>
        <div className="capability-grid" id="capability-logic">
          {serviceOfferings.map((capability, index) => (
            <a
              aria-label={`${capability.title} service page (opens in a new tab)`}
              className="capability-item"
              data-circuit-target
              href={capability.href}
              id={`capability-${capability.slug}`}
              key={capability.slug}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="capability-number">{capability.number}</span>
              <LogicNode
                kind={capabilityGateKinds[index]}
                order={index < 5 ? index + 1 : 13 - index}
              />
              <p>{capability.title}</p>
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
          <h2>Senior judgment upfront. Specialist systems underneath.</h2>
          <p>
            Founders, CMOs, and Heads of Marketing work directly with Varun Choraria,
            former marketing leader at GTM Buddy. Every motion is guided by experienced
            B2B SaaS judgment and accelerated by specialist AI systems for research,
            writing, design, analysis, and operations.
          </p>
          <p>
            Today, that creates the output of a focused pod. Tomorrow, the same operating
            model expands into a studio of GTM engineers and marketers.
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
          <p>Same senior ownership. Same capability layer. Different parallel capacity.</p>
        </div>
        <div className="pricing-grid">
          <article className="price-card">
            <div className="price-topline">
              <span>PIPELINE ONE</span>
              <span>1 ACTIVE MOTION</span>
            </div>
            <h3>$3,500<span>/month</span></h3>
            <p className="price-description">
              For a founder or lean Head of Marketing who needs one important GTM
              priority moving every week.
            </p>
            <ul>
              <li>One active pipeline motion</li>
              <li>Unlimited prioritized backlog</li>
              <li>Weekly shipping + ship log</li>
              <li>Slack collaboration</li>
              <li>Monthly priority planning</li>
              <li>Pause or cancel monthly</li>
            </ul>
            <a className="button button-dark" href="mailto:hello@growandclose.com?subject=Pipeline%20One%20application">
              Apply for Pipeline One
            </a>
          </article>

          <article className="price-card price-card-featured">
            <div className="popular-tag">FOR SMALL GTM TEAMS</div>
            <div className="price-topline">
              <span>PIPELINE TEAM</span>
              <span>2 ACTIVE MOTIONS</span>
            </div>
            <h3>$7,000<span>/month</span></h3>
            <p className="price-description">
              For CMOs and small marketing teams that need two workstreams moving
              without adding another layer of management.
            </p>
            <ul>
              <li>Two parallel pipeline motions</li>
              <li>Unlimited prioritized backlog</li>
              <li>Weekly operating review</li>
              <li>Reporting dashboard</li>
              <li>Multi-stakeholder coordination</li>
              <li>Monthly GTM planning</li>
            </ul>
            <a className="button button-accent" href="mailto:hello@growandclose.com?subject=Pipeline%20Team%20application">
              Apply for Pipeline Team
            </a>
          </article>
        </div>
        <p className="pricing-footnote">
          Need a fixed starting point? Ask about the two-week positioning and messaging sprint.
        </p>
      </section>

      <section className="first-ship" id="first-ship">
        <div className="first-ship-copy">
          <p className="section-kicker">LOW-RISK START</p>
          <h2>Give us one GTM priority. We&apos;ll ship it free.</h2>
          <p>
            If there&apos;s a fit, we&apos;ll audit one GTM problem and produce one useful,
            live-ready asset in week one. No generic deck. No obligation to continue.
          </p>
          <a className="button button-primary" href="mailto:hello@growandclose.com?subject=Ship%20one%20GTM%20priority%20free&body=Company%3A%0AWebsite%3A%0ABiggest%20GTM%20bottleneck%3A">
            Get one GTM priority shipped free
          </a>
          <small>Application-gated · B2B SaaS only · limited weekly capacity</small>
        </div>
        <div className="first-ship-options">
          <p>CHOOSE ONE STARTING POINT</p>
          <a href="mailto:hello@growandclose.com?subject=Free%20GTM%20priority%3A%20Homepage%20story">
            <span>A</span><strong>Homepage story</strong><small>Rewrite one decisive section.</small><i aria-hidden="true">↗</i>
          </a>
          <a href="mailto:hello@growandclose.com?subject=Free%20GTM%20priority%3A%20Outbound%20sequence">
            <span>B</span><strong>Outbound sequence</strong><small>Build one focused sequence.</small><i aria-hidden="true">↗</i>
          </a>
          <a href="mailto:hello@growandclose.com?subject=Free%20GTM%20priority%3A%20Campaign%20activation">
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
        <h2>Stop carrying GTM work into next week.</h2>
        <a className="button button-accent" href="#first-ship">Get one GTM priority shipped free</a>
      </section>

      <SiteFooter id="contact" pageEndId="page-end" />
    </main>
  );
}
