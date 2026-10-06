import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CoverageChecker } from "@/components/coverage-checker";
import { FinalCta } from "@/components/final-cta";
import { getCoverage } from "@/lib/repository";

export const metadata: Metadata = {
  title: "Coverage — Check Your BNC Availability",
  description:
    "Check BNC Brancom coverage by county, town and area. Configurable footprint confirmed per address.",
  alternates: { canonical: "https://bnc.co.ke/coverage" },
};

export default async function CoveragePage() {
  const coverage = await getCoverage();
  return (
    <main id="main">
      <PageHero
        crumb="Coverage"
        eyebrow="County → Town → Area"
        title={
          <>
            Check your <span className="text-brand">BNC coverage.</span>
          </>
        }
        lede="We don't invent coverage maps. Select your area — we confirm your exact building by hand."
      />
      <section className="py-[88px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="glass-card p-[34px] max-w-[640px]">
            <CoverageChecker coverage={coverage} />
          </div>
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
