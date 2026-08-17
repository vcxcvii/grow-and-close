import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "../components/json-ld";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import {
  BOOKING_URL,
  CONTACT_EMAIL,
  GITHUB_URL,
} from "../site";
import { CalEmbed } from "./cal-embed";

export const metadata: Metadata = {
  title: "Book a Call | Grow & Close",
  description:
    "Book a 30-minute call with Grow & Close. Bring the GTM priority that's stuck, and leave with a scoped approach.",
  alternates: { canonical: "/book-a-call" },
  openGraph: {
    title: "Book a Call | Grow & Close",
    description: "Thirty minutes, no deck. Pick a time on the calendar.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Book a call with Grow & Close" }],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://growandclose.com/" },
    { "@type": "ListItem", position: 2, name: "Book a call", item: "https://growandclose.com/book-a-call" },
  ],
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://growandclose.com/book-a-call",
  mainEntity: {
    "@type": "Organization",
    name: "Grow & Close",
    email: CONTACT_EMAIL,
    url: "https://growandclose.com",
  },
};

const proofItems = [
  {
    kicker: "JUDGE THE WORK FIRST",
    title: "Free skills library",
    copy: "The exact workflows we run inside client engagements, installable in Claude. No call, no gate.",
    href: "/skills",
    label: "Open the skills library →",
  },
  {
    kicker: "NOTHING TO HIDE",
    title: "Working notes, in public",
    copy: "The tooling and delivery workflow behind every engagement, versioned in the open.",
    href: GITHUB_URL,
    label: "Open GitHub →",
    external: true,
  },
  {
    kicker: "SCORED, NOT PROMISED",
    title: "A published rubric",
    copy: "The GTM Reset sprint is scored against a rubric you see before you buy. Miss it, and there's no invoice.",
    href: "/pricing#plans",
    label: "See how pricing works →",
  },
];

const processSteps = [
  {
    title: "Bring the priority.",
    copy: "Tell us the one GTM priority that keeps slipping and the number it should move.",
  },
  {
    title: "We scope it live.",
    copy: "No deck, no pitch. Thirty minutes to turn the priority into a bounded, dated plan.",
  },
  {
    title: "You decide.",
    copy: "Hire us or don't, either way you leave with a scoped approach you can hand to anyone.",
  },
];

export default async function BookACallPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;

  return (
    <main className="book-page legal-page" data-brand-system="gc-logic-v1">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={contactJsonLd} />
      <SiteHeader ctaHref="#calendar" ctaLabel="Book a call" />

      <section className="legal-hero">
        <nav className="services-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span>Book a call</span>
        </nav>
        <p className="eyebrow">BOOK A CALL</p>
        <h1>Bring the priority. <span>We&apos;ll scope it live.</span></h1>
        <p>
          Thirty minutes, no deck. Tell us the GTM priority that keeps slipping and the
          number it should move, and you leave with a scoped approach whether or not you
          hire us.
        </p>
        <small>REPLIES WITHIN ONE WORKING DAY · B2B SAAS ONLY</small>
      </section>

      <section className="proof-strip" aria-label="Judge the standard of work before you book">
        {proofItems.map((item) => (
          <div className="proof-item" key={item.title}>
            <p className="section-kicker">{item.kicker}</p>
            <b>{item.title}</b>
            <p>{item.copy}</p>
            {item.external ? (
              <a href={item.href} rel="noopener noreferrer" target="_blank">{item.label}</a>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </div>
        ))}
      </section>

      <section className="process-steps" aria-label="What happens on the call">
        {processSteps.map((step, index) => (
          <div key={step.title}>
            <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </div>
        ))}
      </section>

      <section className="book-embed" id="calendar">
        <div className="book-embed-heading">
          <p className="section-kicker">PICK A TIME</p>
          <h2>Thirty minutes on the calendar.</h2>
        </div>
        <CalEmbed topic={topic} />
        <p className="book-fallback">
          <span>Prefer to open it separately?</span>
          <a href={BOOKING_URL} rel="noopener noreferrer" target="_blank">
            Open the calendar in a new tab ↗
          </a>
          <span>·</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p className="book-notes">
          AI-assisted delivery, human-approved before release: research, drafting, and
          production run on AI workflows we build ourselves; every deliverable is reviewed
          and signed off by a human before it ships.
        </p>
      </section>

      <SiteFooter id="contact" pageEndId="page-end" />
    </main>
  );
}
