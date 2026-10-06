import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CctvGrid } from "@/components/home/cctv-grid";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "CCTV Installation Kenya — Home & Business Security",
  description:
    "BNC CCTV: home & business cameras, IP cameras, remote monitoring, network cabling and maintenance across Kenya.",
  alternates: { canonical: "https://bnc.co.ke/cctv-security" },
};

export default function CctvPage() {
  return (
    <main id="main">
      <PageHero
        crumb="CCTV & Security"
        eyebrow="Cameras • Cabling • Monitoring"
        title={
          <>
            Protect <span className="text-brand">what matters.</span>
          </>
        }
        lede="Security installed by network people — clean cabling, honest cameras, remote viewing that works."
      />
      <div className="pt-[88px]">
        <CctvGrid />
      </div>
      <FinalCta title="Need eyes on it?" copy="Tell us the site — we survey, quote and install." />
    </main>
  );
}
