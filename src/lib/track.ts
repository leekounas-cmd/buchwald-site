// Shared client-side event tracking: GA4 + Meta Pixel.
// GA4 gets the raw event name with { page }. Meta gets the closest standard event
// so campaigns can optimize for it (Lead / Contact / Schedule).

const META_EVENT_MAP: Record<string, string> = {
  form_submit: "Lead",
  tel_click: "Contact",
  booking_click: "Schedule",
};

type FbqWindow = Window & { fbq?: (...args: unknown[]) => void };

export function fireEvent(name: string, page: string) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, { page });
  }
  const fbq = (window as FbqWindow).fbq;
  const metaEvent = META_EVENT_MAP[name];
  if (typeof fbq === "function" && metaEvent) {
    fbq("track", metaEvent, { content_name: page });
  }
}
