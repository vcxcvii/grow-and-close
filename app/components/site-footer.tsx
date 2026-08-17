import Image from "next/image";
import Link from "next/link";

import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "../site";
import { serviceLeverGroups } from "./service-lever-groups";

function LinkedInGlyph() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12M7.12 20.45H3.56V9h3.56z" />
    </svg>
  );
}

function GitHubGlyph() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.47c.52.1.72-.23.72-.5v-1.95c-2.94.64-3.56-1.27-3.56-1.27-.48-1.22-1.18-1.55-1.18-1.55-.96-.66.07-.64.07-.64 1.07.07 1.63 1.1 1.63 1.1.94 1.62 2.47 1.15 3.08.88.1-.68.37-1.15.67-1.42-2.35-.27-4.82-1.17-4.82-5.22 0-1.15.41-2.1 1.09-2.83-.11-.27-.47-1.35.1-2.8 0 0 .89-.29 2.9 1.08a10.1 10.1 0 0 1 5.28 0c2.01-1.37 2.9-1.08 2.9-1.08.57 1.45.21 2.53.1 2.8.68.73 1.09 1.68 1.09 2.83 0 4.06-2.48 4.95-4.84 5.21.38.33.72.97.72 1.96v2.9c0 .27.2.61.73.5A10.5 10.5 0 0 0 12 1.5" />
    </svg>
  );
}

interface SiteFooterProps {
  id?: string;
  pageEndId?: string;
}

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
        <div className="footer-cta-group">
          <a className="button button-accent footer-book" href="/book-a-call">
            Book a 30-minute call
          </a>
          <a className="footer-email" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>
        <div className="footer-social">
          <a aria-label="Grow and Close on LinkedIn" href={LINKEDIN_URL} rel="noopener noreferrer" target="_blank">
            <LinkedInGlyph />
          </a>
          <a aria-label="Grow and Close on GitHub" href={GITHUB_URL} rel="noopener noreferrer" target="_blank">
            <GitHubGlyph />
          </a>
        </div>
        <div className="footer-status" aria-label="Grow and Close operating status">
          <span><i aria-hidden="true" /> SYSTEM ONLINE</span>
          <strong>BUILT WITH AI / APPROVED BY HUMANS</strong>
        </div>
      </div>

      <nav className="footer-links" aria-label="Footer navigation">
        {serviceLeverGroups.map((group) => (
          <div key={group.label}>
            <p>{group.label}</p>
            <small className="footer-lever-question">{group.question}</small>
            {group.services.map((service) => (
              <Link href={service.href} key={service.slug}>
                <span>{service.number}</span>{service.title}
              </Link>
            ))}
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
          <Link href="/book-a-call">Book a call</Link>
          <Link href="/#workflow">How it works</Link>
          <Link href="/#faq">FAQ</Link>
        </div>

        <div>
          <p>TRUST</p>
          <small className="footer-lever-question">The fine print that matters.</small>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </nav>

      <div className="footer-bottom" id={pageEndId}>
        <p>© {new Date().getFullYear()} Grow &amp; Close</p>
        <p>ONE SENIOR OWNER. WEEKLY SHIPPING. BUILT TO RENEW.</p>
      </div>
    </footer>
  );
}
