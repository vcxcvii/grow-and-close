/**
 * The three buyer pages.
 *
 * One reframe, three entry points. Every page carries the same villain
 * (AI made production abundant, so the decision became the scarce thing) and
 * resolves to the same metric (qualified pipeline created). What changes per
 * page is the symptom that buyer actually feels, their objection, and the
 * proof that answers it.
 *
 * Market evidence quoted below is third-party and citable. It is deliberately
 * used instead of client testimonials, which do not exist yet.
 */

export interface PersonaEvidence {
  stat: string;
  source: string;
}

export interface PersonaPageContent {
  slug: string;
  /** Nav and breadcrumb label. */
  label: string;
  role: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroLead: string;
  heroAccent: string;
  heroLede: string;
  heroNote: string;
  /** The symptom this buyer feels, in their language. */
  symptomKicker: string;
  symptomHeading: string;
  symptomCopy: string;
  /** Three specific ways the symptom shows up in their week. */
  symptoms: { title: string; copy: string }[];
  /** The old way this buyer has already tried, and why it failed for them. */
  triedHeading: string;
  tried: { label: string; copy: string }[];
  /** How the engagement resolves for this buyer specifically. */
  resolutionHeading: string;
  resolutionCopy: string;
  resolutionSteps: { title: string; copy: string }[];
  /** Third-party evidence, cited. */
  evidence: PersonaEvidence[];
  /** The objection this buyer raises, and the honest answer. */
  objections: { question: string; answer: string }[];
  planNudge: string;
  bookingTopic: string;
  closingKicker: string;
  closingHeading: string;
}

const METRIC = "qualified pipeline created";

