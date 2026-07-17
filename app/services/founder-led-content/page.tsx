import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "../../components/json-ld";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { ServiceScrollCircuit } from "../service-scroll-circuit";
import { FounderCircuit } from "./founder-circuit";

export const metadata: Metadata = {
  title: "Founder-led Content for B2B SaaS | Grow & Close",
  description:
    "Turn your founder's point of view into an owned audience. Voice capture, LinkedIn, visual content, newsletter growth, UGC, paid amplification, and learning in one connected loop.",
  alternates: { canonical: "/services/founder-led-content" },
  openGraph: {
    title: "Turn founder insight into an audience you own | Grow & Close",
    description:
      "A senior-led content, newsletter, UGC, distribution, and learning system for B2B SaaS founders.",
    url: "https://growandclose.com/services/founder-led-content",
    type: "website",
  },
};

const problems = [
  {
    number: "01",
    title: "Your founder is still the bottleneck.",
    copy: "Every useful post starts with another blank-page briefing, another review cycle, and another request to explain what the founder really means.",
  },
  {
    number: "02",
    title: "Reach disappears after 48 hours.",
    copy: "Good ideas get impressions, then vanish. No newsletter captures the audience. No archive builds on the thinking. The next post starts from zero.",
  },
  {
    number: "03",
    title: "Content and distribution live apart.",
    copy: "The calendar produces posts. Nobody curates the ICP network, follows hand-raisers, builds retargeting audiences, or turns attention into a next step.",
  },
  {
    number: "04",
    title: "Customer proof arrives by accident.",
    copy: "Users share wins when the moment is right, but nobody prompts, captures, routes, gets consent, or reuses that proof across pages, ads, and sales.",
  },
];

const loopSteps = [
  {
    number: "01",
    verb: "CAPTURE",
    title: "Extract the point of view",
    copy: "Founder interviews, calls, old posts, product decisions, customer language, and contrarian beliefs become a living source corpus.",
    output: "VOICE SPEC · CLAIM LIBRARY · STORY MAP",
  },
  {
    number: "02",
    verb: "CREATE",
    title: "Build from source, not prompts",
    copy: "One strong idea becomes a native LinkedIn post, visual story, carousel, newsletter section, company-page angle, and longer owned piece.",
    output: "CHANNEL-NATIVE DRAFTS · HUMAN REVIEW",
  },
  {
    number: "03",
    verb: "DISTRIBUTE",
    title: "Meet the audience where it is",
    copy: "Publish zero-click social content, cross-post selectively, send the owned edition, and route each format to the channel where it belongs.",
    output: "SOCIAL · NEWSLETTER · OWNED ARCHIVE",
  },
  {
    number: "04",
    verb: "CURATE",
    title: "Build the right audience deliberately",
    copy: "Map the ICP network, surface relevant conversations, stage thoughtful connection requests, and segment subscribers by role, interest, and intent.",
    output: "ICP NETWORK · HAND-RAISERS · SEGMENTS",
  },
  {
    number: "05",
    verb: "AMPLIFY",
    title: "Put spend behind proven thinking",
    copy: "Turn strong organic angles into thought-leadership ads, remarket engaged ICPs, activate partners, and route customer proof into the right assets.",
    output: "PAID SOCIAL · UGC · PARTNER DISTRIBUTION",
  },
  {
    number: "06",
    verb: "LEARN",
    title: "Let signals shape the next cycle",
    copy: "Performance, replies, subscriber health, search demand, and pipeline context update the story map. Weak angles stop. Strong ones get another cycle.",
    output: "WEEKLY SIGNAL DIGEST · MONTHLY RETRO",
  },
];

const voiceLayers = [
  {
    label: "SOURCE",
    title: "What the founder knows",
    items: ["Interviews and calls", "Decisions and trade-offs", "Customer stories", "Proof and data"],
  },
  {
    label: "MODEL",
    title: "How the founder thinks",
    items: ["Voice rules", "Signature moves", "Claims and caveats", "Words to use and avoid"],
  },
  {
    label: "SYSTEM",
    title: "What the market receives",
    items: ["Native posts", "Visual stories", "Owned newsletter", "Paid and sales reuse"],
  },
];

const ugcSteps = [
  ["01", "Happy moment", "Milestone, result, positive feedback"],
  ["02", "Relevant ask", "Post, review, referral, or interview"],
  ["03", "Consent + capture", "Verify proof and permission"],
  ["04", "Route the asset", "Social, page, ad, newsletter, sales"],
  ["05", "New trust signal", "More buyers, more users, more stories"],
];

