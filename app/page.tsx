const motionExamples = [
  {
    number: "01",
    title: "Sharpen the story",
    copy: "Positioning, messaging, homepage narratives, launch angles, and sales stories that make the value obvious.",
  },
  {
    number: "02",
    title: "Launch the motion",
    copy: "Landing pages, outbound sequences, campaign assets, founder content, and enablement built as one connected system.",
  },
  {
    number: "03",
    title: "Learn and improve",
    copy: "A clear ship log, useful signals, and the next best iteration—so execution compounds instead of resetting every month.",
  },
];

const capabilities = [
  "Positioning & messaging",
  "Landing pages",
  "Outbound activation",
  "Founder-led content",
  "AEO & data stories",
  "Sales enablement",
  "Campaign strategy",
  "GTM dashboards",
];

const faqs = [
  {
    question: "What counts as one active pipeline motion?",
    answer:
      "A bounded initiative with an agreed outcome, deliverables, owner, and finish line—like launching a dormant-lead reactivation campaign or rebuilding the story for a new segment. Not an endless category such as ‘fix marketing.’",
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
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Grow and Close home">
          <span>GROW</span>
          <span className="brand-mark">+</span>
          <span>CLOSE</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#motions">What we ship</a>
          <a href="#process">How it works</a>
          <a href="#pricing">Plans</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="header-cta" href="#first-ship">
          First ship free
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">GTM execution studio for B2B SaaS</p>
          <h1>
            Your GTM backlog,
            <span>shipped.</span>
          </h1>
          <p className="hero-lede">
            Grow &amp; Close turns stalled priorities into live pipeline motions—strategy,
            pages, campaigns, content, and enablement—without the cost of building a
            full team.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#first-ship">
              Get your first ship free
            </a>
            <a className="text-link" href="#pricing">
              See monthly plans <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-note">Senior-led. AI-accelerated. No long contract.</p>
        </div>

        <div className="hero-system" aria-label="A pipeline motion from priority to learning">
          <div className="system-topline">
            <span>ACTIVE MOTION / 01</span>
            <span className="live-dot">SHIPPING</span>
          </div>
          <p className="system-label">CURRENT PRIORITY</p>
          <h2>Turn dormant leads into qualified conversations.</h2>
          <div className="system-progress" aria-hidden="true">
            <span className="complete">01</span>
            <i />
            <span className="complete">02</span>
            <i />
            <span>03</span>
          </div>
          <div className="system-stages">
            <div>
              <b>Plan</b>
              <span>Segment + angle</span>
            </div>
            <div>
              <b>Ship</b>
              <span>Page + sequence</span>
            </div>
            <div>
              <b>Learn</b>
              <span>Signal + next move</span>
            </div>
          </div>
          <div className="ship-ticket">
            <span>THIS WEEK</span>
            <strong>Campaign live</strong>
            <span>Fri / 4:00 PM</span>
          </div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Service highlights">
        <p><strong>01</strong> One senior owner</p>
        <p><strong>02</strong> Weekly shipping</p>
        <p><strong>03</strong> Flat monthly fee</p>
        <p><strong>04</strong> Pause anytime</p>
      </section>

      <section className="problem statement-section">
        <p className="section-kicker">THE BOTTLENECK</p>
        <p className="statement">
          You probably don&apos;t need more ideas. You need someone to turn the right
          idea into a <em>live, coherent motion</em>—then improve it.
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
              <span>{motion.number}</span>
              <div>
                <h3>{motion.title}</h3>
                <p>{motion.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities" id="process">
        <div className="capability-title">
          <p className="section-kicker">THE CAPABILITY LAYER</p>
          <h2>Everything needed to move one priority forward.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <div className="capability-item" key={capability}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{capability}</p>
            </div>
          ))}
        </div>
        <p className="capability-note">
          Both plans access the same capabilities. You choose capacity—not a restricted
          service menu.
        </p>
      </section>

      <section className="operating-model">
        <div className="operator-copy">
          <p className="section-kicker section-kicker-light">HOW THE STUDIO RUNS</p>
          <h2>Senior judgment upfront. Specialist systems underneath.</h2>
          <p>
            You work directly with Varun Choraria, former marketing leader at GTM Buddy.
            Every motion is guided by experienced B2B SaaS judgment and accelerated by
            specialist AI systems for research, writing, design, analysis, and operations.
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
              For a founder or lean marketer who needs one important GTM priority moving
              every week.
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
              For teams that need two workstreams moving without adding another layer of
              management.
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
          <h2>Your first ship is free.</h2>
          <p>
            If there&apos;s a fit, we&apos;ll audit one GTM problem and ship one useful asset in
            week one. No generic deck. No obligation to subscribe.
          </p>
          <a className="button button-primary" href="mailto:hello@growandclose.com?subject=First%20ship%20application&body=Company%3A%0AWebsite%3A%0ABiggest%20GTM%20bottleneck%3A">
            Apply for a free first ship
          </a>
          <small>Application-gated · B2B SaaS only · limited weekly capacity</small>
        </div>
        <div className="first-ship-options">
          <p>CHOOSE ONE STARTING POINT</p>
          <div><span>A</span><strong>Homepage story</strong><small>Rewrite one decisive section.</small></div>
          <div><span>B</span><strong>Outbound sequence</strong><small>Build one focused sequence.</small></div>
          <div><span>C</span><strong>Campaign activation</strong><small>Turn one brief into a live-ready plan.</small></div>
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
        <p className="section-kicker section-kicker-light">READY WHEN THE BACKLOG IS</p>
        <h2>Stop carrying GTM work into next week.</h2>
        <a className="button button-accent" href="#first-ship">Ship the first thing free</a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span>GROW</span><span className="brand-mark">+</span><span>CLOSE</span>
        </a>
        <p>Senior-led GTM execution for B2B SaaS.</p>
        <a href="mailto:hello@growandclose.com">hello@growandclose.com</a>
        <p>© {new Date().getFullYear()} Grow &amp; Close</p>
      </footer>
    </main>
  );
}
