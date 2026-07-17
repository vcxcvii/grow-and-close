import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { ServiceScrollCircuit } from "./service-scroll-circuit";

export const metadata: Metadata = {
  title: "B2B SaaS GTM Services | Grow & Close",
  description:
    "Senior-led B2B SaaS GTM services spanning positioning, landing pages, outbound, founder content, AEO, sales enablement, campaigns, dashboards, and customer advocacy.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "B2B SaaS GTM Services | Grow & Close",
    description:
      "Nine GTM services, one senior owner: strategy, assets, activation, and measurement built together around one pipeline priority.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Grow & Close B2B SaaS GTM services",
      },
    ],
    type: "website",
    url: "https://growandclose.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B SaaS GTM Services | Grow & Close",
    description:
      "Senior-led B2B SaaS GTM services: positioning, landing pages, outbound, AEO, campaigns, dashboards, and customer advocacy under one owner.",
    images: ["/og.png"],
  },
};

const diagnosticHref =
  "mailto:hello@growandclose.com?subject=GTM%20service%20map&body=Company%3A%0AWebsite%3A%0AYour%20role%3A%0AThe%20GTM%20priority%20that%20needs%20to%20move%3A";

const serviceGroups = [
  {
    number: "01",
    label: "DEFINE THE COMMERCIAL ARGUMENT",
    title: "Decide what the market should understand and believe.",
    lede:
      "Use this layer when the market story is unstable, a category feels interchangeable, or teams keep rebuilding the argument for every launch.",
    services: [
      {
        number: "01",
        title: "Positioning & messaging",
        system: "One story everywhere",
        href: "/services/positioning-and-messaging",
        copy:
          "Turn customer language, product truth, competitor patterns, founder conviction, and sales friction into one story every page and rep repeats.",
        bestWhen:
          "Your homepage, pitch, campaigns, and sales calls describe different versions of the company.",
        leaves: "Positioning record · message architecture · evidence log",
      },
      {
        number: "07",
        title: "Campaign strategy",
        system: "One idea, every channel",
        href: "/services/campaign-strategy",
        copy:
          "Turn one commercial bet into a coordinated campaign with a clear audience, offer, a distinct job per channel, and rules for what happens next.",
        bestWhen:
          "A launch has a calendar and asset list, but no shared reason it should change buyer behavior.",
        leaves: "Campaign architecture · activation plan · learning log",
      },
      {
        number: "08",
        title: "GTM dashboards",
        system: "Decisions, not tours",
        href: "/services/gtm-dashboards",
        copy:
          "Connect commercial questions, trustworthy definitions, source data, operating context, and review cadence into decisions teams can act on.",
        bestWhen:
          "Metrics multiply while confidence falls, and every review ends with a debate about whose number is right.",
        leaves: "Metric contract · decision dashboard · operating review",
      },
    ],
  },
  {
    number: "02",
    label: "ACTIVATE THE BUYER JOURNEY",
    title: "Move the argument into pipeline.",
    lede:
      "Use this layer when the story is credible but pages, outbound, and live deals fail to carry it through the next buyer decision.",
    services: [
      {
        number: "02",
        title: "Landing pages",
        system: "Pages that convert",
        href: "/services/landing-pages",
        copy:
          "Connect traffic intent, one sharp argument, proof, interaction, and measurement into a page that converts and tells you what to fix next.",
        bestWhen:
          "Traffic reaches the page, but signups and demos stay flat and nobody can explain which belief broke.",
        leaves: "Page argument map · live-ready page · experiment log",
      },
      {
        number: "03",
        title: "Outbound activation",
        system: "Replies, not volume",
        href: "/services/outbound-activation",
        copy:
          "Connect ICP choices, timely account signals, focused research, human-approved messaging, and sales feedback into relevant conversations.",
        bestWhen:
          "Sequences create activity, but account fit, timing, relevance, and reply learning remain disconnected.",
        leaves: "Account rules · message paths · reply learning",
      },
      {
        number: "06",
        title: "Sales enablement",
        system: "Deals that keep moving",
        href: "/services/sales-enablement",
        copy:
          "Turn the commercial story, buyer context, proof, objections, and deal signals into guidance that helps the next conversation move.",
        bestWhen:
          "Reps keep rebuilding the story for live deals, while useful objections and proof stay trapped in individual calls.",
        leaves: "Deal narrative · proof paths · momentum playbook",
      },
    ],
  },
  {
    number: "03",
    label: "BUILD AUTHORITY AND PROOF",
    title: "Build demand assets that keep working after the post or campaign.",
    lede:
      "Use this layer when expertise, search demand, product evidence, and customer outcomes exist but do not accumulate into durable trust.",
    services: [
      {
        number: "04",
        title: "Founder-led content",
        system: "An audience you own",
        href: "/services/founder-led-content",
        copy:
          "Turn founder thinking into a documented voice, newsletter, social formats, customer proof, and paid amplification that grow one audience.",
        bestWhen:
          "The founder has a differentiated point of view, but content still depends on inspiration, ghostwritten imitation, or isolated posts.",
        leaves: "Voice model · owned media engine · audience and UGC loop",
      },
      {
        number: "05",
        title: "AEO & data stories",
        system: "Cited by AI search",
        href: "/services/aeo-and-data-stories",
        copy:
          "Turn buyer questions, expert knowledge, original evidence, answer structure, and distribution into useful pages worth citing.",
        bestWhen:
          "The company has expertise or data, but search engines, AI answers, buyers, and journalists cannot find a defensible source.",
        leaves: "Answer map · evidence-backed stories · citation monitoring",
      },
      {
        number: "09",
        title: "Customer advocacy",
        system: "Proof you can use",
        href: "/services/customer-advocacy",
        copy:
          "Catch customer wins, make the right ask, capture consented proof, and route it to the pages, decks, and campaigns that need it.",
        bestWhen:
          "Customer wins appear in calls and private messages, then disappear before marketing and sales can use them responsibly.",
        leaves: "Ask model · permissioned evidence log · proof deployment",
      },
    ],
  },
] as const;

