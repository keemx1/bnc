import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LeadForm } from "@/components/lead-form";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact BNC Brancom — Get Connected",
  description:
    "Contact BNC Brancom: home, business, wholesale and CCTV enquiries. info@bnc.co.ke, 0112240649.",
  alternates: { canonical: "https://bnc.co.ke/contact" },
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Contact"
        eyebrow="Home • Business • Wholesale • CCTV"
        title={
          <>
            Get <span className="text-brand">connected.</span>
          </>
        }
        lede="Tell us what you need — we reply like neighbours, not a ticket queue."
      />
      <section className="py-[88px]">
        <div className="mx-auto max-w-[1200px] px-6 grid gap-5 lg:grid-cols-2">
          <div className="glass-card p-[34px]">
            <h2 className="text-navy font-extrabold text-[22px] uppercase tracking-tight mb-5">
              Send an enquiry
            </h2>
            <LeadForm
              topics={["Home internet", "Business internet", "Wholesale bandwidth", "CCTV & security"]}
              cta="Send Enquiry"
              done="Asante — enquiry received. We'll call you back."
            />
          </div>
          <div className="glass-card p-[34px] h-fit">
            <h2 className="text-navy font-extrabold text-[22px] uppercase tracking-tight mb-2">
              Direct lines
            </h2>
            <dl>
              {[
                ["Email", SITE.email, `mailto:${SITE.email}`],
                ["Phone", SITE.phoneDisplay, SITE.phoneHref],
                ["Hours", "MON–SAT • 8–6", undefined],
                ["Faults", "24/7 LINE", undefined],
              ].map(([k, v, href]) => (
                <div key={k as string} className="flex justify-between gap-3 py-3 border-b border-dashed border-linestrong last:border-0 text-[14.5px]">
                  <dt className="text-muted">{k}</dt>
                  <dd className="font-mono text-[13px] text-brand font-bold text-right">
                    {href ? <a href={href as string}>{v}</a> : v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
