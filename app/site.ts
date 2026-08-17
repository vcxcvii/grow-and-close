export const SITE_URL = "https://growandclose.com";
export const CONTACT_EMAIL = "hello@growandclose.com";
export const BOOKING_URL = "https://cal.com/varun-choraria/30min";
export const GITHUB_URL = "https://github.com/vcxcvii";
export const LINKEDIN_URL = "https://www.linkedin.com/in/varunchoraria";
export const PERSONAL_SITE_URL = "https://varunchoraria.com";

/**
 * Booking link with the conversation topic carried as a query param, landing
 * on the internal /book-a-call page (embeds the same calendar in-context
 * instead of sending the visitor off-site). The topic gets forwarded into
 * the Cal.com embed as a pre-filled note.
 */
export function bookingHref(topic: string) {
  return `/book-a-call?topic=${encodeURIComponent(topic)}`;
}
