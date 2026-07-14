# Grow & Close — Design and Content System

Status: implementation source of truth  
Applies to: landing page, future service pages, campaign pages, and social cards  
Primary file map: `app/page.tsx`, `app/globals.css`, `app/layout.tsx`, `public/og.png`

## 1. Brand thesis

Grow & Close is a senior-led GTM execution studio for lean B2B SaaS teams. It turns an ordered backlog into live, connected pipeline motions.

The visual system must feel:

- Operational, not ornamental.
- Senior, not corporate.
- Fast, not frantic.
- AI-native, not AI-themed.
- Direct, not simplistic.

The page should look like an operating system for useful momentum: visible sequence, bounded work, clear ownership, and an obvious next action.

## 2. Audience hierarchy

Primary buyers:

1. Founder of a seed-to-Series-B B2B SaaS company.
2. CMO or VP Marketing with a clear roadmap and insufficient senior capacity.
3. Head of Marketing carrying both strategy and production.

Secondary readers:

- Revenue leaders evaluating cross-functional usefulness.
- Operators or investors referring a company.
- Future GTM engineers and marketers evaluating the studio.

Every primary buyer must self-identify above pricing. Never collapse all three into “busy teams.” Their circumstances differ; the common failure mode is missing end-to-end ownership.

## 3. Messaging spine

Core promise:

> Your GTM backlog, shipped.

Expanded promise:

> A senior execution pod turns one or two priorities into coherent, live pipeline motions.

Problem:

> The visible backlog is a symptom. The actual bottleneck is the ownership gap between strategy and shipped work.

Mechanism:

> One ordered backlog, bounded active work, weekly output, direct feedback, and a ship log.

Differentiator:

> Senior human judgment and accountability, accelerated by specialist AI systems.

Risk reversal:

> An application-gated first ship, free.

Primary CTA:

> Get your first ship free.

Secondary CTA:

> See monthly plans.

## 4. Content truth rules

- Never invent customers, logos, testimonials, revenue, conversion rates, or delivery times.
- Do not claim “full GTM team” as present staffing. Describe it as output or future vision only when context is explicit.
- Keep Varun’s ownership clear. AI supports the work; it does not replace accountability.
- Use “live-ready” unless Grow & Close has direct publishing access and actually launches the work.
- “Unlimited backlog” means unlimited queued requests, not unlimited concurrent work.
- Plans differ by active capacity, coordination, and operating cadence—not arbitrary capability gates.
- “First ship free” remains application-gated and capacity-limited.
- Replace placeholders only with supplied, verified destinations.

Banned vague phrases unless immediately made concrete:

- End-to-end solutions.
- Supercharge growth.
- Unlock potential.
- Seamless collaboration.
- Cutting-edge AI.
- Results-driven.
- 10x output.

## 5. Page sequence and exit criteria

### Header

Purpose: identify the brand, expose the page map, and preserve the primary CTA.

Must contain:

- G/C lockup.
- What we ship.
- How it works.
- Plans.
- FAQ.
- First ship free.

Exit criterion: a visitor can navigate or act within five seconds.

### Hero

Purpose: state the outcome, audience, and operating category.

Must contain:

- “Your GTM backlog, shipped.”
- Founders, CMOs, and Heads of Marketing.
- “Senior execution pod” framing.
- Primary and secondary CTA.
- Senior-led / AI-accelerated / no-long-contract qualifier.
- A visual example of one active motion.

Exit criterion: a buyer can answer “what is this, for whom, and why now?”

### Signal strip

Purpose: make the commercial operating model scannable.

Items: one senior owner, weekly shipping, flat monthly fee, pause anytime.

### Problem

Purpose: show nuanced recognition before presenting the service.

Must contain:

- Shared ownership-gap diagnosis.
- Founder-specific symptom.
- CMO-specific symptom.
- Head of Marketing-specific symptom.
- Visible-symptom versus actual-problem close.

Exit criterion: at least one card feels uncomfortably specific to the reader.

### What we own

