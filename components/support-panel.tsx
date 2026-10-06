import Link from "next/link";
import { SITE } from "@/lib/site";

/** Support links + indicative status (§7–§10) — server component. */
export function SupportPanel({ glass = false }: { glass?: boolean }) {
  void glass;
  const rows = ["Internet core", "Residential network", "Business network", "Wholesale network"];
  return (
    <div className="glass-card p-[34px]">
      <h3 className="text-navy font-extrabold text-[22px] uppercase tracking-tight">Support &amp; customer area</h3>
      <p className="glass-status flex flex-wrap items-center gap-3 text-navy rounded-xl px-4 py-3.5 font-extrabold text-[14.5px] my-[18px]">
        <span aria-hidden="true" className="dot-live" />
        All systems operational
        <span className="font-mono font-medium text-[11px] text-muted">• INDICATIVE — LIVE API PENDING</span>
      </p>
      <dl>
        {rows.map((r) => (
          <div key={r} className="flex items-center justify-between py-3 border-b border-dashed border-[rgba(70,160,200,0.25)] last:border-0 text-[14.5px] font-semibold text-navy">
            <dt>{r}</dt>
            <dd className="glass-pill font-mono text-[11px] font-bold px-3 py-[5px]">
              OPERATIONAL
            </dd>
          </div>
        ))}
      </dl>
      <div className="grid gap-3 mt-5 sm:grid-cols-2">
        {[
          ["Report a Problem", "/support"],
          ["Contact Support", "/contact"],
          ["Check Coverage", "/coverage"],
        ].map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="glass-tile flex items-center gap-3 rounded-[14px] px-4 py-[15px] font-extrabold text-[14.5px]"
          >
            {label} <span aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
      <p className="mt-4 font-mono text-xs text-faint">
        PREFER TO TALK?{" "}
        <a href={SITE.phoneHref} className="text-brand font-bold">
          {SITE.phoneDisplay}
        </a>{" "}
        • {SITE.email}
      </p>
    </div>
  );
}
