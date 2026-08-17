import Link from "next/link";

import { serviceOfferings } from "./service-offerings";

interface RelatedLinksProps {
  /** Slug of the page you are on, so it never links to itself. */
  currentSlug?: string;
  /** Optional free skill to surface alongside the services. */
  skill?: { name: string; slug: string };
}

/**
 * Bottom-of-page interlinking. Same lever first, because a visitor whose
 * capture motion is broken usually has more than one capture problem.
 */
export function RelatedLinks({ currentSlug, skill }: RelatedLinksProps) {
  const current = serviceOfferings.find((service) => service.slug === currentSlug);
  const sameLever = serviceOfferings.filter(
    (service) => service.slug !== currentSlug && service.lever === current?.lever,
  );
  const others = serviceOfferings.filter(
    (service) => service.slug !== currentSlug && service.lever !== current?.lever,
  );
  const related = [...sameLever, ...others].slice(0, 3);

  return (
    <section className="related-links" aria-label="Related problems and next steps">
      <div className="related-heading">
        <p className="section-kicker">USUALLY BROKEN TOGETHER</p>
        <h2>{current ? `If ${current.lever.toLowerCase()} is stuck, check these next.` : "Where teams go next."}</h2>
      </div>

      <div className="related-grid">
        {related.map((service) => (
          <Link className="related-card" href={service.href} key={service.slug}>
            <span>{service.lever}</span>
            <b>{service.problem}</b>
            <small>{service.title}</small>
          </Link>
        ))}
      </div>

      <div className="related-next">
        {skill ? (
          <Link href={`/skills/${skill.slug}`}>
            Try the {skill.name} skill free <span aria-hidden="true">↗</span>
          </Link>
        ) : (
          <Link href="/skills">
            Try the free Claude skills <span aria-hidden="true">↗</span>
          </Link>
        )}
        <Link href="/pricing">See pricing <span aria-hidden="true">↗</span></Link>
        <Link href="/services">All nine problems we take on <span aria-hidden="true">↗</span></Link>
        <Link href="/book-a-call">Book a call <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
