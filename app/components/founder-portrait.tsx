import Image from "next/image";

import { PERSONAL_SITE_URL } from "../site";

/**
 * The one portrait, in one component, so the crop, the alt text and the
 * destination stay identical everywhere it appears. It always links out to
 * varunchoraria.com: the person is the proof this studio sells, so the claim
 * should be checkable in one click.
 */
export function FounderPortrait({
  size = 88,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <a
      className={["founder-portrait", className].filter(Boolean).join(" ")}
      href={PERSONAL_SITE_URL}
      rel="noopener noreferrer me"
      target="_blank"
      title="Varun Choraria on varunchoraria.com"
    >
      <Image
        alt="Varun Choraria, founder of Grow &amp; Close"
        height={size}
        src="/brand/varun-choraria.jpg"
        // This target has no /_next/image optimizer route (it 404s), so every
        // image on the site is served straight from /public.
        unoptimized
        width={size}
      />
      <span aria-hidden="true">varunchoraria.com ↗</span>
    </a>
  );
}
