import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { CONTACT_EMAIL, bookingHref } from "../site";

export const metadata: Metadata = {
  title: "Privacy | Grow & Close",
  description:
    "What Grow & Close collects, why, how long it is kept, and how to have it deleted. Analytics, email capture, scheduling, and hosting explained plainly.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const contactHref = bookingHref("Question about the Grow & Close privacy policy");

export default function PrivacyPage() {
  return (
    <main className="legal-page" data-brand-system="gc-logic-v1">
      <SiteHeader ctaHref={contactHref} ctaLabel="Ask a question" />

      <section className="legal-hero">
        <nav className="services-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span>Privacy</span>
        </nav>
        <p className="eyebrow">TRUST / PRIVACY</p>
        <h1>What we collect, <span>and why.</span></h1>
        <p>
          Short version: an email address if you give us one, anonymous analytics, and
          nothing else. No advertising pixels, no data sold, no profiles built.
        </p>
        <small>LAST UPDATED / AUGUST 17, 2026</small>
      </section>

      <section className="legal-content">
        <aside aria-label="Privacy sections">
          <p>ON THIS PAGE</p>
          <a href="#who">01 / Who we are</a>
          <a href="#what">02 / What we collect</a>
          <a href="#why">03 / Why we collect it</a>
          <a href="#processors">04 / Services we use</a>
          <a href="#retention">05 / How long we keep it</a>
          <a href="#rights">06 / Your rights</a>
          <a href="#contact">07 / Contact</a>
        </aside>

        <div className="legal-sections">
          <article id="who">
            <span>01</span>
            <h2>Who we are</h2>
            <p>
              Grow &amp; Close is a decision studio operated by Varun Choraria. The
              site is growandclose.com. For anything on this page, write to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </article>

          <article id="what">
            <span>02</span>
            <h2>What we collect</h2>
            <p>
              Your email address and any details you type, when you submit a form or send
              an email. Anonymous, aggregated usage data through analytics: pages viewed,
              approximate country, device type, and referrer. Standard server logs at the
              hosting layer, including IP address, for security and abuse prevention.
            </p>
            <p>
              We do not collect payment details on this site, do not use advertising or
              retargeting pixels, and do not attempt to identify individual visitors from
              analytics data.
            </p>
          </article>

          <article id="why">
            <span>03</span>
            <h2>Why we collect it</h2>
            <p>
              To reply to you, to send the resource you asked for, to send occasional
              updates if you opted in, and to understand which pages are useful so we can
              improve them. Consent is the basis for email. Legitimate interest is the
              basis for security logs and aggregate analytics.
            </p>
          </article>

          <article id="processors">
            <span>04</span>
            <h2>Services we use</h2>
            <p>
              Cloudflare hosts the site and stores form submissions in a database located
              on its network. Resend sends transactional and newsletter email. Google
              Analytics provides aggregate usage measurement. Cal.com handles scheduling
              when you book a call. Each of these processes data under its own terms, and
              each is used only for the purpose named here.
            </p>
          </article>

          <article id="retention">
            <span>05</span>
            <h2>How long we keep it</h2>
            <p>
              Email addresses are kept until you unsubscribe or ask for deletion.
              Conversation records are kept for as long as needed to serve the enquiry and
              meet record-keeping obligations. Aggregate analytics are retained on the
              analytics provider default schedule. Server logs are short-lived.
            </p>
          </article>

          <article id="rights">
            <span>06</span>
            <h2>Your rights</h2>
            <p>
              You can ask for a copy of what we hold about you, ask for it to be corrected
              or deleted, withdraw consent for email at any time, and object to processing.
              Every newsletter carries an unsubscribe link. Requests are actioned within
              30 days, usually the same week.
            </p>
          </article>

          <article id="contact">
            <span>07</span>
            <h2>Contact</h2>
            <p>
              Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the
              subject line Privacy, or <a href={contactHref}>book a call</a>. See also the{" "}
              <Link href="/terms">terms</Link> and the{" "}
              <Link href="/disclaimer">disclaimer</Link>.
            </p>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
