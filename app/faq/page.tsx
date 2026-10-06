import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { FaqAccordion } from "@/components/faq-accordion";
import { FinalCta } from "@/components/final-cta";
import { getFaqs } from "@/lib/repository";

export const metadata: Metadata = {
  title: "FAQ — Internet, Wholesale & CCTV Answers",
  description:
    "BNC Brancom FAQ: coverage, installation time, unlimited packages, billing, outages, business, wholesale and CCTV.",
  alternates: { canonical: "https://bnc.co.ke/faq" },
};

export default async function FaqPage() {
  const faqs = await getFaqs();
  return (
    <main id="main">
      <PageHero
        crumb="FAQ"
        eyebrow="Answers • No jargon"
        title={
          <>
            Asked <span className="text-brand">often.</span>
          </>
        }
      />
      <section className="py-[88px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
      <FinalCta title="Still curious?" copy="Ask us directly — we answer." />
    </main>
  );
}