const selectionSignals = [
  {
    label: "THE MARKET DOES NOT GET IT",
    title: "Start with the argument.",
    copy:
      "Choose positioning and messaging when comprehension is the bottleneck. Add campaign strategy when the argument needs a coordinated market moment. Add a decision dashboard when the team cannot agree what evidence should govern the next choice.",
  },
  {
    label: "BUYERS UNDERSTAND, BUT DO NOT MOVE",
    title: "Start with the conversion path.",
    copy:
      "Choose landing pages when a specific traffic path underperforms, outbound activation when qualified accounts lack a reason to engage, or sales enablement when live opportunities lose momentum after the first conversation.",
  },
  {
    label: "TRUST RESETS EVERY QUARTER",
    title: "Start with the compounding asset.",
    copy:
      "Choose founder-led content for owned audience, AEO and data stories for discoverable expertise, or customer advocacy when customer outcomes need to become permissioned proof your pages, decks, and campaigns can use.",
  },
] as const;

const faqs = [
  {
    question: "Are these separate agency retainers?",
    answer:
      "No. They are nine services inside one senior-led GTM execution model. You choose the commercial bottleneck and finish line. We combine the services needed to move that priority instead of forcing the work into one departmental box.",
  },
  {
    question: "Which B2B SaaS GTM service should we start with?",
    answer:
      "Start where the current motion first breaks. If buyers do not understand the value, begin with positioning. If they understand but do not act, diagnose the page, outbound, or deal path. If demand depends on repeated launches, build an owned authority or customer-evidence loop.",
  },
  {
    question: "Can one engagement combine several services?",
    answer:
      "Yes. A campaign may need positioning, a landing page, outbound, sales proof, and a dashboard. That still counts as one bounded motion when every piece serves one agreed outcome, owner, and finish line.",
  },
  {
    question: "Do you only advise, or do you build and launch?",
    answer:
      "We diagnose, decide, build, QA, and prepare the work for launch. The exact boundary depends on your stack and team. Strategy stays connected to live assets, while media spend, systems of record, legal approval, and direct selling remain with you.",
  },
  {
    question: "How does AI fit into the service?",
    answer:
      "AI workflows we build ourselves speed up research, synthesis, drafting, design exploration, analysis, and operations. A senior human makes the commercial choices, checks the sources, and approves the final work. We do not sell unattended automation as strategy.",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="services-hub-page" data-service="services">
      <ServiceScrollCircuit variant="pillar" />
      <SiteHeader ctaHref={diagnosticHref} ctaLabel="Map the bottleneck" />

      <section className="services-hub-hero" id="top">
        <div className="services-hub-hero-copy">
          <nav className="services-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><span>Services</span>
          </nav>
          <p className="eyebrow">B2B SAAS GTM SERVICES</p>
          <h1>Choose the bottleneck.<span>We ship what moves it.</span></h1>
          <p className="hero-lede">
            Grow &amp; Close is a senior-led GTM execution studio for founders, CMOs,
            and lean B2B SaaS marketing teams. We connect strategy, copy, design,
            activation, proof, measurement, and learning around one pipeline priority.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#service-systems">Explore all services</a>
            <a className="text-link" href={diagnosticHref}>Map my GTM bottleneck <span aria-hidden="true">↗</span></a>
          </div>
          <p className="hero-note">ONE OWNER · ONE FINISH LINE · EVERY REQUIRED CAPABILITY</p>
        </div>

        <div
          className="services-hub-system"
          data-service-circuit-start
          aria-label="Grow and Close service architecture"
        >
          <div className="system-topline"><span>NINE SERVICES / ONE OWNER</span><span className="live-dot">ACTIVE</span></div>
          <p className="system-label">ONE COMMERCIAL PRIORITY</p>
          <div className="services-hub-system-flow">
            <div><span>01</span><b>DEFINE</b><small>Argument + decision</small></div>
            <i aria-hidden="true" />
            <div><span>02</span><b>ACTIVATE</b><small>Journey + action</small></div>
            <i aria-hidden="true" />
            <div><span>03</span><b>PROVE</b><small>Authority + proof</small></div>
          </div>
          <div className="ship-ticket"><span>EVERY MOTION ENDS WITH</span><strong>SOMETHING LIVE + THE NEXT DECISION</strong><span>Weekly</span></div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Grow and Close service principles">
        <p><strong>01</strong> Senior-led strategy</p>
        <p><strong>02</strong> Cross-functional build</p>
        <p><strong>03</strong> Human approval</p>
        <p><strong>04</strong> Learning built in</p>
      </section>

      <section className="services-hub-thesis" data-service-circuit-target>
        <p className="section-kicker">THE SERVICE MODEL</p>
        <h2>GTM problems do not respect departmental boundaries.</h2>
        <div>
          <p>
            A positioning problem becomes a landing-page problem, then a sales-story
            problem. A campaign needs proof, outbound, enablement, and measurement.
            Founder content needs an owned audience, customer evidence, distribution,
            and a way to learn what earns qualified attention.
          </p>
          <p>
            That is why these services work as connected systems. Each can solve a
            focused bottleneck on its own. When the outcome requires more, we combine
            them inside one bounded GTM motion instead of handing you nine separate
            workstreams to coordinate.
          </p>
        </div>
      </section>

      <section className="services-hub-groups" id="service-systems">
        {serviceGroups.map((group) => (
          <article className="services-hub-group" data-service-circuit-target key={group.number}>
            <header>
              <p className="section-kicker">{group.number} / {group.label}</p>
              <h2>{group.title}</h2>
              <p>{group.lede}</p>
            </header>
            <div className="services-hub-grid">
              {group.services.map((service) => (
                <Link
                  aria-label={`${service.title} service page (opens in a new tab)`}
                  className="services-hub-card"
                  data-service-circuit-target
                  href={service.href}
                  key={service.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="services-hub-card-topline"><span>{service.number}</span><b>{service.system}</b></div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <div className="services-hub-fit"><span>START HERE WHEN</span><p>{service.bestWhen}</p></div>
                  <small>{service.leaves}</small>
                  <strong>Explore the system <span aria-hidden="true">↗</span></strong>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="services-hub-motion" data-service-circuit-target>
        <div>
          <p className="section-kicker section-kicker-light">HOW SERVICES BECOME ONE MOTION</p>
          <h2>Not nine retainers. One accountable path from problem to signal.</h2>
          <p>
            The starting service names the constraint. The motion then pulls in only
            the capabilities required to remove it, ship something live, and leave the
            next decision better informed.
          </p>
        </div>
        <ol>
          <li><span>01</span><div><b>Diagnose</b><p>Name the expensive misunderstanding, stalled action, or missing evidence.</p></div></li>
          <li><span>02</span><div><b>Design the motion</b><p>Set one outcome, finish line, proof standard, human checkpoints, and signal plan.</p></div></li>
          <li><span>03</span><div><b>Build and ship</b><p>Create the connected strategy, assets, pages, campaigns, and operating state.</p></div></li>
          <li><span>04</span><div><b>Read and return</b><p>Use buyer, customer, sales, and performance signals to choose the next move.</p></div></li>
        </ol>
      </section>

      <section className="services-hub-chooser" data-service-circuit-target>
        <div className="capability-title">
          <p className="section-kicker">WHERE SHOULD YOU START?</p>
          <h2>Follow the first broken handoff.</h2>
        </div>
        <div className="services-hub-choice-grid">
          {selectionSignals.map((signal, index) => (
            <article data-service-circuit-target key={signal.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{signal.label}</p>
              <h3>{signal.title}</h3>
              <small>{signal.copy}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="faq services-hub-faq" id="faq" data-service-circuit-target>
        <div className="faq-heading">
          <p className="section-kicker">B2B SAAS GTM SERVICES, CLARIFIED</p>
          <h2>The useful buying questions.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details data-service-circuit-target key={faq.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<b aria-hidden="true">+</b></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="closing services-hub-closing" data-service-circuit-target>
        <p className="section-kicker section-kicker-light">START WITH THE CONSTRAINT, NOT THE SERVICE NAME</p>
        <h2>Bring one GTM priority. Your GTM backlog, shipped.</h2>
        <a className="button button-accent" href={diagnosticHref}>Map my GTM bottleneck</a>
      </section>

      <SiteFooter />
    </main>
  );
}
