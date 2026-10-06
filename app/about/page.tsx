import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "About — Your Digital Bridge",
  description:
    "BNC Brancom is a Kenyan ISP: home fiber, business internet, wholesale bandwidth and CCTV. Fast. Stable. Unlimited.",
  alternates: { canonical: "https://bnc.co.ke/about" },
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        crumb="About"
        eyebrow="Kenyan ISP • Telecoms"
        title={
          <>
            Your digital <span className="text-brand">bridge.</span>
          </>
        }
        lede="BNC Brancom connects homes, businesses and network operators across Kenya — one bridge, four crossings."
      />
      <section className="py-[88px]">
        <div className="mx-auto max-w-[860px] px-6">
          <h2 className="text-navy font-extrabold text-[22px] tracking-tight mb-3">What we do</h2>
          <ul className="grid gap-2 ml-5 list-disc text-muted mb-8">
            <li><strong className="text-ink">Home internet</strong> — 15 to 50 Mbps, unlimited, free installation.</li>
            <li><strong className="text-ink">Business internet</strong> — fiber, dedicated access, static IP, managed networks.</li>
            <li><strong className="text-ink">Wholesale bandwidth</strong> — from KSh 161/Mbps for ISPs, WISPs and resellers.</li>
            <li><strong className="text-ink">CCTV &amp; security</strong> — cameras, cabling, remote monitoring, maintenance.</li>
          </ul>
          <h2 className="text-navy font-extrabold text-[22px] tracking-tight mb-3">How we work</h2>
          <p className="text-muted">
            Confirm coverage before promising. Survey before quoting. Install cleanly. Answer the
            phone when it matters.
          </p>
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
