import { WHOLESALE_AUDIENCES, WA } from "@/lib/site";
import { getWholesaleConfig } from "@/lib/repository";
import { kes } from "@/lib/utils";
import { Eyebrow } from "../section-head";
import { Button } from "../ui/button";
import { WholesaleCalculator } from "../wholesale-calculator";

/** Wholesale NOC section — server wrapper, calculator is the client island. */
export async function WholesaleSection() {
  const { baseRate } = await getWholesaleConfig();
  return (
    <section aria-labelledby="ws-h" className="pb-[88px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative overflow-hidden glass-card !rounded-[28px] p-9 lg:p-14">
          <div className="relative">
            <Eyebrow>05 — Wholesale NOC</Eyebrow>
            <h2 id="ws-h" className="mt-3 text-navy font-extrabold uppercase leading-[1.04] tracking-[-0.035em] text-[clamp(30px,4.4vw,50px)]">
              Power your network with <span className="text-brand">scalable bandwidth.</span>
            </h2>
            <p className="mt-4 text-muted text-[clamp(16px,1.6vw,19px)] max-w-[62ch]">
              Bulk bandwidth for ISPs, WISPs, resellers and network operators. Starting reference:{" "}
              <strong className="text-navy">{kes(baseRate)} per Mbps</strong>. Higher volumes earn
              lower per-Mbps rates — quoted, never faked.
            </p>
            <div className="grid gap-11 items-start mt-9 lg:grid-cols-[1fr_380px]">
              <div>
                <ul className="flex flex-wrap gap-2.5">
                  {WHOLESALE_AUDIENCES.map((a) => (
                    <li
                      key={a}
                      className="font-mono text-[11.5px] tracking-[0.06em] uppercase border border-[rgba(70,180,230,0.35)] bg-[rgba(220,246,255,0.55)] text-[#0877A8] px-3.5 py-2 rounded-full"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
                <p className="mt-[26px] font-mono text-xs tracking-[0.08em] text-faint leading-relaxed">
                  FORMULA: MONTHLY COST = BANDWIDTH × APPLICABLE RATE.
                  <br />
                  1 GBPS+ = ON QUOTE.
                </p>
                <div className="mt-[26px]">
                  <Button href={WA.wholesale}>Request Wholesale Quote</Button>
                </div>
              </div>
              <WholesaleCalculator baseRate={baseRate} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
