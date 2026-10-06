import { SITE } from "@/lib/site";
import { SectionHead } from "../section-head";

const WHY = [
  { n: "/ 01", t: "Reliable network", c: "Stable connectivity built for everyday use — rain or shine." },
  { n: "/ 02", t: "Fast speeds", c: "High-performance internet for modern Kenyan lifestyles." },
  { n: "/ 03", t: "Local support", c: `A Kenyan team ready to help — ${"0112240649"}.` },
  { n: "/ 04", t: "Scalable solutions", c: "From single homes to large network operators." },
];

/** Why-BNC strip — server component. */
export function WhyGrid() {
  return (
    <section aria-labelledby="why-h">
      <div className="mx-auto max-w-[1200px] px-6 py-[88px]">
        <SectionHead
          index="03 — Why BNC"
          eyebrow="More than internet"
          title={
            <span id="why-h">
              More than internet.
              <br />
              <span className="text-brand">A digital bridge.</span>
            </span>
          }
        />
        <div className="grid glass-card !rounded-[18px] overflow-hidden sm:grid-cols-2 xl:grid-cols-4">
          {WHY.map((w, i) => (
            <div
              key={w.n}
              className={
                "p-[34px_28px] " +
                (i > 0 ? "border-t-[1.5px] sm:border-t-0 border-line " : "") +
                (i % 2 === 1 ? "sm:border-l-[1.5px] " : "") +
                (i > 0 ? "xl:border-l-[1.5px] xl:border-t-0 " : "") +
                "sm:border-line"
              }
            >
              <b className="block font-mono text-cyan text-xs tracking-[0.2em] mb-3.5">{w.n}</b>
              <h3 className="text-navy font-extrabold text-[19px] tracking-tight mb-2.5">{w.t}</h3>
              <p className="text-muted text-[14.5px]">
                {w.n === "/ 03" ? (
                  <>
                    A Kenyan team ready to help —{" "}
                    <a href={SITE.phoneHref} className="text-brand font-bold">
                      {SITE.phoneDisplay}
                    </a>
                    .
                  </>
                ) : (
                  w.c
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
