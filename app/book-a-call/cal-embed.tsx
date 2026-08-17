"use client";

import Cal from "@calcom/embed-react";

import { BOOKING_URL } from "../site";

/**
 * Inline Cal.com calendar. `topic` carries the per-CTA context the visitor
 * arrived with (set via bookingHref() in app/site.ts) and is forwarded as a
 * pre-filled booking note, so the call starts with context already attached.
 */
export function CalEmbed({ topic }: { topic?: string }) {
  const calLink = BOOKING_URL.replace(/^https?:\/\/[^/]+\//, "");

  return (
    <Cal
      calLink={calLink}
      className="book-embed-frame"
      config={topic ? { notes: topic } : undefined}
    />
  );
}