Purpose: show that the unit of work is a connected motion, not a bag of assets.

Sequence: sharpen story → launch motion → learn and improve.

### How we work

Purpose: make purchasing and collaboration feel low-friction.

Sequence:

1. Queue the priority.
2. Activate one or two motions.
3. Ship connected work weekly.
4. Review signals and reorder.

The current page compresses this into three customer-facing steps: queue, ship, improve.

Exit criterion: a buyer understands what they do, what Grow & Close does, and when work appears.

### Capability layer

Purpose: demonstrate range without turning the offer into an à-la-carte menu.

Rule: capabilities are ingredients. The motion and outcome remain the product.

### Studio model

Purpose: establish who owns judgment and how output scales.

Lead with human seniority. Mention AI systems after accountability is established.

### Pricing

Purpose: make the capacity distinction obvious.

- Pipeline One: one active motion; founders or lean marketing leaders.
- Pipeline Team: two active motions; CMOs and small GTM teams with stakeholder coordination.

Never hide the price behind a call unless the commercial model changes.

### First ship

Purpose: reduce perceived risk and move qualified readers into a concrete starting point.

Keep the examples bounded: homepage section, outbound sequence, campaign activation.

### FAQ

Purpose: resolve scope, category, capacity, exclusions, and cancellation questions.

### Closing and footer

Purpose: repeat the action and provide a complete information map.

Footer groups: Explore, Engage, Contact. Add LinkedIn and calendar only after exact URLs are supplied. Add Privacy and Terms only after those pages exist.

## 6. Color system

Core tokens:

| Token | Value | Role |
|---|---:|---|
| Ink | `#11120f` | Structure, authority, dark fields |
| Paper | `#f3f0e6` | Main canvas |
| Paper deep | `#e8e3d5` | Secondary neutral fields |
| Electric | `#175cff` | Brand action, active state, emphasis |
| Signal orange | `#ff7a00` | Shipping, progress, small high-energy highlight |
| Muted | `#6b6c64` | Supporting text on paper |

Usage target:

- 55–65% paper.
- 25–35% ink.
- 5–10% electric blue.
- Under 5% signal orange.

Rules:

- No lime green.
- Electric blue owns brand/action emphasis; bright orange owns shipping/progress signals.
- Do not add gradients.
- Use white on electric blue for body copy.
- Use ink on signal orange.
- Do not place electric blue text on ink at body or label sizes; use signal orange or white.
- Focus rings use electric blue on light surfaces. On dark surfaces, signal orange is acceptable if blue lacks contrast.

Verified pairs:

- Ink on signal orange: 7.19:1.
- Signal orange on ink: 7.19:1.
- White on electric blue: 5.24:1.
- Electric blue on paper: 4.59:1.
- Never use signal orange text on electric blue; contrast is only 2.00:1.

## 7. Typography

Families:

- Primary sans: Geist Sans.
- Operational labels: Geist Mono.
- Editorial emphasis: Georgia italic, used only for the hero’s second line if retained.

Hierarchy:

- Hero: `clamp(66px, 9.1vw, 148px)` desktop; `clamp(52px, 18vw, 78px)` mobile.
- Section H2: `clamp(48px, 5.6vw, 92px)`.
- Card H3: `clamp(28px, 3vw, 52px)`.
- Lead: 18–25px.
- Body: 15–19px.
- Labels: 9–12px mono, uppercase, 0.04–0.11em tracking.

Rules:

- Headlines use tight negative tracking and short line lengths.
- Body copy uses 1.5–1.65 line height.
- Never put paragraphs in all caps.
- Do not use more than three typographic voices in one viewport.

## 8. Logo construction

The logo is a CSS/text lockup. No image request is needed to render it.

Parts:

- Unboxed typographic G/C glyph with a fine divider.
- G and C inherit the surface text color.
- Editorial electric-blue slash.
- Two-line GROW / CLOSE wordmark.

Minimum size:

- Glyph cap height: approximately 24px.
- Full lockup width: approximately 96px.

