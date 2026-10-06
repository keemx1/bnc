import { cn } from "@/lib/utils";

/** Mono eyebrow label with cyan tick — the site's recurring section marker. */
export function Eyebrow({
  children,
  dark = false,
  className,
}: {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[11.5px] font-bold tracking-[0.22em] uppercase",
        dark ? "text-ice" : "text-brand",
        className
      )}
    >
      <span aria-hidden="true" className="w-[26px] h-[2px] rounded bg-cyan" />
      {children}
    </span>
  );
}

/** Numbered section heading row: index + display H2 + optional lede. */
export function SectionHead({
  index,
  eyebrow,
  title,
  lede,
  dark = false,
  centered = false,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  dark?: boolean;
  centered?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-end gap-4 mb-10",
        centered ? "justify-center text-center" : "justify-between"
      )}
    >
      <div className={centered ? "w-full" : undefined}>
        <span className="block font-mono text-xs tracking-[0.2em] text-faint mb-3">{index}</span>
        <Eyebrow dark={dark} className={centered ? "justify-center" : undefined}>
          {eyebrow}
        </Eyebrow>
        <h2
          className={cn(
            "mt-3 text-[clamp(30px,4.4vw,50px)] font-extrabold uppercase leading-[1.04] tracking-[-0.035em]",
            dark ? "text-white" : "text-navy"
          )}
        >
          {title}
        </h2>
      </div>
      {lede ? (
        <p className={cn("max-w-[60ch] text-[clamp(16px,1.6vw,19px)]", dark ? "text-[#A9CBE4]" : "text-muted")}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}
