import Link from "next/link";

import { serviceOfferings } from "./service-offerings";

interface SiteHeaderProps {
  activeService?: string;
  ctaHref: string;
  ctaLabel: string;
  homeHref?: string;
}

export function SiteHeader({
  activeService,
  ctaHref,
  ctaLabel,
  homeHref = "/",
}: SiteHeaderProps) {
  return (
    <header className="site-header site-header-services">
      <Link className="brand" href={homeHref} aria-label="Grow and Close home">
        <span className="brand-glyph" aria-hidden="true"><b>G</b><i /><b>C</b></span>
        <span className="brand-name"><b>GROW</b><b><i>&amp;</i> CLOSE</b></span>
      </Link>

      <nav className="desktop-nav primary-nav" aria-label="Primary navigation">
        <details className="services-menu">
          <summary>Services <span aria-hidden="true">+</span></summary>
          <div className="services-mega">
            <div className="services-mega-heading">
              <p>ALL NINE SERVICES</p>
              <strong>Pick the outcome. We connect the motion.</strong>
            </div>
            <div className="services-mega-grid">
              {serviceOfferings.map((service) => (
                <Link
                  aria-label={`${service.title} service page (opens in a new tab)`}
                  className={activeService === service.slug ? "is-current" : undefined}
                  href={service.href}
                  key={service.slug}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>{service.number}</span>
                  <div>
                    <b>{service.title}</b>
                    <small>{service.description}</small>
                  </div>
                </Link>
              ))}
            </div>
            <Link className="services-home-link" href="/services">
              Explore all B2B SaaS GTM services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </details>
        <Link href="/about">About</Link>
        <Link href="/#workflow">How it works</Link>
        <Link href="/#pricing">Plans</Link>
        <Link href="/#faq">FAQ</Link>
      </nav>

      <Link className="header-cta" href={ctaHref}>{ctaLabel}</Link>
    </header>
  );
}