const rollout = [
  {
    phase: "DAYS 01–14",
    title: "Build the source of truth",
    copy: "Audit the founder's existing corpus. Run two deep capture sessions. Define the voice, viewpoint, proof boundaries, audience, and editorial lanes.",
    deliverables: "Voice spec · claim library · 12-week story map · measurement baseline",
  },
  {
    phase: "DAYS 15–30",
    title: "Launch the media engine",
    copy: "Publish the first connected series, create the newsletter contract, set the welcome flow, and establish the approval and distribution rhythm.",
    deliverables: "Launch series · first owned edition · welcome flow · reusable visual system",
  },
  {
    phase: "DAYS 31–60",
    title: "Curate and capture",
    copy: "Grow the ICP network, segment new readers, activate recommendation and partner paths, and introduce customer-story prompts around real happy moments.",
    deliverables: "Audience map · connection queue · subscriber segments · UGC request flow",
  },
  {
    phase: "DAYS 61–90",
    title: "Amplify what proved itself",
    copy: "Promote the strongest angles, remarket engaged accounts, run the first editorial retro, and turn winners into durable pages, sales proof, and future series.",
    deliverables: "Thought-leadership ads · performance retro · next-quarter editorial thesis",
  },
];

const cadence = [
  ["WEEKLY", "Founder capture", "One focused conversation or async source drop"],
  ["WEEKLY", "Signal review", "Performance, replies, ICP engagement, content opportunities"],
  ["BI-WEEKLY", "Owned edition", "One useful newsletter issue built to be forwarded"],
  ["MONTHLY", "Editorial retro", "Winners, misses, audience movement, next hypotheses"],
  ["QUARTERLY", "System refresh", "Voice drift, subscriber health, story map, proof inventory"],
];

const faqs = [
  {
    question: "Will AI write everything in my voice?",
    answer: "No. AI helps retrieve source material, find patterns, draft variants, and adapt formats. Your voice model is built from real founder material, then every meaningful claim stays human-reviewed. The goal is less blank-page work, not synthetic personality.",
  },
  {
    question: "How much founder time does this need?",
    answer: "Plan for one focused 30-minute capture each week plus fast approvals. The system should extract more value from founder time, not remove the founder from founder-led content.",
  },
  {
    question: "Do we need a newsletter from day one?",
    answer: "Not always. We start owned media when the editorial promise and cadence are sustainable. Social can validate ideas first; the newsletter captures the audience once there is something worth returning for.",
  },
  {
    question: "Do you automate LinkedIn connection requests?",
    answer: "We define the ICP, curate lists, identify relevant conversations, and stage thoughtful requests or replies. No spray-and-pray, fake engagement, or unapproved autonomous posting.",
  },
  {
    question: "What does success look like?",
    answer: "Qualified audience growth, subscriber quality, replies and conversations, returning readers, reusable proof, assisted pipeline, and a lower founder-production burden. Impressions matter only when they help explain one of those outcomes.",
  },
  {
    question: "Are media spend and publishing included?",
    answer: "Strategy, copy, creative direction, audience design, and retargeting logic can sit inside the motion. Media spend is separate. Publishing access is optional and begins only after the approval workflow is proven.",
  },
];

const diagnosticHref =
  "mailto:hello@growandclose.com?subject=Founder%20Signal%20Map&body=Company%3A%0AWebsite%3A%0AFounder%20profile%3A%0ACurrent%20content%20channels%3A%0AWhat%20is%20not%20compounding%3F%3A";

