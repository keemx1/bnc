import { BUSINESS_FEATURES, WA } from "@/lib/site";
import { Eyebrow } from "../section-head";
import { Button } from "../ui/button";

/** Business panel — navy split card, server component. */
export function BusinessPanel() {
  return (
    <section aria-labelledby="biz-h" className="pb-[88px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative overflow-hidden grid gap-8 items-center lg:grid-cols-2 glass-card !rounded-[28px] p-9 lg:p-14">
          <div>
            <Eyebrow>04 — Business</Eyebrow>
            <h2 id="biz-h" className="mt-3 text-navy font-extrabold uppercase leading-[1.04] tracking-[-0.035em] text-[clamp(30px,4.4vw,50px)]">
              Connectivity that keeps your <span className="text-brand">business moving.</span>
            </h2>
            <p className="mt-4 text-muted text-[clamp(16px,1.6vw,19px)] max-w-[60ch]">
              Dedicated, reliable and secure internet for offices, hotels, schools, SMEs and larger
              enterprises.
            </p>
            <ul className="grid gap-3 my-6">
              {BUSINESS_FEATURES.map((f) => (
                <li key={f} className="flex gap-3 items-center font-bold text-navy text-[15.5px]">
                  <span
                    aria-hidden="true"
                    className="grid place-items-center flex-none w-[26px] h-[26px] rounded-full bg-cyan/15 border-[1.5px] border-cyan text-brand text-[13px] font-extrabold"
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Button href={WA.business}>Talk to a Business Expert</Button>
            <p className="mt-4 font-mono text-[11.5px] tracking-[0.1em] text-faint">
              NO BUSINESS PRICES PUBLISHED — QUOTED PER SITE.
            </p>
          </div>
          <dl className="bg-white/50 backdrop-blur-md border-[1.5px] border-white/70 rounded-[20px] p-7 shadow-[0_8px_25px_rgba(40,130,170,0.08)]">
            {[
              ["Uptime target", "99.9% CORE"],
              ["Install", "SURVEYED + CLEAN"],
              ["Support", "PRIORITY QUEUE"],
              ["Ideal for", "OFFICES • HOTELS • SCHOOLS"],
              ["Extras", "STATIC IP • MANAGED LAN"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 py-3 border-b border-dashed border-[rgba(70,160,200,0.25)] last:border-0 text-[14.5px]">
                <dt className="text-muted">{k}</dt>
                <dd className="font-mono text-[13px] text-brand font-bold text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
