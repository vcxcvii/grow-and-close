import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "../components/json-ld";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import {
  BOOKING_URL,
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  bookingHref,
} from "../site";

export const metadata: Metadata = {
  title: "Contact | Grow & Close",
  description:
    "Book a 30-minute call with Grow & Close, or email hello@growandclose.com. GTM execution for founder-led B2B SaaS teams.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Grow & Close",
    description: "Book a 30-minute call, or send one email.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Contact Grow & Close" }],
  },
};

const callHref = bookingHref("What I want shipped, and the number it should move");

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://growandclose.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://growandclose.com/contact" },
  ],
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://growandclose.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Grow & Close",
    email: CONTACT_EMAIL,
    url: "https://growandclose.com",
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page" data-brand-system="gc-logic-v1">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={contactJsonLd} />
      <SiteHeader ctaHref={callHref} ctaLabel="Book a call" />

      <section className="legal-hero">
        <nav className="services-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span>Contact</span>
        </nav>
        <p className="eyebrow">CONTACT</p>
        <h1>One call. <span>Bring the priority.</span></h1>
        <p>
          Thirty minutes, no deck. Tell us the GTM priority that keeps slipping and the
          number it should move, and you will leave the call with a scoped approach
          whether or not you hire us.
        </p>
        <small>REPLIES WITHIN ONE WORKING DAY · B2B SAAS ONLY</small>
      </section>

      <section className="contact-options">
        <article className="contact-card contact-card-primary">
          <p className="section-kicker">BEST OPTION</p>
          <h2>Book a 30-minute call</h2>
          <p>
            Pick a time directly on the calendar. You get the founder, not a sales
            development rep.
          </p>
          <a className="button button-accent" href={callHref}>
            Open the calendar
          </a>
          <small>{BOOKING_URL.replace("https://", "")}</small>
        </article>

        <article className="contact-card">
          <p className="section-kicker">PREFER TO WRITE FIRST</p>
          <h2>Send one email</h2>
          <p>
            Company, website, the priority that is stuck, and the number it should move.
            That is enough for a useful first reply.
          </p>
          <a className="button button-dark" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <small>ONE WORKING DAY RESPONSE</small>
        </article>

        <article className="contact-card">
          <p className="section-kicker">JUDGE THE WORK FIRST</p>
          <h2>Try the free skills</h2>
          <p>
            The workflows we run inside client engagements, installable in Claude. No
            call needed, no gate.
          </p>
          <Link className="button button-dark" href="/skills">
            Open the skills library
          </Link>
          <small>FREE · NO EMAIL REQUIRED</small>
        </article>
      </section>

      <section className="contact-elsewhere">
        <div>
          <p className="section-kicker">ELSEWHERE</p>
          <h2>Where else to find the work.</h2>
        </div>
        <ul>
          <li>
            <a href={LINKEDIN_URL} rel="noopener noreferrer" target="_blank">
              LinkedIn
            </a>
            <span>Teardowns and working notes, most days.</span>
          </li>
          <li>
            <a href={GITHUB_URL} rel="noopener noreferrer" target="_blank">
              GitHub
            </a>
            <span>The skills and tooling behind the delivery.</span>
          </li>
          <li>
            <Link href="/services">All GTM services</Link>
            <span>What we take on, grouped by the lever it moves.</span>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
            <span>Sprint and monthly numbers, in the open.</span>
          </li>
        </ul>
      </section>

      <section className="closing">
        <p className="section-kicker section-kicker-light">NO OBLIGATION</p>
        <h2>Thirty minutes is enough to know if this fits.</h2>
        <a className="button button-accent" href={callHref}>Book a 30-minute call</a>
      </section>

      <SiteFooter />
    </main>
  );
}
