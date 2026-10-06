"use client";

import { useMemo, useState } from "react";
import { Button } from "./ui/button";
import { WA } from "@/lib/site";
import { kes } from "@/lib/utils";

/**
 * Wholesale estimator — CLIENT island (the page's only interactive widget
 * besides nav/FAQ). Formula: monthly = Mbps × applicable rate.
 */
export function WholesaleCalculator({ baseRate, defaultMbps = 500 }: { baseRate: number; defaultMbps?: number }) {
  const [amount, setAmount] = useState(defaultMbps);
  const [unit, setUnit] = useState<"Mbps" | "Gbps">("Mbps");

  const mbps = unit === "Gbps" ? amount * 1000 : amount;
  const monthly = useMemo(() => Math.round(mbps * baseRate), [mbps, baseRate]);

  return (
    <div className="glass-card p-[30px] text-ink">
      <label htmlFor="bw" className="block font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-label mb-2">
        Required bandwidth
      </label>
      <div className="flex flex-col sm:flex-row gap-2.5">
        <input
          id="bw"
          type="number"
          min={1}
          max={100000}
          value={Number.isNaN(amount) ? "" : amount}
          onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
          className="glass-input flex-1 w-full px-4 py-3 font-mono text-[15px]"
        />
        <div role="group" aria-label="Bandwidth unit" className="flex glass-input !rounded-xl p-1 gap-1">
          {(["Mbps", "Gbps"] as const).map((u) => (
            <button
              key={u}
              type="button"
              onClick={() => setUnit(u)}
              aria-pressed={unit === u}
              className={
                unit === u
                  ? "flex-1 rounded-lg bg-navy text-white font-mono font-bold text-[13px] px-4 py-2.5"
                  : "flex-1 rounded-lg font-mono font-bold text-[13px] px-4 py-2.5 text-muted hover:text-navy"
              }
            >
              {u}
            </button>
          ))}
        </div>
      </div>
      <input
        type="range"
        min={10}
        max={10000}
        value={Math.min(10000, amount || 0)}
        onChange={(e) => setAmount(parseInt(e.target.value, 10))}
        aria-label="Bandwidth slider"
        className="w-full h-8 accent-[#0D82C0] mt-2"
      />
      <p className="font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-label mt-4 mb-2">
        Applicable rate / Mbps
      </p>
      <p className="font-mono text-[15px] font-bold text-navy">{kes(baseRate)} / Mbps</p>
      <div className="glass-status rounded-[14px] p-5 mt-5">
        <p className="font-mono text-[12.5px] tracking-[0.08em] text-brand">
          ESTIMATED MONTHLY • {mbps.toLocaleString("en-KE")} Mbps
        </p>
        <p className="text-navy text-[38px] font-extrabold tracking-tight my-1">
          {kes(monthly)} <small className="text-sm font-medium text-muted">/ month est.</small>
        </p>
        <Button href={WA.wholesaleCustom(mbps, monthly)} className="w-full mt-3.5">
          Request Wholesale Quote
        </Button>
      </div>
    </div>
  );
}
