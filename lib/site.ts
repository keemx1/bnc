/**
 * BNC Brancom — canonical site data model.
 *
 * These TypeScript interfaces mirror the future Supabase/PostgreSQL schema
 * 1:1 (see table names in `lib/repository.ts`). When the backend lands,
 * only the repository functions change — components and pages keep working
 * because they consume these same types.
 */

export interface SiteInfo {
  name: string;
  tagline: string;
  statement: string;
  email: string;
  /** Display form, exactly as confirmed by BNC. */
  phoneDisplay: string;
  /** E.164-ish tel: link target. */
  phoneHref: string;
}

/** Row <-> `home_plans` table: slug PK, speed_mbps, price_kes, sort_order, is_active, badge */
export interface HomePlan {
  slug: string;
  speedMbps: number;
  priceKes: number;
  badge?: string;
  features: string[];
  active: boolean;
}

/** Row <-> `wholesale_tiers` table: min_mbps, rate_per_mbps, label */
export interface WholesaleTier {
  minMbps: number;
  ratePerMbps: number | null; // null = "on quote" (never fake a rate)
  label: string;
}

/** Row <-> `coverage_areas` table: county, town, area, is_live */
export type CoverageTree = Record<string, Record<string, string[]>>;

export interface Faq {
  question: string;
  answer: string;
}

export interface ServiceCard {
  slug: string;
  index: string;
  title: string;
  copy: string;
  cta: string;
  href: string;
  icon: "wifi" | "briefcase" | "network" | "cctv";
}

export const SITE: SiteInfo = {
  name: "BNC Brancom",
  tagline: "Your Digital Bridge",
  statement: "Fast. Stable. Unlimited.",
  email: "info@bnc.co.ke",
  phoneDisplay: "0112240649",
  phoneHref: "tel:+254112240649",
};

/**
 * WhatsApp deep links — every service CTA points here with a prefilled,
 * service-specific message. Number = SITE phone in international format.
 */
const WA_NUMBER = "254112240649";

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA = {
  general: waLink("Hello BNC Brancom, I'd like to get connected."),
  contact: waLink("Hello BNC Brancom, I have an enquiry."),
  home: waLink("Hello BNC Brancom, I'd like Home Internet."),
  plan: (speedMbps: number, priceKes: number) =>
    waLink(
      `Hello BNC Brancom, I'd like the ${speedMbps} Mbps home package (KSh ${priceKes.toLocaleString("en-KE")}/month). Please confirm coverage for my area.`
    ),
  business: waLink("Hello BNC Brancom, I need Business Internet. Please have an expert call me."),
  wholesale: waLink("Hello BNC Brancom, I'd like a Wholesale Bandwidth quote."),
  wholesaleCustom: (mbps: number, monthlyKes: number) =>
    waLink(
      `Hello BNC Brancom, I need about ${mbps.toLocaleString("en-KE")} Mbps wholesale bandwidth (estimator: KSh ${monthlyKes.toLocaleString("en-KE")}/month). Please send a formal quote.`
    ),
  cctv: waLink("Hello BNC Brancom, I'd like CCTV installation."),
};

export const HOME_PLAN_FEATURES = [
  "Unlimited internet",
  "Free installation",
  "High speed internet",
  "Stable connection",
  "Multiple devices",
  "24/7 support",
] as const;

export const HOME_PLANS: HomePlan[] = [
  { slug: "home-15", speedMbps: 15, priceKes: 1500, features: [...HOME_PLAN_FEATURES], active: true },
  { slug: "home-25", speedMbps: 25, priceKes: 2000, features: [...HOME_PLAN_FEATURES], active: true },
  {
    slug: "home-30",
    speedMbps: 30,
    priceKes: 3000,
    badge: "Suits most homes",
    features: [...HOME_PLAN_FEATURES],
    active: true,
  },
  { slug: "home-50", speedMbps: 50, priceKes: 4000, features: [...HOME_PLAN_FEATURES], active: true },
];

/** Only the base rate is confirmed. Higher tiers stay null = quoted, never faked. */
export const WHOLESALE_TIERS: WholesaleTier[] = [
  { minMbps: 1, ratePerMbps: 161, label: "Starting rate" },
  { minMbps: 1000, ratePerMbps: null, label: "1 Gbps+ — on quote" },
];

export const WHOLESALE_BASE_RATE = 161;

