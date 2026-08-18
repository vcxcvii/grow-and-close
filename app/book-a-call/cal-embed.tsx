"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

import { BOOK_A_CALL_SUBMIT, trackEvent } from "../analytics";
import { BOOKING_URL } from "../site";

/**
 * Inline Cal.com calendar. `topic` carries the per-CTA context the visitor
 * arrived with (set via bookingHref() in app/site.ts) and is forwarded as a
 * pre-filled booking note, so the call starts with context already attached.
 *
 * Two things are set deliberately here:
 *
 * 1. `theme: "light"`. Cal defaults to "auto", which follows the visitor's OS
 *    setting, so anyone on a dark-mode machine got a black calendar sitting
 *    inside a light page. The site has one palette; the embed follows it.
 *
 * 2. `bookingSuccessfulV2`. Booking is the declared primary conversion and it
 *    happens inside a cross-origin iframe, so nothing on this page can see it
 *    except this callback. Without it GA4 records the session and no outcome.
 */
/**
 * Both <Cal> and getCalApi have to name the same namespace. Left unnamed they
 * initialise two different instances, and the listener registers against one
 * that has no iframe.
 */
const CAL_NAMESPACE = "book-a-call";

export function CalEmbed({ topic }: { topic?: string }) {
  const calLink = BOOKING_URL.replace(/^https?:\/\/[^/]+\//, "");

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      if (cancelled) return;

      // Theme and layout are set through the `config` prop below, not through
      // cal("ui"). The ui instruction proxies into the iframe, so calling it
      // from here races the <Cal> component's own createIframe and throws
      // "iframe doesn't exist". Registering a listener has no such dependency.
      cal("on", {
        action: "bookingSuccessfulV2",
        callback: (event) => {
          const booking = event.detail?.data;
          trackEvent(BOOK_A_CALL_SUBMIT, {
            booking_uid: booking?.uid,
            event_type_id: booking?.eventTypeId,
            start_time: booking?.startTime,
            is_recurring: booking?.isRecurring,
            // Carried through so bookings can be attributed to the CTA that
            // sent them, not just to the page.
            topic: topic ?? "(none)",
          });
        },
      });
    })();

    return () => {
      cancelled = true;
    };
  }, [topic]);

  return (
    <Cal
      calLink={calLink}
      className="book-embed-frame"
      namespace={CAL_NAMESPACE}
      config={{
        layout: "month_view",
        theme: "light",
        ...(topic ? { notes: topic } : {}),
      }}
    />
  );
}
