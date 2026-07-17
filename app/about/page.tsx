import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { ServiceScrollCircuit } from "../services/service-scroll-circuit";

export const metadata: Metadata = {
  title: "About Grow & Close | The Self-Driving GTM Company",
  description:
    "Grow & Close is building the self-driving agentic GTM company for the AI era: agent-run execution with human-governed judgment.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Grow & Close | The Self-Driving GTM Company",
    description:
      "Humans set the commercial destination. Agents gather context, run the work, verify the result, and learn.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Grow & Close, the self-driving GTM company",
      },
    ],
    type: "website",
    url: "https://growandclose.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Grow & Close | The Self-Driving GTM Company",
    description: "Agent-run execution. Human-governed judgment.",
    images: ["/og.png"],
  },
};

const mailtoHref =
  "mailto:hello@growandclose.com?subject=Give%20the%20GTM%20system%20a%20destination&body=Company%3A%0AWebsite%3A%0AThe%20commercial%20destination%3A";

const agentLoop = [
  { number: "01", title: "Goal", copy: "A human names the commercial destination and constraints." },
  { number: "02", title: "Context", copy: "The system gathers customer, market, product, and performance state." },
  { number: "03", title: "Plan", copy: "A manager agent decomposes the motion and routes specialist work." },
  { number: "04", title: "Build", copy: "Agents research, write, design, implement, and operate in parallel." },
  { number: "05", title: "Verify", copy: "Checks test the claim, artifact, route, behavior, and finish line." },
  { number: "06", title: "Ship", copy: "Reversible work moves. Material actions pass the right human gate." },
  { number: "07", title: "Learn", copy: "Evidence returns to shared memory and changes the next decision." },
] as const;

const autonomyLedger = [
  {
    status: "RUNNING",
    label: "AGENT-RUN NOW",
    title: "The work already moves through agents.",
    items: [
      "Website research, positioning, copy, interface, code, and QA",
      "Specialist GTM workflows for research, creation, and analysis",
      "One persistent context trail from brief through finished artifact",
      "Direct production of pages, campaigns, content, and operating assets",
    ],
  },
  {
    status: "GATED",
    label: "HUMAN AUTHORITY",
    title: "Judgment stays where consequence lives.",
    items: [
      "Company direction, commercial priorities, and taste",
      "Customer claims, consent, permissions, and source approval",
      "Spend, access, irreversible actions, and material tradeoffs",
      "Production release and final accountability",
    ],
  },
  {
    status: "BUILDING",
    label: "NEXT AUTONOMY LAYER",
    title: "Low-risk loops should need less supervision over time.",
    items: [
      "Always-on ingestion of market, customer, sales, and performance signals",
      "Event-triggered GTM work against explicit goals and permissions",
      "Benchmarked workflows that improve from verified outcomes",
      "Governed autonomy that expands only when the evidence earns it",
    ],
  },
] as const;

const principles = [
  ["01", "Outcomes over activity", "The system gets a destination, not a pile of tasks."],
  ["02", "Context is infrastructure", "Generation without durable context is just faster forgetting."],
  ["03", "Evidence before confidence", "Every loop needs a finish line and a way to check the result."],
  ["04", "Autonomy follows reversibility", "Low-risk work can move faster. Consequential work earns a gate."],
  ["05", "Humans own consequence", "Agents can execute the work. People remain responsible for the choice."],
] as const;

