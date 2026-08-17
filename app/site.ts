export const SITE_URL = "https://growandclose.com";
export const CONTACT_EMAIL = "hello@growandclose.com";
export const BOOKING_URL = "https://cal.com/varun-choraria/30min";
export const GITHUB_URL = "https://github.com/vcxcvii";
export const LINKEDIN_URL = "https://www.linkedin.com/in/varunchoraria";
export const PERSONAL_SITE_URL = "https://varunchoraria.com";

/**
 * Booking link with the conversation topic pre-filled as a Cal.com note,
 * so every CTA lands on the same calendar with context attached.
 */
export function bookingHref(topic: string) {
  return `${BOOKING_URL}?notes=${encodeURIComponent(topic)}`;
}
