"use client";

import { useMemo, useState } from "react";
import type { CoverageTree } from "@/lib/site";
import { Button } from "./ui/button";

const PH = { county: "Select county", town: "Select town", area: "Select area" } as const;

function Select({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <div className="mt-3.5">
      <label htmlFor={id} className="block font-mono text-[11px] font-bold tracking-[0.18em] uppercase text-label mb-2">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="glass-input w-full min-h-[50px] px-4 text-[15px]"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

/** Coverage checker — CLIENT island driven by repository data (props). */
export function CoverageChecker({ coverage }: { coverage: CoverageTree }) {
  const [county, setCounty] = useState("");
  const [town, setTown] = useState("");
  const [area, setArea] = useState("");
  const [msg, setMsg] = useState("");

  const towns = useMemo(() => (county ? Object.keys(coverage[county] ?? {}) : []), [coverage, county]);
  const areas = useMemo(
    () => (county && town ? coverage[county]?.[town] ?? [] : []),
    [coverage, county, town]
  );

  return (
    <div>
      <Select id="covCounty" label="County" value={county} options={Object.keys(coverage)} placeholder={PH.county}
        onChange={(v) => { setCounty(v); setTown(""); setArea(""); setMsg(""); }} />
      <Select id="covTown" label="Town" value={town} options={towns} placeholder={PH.town}
        onChange={(v) => { setTown(v); setArea(""); setMsg(""); }} />
      <Select id="covArea" label="Area" value={area} options={areas} placeholder={PH.area}
        onChange={(v) => { setArea(v); setMsg(""); }} />
      <div className="mt-[18px]">
        <Button
          type="button"
          onClick={() =>
            setMsg(
              county && town && area
                ? `Good news — ${area}, ${town} falls inside the BNC configurable coverage footprint. Our team will confirm availability for your exact building.`
                : "Please select county, town and area to check coverage."
            )
          }
        >
          Check Coverage
        </Button>
      </div>
      {msg ? (
        <p role="status" className="mt-3.5 font-mono text-[13.5px] text-brand">
          {msg}
        </p>
      ) : null}
    </div>
  );
}
