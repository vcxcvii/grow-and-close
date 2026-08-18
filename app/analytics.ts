/**
 * One place for the GA4 event surface, so the events the site fires can be
 * listed by reading a single file rather than grepping for `gtag`.
 *
 * Every name here has to exist in GA4 before it can be marked as a key event:
 * GA4 only offers names it has already seen. Nothing is measured until an
 * event actually fires from the browser.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Someone completed a booking in the inline Cal.com embed on /book-a-call. */
export const BOOK_A_CALL_SUBMIT = "book_a_call_submit";

/** Someone exchanged an email for a skill download on a /skills page. */
export const GENERATE_LEAD = "generate_lead";

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}
