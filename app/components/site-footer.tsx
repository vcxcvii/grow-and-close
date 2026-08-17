import Image from "next/image";
import Link from "next/link";

import {
  BOOKING_URL,
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "../site";
import { serviceOfferings } from "./service-offerings";

interface SiteFooterProps {
  id?: string;
  pageEndId?: string;
}

const leverGroups = [
  {
    label: "REACH",
    question: "Do the right people find you?",
    slugs: ["aeo-and-data-stories", "founder-led-content", "campaign-strategy"],
  },
  {
    label: "CAPTURE",
    question: "Do they turn into conversations?",
    slugs: ["landing-pages", "outbound-activation"],
  },
  {
    label: "CONVERT",
    question: "Do conversations turn into revenue?",
    slugs: ["positioning-and-messaging", "sales-enablement", "customer-advocacy"],
  },
  {
    label: "COMPOUND",
    question: "Do you know what worked?",
    slugs: ["gtm-dashboards"],
  },
];

const serviceBySlug = new Map(
  serviceOfferings.map((service) => [service.slug, service]),
);

export function SiteFooter({ id, pageEndId }: SiteFooterProps) {
  return (
    <footer className="site-footer" id={id}>
      <Image
        aria-hidden="true"
        alt=""
        className="footer-logic"
        height="630"
        src="/brand/logic-system.svg"
        unoptimized
        width="1200"
      />

      <div className="footer-intro">
        <Link className="brand footer-brand" href="/" aria-label="Grow and Close home">
          <span className="brand-glyph" aria-hidden="true"><b>G</b><i /><b>C</b></span>
          <span className="brand-name"><b>GROW</b><b><i>&amp;</i> CLOSE</b></span>
        </Link>
        <p>
          GTM execution for founder-led B2B SaaS. One priority at a time, taken from
          strategy to live, tied to one pipeline number.
        </p>
        <a className="button button-accent footer-book" href={BOOKING_URL}>
          Book a 30-minute call
        </a>
        <a className="footer-email" href={`mailto:${CONTACT_EMAIL}`}>
          {CONTACT_EMAIL}
        </a>
        <div className="footer-social">
          <a href={LINKEDIN_URL} rel="noopener noreferrer" target="_blank">LinkedIn</a>
          <a href={GITHUB_URL} rel="noopener noreferrer" target="_blank">GitHub</a>
        </div>
        <div className="footer-status" aria-label="Grow and Close operating status">
          <span><i aria-hidden="true" /> SYSTEM ONLINE</span>
          <strong>BUILT WITH AI / APPROVED BY HUMANS</strong>
        </div>
      </div>

      <nav className="footer-links" aria-label="Footer navigation">
        {leverGroups.map((group) => (
          <div key={group.label}>
            <p>{group.label}</p>
            <small className="footer-lever-question">{group.question}</small>
            {group.slugs.map((slug) => {
              const service = serviceBySlug.get(slug);
              if (!service) return null;
              return (
                <Link href={service.href} key={slug}>
                  <span>{service.number}</span>{service.title}
                </Link>
              );
            })}
          </div>
        ))}

        <div>
          <p>FREE</p>
          <small className="footer-lever-question">Try the method first.</small>
          <Link href="/skills">Claude skills library</Link>
          <Link href="/skills/landing-page-teardown">Landing page teardown</Link>
          <Link href="/skills/icp-sharpener-b2b">ICP sharpener</Link>
          <Link href="/skills/outbound-sequence-writer">Outbound sequence writer</Link>
          <Link href="/skills/aeo-page-audit">AEO page audit</Link>
          <Link href="/skills/gtm-dashboard-spec">GTM dashboard spec</Link>
        </div>

        <div>
          <p>COMPANY</p>
          <small className="footer-lever-question">How the studio runs.</small>
          <Link href="/about">About</Link>
          <Link href="/services">All GTM services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/#workflow">How it works</Link>
          <Link href="/#faq">FAQ</Link>
        </div>

        <div>
          <p>TRUST</p>
          <small className="footer-lever-question">The fine print that matters.</small>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <span className="footer-note">Replies within one working day.</span>
          <span className="footer-note">AI-assisted delivery, human-approved before release.</span>
        </div>
      </nav>

      <div className="footer-bottom" id={pageEndId}>
        <p>© {new Date().getFullYear()} Grow &amp; Close</p>
        <p>ONE SENIOR OWNER. WEEKLY SHIPPING. NO LONG CONTRACT.</p>
      </div>
    </footer>
  );
}