export const WHOLESALE_AUDIENCES = [
  "Internet Service Providers",
  "WISP Operators",
  "Bandwidth Resellers",
  "Network Operators",
  "Enterprise Networks",
] as const;

export const COVERAGE: CoverageTree = {
  Nairobi: {
    Westlands: ["Westlands Town", "Parklands", "Kitisuru"],
    Kasarani: ["Kasarani Town", "Githurai", "Roysambu"],
  },
  Kiambu: {
    Thika: ["Thika Town", "Makongeni"],
    Ruiru: ["Ruiru Town", "Juja Farm Rd"],
  },
  Mombasa: {
    Mvita: ["Mvita Town", "Tudor"],
    Nyali: ["Nyali Town", "Bamburi"],
  },
};

export const FAQS: Faq[] = [
  {
    question: "Which areas does BNC cover?",
    answer:
      "We're expanding across Kenya county by county. Use the coverage checker — then talk to us and we'll confirm your exact building before promising anything.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Once coverage is confirmed and payment is done, most home installs complete within 1–3 working days depending on your area and cabling needs.",
  },
  {
    question: "Are the home packages unlimited?",
    answer:
      "Yes. 15, 25, 30 and 50 Mbps are all unlimited — no data caps, no throttled surprises. Installation is free.",
  },
  {
    question: "How do I report an outage?",
    answer:
      "Use Report a Problem on the Support page or call 0112240649. Include your account name and location for the fastest response.",
  },
  {
    question: "Does BNC provide business internet?",
    answer:
      "Yes — business fiber, dedicated internet, static IPs and managed networks for offices, hotels, schools and enterprises. Quoted per site.",
  },
  {
    question: "Does BNC provide wholesale bandwidth?",
    answer:
      "Yes. Bulk bandwidth starting at KSh 161/Mbps, with lower per-Mbps rates at higher volumes. Try the estimator, then request a formal quote.",
  },
  {
    question: "Can ISPs / resellers purchase bandwidth?",
    answer:
      "Absolutely — ISPs, WISPs, resellers and network operators are core wholesale customers. Partner with us and scale cleanly.",
  },
  {
    question: "Does BNC install CCTV?",
    answer:
      "Yes — home and business CCTV, IP cameras, remote monitoring, structured cabling and maintenance.",
  },
];

export const SERVICES: ServiceCard[] = [
  {
    slug: "home",
    index: "/ 01",
    title: "Home Internet",
    copy: "Fast, stable, unlimited internet for streaming, work and play.",
    cta: "View Plans",
    href: "/home-internet",
    icon: "wifi",
  },
  {
    slug: "business",
    index: "/ 02",
    title: "Business Internet",
    copy: "Connectivity that keeps your business moving.",
    cta: "Learn More",
    href: "/business-internet",
    icon: "briefcase",
  },
  {
    slug: "wholesale",
    index: "/ 03",
    title: "Wholesale Bandwidth",
    copy: "Power your network with scalable bandwidth.",
    cta: "Partner With Us",
    href: "/wholesale-bandwidth",
    icon: "network",
  },
  {
    slug: "cctv",
    index: "/ 04",
    title: "CCTV & Security",
    copy: "Protect what matters — on BNC-grade cabling.",
    cta: "Explore CCTV",
    href: "/cctv-security",
    icon: "cctv",
  },
];

export const BUSINESS_FEATURES = [
  "Business fiber & dedicated internet",
  "Static IP & enterprise connectivity",
  "Managed network solutions",
] as const;

export const CCTV_SERVICES = [
  { title: "Home CCTV", copy: "Keep family and property watched, wherever you are.", glyph: "⌂" },
  { title: "Business CCTV", copy: "Shops, offices and sites under constant watch.", glyph: "▭" },
  { title: "IP Cameras", copy: "Sharp network cameras with remote monitoring.", glyph: "◉" },
  { title: "Remote Monitoring", copy: "View live feeds from your phone, anywhere.", glyph: "〜" },
  { title: "Network Cabling", copy: "Structured cabling done once, done right.", glyph: "≋" },
  { title: "CCTV Maintenance", copy: "Servicing and call-outs that actually show up.", glyph: "✚" },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Internet", href: "/home-internet" },
  { label: "Business", href: "/business-internet" },
  { label: "Wholesale", href: "/wholesale-bandwidth" },
  { label: "CCTV", href: "/cctv-security" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
] as const;
