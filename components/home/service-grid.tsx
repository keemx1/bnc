import Link from "next/link";
import { SERVICES } from "@/lib/site";
import { SectionHead } from "../section-head";
import { ServiceIcon } from "../service-icon";

/** Four service lanes — server component, plain crawlable links. */
export function ServiceGrid() {
  return (
    <section aria-labelledby="services-h">
      <div className="mx-auto max-w-[1200px] px-6 py-[88px]">
        <SectionHead
          index="01 — What we carry"
          eyebrow="One bridge. Four crossings."
          title={
            <span id="services-h">
              One bridge.
              <br />
              <span className="text-brand">Four crossings.</span>
            </span>
          }
          lede="Not a dashboard, not an app — a working ISP. Pick the lane that fits: your house, your office, your network, or your cameras."
        />
        <div className="grid gap-[18px] sm:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="group flex flex-col gap-3.5 glass-card p-7 hover:-translate-y-1.5 hover:border-[rgba(0,160,220,0.30)]"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] text-faint">{s.index}</span>
              <ServiceIcon icon={s.icon} />
              <span className="text-navy font-extrabold text-[19px] tracking-tight">{s.title}</span>
              <span className="text-muted text-[14.5px]">{s.copy}</span>
              <span className="mt-auto font-extrabold text-brand text-[14.5px] flex items-center gap-2">
                {s.cta} <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
