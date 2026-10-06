import type { Metadata } from "next";
import { Hero, Ticker } from "@/components/home/hero";
import { ServiceGrid } from "@/components/home/service-grid";
import { PricingGrid } from "@/components/home/pricing-grid";
import { WhyGrid } from "@/components/home/why-grid";
import { BusinessPanel } from "@/components/home/business-panel";
import { WholesaleSection } from "@/components/home/wholesale-section";
import { CctvGrid } from "@/components/home/cctv-grid";
import { CoverageChecker } from "@/components/coverage-checker";
import { SupportPanel } from "@/components/support-panel";
import { FaqAccordion } from "@/components/faq-accordion";
import { FinalCta } from "@/components/final-cta";
import { SectionHead } from "@/components/section-head";
import { Button } from "@/components/ui/button";
import { getCoverage, getFaqs } from "@/lib/repository";

export const metadata: Metadata = {
  title: "Fast. Stable. Unlimited. | Home, Business, Wholesale Internet & CCTV Kenya",
  description:
    "BNC Brancom — Your Digital Bridge. Reliable home fiber, business internet, wholesale bandwidth from KSh 161/Mbps and CCTV installation across Kenya.",
  alternates: { canonical: "https://bnc.co.ke/" },
};

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are the home packages unlimited?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. 15, 25, 30 and 50 Mbps home packages are unlimited with free installation.",
      },
    },
    {
      "@type": "Question",
      name: "Does BNC provide wholesale bandwidth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, starting at KSh 161 per Mbps with volume-based rates on quote.",
      },
    },
  ],
};

export default async function HomePage() {
  const [coverage, faqs] = await Promise.all([getCoverage(), getFaqs()]);
  return (
    <main id="main">
      <Hero />
      <Ticker />
      <ServiceGrid />
      <PricingGrid />
      <WhyGrid />
      <BusinessPanel />
      <WholesaleSection />
      <CctvGrid />
      <section aria-labelledby="cov-h" className="relative overflow-hidden pb-[88px]">
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-paper via-[#DFF2FD] to-paper" />
        <div aria-hidden="true" className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-cyan/25 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-32 -right-24 w-[460px] h-[460px] rounded-full bg-brand/20 blur-3xl" />
        <div className="relative mx-auto max-w-[1200px] px-6">
          <SectionHead
            index="07 — Coverage & care"
            eyebrow="County → Town → Area"
            title={
              <span id="cov-h">
                Check coverage.
                <br />
                <span className="text-brand">Reach a human.</span>
              </span>
            }
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="glass-card p-[34px]">
              <h3 className="text-navy font-extrabold text-[22px] uppercase tracking-tight">
                Check your BNC coverage
              </h3>
              <p className="text-muted text-[15px] mt-1.5">
                County → town → area. Data is configurable for backend hookup — we confirm every
                address by hand.
              </p>
              <CoverageChecker coverage={coverage} />
            </div>
            <div>
              <SupportPanel glass />
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="faq-h" className="pb-[88px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHead
            centered
            index="08 — Answers"
            eyebrow="No jargon"
            title={
              <span id="faq-h">
                Asked <span className="text-brand">often.</span>
              </span>
            }
          />
          <FaqAccordion faqs={faqs} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
          />
        </div>
      </section>
      <FinalCta />
      <div className="mx-auto max-w-[1200px] px-6 -mt-10 flex justify-center">
        <Button href="/coverage" variant="ghost" size="sm">
          Check coverage in your area
        </Button>
      </div>
    </main>
  );
}