Clear space:

- Keep at least half the glyph width on every side.

Rules:

- Do not box, round, or fill the glyph.
- Do not add shadows.
- Do not separate G/C into unrelated icons.
- On dark backgrounds, use white G/C letters and wordmark; retain electric slash.
- `aria-label` must read “Grow and Close home”; decorative glyph content stays hidden from assistive technology.

## 9. Layout system

Desktop canvas:

- Maximum visual working width is controlled by section padding, not a centered card container.
- Horizontal gutter: `clamp(20px, 6vw, 100px)`.
- Hero/header gutter: `clamp(20px, 4vw, 72px)`.
- Major section vertical space: 80–180px.
- Internal card padding: 22–58px.
- Grid gaps: 22–140px based on hierarchy.

Breakpoints:

- Wide desktop: above 1100px.
- Tablet/small desktop: 781–1100px.
- Mobile: up to 780px.
- Narrow mobile: up to 480px.

Grid rules:

- Every grid child that contains text must tolerate `min-width: 0`.
- Role cards are three columns desktop and one column mobile.
- Pricing is two columns desktop and one column mobile.
- Capabilities are four columns wide, two columns tablet, one column mobile.
- Footer is brand plus three link groups desktop; single-column shell on mobile.

## 10. Borders, shadows, and shape

- Default border: 1px ink.
- Dark border: 1px white at 20–26% opacity.
- Radius: zero, except circular progress indicators.
- Hero system shadow: hard signal orange offset, no blur.
- Button hover shadow: hard ink offset, no blur.
- Never use soft card shadows, glass cards, or pill-shaped containers.

## 11. Components

### Buttons

Primary: signal orange background, ink text, ink border.  
Dark: ink background, white text.  
Light-on-blue: paper background, ink text.  
Minimum height: 52px desktop, 44px mobile.  
Narrow mobile: important CTAs become full width.

Hover transforms apply only where hover exists. Keyboard focus must remain visible without relying on movement.

### Problem card

Required order: role label → symptom headline → business consequence. Cards stay visible together; do not convert them into tabs or a carousel.

### Workflow step

Required order: step number → verb-led title → explanation → cadence label. Keep the explanation under four lines on desktop where possible.

### Pricing card

Keep identical anatomy and comparable feature count. Pipeline Team uses the dark featured treatment. Feature differences must reflect actual service delivery.

### FAQ

Use native `details` and `summary`. The first item may open by default. Preserve keyboard interaction and a visible focus ring.

## 12. Responsive behavior

At 1100px:

- Hero becomes one column.
- Workflow and studio model become one column.
- Capability grid becomes two columns.
- Footer columns compress.

At 780px:

- Desktop navigation hides; primary header CTA remains.
- Header uses 16px side padding and a 44px CTA.
- Hero system follows hero copy.
- Signal strip becomes two columns.
- Problem, motion, pricing, first-ship, and FAQ layouts stack.
- Pricing cards lose forced minimum height.
- FAQ headings stop sticking.
- Footer becomes one shell column; link groups may remain two-up.

At 480px:

- Remove hero-system and ticket rotation.
- Make primary hero and first-ship buttons full width.
- Motion numbers move above text.
- Footer link groups stack.
- Price toplines wrap.

Mandatory test widths: 320, 375, 390, 430, 768, 1024, and 1440px.

## 13. Accessibility

- Maintain WCAG AA contrast for body text.
- All interactive targets are at least 44px high on touch layouts.
- Preserve semantic landmarks: header, nav, main, sections, footer.
- Every section anchor uses a sticky-header scroll offset.
- Do not encode state by color alone.
- Decorative visuals use `aria-hidden`; explanatory visuals get useful labels.
- Respect `prefers-reduced-motion`.
- Test at 200% zoom.
- Test keyboard order through header, CTAs, pricing, FAQ, and footer.
- No horizontal scroll at 320px.

## 14. Interaction rules

