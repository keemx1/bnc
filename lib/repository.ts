/**
 * BNC Brancom — data-access seam (Supabase-ready).
 *
 * Today these async functions resolve the static dataset from `lib/site.ts`.
 * Tomorrow they query Supabase/PostgreSQL WITHOUT touching any component:
 *
 *   import { createClient } from "@/lib/supabase";
 *
 *   export async function getHomePlans(): Promise<HomePlan[]> {
 *     const supabase = createClient();
 *     const { data, error } = await supabase
 *       .from("home_plans")                       // slug PK, speed_mbps, price_kes,
 *       .select("*")                               // badge, features JSONB, is_active, sort_order
 *       .eq("is_active", true)
 *       .order("sort_order", { ascending: true });
 *     if (error) throw error;
 *     return data.map(toHomePlan);                 // snake_case -> camelCase mapper
 *   }
 *
 * Planned tables:
 *   home_plans(slug, speed_mbps, price_kes, badge, features JSONB, is_active, sort_order)
 *   wholesale_tiers(min_mbps, rate_per_mbps NULLABLE, label, sort_order)
 *   coverage_areas(county, town, area, is_live)
 *   faqs(question, answer, sort_order, is_active)
 *   network_status(service, status)               // backing the status card
 *
 * Server Components call these directly (no fetch round-trip, no client JS).
 */
import {
  COVERAGE,
  FAQS,
  HOME_PLANS,
  WHOLESALE_BASE_RATE,
  WHOLESALE_TIERS,
  type CoverageTree,
  type Faq,
  type HomePlan,
  type WholesaleTier,
} from "./site";

export async function getHomePlans(): Promise<HomePlan[]> {
  return HOME_PLANS.filter((p) => p.active);
}

export async function getWholesaleConfig(): Promise<{
  baseRate: number;
  tiers: WholesaleTier[];
}> {
  return { baseRate: WHOLESALE_BASE_RATE, tiers: WHOLESALE_TIERS };
}

/** Rate lookup: highest tier whose minMbps <= requested and has a rate; else base. */
export function rateForBandwidth(mbps: number, tiers: WholesaleTier[], baseRate: number): number {
  let rate = baseRate;
  for (const t of tiers) {
    if (mbps >= t.minMbps && t.ratePerMbps != null) rate = t.ratePerMbps;
  }
  return rate;
}

export async function getCoverage(): Promise<CoverageTree> {
  return COVERAGE;
}

export async function getFaqs(): Promise<Faq[]> {
  return FAQS;
}
