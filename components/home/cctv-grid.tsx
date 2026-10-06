import { CCTV_SERVICES, WA } from "@/lib/site";
import { SectionHead } from "../section-head";
import { Button } from "../ui/button";

/** CCTV grid — server component. */
export function CctvGrid() {
  return (
    <section aria-labelledby="cctv-h" className="pb-[88px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHead
          index="06 — CCTV & Security"
          eyebrow="Cameras • Cabling • Monitoring"
          title={
            <span id="cctv-h">
              Protect
              <br />
              <span className="text-brand">what matters.</span>
            </span>
          }
          lede="CCTV riding on BNC's connectivity muscle — clean cabling, remote viewing, real maintenance."
        />
        <div className="grid gap-[18px] sm:grid-cols-2 xl:grid-cols-3">
          {CCTV_SERVICES.map((c) => (
            <div
              key={c.title}
              className="glass-card p-[26px] hover:-translate-y-1 hover:border-[rgba(0,160,220,0.30)]"
            >
              <span
                aria-hidden="true"
                className="grid place-items-center w-[52px] h-[52px] rounded-full bg-gradient-to-br from-[#E3F4FC] to-[#C9EAFB] border-[1.5px] border-linestrong text-brand text-xl"
              >
                {c.glyph}
              </span>
              <h3 className="text-navy font-extrabold text-lg tracking-tight mt-3.5 mb-1.5">{c.title}</h3>
              <p className="text-muted text-[14.5px]">{c.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-[26px]">
          <Button href={WA.cctv}>
            Request CCTV Installation
          </Button>
        </div>
      </div>
    </section>
  );
}