export default function AboutPage() {
  return (
    <main className="about-page" data-brand-system="gc-logic-v1" data-service="about">
      <ServiceScrollCircuit variant="about" />
      <SiteHeader ctaHref={mailtoHref} ctaLabel="Set a destination" />

      <section className="about-hero" id="top">
        <div className="about-hero-copy">
          <nav className="services-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><span>About</span>
          </nav>
          <p className="eyebrow">ABOUT / THE SELF-DRIVING GTM COMPANY</p>
          <h1>A GTM company that learns to <span>drive itself.</span></h1>
          <p className="hero-lede">
            Grow &amp; Close is building the self-driving agentic GTM company for the AI
            era. Give the system a commercial destination. Agents gather context, plan
            the motion, make the work, check the result, and return the next decision.
            Humans set direction, grant authority, and own the consequences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#operating-system">See the operating system</a>
            <Link className="text-link" href="/services">Explore the service systems <span aria-hidden="true">↗</span></Link>
          </div>
          <p className="hero-note">MINIMUM INTERVENTION · MAXIMUM RESPONSIBILITY</p>
        </div>

        <div
          aria-label="Grow and Close autonomy control"
          className="about-control"
          data-service-circuit-start
        >
          <div className="about-control-topline">
            <span>AUTONOMY CONTROL / LIVE</span>
            <span><i aria-hidden="true" /> SYSTEM ONLINE</span>
          </div>
          <div className="about-control-destination">
            <span>DESTINATION</span>
            <strong>SET BY A HUMAN</strong>
          </div>
          <ol aria-label="Agent execution loop">
            {['OBSERVE', 'DECIDE', 'BUILD', 'VERIFY', 'LEARN'].map((stage, index) => (
              <li key={stage}><span>{String(index + 1).padStart(2, '0')}</span><b>{stage}</b></li>
            ))}
          </ol>
          <div className="about-control-gates">
            <div><span>LOW-RISK EXECUTION</span><strong>AGENT-RUN</strong></div>
            <div><span>IRREVERSIBLE ACTION</span><strong>HUMAN GATE</strong></div>
          </div>
          <p>HUMAN INTERVENTION BELONGS AT THE DECISION, NOT EVERY KEYSTROKE.</p>
        </div>
      </section>

      <section className="signal-strip" aria-label="Grow and Close autonomy principles">
        <p><strong>01</strong> Destination by humans</p>
        <p><strong>02</strong> Execution by agents</p>
        <p><strong>03</strong> Verification before release</p>
        <p><strong>04</strong> Learning back into memory</p>
      </section>

      <section className="about-old-model" data-service-circuit-target>
        <div>
          <p className="section-kicker">THE COMPANY BEFORE AGENTS</p>
          <h2>Every task still asks a person to become the routing layer.</h2>
        </div>
        <div>
          <p>
            A goal becomes a brief. The brief becomes five handoffs. Context falls out.
            Someone chases the work, rebuilds the argument, checks every artifact, and
            manually carries the learning into the next cycle.
          </p>
          <p>
            The human is not doing the highest-value thinking. The human is keeping the
            machine from forgetting what it is trying to do.
          </p>
        </div>
      </section>

      <section className="about-control-transfer" data-service-circuit-target>
        <header>
          <p className="section-kicker section-kicker-light">THE CONTROL TRANSFER</p>
          <h2>Self-driving does not mean human-free.</h2>
          <p>
            It means people stop carrying every execution step and start directing
            systems that can finish a loop, show their work, and escalate judgment.
          </p>
        </header>
        <div className="about-authority-grid">
          <article>
            <div><span>H</span><b>HUMANS SET</b></div>
            <h3>Direction, judgment, and responsibility.</h3>
            <ul>
              <li>The outcome worth pursuing</li>
              <li>The constraints and permissions</li>
              <li>Taste and material tradeoffs</li>
              <li>Accountability for the consequence</li>
            </ul>
          </article>
          <article>
            <div><span>A</span><b>AGENTS RUN</b></div>
            <h3>Context, execution, checks, and return.</h3>
            <ul>
              <li>Research and context gathering</li>
              <li>Task decomposition and specialist routing</li>
              <li>Drafting, building, testing, and distribution</li>
              <li>Escalation, measurement, and memory updates</li>
            </ul>
          </article>
        </div>
        <p className="about-manifesto-line">Minimum intervention is not zero responsibility.</p>
      </section>

      <section className="about-operating-system" data-service-circuit-target id="operating-system">
        <header>
          <p className="section-kicker">THE AGENTIC GTM OPERATING SYSTEM</p>
          <h2>One destination. A coordinated fleet. A verifiable return.</h2>
          <p>
            Agents are not a feature added to the old agency model. They are the
            operating layer: specialized, permissioned, context-rich, and connected by
            one learning loop.
          </p>
        </header>
        <ol className="about-loop">
          {agentLoop.map((stage) => (
            <li key={stage.number} data-service-circuit-target>
              <span>{stage.number}</span>
              <h3>{stage.title}</h3>
              <p>{stage.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-proof" data-service-circuit-target>
        <div className="about-proof-copy">
          <p className="section-kicker section-kicker-light">THIS PAGE IS INSIDE THE THESIS</p>
          <h2>You are not reading a pitch deck about agentic work. You are standing inside it.</h2>
          <p>
            This website is researched, written, designed, coded, tested, and maintained
            with AI agents. A human defines the brief, chooses what should be true,
            reviews material claims, and authorizes production releases.
          </p>
          <strong>AI-MANAGED SITE / HUMAN-GOVERNED RELEASE</strong>
        </div>
        <div className="about-proof-log" role="table" aria-label="Website operating proof">
          <div role="row"><span role="cell">01</span><b role="cell">RESEARCH</b><p role="cell">Brand, references, repository, live behavior</p><strong role="cell">AGENTS</strong></div>
          <div role="row"><span role="cell">02</span><b role="cell">BUILD</b><p role="cell">Positioning, copy, interface, code</p><strong role="cell">AGENTS</strong></div>
          <div role="row"><span role="cell">03</span><b role="cell">VERIFY</b><p role="cell">Build, tests, routes, desktop, mobile</p><strong role="cell">AGENTS</strong></div>
          <div role="row"><span role="cell">04</span><b role="cell">RELEASE</b><p role="cell">Irreversible public change</p><strong role="cell">HUMAN GATE</strong></div>
        </div>
      </section>

      <section className="about-ledger" data-service-circuit-target>
        <header>
          <p className="section-kicker">THE AUTONOMY LEDGER</p>
          <h2>A category claim should come with a truth table.</h2>
          <p>
            We will not hide a manual service behind an AI label. This is what runs now,
            where human authority remains, and what the system is earning the right to do next.
          </p>
        </header>
        <div className="about-ledger-grid">
          {autonomyLedger.map((column) => (
            <article data-service-circuit-target key={column.label}>
              <div><span>{column.status}</span><b>{column.label}</b></div>
              <h3>{column.title}</h3>
              <ul>{column.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="about-origin" data-service-circuit-target>
        <div>
          <p className="section-kicker section-kicker-light">WHY GROW &amp; CLOSE EXISTS</p>
          <h2>The bottleneck was never ideas. It was carrying context all the way to a result.</h2>
        </div>
        <div>
          <p>
            Grow &amp; Close was founded by Varun Choraria, former marketing leader at GTM
            Buddy, after years of watching senior teams become the manual glue between
            strategy, content, campaigns, pages, sales, and measurement.
          </p>
          <p>
            The first model put senior judgment upfront and specialist AI systems
            underneath. The destination is bigger: a company that can accept a commercial
            goal, coordinate the work, prove what happened, and improve with less human
            intervention every cycle.
          </p>
        </div>
      </section>

      <section className="about-principles" data-service-circuit-target>
        <header>
          <p className="section-kicker">THE RULES OF THE ROAD</p>
          <h2>Autonomy without operating principles is just faster chaos.</h2>
        </header>
        <div>
          {principles.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing about-closing" data-service-circuit-target>
        <p className="section-kicker section-kicker-light">GIVE THE SYSTEM A DESTINATION</p>
        <h2>Bring one commercial priority. We will show you the first loop.</h2>
        <a className="button button-accent" href={mailtoHref}>Set a GTM destination</a>
      </section>

      <SiteFooter />
    </main>
  );
}
