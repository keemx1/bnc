import { WA } from "@/lib/site";
import { Button } from "./ui/button";

/** Navy closing CTA — server component. */
export function FinalCta({
  title = "Ready to get connected?",
  copy = "Home. Business. Wholesale. Security. — one bridge, zero drama.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="pb-[88px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="relative overflow-hidden glass-card !rounded-[28px] text-center px-7 py-16 lg:p-16">
          <p aria-hidden="true" className="absolute top-[22px] inset-x-0 font-mono text-[11px] tracking-[0.4em] text-brand/30 whitespace-nowrap">
            FAST • STABLE • UNLIMITED • FAST • STABLE • UNLIMITED
          </p>
          <h2 className="text-navy font-extrabold uppercase leading-[1.04] tracking-[-0.035em] text-[clamp(32px,5vw,56px)]">
            {title}
          </h2>
          <p className="text-muted mt-3.5 mb-[30px]">{copy}</p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Button href={WA.general}>Get Connected</Button>
            <a
              href={WA.contact}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white border-2 border-white text-navy font-extrabold text-[15.5px] min-h-[52px] px-7 hover:-translate-y-0.5 transition-all"
            >
              Contact BNC
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