- Motion should communicate response, not decorate idle states.
- Navigation underline: 180ms.
- Button lift: 150ms, hover-capable devices only.
- FAQ indicator rotation: 180ms.
- No scroll-jacking, marquee, autoplay media, or parallax.

## 15. External destinations and dependencies

Current safe placeholders:

- Production domain: `growandclose.com`; live on Cloudflare Workers.
- Email CTAs: `hello@growandclose.com`.
- Payment: not connected.
- Newsletter: not connected.
- Calendar: intentionally omitted.
- LinkedIn: intentionally omitted.

Required from owner before public launch:

1. Add supplied A, CNAME, and ownership-verification TXT records at the DNS provider.
2. Confirm inbox receiving `hello@growandclose.com`.
3. Add Resend API key and verify sending domain privately.
4. Add Razorpay subscription/payment links or product IDs.
5. Supply exact calendar URL, if calls are offered.
6. Supply exact LinkedIn/company URLs, if included.
7. Approve proof: customer names, logos, testimonials, or quantified outcomes.
8. Approve Privacy and Terms copy before collecting payment or newsletter data.

Never commit secrets. Use host-managed environment variables.

## 16. Social card

Canvas: 1200 × 630px.  
Copy: brand name, “Your GTM backlog, shipped.”, and “Senior-led GTM execution for B2B SaaS.”  
Style: ink/paper field, electric blue emphasis, signal orange shipping accent, G/C mark.  
Safe zone: keep critical copy 72px from every edge.  
Do not use lime green.

## 17. Implementation guardrails

- Prefer server-rendered static content.
- Avoid client JavaScript unless interaction requires it.
- Keep content arrays at the top of `app/page.tsx` for easy editing.
- Keep tokens in `:root`; do not scatter new hex values through components.
- Reuse existing classes before creating near-duplicates.
- No model-authored SVG illustrations.
- No stock-person photography.
- No fake dashboard screenshots.
- No dependency for a component CSS can express.
- Keep the page functional if images fail.

## 18. Preflight checklist

Content:

- [ ] Founder, CMO, and Head of Marketing are named.
- [ ] Each role has a distinct problem statement.
- [ ] Offer is described as a motion, not asset volume.
- [ ] Pipeline One and Team capacity difference is explicit.
- [ ] AI follows senior human accountability.
- [ ] No unsupported proof exists.

Design:

- [ ] No lime green remains.
- [ ] G/C logo is legible at mobile size.
- [ ] Blue, signal orange, and ink have distinct jobs.
- [ ] No horizontal overflow at 320px.
- [ ] Footer has Explore, Engage, and Contact.
- [ ] Social card matches the current palette.

Interaction and accessibility:

- [ ] All anchors clear the sticky header.
- [ ] Focus rings are visible.
- [ ] Touch targets meet 44px minimum.
- [ ] Reduced motion works.
- [ ] FAQ works by keyboard.
- [ ] 200% zoom preserves reading order.

Commercial wiring:

- [ ] Domain resolves with valid TLS.
- [ ] Inbox receives every mailto CTA.
- [ ] Resend domain is verified before newsletter launch.
- [ ] Razorpay links complete a real test payment.
- [ ] Privacy and Terms exist before form/payment collection.
- [ ] Analytics events are documented before adding scripts.

Release:

- [ ] `npm run build` passes.
- [ ] Server-render test passes.
- [ ] Metadata uses the production domain.
- [ ] Open Graph image returns 200.
- [ ] Mobile width matrix checked.
- [ ] CTA destinations checked manually.
- [ ] Private preview approved before public deployment.

## 19. Never do

- Reintroduce lime green or low-contrast blue/orange text pairings.
- Turn the visual system into generic SaaS gradients and rounded cards.
- Lead with AI agents instead of buyer outcomes.
- Present the future team as current headcount.
- Add testimonials, logos, or numbers without written approval.
- Hide pricing behind “book a demo.”
- Add social/calendar links with guessed URLs.
- Add mobile carousels for core information.
- Create a second primary CTA competing with First Ship.
- Publish a credential, API key, or payment secret.