export default function FounderLedContentPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Founder-led Content",
    description:
      "Turn your founder's point of view into an owned audience. Voice capture, LinkedIn, visual content, newsletter growth, UGC, paid amplification, and learning in one connected loop.",
    url: "https://growandclose.com/services/founder-led-content",
    provider: {
      "@type": "Organization",
      name: "Grow & Close",
      url: "https://growandclose.com",
    },
    serviceType: "Founder-led Content",
    areaServed: "Worldwide",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="founder-page" data-service="founder-led-content">
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <ServiceScrollCircuit variant="founder" />
      <SiteHeader
        activeService="founder-led-content"
        ctaHref={diagnosticHref}
        ctaLabel="Get the signal map"
      />

      <section className="hero founder-hero" id="top">
        <div className="hero-copy">
          <Link className="service-back" href="/services">Service 04 / Founder-led content</Link>
          <h1>Turn founder insight into an audience<span>you own.</span></h1>
          <p className="hero-lede">
            We capture your voice, build a source-grounded content system around it,
            turn each idea into channel-native media, grow an owned newsletter, create
            customer-proof loops, and amplify only what earns attention.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={diagnosticHref}>Get your Founder Signal Map</a>
            <a className="text-link" href="#loop">See the operating loop <span aria-hidden="true">↗</span></a>
          </div>
          <p className="hero-note">SOURCE-GROUNDED · HUMAN-APPROVED · BUILT TO COMPOUND</p>
        </div>

        <div
          className="hero-system"
          data-service-circuit-start
          aria-label="Founder Signal System operating loop"
        >
          <div className="system-topline">
            <span>FOUNDER-LED CONTENT / 04</span>
            <span className="live-dot">ACTIVE LOOP</span>
          </div>
          <p className="system-label">POINT OF VIEW</p>
          <h2>One real idea.</h2>
          <div className="system-progress" aria-hidden="true">
            <span className="complete">01</span><i /><span className="complete">02</span><i /><span>03</span>
          </div>
          <div className="system-stages">
            <div><b>Capture</b><span>Voice + claim</span></div>
            <div><b>Ship</b><span>Media + audience</span></div>
            <div><b>Learn</b><span>Signal + next cycle</span></div>
          </div>
          <div className="ship-ticket">
            <span>THE RETURN</span><strong>Next idea starts smarter.</strong><span>Loop / active</span>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Founder-led content system outcomes">
        <p><strong>01</strong> Distinct voice</p>
        <p><strong>02</strong> Owned audience</p>
        <p><strong>03</strong> Reusable proof</p>
        <p><strong>04</strong> Learning system</p>
      </section>

      <FounderCircuit />

      <section className="problem" id="problem">
        <div className="problem-heading">
          <p className="section-kicker">THE REAL PROBLEM</p>
          <h2>Most founder content is a calendar pretending to be a system.</h2>
          <p>Publishing is only one stage. Without source memory, owned distribution, audience curation, proof capture, and a learning loop, volume resets every month.</p>
        </div>
        <div className="founder-problem-grid">
          {problems.map((problem) => (
            <article className="problem-card" data-service-circuit-target key={problem.number}>
              <span>{problem.number}</span><h3>{problem.title}</h3><p>{problem.copy}</p>
            </article>
          ))}
        </div>
        <p className="problem-diagnosis">
          <span>VISIBLE SYMPTOM</span> Inconsistent content
          <i aria-hidden="true">→</i>
          <span>ROOT CAUSE</span> No system connecting voice, audience, proof, and learning
        </p>
      </section>

      <section className="workflow" id="loop">
        <div className="workflow-heading">
          <p className="section-kicker section-kicker-light">HOW THE PIECES CONNECT</p>
          <h2>One idea enters. A stronger system comes back.</h2>
          <p>Each stage feeds the next. Content stops being a weekly production task and becomes an audience, a library of proof, and a channel you own.</p>
        </div>
        <div className="workflow-list">
          {loopSteps.map((step) => (
            <article className="workflow-step" data-service-circuit-target key={step.number}>
              <span className="workflow-number">{step.number}</span>
              <div><h3>{step.title}</h3><p>{step.copy}</p><small>{step.verb} · {step.output}</small></div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities founder-voice">
        <div className="capability-title">
          <p className="section-kicker">NOT A GENERIC BRAND-VOICE PROMPT</p>
          <h2>Your voice becomes a documented, reusable source.</h2>
        </div>
        <p className="founder-section-lede">Voice is not adjectives. We model the founder&apos;s recurring moves: how they open, reason, concede, reframe, use proof, name limits, and land the argument.</p>
        <div className="founder-layer-grid">
          {voiceLayers.map((layer, index) => (
            <article data-service-circuit-target key={layer.label}>
              <div><span>{String(index + 1).padStart(2, "0")}</span><b>{layer.label}</b></div>
              <h3>{layer.title}</h3>
              <ul>{layer.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="founder-voice-note">AI can retrieve and transform this source. It cannot approve a founder&apos;s belief, invent customer proof, or decide which trade-off the company is willing to own.</p>
      </section>

      <section className="motions founder-ugc">
        <div className="section-intro">
          <p className="section-kicker">CUSTOMERS BECOME THE PROOF LAYER</p>
          <h2>Build the moment that makes users want to tell the story.</h2>
          <p>We identify real happy moments, stage the right ask, capture consent, and route each story into the place where it does the most work. Negative feedback takes a different path: recovery, resolution, and a closed loop with the customer.</p>
        </div>
        <div className="motion-list">
          {ugcSteps.map(([number, title, copy]) => (
            <article className="motion-card" data-service-circuit-target key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="problem founder-rollout" id="package">
        <div className="problem-heading">
          <p className="section-kicker">A TYPICAL FIRST 90 DAYS</p>
          <h2>Build the system before asking it to scale.</h2>
          <p>Cadence follows signal quality and founder capacity. This is the default sequence, adjusted for what already exists and what the market is ready to hear.</p>
        </div>
        <div className="founder-rollout-grid">
          {rollout.map((phase, index) => (
            <article
              className="founder-phase-card"
              data-service-circuit-target
              key={phase.phase}
            >
              <div><span>{String(index + 1).padStart(2, "0")}</span><b>{phase.phase}</b></div>
              <h3>{phase.title}</h3><p>{phase.copy}</p><small>{phase.deliverables}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="motions founder-cadence">
        <div className="section-intro">
          <p className="section-kicker">THE OPERATING RHYTHM</p>
          <h2>Consistent enough to learn. Light enough to sustain.</h2>
          <p>Weekly is not automatically better. The right cadence is the fastest rhythm that preserves original thinking, review quality, and useful audience signals.</p>
        </div>
        <div className="founder-cadence-list" role="table" aria-label="Founder Signal System cadence">
          {cadence.map(([frequency, action, detail]) => (
            <div data-service-circuit-target role="row" key={`${frequency}-${action}`}>
              <span role="cell">{frequency}</span><b role="cell">{action}</b><p role="cell">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-boundaries founder-boundaries">
        <div className="boundary-card boundary-card-dark" data-service-circuit-target>
          <p>GROW &amp; CLOSE OWNS</p>
          <ul>
            <li>Voice extraction and source governance</li><li>Editorial thesis, formats, and production</li><li>Newsletter system and distribution design</li><li>ICP audience curation and staged engagement</li><li>UGC, proof, paid amplification, and learning loops</li>
          </ul>
        </div>
        <div className="boundary-card" data-service-circuit-target>
          <p>THE FOUNDER OWNS</p>
          <ul>
            <li>One focused source session each week</li><li>Beliefs, claims, caveats, and final approval</li><li>Access to product, customer, and commercial context</li><li>Authentic engagement where a human relationship matters</li><li>Media spend and platform permissions</li>
          </ul>
        </div>
      </section>

      <section
        className="first-ship founder-diagnostic"
        data-service-circuit-target
        id="diagnostic"
      >
        <div className="first-ship-copy">
          <p className="section-kicker">START WITH THE MAP</p>
          <h2>Find where your founder signal stops compounding.</h2>
          <p>We&apos;ll review your founder voice, current channels, owned audience, proof capture, and distribution path. You get a one-page Founder Signal Map showing the broken handoffs and the first loop worth building.</p>
          <a className="button button-primary" href={diagnosticHref}>Request your Founder Signal Map</a>
          <small>APPLICATION-GATED · B2B SAAS · NO GENERIC CONTENT AUDIT</small>
        </div>
        <div className="first-ship-options">
          <p>YOUR MAP INCLUDES</p>
          <div><span>1</span><strong>Voice-system gaps</strong></div>
          <div><span>2</span><strong>Distribution leaks</strong></div>
          <div><span>3</span><strong>Owned-audience opportunity</strong></div>
          <div><span>4</span><strong>UGC and proof trigger</strong></div>
          <div><span>5</span><strong>First 30-day loop</strong></div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="faq-heading"><p className="section-kicker">QUESTIONS, ANSWERED</p><h2>The useful boundaries.</h2></div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details data-service-circuit-target key={faq.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<b aria-hidden="true">+</b></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="closing" data-service-circuit-target>
        <p className="section-kicker section-kicker-light">YOUR THINKING SHOULD OUTLIVE THE FEED</p>
        <h2>Build an audience that remembers where the idea came from.</h2>
        <a className="button button-accent" href={diagnosticHref}>Get the Founder Signal Map</a>
      </section>

      <SiteFooter />
    </main>
  );
}
