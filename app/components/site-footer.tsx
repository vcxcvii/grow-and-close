import Image from "next/image";
import Link from "next/link";

import { serviceOfferings } from "./service-offerings";

interface SiteFooterProps {
  id?: string;
  pageEndId?: string;
}

export function SiteFooter({ id, pageEndId }: SiteFooterProps) {
  const firstServiceColumn = serviceOfferings.slice(0, 5);
  const secondServiceColumn = serviceOfferings.slice(5);

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
          Senior-led GTM execution for B2B SaaS. Your GTM backlog, shipped —
          one motion at a time.
        </p>
        <div className="footer-status" aria-label="Grow and Close operating status">
          <span><i aria-hidden="true" /> SYSTEM ONLINE</span>
          <strong>BUILT WITH AI / APPROVED BY HUMANS</strong>
        </div>
        <a className="footer-email" href="mailto:hello@growandclose.com">
          hello@growandclose.com
        </a>
      </div>

      <nav className="footer-links" aria-label="Footer navigation">
        <div>
          <p>SERVICES / 01-05</p>
          {firstServiceColumn.map((service) => (
            <Link
              aria-label={`${service.title} service page (opens in a new tab)`}
              href={service.href}
              key={service.slug}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{service.number}</span>{service.title}
            </Link>
          ))}
        </div>
        <div>
          <p>SERVICES / 06-09</p>
          {secondServiceColumn.map((service) => (
            <Link
              aria-label={`${service.title} service page (opens in a new tab)`}
              href={service.href}
              key={service.slug}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{service.number}</span>{service.title}
            </Link>
          ))}
        </div>
        <div>
          <p>COMPANY</p>
          <Link href="/about">About the company</Link>
          <Link href="/skills">Free Claude skills</Link>
          <Link href="/services">All GTM services</Link>
          <Link href="/#workflow">How the system works</Link>
          <Link href="/#pricing">Plans</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <div>
          <p>TRUST + CONTACT</p>
          <Link href="/disclaimer">Disclaimer</Link>
          <a href="mailto:hello@growandclose.com?subject=Grow%20%26%20Close%20fit">
            Start a conversation
          </a>
          <a href="mailto:hello@growandclose.com?subject=Grow%20%26%20Close%20partnership">
            Partnerships
          </a>
          <a href="mailto:hello@growandclose.com?subject=Grow%20%26%20Close%20question">
            General questions
          </a>
        </div>
      </nav>

      <div className="footer-bottom" id={pageEndId}>
        <p>© {new Date().getFullYear()} Grow &amp; Close</p>
        <p>SENIOR JUDGMENT. WEEKLY SHIPPING. NO LONG CONTRACT.</p>
      </div>
    </footer>
  );
}
