import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PricingGrid } from "@/components/home/pricing-grid";
import { FinalCta } from "@/components/final-cta";
import { WA } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Home Internet Kenya — 15 to 50 Mbps Unlimited",
  description:
    "BNC home fiber: 15 Mbps KSh 1,500, 25 Mbps KSh 2,000, 30 Mbps KSh 3,000, 50 Mbps KSh 4,000. Unlimited, free installation, 24/7 Kenyan support.",
  alternates: { canonical: "https://bnc.co.ke/home-internet" },
};

export default function HomeInternetPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Home Internet"
        eyebrow="Home fiber • Unlimited"
        title={
          <>
            Internet for
            <br />
            <span className="text-brand">every home.</span>
          </>
        }
        lede="Stream. Work. Learn. Game. Connect. Four confirmed packages — nothing invented, nothing hidden."
      />
      <div className="mx-auto max-w-[1200px] px-6 pt-10 flex flex-wrap gap-3.5">
        <Button href={WA.home}>Get Connected</Button>
        <Button href="/coverage" variant="ghost">
          Check Coverage
        </Button>
      </div>
      <PricingGrid />
      <section className="pb-[88px]">
        <div className="mx-auto max-w-[860px] px-6">
          <h2 className="text-navy font-extrabold text-[22px] tracking-tight mb-3">
            How getting connected works
          </h2>
          <ul className="grid gap-2 ml-5 list-disc text-muted">
            <li>Check coverage for your area.</li>
            <li>Pick a package and talk to us.</li>
            <li>Free installation, usually 1–3 working days.</li>
            <li>Pay monthly via M-Pesa.</li>
          </ul>
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