export const personaPages: Record<string, PersonaPageContent> = {
  founders: {
    slug: "founders",
    label: "For founders",
    role: "Founder / CEO",
    metaTitle: "GTM Execution for B2B SaaS Founders | Grow & Close",
    metaDescription:
      "For founder-led B2B SaaS with no marketing bench. The story lives in your head and nothing ships without you. One senior owner takes a priority from decision to live, tied to qualified pipeline created.",
    eyebrow: "FOR FOUNDERS",
    heroLead: "You are the bottleneck,",
    heroAccent: "and more output will not fix it.",
    heroLede:
      "The story lives in your head, so every page, sequence and deck queues behind your calendar. AI made producing any of it nearly free, which is exactly why your queue got longer instead of shorter. What is missing is not throughput. It is somebody senior who can decide, finish, and be held to one number.",
    heroNote: `ONE PRIORITY AT A TIME · TIED TO ${METRIC.toUpperCase()}`,
    symptomKicker: "THE SYMPTOM YOU FEEL",
    symptomHeading: "Everything is 75% done and nothing is live.",
    symptomCopy:
      "Founders rarely have a shortage of drafts. They have a graveyard of nearly-finished work that needed one decision each, and the only person who can make those decisions is running the company.",
    symptoms: [
      {
        title: "You can pitch it, nobody can write it down.",
        copy: "On a call you explain the value perfectly. On the page it comes out generic, because the sharp version only exists in your head and translating it is a senior job.",
      },
      {
        title: "The agent got it to a first draft and stopped.",
        copy: "AI produced the outline, the copy and three variants. What it could not do was decide which one is true, so the tab is still open.",
      },
      {
        title: "You cannot tell if it is positioning or execution.",
        copy: "Pipeline is flat and there are two possible reasons. Diagnosing which one is the expensive skill, and guessing wrong costs you a quarter.",
      },
    ],
    triedHeading: "What you have already tried, and why it stalled.",
    tried: [
      {
        label: "FREELANCERS",
        copy: "Three specialists produced three good assets that did not add up to one argument, and integrating them became your job.",
      },
      {
        label: "AN AGENCY",
        copy: "Sold senior, staffed junior. You spent the calls re-explaining context that never made it past the account manager.",
      },
      {
        label: "AI TOOLS",
        copy: "Output went up immediately. Decisions did not, so the backlog grew faster than it cleared.",
      },
    ],
    resolutionHeading: "One priority, decided and shipped, in ten working days.",
    resolutionCopy:
      "You bring the priority that keeps slipping. We scope it on the call, name the one number it should move, and ship it to a dated finish line. You spend 90 minutes total.",
    resolutionSteps: [
      {
        title: "We take the story out of your head.",
        copy: "One session, recorded. You talk the way you talk on a sales call, and we do the translation into positioning you can hand to anyone.",
      },
      {
        title: "We decide, then build.",
        copy: "One claim, and a written list of what we are no longer claiming. Then the asset, built and live-ready, not a deck about the asset.",
      },
      {
        title: "You get a number and a falsifier.",
        copy: `A baseline for ${METRIC} that exists today, and a written statement of what result would prove the approach wrong.`,
      },
    ],
    evidence: [
      {
        stat: "An AI agent does 50 to 90% of what a great human employee can do on a knowledge-work task.",
        source: "Jacob Bank, founder of Relay.app, quoted in MKT1, 2026",
      },
      {
        stat: "92% of B2B homepages now say \"AI\" and 75% say \"agent\", so the words no longer differentiate anyone.",
        source: "MKT1 State of Marketing, 100 B2B startups, 2026",
      },
      {
        stat: "Fewer than 2% of B2B startups have the AEO basics in place: machine-readable dates, structured data, extractable answers.",
        source: "MKT1 State of Marketing, 100 B2B startups, 2026",
      },
    ],
    objections: [
      {
        question: "I cannot afford a senior marketer yet.",
        answer:
          "A senior in-house hire is a six-figure commitment plus months of ramp before anything ships. The GTM Reset sprint is $3,000 and ships one priority in ten working days, and if the first deliverable misses the published rubric there is no invoice.",
      },
      {
        question: "How is this different from a fractional CMO?",
        answer:
          "A fractional CMO usually sells you strategy and leaves execution to whoever you can find. This is one senior owner who makes the call and then ships the asset, because at your stage those cannot be two different people.",
      },
      {
        question: "I do not have time to manage another vendor.",
        answer:
          "Ninety minutes of your time for the sprint, total. The engagement is designed around the assumption that your attention is the scarcest input, not the cheapest.",
      },
    ],
    planNudge:
      "Most founders start with the $3,000 GTM Reset sprint, because it is a smaller decision with a dated finish line.",
    bookingTopic: "Founder: the GTM priority stuck in my head, and the number it should move",
    closingKicker: "BRING THE ONE THAT KEEPS SLIPPING",
    closingHeading: "One priority. Decided, shipped, and tied to a number.",
  },

  "heads-of-marketing": {
    slug: "heads-of-marketing",
    label: "For heads of marketing",
    role: "Head of Marketing / Marketing Lead",
    metaTitle: "Senior GTM Execution Support for Heads of Marketing | Grow & Close",
    metaDescription:
      "For the marketing team of one. You own the plan and you are also the assembly line. One senior owner takes a priority end to end so you can go back to deciding, tied to qualified pipeline created.",
    eyebrow: "FOR HEADS OF MARKETING",
    heroLead: "You own the plan.",
    heroAccent: "You are also the assembly line.",
    heroLede:
      "A founder with opinions, a sales team filing requests, and one of you. You spend the week producing instead of deciding, and production is the part that got cheap. The scarce thing is the judgement you no longer have room to apply.",
    heroNote: `SENIOR CAPACITY BESIDE YOU · TIED TO ${METRIC.toUpperCase()}`,
    symptomKicker: "THE SYMPTOM YOU FEEL",
    symptomHeading: "You have become the integration layer.",
    symptomCopy:
      "Nothing in your week is hard on its own. What is hard is that every piece arrives from a different direction and you are the only one holding the argument together, which leaves no room for the work only you can do.",
    symptoms: [
      {
        title: "You are stitching, not deciding.",
        copy: "Pages, briefs, sequences and slides all need to say the same thing, and you are the only mechanism making that true.",
      },
      {
        title: "Requests arrive as deliverables, not problems.",
        copy: "Sales asks for a one-pager, the founder asks for a launch. Nobody hands you the pipeline problem underneath, so you cannot prioritise honestly.",
      },
      {
        title: "Experiments are too small to teach you anything.",
        copy: "Budget gets split across enough channels that no single one gets the volume to produce a real answer, so you end the quarter with activity and no learning.",
      },
    ],
    triedHeading: "What you have already tried, and why it stalled.",
    tried: [
      {
        label: "A JUNIOR HIRE",
        copy: "Added hands, added review load. You gained production and lost the hours you used to spend thinking.",
      },
      {
        label: "AGENCIES",
        copy: "They needed the strategy you did not have time to write, then delivered against their reading of it.",
      },
      {
        label: "MORE TOOLING",
        copy: "The stack got more expensive and the cost of running a real experiment went up with it.",
      },
    ],
    resolutionHeading: "A senior pair of hands that arrives with judgement attached.",
    resolutionCopy:
      "You keep owning the plan. We take one motion off it entirely, end to end, and hand it back live with the measurement in place. No context-rebuilding tax on you.",
    resolutionSteps: [
      {
        title: "You hand over a problem, not a brief.",
        copy: "Name the pipeline problem and the finish line. We write the brief ourselves and show it to you before building anything.",
      },
      {
        title: "We own the whole motion, including the seams.",
        copy: "Strategy, copy, build, and the handoff dependencies: routing, follow-up timing, approvals. The asset working is the deliverable, not the asset existing.",
      },
      {
        title: "You get the argument in writing.",
        copy: "Positioning you can reuse across every other request that lands on you, so the next five deliverables get faster.",
      },
    ],
    evidence: [
      {
        stat: "Below 250 headcount, marketing teams are typically 5% or less of total company headcount.",
        source: "MKT1 State of Marketing, 100 B2B startups, 2026",
      },
      {
        stat: "Splitting a $10K channel budget across 30 creatives means none of them gets enough volume to teach you what is working.",
        source: "MKT1, on paid playbooks, 2026",
      },
      {
        stat: "96% of B2B startups run LinkedIn ads, so presence on the channel is no longer a differentiator.",
        source: "MKT1 State of Marketing, 100 B2B startups, 2026",
      },
    ],
    objections: [
      {
        question: "Will this make me look like I cannot cope?",
        answer:
          "The engagement is scoped as capacity you direct, and the positioning artifacts are yours to present. You are buying a senior contributor, not a replacement, and the ship log makes what moved legible to your founder.",
      },
      {
        question: "I do not have time to onboard anyone.",
        answer:
          "One scoping call, then we write the brief and bring it back to you. The design assumption is that your review time is the constraint, so we spend ours reducing it.",
      },
      {
        question: "What if I need something outside the active motion?",
        answer:
          "Add it to the backlog and it queues in order. Pipeline One runs one active motion, Pipeline Team runs two in parallel when a launch and a demand motion genuinely cannot wait for each other.",
      },
    ],
    planNudge:
      "Most marketing leads start on Pipeline One at $3,500/month, and move to Pipeline Team when two priorities are genuinely connected.",
    bookingTopic: "Head of Marketing: the motion I want taken off my plate end to end",
    closingKicker: "GO BACK TO DECIDING",
    closingHeading: "Hand over one motion. Keep the argument.",
  },

  cmos: {
    slug: "cmos",
    label: "For CMOs",
    role: "CMO / VP Marketing",
    metaTitle: "Senior GTM Execution for CMOs and VPs of Marketing | Grow & Close",
    metaDescription:
      "The strategy is signed off and the quarter keeps eating it. One senior owner takes the priority that cannot slip, ships it to a published standard, and reports against qualified pipeline created.",
    eyebrow: "FOR CMOs AND VPs OF MARKETING",
    heroLead: "The strategy is signed off.",
    heroAccent: "The quarter keeps eating it.",
    heroLede:
      "Launches, sales requests and board reporting consume the team, and the priority that actually matters slides another two weeks. You do not need another plan or more throughput. You need one priority finished to a standard you would put your name on.",
    heroNote: `ONE PRIORITY FINISHED · REPORTED AGAINST ${METRIC.toUpperCase()}`,
    symptomKicker: "THE SYMPTOM YOU FEEL",
    symptomHeading: "Decisions get made and then quietly do not happen.",
    symptomCopy:
      "The problem is not the decision quality. It is that between the decision and the market there are six handoffs, and the estate keeps carrying last year's story because nobody owns the difference.",
    symptoms: [
      {
        title: "The repositioning is announced but not carried.",
        copy: "The new words are on the homepage. The old ones are still on nine service pages, the deck, and the outbound, so the market hears both.",
      },
      {
        title: "Every review debates whose number is right.",
        copy: "Two dashboards disagree because two definitions disagree, and the meeting spends its energy reconciling instead of deciding.",
      },
      {
        title: "Your team is at capacity on things that are not the priority.",
        copy: "Sales support and reporting are legitimate and they are also unbounded, so the strategic motion is always the one that gets deferred.",
      },
    ],
    triedHeading: "What you have already tried, and why it stalled.",
    tried: [
      {
        label: "A LARGER AGENCY",
        copy: "Senior in the pitch, junior on the account. The strategic judgement you were buying was not the judgement that showed up.",
      },
      {
        label: "REPRIORITISING INTERNALLY",
        copy: "The team agreed, then the quarter arrived with its own agenda and the deferred thing got deferred again.",
      },
      {
        label: "MORE AI LEVERAGE",
        copy: "Output per head went up. The number of unresolved decisions went up with it, because those were never the constraint.",
      },
    ],
    resolutionHeading: "The priority that cannot slip, owned by one senior person.",
    resolutionCopy:
      "We take one bounded motion, ship it against a published rubric, and report it against qualified pipeline created. Your team keeps the quarter. We carry the thing the quarter keeps eating.",
    resolutionSteps: [
      {
        title: "We diagnose before we build.",
        copy: "Is the number real, is it a step or a slope, does it survive segmentation. Named falsifier before spend, and a written statement of how much of the gap the work explains.",
      },
      {
        title: "We carry the story across the whole estate.",
        copy: "A repositioning is not done when the homepage changes. It is done when the pages carrying the old term are retired or rewritten, and we treat that as in scope.",
      },
      {
        title: "You get a defensible report.",
        copy: "One metric, one definition, the evidence for each line, and what we would need to see to change the recommendation.",
      },
    ],
    evidence: [
      {
        stat: "Only 2 of 100 surveyed B2B startups with under $100M raised have a CMO, so the role carries an unusually wide span at this stage.",
        source: "MKT1 State of Marketing, 100 B2B startups, 2026",
      },
      {
        stat: "Fewer than 2% of B2B startups have the AEO basics in place, which is where buyers increasingly form their shortlist.",
        source: "MKT1 State of Marketing, 100 B2B startups, 2026",
      },
      {
        stat: "92% of B2B homepages say \"AI\" and 66% say \"platform\", so category language has stopped carrying differentiation.",
        source: "MKT1 State of Marketing, 100 B2B startups, 2026",
      },
    ],
    objections: [
      {
        question: "How do you work alongside an existing team and agency roster?",
        answer:
          "Scoped to one motion with explicit boundaries on what we own and what stays with you, written down before work starts. We do not need to touch your roster to finish one priority.",
      },
      {
        question: "What stops this becoming another vendor to manage?",
        answer:
          "One senior owner, one active motion, one metric, and a ship log you can forward. If the first deliverable misses the published rubric there is no invoice, which is the accountability an agency retainer does not offer.",
      },
      {
        question: "Can you operate at our level of governance?",
        answer:
          "Every claim traces to a source, superlatives are verified live before publication, and AI-assisted work is human-approved before release. The operational boundaries are published rather than negotiated per project.",
      },
    ],
    planNudge:
      "CMOs typically start with a GTM Reset sprint on the priority that has slipped twice, then move to Pipeline Team when two motions must run in parallel.",
    bookingTopic: "CMO: the priority the quarter keeps eating, and the number it should move",
    closingKicker: "THE ONE THAT CANNOT SLIP AGAIN",
    closingHeading: "One priority, finished to a published standard.",
  },
};

export const personaList = Object.values(personaPages);
