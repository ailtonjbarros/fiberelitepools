export const SITE = {
  name: "Fiber Elite Pools",
  domain: "contact@fiberelitepools.com",
  url: "https://fiberelitepools.com",
  phone: "+1 407 779-9613",
  phoneHref: "tel:+14077799613",
  /** Edit this single line to update the service area shown across the site. */
  serviceArea: "Serving Central Florida and surrounding communities.",
  /** Future location landing pages can be added here (e.g. /fiberglass-pools-orlando). */
  locations: [
    "Orlando",
    "Winter Park",
    "Windermere",
    "Kissimmee",
    "Lake Nona",
    "Clermont",
    "Oviedo",
    "Celebration",
  ],
};

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "Pools", href: "#pools" },
  { label: "Why Fiberglass", href: "#why-fiberglass" },
  { label: "Our Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#quote" },
];

type TrackPayload = Record<string, string | number | boolean | undefined>;

/**
 * Lightweight analytics bridge. Pushes to window.dataLayer (GTM / GA4) and
 * forwards to Meta Pixel when present. Ready for GA4, Google Ads and Meta CAPI.
 */
export function track(event: string, payload: TrackPayload = {}) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...payload });
  w.gtag?.("event", event, payload);
  if (event === "lead") w.fbq?.("track", "Lead", payload);
}
