import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BusinessPanel } from "@/components/home/business-panel";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Business Internet Kenya — Fiber, Dedicated, Static IP",
  description:
    "BNC business internet: fiber, dedicated internet, static IP, enterprise connectivity and managed networks for offices, hotels, schools and SMEs. Quoted per site.",
  alternates: { canonical: "https://bnc.co.ke/business-internet" },
};

export default function BusinessInternetPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Business Internet"
        eyebrow="Offices • Hotels • Schools • SMEs"
        title={
          <>
            Connectivity that keeps your <span className="text-brand">business moving.</span>
          </>
        }
        lede="Dedicated, reliable and secure internet solutions. No published prices — every site is surveyed and quoted honestly."
      />
      <div className="pt-[88px]">
        <BusinessPanel />
      </div>
      <FinalCta />
    </main>
  );
}
