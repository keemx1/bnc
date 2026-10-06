import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SupportPanel } from "@/components/support-panel";
import { LeadForm } from "@/components/lead-form";
import { FinalCta } from "@/components/final-cta";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support — Report a Problem, Network Status",
  description:
    "BNC support: report connection problems, check network status and contact our Kenyan team.",
  alternates: { canonical: "https://bnc.co.ke/support" },
};

export default function SupportPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Support"
        eyebrow="Faults • Status • Contact"
        title={
          <>
            Support that <span className="text-brand">answers.</span>
          </>
        }
      />
      <section className="py-[88px]">
        <div className="mx-auto max-w-[1200px] px-6 grid gap-5 lg:grid-cols-2">
          <div className="glass-card p-[34px] scroll-mt-28">
            <h2 className="text-navy font-extrabold text-[22px] uppercase tracking-tight">
              Report a problem
            </h2>
            <p className="text-muted text-[15px] mt-1.5 mb-5">
              No connection? Slow speeds? Tell us what&apos;s wrong — or call{" "}
              <a href={SITE.phoneHref} className="text-brand font-bold">
                {SITE.phoneDisplay}
              </a>
              .
            </p>
            <LeadForm
              idPrefix="fault"
              topics={["No connection / outage", "Slow speeds", "Installation enquiry", "Account help"]}
              cta="Report a Problem"
              done="Received — our team will call you back shortly."
            />
          </div>
          <SupportPanel />
        </div>
      </section>
      <FinalCta title="Still stuck?" copy="Talk to a human — we answer." />
    </main>
  );
}
