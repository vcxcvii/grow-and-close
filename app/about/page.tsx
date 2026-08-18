import type { Metadata } from "next";
import Link from "next/link";

import { FounderPortrait } from "../components/founder-portrait";
import { buildBreadcrumbJsonLd, JsonLd } from "../components/json-ld";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { personaList, personaShortLabel } from "../for/persona-content";
import { bookingHref } from "../site";

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", item: "https://growandclose.com/" },
  { name: "About", item: "https://growandclose.com/about" },
]);

export const metadata: Metadata = {
  title: "Our B2B SaaS Marketing Manifesto | Grow & Close",
  description:
    "Seven beliefs about B2B SaaS marketing and GTM: why production stopped being the bottleneck, why one finished motion beats five started, and why every piece of work should name the number it moves before it ships.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Our B2B SaaS Marketing Manifesto | Grow & Close",
    description:
      "Everyone can produce. Almost nobody decides. Seven beliefs about B2B SaaS marketing, and how the work runs here.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "The Grow & Close B2B SaaS marketing manifesto",
      },
    ],
    type: "website",
    url: "https://growandclose.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our B2B SaaS Marketing Manifesto | Grow & Close",
    description: "Everyone can produce. Almost nobody decides.",
    images: ["/og.png"],
  },
};

const bookHref = bookingHref("The GTM decision I keep postponing, and the pipeline it should create");

/**
 * The manifesto. Seven beliefs, written so a founder, a head of marketing and
 * a CMO each recognise their own week in them. Everything else on this page is
 * evidence for one of these.
 */
const manifesto = [
  {
    number: "01",
    title: "Marketing is a decision function, not a production function.",
    copy: "The output was never the hard part, and it is now the cheap part. What a marketing team is actually paid for is choosing which argument to make, to whom, and what to stop doing. Staff for that and the production takes care of itself.",
  },
  {
    number: "02",
    title: "The bottleneck moved. Name it before you hire for it.",
    copy: "Most teams are still buying capacity for a shortage they no longer have. If ten variants can exist by lunch, another pair of hands does not clear the queue. It lengthens it. Find the step where work actually stops, then buy that.",
  },
  {
    number: "03",
    title: "One motion finished beats five motions started.",
    copy: "Five half-built motions teach you nothing, because none of them ran long enough to produce a readable signal. One finished motion tells you whether the argument works. Sequence is a strategy, not a compromise.",
  },
  {
    number: "04",
    title: "If it cannot move a number you named in advance, it is not a strategy.",
    copy: "Name the number before the work starts, not in the retro. Ours is qualified pipeline created, because it is the earliest point where marketing and revenue agree something real happened. Pick yours and hold everything to it.",
  },
  {
    number: "05",
    title: "Sameness is what good tools produce by default.",
    copy: "When everyone drafts from the same models and the same competitor pages, the average gets better and the median gets identical. Differentiation stopped being a writing problem. It is a decision about what you are willing to say that your competitors are not.",
  },
  {
    number: "06",
    title: "Evidence beats taste, but only if you set the finish line first.",
    copy: "A dashboard nobody decided anything from is decoration. Before the work ships, write down what result would make you do more of it and what result would make you kill it. Then actually do the killing.",
  },
  {
    number: "07",
    title: "AI belongs at the keystroke. Humans belong at the decision.",
    copy: "Research, drafting, production and analysis run on AI workflows we build ourselves, and they are genuinely faster. Every claim, every tradeoff and every release still passes a person who is accountable for it. Minimum intervention is not zero responsibility.",
  },
] as const;

const motionLoop = [
  { number: "01", title: "Name every option", copy: "Everything you could do this month goes on one list, including the things quietly stalled." },
  { number: "02", title: "Rank against the number", copy: "Each option is argued against qualified pipeline created, not against how interesting it is." },
  { number: "03", title: "Decide, and kill the rest", copy: "One motion goes into flight. The rest are explicitly parked, so nobody keeps half-working them." },
  { number: "04", title: "Build it end to end", copy: "Strategy, copy, page, campaign and enablement ship together, arguing the same case to the same buyer." },
  { number: "05", title: "Set the finish line", copy: "Before release: what result earns more investment, and what result ends it." },
  { number: "06", title: "Ship behind a human gate", copy: "AI workflows do the production. A person approves every claim and every irreversible release." },
  { number: "07", title: "Read the signal, then repeat", copy: "A ship log and what it taught you. Month two starts where month one finished, not from zero." },
] as const;

const honestLedger = [
  {
    status: "WE DO",
    label: "WHAT YOU ARE BUYING",
    title: "A decision, and the work that proves it.",
    items: [
      "One GTM motion a month, taken from argument to live",
      "Positioning, landing pages, outbound, founder-led content, enablement, dashboards",
      "A named number every motion is held to, agreed before the work starts",
      "A ship log and a read on what the signal actually said",
    ],
  },
  {
    status: "WE DO NOT",
    label: "WHAT WE WILL NOT SELL YOU",
    title: "The things that quietly make it worse.",
    items: [
      "Five motions in parallel because the retainer implies volume",
      "Testimonials, logos, or case studies we cannot evidence",
      "A dashboard with no decision attached to it",
      "Work priced by hours, which pays us to be slow",
    ],
  },
  {
    status: "JUDGE IT",
    label: "BEFORE YOU PAY ANYTHING",
    title: "The standard is published, not promised.",
    items: [
      "The free Claude skills library is the actual method, ungated",
      "The rubric the first deliverable is scored against is public",
      "Five of its eight criteria are blocking: fail one and there is no invoice",
      "This website is the work, built the way yours would be",
    ],
  },
] as const;

