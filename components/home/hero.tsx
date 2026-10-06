import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "../section-head";
import { Button } from "../ui/button";
import { WHOLESALE_BASE_RATE, WA } from "@/lib/site";
import { kes } from "@/lib/utils";

/**
 * Split hero — server component. Visual is inline SVG (zero image bytes,
 * no layout shift), fiber trails are pure CSS.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF6FD] to-paper pt-[72px] pb-10">
      <div aria-hidden="true" className="absolute inset-0 blueprint blueprint-fade" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[120px] overflow-hidden">
        <i className="fiber-trail top-[56px]" />
        <i className="fiber-trail top-[72px] [animation-delay:1.6s] [animation-duration:6.5s]" />
        <i className="fiber-trail top-[40px] [animation-delay:3s] [animation-duration:7.5s]" />
      </div>
      <div className="relative mx-auto max-w-[1200px] px-6 grid gap-14 items-center lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Eyebrow>Internet • Business • Wholesale • CCTV</Eyebrow>
          <h1 className="mt-[18px] mb-5 text-navy font-extrabold uppercase leading-[1.04] tracking-[-0.035em] text-[clamp(46px,7.2vw,88px)]">
            Fast. Stable.
            <span className="block text-brand">Unlimited.</span>
          </h1>
          <p className="text-muted text-lg max-w-[46ch]">
            Reliable internet connectivity for homes, businesses and network providers across
            Kenya — carried on one clean digital bridge.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-[30px]">
            <Button href={WA.home}>Get Home Internet</Button>
            <Button href={WA.wholesale} variant="ghost">
              Wholesale Bandwidth
            </Button>
          </div>
          <dl className="flex flex-wrap gap-[26px] mt-[34px] pt-[26px] border-t-[1.5px] border-dashed border-linestrong">
            {[
              ["15–50 Mbps", "Home fiber range"],
              [`${kes(WHOLESALE_BASE_RATE)}/Mbps`, "Wholesale starting rate"],
              ["24/7", "Kenyan support"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="text-navy font-extrabold text-[22px] tracking-tight">{v}</dd>
                <dd className="font-mono text-[11px] tracking-[0.16em] uppercase text-faint">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="relative rounded-[26px] overflow-hidden border-[1.5px] border-linestrong shadow-[0_26px_60px_-24px_rgba(13,130,192,0.38)]">
            <Image
              src="/family-photo.jpg"
              alt="Kenyan family enjoying fast BNC home internet together on the sofa"
              width={2048}
              height={1366}
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="block w-full h-auto"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy/70 to-transparent"
            />
            <p className="absolute bottom-4 left-4 font-mono text-[11px] tracking-[0.2em] text-white bg-white/15 backdrop-blur-md border border-white/40 rounded-full px-4 py-2">
              NAIROBI • HOME • LIVE
            </p>
          </div>
          <div className="absolute top-[22px] -left-1 sm:left-[-26px] flex items-center gap-3 glass-card !rounded-[14px] px-4 py-3 text-[13.5px]">
            <span aria-hidden="true" className="dot-live" />
            <span>
              <strong>Network stable</strong>
              <br />
              <span className="font-mono text-[11px] text-faint">RESIDENTIAL • BUSINESS • WHOLESALE</span>
            </span>
          </div>
          <div className="absolute bottom-[26px] -right-1 sm:right-[-14px] flex items-center gap-3 glass-card !rounded-[14px] px-4 py-3 text-[13.5px]">
            <span aria-hidden="true" className="speed-ring grid place-items-center w-11 h-11 rounded-full border-[3px] border-line border-t-cyan font-mono text-[9px] font-bold text-navy">50M</span>
            <span>
              <strong>Free installation</strong>
              <br />
              <span className="font-mono text-[11px] text-faint">ON ALL HOME PLANS</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Navy ticker strip — pure CSS animation, aria-hidden duplication. */
export function Ticker() {
  const items = "FAST • STABLE • UNLIMITED • HOME FIBER • BUSINESS • WHOLESALE FROM KSH 161/MBPS • CCTV • ";
  return (
    <div className="bg-navy text-[#DFF2FD] overflow-hidden border-y border-[#0E3A66]" aria-hidden="true">
      <div className="ticker-track flex whitespace-nowrap py-[13px] font-mono text-[12.5px] tracking-[0.24em] font-bold w-max">
        <span className="px-0">{items.repeat(3)}</span>
        <span className="px-0">{items.repeat(3)}</span>
      </div>
    </div>
  );
}

export function ServiceGridHeader() {
  return (
    <p className="text-muted">
      Not a dashboard, not an app — a working ISP.{" "}
      <Link href="/coverage" className="text-brand font-bold underline underline-offset-4">
        Check your coverage
      </Link>{" "}
      to start.
    </p>
  );
}
