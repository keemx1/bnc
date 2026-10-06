import Link from "next/link";
import { Eyebrow } from "./section-head";

/** Breadcrumb hero shared by inner pages — server component. */
export function PageHero({
  crumb,
  eyebrow,
  title,
  lede,
}: {
  crumb: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#EAF6FD] to-paper border-b border-line">
      <div aria-hidden="true" className="absolute inset-0 blueprint opacity-70" />
      <div className="relative mx-auto max-w-[1200px] px-6 py-16 lg:py-[64px]">
        <p className="font-mono text-xs tracking-[0.1em] text-faint mb-4">
          <Link href="/" className="text-brand hover:underline">
            Home
          </Link>{" "}
          / {crumb}
        </p>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 text-navy font-extrabold uppercase leading-[1.04] tracking-[-0.035em] text-[clamp(40px,6vw,72px)]">
          {title}
        </h1>
        {lede ? <p className="mt-4 text-muted text-lg max-w-[62ch]">{lede}</p> : null}
      </div>
    </div>
  );
}
