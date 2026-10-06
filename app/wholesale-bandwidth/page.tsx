import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { WholesaleSection } from "@/components/home/wholesale-section";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Wholesale Bandwidth Kenya — From KSh 161/Mbps",
  description:
    "BNC wholesale bandwidth for ISPs, WISPs and resellers. Starting at KSh 161/Mbps with volume rates on quote. Estimate your monthly cost.",
  alternates: { canonical: "https://bnc.co.ke/wholesale-bandwidth" },
};

export default function WholesalePage() {
  return (
    <main id="main">
      <PageHero
        crumb="Wholesale Bandwidth"
        eyebrow="ISPs • WISPs • Resellers • Operators"
        title={
          <>
            Power your network with <span className="text-brand">scalable bandwidth.</span>
          </>
        }
        lede="Bulk bandwidth from KSh 161/Mbps. Higher volumes, lower per-Mbps rates — quoted formally, never faked."
      />
      <div className="pt-[88px]">
        <WholesaleSection />
      </div>
      <FinalCta
        title="Ready to scale your network?"
        copy="Send capacity, delivery point and timeline — get a formal quote."
      />
    </main>
  );
}