export default function AboutPage() {
  return (
    <main className="about-page" data-brand-system="gc-logic-v1" data-service="about">
      <JsonLd data={breadcrumbJsonLd} />
      <SiteHeader ctaHref={bookHref} ctaLabel="Book a call" />

      <section className="about-hero" id="top">
        <div className="about-hero-copy">
          <nav className="services-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><span>About</span>
          </nav>
          <p className="eyebrow">ABOUT / THE MANIFESTO</p>
          <h1>Everyone can produce. <span>Almost nobody decides.</span></h1>
          <p className="hero-lede">
            Grow &amp; Close is a B2B SaaS GTM studio for founder-led teams with no
            marketing bench. This page is what we believe about marketing, why the job
            changed, and how the work runs here. If you disagree with the seven beliefs
            below, we are probably the wrong studio for you, and that is useful to know
            before a call rather than after one.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#manifesto">Read the manifesto</a>
            <Link className="text-link" href="/services">See the GTM services <span aria-hidden="true">↗</span></Link>
          </div>
          <p className="hero-note">ONE MOTION AT A TIME · ONE NUMBER TO MOVE</p>
        </div>

        <div aria-label="What this studio holds itself to" className="about-control">
          <div className="about-control-topline">
            <span>OPERATING STANDARD / LIVE</span>
            <span><i aria-hidden="true" /> SYSTEM ONLINE</span>
          </div>
          <div className="about-control-destination">
            <span>THE ONE NUMBER</span>
            <strong>QUALIFIED PIPELINE CREATED</strong>
          </div>
          <ol aria-label="How a motion runs">
            {['DECIDE', 'BUILD', 'SHIP', 'MEASURE', 'REPEAT'].map((stage, index) => (
              <li key={stage}><span>{String(index + 1).padStart(2, '0')}</span><b>{stage}</b></li>
            ))}
          </ol>
          <div className="about-control-gates">
            <div><span>PRODUCTION</span><strong>AI-ASSISTED</strong></div>
            <div><span>EVERY CLAIM</span><strong>HUMAN GATE</strong></div>
          </div>
          <p>HUMAN INTERVENTION BELONGS AT THE DECISION, NOT EVERY KEYSTROKE.</p>
        </div>
      </section>

      <section className="signal-strip" aria-label="What this studio holds to">
        <p><strong>01</strong> One motion at a time</p>
        <p><strong>02</strong> One number, named first</p>
        <p><strong>03</strong> Published rubric</p>
        <p><strong>04</strong> No claim we cannot evidence</p>
      </section>

      <section className="about-principles" id="manifesto">
        <header>
          <p className="section-kicker">THE MANIFESTO</p>
          <h2>Seven beliefs about B2B SaaS marketing.</h2>
        </header>
        <div>
          {manifesto.map((belief) => (
            <article key={belief.number}>
              <span>{belief.number}</span><h3>{belief.title}</h3><p>{belief.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-old-model">
        <div>
          <p className="section-kicker">WHY THE JOB CHANGED</p>
          <h2>The shortage used to be hands. Now it is the willingness to rule things out.</h2>
        </div>
        <div>
          <p>
            Two years ago the constraint was capacity. Producing a landing page, a
            sequence and a launch narrative took weeks, so the teams that could produce
            more, won more. That advantage is gone. Anyone can generate ten versions of
            anything before lunch.
          </p>
          <p>
            What did not get cheaper is knowing which one to ship, and being accountable
            when it is wrong. So the list of things you could be doing now grows faster
            than the week, and the work that would actually create pipeline sits behind
            nine things that felt easier to start.
          </p>
        </div>
      </section>

      <section className="about-ledger">
        <header>
          <p className="section-kicker">WHO FEELS IT</p>
          <h2>Three jobs, one shortage.</h2>
          <p>
            The same missing decision shows up differently depending on where you sit.
            Each of these has its own page, written for that week specifically.
          </p>
        </header>
        <div className="about-ledger-grid">
          {personaList.map((persona) => (
            <article key={persona.slug}>
              <div><span>{personaShortLabel(persona.label).toUpperCase()}</span><b>{persona.role}</b></div>
              <h3>{persona.symptomHeading}</h3>
              <ul>
                {persona.symptoms.slice(0, 3).map((symptom) => (
                  <li key={symptom.title}>{symptom.title}</li>
                ))}
              </ul>
              <Link className="text-link" href={`/for/${persona.slug}`}>
                {persona.label} <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="about-control-transfer">
        <header>
          <p className="section-kicker section-kicker-light">HOW AI IS ACTUALLY USED HERE</p>
          <h2>Fast production, unchanged accountability.</h2>
          <p>
            Every studio now says it is AI-native. Very few will tell you where the
            machine stops. Here is the line, so you can hold us to it.
          </p>
        </header>
        <div className="about-authority-grid">
          <article>
            <div><span>A</span><b>AI RUNS</b></div>
            <h3>Research, drafting, production, analysis.</h3>
            <ul>
              <li>Market, competitor and buyer research at depth</li>
              <li>First drafts of copy, pages, sequences and assets</li>
              <li>Build, test and QA workflows we wrote ourselves</li>
              <li>Data pulls, dashboards and signal readouts</li>
            </ul>
          </article>
          <article>
            <div><span>H</span><b>A HUMAN DECIDES</b></div>
            <h3>The argument, the claim, the release.</h3>
            <ul>
              <li>Which motion runs and which ones are parked</li>
              <li>Every claim made about your product or customers</li>
              <li>Taste, tradeoffs and anything irreversible</li>
              <li>Final approval, and accountability when it is wrong</li>
            </ul>
          </article>
        </div>
        <p className="about-manifesto-line">Minimum intervention is not zero responsibility.</p>
      </section>

      <section className="about-operating-system" id="operating-system">
        <header>
          <p className="section-kicker">HOW A MOTION RUNS</p>
          <h2>One list, one decision, one finished thing.</h2>
          <p>
            The operating model stays deliberately light so more of the month reaches
            the market. This is the whole loop.
          </p>
        </header>
        <ol className="about-loop">
          {motionLoop.map((stage) => (
            <li key={stage.number}>
              <span>{stage.number}</span>
              <h3>{stage.title}</h3>
              <p>{stage.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about-proof">
        <div className="about-proof-copy">
          <p className="section-kicker section-kicker-light">THIS PAGE IS INSIDE THE THESIS</p>
          <h2>You are not reading a pitch about how we work. You are standing in it.</h2>
          <p>
            This website was researched, written, designed, coded, tested and is
            maintained the same way client work is: AI workflows do the production, a
            person decides what should be true, reviews every material claim and
            authorises each release. Judge the standard here before you pay for it
            anywhere.
          </p>
          <strong>AI-BUILT SITE / HUMAN-APPROVED RELEASE</strong>
        </div>
        <div className="about-proof-log" role="table" aria-label="How this site was built">
          <div role="row"><span role="cell">01</span><b role="cell">RESEARCH</b><p role="cell">Market, competitors, live site behaviour</p><strong role="cell">AI</strong></div>
          <div role="row"><span role="cell">02</span><b role="cell">BUILD</b><p role="cell">Positioning, copy, interface, code</p><strong role="cell">AI</strong></div>
          <div role="row"><span role="cell">03</span><b role="cell">VERIFY</b><p role="cell">Build, tests, routes, desktop and mobile</p><strong role="cell">AI</strong></div>
          <div role="row"><span role="cell">04</span><b role="cell">RELEASE</b><p role="cell">Every public claim and change</p><strong role="cell">HUMAN GATE</strong></div>
        </div>
      </section>

      <section className="about-ledger">
        <header>
          <p className="section-kicker">THE HONEST LEDGER</p>
          <h2>What you are buying, what we will not sell you, and how to check.</h2>
          <p>
            A category claim should come with a truth table. This is ours, including the
            parts that cost us deals.
          </p>
        </header>
        <div className="about-ledger-grid">
          {honestLedger.map((column) => (
            <article key={column.label}>
              <div><span>{column.status}</span><b>{column.label}</b></div>
              <h3>{column.title}</h3>
              <ul>{column.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="about-origin">
        <div>
          <p className="section-kicker section-kicker-light">WHO MAKES THE CALL</p>
          <h2>One person decides, and puts their name on it.</h2>
          <FounderPortrait size={120} />
        </div>
        <div>
          <p>
            Grow &amp; Close was founded by Varun Choraria, former marketing leader at
            GTM Buddy, after a decade of watching senior B2B SaaS teams turn into the
            manual glue between strategy, content, campaigns, pages, sales and
            measurement. The pattern was always the same: no shortage of ideas, no
            shortage of output, and no one willing to say which nine of the ten die.
          </p>
          <p>
            You work with him directly. Not an account team, not a rotating pod. The
            same person who argues the positioning writes the page and reads the signal
            afterwards, which is the only way the second month can start where the first
            one finished.
          </p>
          <p>
            His own writing, work history and public projects live at{" "}
            <a href="https://varunchoraria.com" rel="noopener noreferrer me" target="_blank">
              varunchoraria.com
            </a>. The frameworks this studio runs on are published, in full, in the{" "}
            <Link href="/skills">free skills library</Link> and the{" "}
            <Link href="/rubric">public rubric</Link>.
          </p>
        </div>
      </section>

      <section className="closing about-closing">
        <p className="section-kicker section-kicker-light">IF THE MANIFESTO LANDED</p>
        <h2>Bring the one motion that keeps slipping. We will scope it live.</h2>
        <a className="button button-accent" href={bookHref}>Book a 30-minute call</a>
      </section>

      <SiteFooter />
    </main>
  );
}
