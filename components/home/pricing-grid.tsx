import { getHomePlans } from "@/lib/repository";
import { WA } from "@/lib/site";
import { kes } from "@/lib/utils";
import { SectionHead } from "../section-head";
import { Button } from "../ui/button";

/** Ticket-style pricing — server-rendered from the repository (Supabase-ready). */
export async function PricingGrid() {
  const plans = await getHomePlans();
  return (
    <section aria-labelledby="plans-h">
      <div className="mx-auto max-w-[1200px] px-6 py-[88px]">
        <SectionHead
          index="02 — Home fiber"
          eyebrow="Unlimited • Free installation"
          title={
            <span id="plans-h">
              Internet for
              <br />
              <span className="text-brand">every home.</span>
            </span>
          }
          lede="Stream. Work. Learn. Game. Connect. Four honest packages — unlimited, free installation, no fine-print speed games."
        />
        <div className="grid gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((p) => (
            <article
              key={p.slug}
              className={
                p.badge
                  ? "flex flex-col glass-card !border-brand !border-2 overflow-hidden hover:-translate-y-1.5"
                  : "flex flex-col glass-card overflow-hidden hover:-translate-y-1.5 hover:border-[rgba(0,160,220,0.30)]"
              }
            >
              <div className="relative px-6 pt-6 pb-[18px] border-b-2 border-dashed border-[rgba(70,160,200,0.25)]">
                {p.badge ? (
                  <span className="inline-block font-mono text-[10.5px] font-bold tracking-[0.18em] uppercase bg-navy text-white px-3 py-1.5 rounded-full mb-3">
                    {p.badge}
                  </span>
                ) : null}
                <p className="font-mono text-[34px] font-bold text-navy tracking-tight leading-none">
                  {p.speedMbps} <small className="text-sm text-brand">Mbps</small>
                </p>
                <p className="font-extrabold text-navy text-[15px] mt-1.5">
                  {kes(p.priceKes)} <span className="font-mono font-medium text-muted text-[12.5px]">/ month</span>
                </p>
              </div>
              <ul className="grid gap-2.5 p-6 pt-5 text-[14.5px]">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 items-start">
                    <span aria-hidden="true" className="text-brand font-extrabold font-mono text-[13px] mt-0.5">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="px-6 pb-6 mt-auto">
                <Button href={WA.plan(p.speedMbps, p.priceKes)} variant={p.badge ? "primary" : "ghost"} className="w-full">
                  Get Connected
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
