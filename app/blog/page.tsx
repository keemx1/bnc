import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { FinalCta } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Blog — Internet Guides Kenya",
  description:
    "BNC Brancom blog: home fiber guides, business connectivity, wholesale explainers and CCTV tips for Kenya.",
  alternates: { canonical: "https://bnc.co.ke/blog" },
};

const POSTS = [
  {
    tag: "GUIDE • 5 MIN",
    title: "How much speed does a Kenyan home really need?",
    copy: "15 vs 25 vs 30 vs 50 Mbps — matched to streaming, remote work and gaming.",
  },
  {
    tag: "WHOLESALE • 6 MIN",
    title: "Wholesale bandwidth, explained in plain language",
    copy: "What KSh 161/Mbps means, and how volume pricing actually works.",
  },
  {
    tag: "CCTV • 4 MIN",
    title: "IP cameras + fiber: why installers should be network people",
    copy: "Remote viewing fails on bad cabling. Here's the clean way.",
  },
];

export default function BlogPage() {
  return (
    <main id="main">
      <PageHero
        crumb="Blog"
        eyebrow="Guides • No fluff"
        title={
          <>
            Notes from <span className="text-brand">the bridge.</span>
          </>
        }
      />
      <section className="py-[88px]">
        <div className="mx-auto max-w-[1200px] px-6 grid gap-[18px] sm:grid-cols-2 xl:grid-cols-3">
          {POSTS.map((p) => (
            <Link
              key={p.title}
              href="/blog"
              className="block glass-card p-[26px] hover:-translate-y-1 hover:border-[rgba(0,160,220,0.30)]"
            >
              <p className="font-mono text-[11px] tracking-[0.16em] text-brand">{p.tag}</p>
              <h2 className="text-navy font-extrabold text-[19px] tracking-tight mt-2.5 mb-2">{p.title}</h2>
              <p className="text-muted text-[14.5px]">{p.copy}</p>
            </Link>
          ))}
        </div>
      </section>
      <FinalCta />
    </main>
  );
}
